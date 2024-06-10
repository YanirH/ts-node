import express, {Request, Response, NextFunction} from 'express'
import { productService } from '../4-services/products'


class ProductController {
    public readonly router = express.Router()

    public constructor() {
        this.router.get('/api/products', this.getAllProducts)
    }

    private async getAllProducts(req: Request, res: Response, next: NextFunction) {
        let products = "hello"
         products = await productService.getAllProducts()
        res.json(products)
    }
}

export const productController = new ProductController()