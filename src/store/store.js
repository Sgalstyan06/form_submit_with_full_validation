export function setStore(items){
    localStorage.setItem("key-items", JSON.stringify(items));
}

export function getStore(){
    return JSON.parse(localStorage.getItem("key-items"))
}

export function removeClearStore(){
    localStorage.clear()
}