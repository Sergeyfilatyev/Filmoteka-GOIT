const axios = require('axios').default; //connect axios for queries
import { Notify } from 'notiflix/build/notiflix-notify-aio'; //connect notiflix.notify for messages
//notiflix.notify options
// Notify.init({
//   width: '280px',
//   position: 'right-top',
//   distance: '10px',
//   opacity: 1,
//   borderRadius: '5px',
//   rtl: false,
//   timeout: 3000,
//   messageMaxLength: 110,
//   backOverlay: false,
//   backOverlayColor: 'rgba(0,0,0,0.5)',
//   plainText: true,
//   showOnlyTheLastOne: false,
//   clickToClose: false,
//   pauseOnHover: true,
//   ID: 'NotiflixNotify',
//   className: 'notiflix-notify',
//   zindex: 4001,
//   fontFamily: 'Quicksand',
//   fontSize: '13px',
//   cssAnimation: true,
//   cssAnimationDuration: 400,
//   cssAnimationStyle: 'fade',
//   closeButton: false,
//   useIcon: true,
//   useFontAwesome: false,
//   fontAwesomeIconStyle: 'basic',
//   fontAwesomeIconSize: '34px',
//   success: {
//     background: '#32c682',
//     textColor: '#fff',
//     childClassName: 'notiflix-notify-success',
//     notiflixIconColor: 'rgba(0,0,0,0.2)',
//     fontAwesomeClassName: 'fas fa-check-circle',
//     fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
//     backOverlayColor: 'rgba(50,198,130,0.2)',
//   },
//   failure: {
//     background: '#ff5549',
//     textColor: '#fff',
//     childClassName: 'notiflix-notify-failure',
//     notiflixIconColor: 'rgba(0,0,0,0.2)',
//     fontAwesomeClassName: 'fas fa-times-circle',
//     fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
//     backOverlayColor: 'rgba(255,85,73,0.2)',
//   },
//   warning: {
//     background: '#eebf31',
//     textColor: '#fff',
//     childClassName: 'notiflix-notify-warning',
//     notiflixIconColor: 'rgba(0,0,0,0.2)',
//     fontAwesomeClassName: 'fas fa-exclamation-circle',
//     fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
//     backOverlayColor: 'rgba(238,191,49,0.2)',
//   },
//   info: {
//     background: '#26c0d3',
//     textColor: '#fff',
//     childClassName: 'notiflix-notify-info',
//     notiflixIconColor: 'rgba(0,0,0,0.2)',
//     fontAwesomeClassName: 'fas fa-info-circle',
//     fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
//     backOverlayColor: 'rgba(38,192,211,0.2)',
//   },
// });

const BASIC_QUERY_LINK = 'https://api.themoviedb.org/3';
const API_KEY = 'e7bdbd1d27e36c8088a4364bac7f860e';

export async function fetchGenresId() {
  try {
    const response = await axios.get(
      `${BASIC_QUERY_LINK}/genre/movie/list?api_key=${API_KEY}`
    );
    return response.data.genres;
  } catch (error) {
    console.error(error);
  }
}

//fetching popular films for main page
export async function fetchPopular(page) {
  Notify.info(`Try to fetch movies for page ${page}`); //test query

  try {
    document.querySelector('.spinner').style.display = 'none';
    const response = await axios.get(
      `${BASIC_QUERY_LINK}/trending/movie/week?api_key=${API_KEY}&page=${page}`
    );

    Notify.success(`Trending movies were loaded`);

    const genderId = await fetchGenresId();

    const movies = response.data.results.map(object => {
      let cover = 'https://www.themoviedb.org/t/p/w1280' + object.poster_path;
      let name = object.title;
      let year = object.release_date.substring(0, 4);
      let id = object.id;

      const genres = object.genre_ids.map(genre => {
        return genderId.find(search => search.id === genre).name;
      });

      return {
        cover,
        name,
        genres,
        year,
        id,
      };
    });

    let totalPages = response.data.total_pages;
    let totalMovies = response.data.total_results;

    const result = {
      totalPages,
      totalMovies,
      movies,
    };

    console.log(result);
    return result;
  } catch (error) {
    Notify.warning(`Trending movies weren't loaded: ${error}`);
  }
}

//fetching films for search queries
export async function fetchByName(query, page) {
  Notify.info(`Try to use query ${query} for page ${page}`); //test query

  try {
    const response = await axios.get(
      `${BASIC_QUERY_LINK}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`
    );

    Notify.success(`We found the movies by ${query}`);

    const genderId = await fetchGenresId();

    const movies = response.data.results.map(object => {
      let cover = 'https://www.themoviedb.org/t/p/w1280' + object.poster_path;
      let name = object.title;
      let year = object.release_date.substring(0, 4);
      let id = object.id;
      let rating = object.vote_average;

      const genres = object.genre_ids.map(genre => {
        return genderId.find(search => search.id === genre).name;
      });

      return {
        cover,
        name,
        genres,
        year,
        id,
        rating,
      };
    });

    let totalPages = response.data.total_pages;
    let totalMovies = response.data.total_results;

    const result = {
      totalPages,
      totalMovies,
      movies,
    };

    console.log(result);
    return result;
  } catch (error) {
    Notify.warning(`We can't find movies by ${query}: ${error}`);
  }
}

//fetching info by id for films card
export async function fetchById(id) {
  Notify.info(`Try to fetch film by id ${id}`); //test query

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    Notify.success(`We found the movie by ID ${id}`);

    let cover =
      'https://www.themoviedb.org/t/p/w1280' + response.data.poster_path;
    let name = response.data.title;
    let rating = response.data.vote_average;
    let votes = response.data.vote_count;
    let popularity = response.data.popularity;
    let originalTitle = response.data.original_title;
    let about = response.data.overview;

    const genres = response.data.genres.map(genre => genre.name);

    const result = {
      cover,
      name,
      rating,
      votes,
      popularity,
      originalTitle,
      about,
      id,
      genres,
    };
    return result;
  } catch (error) {
    Notify.warning(`We can't find movie by ID ${id}: ${error}`);
  }
}
