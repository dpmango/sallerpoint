const version = "1.10"

export const loadState = () => {
  try {
    if (localStorage.getItem("storageVersion") !== version) {
      localStorage.clear();
      localStorage.setItem("storageVersion", version);
    }

    const serializedState = localStorage.getItem('sallerpointState');
    if (serializedState) {
      return JSON.parse(serializedState);
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('sallerpointState', serializedState);
  } catch (err) {
    console.log('We received an error while saving the store');
  }
};
