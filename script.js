let title = document.querySelector("#title");
let displayname = document.querySelector("#namefield");
let btn = document.querySelector("#signupbtn");
let btn2 = document.querySelector("#signinbtn");

btn2.onclick = function() {
    displayname.style.maxHeight = 0;
    title.innerHTML = "Sign In";
    btn.classList.add("off");
    btn2.classList.remove("off");
};

btn.onclick=function (){
    displayname.style.maxHeight="60px";
    title.innerHTML="Sign Up";
    btn.classList.remove("off");
    btn2.classList.add("off");

}

