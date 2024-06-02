let result = "";
const display = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');


buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.value == '='){
            display.value = eval(display.value);
        }else if(button.value == 'AC'){
            display.value = ""
        }else if(button.value == 'Del'){
            display.value = display.value.toString().slice(0,-1);
        }else{
            display.value += button.value;
        }
        
    })
})