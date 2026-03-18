import { EmplRepository } from "../repository/EmplRepository";
import { Request, Response } from "express";

export class EmplController {

    private repository: EmplRepository = new EmplRepository();

    public async getEmployees(req: Request, res: Response) {
        try {
            const employees = await this.repository.getEmployees();
            res.send(employees);
        } catch (error) {
            console.error('Error fetching employees:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    public async getEmployeeById(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        try {
            const employee = await this.repository.getEmployeeById(id);
            if (employee) {
                res.send(employee);
            } else {
                res.status(404).json({ error: 'Employee not found' });
            }
        } catch (error) {
            console.error('Error fetching employee:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    public async addEmployee(req: Request, res: Response) {
        const employeeData = req.body;
        try {
            const newEmployee = await this.repository.addEmployee(employeeData);
            res.status(201);
        } catch (error) {
            console.error('Error adding employee:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    public async updateEmployeePosition(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const { position } = req.body;

        try {
            const updatedEmployee = await this.repository.updateEmployeePosition(id, position);
            if (updatedEmployee) {
                res.json(updatedEmployee);
            } else {
                res.status(404).json({ error: 'Employee not found' });
            }
        } catch (error) {
            console.error('Error updating employee position:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

        public async deleteEmployee(req: Request, res: Response) {
            const id = parseInt(req.params.id);
            try {
                const deletedEmployee = await this.repository.deleteEmployee(id);
                if (deletedEmployee) {
                    res.json(deletedEmployee);
                } else {
                    res.status(404).json({ error: 'Employee not found' });
                }
            } catch (error) {
                console.error('Error deleting employee:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    }