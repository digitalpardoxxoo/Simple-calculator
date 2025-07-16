let display=document.getElementById("display")
let btn=document.querySelectorAll(".btn")
let input=""
let result=JSON.parse(localStorage.getItem("result")) || []

document.addEventListener("DOMContentLoaded", function () {
btn.forEach(button => {
  button.addEventListener("click", function () {
    if (button.textContent === "=" || button.textContent === "C") return;
    input += button.textContent;
    display.textContent = input;
  });

});
let clear=document.getElementById("clear")
    clear.addEventListener("click",function(){
            display.textContent=""
            input=""
    })
});

let equal=document.getElementById("equals")
equal.addEventListener("click",function(){
   showresult();
})

 function showresult(){
    try{
       input=eval(input).toString()
       display.textContent=input
       result.push(input)
       localStorage.setItem("results",JSON.stringify(result))
       input=""

    }
    catch{
        display.textContent="Error!"
        input=""
    }
}
