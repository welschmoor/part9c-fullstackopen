import express from "express";
import diaryRouter from './routes/diaries';

const app = express();
app.use(express.json());

const PORT = 3001;

app.get('/a', (req, res) => {
  res.send('b');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log('Server running');
});