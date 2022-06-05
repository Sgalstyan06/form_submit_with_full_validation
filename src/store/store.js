export function setStore(items){
    localStorage.setItem("key-items", JSON.stringify(items));
}

export function getStore(items){
    return localStorage.getItem("key-items")
}