const NavTopTwo = () => {
    return (
        <div className="navTopTwo">

            <div className="logo ">
                <img className="secondNavBlack" src="https://www.cryptoninjas.net/wp-content/uploads/elrond-cryptoninjas-1.jpg" alt="" />
                <img id='secondNavLight' className='secondNavLight' src="https://netvisor.uk/wp-content/uploads/2022/04/Elrond-Logo.png" alt="" />
            </div>

            <div className="navigationTwo ">
                <nav className="navTwo">
                    <a href="#">Technology</a>
                    <a href="#">Team</a>
                    <a href="#">Blog</a>
                    <a href="#">Docs</a>
                    <a href="#">Resources</a>
                    <button id="activeButton">BUY EGLD</button>
                </nav>
            </div>
        </div>
    );
}

export default NavTopTwo;