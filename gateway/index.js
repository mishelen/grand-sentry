import app from './app.js';

const port = parseInt(process.env.PORT || 4001, 10);

app.listen(port, () => {
  console.log(`app listen at ${port}`);
});
