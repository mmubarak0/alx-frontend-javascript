export default function updateStudentGradeByCity(students, city, newGrades) {
  /* eslint-disable no-param-reassign */
  return students.filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((grade) => grade.studentId === student.id);
      student.grade = grade ? grade.grade : 'N/A';
      return student;
    });
}
