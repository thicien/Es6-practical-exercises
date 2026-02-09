const users = [
  { id: 1, name: "Alice", role: "admin", age: 30 },
  { id: 2, name: "Bob", role: "user", age: 22 },
  { id: 3, name: "Charlie", role: "admin", age: 35 },
  { id: 4, name: "David", role: "user", age: 28 },
  { id: 5, name: "Eve", role: "guest", age: 19 }
  {id: 6, name: "Kevin", role: "guest", age: 21}
];
const result = users.reduce((acc, user) => {
    const { role, name, age } = user;
    if (!acc[role]) {
        acc[role] = {
            totatlUsers: 0,
            totatAge: 0,
            names: [],
            AverageAge: 0
        }
    }
    acc[role].totatAge += age;
    acc[role].totatlUsers += 1;
    acc[role].names.push(name);
    acc[role].AverageAge = acc[role].totatAge / acc[role].totatlUsers;
    acc[role].totalNames = acc[role].names.length;
    return acc;
}, {})
console.log(result);
console.log(result['admin'].names);