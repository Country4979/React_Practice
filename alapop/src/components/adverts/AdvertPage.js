import { useParams } from 'react-router-dom';
const AdvertPage = props => {
    const params = useParams()

    return (/*
        <>
        <div className="add">
            <div className="productInfo"> 
                <div className="userInfo">
                    <p>User: ${advs.userId}</p>
                </div>
                <div className="productName">
                    <h1>${advs.name}</h1>
                    
                </div>
                <div className="productImg">
                    <p>Poner aquí la foto</p>

                </div>
            
                <div className = "productData">
                    <p> Se <span id="isSale" >${advs.select}</span> este producto por:</p>
                    <h2>${advs.price} €</h2>
                    <div className = "typeTag">
                    </div>
                </div>
                <div userButoons>
                    <div className="editAnddeleteButton">
                        <Button id="deleteAdd" className="buttons">Delete Ad</Button>

                        <p>Aquí enlance "href="editAd.html?addId=${product.id}" id="editAd" class="buttons" Edit Ad"</p>
                    </div>
                </div>
            </div>
        </div>
        </>*/
        <div>Detalle del anuncio</div>
    )
}

export default AdvertPage