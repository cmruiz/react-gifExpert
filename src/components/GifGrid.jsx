// import { useState,useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    // console.log({images,isLoading});
    
    return (
    <>
        <h3>{category}</h3>

        {
            isLoading && <h2>Cargando...</h2>
        }

        <div className="card-grid">
            {/* { images.map(({id,title}) => ( */}
            { images.map((image) => (
            <GifItem 
                    key={image.id} 
                    // image={image}
                    // url={image.url}
                    // title={image.title}
                    {...image}  // spread operator, esparce las propiedades del objeto
                />
            //    <li key={id}> {title} </li>
            ))}
        </div>
    </>
  )
}
