var ele=document.getElementById('js');
console.log(ele);
ele.addEventListener("click",function(){
    alert("Ayyyyooo...........");
    ele.style.color="red";
})

var btn=document.getElementById('btn');
btn.addEventListener("click", function(){
    alert("Clicked...");
    var num1=document.getElementById('first').value;
    console.log(num1);
    var num2=document.getElementById('second').value;
    console.log(num2);
    var res=parseInt(num1)+parseInt(num2);
    console.log(res);
    document.getElementById('rslt').innerHTML=res;
})