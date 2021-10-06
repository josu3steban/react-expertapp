import React from 'react'
import { useFecthGifs } from '../hooks/useFetchGifs'
// import { getGift } from '../helpers/getGift';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ( { categoria } ) => {

    const categInput = encodeURI(categoria);
    
    const {data, loading} = useFecthGifs(categInput);

    console.log(data);
    console.log(loading);
    
    return (

        <>
            <h2 className="animate__animated animate__fadeIn animate__delay-0.5s">{ categoria }</h2>
            {loading && <p className="animate__animated animate__fadeIn animate__delay-0.5s">Loading</p>}
            <div className="card-container">
                {
                    data.map( img => (
                        <GiftGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
        
    )
    
}