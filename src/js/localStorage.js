export function addToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(`Error key: ${key} saving to local strage; `, error.message);
  }
}

export function getFromStorage(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.log(`Error key: ${key} to get from local strage; `, error.message);
  }
}

export function removeFromStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(
      `Error key: ${key} to delete from local strage; `,
      error.message
    );
  }
}
