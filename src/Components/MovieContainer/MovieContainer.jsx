import React, { useState } from "react";
import style from "./MovieContainer.module.less";
import MovieBoxContainer from "./MovieBoxContainer/MovieBoxContainer";

const MovieContainer = () => {
  const [movies] = useState([
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1593642532296-56b80e64b30d",
      title: "Movie Title 1",
      rating: "5",
      description: "A gripping movie about love and adventure.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
      title: "Movie Title 2",
      rating: "4.5",
      description: "An epic tale of heroism and courage.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1581948956716-570b270e7c36",
      title: "Movie Title 3",
      rating: "4.8",
      description: "A heartwarming story of friendship and discovery.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1555685815-1a5b34b4f794",
      title: "Movie Title 4",
      rating: "4.2",
      description:
        "A suspenseful thriller that will keep you on the edge of your seat.",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1521747116042-5a810fda9665",
      title: "Movie Title 5",
      rating: "4.9",
      description: "A hilarious comedy that will make you laugh till you cry.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1520918654895-6a8fba82b7a3",
      title: "Movie Title 6",
      rating: "3.7",
      description: "A hauntingly beautiful tale of love and loss.",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1555685815-1a5b34b4f794",
      title: "Movie Title 7",
      rating: "4.6",
      description: "An action-packed adventure through uncharted territory.",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1555685815-1a5b34b4f794",
      title: "Movie Title 8",
      rating: "3.9",
      description: "A heartwarming story of a dog and its owner.",
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1555685815-1a5b34b4f794",
      title: "Movie Title 9",
      rating: "4.0",
      description:
        "A thrilling space odyssey to the farthest reaches of the universe.",
    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1555685815-1a5b34b4f794",
      title: "Movie Title 10",
      rating: "4.5",
      description:
        "A heartwrenching drama that explores the depths of human emotion.",
    },
    {
      id: 11,
      img: "https://images.unsplash.com/photo-1555685815-1a5b34b4f794",
      title: "Movie Title 11",
      rating: "3.5",
      description:
        "A mind-bending sci-fi adventure that will leave you questioning reality.",
    },
    {
      id: 12,
      img: "https://images.unsplash.com/photo-1555685815-1a5b34b4f794",
      title: "Movie Title 12",
      rating: "4.1",
      description:
        "A gripping courtroom thriller that keeps you guessing until the end.",
    },
    {
      id: 13,
      img: "https://images.unsplash.com/photo-1555685815-1a5b34b4f794",
      title: "Movie Title 13",
      rating: "3.8",
      description: "An enchanting fairy tale set in a magical world.",
    },
    {
      id: 14,
      img: "https://images.unsplash.com/photo-1555685815-1a5b34b4f794",
      title: "Movie Title 14",
      rating: "4.7",
      description: "A historical epic that transports you to a bygone era.",
    },
    {
      id: 15,
      img: "https://images.unsplash.com/photo-1555685815-1a5b34b4f794",
      title: "Movie Title 15",
      rating: "4.3",
      description:
        "A heart-pounding action movie filled with breathtaking stunts.",
    },
    {
      id: 16,
      img: "https://images.unsplash.com/photo-1555685815-1a5b34b4f794",
      title: "Movie Title 16",
      rating: "4.4",
      description:
        "A thought-provoking documentary that explores the human condition.",
    },
    {
      id: 17,
      img: "https://images.unsplash.com/photo-1555685815-1a5b34b4f794",
      title: "Movie Title 17",
      rating: "3.6",
      description:
        "A whimsical animated film that appeals to both kids and adults.",
    },
    {
      id: 18,
      img: "https://images.unsplash.com/photo-1555685815-1a5b34b4f794",
      title: "Movie Title 18",
      rating: "4.2",
      description: "A dark and brooding tale of revenge and redemption.",
    },
    {
      id: 19,
      img: "https://images.unsplash.com/photo-1555685815-1a5b34b4f794",
      title: "Movie Title 19",
      rating: "4.9",
      description:
        "A heartwarming family movie that will leave you with a smile.",
    },
  ]);
  return (
    <div className={style["movieContainer"]}>
      <div className={style["list-box-container"]}>
        {movies &&
          movies.map((movie, index) => (
            <MovieBoxContainer {...movie} key={index} />
          ))}
      </div>
    </div>
  );
};

export default MovieContainer;
