import React from 'react';
import { FaHeart, /* FaRegHeart */ } from "react-icons/fa";

const LikeButton = () => {
    return (
        <div className="card__like-button">
            <FaHeart />
            {/* {&& <FaRegHeart />} */}
        </div>
    );
};

export default LikeButton;