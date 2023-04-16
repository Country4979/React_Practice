import { useEffect, useState } from "react"
import { getLastAdv } from "./service";
import Button from "../shared/Button";

const AdvertsPage = (product) => {
    const [advs, setAdv] = useState([]);

    useEffect(() => {
        getLastAdv().then(advs => setAdv(advs));
    },[]);

    return (
        <>
        <div>
        {!!advs.length ? (
            <a href="/addDetail.html?addId=${product.id}">    
            {advs.map(adv =>(
                <div className="add">
                    <div className="productInfo">
                    
                        <div className="productName">
                            <h1>${adv.name}</h1>
                        </div>

                        <div className = "productData">
                            <p> Se <span id="isSale" >${product.select}</span> este producto por:</p>
                            <h2>${product.price} €</h2>
                            
                            <div className = "typeTag">
                                
                            </div>
                        </div>

                        <div className="product-img">
                            <img src="${product.photo}" /> 
                        </div>
                    </div>
                </div>

            ))}
            </a>
            ):(
                <>
                <p>Sorry, no adverts were found.</p>
                <Button variant="primary">Be the first to publish one...</Button>
                </>
            )}
        </div>
        </>
    )
}

export default AdvertsPage