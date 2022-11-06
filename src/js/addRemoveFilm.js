import localStorage from './localStorage';

//* Удаляем фильм  можем использовать в кнопках watched queued
export function removeFilmFromLibrary(movieID, userLibrary) {
  let currentLibraryStorage = localStorage.load(userLibrary);
  let updatedLibraryStorage = currentLibraryStorage.filter(movie => {
    return movie.id !== +movieID;
  });

  updatedLibraryStorage = updatedLibraryStorage.length
    ? updatedLibraryStorage
    : null;
  localStorage.save(userLibrary, updatedLibraryStorage);
}

//* Добавляем фильм  можем использовать в кнопках watched queued
export function addFilmToLibrary(movieID, userLibrary) {
  let currentLibraryStorage = localStorage.load(userLibrary);
  const currentPage = localStorage.load('currentPage');
  let filmNeedToAdd = currentPage.find(movie => movie.id == movieID);

  if (!currentLibraryStorage) {
    currentLibraryStorage = [filmNeedToAdd];
  } else currentLibraryStorage.push(filmNeedToAdd);

  localStorage.save(userLibrary, currentLibraryStorage);
}
