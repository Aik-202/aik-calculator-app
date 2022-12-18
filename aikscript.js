const buttons = $(".row>button");
const buttons2 = $(".row2>button");
const display = $("#result_value");
display.html('') 

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        display.html(display.html() + buttons[i].innerHTML);
        // console.log(display.innerHTML)
    });
}

// for(let i = 0; i < buttons2.length; i++){
//     buttons2[i].addEventListener("click", () => {
//         console.log(buttons2[i].innerHTML);
//     });
// }