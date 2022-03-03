import React from 'react';
import { connect } from "react-redux";
import { getProducts } from "../lib/product";
import { getCategories } from "../lib/category";
import { LayoutOne } from "../components/Layout";
import { HeroSliderFive, HeroSliderOne } from "../components/HeroSlider";
import { ImageCtaTwo } from "../components/Cta";
// import heroSliderData from "../data/hero-sliders/hero-slider-five.json";
import heroSliderData from "../data/hero-sliders/hero-slider-one.json";
import { HoverBannerOne, HoverBannerTwo } from "../components/Banner";
import ColorSlider from "../components/Color/ColorSlider";
import { Col, Container, Row } from "react-bootstrap";
import { ProductGridWrapper } from "../components/ProductThumb";
import { SectionTitleOne } from "../components/SectionTitle";
import Link from "next/link";
import Image from 'next/image';
// import gpg032_image from "../../public/assets/images/colors/fresh-green.jpg";
// import gpF021_image from '../../public/assets/images/colors/affectionate-blue.jpg';
// import gpH018_image from '../../public/assets/images/colors/distinguished-blue.jpg';
// import gpH050_image from '../../public/assets/images/colors/delicious-apples.jpg';
// import gpK018_image from '../../public/assets/images/colors/calm-blue.jpg';
// import gpK031_image from '../../public/assets/images/colors/greenish-blue.jpg';
// import gpY087_image from '../../public/assets/images/colors/warm-oily.jpg';
// import gpL027_image from '../../public/assets/images/colors/royal-rasasi.jpg';
// import gpL0168_image from '../../public/assets/images/colors/charcoal-lead.jpg';

const Home = ({ newProducts, popularProducts, saleProducts }) => {
  return (
    <LayoutOne aboutOverlay={false}>
      {/* hero slider */}

      {/* New Slider */}
      <HeroSliderOne sliderData={heroSliderData} />

      {/* Category Slider */}
      <HoverBannerOne spaceBottomClass="space-mb--r100" />

      <div id="trending-colors">
        <Container className="wide p-0 m-0 pr-0 mr-0 w-100 mw-100">
          <div className="page-content">
            <div className="divider-text__container" style={{ margin: "5rem 0" }}>
              <h1 className="title" style={{ textAlign: 'center', fontWeight: 'normal' }}>Quality Till Last Drop</h1>
            </div>
            <div className="divider-video_container w-100">
              {/* <video autoPlay={true}  muted={true} loop="loop" playsInline={true} >
                <source src="/assets/videos/home-video.mp4" type="video/mp4" />
              </video> */}
            </div>
          </div>
        </Container>
      </div>

      <div id="trending-colors">
        <Container className="">
          <div className="page-content">
            <div className="divider-text__container" style={{ margin: "6rem 0" }}>
              <h1 className="title" style={{ textAlign: 'center', fontWeight: 'normal', marginBottom: '5px' }}>Your Style in Any Place</h1>
              <div className="d-flex justify-content-center">
                <Link
                  href="/pages/other/visualizer"
                  as={process.env.PUBLIC_URL + "/pages/other/visualizer"}
                >
                  <a
                    className="lezada-button lezada-button--medium lezada-button--icon--left"
                    style={{
                      marginTop: "1rem",
                      textTransform: "unset"
                    }}
                  >
                    Try Our Visualizer
                    </a>
                </Link>
              </div>
            </div>
            <div className="color-grid">
              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#d6e5d4" }}>
                  <div className="color-chip__code">
                    <h4>GP-G032</h4>
                  </div>
                  <div className="color-chip__detail" style={{position:"relative"}} >
                      {/* <Image src={gpg032_image} layout="fill" objectFit="cover */}
                    <img src="/assets/images/colors/shadow.png" alt="" class="shadow" />
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">FRESH GREEN</div>
                {/* <div className="color-chip__desc">الأخضر المنعش</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#becccf" }}>
                  <div className="color-chip__code">
                    <h4>GP-F021</h4>
                  </div>
                  <div className="color-chip__detail">
                    <img src="/assets/images/colors/shadow.png" alt="" class="shadow" />
                    {/* <Image src={gpF021_image} layout="fill" objectFit="cover */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">AFFECTIONATE BLUE</div>
                {/* <div className="color-chip__desc">الأزرق الحنون</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#92b3bc" }}>
                  <div className="color-chip__code">
                    <h4>GP-H018</h4>
                  </div>
                  <div className="color-chip__detail" >
                    <img src="/assets/images/colors/shadow.png" alt="" class="shadow" />
                    {/* <Image src={gpH018_image} layout="fill" objectFit="cover */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">DISTINGUISHED BLUE</div>
                {/* <div className="color-chip__desc">الأزرق المميز</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#a7afa0" }}>
                  <div className="color-chip__code">
                    <h4>GP-H050</h4>
                  </div>
                  <div className="color-chip__detail" >
                    <img src="/assets/images/colors/shadow.png" alt="" class="shadow" />
                    {/* <Image src={gpH050_image} layout="fill" objectFit="cover */} 
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">DELICIOUS APPLES</div>
                {/* <div className="color-chip__desc">التفاح اللذيذ</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#77879b" }}>
                  <div className="color-chip__code">
                    <h4>GP-K018</h4>
                  </div>
                  <div className="color-chip__detail" >
                    <img src="/assets/images/colors/shadow.png" alt="" class="shadow" />
                    {/* <Image src={gpK018_image} layout="fill" objectFit="cover */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">CALM BLUE</div>
                {/* <div className="color-chip__desc">الأزرق الهادئ</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#33707d" }}>
                  <div className="color-chip__code">
                    <h4>GP-K031</h4>
                  </div>
                  <div className="color-chip__detail" >
                    <img src="/assets/images/colors/shadow.png" alt="" class="shadow" />
                    {/* <Image src={gpK031_image} layout="fill" objectFit="cover */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">GREENISH BLUE</div>
                {/* <div className="color-chip__desc">الأزرق المخضر</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#676e5c" }}>
                  <div className="color-chip__code">
                    <h4>GP-Y087</h4>
                  </div>
                  <div className="color-chip__detail">
                    <img src="/assets/images/colors/shadow.png" alt="" class="shadow" />
                    {/* <Image src={gpY087_image} layout="fill" objectFit="cover */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">WARM OILY</div>
                {/* <div className="color-chip__desc">الزيتي الدافئ</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#3d4b59" }}>
                  <div className="color-chip__code">
                    <h4>GP-L027</h4>
                  </div>
                  <div className="color-chip__detail" >
                    <img src="/assets/images/colors/shadow.png" alt="" class="shadow" />
                    {/* <Image src={gpL027_image} layout="fill" objectFit="cover */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">ROYAL RASASI</div>
                {/* <div className="color-chip__desc">الرصاصي الملوكي</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#4a4844" }}>
                  <div className="color-chip__code">
                    <h4>GP-L0168</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/charcoal-lead.jpg)" }}>
                    <img src="/assets/images/colors/shadow.png" alt="" class="shadow" />
                    {/* <Image src={gpL0168_image} layout="fill" objectFit="cover */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">CHARCOAL LEAD</div>
                {/* <div className="color-chip__desc">الرصاصي الفحمي</div> */}
              </div>

            </div>
          </div>
        </Container>
      </div>

      <div id="trending-colors">
        <Container className="wide p-0 m-0 pr-0 mr-0 w-100 mw-100">
          <div className="page-content">
            <div className="divider-text__container" style={{ margin: "5rem 0" }}>
              <h1 className="title" style={{ textAlign: 'center', fontWeight: 'normal', marginBottom: '5px' }}>Our Products</h1>
              <div className="d-flex justify-content-center">
                <Link
                  href="/shop/left-sidebar"
                  as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                >
                  <a
                    className="lezada-button lezada-button--medium lezada-button--icon--left"
                    style={{
                      marginTop: "1rem",
                      textTransform: "unset"
                    }}
                  >
                    View All
                    </a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="product-grid-container space-mb--r100 mt-4">
        <Container>
          <Row className="space-mb--rm50">
            <ProductGridWrapper
              products={popularProducts}
              bottomSpace="space-mb--r50"
              column={4}
            />
          </Row>
        </Container>
      </div>

      {/* image cta */}
      <ImageCtaTwo spaceBottomClass="space-mb--r100" />


      {/* banner */}
      <HoverBannerTwo spaceBottomClass="space-mb--r100" />

      {/* image cta
      <ImageCta
        image={imageCtaData.image}
        tags={imageCtaData.tags}
        title={imageCtaData.title}
        url={imageCtaData.url}
      /> */}
    </LayoutOne>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  const arabicProducts = state.arabicProductData;
  const categories = state.categoryData;

  return {
    categories: getCategories(categories, "decor", "new", 9),
    newProducts: getProducts(products, "decor", "new", 9),
    popularProducts: getProducts(products, "", "", 12),
    saleProducts: getProducts(products, "decor", "sale", 9)
  };
};

export default connect(mapStateToProps)(Home);
