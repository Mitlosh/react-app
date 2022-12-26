import React, {useState, useRef} from "react";

function Movies() {
    const queryRef = useRef()
    const [movies, setMovies] = useState([])
    const [watchlist, setWatchlist] = useState(false)
  
    async function getMovies(e) {
      e.preventDefault()
      const value = queryRef.current.value
      const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${value}&page=1`
  
      try{
        const res = await fetch(url)
        if(!res.ok) {
          throw new Error(res.status)
        }
        const data = await res.json()
        setMovies(data.results)
        queryRef.current.value = ''
      }catch(err){
        alert('Error')
        console.error(err)
      }
    }

    function toggleWatchlist() {
      setWatchlist(prev => !prev)
      console.log(watchlist)
    }

    return (
      <main>
        <div className="primary-grid">

          <form className='movie-search-form' onSubmit={getMovies}>
            <h1 className="movie-search-title">React Movie Search</h1>
            <label htmlFor='searchbar'></label>
            <input type='text'
              placeholder='For example "Batman"'
              name='searchbar'
              ref={queryRef}
            />
            <button className='movie-form-btn' type='submit'>Search</button>
          </form>

          <div className='movies-list'>
            {movies.map(movie => (
              <div className='movie-card' key={movie.id}>
                <img
                  className='movie-card-poster' 
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt=''/>

                <div className='movie-card-details'>
                  <div>
                    <h2>{movie.title}</h2>
                    <button className="watchlist-btn" onClick={toggleWatchlist}>
                      {watchlist ? "Watchlist" : "Remove"}
                    </button>
                  </div>
                  <p className='release-date'>{movie.release_date}</p>
                  <p className='vote-average'>{movie.vote_average} <small>({movie.vote_count} votes)</small></p>
                  <p className='overview'>{movie.overview}</p>
                  <input type='checkbox' className='expand-btn' />
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    )
}

export default Movies