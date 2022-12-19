const buttons = $("div button");
const display = $("#result_value");
display.html('') 

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        if(buttons[i].innerHTML == "DEL"){
            let number = display.html();
            display.html(number.slice(0, -1));
        }else if(buttons[i].innerHTML == "RESET"){
            display.html('');
        } else{
            display.html(display.html() + buttons[i].innerHTML);
        }
    });
}