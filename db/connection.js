import Client from "pg";


const clientt =  Client.Pool

export const client = new clientt({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"company@123",
    database:"products"
});

client.connect();

client.on("connect", ()=>{
    console.log("PostgreSQL Connection Success");
});

client.on("end", ()=>{
    console.log("connect Ended with DB");
})
