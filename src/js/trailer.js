const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
import { fetchTrailer } from './fetch';
import { refs } from './refs';

if (refs.header.classList.contains('header__library')) {
  refs.watchedFilmsList.addEventListener('click', modalTrailerStart);
  refs.watchedFilmsList.addEventListener('click', mainTrailerStart);
} else {
  refs.popularFilms.addEventListener('click', modalTrailerStart);
  refs.popularFilms.addEventListener('click', mainTrailerStart);
}
refs.modal.addEventListener('click', modalTrailerStart);

async function mainTrailerStart(event) {
  if (!event.target.closest('.btn-youtube')) {
    return;
  }

  const result = await fetchTrailer(
    event.target.closest('.btn-youtube').dataset.id
  );

  if (result.data.results.length !== 0) {
    const trailerId = result.data.results.find(
      result => result.type === 'Trailer'
    ).key;

    if (document.documentElement.clientWidth >= 1200) {
      const instance = basicLightbox.create(
        `
    <iframe src="https://www.youtube.com/embed/${trailerId}?&autoplay=1" width="${
          +document.documentElement.clientWidth * 0.85
        }" height="${
          +document.documentElement.clientHeight * 0.75
        }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `,
        {
          onShow: instance =>
            document.addEventListener('keydown', onEscKeyPress),
          onClose: instance =>
            document.removeEventListener('keydown', onEscKeyPress),
        }
      );

      instance.show();

      function onEscKeyPress(event) {
        if (event.key === 'Escape') {
          instance.close();
        }
      }

      return;
    }

    if (document.documentElement.clientWidth >= 768) {
      const instance = basicLightbox.create(
        `
    <iframe src="https://www.youtube.com/embed/${trailerId}?&autoplay=1" width="${
          +document.documentElement.clientWidth * 0.75
        }" height="${
          +document.documentElement.clientHeight * 0.5
        }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `,
        {
          onShow: instance =>
            document.addEventListener('keydown', onEscKeyPress),
          onClose: instance =>
            document.removeEventListener('keydown', onEscKeyPress),
        }
      );
      instance.show();

      function onEscKeyPress(event) {
        if (event.key === 'Escape') {
          instance.close();
        }
      }

      return;
    }

    if (document.documentElement.clientWidth >= 320) {
      const instance = basicLightbox.create(
        `
    <iframe src="https://www.youtube.com/embed/${trailerId}?&autoplay=1" width="${
          +document.documentElement.clientWidth * 0.9
        }" height="${
          +document.documentElement.clientHeight * 0.35
        }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `,
        {
          onShow: instance =>
            document.addEventListener('keydown', onEscKeyPress),
          onClose: instance =>
            document.removeEventListener('keydown', onEscKeyPress),
        }
      );
      instance.show();

      function onEscKeyPress(event) {
        if (event.key === 'Escape') {
          instance.close();
        }
      }

      return;
    }
  } else {
    const instance = basicLightbox.create(
      `
      <p style="color:white">No trailer for this film</p>
  `,
      {
        onShow: instance => document.addEventListener('keydown', onEscKeyPress),
        onClose: instance =>
          document.removeEventListener('keydown', onEscKeyPress),
      }
    );
    instance.show();

    function onEscKeyPress(event) {
      if (event.key === 'Escape') {
        instance.close();
      }
    }
  }
}

async function modalTrailerStart(event) {
  if (!event.target.closest('.youtube-btn')) {
    return;
  }

  const result = await fetchTrailer(
    event.target.closest('.youtube-btn').dataset.id
  );

  if (result.data.results.length !== 0) {
    const trailerId = result.data.results.find(
      result => result.type === 'Trailer'
    ).key;

    if (document.documentElement.clientWidth >= 1200) {
      const instance = basicLightbox.create(
        `
    <iframe src="https://www.youtube.com/embed/${trailerId}?&autoplay=1" width="${
          +document.documentElement.clientWidth * 0.85
        }" height="${
          +document.documentElement.clientHeight * 0.75
        }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `,
        {
          onShow: instance =>
            document.addEventListener('keydown', onEscKeyPress),
          onClose: instance =>
            document.removeEventListener('keydown', onEscKeyPress),
        }
      );
      instance.show();

      function onEscKeyPress(event) {
        if (event.key === 'Escape') {
          instance.close();
        }
      }

      return;
    }

    if (document.documentElement.clientWidth >= 768) {
      const instance = basicLightbox.create(
        `
    <iframe src="https://www.youtube.com/embed/${trailerId}?&autoplay=1" width="${
          +document.documentElement.clientWidth * 0.75
        }" height="${
          +document.documentElement.clientHeight * 0.5
        }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `,
        {
          onShow: instance =>
            document.addEventListener('keydown', onEscKeyPress),
          onClose: instance =>
            document.removeEventListener('keydown', onEscKeyPress),
        }
      );
      instance.show();

      function onEscKeyPress(event) {
        if (event.key === 'Escape') {
          instance.close();
        }
      }

      return;
    }

    if (document.documentElement.clientWidth >= 320) {
      const instance = basicLightbox.create(
        `
    <iframe src="https://www.youtube.com/embed/${trailerId}?&autoplay=1" width="${
          +document.documentElement.clientWidth * 0.9
        }" height="${
          +document.documentElement.clientHeight * 0.35
        }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `,
        {
          onShow: instance =>
            document.addEventListener('keydown', onEscKeyPress),
          onClose: instance =>
            document.removeEventListener('keydown', onEscKeyPress),
        }
      );
      instance.show();

      function onEscKeyPress(event) {
        if (event.key === 'Escape') {
          instance.close();
        }
      }

      return;
    }
  } else {
    const instance = basicLightbox.create(
      `
      <p style="color:white">No trailer for this film</p>
  `,
      {
        onShow: instance => document.addEventListener('keydown', onEscKeyPress),
        onClose: instance =>
          document.removeEventListener('keydown', onEscKeyPress),
      }
    );
    instance.show();

    function onEscKeyPress(event) {
      if (event.key === 'Escape') {
        instance.close();
      }
    }
  }
}
