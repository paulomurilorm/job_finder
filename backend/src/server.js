// App

const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const path = require("path");
const db = require("./config/db");
const PORT = 3000;

// Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle bars

app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static folder

app.use(express.static(path.join(__dirname, "../../frontend/public")));

// Routes

app.use("/", require("./routes/jobs"));

// Server ON

async function serverOn() {
  try {
    await db.authenticate();
    console.log("Banco de dados autenticado com sucesso!");
    await db.sync();
    console.log("Banco de dados sincronizado com sucesso!");
    app.listen(PORT, () => {
      console.log(`O Express está rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error(
      `Ocorreu um erro ao se conectar com o banco de dados: ${error}`,
    );
    res.status(500).send("Ocorreu um erro interno.");
    process.exit(1);
  }
}

serverOn();
