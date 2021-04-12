import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = ( ) => {

    const [categories, setCategories] = useState(['One Piece']);

    // const handleAdd = () => {  
    //     //setCategories( [...categories, 'Torre de Dios'] );
    //     setCategories( cats => [...cats, 'Torre de Dios'] ); 
    // }


    return (
        <>
            <h2>GiExpertApp</h2>

            <AddCategory setCategories={ setCategories } />

            <hr />
            

            <ol>
                {
                    categories.map( category => (
                        <GifGrid  
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}
