import MovieCard from "./MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../config";
import PropTypes from 'prop-types'; 

const MovieList = ({ type = "now_playing" }) => {
  MovieList.propTypes = {
    type: PropTypes.string.isRequired,
  };
  const { data} = useSWR(
    tmdbAPI.getMovieList(type),
    fetcher
  );
  const movies = data?.results || [];
  console.log(data);

  return (
    <div className="movie-list ">
      <Swiper grabCursor={"true"} spaceBetween={25} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
export default MovieList;
