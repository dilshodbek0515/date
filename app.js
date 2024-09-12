const clockEl = document.querySelector(".clock_item");
const dayEl = document.querySelector(".day");

{
    function currentTime() {
        let date = new Date()
        let hour = date.getHours().toString().padStart(2, "0")
        let minute = date.getMinutes().toString().padStart(2, "0")
        let second = date.getSeconds().toString().padStart(2, "0")
        clockEl.innerHTML = `${hour} : ${minute} : ${second}`;
    }
    currentTime()

    setInterval(() => {
        currentTime()
    }, 1000);
}

// N1
// {
//     function opposite(number) {
//         return number * -1
//     }
// }



// N2

// {
//     function numberToString(num) {
//         return String(num)
//     }
// }



// N3

// {
//     function boolToWord(bool) {
//         if (bool) {
//             return "Yes";
//         } else {
//             return "No";
//         }

//     }

//     boolToWord(true);
//     boolToWord(false);
//     boolToWord(true);
// }


// N4

// {
//     function repeatStr(n, s) {
//         return s.repeat(n)
//     }
// }



// N5

// {
//     const stringToNumber = function (str) {
//         return Number(str)
//     }
// }





// Q  O'  SH  I  M  CH  A




// N6

// {
//     function greet(name) {
//         return `Hello, ${name} how are you doing today?`
//     }
//     console.log(greet("Javohir"));
// }



// N7

// {
//     function booleanToString(b) {
//         return b.toString()
//     }
// }



// N8

// {
//     function remove(str) {
//         if (str.endsWith('!')) {
//             return str.slice(0, -1)
//         }
//         return str
//     }
// }




// N9

// {
//     String.prototype.toJadenCase = function () {
//         return this.split(" ").map(function (word) {
//             return word.charAt(0).toUpperCase() + word.slice(1);
//         }).join(" ");
//     }
// }




// N10

// {
//     function reverse(string) {
//         return string.split(' ').reverse().join(' ');
//     }
//     console.log(reverse("Hello World"));

// }