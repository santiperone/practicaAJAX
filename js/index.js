window.onload = function () {
    const API_KEY = '7AMJPxtbZk8CRJ20F5S3DO2EFlNHtIrq'
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`)
        .then((response) => {return response.json()})
        .then((data) => console.log(data))
        .catch((err) => console.log('Error: ' + err));
}