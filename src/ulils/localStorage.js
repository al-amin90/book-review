import { toast } from "react-toastify";

const getStorage = (Sname) => {
    const isStorage = localStorage.getItem(Sname);
    if (isStorage) {
        return JSON.parse(isStorage);
    }
    else {
        return []
    }
}

const setStorage = (id, Sname) => {
    const storageData = getStorage(Sname);
    const exits = storageData.find(storId => storId === id)
    if (exits) {
        toast.error(`You Already Added to ${Sname}`);
    }
    else {
        storageData.push(id);
        localStorage.setItem(Sname, JSON.stringify(storageData))
        toast.success(`Book Added to ${Sname}`);
    }
}

export { setStorage, getStorage }