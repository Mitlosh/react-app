import React, { useEffect } from "react";
import Card from "./Card";

function Watchlist(props) {
    const watchlist = JSON.parse(localStorage.getItem('watchlist'))
    useEffect(() => {
    }, [])
    
    return (
        <>
            <h3>Watchlist</h3>
            <p>Watchlist Cards</p>
            {watchlist.map(movie => (
              <Card
                key = {movie.id}
                id = {movie.id}
                title = {movie.title}
                vote_average = {movie.vote_average}
                vote_count = {movie.vote_count}
                poster_path = {movie.poster_path}
                release_date = {movie.release_date}
                overview = {movie.overview}
                active = {movie.active}
                
              />
            ))}
            {props.moviesData}
            {watchlist}
        </>
    )
}

export default Watchlist