import http from "../http-common"

const getAll = () => {
    return http.get("/product")
}

const getOne = (id) => {
    return http.get(`/product/${id}`)
}

const create = (data) => {
    return http.post("/product", data)
}

const update = (id, data) => {
    return http.put(`/product/${id}`, data)
}

const remove = (id) => {
    return http.delete(`/product/${id}`)
}

const removeAll = () => {
    return http.delete("/product")
}

const ProductService = {
    getAll,
    getOne,
    create,
    update,
    remove,
    removeAll
}

export default ProductService