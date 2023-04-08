export class TMDBService {
  _apiBase = 'https://api.themoviedb.org/3/';
  _apiKey = '2876da9e43430f1d4469f38a5a4e8f4c';

  getFilms = async (filter = 'popular', page) => {
    // filter ----- 'top_rated' || 'popular' || 'now_playing'

    const res = await fetch(`${this._apiBase}/movie/${filter}?api_key=${this._apiKey}&page=${page}`);

    if (!res.ok) {
      throw new Error(`Could not fetch movie/page-${page}, received ${res.status}`);
    }

    return await res.json();
  };

  getPeople = async (page) => {
    const res = await fetch(`${this._apiBase}/person/popular?api_key=${this._apiKey}&page=${page}`);

    if (!res.ok) {
      throw new Error(`Could not fetch person/page-${page}, received ${res.status}`);
    }

    return await res.json();
  };

  getPerson = async (id) => {
    const res = await fetch(`${this._apiBase}/person/${id}?api_key=${this._apiKey}`);

    if (!res.ok) {
      throw new Error(`Could not fetch person/${id}, received ${res.status}`);
    }

    return await res.json();
  };

  getMovie = async (id) => {
    const res = await fetch(`${this._apiBase}/movie/${id}?api_key=${this._apiKey}`);

    if (!res.ok) {
      throw new Error(`Could not fetch movie/${id}, received ${res.status}`);
    }

    return await res.json();
  };
}