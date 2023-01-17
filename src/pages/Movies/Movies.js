import React, {useState, useRef, useEffect} from "react";
import { Link } from 'react-router-dom';
import Card from "./Card";
import Watchlist from "./Watchlist";

function Movies() {
    const queryRef = useRef()
    const [moviesData, setMoviesData] = useState([])
    const [isWatchlist, setIsWatchlist] = useState(true)
    const [watchlistData, setWatchlistData] = useState([])
  
    async function getMovies(e) {
      e.preventDefault()
      const value = queryRef.current.value
      const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${value}&page=1`
  
      try {
        const res = await fetch(url)
        if(!res.ok) {
          throw new Error(res.status)
        }
        const data = await res.json()
        setMoviesData(data.results.map(movie => ({...movie, active:false})))
        queryRef.current.value = ''
      }
      catch(err) {
        alert('Add some text in the search to get results')
        console.error(err)
      }
    }

    function toggleWatchlist(id) {
      setIsWatchlist(prev => !prev)

      setMoviesData(movies => movies.map(movie => {
        if (movie.id === id){
          return {...movie, active: !movie.active}}
          else {
            return movie}
      }))     
      setWatchlistData(prev => [...prev, id])
      console.log(moviesData)
      // setWatchlistData(prev => {
        //   prev.filter(item => item.id !== 2)
        // })
    }

    useEffect(() => {
      localStorage.setItem('watchlist', JSON.stringify(watchlistData))
    }, [watchlistData])
      


    return (
      <main>
        <div className="primary-grid">
          <form className='movie-search-form' onSubmit={getMovies}>
            <h1 className="movie-search-title">React Movie Search</h1>
            
            <p><Link to="/watchlist">Watchlist</Link></p>

            <label htmlFor='searchbar'></label>
            <input type='text'
              placeholder='For example "Batman"'
              name='searchbar'
              ref={queryRef}
            />
            <button className='movie-form-btn' type='submit'>Search</button>
          </form>
          {/* <Watchlist moviesData = {moviesData} /> */}

          <div className='movies-list'>
            {moviesData.map(movie => (
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
                toggleWatchlist={toggleWatchlist}
                isWatchlist={isWatchlist}
                watchlistData={watchlistData}
              />
            ))}
          </div>

        </div>
      </main>
    )
}

export default Movies