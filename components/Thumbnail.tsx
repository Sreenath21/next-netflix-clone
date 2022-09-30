import Image from "next/image";
import { useDispatch } from "react-redux";

import { setCurrentMovie } from "../features/movieSlice";
import { setShowModal } from "../features/modalSlice";

import { Movie } from "../typings";

interface Props {
  // movie: Movie | DocumentData
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
  const dispatch = useDispatch();

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] hover:scale-105"
      onClick={() => {
        dispatch(setCurrentMovie(movie));
        dispatch(setShowModal(true));
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
}

export default Thumbnail;
