import React from 'react';

const Image = (params) => {
    return (
        <div>
            <img src={params.src} alt={params.alt} />
        </div>
    );
}

export default Image;
