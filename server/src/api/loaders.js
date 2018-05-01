import DataLoader from 'dataloader';
import {
    getUserOwnedItems,
    getBorrowedItems,
    getItem,
    getUser
} from './resources/jsonServer';

export default function({ jsonResource }) {
    return {
        UserOwnedItems: new DataLoader(ids =>
            Promise.all(ids.map(id => jsonResource.getUserOwnedItems(id)))
        ),
        BorrowedItems: new DataLoader(ids =>
            Promise.all(ids.map(id => jsonResource.getBorrowedItems(id)))
        ),
        SingleItem: new DataLoader(ids =>
            Promise.all(ids.map(id => jsonResource.getItem(id)))
        ),
        SingleUser: new DataLoader(ids =>
            Promise.all(ids.map(id => jsonResource.getUser(id)))
        )
    };
}
