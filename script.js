bonus = 0;

gestionOne = prompt("Какого цвета волосы у моего преподавателя?").toLowerCase().trim();
if (gestionOne == "красные") {
    bonus += 10;
} else {
    alert("Не угадал, следущий вопрос");
}


gestionTwo = prompt("Вода мокрая?").toLowerCase().trim();
if (gestionTwo == "да") {
    bonus += 10;
} else {
    alert("Стыдно не знать");
}


gestionThree = prompt("Главный злодей в Мстителях?").toLowerCase().trim();
if (gestionThree == "танос") {
    bonus += 10;
} else {
    alert("Посмотри Мстителей");
}


gestionFour = prompt("Кто друг человека?").toLowerCase().trim();
if (gestionFour == "собака") {
    bonus += 10;
} else {
    alert("Позорище");
}


gestionFive = prompt("Есть true, а есть??").toLowerCase().trim();
if (gestionFive == "false") {
    bonus += 10;
} else {
    alert("Позорище");
}

if (bonus < 10) {
    alert("Попей чай.");
} else if (bonus == 10) {
    alert(`У вас есть ${bonus} балов и вы ответили на ${bonus / 10} вопрос из 5.`);
} else if (bonus > 10 && bonus < 50) {
    alert(`У вас есть ${bonus} балов и вы ответили на ${bonus / 10} вопроса из 5.`);
} else {
    alert(`У вас есть ${bonus} балов и вы ответили на ${bonus / 10} вопросов из 5.`);
}