function bmiCalculator (weight, height) {
   var BMI = weight/(height*height);
    if (BMI < 18.5){
        return "Your BMI is "+BMI+", so you are underweight.";
    }
    if (BMI > 18.5 && BMI < 24.9){
        return "Your BMI is "+BMI+", so you have a normal weight.";
    }
    if (BMI > 24.9){
        return "Your BMI is "+BMI+", so you are overweight.";
    }
    return interpretation;
}