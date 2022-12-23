import React, {useState, useRef, useMemo} from 'react'

function ToDo() {
    const [items, setItem] = useState([])
    const [query, setQuery] =useState('')
    const inputRef = useRef()

    function onSubmit(e) {
        e.preventDefault()

        const value = inputRef.current.value
        if(value === '') return
        setItem(prev => {
            return [...prev, value]
        })
        inputRef.current.value = ''
    }

    const filteredItems = useMemo(() => {
        return items.filter(i => {
        return i.toLowerCase().includes(query.toLowerCase())
    })}, [items, query]) 

    return (
        <div className="container">
                <h1>Add item</h1>

                <form className='search-form' onSubmit={onSubmit}>
                    <input type='text'
                        value={query}
                        onChange={(e) => (setQuery(prev => e.target.value))}
                    />
                    <input type='text' 
                        ref={inputRef} 
                    />
                    <button type='submit'>Add</button>
                </form>

                {filteredItems.map(item => (
                    <div>{item}</div>
                ))}

        </div>
    )
}

export default ToDo