import { dal } from "../2-utils/dal"

class EmployeeService {
    public async getAllEmployees(){
        let employees = "ff"
        const sql = "SELECT `id`, `firstName`, `lastName`, `birthDate` FROM employees"
        employees = await dal.execute(sql)
        return employees
    }
}

export const employeeService = new EmployeeService ()