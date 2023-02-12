
const save = (key: string, data: any) => {
    localStorage.setItem(key, data)
}

const get = (key: string) => {
    return localStorage.getItem(key)
}

const remove = (key: string) => {
    localStorage.removeItem(key)
}

const StorageModule = {
    save,
    get,
    remove
}

export default StorageModule