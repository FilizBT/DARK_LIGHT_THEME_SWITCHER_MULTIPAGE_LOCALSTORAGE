
const whiteButton=document.getElementById("white");
const blackButton=document.getElementById("black");


const body=document.body;
var className=document.body.className;
const theme=localStorage.getItem('theme');


if(theme){
    body.classList.replace(className,theme);
    className=theme;
}

whiteButton.onclick=() =>
{
    body.classList.replace(className,'white');
    className='white';
    localStorage.setItem('theme','white');
}

blackButton.onclick=() =>
{
    body.classList.replace(className,'black');
    className='black';
    localStorage.setItem('theme','black');
}


window.addEventListener('load', (event) => {
  if (localStorage.getItem('theme') == "black") {
      document.getElementById('black').checked = true;
  }
});


  



