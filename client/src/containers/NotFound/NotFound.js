import React from 'react';

import grumpyCat from '../../images/grumpy-cat.svg';
import './style.css';

const NotFound = () => {
    return (
        <div className={'not-found-page'}>
            <img
                src={grumpyCat}
                alt={'Not found grumpy cat'}
                className={'grumpy-cat'}
            />
            <h1>Nope</h1>
        </div>
    );
};

export default NotFound;
