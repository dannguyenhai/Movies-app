import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../config";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../components/MovieCard";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
  //   console.log(data);
  if (!data) return null;
  const { backdrop_path, title, genres, overview } = data;
  return (
    <div className="py-10">
      <div className="poster w-full h-[600px] relative">
        <div className=" overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.4)]"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="poster-film w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={tmdbAPI.imageOriginal(backdrop_path)}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <h1 className="text-center text-4xl text-white font-bold mb-10">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center  gap-x-5 mb-10">
          {genres.map((item) => (
            <span
              className="py-2 px-4 border-primary border text-primary rounded"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center text-sm leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits></MovieCredits>
      <MovieVideo></MovieVideo>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};
function MovieCredits() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "credits"), fetcher);
  if (!data) return null;
  //   console.log(data);
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="py-10 page-container">
      <h2 className="text-center text-3xl mb-10">Casts</h2>
      <div className=" cast-items grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div key={item.id} className="cast-item">
            <img
              src={tmdbAPI.imageOriginal(item.profile_path)}
              className="w-full h-[350px] rounded-lg object-cover mb-3"
              alt=""
            />
            <h3 className="text-xl font-medium text-center">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
function MovieVideo() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "videos"), fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  //   console.log(data);
  return (
    <div className="py-10">
      <div className="flex flex-col gap-10 page-container">
        {results.slice(0, 3).map((item) => (
          <div className="" key={item.id}>
            <h3 className="video-title text-3xl p-3 mb-2 bg-secondary text-center flex items-center justify-center">
              {item.name}
            </h3>
            <div key={item.id} className="video w-full h-auto flex items-center mt-3 justify-center page-container">
              <iframe
                width="1000px"
                height="600px "
                src={`https://www.youtube.com/embed/${item.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieSimilar() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "similar"), fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  console.log(data);
  return (
    <div className="py-10 page-container">
      <h2 className="text-3xl font-medium mb-10 capitalize">Similar movies</h2>
      <div className="movie-list ">
        <Swiper grabCursor={"true"} spaceBetween={25} slidesPerView={"auto"}>
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
