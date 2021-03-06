import DataLoader from 'dataloader';

export default function({ pgResources, fbResources }) {
  return {
    UserOwnedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => pgResources.getUserOwnedItems(id)))
    ),
    BorrowedItems: new DataLoader(ids =>
      Promise.all(ids.map(id => pgResources.getBorrowedItems(id)))
    ),
    SingleItem: new DataLoader(ids =>
      Promise.all(ids.map(id => pgResources.getItem(id)))
    ),
    SingleUser: new DataLoader(ids =>
      Promise.all(ids.map(id => fbResources.getUser(id)))
    ),
    ItemOwner: new DataLoader(ids =>
      Promise.all(ids.map(id => fbResources.getUser(id)))
    )
  };
}
