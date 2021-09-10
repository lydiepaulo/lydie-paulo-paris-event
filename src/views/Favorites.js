import React, { useEffect, useState } from 'react';
import Border from '../components/Border';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import EventService from '../services/EventService';
import StorageService from '../services/StorageService';

const Favorites = () => {
    const [myFavorites, setMyFavorites] = useState(null);

    let likedIds = StorageService.myLocalStorage();

    function fetchProfileData() {
        return Promise.all(likedIds.map((id) => EventService.fetchId(id).then((response) => response)))
        .then((data) => {
            return data;
        });
    }

useEffect(() => {
    const useFetchProfileData = fetchProfileData();
    useFetchProfileData.then((data) => {
        setMyFavorites(data)
    })
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

    return (
        <div className="pages-background favorites">
            <Navbar />
            <main>
                <h1 class="title-large">Évènements enregistrés</h1>
                <div className="card-container">
                    {myFavorites && myFavorites.length === 0 && <h2 class="title-small">Aucun évènement n'a été enregistré</h2>}
                    {myFavorites && myFavorites.length !== 0 && myFavorites.map((data) => <Card key={data.id} id={data.id} fields={data.fields} />)}
                </div>
            </main>
            <Border />
        </div>
    );
};

export default Favorites;







