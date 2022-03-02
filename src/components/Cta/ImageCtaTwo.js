import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const ImageCtaTwo = ({ spaceBottomClass }) => {
  return (
    <div
      className={`image-cta-two ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="image-cta-two__content space-mb-mobile-only--40">
              <h3 className="subtitle space-mb--30">Featured Product</h3>
              <h2 className="title space-mb--30">Our Catalouge Collection</h2>
              <p className="text space-mb--30">
                Become Inspired By Our Range of Colors.
              </p>
              <Link
                href="/shop/catalouges"
                as={process.env.PUBLIC_URL + "/pages/shop/catalouges"}
              >
                <a className="lezada-button lezada-button--medium lezada-button--icon--left">
                  View Our Catalouges
                </a>
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <div className="image-cta-two__image">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/cta/catalouge-main.jpg"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageCtaTwo;
