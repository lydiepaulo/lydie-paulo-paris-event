import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaFacebookF, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import Border from '../components/Border';
import LikeButton from '../components/LikeButton';
import Navbar from '../components/Navbar';
import EventService from '../services/EventService';
import parse from 'html-react-parser';
import GoogleMap from '../components/GoogleMap';

const Event = ({ location }) => {
    const urlId = location.search.replace(/\?/g, "");
    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        if (urlId) {
            EventService.fetchId(urlId)
                .then((apiResult) => {
                    setCardData(apiResult);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(cardData)

    return (
        <div className="pages-background event">
            <Navbar />
            <main className="event-main">

                {cardData &&
                    <div>
                        <div className="event-main__grid">
                            <div className="event-main__left">
                                <h1 className="title-large">{cardData.fields.title}</h1>
                                <h2 className="title-small">{cardData.fields.contact_name}</h2>
                                <div>
                                    <p><span className="title-xs">Dates :</span>
                                        {parse(`${cardData.fields.date_description}`)}</p>
                                </div>
                                <div>
                                    <p><span className="title-xs">Prix :</span>
                                        {cardData.fields.price_detail}</p>
                                </div>
                                <div>
                                    <p><span className="title-xs">Adresse :</span>
                                        {cardData.fields.address_name}<br />
                                        {cardData.fields.address_street}<br />
                                        {cardData.fields.address_city} {cardData.fields.address_zipcode}</p>
                                </div>
                                <div>
                                    <p><span className="title-xs">Transports :</span>
                                        {parse((`${cardData.fields.transport}`).replace("\n", "<br />"))}
                                    </p>
                                </div>
                                {cardData.fields.lat_lon &&
                                    <div className="card-gmap">
                                        {/* GOOGLE MAP CARD */}
                                        <div>
                                            <span className="title-xs">S'y rendre :</span>
                                            <GoogleMap coord={cardData.fields.lat_lon} />
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className="event-main__right">
                                <img src={cardData.fields.cover.url} alt="Évènement" />
                                <div className="event-main__right--contact">
                                    <div>
                                        <LikeButton id={cardData.id} />
                                        {cardData.fields.contact_phone && <span><a href={`tel:${cardData.fields.contact_phone}`}><FaPhoneAlt /></a></span>}
                                        {cardData.fields.contact_mail && <span><a href={`mailto:${cardData.fields.contact_mail}`}><FaEnvelope /></a></span>}
                                        <a href={cardData.fields.contact_facebook} target="_blank" rel="noreferrer"><FaFacebookF /></a>
                                        <a href={cardData.fields.contact_twitter} target="_blank" rel="noreferrer"><FaTwitter /></a>
                                    </div>
                                </div>
                                <div className="event-main__right--content">{parse(`${cardData.fields.description}`)}</div>
                            </div>
                        </div>
                    </div>
                }
            </main>
            <Border />
        </div>
    );
};

export default Event;