import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

function Slide5() {
  return (
    <Carousel fade>
      <Carousel.Item
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "black",
          padding: "30px",
        }}
      >
        <Card
          style={{ width: "20rem", border: "none", backgroundColor: "black" }}
        >
          <Card.Body style={{ textAlign: "center" }}>
            <div>⭐⭐⭐⭐</div>

            <Card.Title style={{ fontSize: "17px", color: "white" }}>
              “This collection is so incredible. So much fun to use. I have yet
              had a repeat round. Love love love this and I highly recommend
              this makes great gift for beginners.”
            </Card.Title>
            <br />
            <Card.Title style={{ color: "white" }}>TAMMY K.</Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "21rem", border: "none", backgroundColor: "black" }}
        >
          <Card.Body style={{ textAlign: "center" }}>
            <div>⭐⭐⭐⭐</div>

            <Card.Title style={{ fontSize: "17px", color: "white" }}>
              “I had the chance to play Paletteopoly with a group of girlfriends
              and it did not disappoint. ”
            </Card.Title>
            <br />
            <Card.Title style={{ color: "white" }}>URSULA B.</Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "20rem", border: "none", backgroundColor: "black" }}
        >
          <Card.Body style={{ textAlign: "center" }}>
            <div>⭐⭐⭐⭐</div>

            <Card.Title style={{ fontSize: "17px", color: "white" }}>
              “Amazing palette, selection fo shades and quality. Mattes are
              buttery, no fall out at all. Shimmers are crazy shining and
              creamy. No creasing.”
            </Card.Title>
            <br />
            <Card.Title style={{ color: "white" }}>Cristina G.</Card.Title>
          </Card.Body>
        </Card>

        {/* <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "black",
          padding: "30px",
        }}
      >
        <Card
          style={{ width: "20rem", border: "none", backgroundColor: "black" }}
        >
          <Card.Body style={{ textAlign: "center" }}>
            <div>⭐⭐⭐⭐</div>

            <Card.Title style={{ fontSize: "17px", color: "white" }}>
              “This collection is so incredible. So much fun to use. I have yet
              had a repeat round. Love love love this and I highly recommend
              this makes great gift for beginners.”
            </Card.Title>
            <br />
            <Card.Title style={{ color: "white" }}>TAMMY K.</Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "21rem", border: "none", backgroundColor: "black" }}
        >
          <Card.Body style={{ textAlign: "center" }}>
            <div>⭐⭐⭐⭐</div>

            <Card.Title style={{ fontSize: "17px", color: "white" }}>
              “I had the chance to play Paletteopoly with a group of girlfriends
              and it did not disappoint. ”
            </Card.Title>
            <br />
            <Card.Title style={{ color: "white" }}>URSULA B.</Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "20rem", border: "none", backgroundColor: "black" }}
        >
          <Card.Body style={{ textAlign: "center" }}>
            <div>⭐⭐⭐⭐</div>

            <Card.Title style={{ fontSize: "17px", color: "white" }}>
              “Amazing palette, selection fo shades and quality. Mattes are
              buttery, no fall out at all. Shimmers are crazy shining and
              creamy. No creasing.”
            </Card.Title>
            <br />
            <Card.Title style={{ color: "white" }}>Cristina G.</Card.Title>
          </Card.Body>
        </Card>
        {/* <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide5;
