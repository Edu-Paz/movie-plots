import "dotenv/config";
import express from "express";
import routes from "./src/routes/index.js";

const PORT = 3000;
const app = express();

// Servir arquivos estáticos da pasta "public"
app.use(express.static("public"));
routes(app);


app.listen(PORT, () => {
    console.log("Servidor escutando");
});
