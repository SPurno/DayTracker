let today = new Date().getDay();
let days = document.querySelectorAll(".days");
let popup = document.createElement('div');
popup.className = "popup";
let texts = ["Today is Sunday , We are busy","Today is Monday , and we must work","Today is tuesday , and we have a lot of energy","Today is wednesday , and we are bored","Today is thursday , and we are prepare for weekend","Today is friday , and we are happy","Today is saturday , and we get party"];
days.forEach((val,index) => {
  if(today === index){
    days[index].classList.add('today');
    days[index].appendChild(popup);
    popup.innerHTML = texts[index];
  }
});
