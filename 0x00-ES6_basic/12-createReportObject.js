export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments: (self) => Object.keys(self).length,
  };
  return reportObject;
}
