import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Container, Row } from "react-bootstrap";
import { ProductGridWrapper } from "../ProductThumb";

const ProductTab = ({ newProducts, popularProducts, saleProducts }) => {
  return (
    <div className="product-tab space-mb--r100">
      <Container>
        <Tab.Container defaultActiveKey="architectural">
          <Nav
            variant="pills"
            className="product-tab__navigation text-center justify-content-center space-mb--r60"
          >
            <Nav.Item>
              <Nav.Link eventKey="architectural">Architectural</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Automative">Automative</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="decorative">Decorative</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="powder">Powder</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="architectural">
              <Row className="space-mb--rm50">
                <ProductGridWrapper
                  products={newProducts}
                  bottomSpace="space-mb--r50"
                />
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="Automative">
              <Row className="space-mb--rm50">
                <ProductGridWrapper
                  products={popularProducts}
                  bottomSpace="space-mb--r50"
                />
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="decorative">
              <Row className="space-mb--rm50">
                <ProductGridWrapper
                  products={saleProducts}
                  bottomSpace="space-mb--r50"
                />
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="powder">
              <Row className="space-mb--rm50">
                <ProductGridWrapper
                  products={saleProducts}
                  bottomSpace="space-mb--r50"
                />
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default ProductTab;
