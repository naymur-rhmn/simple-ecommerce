// store data to local storage
function storeData(cartData) {
  const dataToStore = {};
  for (const data of cartData) {
    const id = data.id;
    const quantity = data.quantity;
    dataToStore[id] = quantity;
  }
  localStorage.setItem('cart', JSON.stringify(dataToStore));
}

// get data from local storage
function getData() {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
  const cartData = Object.keys(storedCart).map((id) => ({
    id,
    quantity: storedCart[id],
  }));
  return cartData;
}

// remove item from local storage
function removeItem(id) {
  const cartData = getData();
  const filteredData = cartData.filter((data) => data.id !== id);

  const newData = {};
  for (const data of filteredData) {
    const id = data.id;
    const quantity = data.quantity;
    newData[id] = quantity;
  }
  localStorage.setItem('cart', JSON.stringify(newData));
}

// remove all data from storage
const deleteCart = () => {
  localStorage.removeItem('cart');
};

export { storeData, getData, deleteCart, removeItem };
