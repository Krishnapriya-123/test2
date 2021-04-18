var a;
function number()
{
    alert("number function");
    a=parseInt(document.getElementById('num').value);
 if(a%2==0)
  {
    document.getElementById('result').innerHTML='even number';
    document.getElementById('result').style.color='thick green';
    console.log("even number");
  }
 else
   {
     document.getElementById('result').innerHTML='odd number';
     document.getElementById('result').style.color='red';
     console.log("odd number");
   }
   return false;
}