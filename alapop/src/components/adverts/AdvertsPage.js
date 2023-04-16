const AdvertsPage = (product) => {
    
    return(
        <>
        <a href="/addDetail.html?addId=${product.id}">    
            <div className="add">
                <div className="productInfo">
                
                    <div className="productName">
                        <h1>${product.name}</h1>
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
        </a>
        </>
    )
}

export default AdvertsPage