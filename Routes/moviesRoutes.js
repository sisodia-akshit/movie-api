const express = require('express');
const moviesController = require('./../Controller/moviesController.js')
const authController = require('./../Controller/authController.js')

const router = express.Router();

// router.param('id',moviesController.checkId)
router.route('/highest-rated').get(moviesController.getHighestRated,moviesController.getAllMovies)
//for movie stats
router.route('/movie-stats').get(moviesController.getMovieStats);
//get movies by genre
router.route('/genre/:genre').get(moviesController.getMovieByGenre);

router.route('/')
        .get(authController.protect,moviesController.getAllMovies)
        .post(moviesController.createMovie);

router.route('/:id')
        .get(authController.protect,moviesController.getMovie)
        .patch(moviesController.patchMovie)
        .delete(authController.protect,authController.restrict('admin'),moviesController.deleteMovie);

module.exports = router;