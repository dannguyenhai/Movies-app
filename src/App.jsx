import { Fragment } from "react";
import "swiper/scss";
import {Route, Routes} from "react-router-dom";
import Main from "./layout/Main";
import HomePage from "./Page/HomePage";
import Banner from "./banner/Banner";
import Movies from "./Page/MoviePage";
import MovieDetailsPage from "./Page/MovieDetailsPage";
// import {NavLink} from "react-router-dom";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route  element={ <Main></Main>}>
        <Route path="/" element={<>
          <Banner></Banner>
          <HomePage></HomePage>
        </>}></Route>
        <Route path="/movies" element={<Movies></Movies>}></Route>
        <Route path="/movie/:movieId" element={<MovieDetailsPage></MovieDetailsPage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
