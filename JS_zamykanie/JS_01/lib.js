"use strict";
(function()
{
        var number_1=Number();
        var popytky=10;
        var number_2=Number();
        var j = 1;
        number_1 = Math.floor(Math.random() * 1001);
        // console.log(number_1);
        window.start=function()
        {
                while (number_1 !== number_2 && j<=popytky)
                {
                    number_2 = prompt("Укажите ЧИСЛО №"+j);
                    if (number_2 == null){alert("Вы не угадали"); break;}
                    if (isNaN(number_2)) {alert("Введи число!"); continue;}
                    if (number_2 == number_1)
                      {
                      alert("Ты угадал для второй попытки нажми F5");
                      break;
                      }
                      if (j == 10){ location.reload(); alert("Все попытки закончелись, угадываем новое число");}
                      else if (number_2 > number_1)
                      {
                      alert("нее.. Меньше");
                      }
                      else   {
                      alert("нее.. Больше");
                      }
                        j++;
                }
      }
})()
