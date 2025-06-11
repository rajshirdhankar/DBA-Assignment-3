const studentRecords = {
  101: {
    name: "Aarav Mehta",
    age: 16,
    grade: "10th",
    subjects: ["Math", "Science", "English"],
    address: {
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001"
    }
  },
  102: {
    name: "Priya Sharma",
    age: 15,
    grade: "9th",
    subjects: ["Math", "Social Studies", "Hindi"],
    address: {
      city: "Delhi",
      state: "Delhi",
      pincode: "110001"
    }
  },
  103: {
    name: "Rahul Patel",
    age: 17,
    grade: "11th",
    subjects: ["Physics", "Chemistry", "Biology"],
    address: {
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560001"
    }
  }
};

function addStudent(id, name, age, grade, subjects, address) {
  if (studentRecords[id]) {
    console.log(`Student with ID ${id} already exists.`);
    return false;
  }
  studentRecords[id] = { name, age, grade, subjects, address };
  return true;
}

function updateStudent(id, updates) {
  if (!studentRecords[id]) {
    console.log(`Student with ID ${id} not found.`);
    return false;
  }
  studentRecords[id] = { ...studentRecords[id], ...updates };
  return true;
}

function deleteStudent(id) {
  if (!studentRecords[id]) {
    console.log(`Student with ID ${id} not found.`);
    return false;
  }
  delete studentRecords[id];
  return true;
}

function listAllStudents() {
  console.log("All Students:");
  for (const id in studentRecords) {
    console.log(`ID: ${id}`, studentRecords[id]);
  }
}

function searchByCity(city) {
  const result = [];
  for (const id in studentRecords) {
    if (studentRecords[id].address.city.toLowerCase() === city.toLowerCase()) {
      result.push({ id, ...studentRecords[id] });
    }
  }
  return result;
}

function studentsBySubject(subject) {
  const result = [];
  for (const id in studentRecords) {
    if (studentRecords[id].subjects.includes(subject)) {
      result.push(studentRecords[id].name);
    }
  }
  return result;
}

function calculateAverageAge() {
  let totalAge = 0;
  let count = 0;
  for (const id in studentRecords) {
    totalAge += studentRecords[id].age;
    count++;
  }
  return count > 0 ? totalAge / count : 0;
}

addStudent(104, "Neha Gupta", 16, "10th", ["Math", "Art", "History"], {
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400002"
});

updateStudent(101, { age: 17, grade: "11th" });

listAllStudents();

console.log("Students in Mumbai:", searchByCity("Mumbai"));
console.log("Students taking Math:", studentsBySubject("Math"));
console.log("Average age:", calculateAverageAge());