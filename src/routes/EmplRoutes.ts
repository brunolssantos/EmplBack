import  express, {Application, Router} from 'express';
import { EmplController } from '../controllers/EmplController';

export class EmplRoutes {
    private app: Application;
    private router: Router = Router();
    private emplController = new EmplController();

    constructor(app: Application) {
        this.app = app;
        this.router.use(express.json());
        this.app.use('/empl', this.router);
    }
    
    public loadRoutes(){
            this.router.get('/hello', (req, res) => {
                res.json({ message: 'Hello, World!' });
            });
            this.router.get('/', this.emplController.getEmployees.bind(this.emplController));
            this.router.get('/get/:id', this.emplController.getEmployeeById.bind(this.emplController));
            this.router.post('/add', this.emplController.addEmployee.bind(this.emplController));
            this.router.put('/position/:id/', this.emplController.updateEmployeePosition.bind(this.emplController));
            this.router.delete('/delete/:id', this.emplController.deleteEmployee.bind(this.emplController));


    }
}