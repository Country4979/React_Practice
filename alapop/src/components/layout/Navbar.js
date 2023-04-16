import Button from "../shared/Button";

const Navbar = () => {
    console.log('Se ha cargado el Navbar')
    return (
        <section className="userActions">
        <div className = "navbar">
            <div id="logged"></div>
            <Button className="NavBarButton" variant="primary" disabled>New Adv.</Button>
            <Button className="NavBarButton" variant="primary" disabled>Login</Button>
            <Button className="NavBarButton" variant="primary" disabled>Logout</Button>
        </div>
    </section>
    )
};

export default Navbar