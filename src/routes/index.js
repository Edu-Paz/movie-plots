import express from "express";
import MovieController from "../controllers/MovieController.js";

function routes(app) {
    app.get("/", (req, res) => {
        res.status(200);
        res.sendFile("index.html", { root: "./public" });
    });
    app.use(express.json());
    app.get("/movie/search", MovieController.getMoviePlot   );
};

export default routes;