function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+"<span class='highlight'>"+principal+"</span>"+",\<br\>at an interest rate of "+"<span class='highlight'>"+rate+"</span>"+"%\<br\>You will receive an amount of "+"<span class='highlight'>"+interest+"</span>"+",\<br\>in the year "+"<span class='highlight'>"+year+"</span>"+"\<br\>"
     
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function highlight(text) {
    var inputText = document.getElementById("result");
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
     inputText.innerHTML = innerHTML;
    }
  }
        