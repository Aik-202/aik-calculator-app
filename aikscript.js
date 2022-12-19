const buttons = $("div button");
const display = $("#process");
const output = $("#output");
const slider = $(".slider")
var number
var number2;
var pos;
display.val('')


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        if (buttons[i].innerHTML == "DEL") {
            let number = display.val();
            display.val(number.slice(0, -1));
        } else if (buttons[i].innerHTML == "RESET") {
            display.val('');
            output.parent().removeClass("active");
        } else if (buttons[i].innerHTML == "+" || buttons[i].innerHTML == "-" || buttons[i].innerHTML == "x" || buttons[i].innerHTML == "/") {
            number = +display.val();
            display.val(display.val() + ' ' + buttons[i].innerHTML + ' ');
            if (buttons[i].innerHTML == "+") {
                pos = display.val().indexOf("+") + 1;
            } else if (buttons[i].innerHTML == "-") {
                pos = display.val().indexOf("-") + 1;
            } else if (buttons[i].innerHTML == "x") {
                pos = display.val().indexOf("x") + 1;
            } else {
                pos = display.val().indexOf("/") + 1;
            }
        } else if(buttons[i].innerHTML == "=") {
            finalAnswer();
        } else {
            display.val(display.val() + buttons[i].innerHTML);
            var str2;
            str2 = display.val().slice(pos);
            number2 = +str2
            // console.log(`${number}, ${number2}`);
            operatorDetector(pos, number, number2, display.val());
        }
    });
}

const operatorDetector = (pos, number, number2, str) => {
    const operator = str.charAt(pos-1);
    var result;
    if(operator == "+"){
        result = number + number2;
    } else if(operator == "-"){
        result = number - number2;
    } else if(operator == "x"){
        result = number * number2;
    } else {
        result = number / number2;
    }
    if(Number.isFinite(result)){
        finalAnswer(result);
    }
}

const finalAnswer = (result) => {
    // output.css("display", "block")
    output.parent().addClass("active");
    output.val(result);
}

slider.change(themeChange = () => {
    var theme;
    if (slider.val() == 0) {
        $("body").removeClass("theme2 theme3");
        $("body").addClass("theme1");
        theme = "theme1";
    }
    if (slider.val() == 1) {
        $("body").removeClass("theme1 theme3");
        $("body").addClass("theme2");
        theme = "theme2";
    }
    if (slider.val() == 2) {
        $("body").removeClass("theme1 theme2");
        $("body").addClass("theme3");
        theme = "theme3";
    }
    localStorage.setItem("pageTheme", JSON.stringify(theme));
});

$(document).ready(() => {
    let getTheme = JSON.parse(localStorage.getItem("pageTheme"));
    if (getTheme == "theme1") {
        slider.val('0');
    } else if (getTheme == "theme2") {
        slider.val('1');
    } else {
        slider.val('2');
    }
    themeChange();
});