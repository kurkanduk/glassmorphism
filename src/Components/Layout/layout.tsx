import { Outlet } from "react-router-dom";
import "./layout.scss";
import { ReactComponent as Git } from './github.svg';
import FooterButton from "../FooterButton/footer-button";
import Generator from "../Generator/generator";
const Layout = () => {
  return (
    <>
      <div className="background">
        <header className="header">
          <h1>Glassmorphism.</h1>
        </header>
        <div className="body">
          <Outlet></Outlet>
        </div>
        <footer className="footer">
          <FooterButton></FooterButton>
          <div className="links">
            Links:
            <a href="https://kurkanduk.github.io/Demos-Page/"><button className="git-link">Other repositories</button></a>
            <a href="https://github.com/kurkanduk"><button className="git-link">Kurkanduk <Git className="logo"/></button></a>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Layout;
