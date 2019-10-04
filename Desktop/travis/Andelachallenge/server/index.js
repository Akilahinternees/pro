import express from 'express'
import router  from './routes/route-path'

const app = express();

app.use(express.json());
app.use('/',router);
const port = process.env.PORT || 3000;
app.listen(port,()=> {console.log(`server started listening on ${port}`)});

export default app;