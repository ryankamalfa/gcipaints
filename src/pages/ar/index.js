import { connect } from "react-redux";
// import { getProducts } from "../../ar/lib/product";
import { getProducts } from "../../ar/lib/product";
import { getCategories } from "../../ar/lib/category";
import { LayoutOne } from "../../ar/components/Layout";
import { HeroSliderFive, HeroSliderOne } from "../../ar/components/HeroSlider";
import { ImageCtaTwo } from "../../ar/components/Cta";
// import heroSliderData from "../data/hero-sliders/hero-slider-five.json";
import heroSliderData from "../../ar/data/hero-sliders/hero-slider-one.json";
// import { HoverBannerOne, HoverBannerTwo } from "./../ar/components/Banner";
import { HoverBannerOne, HoverBannerTwo } from "../../ar/components/Banner";
import ColorSlider from "../../ar/components/Color/ColorSlider";
import { Col, Container, Row } from "react-bootstrap";
// import { ProductGridWrapper } from "../../ar/components/ProductThumb";
import { ProductGridWrapper } from "../../ar/components/ProductThumb";
import { SectionTitleOne } from "../../ar/components/SectionTitle";
import Link from "next/link";

const ArabicHome = ({ arabicNewProducts, arabicPopularProducts, arabicSaleProducts }) => {
  return (
    <LayoutOne aboutOverlay={false}>
      {/* hero slider

      {/* New Slider */}
      <HeroSliderOne sliderData={heroSliderData} />

      {/* Category Slider */}
      <HoverBannerOne spaceBottomClass="space-mb--r100" /> 

      <div id="trending-colors">
        <Container className="wide p-0 m-0 pr-0 mr-0 w-100 mw-100">
          <div className="page-content">
            <div className="divider-text__container" style={{ margin: "5rem 0" }}>
              <h1 style={{ textAlign: 'center' }}>الجودة حتى آخر قطرة</h1>
            </div>
            <div className="divider-video_container w-100">
              <video autoPlay={true} muted={true} loop="loop" playsInline={true} >
                <source src="/assets/videos/home-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </Container>
      </div>

      <div id="trending-colors">
        <Container className="">
          <div className="page-content">
            <div className="divider-text__container" style={{ margin: "6rem 0" }}>
              <h2 style={{ textAlign: 'center' }}>إختيارك في كل مكان</h2>
              <div className="d-flex justify-content-center">
                <Link
                  href="/ar/pages/other/visualizer"
                  as={process.env.PUBLIC_URL + "/ar/pages/other/visualizer"}
                >
                  <a
                    className="lezada-button lezada-button--medium lezada-button--icon--left"
                    style={{
                      marginTop: "1rem",
                      textTransform: "unset",
                      fontSize: "20px"
                    }}
                  >
                    اختر لونك الآن 
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
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/fresh-green.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title" style={{ marginBottom: '8px'}}>أخضر منعش</div>
                {/* <div className="color-chip__desc">الأخضر المنعش</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#becccf" }}>
                  <div className="color-chip__code">
                    <h4>GP-F021</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/affectionate-blue.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title" style={{ marginBottom: '8px'}}>أزرق حنون</div>
                {/* <div className="color-chip__desc">الأزرق الحنون</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#92b3bc" }}>
                  <div className="color-chip__code">
                    <h4>GP-H018</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/distinguished-blue.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title" style={{ marginBottom: '8px'}}>أزرق فريد</div>
                {/* <div className="color-chip__desc">الأزرق المميز</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#a7afa0" }}>
                  <div className="color-chip__code">
                    <h4>GP-H050</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/delicious-apples.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title" style={{ marginBottom: '8px'}}>التفاح اللذيذ</div>
                {/* <div className="color-chip__desc">التفاح اللذيذ</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#77879b" }}>
                  <div className="color-chip__code">
                    <h4>GP-K018</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/calm-blue.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title" style={{ marginBottom: '8px'}}>الأزرق الهادئ</div>
                {/* <div className="color-chip__desc">الأزرق الهادئ</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#33707d" }}>
                  <div className="color-chip__code">
                    <h4>GP-K031</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/greenish-blue.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title" style={{ marginBottom: '8px'}}>الأزرق المخضر</div>
                {/* <div className="color-chip__desc">الأزرق المخضر</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#676e5c" }}>
                  <div className="color-chip__code">
                    <h4>GP-Y087</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/warm-oily.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title" style={{ marginBottom: '8px'}}>زيتي دافئ</div>
                {/* <div className="color-chip__desc">الزيتي الدافئ</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#3d4b59" }}>
                  <div className="color-chip__code">
                    <h4>GP-L027</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/royal-rasasi.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title" style={{ marginBottom: '8px'}}>رصاصي ملكي</div>
                {/* <div className="color-chip__desc">الرصاصي الملوكي</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#4a4844" }}>
                  <div className="color-chip__code">
                    <h4>GP-L0168</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/charcoal-lead.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title" style={{ marginBottom: '8px'}}>رصاصي فحمي</div>
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
              <h1 style={{ textAlign: 'center' }}>منتجاتنا</h1>
              <div className="d-flex justify-content-center">
                <Link
                  href="/ar/shop/left-sidebar"
                  as={process.env.PUBLIC_URL + "/ar/shop/left-sidebar"}
                >
                  <a
                    className="lezada-button lezada-button--medium lezada-button--icon--left"
                    style={{
                      marginTop: "1rem",
                      textTransform: "unset",
                      fontSize: "20px"
                    }}
                  >
                    عرض الكل
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
              products={arabicPopularProducts}
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
  const arabicProducts = state.arabicProductData;
  const categories = state.categoryData;

  return {
    categories: getCategories(categories, "decor", "new", 9),
    arabicNewProducts: getProducts(arabicProducts, "decor", "new", 9),
    arabicPopularProducts: getProducts(arabicProducts, "", "", 12),
    arabicSaleProducts: getProducts(arabicProducts, "decor", "sale", 9)
  };
};

// export default (ArabicHome);
export default connect(mapStateToProps)(ArabicHome);
