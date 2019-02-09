function Calculate() {
        num1 = parseInt(document.getElementById("speed").value);
        num2 = parseInt(document.getElementById("time").value);
        document.getElementById("result").innerHTML = num1 * num2 + " km";
}