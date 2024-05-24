import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css"
import "../Styles/Nav2.css"


function Nav2() {
  return (
    <Navbar className="bg-dark" id="Nav2">
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={{paddingLeft:"43%"}}>
          <img src="/img/logo.avif" style={{ width: "150px" }} alt="" />
        </Nav>
        <Nav style={{paddingLeft:"33%"}}>
          <Nav.Link href="#deets" className="text-light">
            <img src="/img/user.png" alt="" style={{ width: "25px" }} />
          </Nav.Link>
          <Nav.Link href="#memes" className="text-light">
            <img src="/img/search.png" alt="" style={{ width: "25px" }} />
          </Nav.Link>
          <Nav.Link href="#memes" className="text-light">
            <img src="/img/shopping-bag.png" alt="" style={{ width: "25px" }} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav2;
