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

slider.change(() => {
    if(slider.val() == 1){
        $(".theme1").removeClass("theme1 theme3")
        $(".theme1").addClass("theme2");
    }
})