

function printval(){
    
        const num = document.getElementById('textbox').value
        document.getElementById('fact').innerHTML = "Factorial of " + num + " is " + factorial(num);
      startTimer();
    }

function startTimer(){
    setTimeout(() =>{
        document.getElementById('textbox').value = "";
        document.getElementById('fact').innerHTML = " ";
     },10000);
}

function factorial(val)
{
    if(val == 1)
    {
        return 1
    }
    return val * factorial(val-1);
}
// console.log(findsum(arr));

