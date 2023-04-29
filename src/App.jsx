import { Fragment, lazy, Suspense } from "react";
import "swiper/scss";
import {Route, Routes} from "react-router-dom";
import Main from "./layout/Main";
import Banner from "./banner/Banner";
const HomePage = lazy(()=> import("./Page/HomePage"));
const MovieDetailsPage = lazy(()=> import("./Page/MovieDetailsPage"));
const Movies = lazy(()=> import("./Page/MoviePage"));

function App() {
  return (
    <Fragment>
    <Suspense fallback={<></>}>
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
      </Suspense>
    </Fragment>
  );
}

export default App;
