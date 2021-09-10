import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';
import GlobalFunctions from '../services/GlobalFunctions';

const Card = ({ id, fields }) => {
    const eventDate = fields.date_start;
    const [isFavorite, setIsFavorite] = useState(false);

    //favorites
    useEffect(() => {
        console.log();
        let likedIds = localStorage.getItem('lydieProjetFavoris');
        
        likedIds = likedIds ? JSON.parse(likedIds) : [];

        if (likedIds.includes(id)) {
            setIsFavorite(true);
        }
    }, [id])

    return (
        <figure className="card">
            <figcaption>
                <Link to={{ pathname: "/event", search: `${id}` }}>
                    <h3 className="title-small">{fields.title}</h3>
                </Link>
                <div className="flex">
                    <LikeButton isFavorite={isFavorite} />
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