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

//Exercise 6 Sunday, 3/14/2021

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

/* Alle durch 100 teilbaren Schaltjahre fallen nämlich aus, also zum Beispiel im Jahr 1900 und dann wieder 2100. 
Weil das aber auch nicht ganz stimmen würde, gibt es auch von dieser Regel wieder eine Ausnahme: 
Alle Schaltjahre, die durch 400 teilbar sind, bleiben Schaltjahre, also 1600, 2000 und dann wieder 2400.
Das Jahr 2000 war also ein Schaltjahr, denn 2000 ist durch 100 und 400 teilbar. 
Hingegen wird 2100 kein Schaltjahr sein, weil 2100 nicht durch 400 teilbar ist. 
Alle, die also am 29. Februar Geburtstag haben, legen sich am besten gleich einen Taschenrechner zu, 
damit sie ihren nächsten Geburtstag nicht verpassen. :-) */

const isLeapYear = (year) => {
    return (year % 100 === 0) ? year % 400 === 0 : year % 4 === 0
}


// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.


const firstJanSundayIn46years = () => {
    let startDate = new Date(Date.UTC(2014, 0, 1))
    let endDate = new Date(Date.UTC(2050, 0, 1))
    let years = endDate.getFullYear() - startDate.getFullYear()

    for (let i = 1; i <= years; i++) {
        if (startDate.getDay() === 0) console.log('1st Jan is Sunday:', startDate.getFullYear())
        startDate = new Date(Date.UTC(startDate.getFullYear() + 1, 0, 1))
    }
}

/* 8. Write a JavaScript program where the program takes a random integer between 1 to 10, 
the user is then prompted to input a guess number. If the user input matches with guess number, 
the program will display a message "Good Work" otherwise display a message "Not matched"
 */

const guessGame = (num) => {
    console.log('num:', num)
    let random = Math.floor((Math.random() * 10) + 1)
    if (parseInt(num) === random) {

        alert("Good Work")
    } else {
        alert(`not matched the number was ${random}`)
    }
}

/* 9. Write a JavaScript program to calculate days left until next Christmas. */

const whenIsChristmas = () => {
    let today = new Date()
    let christmas = new Date(Date.UTC(today.getFullYear(), 11, 24))

    if (today.getMonth === 11 && today.getDay === 24) {
        christmas.setFullYear(christmas.setFullYear() + 1)
    }

    return Math.floor((christmas - today) / (1000 * 3600 * 24))
}


/* 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).  Go to the editor
Sample form :  */


const multiply = () => {
    n1 = document.getElementById('num1').value
    n2 = document.getElementById('num2').value
    document.getElementById('result').innerHTML = n1 * n2
}

const divide = () => {
        n1 = document.getElementById('num1').value
        n2 = document.getElementById('num2').value
        document.getElementById('result').innerHTML = n1 / n2
    }
    /* 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
    [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
    Expected Output :
    60°C is 140 °F
    45°F is 7.222222222222222°C  */

const tempConverter = (temp, isCelsius) => {
    if (isCelsius) {
        c = temp
        f = (c / 5) * 9 + 32
        return `${c}\xB0C is ${f}\xB0F`
    } else {
        f = temp
        c = ((f - 32) / 9) * 5
        return `${f}\xB0F is ${c}\xB0C`
    }
}

/* 12. Write a JavaScript program to get the website URL (loading page). */

const getWebsiteURL = () => {
    document.getElementById("URL").innerHTML = "URL of this page " + window.location.href
}

getWebsiteURL()

/* 13. Write a JavaScript exercise to create a variable using a user-defined name */

const userdefinedVariable = () => {
    let n = 102
    let userVar = document.getElementById('userVar').value
    this[userVar] = n

    document.getElementById('result13').innerHTML = this[userVar]
    console.log(this[userVar])

}