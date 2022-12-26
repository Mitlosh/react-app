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
        <div className='#'>

            <form className='primary-grid search-form' onSubmit={onSubmit}>
                <h1 className='list-title'>Add item</h1>
                <label className='list-label'htmlFor='sorting'>
                    Find item
                </label>
                <input className='list-input' 
                    name='sorting'
                    type='text'
                    value={query}
                    onChange={(e) => (setQuery(prev => e.target.value))}
                />
                <label className='list-label' htmlFor='add-item'>
                    Add item
                </label>
                <input className='list-input' 
                    name='add-item'
                    type='text' 
                    ref={inputRef} 
                />
                <button className='btn' type='submit'>Add</button>
            </form>

            {filteredItems.map(item => (
                <div>{item}</div>
            ))}

        </div>
    )
}

export default ToDo