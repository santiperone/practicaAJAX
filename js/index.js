window.onload = function () {
    const API_KEY = '7AMJPxtbZk8CRJ20F5S3DO2EFlNHtIrq'
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`)
        .then((response) => {return response.json()})
        .then((data) => {
            // console.log(data.data);
            let gifName = data.data.title
            let gifUrl = data.data.image_url
            let h1 = document.querySelector('h1');
            let img = document.querySelector('img');
            h1.innerHTML = gifName ? gifName : "Sin Titulo";
            img.src = gifUrl

        })
        .catch((err) => console.log('Error: ' + err));
    
}