const display=document.querySelector("#display");
const btns=document.querySelectorAll("button");

btns.forEach((btn)=>{
    btn.addEventListener("click", () => {
        if(btn.id==="="){
        display.value=eval(display.value);
        console.log(display.value);
        }
        else if(btn.id==="c"){
        display.value="";
        }
        else if(btn.id==="del"){
        display.value = display.value.slice(0,-1);
        }
        else{
        let str=display.value;
        if(str.charAt(str.length-1)==="+" && (btn.id==="+" || btn.id==="-" || btn.id==="/" || btn.id==="*"))
        display.value+="";
        else if(str.charAt(str.length-1)==="-" && (btn.id==="+" || btn.id==="-" || btn.id==="/" || btn.id==="*"))
        display.value+="";
        else if(str.charAt(str.length-1)==="*" && (btn.id==="+" || btn.id==="-" || btn.id==="/" || btn.id==="*"))
        display.value+="";
        else if(str.charAt(str.length-1)==="/" && (btn.id==="+" || btn.id==="-" || btn.id==="/" || btn.id==="*"))
        display.value+="";
        else
        display.value+=btn.id;
        }
    });
    
});