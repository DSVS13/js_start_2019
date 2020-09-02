"use strict";0
var k=0;
var users= {};
function UsersList(user_1, k, users) {
  this.user_1=user_1;
  this.k=k;
  this.users=users;
  this.users_add = function() {
    users[k]=user_1;
    console.log(users);
  return users;
}
  this.getAllUsers = function() {
this.j;
console.log(users.length);
    // while (j<=(k))
      while (users[j]!==undefined)
          {
              console.log(users[j][0]);
              console.log(users[j][1]);
              console.log(users[j][2]);
              console.log('\n');
              j++;
          }
  }
}
// обработчик 1 запроса
function User(full_name, date_reg) {
  this.full_name;
  this.date_reg;
  if (full_name==null) {users_list_object.getAllUsers();}
  else {
    this.user_1 = full_name.split(" ");
      this.push_date_reg = function() {
      this.user_1.push(date_reg);
        return this.user_1;
  }
  }
}


var k; var j;
k=Number(); j=Number();

while (full_name!==null) {
      var full_name = prompt("Введите 1-имя и 2-фамелию через пробел");
        if (full_name!==null) {
      var date_reg = full_date(); //вычисляет дату
      var user_object = new User(full_name, date_reg); // создает объект для регистрации 1
      var user_1 = user_object.push_date_reg(); // передаем массив 3строки в переменную
      var users_list_object = new UsersList(user_1, k, users); // создает объект список запросов
      var users = users_list_object.users_add();// толкаем данные 1го человека в общий массив
    }
    else {
      users_list_object.getAllUsers(); // если отмена делаем перерасчет
    }
      k++;
}
