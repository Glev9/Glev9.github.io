// loading动画
$('.loading_mask').animate({ width: '326px' }, 3000, 'linear', function() {
    $('.loading_box').addClass('on')
    setTimeout(function() {
        $('.subtitle_box').addClass('on')
    }, 700)
})

$('#jixu').parallax()
$('#pixi_box').parallax()
$('#entertime_bg').parallax()

var isClickCoffee = false // 是否点击咖啡店
// 字幕动画
var subtitle = anime
    .timeline({
        targets: '.subtitle01_mask',
        delay: 1000,
        duration: 1000,
        easing: 'easeOutElastic(1, .8)',
    })
    .add({
        opacity: { value: 1, delay: 3000, easing: 'easeInOutExpo' },
    })
    .add({
        translateY: { value: '-20vh', easing: 'easeInOutExpo' },
        translateX: { value: '-40vh', easing: 'easeInOutExpo' },
        opacity: { value: 0.5, delay: 1000, easing: 'easeInOutExpo' },
        rotateZ: { value: -30, delay: 1000, easing: 'easeInOutExpo' },
    })

$('.jixu_btn').on('click', function() {
        $('.music').addClass('play');
        $('.music').children("img").hide();
        musicBg.play();
        $(this).hide()
        $('.subtitle_box').hide()
        $('.main_box').fadeIn(3000)
        $(".prompt").show();
        if (!$.cookie('pintu')) {
            setTimeout(function() {
                $('.dialog_box1').fadeIn();
            }, 2000)
            setTimeout(function() {
                $(".star01").addClass('on');
            }, 15000)
        }

    })
    // 第一个游戏玩过
if ($.cookie('pintu')) {
    $('.subtitle_box').removeClass('on');
    $('.subtitle_box').hide();
    setTimeout(function(){
        $('.main_box').fadeIn(3000)
        $('.nav_box').show();
        $('.nav_box').animate({ right: '0px' }, 500, 'linear')
        $(".nav01").addClass("on");
    },3000)
    $('.video_star_box').show();
    $('.video_star').hide();
    $('.shard_card').hide()
    $('.pin_card').show();
    $('.tv_view').show();
    $('.dialog_box11').show();
    $('.magazine_star').show()
    $('.zazhi').addClass('on');
    $(".prompt").hide();
    $("#pixi_box .pixi_bg2").css({ 'background': 'url(./images/bg2-2.png) no-repeat' })
}

// svg动画
var socialTimeline = anime.timeline({
    autoplay: true,
    direction: 'alternate',
    loop: true,
})
socialTimeline.add({
    targets: '.polymorph',
    points: [
        { value: '191 42 48 110 0 56 176 0 191 42' },
        { value: '195 39 45 111 0 55 172 0 195 39' },
        { value: '198 43 49 115 0 59 185 0 198 43' },
        { value: '191 37 51 104 0 51 163 0 191 37' },
        { value: '192 42 50 110 0 56 178 0 192 42' },
    ],
    easing: 'easeOutQuad',
    duration: 4000,
    loop: true,
})

// 音效
var musicList = [
    'https://gamesvmg.wmupd.com/webops/p5_ok_video.mp3', //check出现
    'https://gamesvmg.wmupd.com/webops/p5_confirm.mp3', //确认按钮
    'https://gamesvmg.wmupd.com/webops/p5_fail.mp3', //失败
    'https://gamesvmg.wmupd.com/webops/p5_talk.mp3', //对话
    'https://gamesvmg.wmupd.com/webops/p5_keymusic_20221101.mp3', //开锁
    'https://gamesvmg.wmupd.com/webops/p5_newclear.mp3', //newclear
    'https://gamesvmg.wmupd.com/webops/p5_ok_video.mp3' //通用
];

//music
var musicClick = document.getElementById('click_music');
var musicBg = document.getElementById('bg_music');
var musicGame = document.getElementById('game_music');
var isPlayMusic = false;
// 对话
$(".jixu_btn, .shard_card, .magazine_star").on("click", function() {
        musicClick.src = musicList[6];
        musicClick.play();
    })
    // 通用
$(".jixu2_btn, .text_blank_bg span, .text_list span, .repeat_btn, .wake_up").on("click", function() {
        musicClick.src = musicList[6];
        musicClick.play();
    })
    // check出现
$(".shard_card, .video_star, .magazine_star, .key_star, .case_star, .pad_star").mouseenter(function() {
    musicClick.src = musicList[0];
    musicClick.play();
}).mouseleave(function() {
    musicClick.pause()
});


// 失败
$(".giveup_btn").on("click", function() {
        musicClick.src = musicList[2];
        musicClick.play();
    })
    // 确认按钮
$(".submit_btn, .lock_success").on("click", function() {
        musicClick.src = musicList[1];
        musicClick.play();
    })
    // newclear
$(".closeBtn").on("click", function() {
        musicClick.src = musicList[5];
        musicClick.play();
    })
    // 开箱子
$(".password").on("click", function() {
    musicClick.src = musicList[4];
    musicClick.play();
})

var music = document.getElementById('bg_music'),
    musicFlag = true,
    muiscHand = true;

// $('.music').on("click",function(){
//     if(musicFlag){
//         musicFlag = false;
//         $(this).addClass('play');
//         musicBg.play();
//         $(this).children("img").hide();
//     }else{
//         musicFlag = true;                   
//         $(this).removeClass('play');
//         musicBg.pause();
//         $(this).children("img").show();
//     }
// });   

$('.music').on("click", function() {
    if (musicFlag) {
        musicBg.pause();
        muiscHand = false;
    } else {
        musicBg.play();
        muiscHand = true;
    }
    console.log(muiscHand)
});
music.addEventListener("play", function() {
    //在这里写代码
    musicFlag = true;
    $('.music').addClass('play');
    $('.music').children("img").hide();
});
music.addEventListener("pause", function() {
    //在这里写代码
    console.log('pause')
    musicFlag = false;
    $('.music').removeClass('play');
    $('.music').children("img").show();
});
// 对话界面
// let app = new PIXI.Application({width:window.innerWidth, height:window.innerHeight});
// document.getElementById('pixi_box').appendChild(app.view);

// var img = new PIXI.Sprite.from("./images/main_bg.jpg");
// img.width = window.innerWidth;
// img.height = window.innerHeight;
// app.stage.addChild(img);

// var depthMap = new PIXI.Sprite.from('./images/bg_mask3.jpg');
// app.stage.addChild(depthMap);

// displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
// app.stage.filters = [displacementFilter];

// window.onmousemove = function(e){
//  displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) /80;
//  displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) /80;

// }

// 对话遮罩
// if ($('.dialog_box11').css('display') == 'block') {
//     $(".prompt").show();
// } else {
//     $(".prompt").hide();
// }

// 游戏一对话内容
var iscurnum = 0;
$('.dialog_box1 .jixu2_btn').on('click', function() {
    iscurnum++;
    if (iscurnum <= 1) {
        $('.dialog_box1 .dialog1').attr('src', 'images/dialog1-1.png')
    }else{
        $('.dialog_box1').hide()
        $('.dialog_box1-1').show()
        $('.shard').show() 
    }
    
})


$('.dialog_box1-1 .jixu2_btn').on('click', function() {
    $('.dialog_box1-1').hide()
    $(".prompt").hide();
    $('.shard01').hide()
    // $('.dialog_box1-2').show()
    $('.nav_box').show();
    $('.nav_box').animate({ right: '0px' }, 500, 'linear')
    $(".nav01").addClass("active");
})
    // $('.dialog_box1-2 .jixu2_btn').on('click', function() {
    //     $('.dialog_box1-2').hide()
    //     $('.dialog_box1-3').show()
    //     $('.shard02').hide()
    // })
    // $('.dialog_box1-3 .jixu2_btn').on('click', function() {
    //     $('.dialog_box1-3').hide()
    //     $('.dialog_box1-4').show()
    //     $('.shard03').hide()
    // })
    // $('.dialog_box1-4 .jixu2_btn').on('click', function() {
    //     $('.dialog_box1-4').hide()
    //     $('.shard04').hide()
    //     $('#shard_share').fadeIn()
    // })


// 点击碎片
var shardList = [
    'images/dialog1-2.png',
    'images/dialog1-3.png',
    'images/dialog1-4.png',
]

var shardNum = 0
var curShard
$('.shard_card').on('click', function() {
    $(this).hide();
    curShard = $(this).attr('class').split(' ')[0]
    $('.' + curShard).hide()
    $('.dialog_box2').show()
    var picnum = shardNum + 2;
    $('.pic_kuang img').attr('src', "images/dialog_pic" + picnum + ".png")
    $('.dialog_box2 .dialog1').attr('src', shardList[shardNum])
    shardNum++
})

// 点击碎片关闭对话
$('.dialog_box2 .jixu2_btn').on('click', function() {
    if (shardNum == 3) {
        $('#shard_share').show()
        setTimeout(function() {
            $('#shard_share .cursor_icon').hide();
        }, 4000)
    }
    $('.dialog_box2').hide()
    $('.' + curShard).hide()

})

$(".pin_card").on("click", function() {
    $('.dialog_box12').show()
})

var isclickdialog = 0
$('.dialog_box12 .jixu2_btn').on('click', function() {
    if(!isClickCoffee) { // 没点咖啡店
        isclickdialog++;
        if (isclickdialog <= 1) {
            $('.dialog_box12').hide()
            $(".prompt").show();
            $('.dialog_box12').hide()
            $('.dialog_box3').show()
            $('.video_star_box').show()
            $('.tv_view').fadeIn(1000)
        } else {
            $('.dialog_box12').hide()
        }
    }
})

$('.dialog_box3 .jixu2_btn').on('click', function() {
        $('.dialog_box3').hide()
        $(".prompt").hide();

    })
    // 拼图游戏
$("#shard_share .pin").on("click", function() {
    $(this).hide();
    var pinIndex = $(this).index() + 1;
    $(".shard_img" + pinIndex).addClass('on');
})

var isSubmit = false

// 放弃拼图
$('#shard_share .giveup_btn').on('click', function() {
    shardNum--
    $("#shard_share").hide();
    if (!isSubmit) {
        $(".shard04").show();
    }

});
// 提交
$('#shard_share .submit_btn').on('click', function() {
        var shardLength = $('#shard_share .shard_img.on').length;
        console.log(shardLength);
        if (shardLength < 4) {
            $('.pin_false').addClass('on');
            setTimeout(function() {
                $('.pin_false').removeClass('on')
            }, 2000)
        } else {
            $(".shard").hide();
            $('#shard_share').hide()
            $('.nav01').addClass('on')
            $(".nav02").addClass("active");
            $(".dialog_box12").show();
            $(".pin_card").show();
            isSubmit = true
        }

    })
    // 视频弹窗
var isvideoOpen = 1;
var popV = document.getElementById('pop_v')
$('.video_star_box').click(function() {
    isvideoOpen++;
    musicBg.pause();
    var vSrc = $(this).attr('vsrc')
    popV.src = vSrc
    $('#pop_video').fadeIn()
    popV.play()
        // 第一个拼图游戏 提交成功 保存 cookie
    $.cookie('pintu', 1, { expires: 1 });
})
$('#close_video').click(function() {
        console.log(isvideoOpen);
        if (isvideoOpen > 2) {

            popV.pause()
            $('#pop_video').fadeOut()
            $('.video_star_box .video_star').hide()
                // $('.magazine_star').hide()
                // $("#pixi_box .pixi_bg2").css({'background': 'url(./images/bg2-3.png) no-repeat'})
            $("#pixi_box .pixi_bg2").css({ 'background': 'url(./images/bg2-2.png) no-repeat' })
            $('.zazhi').addClass('on')
        } else {

            popV.pause()
            $('#pop_video').fadeOut()
            $('.video_star_box .video_star').hide()
            $('.dialog_box11').show()
            $(".prompt").show()
            $('.magazine_star').show()
                // $("#pixi_box .pixi_bg2").css({'background': 'url(./images/bg2-3.png) no-repeat'})
            $("#pixi_box .pixi_bg2").css({ 'background': 'url(./images/bg2-2.png) no-repeat' })
            $('.zazhi').addClass('on')
        }

        if (muiscHand) {
            musicBg.play();
        }
    })
    // 在找找线索关闭
$('.dialog_box11 .jixu2_btn').on('click', function() {
        $('.dialog_box11').hide()
        $(".prompt").hide()

        // $('.magazine_star').show()
    })
    // 填字游戏
$('.magazine_star').on('click', function() {
    $('.dialog_box7').show()
    $(".prompt").show();
})
$('.dialog_box7 .jixu2_btn').on('click', function() {
    $('.dialog_box7').hide()
    $(".prompt").hide();
    $('#text_game').show()
    musicBg.pause();
    if (!musicFlag) {
        musicGame.pause();
    } else {
        musicGame.play();
    }

})

$("#text_game .giveup_btn").on("click", function() {
    musicGame.pause();
    if (muiscHand) {
        musicBg.play();
    }

})



$('.dialog_box4 .jixu2_btn').on('click', function() {
    $('.dialog_box4').hide()
    $(".prompt").hide();
    $('.magazine_star').hide()
    $('.dialog_box8').show()
        // 第二个填字游戏 提交成功 保存 cookie
    $.cookie('tianzi', 1, { expires: 1 });
})
$('.dialog_box8 .jixu2_btn').on('click', function() {
    if (!isClickCoffee) {
        $('.dialog_box8').hide()
        $('.keys_icon').show()
        $('.key_star').show()
        $('.case_star').show()
        $('.dialog11').attr('src', 'images/dialog20.png')
        $('.dialog_box11').show()
        $(".prompt").show();
    }
})
    // $('#role_share .closeBtn').on('click', function() {
    //     $('#role_share').hide()
    //     $('.keys_icon').show()
    //     $('.key_star').show()
    //     $('.case_star').show()
    //     $('.dialog_box11').show()
    //     $(".prompt").show();
    // })

// 第二个游戏玩过
if ($.cookie('tianzi')) {
    $(".nav02").addClass("on");
    $('.keys_icon').show()
    $('.key_star').show()
    $('.case_star').show()
    $('.dialog_box11').show()
    $('.dialog11').attr('src', 'images/dialog20.png')
    $('.magazine_star').hide();
}

// 开锁游戏
var isclick = false;
$('.key_star').on('click', function() {
    isclick = true;
    $(this).hide();
    $(".keys_icon").hide();
    $('.dialog_box5-2').show()
    $(".prompt").show();
    $('.dialog_box5-2 .dialog5').attr('src', 'images/dialog9.png')
})

$('.case_star').on('click', function() {
    if (isclick) {
        $('.dialog_box5').show()
        $(".prompt").show();
        $('.dialog_box5 .dialog5').attr('src', 'images/dialog10.png')
    } else {
        $('.dialog_box5').show()
        $(".prompt").show();
        $('.dialog_box5 .dialog5').attr('src', 'images/dialog8.png')
    }

})

$('.dialog_box5 .jixu2_btn').on('click', function() {
    if (isclick) {
        $('.dialog_box5').hide()
        $(".prompt").hide();
        $('#key_game').show()
        setTimeout(function() {
            $(".cursor_icon").fadeOut();
        }, 4000)
    } else {
        $('.dialog_box5').hide()
        $(".prompt").hide();
    }
})

$('.dialog_box5-2 .jixu2_btn').on('click', function() {
    $('.dialog_box5-2').hide()
    $(".prompt").hide();

})

// 开锁游戏
// $('#key_game .lock_success').on('click', function() {
//     $('#key_game').hide()
//     $('.dialog_box9').show()
//     $('.pixiang2').show()
//     $('.nav03').addClass('on')
//     $(".nav04").addClass("active");
//     $("#pixi_box .pixi_bg2").css({ 'background': 'url(./images/bg2-2.png) no-repeat' })
// })

$(".dialog_box9 .jixu2_btn").on("click", function() {
    if (!isClickCoffee) {
        if ($('.gongdian_pic').hasClass('on')) {
            $('.dialog_box9').hide()
            $('.dialog_box6').show()
            $(".prompt").show();
        } else {
            $(".case_on").fadeOut();
            $(".dialog_box9 .gongdian_pic").addClass('on');
            $(".dialog_box9 .share_piclink").show();
            $('.dialog_box9 .dialog9').attr('src', 'images/dialog15.png')
            $('.dialog_box9 .share_tip2').addClass('on');
        }
    }
})

// $(".dialog_box9-2 .jixu2_btn").on("click", function() {
//     $('.dialog_box9-2').hide()
//     $('#gongdian_share').fadeIn()
// })

// $('#gongdian_share .closeBtn').on("click", function() {
//     $('#gongdian_share').hide()
//     $('.dialog_box6').show()
//     $(".prompt").show();
// })

$('.dialog_box6 .jixu2_btn').on('click', function() {
    $('.dialog_box6').hide()
    $(".prompt").hide();
    $('.pad_icon').addClass('on')
    $('.pad_star').show()
    $('.case_star').hide()
    $('.key_star').hide()
})

// 第三个游戏玩过
if ($.cookie('kaisuo')) {
    $(".nav03").addClass("on");
    $('.keys_icon').hide()
    $('.key_star').hide()
    $('.case_star').hide()
    $('.dialog_box11').hide()
    $('.dialog_box6').show()
    $('.pixiang2').show();
    $("#pixi_box .pixi_bg1").css({ 'background': 'url(./images/bg1-2.jpg) no-repeat' })
}

var pg = null
$('.pad_star').on('click', function() {
    $('#picBox').show()
    pg = new puzzleGame({
        img: "images/afe.png"
    });
    pg.start()
    pg.play();

});
// 重新挑战
$('.pic_bottom_btn .repeat_btn').on('click', function() {
    pg = new puzzleGame({
        img: "images/afe.png"
    });
    pg.start()
    pg.play();
});
// 拼图游戏
// $('.subtitle_bg').hide()
// $('.main_box').show()
// $('#picBox').show()
// 提交
$('#picBox .submit_btn').on('click', function() {
    if (pg.isSuccess) {
        $('#picBox').hide()
        $('.pad_star').hide()
        $('.pad_icon').removeClass('on');
        $('.dialog_box10').show()
        $('.nav04').addClass('on')
    } else {
        // alert("拼图不正确");
        $(".picpin_false").addClass('on');
        setTimeout(function() {
            $('.picpin_false').removeClass('on')
        }, 2000)
    }

})

var isguainum = 0;
$(".dialog_box10 .jixu2_btn").on("click", function() {
    if (!isClickCoffee) {
        isguainum++;
        if (isguainum <= 1) {
    
            $('.dialog_box10 .dialog10').attr('src', 'images/dialog16.png')
        } else if (isguainum <= 2) {
    
            $('.dialog_box10 .dialog10').attr('src', 'images/dialog16-2.png')
            $('.guaidao_pic img').attr('src', 'images/guaidao_pic2.png')
            $('.dialog_box10 .share_piclink').hide();
            $('.dialog_box10 .share_tip').addClass('on');
    
        } else {
            $('.dialog_box10').hide()
            $('.entertime_box').fadeIn(2000)
        }
    }
})
    // $(".dialog_box13 .jixu2_btn").on("click", function() {
    //     $('.dialog_box13').hide()
    //     $('.entertime_box').show()
    // })


// $('#guaidao_share .closeBtn').on("click", function() {
//     $('#guaidao_share').hide()
//     $('.entertime_box').show()

// })

// 倒计时
var popV2 = document.getElementById('pop_v2')
$('.videoplay_btn').click(function() {
    var vSrc = $(this).attr('vsrc')
    popV2.src = vSrc
    $('#pop_video2').fadeIn()
    popV2.play()
    musicBg.pause();
})
$(".reload_btn").on("click", function() {
    location.reload();
    $.removeCookie('pintu');
    $.removeCookie('tianzi');
    $.removeCookie('kaisuo');
    $.removeCookie('lastPintu');
})
$('.entertime_box .wake_up a').on('click', function() {
    $('.wake_up').hide()
    $('.entertime_box').hide();
    var vSrc = $(this).attr('vsrc')
    popV2.src = vSrc
    $('#pop_video2').fadeIn()
    popV2.play()
    musicBg.pause();
    // 第四个拼图游戏 提交成功 保存 cookie
    $.cookie('lastPintu', 1, { expires: 1 });

    // $('#pop_video2').fadeIn()
    // musicBg.pause();
    // popV2.play()
})
$('#close_video2').click(function() {
    $('#pop_video2').fadeOut()
    popV2.pause();
    if (muiscHand) {
        musicBg.play();
    }
    isClickCoffee = true // 记录点击返回咖啡店标识
    $(".little_countdown").fadeIn();
    $('.case_hot').show();
    $('.nav04').addClass('on')
    $('.pad_icon').addClass('on');
    $('.pin_card span').show();
    $('.zazhi span').show();
    $('.pad_icon span').show();
    $('.case_hot span').show();
})
$('.little_countdown').on('click',function(){
    $('#pop_video2').fadeIn()
    popV2.play()
})
// $('#close_video2').click(function() {
//     $('#pop_video2').fadeOut()
//     $('.entertime_box').hide();
//     popV2.pause();
//     $('.countdown_box').fadeIn(1800)
//     $.cookie('lastPintu', 1, { expires: 1 });
//     if (muiscHand) {
//         musicBg.play();
//     }
// })

// 第四个游戏玩过
if ($.cookie('lastPintu')) {
    $('.dialog_box6').hide()
    isClickCoffee = true // 记录点击返回咖啡店标识
    $('.nav04').addClass('on');
    $('.little_countdown').fadeIn();
    $('.case_hot').show();
    $('.pad_icon').addClass('on');
    $('.pin_card span').show();
    $('.zazhi span').show();
    $('.pad_icon span').show();
    $('.case_hot span').show();
}



//移动窗口的步骤
//1、按下鼠标左键
//2、移动鼠标   
// $('.subtitle_bg').hide()
// $('.main_box').show()
// $('#shard_share').show()

// 填字游戏
// $('.subtitle_bg').hide()
// $('.main_box').show()
// $('#text_game').show()
var tip = {
    'f1': { name: '形容事态严重', dis: 'heng' },
    'f2': { name: '年轻人用来自嘲的网络流行词', dis: 'heng' },
    'h1-3': { name: '形容彼此毫无关联', dis: 'zong' },
    'h2-3': { name: '三者间的一种状况', dis: 'zong' },
    'h4-1': { name: '受邀请的客人', dis: 'zong' },
    'h6-1': { name: '斯洛伐克著名强盗的别名', dis: 'heng' },
    'h6-2': { name: '由黑泽明执导的电影', dis: 'zong' },
}
$('.text_blank_bg span.tip').on('click', function() {
    $('.vertical span').html('')
    $('.horizontal span').html('')
    for (var key in tip) {
        if ($(this).hasClass(key)) {
            if (tip[key].dis == 'heng') {
                $('.horizontal span').html(tip[key].name)
            }
            if (tip[key].dis == 'zong') {
                $('.vertical span').html(tip[key].name)
            }
        }
    }
});
// 点击右侧

$('.text_list span').on('click', function() {
    $(this).siblings().removeClass('on');
    $(this).siblings().find('i').remove();
    if (!$(this).hasClass('on')) {
        if (!$(this).hasClass('disabled')) {
            $(this).addClass('on')
            $(this).append('<i></i>')
        }
    } else {
        $(this).removeClass('on')
        $(this).find('i').remove()
    }
    changeZi()
});
// 点击左侧
$('.text_blank_bg span.h').on('click', function() {
    $(this).siblings().removeClass('on');
    $(this).toggleClass('on');
    if ($(this).hasClass('on')) {
        $('.vertical span').html('')
        $('.horizontal span').html('')
        for (var key in tip) {
            if ($(this).hasClass(key)) {
                if (tip[key].dis == 'heng') {
                    $('.horizontal span').html(tip[key].name)
                }
                if (tip[key].dis == 'zong') {
                    $('.vertical span').html(tip[key].name)
                }
            }
        }

    }
    changeZi()
});

function changeZi() {
    var rightOn = $('.text_list span.on');
    var rightIndex = rightOn.index();
    var leftBgIndex = rightIndex + 1;
    var leftOn = $('.text_blank_bg span.on')
    if (leftOn.length > 0 && rightOn.length > 0) {
        var preIndex = leftOn.attr('data-index')
        leftOn.addClass('zi')
        var str = ''
        if (leftBgIndex < 10) {
            str = '0' + leftBgIndex
        } else {
            str = leftBgIndex
        }
        leftOn.css({
            'background': 'url(./images/z_' + str + '.png) center no-repeat'
        })
        leftOn.attr('data-index', leftBgIndex)
        leftOn.removeClass('on')
        $('.text_list span').eq(preIndex - 1).removeClass('disabled')
        rightOn.addClass('disabled')
        rightOn.removeClass('on')
        rightOn.find('i').remove();
    }
}

function removeZi() {
    var leftOn = $('.text_blank_bg span.on')
    leftOn.removeClass('zi')
    leftOn.css({
        'background': 'none'
    })

}
// 删除
$('.delate_btn').on('click', function() {
    var leftOn = $('.text_blank_bg span.on')
    if (leftOn.length > 0) {
        removeZi()
        leftOn.removeClass('on')
        $('.text_list span').eq(leftOn.attr('data-index') - 1).removeClass('disabled')
    }
});
// 重新挑战
$('.repeat_btn').on('click', function() {
    var left = $('.text_blank_bg span')
    var right = $('.text_list span')
    left.removeClass('on')
    left.removeClass('zi')
    left.css({
        'background': 'none'
    })
    right.removeClass('on')
    right.find('i').remove();
    right.removeClass('disabled')

});
// 放弃
$('#text_game .giveup_btn').on('click', function() {
    $('.repeat_btn').click()
    $('#text_game').hide()
});

// 提交
$('.text_bottom_btn .submit_btn').on('click', function() {

    var str = ''
    $('span.an').each(function() {
        str += $(this).attr('data-index')
    })
    if (str == '102021397183' || str == '1020213916183') {
        if (muiscHand) {
            musicBg.play();
        }

        musicGame.pause();
        $('#text_game').hide()
        $('.dialog_box4').show()
        $(".prompt").show();
        $('.nav02').addClass('on')
        $(".nav03").addClass("active");
    } else {
        // alert('不是正确答案')
        $('#text_game .text_false').addClass('on');
        setTimeout(function() {
            $('#text_game .text_false').removeClass('on');
        }, 2000)
    }

})
$('#text_game .text_false').on("click", function() {
        $(this).hide();
        $(".prompt").hide();
    })
    // 开锁游戏
    // $('.subtitle_bg').hide()
    // $('.main_box').show()
    // $('#key_game').show()


// 鼠标悬浮  改变背景图 黑底白字
$('.password').on('mouseover', function() {
    $(this).find('img.on').each(function() {
        var zimu = $(this).attr('data-zimu')
        $(this).attr('src', 'images/write_' + zimu + '.png')
    })

})
$('.password').on('mouseout', function() {
    if ($(this).attr('data-click')) return
    $(this).find('img.on').each(function() {
        var zimu = $(this).attr('data-zimu')
        $(this).attr('src', 'images/black_' + zimu + '.png')
    })

})

// 点击后 红框一直在
$('.password').on('click', function() {
    $(".lock_false").hide();
    var index = $(this).index();
    $(this).attr('data-click', true)
    $(this).css({ 'background': 'url(./images/password_bg' + (index + 1) + '_on.png) no-repeat' })
    $(this).find('img').each(function() {
        var zimu = $(this).attr('data-zimu')
        $(this).attr('src', 'images/write_' + zimu + '.png')
    })
});

// 点击切换字母
var numObj = {
    0: {
        num: 3
    },
    1: {
        num: 3
    },
    2: {
        num: 3
    }
}
$('.letter').on('click', function() {
    var h = 70
    var index = $(this).parents('.password').index()
    var $num_item = $(this).parents('.password').find('.letter_item')
    $num_item.css({ "transition": "all 0s linear", "-webkit-transition": "all 0s linear" });
    $num_item.each(function(i, item) {
        $num_item.eq(i).css('top', '0px')
    });
    setTimeout(function() {
        $num_item.css({ "transition": "all 0.8s linear", "-webkit-transition": "all 0.8s linear" });
        $num_item.each(function(i, item) {
            setTimeout(function() {
                // $num_item.eq(i).css('top', -parseInt(numberArr[i]) * h - h * 3 + 'px');
                $num_item.eq(i).css('top', -h * numObj[index].num + 'px');
            }, i * 100)
        });
        numObj[index].num++;
        if (numObj[index].num > 5) {
            numObj[index].num = 3
        }
    }, 10)


});
// 开锁
$('.key_bottom_btn .open_btn').on('click', function() {
        var str = ''
        $('.letter_item').each(function() {
            var top = parseInt($(this).css('top'))
            var index = Math.abs(top / 70)
            str += $(this).find('img').eq(index).attr('data-zimu')

        })
        if (str == 'persona5x') {
            $('.lock_success').addClass('on');
            setTimeout(function() {
                $('.lock_success').hide();
                $('#key_game').hide()
                $('.dialog_box9').show()
                $('.pixiang2').show()
                $('.nav03').addClass('on')
                $(".nav04").addClass("active");
                $("#pixi_box .pixi_bg1").css({ 'background': 'url(./images/bg1-2.jpg) no-repeat' })
                musicClick.src = musicList[1];
                musicClick.play();
            }, 2000)
            $('.key_star').hide();
            $('.case_star').hide();
            // 第三个开锁游戏 提交成功 保存 cookie
            $.cookie('kaisuo', 1, { expires: 1 });
        } else {
            $('.lock_false').show();
            $('.lock_false').addClass('on');
        }
        console.log(str)

    })
    // 放弃开锁游戏
$("#key_game .giveup_btn").on("click", function() {
        $("#key_game").hide();
    })
    // 放弃拼图游戏
$("#picBox .giveup_btn").on("click", function() {
    $("#picBox").hide();
})

// 官方社区
// var isShequn = true;
// $('.qq_qun').on("click", function() {
//     if (isShequn) {
//         isShequn = false;
//         $('.sns_box').show();
//     } else {
//         isShequn = true;
//         $('.sns_box').hide();
//     }


// })

// 返回咖啡店
$(".packup_btn").on('click',function(){
    isClickCoffee = true // 记录点击返回咖啡店标识
    $(".countdown_box").fadeOut();
    $(".little_countdown").fadeIn();
    $('.case_hot').show();
    $('.nav04').addClass('on')
    $('.pad_icon').addClass('on');
    $('.pin_card span').show();
    $('.zazhi span').show();
    $('.pad_icon span').show();
    $('.case_hot span').show();
})
 // 第一关
 $('.dialog_box12 .jixu2_btn').on('click', function() {
    if (isClickCoffee) {
        console.log('第一关')
        $('.dialog_box12').hide()
        $(".prompt").hide();
    }
   
})
// 第二关
$('.zazhi').on('click',function(){
    if (isClickCoffee) {
        $('.dialog_box8').show();
    }
})
$('.dialog_box8 .jixu2_btn').on('click', function() {
    if (isClickCoffee) {
        console.log('第二关')
        $('.dialog_box8').hide()
        $('.dialog_box11').hide()
        $(".prompt").hide();
        $('.keys_icon').hide()
        $('.key_star').hide()
        $('.case_star').hide()
    }
})
// 第三关
$('.case_hot').on('click',function(){
    if (isClickCoffee) {
        $('.dialog_box9').show();
        $(".case_on").fadeOut();
        $(".dialog_box9 .gongdian_pic").addClass('on');
        $(".dialog_box9 .share_piclink").show();
        $('.dialog_box9 .dialog9').attr('src', 'images/dialog15.png')
        $('.dialog_box9 .share_tip2').addClass('on');
    }
})
$('.dialog_box9 .jixu2_btn').on('click', function() {
    if (isClickCoffee) {
        console.log('第三关')
        $('.dialog_box6').hide();
        $('.dialog_box9').hide();
        $(".prompt").hide();
    }
})
// 第四关
$('.pad_icon').on('click',function(){
    if (isClickCoffee) {
        $('.dialog_box10 .dialog10').attr('src', 'images/dialog16-1.png')
        $('.guaidao_pic img').attr('src', 'images/guaidao_pic1.png')
        $('.dialog_box10 .share_piclink').show();
        $('.dialog_box10 .share_tip').removeClass('on');
        $('.dialog_box10').show();
    }
})
$('.dialog_box10 .jixu2_btn').on('click', function() {
    if (isClickCoffee) {
        console.log('第四关')
        if ($.cookie('lastPintu')) {
            $('.entertime_box').hide(); 
            $('.dialog_box10').hide() 
        }
    } 
})    
$(".little_countdown").on('click',function(){
    $(".countdown_box").fadeIn();
    $(".little_countdown").fadeOut();
    
})
// 倒计时
// $('.subtitle_box').hide()
// $('.main_box').show()
// $('.countdown_box').show()