export function setStore(items){
    localStorage.setItem("key-items", JSON.stringify(items));
}

export function getStore(items){
    return JSON.parse(localStorage.getItem("key-items"))
}