import express, {Request, Response, NextFunction} from 'express'
import { productService } from '../4-services/products-services'
import { StatusCode } from '../3-models/enum';
import { ProductModel } from '../3-models/product-model';
import { securityMiddleware } from '../6-middleware/security-middleware';
import { fileSaver } from 'uploaded-file-saver';


class ProductController {
    public readonly router = express.Router()

    public constructor() {
        this.router.get('/products', this.getAllProducts);
        this.router.get('/product/:id([0-9]+)', this.getOneProduct)
        this.router.get('/products/images/:imageName)', this.getProductImage)
        this.router.post('/product',securityMiddleware.validateLogin, this.addProduct)
        this.router.delete('/product/:id([0-9]+)', securityMiddleware.validateAdmin, this.delProduct)
        this.router.put('/product/:id([0-9])+',securityMiddleware.validateLogin, this.updateProduct)
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

    private async addProduct(req: Request, res: Response, next: NextFunction) {

        try {
        req.body.image = req.files?.image
        const product = new ProductModel(req.body)
        const addedProduct = await productService.addProduct(product)
        product.id = addedProduct
        res.status(StatusCode.Created).json(product)
        }
        catch (err: any) {
            next(err)
        }
    }

    private async delProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const id = +req.params.id 
            await productService.delProduct(id)
            res.sendStatus(StatusCode.NoContent)
        }
        catch (err: any) {
            next(err)
        }
    }

    private async updateProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const id = +req.params.id 
            req.body.id = id
            const product = new ProductModel (req.body)
            const updatedProduct = await productService.updateProduct(product)
            res.json(updatedProduct)
        }
        catch (err: any) {
            next(err)
        }
    }

    private async getProductImage(req: Request, res: Response, next: NextFunction) {

        try {
            const imageName = req.params.imageName
            const imagePath = fileSaver.getFilePath(imageName, true)
            res.sendFile(imagePath)
        }
        catch (err: any) {
            next(err)
           
        }
    }

    
}

export const productController = new ProductController()