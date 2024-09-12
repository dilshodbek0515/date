const clockEl = document.querySelector(".clock_item")
console.log(clockEl);
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
}, 1000)