 function Calculate(speed,time) {
       const num1 = parseInt(speed);
	   const num2 = parseInt(time);
		if (num1<0||num2<0) 
			{
			  throw Error('Values cannot be negative');
			}
		else
		{
			return num3= num1*num2;
		}
}
	   
QUnit.test("Calculate", function(assert) {
	assert.equal(Calculate(20,6),120, "Distance travelled with a speed of 20km/hr in 6hr == 120 kilometers");
	assert.equal(Calculate(30,6),180, "Distance travelled with a speed of 30km/hr in 6hr == 180 kilometers");
	assert.equal(Calculate(50,5), 250, "Distance travelled with a speed of 50km/hr in 5hr == 250 kilometers");
	assert.equal(Calculate(60,6), 360, "Distance travelled with a speed of 60km/hr in 6hr == 360 kilometers");
	assert.equal(Calculate(70,6), 420, "Distance travelled with a speed of 70km/hr in 6hr == 420 kilometers");
	assert.equal(Calculate(90,-6), -540, "Distance travelled with a speed of 90km/hr in 6hr == 540 kilometers");
 });