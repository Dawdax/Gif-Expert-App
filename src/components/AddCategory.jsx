import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChanged = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length <= 1) return

        // setCatgories((categories => [inputValue, ...categories]));
        onNewCategory(inputValue.trim())
        setInputValue('')
    }
    
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input
                type="text"
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={(e) => onInputChanged(e)}
            />
        </form>
    )
}
