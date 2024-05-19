"use strict";

const weak = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
const date = new Date();
const options = { weekday: 'long' };
const dayOfWeek = date.toLocaleString('ru-RU', options); 
for (let day of weak) {
  let textDay = document.createElement('p');
  document.body.appendChild(textDay);
  textDay.textContent = day; 
  textDay.style.fontSize = "64px";
  if (day === "суббота" || day === "воскресенье") {
    textDay.style.fontWeight = "900";
  }
  if (day === dayOfWeek) {
    textDay.style.fontStyle = "italic";
  }
}

