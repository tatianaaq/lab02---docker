const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || "Hola desde mi API";

app.get("/", (req, res) => {
    res.json({
        message: MESSAGE,
        container: process.env.HOSTNAME
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});