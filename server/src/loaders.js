import DataLoader from 'dataloader';
import { getUserOwnedItems, getBorrowedItems } from './jsonServer';

export default function() {
    return {
        UserOwnedItems: new DataLoader(ids =>
            Promise.all(ids.map(id => getUserOwnedItems(id)))
        ),
        BorrowedItems: new DataLoader(ids =>
            Promise.all(ids.map(id => getBorrowedItems(id)))
        )
    };
}
