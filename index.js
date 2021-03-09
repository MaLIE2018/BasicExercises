function changeContent(result, id) {
    document.getElementById(id).innerHTML = result;
}


// Excerice 1 Monday, 8.03.2021
function outputDayaTime() {
    let myDate = new Date();

    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let myDay = myDate.getDay();
    let myHour = myDate.getHours() % 12;
    let currentTime

    // Calculating Ante meridiem – post meridiem using modulo Operator
    if (myHour > 12) {
        currentTime = myHour + " PM : " +
            myDate.getMinutes() + " : " + myDate.getSeconds()
    } else {
        currentTime = myHour + " AM : " +
            myDate.getMinutes() + " : " + myDate.getSeconds()
    }

    //Return weekday
    let currentWeekday = weekday[myDay];

    result = "Today is: " + currentWeekday + "<br>Current Time is: " + currentTime;

    console.log(result);

    return result;
}

//Exercise 2 Tuesday, 9.03

function printContent() {
    console.log(window.print())
}

// Exercise 3 Tuesday, 9.03
function printCurrentDate() {
    let myDate = new Date()
    let myDay = myDate.getDate()
    let myMonth = (parseInt(myDate.getMonth()) + 1)
    let myYear = myDate.getFullYear()
    if (myDay < 10) {
        myDay = '0' + myDay
    }
    if (myMonth < 10) {
        myMonth = '0' + myMonth
    }

    console.log(myDay + "-" + myMonth + "-" + myYear)
}


//Exercise 4 Tuesday, 9.03.
function areaOfTriangle() {
    a = 5
    b = 6
    c = 7

    s = (a + b + c) / 2

    A = Math.sqrt(s * (s - a) * (s - b) * (s - c))

    console.log("Area is " + A)

}

// Exercise 5 Tuesday, 9.03.
function rotateString() {
    let StringToRotate = "w3resources"
    let resultString = StringToRotate
    let lastChar = resultString.substr(-1)

    for (i = 0; i < StringToRotate.length; i++) {

        resultString = resultString.substr(-1) + resultString.substr(0, resultString.length - 1)

        //console.log(resultString)
    }

}

function animate_string(id) {
    const element = document.getElementById(id) // get the element with that id
    const textNode = element.childNodes[0] // 
    let text = textNode.data

    setInterval(() => { //embedded function in function setinterval, setinterval calls the function with 100 milliseconds gap.
        text = text.substr(-1) + text.substr(0, text.length - 1)
        textNode.data = text
    }, 100)

}


//Excecution
rotateString()
    //areaOfTriangle()
    //printCurrentDate()
changeContent(outputDayaTime(), "e1");
//printContent()