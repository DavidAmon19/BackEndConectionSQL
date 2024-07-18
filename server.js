const express           = require("express");
const cors              = require("cors");
const app               = express();
const port              = 9090;
const professoresRoutes = require("./routes/professoresRoutes");

app.use(express.json());
app.use(cors());

app.use('/professores', professoresRoutes);


app.listen(port, ()=>{
    console.log(`Servidor rodando no link http://localhost:${port}`)
})