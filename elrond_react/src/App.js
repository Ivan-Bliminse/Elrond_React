import { useEffect } from "react";
import Companies from "./Components/Companies";
import NavTop from "./Components/NavTop";
import NavTopTwo from "./Components/NavTopTwo";
import NewBlock from "./Components/NewBlock";


function App() {

  useEffect(() => {

    const navTopBottom = document.querySelector('.navTop')
    const navTopHeight = navTopBottom.offsetHeight + navTopBottom.offsetTop

    const navTopTwo = document.querySelector('.navTopTwo')
    const activeButton = document.getElementById('activeButton')
    const secondNavBlack = document.querySelector('.secondNavBlack')
    const secondNavLight = document.getElementById('secondNavLight')

    function NavSticky() {
      if (navTopHeight < window.scrollY) {
        navTopTwo.classList.add('active')
        activeButton.classList.add('active')
        secondNavBlack.classList.add('active')
        secondNavLight.classList.add('active')

      } else {
        navTopTwo.classList.remove('active')
        activeButton.classList.remove('active')
        secondNavBlack.classList.remove('active')
        secondNavLight.classList.remove('active')

      }
    }

    window.addEventListener('scroll', NavSticky)
  })

  return (
    <div className="header">
      <NavTop />
      <NavTopTwo />
      <NewBlock />
      <Companies />
    </div>
  );
}

export default App;
