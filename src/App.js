import React, {useState, useRef} from 'react'
import './App.css';
import AddItem from './AddItem.js'
import Game from './TicTac Toe/Game'

function App() {
  const queryRef = useRef()
  const [movies, setMovies] = useState([])

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
      console.log(data.results)
    }catch(err){
      alert('Error')
      console.error(err)
    }
  }

  return (
    <div>
      <AddItem/>
      <Game />

      <main>
        <div className="container main-grid">

          <form className='movie-search-form' onSubmit={getMovies}>
            <h1>React Movie Search</h1>
            <label htmlFor='searchbar'>Find movie</label>
            <input type='text'
              placeholder='For example "Batman"'
              name='searchbar'
              ref={queryRef}
            />
            <button type='submit'>Search</button>
          </form>

          <div className='movies-list'>

            {movies.map(movie => (
              <div className='movie-card' key={movie.id}>
                <img
                  className='movie-card-poster' 
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt=''/>

                <div className='movie-card-details'>
                  <h2>{movie.title}</h2>
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

    </div>
  );
}

export default App;
