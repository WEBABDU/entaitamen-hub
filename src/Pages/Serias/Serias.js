import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../api_key";
import Genres from "../../components/Genres";
import CostumePagination from "../../components/Pagination/CostumePagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import { useGenres } from "../../hooks/useGenres";

const Serias = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genresForUrl = useGenres(selectedGenres);
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresForUrl}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
    console.log(data);
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genresForUrl]);
  return (
    <div>
      <span className="pageTitle">TV Serias</span>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        genres={genres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
            />
          ))}
        {numOfPages > 1 && (
          <CostumePagination setPage={setPage} pageNumberCount={numOfPages} />
        )}
      </div>
    </div>
  );
};

export default Serias;
