
//Declare a function fullName and it prints out your full name.
function fullName () {
    console.log("Ernest Chigo");
}

//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your fullname.
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
     }


//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers (num1, num2) {
    return num1 + num2;
     }

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    return length * width;
}

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    return 2 * ( length * width);
     }

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism (length,  width, height) {
return 2 * ( length * width);
 }
//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle (radius) {
    return 3.14 * radius * radius;
}

//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle (radius) {
    return 2 * 3.14 * radius;
     }

//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
    return mass / volume;
}

//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
    return distance / time;
}

//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight (mass, gravity) {
    return mass * gravity;

}
//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit (oC) {
    return oC.toFahrenheit (celcius * 9/5) + 32;
     }
//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function calculateBMI(weight, height) {
    return weight / (height ** 2);

}


//The same groups apply to both men and women. Underweight: BMI is less than 18.5
//Normal weight: BMI is 18.5 to 24.9
//Overweight: BMI is 25 to 29.9
//Obese: BMI is 30 or more
function checkBMI (bmi) {
    if (bmi < 18.5)  { 
        return "underweight";

} else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
 } else if (bmi >= 25  && bmi <= 29.9) {
    return "overweight";
 } else {
    return "Obese";
 }

 }


//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason (month){
    if ([3, 4, 5]. includes (month)) {
        return "spring";

    } else if ([6, 7, 8]. includes (month)) {
        return "summer";

    }else if ([9, 10, 11]. includes (month)) {

        return "Autumn";

} else {
    return "winter";
 }

}


//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a, b, c) {
    let max_num = a;

    if (b > max_num) {
    }

    if (c > max_num) {
        max_num = c;
    }

    return max_num; // Moved outside the if block
}

console.log(findMax(0, 10, 5));   // Output: 10
console.log(findMax(0, -10, -2));  // Output: 0
