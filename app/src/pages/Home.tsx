import { useState } from "react";
import { Fade, Hero, Menu, Modal, Navbar } from "..";

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <>
            <Navbar onMenuButtonClick={() => setMenuOpen(true)} />
            <Hero />

            <Modal open={menuOpen}>
                <Fade />
                <Menu onClose={() => setMenuOpen(false)} />
            </Modal>
        </>
    )
}

export default Home;