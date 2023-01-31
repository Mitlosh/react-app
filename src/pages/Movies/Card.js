import React from "react";

function Card(props) {
    return (
        <div className='movie-card' key={props.id}>
            <img
                className='movie-card-poster' 
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`} alt=''
            />
            <div className='movie-card-details'>
                <div className="watchlist-flex">
                <h2 className="movie-title">{props.title}</h2>
                {/* <button
                    className="watchlist-btn"
                    onClick={() => props.toggleWatchlist(props.id)}
                >
                    {props.active ? "Remove from watchlist" : "Add to Watchlist"}
                </button> */}
                </div>
                <p className='release-date'>{props.release_date}</p>
                <p className='vote-average'>{props.vote_average} 
                <small>({props.vote_count} votes)</small></p>
                <p className='overview'>{props.overview}</p>
                {/* <input type='checkbox' className='expand-btn' /> */}
            </div>
        </div>
    )
}

export default Card