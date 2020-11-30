window.onload = function () {
    const API_KEY = '7AMJPxtbZk8CRJ20F5S3DO2EFlNHtIrq'
    let gifNumber = prompt('¿Cuántos gifs desea ver?');
    function trendingGif() {
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${gifNumber}&rating=g`)
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
                let h1 = document.querySelector('h1');
                let img = document.querySelector('img');
                h1.innerHTML = gifName ? gifName : "Sin Titulo";
                img.src = gifUrl

            })
            .catch((err) => console.log('Error: ' + err));
    };
    trendingGif();
}