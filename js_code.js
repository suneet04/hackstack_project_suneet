const API_KEY = 'api_key=c1b62f77e471a14ed0db4ee11e823fc1';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const main = document.getElementById('center');


getMovies(API_URL);


function getMovies(url){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}


function showMovies(data){   
    main.innerHTML='';
    data.forEach(movie => {
        const {title, poster_path,vote_average,genre_ids}=movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML=`
        <div class="text">
            <div class="rating">${vote_average} Ratings</div>
            <div class="name">${title}</div>
            <p>Watch Now > </p>
        </div>
        <img src="${IMG_URL+poster_path}" alt="${title}">
        
        `
        main.appendChild(movieEl);
    })

}
