import fetch from 'node-fetch';

export default function({ pgResources, fbResources }) {
  return {
    Query: {
      items(root) {
        return pgResources.getItems();
      },
      users(root) {
        return fbResources.getUsers();
      },
      item(root, { id }, context) {
        return context.loaders.SingleItem.load(id);
      },
      user(root, { id }, context) {
        return context.loaders.SingleUser.load(id);
      }
    },
    Item: {
      async borrower({ borrower }, args, context) {
        if (borrower !== null) {
          return context.loaders.ItemOwner.load(borrower);
        }
      },
      itemowner({ itemowner }, args, context) {
        return context.loaders.ItemOwner.load(itemowner);
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
        return pgResources.addItem(args);
      }
    }
  };
}
