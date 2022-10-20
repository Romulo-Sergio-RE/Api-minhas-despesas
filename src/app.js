import express  from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
import cors from 'cors';

db.on("erro", console.log.bind(console, "Erro de conexao"))

db.once("open", ()=>{
    console.log("conexao com o banco sucesso")
})

const app = express();

app.use(express.json());
app.use(cors());
routes(app);

export default app;