var marks;
function grade()
{
    alert("Grade function");
    marks=parseInt(document.getElementById('marks').value);
    if(marks>=90)
    {
        document.getElementById('result').innerHTML='A Grade';
        document.getElementById('result').style.color='thick green';
        console.log("A Grade");
    }
    else
    {
        if(marks>=80)
        {
            document.getElementById('result').innerHTML='B Grade';
            document.getElementById('result').style.color='white';
            console.log("B Grade");
        }
        else
        {
            if(marks>=70)
            {
                document.getElementById('result').innerHTML='C Grade';
                document.getElementById('result').style.color='pink';
                console.log("C Grade");
            }
            else
            {
                if(marks>=60)
                {
                    document.getElementById('result').innerHTML='D Grade';
                    document.getElementById('result').style.color='orange';
                    console.log("D Grade");
                }
                else
                {
                    document.getElementById('result').innerHTML='FAIL';
                    document.getElementById('result').style.color='red';
                    console.log("FAIL");
                }
            }
        }
    }
     return false;
}