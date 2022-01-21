import express from 'express';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import template from './template';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';


const app = express();
/*… configure express … */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compress());
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => { res.status(200).send(template()); });

app.use('/', userRoutes);
app.use('/', authRoutes);

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: `${err.name}: ${err.message}` });
    }
});


export default app;