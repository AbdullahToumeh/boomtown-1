import fetch from 'node-fetch';

const jsonApi = 'http://localhost:3001';

export const getUserOwnedItems = id => {
    return fetch(`${jsonApi}/items/?itemowner=${id}`)
        .then(response => response.json())
        .catch(err => console.log(err));
};

export const getBorrowedItems = id => {
    return fetch(`${jsonApi}/items/?borrower=${id}`)
        .then(response => response.json())
        .catch(err => console.log(err));
};

export const getItem = id => {
    return fetch(`${jsonApi}/items/${id}`)
        .then(response => response.json())
        .catch(err => console.log(err));
};

export const getUser = id => {
    return fetch(`${jsonApi}/users/${id}`)
        .then(response => response.json())
        .catch(err => console.log(err));
};
