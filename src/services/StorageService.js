const KEY = "todoapp:lists";

const StorageService = {
    getTodolists() {
        return JSON.parse(window.localStorage.getItem(KEY)) || [];
    },

    saveTodolists(todosArray) {
        window.localStorage.setItem(KEY, JSON.stringify(todosArray));
    },
};

export default StorageService;