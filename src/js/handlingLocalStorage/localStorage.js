const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log(`Error key: ${key} saving to local strage; `, error.message);
  }
};

export let loadedlibrary;
const load = key => {
  try {
    loadedlibrary = key;
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.log(`Error key: ${key} to get from local strage; `, error.message);
  }
};

const remove = key => {
    try {
     localStorage.removeItem(key);
    } catch (error) {
      console.log(`Error key: ${key} to delete from local strage; `, error.message);
    }
  };

export default {
  save,
  load,
  remove,
};
