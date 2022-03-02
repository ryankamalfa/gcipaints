import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";

const ColorSlider = ({ spaceBottomClass }) => {
    const params = {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        grabCursor: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            1024: {
                slidesPerView: 5
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
            className={`space-mb--50 hover-banner-area ${spaceBottomClass ? spaceBottomClass : ""
                }`}

            style={{ marginBottom: "3rem" }}
        >
            <Container className="wide">
                <Swiper {...params} loopFillGroupWithBlank={false}>
                    <div className="space-mb--30 d-flex flex-column justify-content-center align-items-start" style={{ paddingBottom: "1rem" }}>
                        <div
                            style={{
                                position: "relative",
                                display: "block",
                                width: "100%",
                                height: "250px",
                                marginBottom: "1rem",
                                overflow: "hidden"
                            }}
                        >
                            <img src="/assets/images/colors/1.jpg" alt="" style={{ height: "100%", objectFit: "cover" }} />
                        </div>
                        <div className="title" style={{ color: "#27293d", fontWeight: "700", textTransform: "uppercase", marginBottom: ".5rem" }}>COLOR NAME</div>
                        <div className="d-flex flex-row justify-content-center align-items-start" style={{ gap: ".5rem" }}>
                            <div style={{ backgroundColor: "#fafafa", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#f3f1eb", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#eee8da", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#f1efe1", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#efede7", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                        </div>
                    </div>
                    <div className="space-mb--30 d-flex flex-column justify-content-center align-items-start">
                        <div
                            style={{
                                position: "relative",
                                display: "block",
                                width: "100%",
                                height: "250px",
                                marginBottom: "1rem",
                                overflow: "hidden"
                            }}
                        >
                            <img src="/assets/images/colors/2.jpg" alt="" style={{ height: "100%", objectFit: "cover" }} />
                        </div>
                        <div className="title" style={{ color: "#27293d", fontWeight: "700", textTransform: "uppercase", marginBottom: ".5rem" }}>COLOR NAME</div>
                        <div className="d-flex flex-row justify-content-center align-items-start" style={{ gap: ".5rem" }}>
                            <div style={{ backgroundColor: "#fafafa", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#f1efe1", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#eee8da", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#f3f1eb", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#e0dfdb", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                        </div>
                    </div>
                    <div className="space-mb--30 d-flex flex-column justify-content-center align-items-start">
                        <div
                            style={{
                                position: "relative",
                                display: "block",
                                width: "100%",
                                height: "250px",
                                marginBottom: "1rem",
                                overflow: "hidden"
                            }}
                        >
                            <img src="/assets/images/colors/3.jpg" alt="" style={{ height: "100%", objectFit: "cover" }} />
                        </div>
                        <div className="title" style={{ color: "#27293d", fontWeight: "700", textTransform: "uppercase", marginBottom: ".5rem" }}>COLOR NAME</div>
                        <div className="d-flex flex-row justify-content-center align-items-start" style={{ gap: ".5rem" }}>
                            <div style={{ backgroundColor: "#fafafa", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#f1efe1", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#f3f1eb", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#f1efe1", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#efede7", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                        </div>
                    </div>
                    <div className="space-mb--30 d-flex flex-column justify-content-center align-items-start">
                        <div
                            style={{
                                position: "relative",
                                display: "block",
                                width: "100%",
                                height: "250px",
                                marginBottom: "1rem",
                                overflow: "hidden"
                            }}
                        >
                            <img src="/assets/images/colors/4.jpg" alt="" style={{ height: "100%", objectFit: "cover" }} />
                        </div>
                        <div className="title" style={{ color: "#27293d", fontWeight: "700", textTransform: "uppercase", marginBottom: ".5rem" }}>COLOR NAME</div>
                        <div className="d-flex flex-row justify-content-center align-items-start" style={{ gap: ".5rem" }}>
                            <div style={{ backgroundColor: "#d3d2cd", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#e9e4d4", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#d2dddb", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#b0c6bb", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#efedcc", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                        </div>
                    </div>
                    <div className="space-mb--30 d-flex flex-column justify-content-center align-items-start">
                        <div
                            style={{
                                position: "relative",
                                display: "block",
                                width: "100%",
                                height: "250px",
                                marginBottom: "1rem",
                                overflow: "hidden"
                            }}
                        >
                            <img src="/assets/images/colors/5.jpg" alt="" style={{ height: "100%", objectFit: "cover" }} />
                        </div>
                        <div className="title" style={{ color: "#27293d", fontWeight: "700", textTransform: "uppercase", marginBottom: ".5rem" }}>COLOR NAME</div>
                        <div className="d-flex flex-row justify-content-center align-items-start" style={{ gap: ".5rem" }}>
                            <div style={{ backgroundColor: "#fafafa", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#f3f1eb", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#eee8da", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#f1efe1", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                            <div style={{ backgroundColor: "#efede7", borderRadius: "2px", boxShadow: "2px 2px 5px 0 #a9a9a9", width: "50px", height: "50px" }}></div>
                        </div>
                    </div>
                </Swiper>
            </Container>
        </div>
    );
};

export default ColorSlider;
