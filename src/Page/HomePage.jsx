import { Fragment } from "react";
import MovieList from "../components/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      
      <section className="movies-layout page-container text-white pb-20">
        <h2 className="font-bold text-3xl mb-10 pt-10 capitalize">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container text-white pb-20">
        <h2 className="font-bold text-3xl mb-10 pt-10 capitalize">Top rated</h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container text-white pb-20">
        <h2 className="font-bold text-3xl mb-10 pt-10 capitalize">Trending</h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
