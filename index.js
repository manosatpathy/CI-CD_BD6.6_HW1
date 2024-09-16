const express = require('express');
const cors = require('cors');
const app = express();
const { getAllMovies, getMovieById } = require('./controllers');

// Exercise 1: Retrieve All Movies
app.get('/movies', async (req, res) => {
  const movies = getAllMovies();
  return res.status(200).json({ movies });
});

// Exercise 2: Retrieve Movie by ID
app.get('/movies/details/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const movie = getMovieById(id);
  return res.status(200).json({ movie });
});

module.exports = { app };
