import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { PropTypes } from "prop-types";

const MovieCard = ({ item }) => {
  MovieCard.propTypes = {
    item: PropTypes.string.isRequired,
  };

  const { poster_path, release_date, title, vote_average, id } = item;
  const navigate = useNavigate();
  //https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
  return (
    <div className="movies-card flex flex-col rounded-lg p-3 bg-slate-800 text-sm h-full select-none">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl text-bold mb-3">{title}</h3>
        <div className="flex justify-between p-3 opacity-50">
          <span>{release_date}</span>
          <span>{vote_average}</span>
        </div>
        <Button bgColor="secondary" onClick={() => navigate(`/movie/${id}`)}>
          Watch Now
        </Button>
        {/* <button onClick={() => navigate(`/movie/${id}`)} className="w-full py-3 px-6 text-lg bg-primary rounded-lg mt-auto">
          Watch Now
        </button> */}
      </div>
    </div>
  );
};

export default MovieCard;
