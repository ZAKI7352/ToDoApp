
const localStorageKey = "ReactToDO";
export const getLocalStorageData = () => {
    const saved = localStorage.getItem(localStorageKey);
    if (!saved) return [];
    return JSON.parse(saved);
}

export const setLocalStorageData = (task) => {
    return localStorage.setItem(localStorageKey, JSON.stringify(task));

}