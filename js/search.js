window.onload = function () {
    const API_KEY = '7AMJPxtbZk8CRJ20F5S3DO2EFlNHtIrq'
    search = new URLSearchParams(location.search).get('search')
    let h1 = document.querySelector('h1');
    h1.innerHTML = `Resultados de la busqueda: ${search}`
    function searchGif() {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=25&offset=0&rating=g&lang=en`)
            .then((response) => {return response.json()})
            .then((data) => {
                console.log(data.data);
                data.data.forEach(gif => {
                    document.body.innerHTML += `<div>
                                                    <h2>${gif.title}</h2>
                                                    <img src="${gif.images.original.url}" alt="" class="gif-name">
                                                </div>
                                                
                    `
                })                
            })
            .catch((err) => console.log('Error: ' + err));
    };
    searchGif();
}