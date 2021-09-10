const StorageService = {
    myLocalStorage () {
        let likedIds = localStorage.getItem('lydieProjetFavoris');
        //s'il n'y en a pas on crée un tableau | s'il y en a, on transforme la string en tableau
        likedIds = likedIds ? JSON.parse(likedIds) : [];

        return likedIds
    }
};

export default StorageService;