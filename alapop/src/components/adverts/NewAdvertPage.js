import Button from "../shared/Button"
import { createNewAdv } from "./service"


const NewAdv = () => {
    const handleSubmit = async event => {
        const response = await createNewAdv(
            {
            name: event.target.addName.value,
            sale:  event.target.addSelect.value,
            price: event.target.addPrice.value,
            tags: event.target.addTag.value,
            photo: event.target.addPhoto.value
            }
        )
        console.log(response)
    }
    
    return (
        <>
        <div className="createAddForm">
        
            <h1>Do you want to buy somthing?<br />
                To sell something, maybe?</h1>
                
            <form id="createAddForm" onSubmit={handleSubmit}>

                <label htmlFor="addName" className="tittle">Producto:</label>
                <input type="text" id="addName" name="addName" placeholder="Product name" size="25" required /><br />

                <label htmlFor="addPhoto" className="tittle">Foto del producto:</label>
                <input type="url" id="addPhoto" name="addPhoto" placeholder="Product image url" onChance={event => {console.log(event.target.files[0])}}/><br />
                
                <label htmlFor="addTag" className="tittle">Tag</label>
                <input type="text" id="addTag" name="addTag" /> <br />
                
                <label htmlFor="addDescription">Descripción del producto:</label><br />
                <textarea name="addDescription" id="addDescription" className="tittle" cols="30" rows="10" placeholder="Describe your product here." required></textarea><br />
                
                <label htmlFor="addSelect" className="tittle">Este artículo se:</label>
                <select name="addSelect" id="addSelect"> 
                        <option value="true">Se vende</option>
                        <option value="false">Se busca</option>
                </select>
                
                
                <label htmlFor="addPrice" className="tittle">por:</label><br />
                <h2 className="productData"><input className ="inputPrice" type="tel" id="addPrice" name="addPrice" minLength="1" size="5" placeholder="Price" required /> €</h2>
                <p className="minPrice">(Mínimo 1 €)</p>
            
                <div className="buttonsArea">
                    <Button type="submit" id="submit" className="buttons" variant="primary" disable>Create Add</Button>
                    <Button type="reset" id="reset" className="buttons" variant="primary" disable>Reset Info</Button>
                </div>

            </form>
        </div>
        </>
    )
}

export default NewAdv