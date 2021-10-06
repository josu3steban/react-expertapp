import { useEffect, useState } from "react"
import { getGift } from "../helpers/getGift";



export const useFecthGifs = (categInput) => {

    const [state, setState] = useState({

        data: [],
        loading: true
        
    });

    useEffect( () => {

        getGift(categInput).then( img => setState({
            data: img,
            loading: false
        }));
        
    }, [categInput]);

    return state;
    
}