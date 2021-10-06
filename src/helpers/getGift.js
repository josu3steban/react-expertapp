


export const getGift = async ( categInput ) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=15&q=${categInput}&api_key=FYipn7bd0miaqpy25DTUA5xSDDHu7P7I`;
    
    const resp = await fetch( url );

    const { data } = await resp.json();

    const imgData = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
        
    })

    // console.log(imgData);
    return imgData;
}