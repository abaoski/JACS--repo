import express from 'express';
import { DataSource } from 'typeorm';
import userRoutes from './routes/User';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3307, // Ensure this is correct
  username: 'root',
  password: '',
  database: 'user_management_db',
  synchronize: true,
  logging: false,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: ['src/subscribers/**/*.ts'],
});

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected on port 3307');
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((error) => console.error('Database connection error:', error));
