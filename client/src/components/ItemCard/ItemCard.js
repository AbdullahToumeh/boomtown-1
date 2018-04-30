import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import Moment from 'moment';
import PropTypes from 'prop-types';

import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './style.css';

const dateComparison = date => Moment(date).fromNow();

const ItemCard = props => {
    const item = props.itemsData;
    return (
        <Card>
            <CardMedia>
                <img src={item.imageurl} alt={item.title} />
            </CardMedia>
            <Link
                to={{
                    pathname: `/profile/${item.itemowner.id}`,
                    state: {
                        bio: item.itemowner.bio,
                        email: item.itemowner.email,
                        fullname: item.itemowner.fullname
                    }
                }}
            >
                <CardHeader
                    title={item.itemowner.fullname}
                    subtitle={dateComparison(item.created)}
                    avatar={<Gravatar email={item.itemowner.email} />}
                />
            </Link>
            <CardTitle title={item.title} subtitle={item.tags.join()} />
            <CardText>{item.description}</CardText>
            <CardActions>
                <RaisedButton
                    label="Borrow"
                    backgroundColor="#263238"
                    secondary
                />
            </CardActions>
        </Card>
    );
};

export default ItemCard;

ItemCard.propTypes = {
    itemsData: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.array,
            PropTypes.object,
            PropTypes.bool
        ])
    ).isRequired
};
