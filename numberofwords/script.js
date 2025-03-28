function calculate(){
let textbox = document.getElementById('textbox').value;
if(textbox.value == " ")
{
    return
}
document.getElementById('result').innerHTML = textbox.length;
}