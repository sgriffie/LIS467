
let my_name = prompt("What is your name?");
let output = document.getElementById("output"); 

if (my_name.length === 4) {
    output.innerHTML += "Are you Jane?<br>";
} else if (my_name.length === 6) {
    output.innerHTML += "Are you Naresh?<br>";
} else {
    output.innerHTML += "Hello" + my_name;
}


for (let i = 1; i < 11; i++) {
    output.innerHTML += i + "<br>";
}


let callNumbers = ['PQ2246.M2 E5', 'PR2759 .P3', 'PR6056.A75 T76x', 'PS1744.G57 Y4534'];


function dailyHours(hours) {
    for (let i = 0; i < hours.length; i++) {
        let parts = hours[i].split(": ");
        let day = parts[0];
        let time = parts[1];

        if (time === "closed") {
            console.log(`On ${day} the library is closed`);
            output.innerHTML += `On ${day} the library is closed<br>`;
        } else {
            console.log(`On ${day} the hours are ${time}`);
            output.innerHTML += `On ${day} the hours are ${time}<br>`;
        }
    }
}


let hours = [
    "Monday: 9a - 9p",
    "Tuesday: 9a - 9p",
    "Wednesday: 9a - 9p",
    "Thursday: 9a - 9p",
    "Friday: 9a - 5p",
    "Saturday: 9a - 5p",
    "Sunday: closed"
];


dailyHours(hours);
