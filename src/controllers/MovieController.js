import MovieService from "../services/MovieService.js";
import { formatMovieObject } from "../utils/helpers.js";

class MovieController {
    static async getMoviePlot(req, res){
        const movieName = req.query.movie;

        if (!movieName) {
            return res.status(400).json({ message: "O nome do filme é obrigatório." });
        }

        try {
            const moviePlot = await MovieService.getMovieInfo(movieName);
            const response = formatMovieObject(moviePlot)
            res.status(200).json(response);
        }
        catch (error){
            res.status(500).json({message: "Erro ao buscar filme." });
        }
    }
}

export default MovieController;