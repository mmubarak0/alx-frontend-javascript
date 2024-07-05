interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Mohammed",
  lastName: "Mubarak",
  age: 113,
  location: "Khartoum",
}
const student2: Student = {
  firstName: "Dodo",
  lastName: "Mubarak",
  age: 115,
  location: "Khartoum",
}
const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
for (const student of studentsList) {
  const trow = document.createElement('tr');
  const tcol1 = document.createElement('td');
  const tcol2 = document.createElement('td');
  tcol1.textContent = student.firstName;
  tcol2.textContent = student.location;
  trow.append(tcol1);
  trow.append(tcol2);
  tbody.append(trow);
}
table.append(thead);
table.append(tbody);
