import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, fields }) => {
    return (
        <figure className="card">
            <figcaption>
                <Link to={{ pathname: "/event", search: `${id}` }}>
                    <h3 className="title-small">{fields.title}</h3>
                </Link>
                <span>{fields.date_start}</span>
                <p className="card-description">{fields.lead_text}</p>
            </figcaption>
            <Link to={{ pathname: "/event", search: `${id}` }}>
                <img src={fields.cover_url} alt="Couverture" />
            </Link>
        </figure>
    );
};

export default Card;