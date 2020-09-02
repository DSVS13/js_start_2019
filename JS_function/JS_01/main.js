var number_1=Number();
var number_2=Number();
var j = 0;

number_1 = Math.floor(Math.random() * 1001);
console.log(number_1);
while (number_1 !== number_2)
{
    j++;
    number_2 = prompt("Укажите ЧИСЛО №"+j);
    if (number_2 == null){alert("Вы не угадали"); break;}
    if (isNaN(number_2)) {alert("Введи число!"); continue;}
    if (number_2 == number_1)
      {
      alert("Ты угадал для второй попытки нажми F5");
      break;
      }
      else if (number_2 > number_1)
      {
      alert("нее.. Меньше");
      }
      else   {
      alert("нее.. Больше");
      }

}
