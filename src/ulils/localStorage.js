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

const setStorage = (id, Sname, isReaded) => {
    const storageData = getStorage(Sname);
    const exits = storageData.find(storId => storId === id)

    if (isReaded === true) {
        const wishData = getStorage("wishlist")
        const remainingWish = wishData.filter(wishId => wishId !== id);
        localStorage.setItem("wishlist", JSON.stringify(remainingWish))
        console.log(remainingWish);
    }


    // normal local storage work 
    if (exits) {
        toast.error(`You Already Added to ${Sname}`);
    }
    else {
        const readData = getStorage("read");
        const exitsReadData = readData.find(readId => readId === id);

        if (exitsReadData) {
            toast.warn("You already read this Book!")
        }
        else {
            storageData.push(id);
            localStorage.setItem(Sname, JSON.stringify(storageData))
            toast.success(`Book Added to ${Sname}`);
        }
    }
}

export { setStorage, getStorage }