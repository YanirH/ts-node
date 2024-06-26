import express, {Request, Response, NextFunction} from 'express'
import { employeeService } from '../4-services/employees'

class EmployeesController {
    public readonly router = express.Router()

    public constructor() {
        this.router.get('/employees', this.getAllEmployees)
    }

    private async getAllEmployees(req: Request, res: Response, next: NextFunction) {
        const employees = await employeeService.getAllEmployees()
        res.json(employees)
    }
}

export const employeesController = new EmployeesController()