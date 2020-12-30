import axios from 'axios';

const GET_ALL_EMPLOYEES="http://localhost:8080/api/v1/employees";
const ADD_EMPLOYEE="http://localhost:8080/api/v1/addEmployee";
const UPDTATE_EMPLOYEE="http://localhost:8080/api/v1/updateemployee";
const GET_EMPLOYEE= "http://localhost:8080/api/v1/employee";
const DELETE_EMPLOYEE="http://localhost:8080/api/v1/deleteEmployee";





class EmployeeService
{
    getEmployees()
    {
        return axios.get(GET_ALL_EMPLOYEES);
    }
    addEmployee(employee)
        {
        return axios.post(ADD_EMPLOYEE,employee);
        }
        getEmployee(id)
        {
            return axios.get(GET_EMPLOYEE+'/'+id);
        }
updateEmployee(employee,employeeId)
{
    return axios.put(UPDTATE_EMPLOYEE+'/'+employeeId,employee);
}
deleteEmployee(employeeId)
{
    return axios.delete(DELETE_EMPLOYEE+'/'+employeeId);
}
    
}
export default new EmployeeService()