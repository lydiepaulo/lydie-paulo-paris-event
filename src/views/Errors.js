import React from 'react';
import Border from '../components/Border';
import Navbar from '../components/Navbar';

const Errors = () => {
    return (
        <div className="pages-background">
            <Navbar />
            <main>
                <h1 className="title-large">
                    Oops !
                    <div class="title-logo">404</div>
                    Il semblerait que vous vous soyez perdu·e…
                </h1>
            </main>
            <Border />
        </div>
    );
};

export default Errors;