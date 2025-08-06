import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT =process.env.SERVER_PORT;

//instaciar a api
const app = express();

// configurar middleware
app.use(express.json());


//chamar a rotas


//handler error 
app.use((_,res)=> {
    res.status(404).json({message: "Rota não encontrada"});
})
// iniciar a aplicaçao
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});