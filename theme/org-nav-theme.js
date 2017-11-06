var button = document.createElement("button")
button.textContent    = "Toggle";
button.style.top      = "20px";
button.style.left     = "30px";
button.style.position = "fixed";
button.style.zIndex   = 10000;


function hideNavBar(){
    var toc = document.querySelector("#table-of-contents");
    toc.style.display = "none";
    // document.documentElement.style.setProperty('--main-width', '90%');
    document.querySelector("body")
        .style
        .setProperty("margin-left", "100px");
    
    // button.style.left = "10px";
}

function showNavBar(){
    var toc = document.querySelector("#table-of-contents");
    toc.style.display = "block";
    // document.documentElement.style.setProperty('--main-width', '100%');
    document.querySelector("body")
        .style
        .setProperty("margin-left", "250px");
    
    // button.style.left = "25%";
}

var buttonFlag = false; 

button.addEventListener("click", function(){
    if(buttonFlag == true) {
        hideNavBar();
        buttonFlag = false;
    } else {
        showNavBar();
        buttonFlag = true;
    }
});


var init = function(){
    hideNavBar();
    document.body.appendChild(button);
}
document.addEventListener("DOMContentLoaded", init, false);

