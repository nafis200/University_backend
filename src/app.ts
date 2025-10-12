import express, { Application } from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { userRoute } from './app/modules/User/user.routes';
import { AdminRoutes } from './app/modules/Admin/admin.route';
import { fileRoute } from './app/modules/FileUpload/file.route';

const app:Application = express()
app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello i am nafis ahamed')
})

app.use('/api/user',userRoute)
app.use('/api/admin',AdminRoutes)
app.use('/api/file',fileRoute)

export default app;