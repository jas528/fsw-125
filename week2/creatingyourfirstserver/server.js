const express = require ('express');
const app = express();

 let movies=[
     {movies: "The color purple"},
     {movies: "Troy"},
     {movies: "candyman"},
     {movies: "dancing with wolves"},
     {movies: "Troy1"},
     {movies: "Troy2"},
     {movies: "Troy3"},
     {movies: "Kiss the girls"}
 ]

 let actors= [
    {name: "Brad Pitt", dates: "1985"},
    {name: "Danny glover", dates: "2000"},
    {name: "Morgan freemon", dates:"2001"}
 ]
 let animals=[
{type: "dogs"},
{type: "cats"},
{type: "pigs"}
 ]



 app.get('/movies', (req, res) => {
     res.send(movies)
 })

 app.get('/actors', (req, res) => {
    res.send(actors)
})
app.get('/animals', (req, res) => {
    res.send(animals)
})

app.listen(3000, () => {
    console.log('App is listening on port 3000!')
})
