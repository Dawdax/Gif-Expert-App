import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon ball'])

    const onAddCategory = (NewCategory) => {
        //Agregando una nueva categoria 
        if (categories.includes(NewCategory)) return;

        setCategories([NewCategory, ...categories])
    }

    return (
        <>
            <h1>GifExperApp</h1>
            <AddCategory
                // setCategories = {setCategories} 
                onNewCategory={e => onAddCategory(e)}
            />

            {categories.map(category => (
                <GifGrid
                    key={category}
                    category={category}
                />
            ))
            }
        </>
    )
}
