const mainHeading = document.getElementById("main-heading");
mainHeading.textContent = "Tarak Mehta Ka Ooltah Chashmah - Students";

const container = document.querySelector(".container");
container.style.backgroundColor = "#4a148c";

const studentList = document.getElementById("student-list");
const secondStudent = studentList.children[1];
secondStudent.style.backgroundColor = "#ff7043";
secondStudent.style.color = "white";

const addButton = document.getElementById("add-btn");
addButton.addEventListener("click", () => {
  const newStudent = document.createElement("li");
  newStudent.className = "student";
  newStudent.textContent = "Popatlal";
  studentList.appendChild(newStudent);
});

const thirdStudent = studentList.children[2];
studentList.removeChild(thirdStudent);

console.log(studentList.parentElement);
console.log(studentList.children);
console.log(studentList.firstElementChild.textContent);
console.log(studentList.lastElementChild.textContent);

const fourthStudent = studentList.children[3];
console.log(fourthStudent.textContent);
console.log(fourthStudent.nextElementSibling?.textContent);
console.log(fourthStudent.previousElementSibling?.textContent);
