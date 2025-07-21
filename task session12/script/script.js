// let numbers = [10, 20, 30, 40];

// function check() {
//   let input = prompt("Enter a number:");
//   let num = Number(input);

//   let found = numbers.find(n => n > num);

//   if (found !== undefined) {
//     console.log("Number bigger than input:", found);
//   } else {
//     numbers.push(num);
//     console.log("Added to array:", numbers);
//   }
// }

// check();

let user = [];

function addUsers(times = 2) {
  for (let i = 0; i < times; i++) {
    let id = +prompt("Enter user ID:");
    let name = prompt("Enter name:");
    let salary = +prompt("Enter salary:");
    user.push({ name, id, salary });
    console.log("Added");
  }
  console.table(user);
}

function updateUsers(times = 1) {
  for (let i = 0; i < times; i++) {
    let id = +prompt("Enter user ID to update:");
    let yuser = user.find((e) => e.id === id);
    let name = prompt("Update name ");
    let salaryStr = prompt("Update salary :");
    yuser.name = name || yuser.name;
    yuser.salary = salaryStr ? +salaryStr : yuser.salary;
    console.log("Updated");
  }
  console.table(user);
}

function deleteUsers(times = 1) {
  for (let i = 0; i < times; i++) {
    let id = +prompt("Enter user ID to delete:");
    let index = user.findIndex((e) => e.id === id);
    user.splice(index, 1);
    console.log("Deleted");
  }
  console.table(user);
}

addUsers(2);
updateUsers(1);
deleteUsers(1);
