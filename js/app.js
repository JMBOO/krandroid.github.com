console.log('my-note app.js');

var newbtn = document.getElementById('newnote');
var savebtn = document.getElementById('savenote');
var fullbtn = document.getElementById('fullscreen');
var aboutbtn = document.getElementById('about');
var text = document.getElementById('memo');
var closebtn = document.getElementById('close');
var key = 'data';

newbtn.addEventListener('click',newpage);
savebtn.addEventListener('click',save);
fullbtn.addEventListener('click',full_screen);
aboutbtn.addEventListener('click',layer_popup);
closebtn.addEventListener('click',pop_close);

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


function layer_popup(event){
				document.getElementById("layer_body").style.display='inline'
	}

	function pop_close(event){
					document.getElementById("layer_body").style.display='none'
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
