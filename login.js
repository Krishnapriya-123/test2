var email;
var password;
function login()
{
    alert('login function');
   email=document.getElementById('email').value;
   password=document.getElementById('pw').value;
   if(email=='krishna@gmail.com' && password=='priya12')
   {
       document.getElementById('result').innerHTML='Logedin....';
       document.getElementById("result").style.color='green';
       console.log("Logedin....");
       window.location.href='inde.html';
   }
   else{
       document.getElementById('result').innerHTML="invalid email/password";
       document.getElementById('result').style.color='red';
       console.log("invalid email/password");
   }
   return false;
}