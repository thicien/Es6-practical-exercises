const students = new Map();
students.set("claire", 56);
students.set("carine", 87);
students.set("kevin", 95);
console.log("initial output:", students);

students.set("claire", 67);
console.log("After some updates:", students);

let highestGrade = Infinity;
let topStudent = "";
for (const [name, grade] of students) {
    if (grade > highestGrade) {
        highestGrade = grade;
        topStudent = name;
    }
}
console.log(`"The highest grade is:", ${highestGrade} by ${topStudent}`);
