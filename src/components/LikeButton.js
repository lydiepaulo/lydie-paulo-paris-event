import { /* FaHeart,  */ FaRegHeart } from "react-icons/fa";

const LikeButton = (isFavorite) => {

  return (
    <button /* onClick={(e) => setId(e.target.value)} */ className="card__like-button">
            <FaRegHeart />
            {/* {!isFavorite && <FaRegHeart />}
            {isFavorite && <FaHeart />} */}
    </button>
  );
};

export default LikeButton;


