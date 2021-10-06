import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GiftGrid } from "./Components/GiftGrid";

export const GiftExpertApp = () => {

    // const categories = ['One Punch', 'Naruto', 'Dragon Ball'];
    
    const [categoria, setCategoria] = useState( [] );
    
    // const handleAdd  = () => setCategoria( cat => [...cat, 'Anime'] );
    
    return (

        <>

            <h2>GiftExpertApp</h2>
            <AddCategory setCategoria={ setCategoria } />
            <hr></hr>
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                { 
                    categoria.map( (categoria) => (
                        // return <li key={ cat }>{ cat }</li>
                        <GiftGrid 
                            key={categoria}
                            categoria={categoria}
                        />
                    ))
                }
            </ol>
            
        </>
        
    );
    
}