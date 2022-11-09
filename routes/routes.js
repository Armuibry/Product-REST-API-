import express from 'express'
import {getProducts, postProduct, getProductWithId, deleteProduct, updateProduct} from './productRoutes.js'


const router = express();

router.get('/',getProducts);

router.get('/:id',getProductWithId);

router.post('/', postProduct);

router.delete('/:id', deleteProduct);

router.put('/:id', updateProduct);


export default router;