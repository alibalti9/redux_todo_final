export const localData = (method, data) => {
    return localStorage[method + "Item"]("data", method != "get" && JSON.stringify(data))
}
