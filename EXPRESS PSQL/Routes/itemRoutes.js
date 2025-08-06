import express from "express"
import {createItemSchema,} from
const router = express.Router();

//criar 
router.post( 
 "/items", async (req, res) => {
    try {
        const data = createItem.parse(req.body)
        const item = await ServiceWorker.createItem(data);
        res.status(201).json(item);
)
//pegar todos 
router.get( 
 

)
//pegar por id
router.put( 
 

)
//atualizar um item
router.patch( 
 

)
//deletar um item
router.delete( 
 

)
export default router;
