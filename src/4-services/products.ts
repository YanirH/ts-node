import { dal } from "../2-utils/dal"
import { ResourceNotFoundError } from "../3-models/client-error"

class ProductService {
    public async getAllProducts(){
        const sql = "select * from products"
        const products = await dal.execute(sql)
        return products
    }

    public async getOneProduct(id: number){
        const sql = "select * from products where id = ?"
        const product = await dal.execute(sql, [id])
        if(product.length === 0) throw new ResourceNotFoundError(id)
        return product
    }
}

export const productService = new ProductService ()