//THIS IS WHERE THE ACTUAL ACTION FUNCTIONS GO

export const fetchItems = (itemsData) => {

}

export const fetchProfileItems = (itemsData) => {
  itemsData[0].map(item => {
    itemsData[1].map(user => {
      if (user.id === item.itemowner) {
        item.itemowner = user;
      }
    })
  });
  return itemsData[0];
}