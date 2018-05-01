import fetch from 'node-fetch';
import {
    getUserOwnedItems,
    getBorrowedItems,
    getItem,
    getUser
} from './resources/jsonServer';

const jsonApi = 'http://localhost:3001';

const resolveFunctions = {
    Query: {
        items(root) {
            return fetch(`${jsonApi}/items`)
                .then(response => response.json())
                .catch(err => console.log(err));
        },
        users(root) {
            return fetch(`${jsonApi}/users`)
                .then(response => response.json())
                .catch(err => console.log(err));
        },
        item(root, { id }, context) {
            return context.loaders.SingleItem.load(id);
        },
        user(root, { id }, context) {
            return context.loaders.SingleUser.load(id);
        }
    },
    Item: {
        async borrower({ borrower }) {
            const user = await fetch(`${jsonApi}/users/${borrower}`);
            const json = await user.json();
            if (!json.id) return null;
            return json;
        },
        itemowner({ itemowner }) {
            return fetch(`${jsonApi}/users/${itemowner}`)
                .then(response => response.json())
                .catch(err => console.log(err));
        }
    },
    User: {
        borroweditems({ id }, args, context) {
            return context.loaders.BorrowedItems.load(id);
        },
        owneditems({ id }, args, context) {
            return context.loaders.UserOwnedItems.load(id);
        }
    },
    Mutation: {
        addItem(root, args) {
            const newItem = {
                name: args.name,
                title: args.title,
                description: args.description,
                imageurl: args.imageurl,
                tags: args.tags,
                itemowner: args.itemowner,
                created: args.created,
                available: args.available,
                borrower: args.borrower
            };

            fetch(`${jsonApi}/items`, {
                body: JSON.stringify(newItem),
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json());
            return newItem;
        }
    }
};

export default resolveFunctions;
