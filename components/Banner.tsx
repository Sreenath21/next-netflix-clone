import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";

import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";
import { getShowModal } from "../features/modalSelector";
import { getCurrentMovie } from "../features/movieSelector";

import { setCurrentMovie } from "../features/movieSlice";
import { setShowModal } from "../features/modalSlice";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const showModal = useSelector(getShowModal);
  const dispatch = useDispatch();

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  // console.log(movie);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end pb-12">
      {/* ImageContainer */}
      <div className="absolute top-0 left-0 -z-10 h-screen w-full">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="font-bold text-2xl md:text-4xl lg:text-7xl">
        {movie?.title || movie?.original_title}
      </h1>

      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>

      {/* Button Container */}
      <div className="flex space-x-3">
        <button className="banner-button bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button
          className="banner-button bg-[gray]/70"
          onClick={() => {
            dispatch(setCurrentMovie(movie));
            dispatch(setShowModal(true));
          }}
        >
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
