import logo from '../../assets/Alapop.png'
const Headers = ({title}) => {
    
    return (
        <header>
        <div className="container">
            <div id="headerText">
                <h1>{title}</h1>
            </div>
            <div id="headerImg">
                <img src={process.env.PUBLIC_URL + logo} alt="Logo de AlaPop. Carita picarona tipo emoji tapándose la boca mientras mira hacia arriba" />    
            </div>
        </div>
    </header>
    )
};

export default Headers