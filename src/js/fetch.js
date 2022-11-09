import { refs } from './refs';

const axios = require('axios').default;

const BASIC_QUERY_LINK = 'https://api.themoviedb.org/3';
const API_KEY = 'e7bdbd1d27e36c8088a4364bac7f860e';

export async function fetchPopular(page) {
  try {
    document.querySelector('.spinner').style.display = 'flex';

    const response = await axios.get(
      `${BASIC_QUERY_LINK}/trending/movie/week?api_key=${API_KEY}&page=${page}`
    );

    const genderId = await fetchGenresId();

    const movies = response.data.results.map(object => {
      // let cover = 'https://www.themoviedb.org/t/p/w1280' + object.poster_path;
      let cover;

      if (object.poster_path) {
        cover = 'https://www.themoviedb.org/t/p/w1280' + object.poster_path;
      } else {
        cover = 'https://i.ibb.co/VWdqDHy/no-image.jpg';
      }
      let name = object.title;
      let year = object.release_date.substring(0, 4);
      let id = object.id;

      const genres = object.genre_ids.map(
        genre => genderId.find(search => search.id === genre).name
      );

      return {
        cover,
        name,
        genres,
        year,
        id,
      };
    });

    let totalPages = response.data.total_pages;
    refs.totalPages = totalPages;
    let totalMovies = response.data.total_results;

    const result = {
      totalPages,
      totalMovies,
      movies,
      type: 'popular',
    };
    refs.type = result.type;

    document.querySelector('.spinner').style.display = 'none';

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchByName(query, page) {
  try {
    document.querySelector('.spinner').style.display = 'flex';

    const response = await axios.get(
      `${BASIC_QUERY_LINK}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`
    );

    const genderId = await fetchGenresId();
    console.log(response);
    const movies = response.data.results.map(object => {
      // let cover = 'https://www.themoviedb.org/t/p/w1280' + object.poster_path;
      let cover;

      if (object.poster_path) {
        cover = 'https://www.themoviedb.org/t/p/w1280' + object.poster_path;
      } else {
        cover = 'https://i.ibb.co/VWdqDHy/no-image.jpg';
      }
      let name = object.title;
      let year = object.release_date.substring(0, 4);
      let id = object.id;
      let rating = object.vote_average;

      const genres = object.genre_ids.map(
        genre => genderId.find(search => search.id === genre).name
      );

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
    refs.totalPages = totalPages;
    let totalMovies = response.data.total_results;

    const result = {
      totalPages,
      totalMovies,
      movies,
      type: 'search',
    };
    refs.type = result.type;

    console.log(result);

    document.querySelector('.spinner').style.display = 'none';

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchById(id) {
  try {
    document.querySelector('.spinner').style.display = 'flex';

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    // let cover =
    //   'https://www.themoviedb.org/t/p/w1280' + response.data.poster_path;
    let cover;

    if (object.poster_path) {
      cover = 'https://www.themoviedb.org/t/p/w1280' + object.poster_path;
    } else {
      cover = 'https://i.ibb.co/VWdqDHy/no-image.jpg';
    }
    let year = response.data.release_date.substring(0, 4);
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
      year,
    };

    document.querySelector('.spinner').style.display = 'none';

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTrailer(id) {
  try {
    document.querySelector('.spinner').style.display = 'flex';

    const response = await axios.get(
      `${BASIC_QUERY_LINK}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    );

    document.querySelector('.spinner').style.display = 'none';

    return response;
  } catch (error) {
    console.error(error);
  }
}

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
