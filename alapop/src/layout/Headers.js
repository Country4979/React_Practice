const Headers = () => {
    console.log('Se ha cargado el Header')
    return (
        <header>
        <div className="container">
            <div id="headerText">
                <h1>AlaPop</h1>
            </div>
            <div id="headerImg">
                <img src={process.env.PUBLIC_URL + "Alapop.png"} alt="Logo de AlaPop. Carita picarona estilo emoji tapándose la boca mientras mira hacia arriba" />    
            </div>
        </div>
    </header>
    )
};

export default Headers