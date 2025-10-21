const students = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const studentMap = new Map(students.map(student => [student.id, student.name]));
console.log(studentMap.get);
