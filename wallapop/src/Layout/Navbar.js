import Button from "../shared/Button";

const Navbar = () => {
    console.log('Se ha cargado el Navbar')
    return (
        <section className="userActions">
        <div className = "navbar">
            <div id="logged"></div>
            <Button className="NavBarButton">New Adv.</Button>
            <Button className="NavBarButton" visibility="primary">Login</Button>
            <Button className="NavBarButton" disabled>Logout</Button>
        </div>
    </section>
    )
};

export default Navbar