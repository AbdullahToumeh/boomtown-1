import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';

import './style.css';

const Footer = () => (
    <div>
        <p>&copy; 2018 Boomtown Corp. All Rights Reserved</p>
        <Link to="/Share" className="share-button">
            <FloatingActionButton secondary>
                <ContentAdd />
            </FloatingActionButton>
        </Link>
    </div>
);

export default Footer;
