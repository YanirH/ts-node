import { dal } from "../2-utils/dal"

class ProductService {
    public async getAllProducts(){
        const sql = "select * from products"
        const products = await dal.execute(sql)
        return products
    }
}

export const productService = new ProductService ()