// number type checker starts here
let a;
function myFunctionN(){
    a = document.getElementById("num").value;
    if(a%2 == 0 && a>0 && a!=NaN){
        document.write("Even number");
    }else if (a%2 == 0 && a == 0 && a!=NaN){
        document.write("Even number");
        window.alert("Since 0 divided by 2 is a whole number (0), zero is even. Zero is also non-negative; therefore, it's the smallest non-negative even number.");
    }else if (a%2 != 0 && a>0 && a!=NaN) {
        document.write("Odd number");
    }else {
        window.alert("Invalid Input");
    }
}
document.getElementById("btn1").addEventListener("click", myFunctionN);
// number type checker ends here


// GPA calculator starts here
let b;
function myFunctionGPA(){
    b = document.getElementById("num1").value;
    if(b>=80 && b<=100 && b!=NaN){
        document.write("A+");
    }else if(b>=70 && b<80 && b!=NaN){
        document.write("A");
    }else if(b>=60 && b<70 && b!=NaN){
        document.write("A-");
    }else if(b>=50 && b<60 && b!=NaN){
        document.write("B");
    }else if(b>=40 && b<50 && b!=NaN){
        document.write("C");
    }else if(b>=33 && b<40 && b!=NaN){
        document.write("D");
    }else if(b>=0 && b<33 && b!=NaN){
        document.write("F");
    }else{
        window.alert("Invalid input")
    }
}

document.getElementById("btn2").addEventListener("click", myFunctionGPA);
// GPA Calculator ends here


