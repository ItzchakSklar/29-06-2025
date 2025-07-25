import express from 'express';
import  configRoutes  from './Routes/configRoutes.js';

const PORT = process.env.PORT || 3005;

const router = express.Router();
const app = express();

app.use(express.json());

configRoutes(app);

app.listen(PORT, () => {
    console.log(`Server runing on port:${PORT}`);
})

