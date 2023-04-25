/* eslint-disable no-unused-vars */
import MovieCard from "./MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../config";


//https://api.themoviedb.org/3/movie/now_playing?api_key=b4821ecf28359b0ffef768ae97db9760
// eslint-disable-next-line react/prop-types
const MovieList = ({ type = "now_playing" }) => {
  // eslint-disable-next-line no-unused-vars
  const { data, error } = useSWR(
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
