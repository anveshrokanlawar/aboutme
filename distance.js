function Calculate() {
       const num1 = parseInt(document.getElementById("speed").value);
       const num2 = parseInt(document.getElementById("time").value);
       if(num1>=0&&num2>=0)
       {
        document.getElementById("result").innerHTML = num1 * num2 + " km";
       }
       else
       {
        alert("Values cannot be negative");
       }
        
}