export default function createEmployeesObject(departmentName, employees) {
  const resultObject = {
    [departmentName]: [...employees],
  };
  return resultObject;
}
