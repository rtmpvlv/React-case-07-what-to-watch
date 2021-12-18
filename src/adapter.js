export const adaptFilmToClient = (film) => {
  const adaptedData = Object.assign(
      {},
      film,
      {
        posterImage: film.poster_image,
        previewImage: film.preview_image,
        backgroundImage: film.background_image,
        backgroundColor: film.background_color,
        videoLink: film.video_link,
        previewVideoLink: film.preview_video_link,
        scoresCount: film.scores_count,
        runTime: film.run_time,
        isFavorite: film.is_favorite,
      },
  );

  delete adaptedData.poster_image;
  delete adaptedData.preview_image;
  delete adaptedData.background_image;
  delete adaptedData.background_color;
  delete adaptedData.video_link;
  delete adaptedData.preview_video_link;
  delete adaptedData.scores_count;
  delete adaptedData.run_time;
  delete adaptedData.is_favorite;
  return adaptedData;
};

export const adaptFilmToServer = (film) => {
  const adaptedData = Object.assign(
      {},
      film,
      {
        'poster_image': film.posterImage,
        'preview_image': film.previewImage,
        'background_image': film.backgroundImage,
        'background_color': film.backgroundColor,
        'video_link': film.videoLink,
        'preview_video_link': film.previewVideoLink,
        'scores_count': film.scoresCount,
        'run_time': film.runTime,
        'is_favorite': film.isFavorite,
      },
  );

  delete adaptedData.posterImage;
  delete adaptedData.previewImage;
  delete adaptedData.backgroundImage;
  delete adaptedData.backgroundColor;
  delete adaptedData.videoLink;
  delete adaptedData.previewVideoLink;
  delete adaptedData.scoresCount;
  delete adaptedData.runTime;
  delete adaptedData.isFavorite;
  return adaptedData;
};
