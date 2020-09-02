
function User(first_name, last_name, date_reg) {
  this.first_name=first_name;
  this.last_name=last_name;
  this.date_reg=date_reg;
  this.getFullName=function () {
    return this.first_name+' '+this.last_name+' '+this.date_reg;
  }
}

function Userlist() {
  var user_1;
  var users = [];
  function user_object() {
  var full_name = prompt('Введите 1-имя и 2-фамелию через пробел');
  while (full_name !== null) {
  var time = new Date ();
  var date_reg = (time.getDate()+'.'+(time.getMonth()+1)+'.'+time.getFullYear()+' '+time.getHours()+':'+time.getMinutes());
  if (full_name!==null){ user_1 = full_name.split(" ");}
  // user_1 = full_name.split(" ");
  var user = new User(user_1[0], user_1[1], date_reg)
  users.push(user);
  var full_name = prompt('Введите 1-имя и 2-фамелию через пробел');
}
return users;
}
user_object();
// window.user_object();

function getAllUsers() {
  var i=0; console.log(users);
    while (users[i]!==undefined){
      console.log(users[i].getFullName());
      i++;
    }

  }
return getAllUsers();
}



// console.log(Userlist());
Userlist();
// user_object();
// user_object();
