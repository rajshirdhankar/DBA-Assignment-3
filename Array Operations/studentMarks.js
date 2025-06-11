let marks = [85, 62, 90, 78, 88, 95, 70, 60, 100, 82];

console.log("Original array:", [...marks]);

const totalStudents = marks.length;
const highestMark = Math.max(...marks);
const lowestMark = Math.min(...marks);
const averageMark = (marks.reduce((sum, mark) => sum + mark, 0) / totalStudents).toFixed(2);

console.log("\nCalculations:");
console.log("Total number of students:", totalStudents);
console.log("Highest mark:", highestMark);
console.log("Lowest mark:", lowestMark);
console.log("Average mark:", averageMark);

const ascending = [...marks].sort((a, b) => a - b);
const descending = [...marks].sort((a, b) => b - a);

console.log("\nSorted arrays:");
console.log("Ascending order:", ascending);
console.log("Descending order:", descending);

marks.push(76); 
marks.unshift(76);
console.log("\nAfter adding 76 at beginning and end:", [...marks]);

marks.shift(); 
marks.pop(); 

console.log("\nAfter removing first and last marks:", [...marks]);

const has90 = marks.includes(90);
console.log("\nDoes the array contain 90?", has90 ? "Yes" : "No");

console.log("\nFinal array:", [...marks]);