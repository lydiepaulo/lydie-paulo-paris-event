import { FaHeart,  FaRegHeart } from "react-icons/fa";

const LikeButton = ( { isFavorite, updateFavorite } ) => {

  const executeUpdateFavorite = () => {
    updateFavorite();
  }

  return (
    <button onClick={executeUpdateFavorite} className="card__like-button">
            {!isFavorite && <FaRegHeart />}
            {isFavorite && <FaHeart />}
    </button>
  );
};

export default LikeButton;


