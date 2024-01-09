$.fn.shapeFocus = function(options){

	if(!options.position){ return }

	var lockState = true

	var $this = this,
		$prevBtn = $this.find('.prev-btn'),
		$nextBtn = $this.find('.next-btn'),
		$sliderPanel = $this.find('.slider-panel')

	var distance = $this.height() / 2

	var delay = options.delay || 3000

	var transitionTime = 200

	var sliderLength = $sliderPanel.find('.slider').length,
		visibleLength = Math.min(sliderLength,options.position.length)

	var basePosition = options.position.slice(0,visibleLength)

	var isClone = visibleLength == $sliderPanel.find('.slider').length

	function cleanAttr($target){
		if(!$target || !$target.length){ return }
		$target.removeClass('visible').removeAttr('data-angle').removeAttr('data-x').removeAttr('data-y').removeAttr('style')
	}

	function getCurPosition(state){
		var result = basePosition.splice(0,1)[0]
		basePosition.push(result)
		return result
	}
	function positionReset(){
		var result = basePosition.splice(basePosition.length - 1,1)[0]
		basePosition.unshift(result)
	}

	function getTransition(){
		var keys = ['left','top','transform','opacity']
		var result = []
		$.each(keys,function(i,key){
			result.push(key + ' ' + (transitionTime / 1000) + 's ease-in')
		})
		return result.join(',')
	}

	function getScaleByZindex(zIndex){
		return zIndex / sliderLength / 10 + .9
	}
	function getInfoByPosition(index){
		//获取当前坐标
		var pos = getCurPosition()
		var zIndex = sliderLength - index
		return {
			attr : {
				angle : pos.angle,
				x : pos.x,
				y : pos.y
			},
			css : {
				left : pos.x,
				top : pos.y,
				transform: 'rotate(' + pos.angle + 'deg) scale(' + getScaleByZindex(zIndex) + ')',
				opacity : 1,
				zIndex : zIndex
			}
		}
	}
	function initSetting(){
		var $slider = $sliderPanel.find('.slider')
		for(var i = 0; i < visibleLength; i++){
			var info = getInfoByPosition(i)
			//设置样式和属性
			$slider.eq(i).css(info.css).attr({
				'data-angle' : info.attr.angle,
				'data-x' : info.attr.x,
				'data-y' : info.attr.y
			}).addClass('visible')
		}
	}
	function leave(fn){
		var $target = $sliderPanel.find('.slider').last()
		//获取属性
		var x = Number($target.attr('data-x')),
			y = Number($target.attr('data-y')),
			angle = Number($target.attr('data-angle'))
		$target.css({
			opacity : '',
			top : '',
			transform : ''
		})
		setTimeout(function(){
			if(isClone){
				$target.remove()
			}else{
				cleanAttr($target)
			}
			fn && fn()
		},transitionTime)
	}
	function enter(){
		var $slider = $sliderPanel.find('.slider')
		for(var i = 0; i < visibleLength; i++){
			var $target = $slider.eq(i)
			if(i == visibleLength - 1){
				var info = getInfoByPosition(i)
				//设置样式和属性
				$target.css(info.css).attr({
					'data-angle' : info.attr.angle,
					'data-x' : info.attr.x,
					'data-y' : info.attr.y
				}).addClass('visible')
			}else{

				var zIndex = sliderLength - i
				$target.css({
					zIndex : zIndex,
					transform: 'rotate(' + $target.attr('data-angle') + 'deg) scale(' + getScaleByZindex(zIndex) + ')',
				})
			}
		}
	}
	function enterAndLeave(state){
		if(!lockState){ return }
		lockState = false

		if(state){
			var $target = $sliderPanel.find('.slider').first()
			$sliderPanel.append($target)
			if(isClone){
				$sliderPanel.append($target.clone())
			}

			setTimeout(function(){
				enter()
				leave(function(){
					lockState = true
				})
			},16)
		}else{
			var $target = $sliderPanel.find('.slider').last()
			$sliderPanel.prepend($target)
			if(isClone){
				$sliderPanel.append($target.clone())
			}else{
				cleanAttr($sliderPanel.find('.slider').eq(visibleLength))
			}
			cleanAttr($target)
			positionReset()

			setTimeout(function(){
				if(isClone){
					$sliderPanel.find('.slider').last().remove()
				}
				initSetting()
				lockState = true
			},16)
		}
		
	}
	$prevBtn.on('click',function(){
		enterAndLeave(false)
	})
	$nextBtn.on('click',function(){
		enterAndLeave(true)
	})

	initSetting()
}
$('.shape-focus').shapeFocus({
	position : [
		{
			x : 0,
			y : 0,
			angle : 7
		},
		{
			x : 40,
			y : 10,
			angle : 1
		},
		{
			x : 65,
			y : 45,
			angle : 8
		}
	]
})