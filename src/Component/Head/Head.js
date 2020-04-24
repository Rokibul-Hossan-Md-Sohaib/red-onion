import React from 'react';
import './Head.css';

const Head = () => {
    return (
        <div className="picture">
            <nav>
                <a href="/lunch">Lunch</a>
               <a href="/dinner">Dinner</a>
               <a href="/breakfast">Breakfast</a>
            </nav>
        </div>
    );
};

export default Head;