import Link from "next/link";
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import slide_1 from '@/public/assets/images/category/architecture.jpg';
import slide_2 from '@/public/assets/images/category/automative.jpg';
import slide_3 from '@/public/assets/images/category/decorative.jpg';
import slide_4 from '@/public/assets/images/category/industrial-finish.jpg';
import slide_5 from '@/public/assets/images/category/wood-finish.jpg';

const HoverBannerOne = ({ spaceBottomClass }) => {
  const params = {
    loop: true,
    loopAdditionalSlides: true,
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 1,
    grabCursor: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true
    // },
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };

  return (
    <div
      className={`hover-banner-area`}
      style={{ marginTop: "4rem" }}
    >
      <Container className="wide">
        <div className="page-content">
          <div className="divider-text__container" style={{ marginBottom: "5rem" }}>
            <h1 className="title space-mb--30" style={{ textAlign: 'center', fontWeight: 'normal' }}>Our Categories</h1>
          </div>
        </div>
        <Swiper {...params}>
          <Col md={4} className="mb-3">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/architecture.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
                
                {/* <Image src={slide_1} layout="fill" objectFit="cover" /> */}
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href="/shop/left-sidebar?category=architecture"
                      as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=architecture"}
                    >
                      <a>
                        Architecture Paints
                      </a>
                    </Link>
                  </p>
                  <Link
                    href="/shop/left-sidebar?category=architecture"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=architecture"}
                    >
                    <a>Take a glance</a>
                  </Link>
                </div>
              </div>
              <Link
                href="/shop/left-sidebar?category=architecture"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=architecture"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/automative.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
                
                {/* <Image src={slide_2} layout="fill" objectFit="cover" /> */}
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href="/shop/left-sidebar?category=automative"
                      as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=automative"}
                    >
                      <a>
                        Automative Refinish
                      </a>
                    </Link>
                  </p>
                  <Link
                    href="/shop/left-sidebar?category=automative"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=automative"}
                  >
                    <a>Take a glance</a>
                  </Link>
                </div>
              </div>
              <Link
                href="/shop/left-sidebar?category=automative"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=automative"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/decorative.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
                
                {/* <Image src={slide_3} layout="fill" objectFit="cover" /> */}
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href="/shop/left-sidebar?category=decorative"
                      as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=decorative"}
                    >
                      <a>
                        Decorative Paints
                      </a>
                    </Link>
                  </p>
                  <Link
                    href="/shop/left-sidebar?category=decorative"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=decorative"}
                  >
                    <a>Take a glance</a>
                  </Link>
                </div>
              </div>
              <Link
                href="/shop/left-sidebar?category=decorative"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=decorative"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/industrial-finish.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
                
                {/* <Image src={slide_4} layout="fill" objectFit="cover" /> */}
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href="/shop/left-sidebar?category=industrial finish"
                      as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=industrial finish"}
                    >
                      <a>
                        Industrial Finish
                      </a>
                    </Link>
                  </p>
                  <Link
                    href="/shop/left-sidebar?category=industrial finish"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=industrial finish"}
                  >
                    <a>Take a glance</a>
                  </Link>
                </div>
              </div>
              <Link
                href="/shop/left-sidebar?category=industrial finish"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=industrial finish"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
          {/* <Col md={4} className="mb-3">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/powder-coating.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href="/shop/left-sidebar?category=architecture"
                      as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=architecture"}
                    >
                      <a>
                        Powder <span>Coating</span>
                      </a>
                    </Link>
                  </p>
                  <Link
                    href="/shop/left-sidebar?category=architecture"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=architecture"}
                  >
                    <a>Take a glance</a>
                  </Link>
                </div>
              </div>
              <Link
                href="/shop/left-sidebar?category=architecture"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=architecture"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col> */}
          <Col md={4} className="mb-3">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/wood-finish.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
                
                {/* <Image src={slide_5} layout="fill" objectFit="cover" /> */}
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Link
                      href="/shop/left-sidebar?category=wood finish"
                      as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=wood finish"}
                    >
                      <a>
                        Wood <span>Finish</span>
                      </a>
                    </Link>
                  </p>
                  <Link
                    href="/shop/left-sidebar?category=wood finish"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=wood finish"}
                  >
                    <a>Take a glance</a>
                  </Link>
                </div>
              </div>
              <Link
                href="/shop/left-sidebar?category=wood finish"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar?category=wood finish"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
        </Swiper>
      </Container>
    </div>
  );
};

export default HoverBannerOne;
