import { useEffect, useState } from "react";
import StorageService from "../services/StorageService";
import { FaRegStar, FaStar } from "react-icons/fa";

const LikeButton = ( { id } ) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const updateFavorites = () => {
    const newValue = !isFavorite;
    setIsFavorite(newValue);

    let likedIds = StorageService.myLocalStorage();

    if (likedIds.includes(id)) {
      setIsFavorite(false);
      likedIds.splice(likedIds.indexOf(id), 1);
    }
    else {
      setIsFavorite(true);
      likedIds.push(id);
    }

    localStorage.setItem('lydieProjetFavoris', JSON.stringify(likedIds));
  }

  useEffect(() => {
    let likedIds = StorageService.myLocalStorage();

    if (likedIds.includes(id)) {
      setIsFavorite(true);
    }
  }, [id])

  return (
    <button onClick={updateFavorites} className="card__like-button">
      {!isFavorite && <FaRegStar />}
      {isFavorite && <FaStar />}
    </button>
  );
};

export default LikeButton;