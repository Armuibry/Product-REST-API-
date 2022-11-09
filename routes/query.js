export const getprod = "SELECT * FROM product_list";
export const getProdWithId = "SELECT FROM product_list WHERE id = $1";
export const checkEmail="SELECT s FROM product_list s WHERE s.name = $1";
export const addProd = "INSERT INTO product_list (name,sku,brand,category,manufacturer,hsncode,weight,dimension) VALUES($1,$2,$3,$4,$5,$6,$7,$8)";
export const deleteProd = "DELETE FROM product_list WHERE id=$1";

export const updateProd = "UPDATE product_list SET name=$1, sku=$2, brand=$3, category=$4, manufacturer=$5 hsnCode=$6, weight=$7, dimension=$8 WHERE id=$9"

