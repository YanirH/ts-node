import { OkPacketParams } from "mysql2"
import { dal } from "../2-utils/dal"
import { ResourceNotFoundError } from "../3-models/client-error"
import { ProductModel } from "../3-models/product-model"

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

    public async addProduct(product: ProductModel) {
        product.validate()
        const sql = "INSERT INTO `products`(`name`,`price`) VALUES( ? , ? );"
        const info: OkPacketParams = await dal.execute(sql, [product.name, product.price])
        return info.insertId
        
    }

    public async updateProduct(product: ProductModel) {
        product.validate()
        const sql = "update products set name = ?, price = ? where id = ?"
        const info: OkPacketParams = await dal.execute(sql, [product.name, product.price, product.id])
        return product 
        
    }


    public async delProduct (id: number) {
        const sql = "DELETE FROM `products` WHERE `id`= ?"
        const product: OkPacketParams = await dal.execute(sql, [id])
        return product
    }
}

export const productService = new ProductService ()