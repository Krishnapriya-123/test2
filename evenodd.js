var i;
var text="";
function test()
{ 
   
    for(i=10;i<=25;i++)
    {
        
        if(i%2==0)
        {
            console.log("Even number");
            
            text+=i +"-even" +  "<br>";
           
            document.getElementById('result').innerHTML=text;
            
        }
        else{
            console.log("Odd number");
            
            text+=i + "-odd" + "<br>";
            
            document.getElementById('result').innerHTML=text;
            
        }
    }
    return false;
}
test();