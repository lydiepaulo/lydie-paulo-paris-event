import React from 'react';
import Border from '../components/Border';
import Navbar from '../components/Navbar';

const Errors = () => {
    return (
        <div className="pages-background errors">
            <Navbar />
            <main>
                <h1 className="title-large">
                    Oops !
                    <div class="title-xl">404</div>
                </h1>
                <div className="errors-container smooth-apparition">
                    <p>Il semblerait que vous vous soyez perdu·e…</p>
                </div>
            </main>
            <Border />
        </div>
    );
};

export default Errors;