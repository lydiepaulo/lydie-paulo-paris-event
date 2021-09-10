import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';
import GlobalFunctions from '../services/GlobalFunctions';

const Card = ({ id, fields }) => {
    const eventDate = fields.date_start;

    const [isFavorite, setIsFavorite] = useState(false);
    
    const update_favorite = () => {
        const newValue = !isFavorite;
        setIsFavorite(newValue);


        let likedIds = localStorage.getItem('lydieProjetFavoris');
        //s'il n'y en a pas on crée un tableau | s'il y en a, on transforme la string en tableau
        likedIds = likedIds ? JSON.parse(likedIds) : [];

        if (likedIds.includes(id)) {
            setIsFavorite(true);
            likedIds.splice(likedIds.indexOf(id), 1);
        }
        else {
            //pas encore là : on push l'id + remplit le cœur au clic
            likedIds.push(id);
        }

        localStorage.setItem('lydieProjetFavoris', JSON.stringify(likedIds)); //on enregistre dans localstorage
    }

    //favorites
    useEffect(() => {
        let likedIds = localStorage.getItem('lydieProjetFavoris');
        //s'il n'y en a pas on crée un tableau | s'il y en a, on transforme la string en tableau
        likedIds = likedIds ? JSON.parse(likedIds) : [];

        if (likedIds.includes(id)) {
            setIsFavorite(true);
        }

        if (!likedIds) {
            localStorage.setItem('lydieProjetFavoris', JSON.stringify(likedIds)); //on update le local storage
        }

    }, [id])

    return (
        <figure className="card">
            <figcaption>
                <Link to={{ pathname: "/event", search: `${id}` }}>
                    <h3 className="title-small">{fields.title}</h3>
                </Link>
                <div className="flex">
                    <LikeButton isFavorite={isFavorite} updateFavorite={update_favorite} />
                    {GlobalFunctions.formatDate(eventDate)}
                </div>
                <p className="card-description">
                    {fields.lead_text}
                </p>
            </figcaption>
            <Link to={{ pathname: "/event", search: `${id}` }}>
                <img src={fields.cover_url} alt="Couverture" />
            </Link>
        </figure>
    );
};

export default Card;