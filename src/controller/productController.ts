import type { IncomingMessage, ServerResponse } from "node:http";
import { readProduct } from "../service/product-service";

export const productController = (req:IncomingMessage, res:ServerResponse) => {
    const url = req.url
    const method = req.method

    const urlParts = url?.split("/");
    // console.log(urlParts)
    const id = urlParts && urlParts[1] === 'products' ? Number (urlParts[2]) : null;
    console.log("This is the actual id : ", id)
                                    // Get all products
 if(url === "/products" && method === "GET"){

    // const products = [
    //     {
    //         id : 1,
    //         name : "Product 1",
    //     },
    // ]
    const products =readProduct()

    res.writeHead(200, {"content-type": "application/json"})
    res.end(
        JSON.stringify(
            {message:"Products retrieved successfully",
            data:products,}))
} else if(method === "GET"){

}
}