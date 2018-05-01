import DataLoader from 'dataloader';
import {
    getUserOwnedItems,
    getBorrowedItems,
    getItem,
    getUser
} from './resources/jsonServer';

export default function() {
    return {
        UserOwnedItems: new DataLoader(ids =>
            Promise.all(ids.map(id => getUserOwnedItems(id)))
        ),
        BorrowedItems: new DataLoader(ids =>
            Promise.all(ids.map(id => getBorrowedItems(id)))
        ),
        SingleItem: new DataLoader(ids =>
            Promise.all(ids.map(id => getItem(id)))
        ),
        SingleUser: new DataLoader(ids =>
            Promise.all(ids.map(id => getUser(id)))
        )
    };
}
