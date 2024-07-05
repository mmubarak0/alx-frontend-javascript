export default function getStudentIdsSum(students) {
  return students.reduce((a, student) => a + student.id, 0);
}
