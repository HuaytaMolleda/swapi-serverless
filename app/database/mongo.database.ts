import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv'

const dotenvPath : string = path.join(__dirname, '../', 'config/.env');
dotenv.config({
  path: dotenvPath,
});



export default mongoose.connect(String(process.env.DB_URL), {
  dbName: process.env.DB_NAME,
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
