let i=0;
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let x = document.querySelectorAll('.span');
let y = document.querySelectorAll('.portfolio .box-container .box');

				

function width()
{
// y.style.transform="scale(1)";
x[0].style.width = "80%";
x[1].style.width = "70%";
x[2].style.width = "80%";
x[3].style.width = "70%";
x[4].style.width = "80%";
x[5].style.width = "70%";
x[6].style.width = "80%";
x[7].style.width = "70%";

}

function width1()
{
x[0].style.width = "0%";
x[1].style.width = "0%";
x[2].style.width = "0%";
x[3].style.width = "0%";
x[4].style.width = "0%";
x[5].style.width = "0%";
x[6].style.width = "0%";
x[7].style.width = "0%";

}

function scallBox(){
	for(i=0;i<6;i++)
	{
	y[i].style.transform="scale(1)";
}
}

function discallBox(){
	for(i=0;i<6;i++)
	{
	y[i].style.transform="scale(0)";
}

}



menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');

    console.log(scrollY);
    if(scrollY>330)
    {
    	width();
    }
    else if(scrollY<237)
    {
    	width1();
    }

    if(scrollY>1033)
    {
    	scallBox();
    }
    else if(scrollY<1033){
    	discallBox();
    }

}



// let themeToggler = document.querySelector('#theme-toggler');

// themeToggler.onclick = () =>{
//     themeToggler.classList.toggle('fa-sun');
//     if(themeToggler.classList.contains('fa-sun')){
//         document.body.classList.add('active');
//     }else{
//         document.body.classList.remove('active');
//     }
// }