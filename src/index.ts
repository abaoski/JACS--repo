import express from 'express';
import { createConnection } from 'typeorm';
import userRoutes from './routes/user';

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

createConnection().then(() => {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
});