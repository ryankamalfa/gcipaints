import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Container, Row } from "react-bootstrap";
import { ProductGridWrapper } from "../ProductThumb";

const CategoryGridFive = ({ categories }) => {
    return (
        <div className="product-tab space-mb--r100">
            <Container>
                <Nav
                    variant="pills"
                    className="product-tab__navigation text-left justify-content-start space-mb--r60 tex"
                >
                    <Nav.Item><h1 className="h1">Our Catalog</h1></Nav.Item>
                </Nav>
                <Row className="space-mb--rm50">
                    <ProductGridWrapper
                        products={categories}
                        bottomSpace="space-mb--r50"
                    />
                </Row>
            </Container>
        </div>
    );
};

export default CategoryGridFive;
