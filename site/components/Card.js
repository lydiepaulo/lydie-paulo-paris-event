import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, fields }) => {
    return (
        <div className="card">
            <figure>
                <Link to={{ pathname: "/event", search: `${id}` }}>
                    <img src={fields.cover_url} alt="Couverture" />
                </Link>
                <figcaption>
                    <Link to={{ pathname: "/event", search: `${id}` }}>
                        <h3>{fields.title}</h3>
                    </Link>
                    <span>{fields.date_start}</span>
                    <p>{fields.lead_text}</p>
                </figcaption>
            </figure>
        </div>
    );
};

export default Card;