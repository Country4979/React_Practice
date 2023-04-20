import { useState } from "react";

const CheckBox = () => {
    const [selected, isSelected] = useState(false);

    
    const validaCheckbox = () => {
        const checked = checkbox.checked;
        if(checked){
            console.log('checkbox esta seleccionado');
        }
    }
    
    const checkbox = document.getElementById('rememberlogin');
    checkbox.addEventListener("change", validaCheckbox, false);
    
    return (
        <div className='checbox'>
            <label htmlFor="rememberPass">Remember login?</label>
            <input id="rememberlogin" type="checkbox"/>
        </div>
    );
};

export default CheckBox