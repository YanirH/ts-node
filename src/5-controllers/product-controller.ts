import express, {Request, Response, NextFunction} from 'express'
import { productService } from '../4-services/products'


class ProductController {
    public readonly router = express.Router()

    public constructor() {
        this.router.get('/api/products', this.getAllProducts);
        this.router.get('/api/product/:id', this.getOneProduct)
    }

    private async getAllProducts(req: Request, res: Response, next: NextFunction) {
        try {
        const products = await productService.getAllProducts()
        res.json(products)
        }
        catch (err: any) {
            next(err)
        }
    }

    private async getOneProduct(req: Request, res: Response, next: NextFunction) {

        try {
        const id = +req.params.id 
        const product = await productService.getOneProduct(id)
        res.json(product)
        }
        catch (err: any) {
            next(err)
        }
    }


    
}

export const productController = new ProductController()