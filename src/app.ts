
import express, { Application} from 'express';
import cors from 'cors';


const app: Application = express();

// application routes
import userRoutes from './app/modules/user/user.route'

// middleware function declaration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/api/v1/user", userRoutes);

export default app;

/*
breakdown: 1. interface => interface.ts
           2. schema, model => to take model.ts file
           3. route, route function => controller.ts
           4. database query => 

*/