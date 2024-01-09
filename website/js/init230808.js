var ajaxPath = 'https://event.games.wanmei.com';

function downResize(){
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if(w < 1700){
		$('.down_box').css({
			'left': 'auto',
			'right': 0,
			'margin-left': 0
		});
	}else{
		$('.down_box').removeAttr('style');
	}
}
downResize();
window.addEventListener('resize', function() {
	downResize();
});

//国际区号
var opt = '';
$.each(city,function(){
	if(this.num == '0086'){
		opt += '<option selected value="">'+ this.name +'&nbsp;&nbsp;'+ this.num +'</option>';
	}else{
		opt += '<option value="'+ this.num +'">'+ this.name +'&nbsp;&nbsp;'+ this.num +'</option>';
	}
});
$('.tel_area').html(opt);

function getParams(url) {
    var theRequest = new Object();
    if(!url){
        url = location.href;
    }
    if(url.indexOf("?") !== -1){
        var str = url.substr(url.indexOf("?") + 1) + "&";
        var strs = str.split("&");
        for (var i = 0; i < strs.length - 1; i++)
        {
            var key = strs[i].substring(0, strs[i].indexOf("="));
            var val = strs[i].substring(strs[i].indexOf("=") + 1);
            theRequest[key] = val;
        }
    }
    return theRequest;
}
var params = getParams();
var anchor = params.anchor;
var entrance = params.entrance || 'p5xQues';
console.log('entrance:',entrance);

if(anchor){
	$('body, html').animate({ scrollTop: $('#' + anchor).offset().top - 150}, 200);
}

//导航
$('.top_nav').on('click',function(){
	$('body, html').animate({ scrollTop: $($.attr(this,'href')).offset().top - 150}, 200);
	return false;
});

//返回顶部
$(window).scroll(function(){
	var t = $(window).scrollTop();
	var h = $(window).height();
	
	if(t > 900){
		$('.go_top').stop(true,true).fadeIn();
	}else{
		$('.go_top').stop(true,true).fadeOut();
	}

	if(t + h <= $('.wmgameFooter').offset().top){
		$('.go_top, .go_back').css('position','fixed');
	}else{
		$('.go_top, .go_back').css('position','absolute');
	}
});
$('.go_top').on('click',function(){
	$('body, html').animate({ scrollTop: 0}, 200);
});



function rangeRandom(start,end){
    return Math.random()*(end-start+1)+start;
};


$('.fixed_bg').append('<video loop autoplay muted src="https://gamesvmg.wmupd.com/webops/p5x_bgstar_20230301.MP4"></video>');

//关闭弹窗
$('.pop_close').on('click',function(){
	$(this).closest('.pop').fadeOut();
});


var yy_t = setInterval(function(){
	if($('.yy_btn').hasClass('off')){
		clearInterval(yy_t);
	}else{
		$('.yy_btn').toggleClass('tada');
	}
},5000)

$('.yy_btn').on('click',function(){
	// if($(this).hasClass('off')){
	// 	return false;
	// }
	if(loginInfo){
		getQuesLog();
	}
	$('#pop_yy').fadeIn();
	$('.box1_yy_btn').css('animation-play-state','paused');
});


$('#pop_yy .pop_close').on('click',function(){
	$('.box1_yy_btn').css('animation-play-state','running');
});

//获取问卷日志
function getQuesLog(){
	$.ajax({
	    type: "GET",
	    url: ajaxPath + '/m/p5x/ques/getQuesLog',
	    dataType: "jsonp",
	    success: function(res){
	    	console.log('获取问卷日志',res);
	    	if(res.success){
	            if(res.result.quesLog){//已提交过问卷
	            	$('.state3_qa_before').hide();
	            	$('.state3_qa_after').show();
	            	$('.state3_qa_btn').addClass('on');
	            }else{
	            	$('.state3_qa_btn').attr('href','https://surveys.games.wanmei.com/survey/ZBrimm?token=' + res.result.token);
	            	$('.state3_qa_btn').attr('target','_blank');
	            }
	        }else{
	            alert(res.message);
	        }
	    }
	});
}
//(修改/提交)报名信息
$('.change_sel_btn').on('click',function(){
	$('.yy_state2_tit').addClass('on');//标题为修改报名信息
	$('.pop_yy_state').hide();
	$('.pop_yy_state2').show();
});










