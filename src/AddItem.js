import React, {useState, useRef} from 'react'

function AddItem() {
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

            </header>
        </div>
    )
}

export default AddItem