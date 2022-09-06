
// bring in express code
const express = require('express')

//initialize server and port
const app = express()
const port = 3000

const today = new Date()
const favoriteMovieList = ["Star Wars", "The Avengers"]
const moviesString = favoriteMovieList.join()

// define the default server route (aka "/") for our server

app.get('/', (req, res) => {
  res.send('Patrick Vickerman ' + today)
})

app.get('/list-movies', (req, res) => {
    res.send(moviesString)
  })


// Finally, run the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)//initialize server and port
})