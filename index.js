let hours = prompt("Введіть кількість годин:");
if (isNaN(hours) || hours < 0) { 
alert("Ви ввели невірне значення!");
} else {
let seconds = hours * 3600;
alert("У " + hours + " годинах " + seconds + " секунд.");
}
