console.log('my-note app.js');

var newbtn = document.getElementById('newnote');
var savebtn = document.getElementById('savenote');
var fullbtn = document.getElementById('fullscreen');
var aboutbtn = document.getElementById('about');
var text = document.getElementById('memo');
var key = 'data';

newbtn.addEventListener('click',newpage);
savebtn.addEventListener('click',save);
fullbtn.addEventListener('click',full_screen);
aboutbtn.addEventListener('click',layer_popup);

$(function () {
	data_Load();
});


function save(event)
{
	if(text.value == '')
	{
		alert('내용을 입려해 주세요.');
	}else{
			localStorage.setItem(key, text.value);
			alert('저장 완료');
			console.log('저장 완료');
		}
}

function newpage(event)
{
	localStorage.clear();
	location.reload(true);
	location.href = location.href;
	history.go(-1);
}

function full_screen(event)
{
	var docElm = document.documentElement;
	if (docElm.requestFullscreen) {
			docElm.requestFullscreen();
	}
	else if (docElm.mozRequestFullScreen) {
			docElm.mozRequestFullScreen();
	}
	else if (docElm.webkitRequestFullScreen) {
			docElm.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	}
}


$('.btn-example').click(function(){
        var $href = $(this).attr('href');
        layer_popup($href);
    });
    function layer_popup(el){

        var $el = $(el);        //레이어의 id를 $el 변수에 저장
        var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

        isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

        var $elWidth = ~~($el.outerWidth()),
            $elHeight = ~~($el.outerHeight()),
            docWidth = $(document).width(),
            docHeight = $(document).height();

        // 화면의 중앙에 레이어를 띄운다.
        if ($elHeight < docHeight || $elWidth < docWidth) {
            $el.css({
                marginTop: -$elHeight /2,
                marginLeft: -$elWidth/2
            })
        } else {
            $el.css({top: 0, left: 0});
        }

        $el.find('a.btn-layerClose').click(function(){
            isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
            return false;
        });

        $('.layer .dimBg').click(function(){
            $('.dim-layer').fadeOut();
            return false;
        });

    }

function data_Load()
{
	var datatext = document.createTextNode(localStorage.getItem(key));
	if(localStorage.getItem(key) == '' || localStorage.getItem(key) == null)
	{
		alert('저장된 새글이 없습니다.');
	}else{
	console.log('로드 완료');
	text.appendChild(datatext);
	}
}
