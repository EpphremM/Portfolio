const x=document.getElementById("x");
const menu=document.getElementById("menu");
const displyBar=document.getElementById("menu-container");
const menuDark=document.getElementById("menu-dark");
const menuManupulator=()=>{
displyBar.style.display="block";
console.log("hello");
}
const xManupulator=()=>{
    displyBar.style.display="none";
}
menu.addEventListener('click',menuManupulator);
x.addEventListener('click',xManupulator);
const dark=document.getElementById("dark");

const darkModeManipulator=()=>{
 document.body.classList.toggle('dark-theme');
 if(document.body.classList.contains('dark-theme'))
 {
    dark.src="darkMode/moon.png"
    menuDark.src="darkMode/moon.png"
 }
 else{
    dark.src="darkMode/sun.png";
    menuDark.src="darkMode/sun.png";
 }
}

const menuDarkModeManipulator=()=>{
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme'))
    {
       menuDark.src="darkMode/moon.png"
       dark.src="darkMode/moon.png"
    }
    else{
       menuDark.src="darkMode/sun.png";
       dark.src="darkMode/sun.png";
    }
   }
dark.addEventListener('click',darkModeManipulator);
menuDark.addEventListener('click',menuDarkModeManipulator);