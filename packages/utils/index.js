const inText = (findText, sourceText) => {
  return findText.toLowerCase().trim().includes(sourceText.toLowerCase().trim());
};

const anyInText = (arr, sourceText) => {
  return arr.find(findText => {
    return inText(findText, sourceText);
  });
};

const updateItem = (id, newItem, items) => {
  const newItems = items;
  const index = items.findIndex(item => item.id === id);
  Object.assign(newItems[index], newItem);

  return newItems;
};

const deleteItem = (id, items) => {
  const newItems = items.filter(item => item.id !== id);

  return newItems;
};

const addItem = (item, items) => {
  return [ ...items, item ];
};

export { inText, anyInText, updateItem, deleteItem, addItem } ;