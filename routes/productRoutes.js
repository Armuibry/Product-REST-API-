import {client} from "../db/connection.js";
import {getprod , getProdWithId, checkEmail, addProd, updateProd, deleteProd} from './query.js'



export const getProducts =  (req, res) => {
    client.query(getprod,(error,result)=>{
        if(error) return res.status(400).send('server error')

        res.status(200).send(result.rows);
    })
}



export const postProduct = (req, res) => {
    const {name,sku,brand,category,manufacturer,hsncode,weight,dimension} = req.body;
    client.query(checkEmail,[name], (error,result) =>{
        if(result.rowCount){
            res.status(500).send(result,"Product already Exist")
        }

            client.query(addProd,[name,sku,brand,category,manufacturer,hsncode,weight,dimension],(error,result)=>{
                if(error) throw error;
                res.status(200).json(result.rows);
            })
            
        
    })

    
}


export const getProductWithId = (req, res) => {
    const id = Number(req.params);
    client.query(getProdWithId,[id], (error,result)=>{
         if(error) return res.status(400).send(error)

        res.status(200).send(result)
    })
    
}

export const deleteProduct = (req,res) => {
    const id = Number(req.params);
    client.query(deleteProd,[id], (error,result) =>{
        if(error) return res.status(400).send(error);
        res.status(200).send(`deleted data from Db with id ${id}`)
    })
    
}

export const updateProduct = async (req,res) => {
        const id = Number(req.params);
        const {name,sku,brand,category,manufacturer,hsnCode,weight,dimension} = req.body
        client.query(updateProd,[name,sku,brand,category,manufacturer,hsnCode,weight,dimension,id], (error, result)=>{
            if(error) return res.status(400).send(error);

            res.status(201).send(`Filds Updated with id: ${id}`)
        })
    
}