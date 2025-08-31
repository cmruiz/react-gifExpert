//import React from "react";
// a partir de la v. 17 no es necesario importar react en un prj react

import { useState } from 'react';
import { AddCategory, GifGrid } from './components';



// vamos a necesitar un hook de react para mantener el etado,
// si vamos a tener un html que cambie, necesitamos un estado. Usamos useState



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['juggling']);

    const onAddCategory = (newCategory) => {
        console.log(newCategory);
        if (categories.includes(newCategory)) return;
        setCategories([ newCategory,...categories]);
    }

    return (
        <>
        <h1>GifExpertApp</h1>

        <AddCategory                                  //  {/* <input type="text" />    */}
           onNewCategory={ (event) => onAddCategory(event) }
        />
     
        {           //            {/* listado de Gifs*/}
            categories.map((category) => (
            <GifGrid key={category} category={category} />   ))
        }
        
        </>
    );
};