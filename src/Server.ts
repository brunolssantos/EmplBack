import express from 'express';
import { EmplRoutes } from './routes/EmplRoutes';

export class Server{

    private app = express();

    private routes = new EmplRoutes(this.app);
    
    public startServer(){
        this.routes.loadRoutes();
        this.app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });

        this.app.on('mount', (err) => {
            console.error('Server error:', err);
        });

    }

}