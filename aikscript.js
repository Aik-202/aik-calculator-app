const buttons = $("div button");
const display = $("#process");
const slider = $(".slider")
display.val('') 


for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        if(buttons[i].innerHTML == "DEL"){
            let number = display.val();
            display.val(number.slice(0, -1));
        }else if(buttons[i].innerHTML == "RESET"){
            display.val('');
        }else if (buttons[i].innerHTML == "+" || buttons[i].innerHTML == "-" || buttons[i].innerHTML == "x" || buttons[i].innerHTML == "/"  ){
            display.val(display.val() + ' ' + buttons[i].innerHTML + ' ');
            // if(buttons[i].innerHTML == "+") {} else if(buttons[i].innerHTML == "-") {} else if(buttons[i].innerHTML == "x") {} else {}
        }else{
            display.val(display.val() + buttons[i].innerHTML);
        }
    });
}

slider.change(themeChange = () => {
    var theme;
    if(slider.val() == 0){
        $("body").removeClass("theme2 theme3");
        $("body").addClass("theme1");
        theme = "theme1";
    }
    if(slider.val() == 1){
        $("body").removeClass("theme1 theme3");
        $("body").addClass("theme2");
        theme = "theme2";
    }
    if(slider.val() == 2){
        $("body").removeClass("theme1 theme2");
        $("body").addClass("theme3");
        theme = "theme3";
    }
    localStorage.setItem("pageTheme", JSON.stringify(theme));
});

$(document).ready(() => {
    let getTheme = JSON.parse(localStorage.getItem("pageTheme"));
    if(getTheme == "theme1"){
        slider.val('0');
    }else if (getTheme == "theme2"){
        slider.val('1');
    } else{
        slider.val('2');
    }
    themeChange();
});