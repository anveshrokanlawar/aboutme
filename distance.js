function Calculate(speed,time) {
       const num1 = parseInt(document.getElementById("speed").value);
       const num2 = parseInt(document.getElementById("time").value);
       if(num1>=0&&num2>=0)
       {
        const num3= num1*num2;
        document.getElementById("result").innerHTML = num3+ " km";
       }
       else
       {
        alert("Invalid input values");
       }
        
}