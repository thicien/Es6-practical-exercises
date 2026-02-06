const users = [
  { id: 1, name: "Alice", role: "admin", age: 30 },
  { id: 2, name: "Bob", role: "user", age: 22 },
  { id: 3, name: "Charlie", role: "admin", age: 35 },
  { id: 4, name: "David", role: "user", age: 28 },
  { id: 5, name: "Eve", role: "guest", age: 19 }
];
const result = users.reduce((acc, user) => {
  const { role, name, age } = user;

  if (!acc[role]) {
      acc[role] = {
      totalUsers: 0,
      names: [],
      totalAge: 0,
      averageAge: 0
    };
  }

  acc[role].totalUsers += 1;
  acc[role].names.push(name);
  acc[role].totalAge += age;
  acc[role].averageAge = acc[role].totalAge / acc[role].totalUsers;

  return acc;
}, {});

console.log(result);