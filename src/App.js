import React, {useState, useRef} from 'react'
import './App.css';
import AddItem from './AddItem.js'

function App() {
  const inputRef = useRef()
  const [query, setQuery] = useState([])
  // const [movies, setMovies] = useState([])

  function getMovies(e) {
    e.preventDefault()

    const value = inputRef.current.value
    if(value === '') return
    setQuery(prevQuery => {
      return [...prevQuery, value]
    })
    inputRef.current.value = ''

    // const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1`

    // try{
    //   const res = await fetch(url)
    //   if(!res.ok) {
    //     throw new Error(res.status)
    //   }
    //   const data = await res.json()
    //   setMovies(data.results)
    // }catch(err){
    //   alert('Error')
    //   console.error(err)
    // }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Movie Search</h1>

        <form className='search-form' onSubmit={getMovies}>
          <label htmlFor='searchbar'>Find movie</label>
          <input type='text' 
          name='searchbar'
          ref={inputRef} 
          // value={query}
          // onChange={(e) => setQuery(query => e.target.value)}
          />
          <button type='submit'>Search</button>
        </form>

        {query.map(item => (
          <div>{query}</div>
        ))}

        {/* <div className='movies-html'>
          {movies.map(movie => (
            <div className='movie-card' key={movie.id}>
              <h2>{movie.title}</h2>
              <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt=''/>
              <p className='text'>{movie.overview}</p>
            </div>
          ))}
        </div> */}
      </header>
      
      <AddItem/>
    </div>
  );
}

export default App;
