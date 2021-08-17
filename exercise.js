//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
// Creating an alarm clock
let btn = document.getElementById("btn");
let currTime = document.getElementById("currTime");
let inputTime = document.getElementById("inputTime");
let audio = new Audio("mixkit-facility-alarm-908.wav");
let alert = document.getElementById("alert");
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
let date;
setInterval(() => {
  date = new Date();
  currTime.innerHTML = date.toTimeString().slice(0, 8);
}, 1000);
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//Set event listener on Button
btn.addEventListener("click", () => {
  if (inputTime.value != "") {
    let laggingSeconds = Number(currTime.innerText.slice(6, 8)) * 1000;
    let alarmTime = inputTime.value;
    let array = Array.from(alarmTime);
    array.splice(array.indexOf(":"), 1);
    alarmTime = array.join("");
    let alarmTimeHours = Number(alarmTime.slice(0, 2));
    let alarmTimeMinutes = Number(alarmTime.slice(2, 4));
    let mainTime = currTime.innerText.slice(0, 5);
    array = Array.from(mainTime);
    array.splice(array.indexOf(":"), 1);
    mainTime = array.join("");
    let mainTimeHours = Number(mainTime.slice(0, 2));
    let mainTimeMinutes = Number(mainTime.slice(2, 4));
    let alarmTotalMinutes, mainTotalMinutes, intervalTime;
    alarmTotalMinutes = alarmTimeHours * 60 + alarmTimeMinutes;
    mainTotalMinutes = mainTimeHours * 60 + mainTimeMinutes;
    if (alarmTotalMinutes > mainTotalMinutes) {
      intervalTime = (alarmTotalMinutes - mainTotalMinutes) * 60000;
      intervalTime -= laggingSeconds;
      setTimeout(() => {
        console.log("Alarm is ringing");
        audio.play();
      }, intervalTime);
    } else {
      intervalTime = 1440 - mainTotalMinutes + alarmTotalMinutes;
      intervalTime *= 60000;
      intervalTime -= laggingSeconds;
      setTimeout(() => {
        console.log("Alarm is ringing");
        audio.play();
      }, intervalTime);
    }
    alert.classList.add("show");
    setTimeout(() => {
      alert.classList.remove("show");
    }, 3000);
  } else {
    console.log("Enter time to set alarm");
  }
});
//----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
