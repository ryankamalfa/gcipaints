import { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import ModalVideo from "react-modal-video";
import { LayoutTwo } from "../../../components/Layout";
import { BreadcrumbOne } from "../../../components/Breadcrumb";
import { TestimonialOne } from "../../../components/Testimonial";
import { BrandLogoOne } from "../../../components/BrandLogo";
import testimonialData from "../../../data/testimonials/testimonial-one.json";
import brandLogoData from "../../../data/brand-logos/brand-logo-one.json";
import Visualizer from "../../../components/Visualizer";

const About = () => {
  const [modalStatus, isOpen] = useState(false);

  return (
    <LayoutTwo>
      <div id="trending-colors" className="space-mt--r130 space-mb--r130">
        <Container>
          <div className="page-head">
            <h1 className="title" style={{ marginBottom: '7px' }}>Trending Colors</h1>
            <h3 className="title">Explore Our Colors</h3>
          </div>
        </Container>

        <Container>
          <div className="page-content">
            <div class="section-inner">
              <div class="inner-wide streamlined tetris">
                <div class="tetris-column tetris-right primary">
                  <div class="tetris-text">
                    <h1
                      class="title animate-left"
                      style={{
                        fontWeight: 'normal',
                        marginBottom: '7px',
                        opacity: 1,
                        visibility: "inherit",
                        transform: "translate(0px, 0px)"
                      }}
                    >Rich <span>Shades</span></h1>
                    <div
                      class="palette-bars animate-left"
                      style={{
                        opacity: 1,
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                        backgroundColor: "#33707d",
                      }}
                    >
                      <div
                        class="palette-bar bar1"
                        style={{
                          opacity: 0.3881,
                          visibility: "inherit",
                          backgroundColor: "#d6e5d4"
                        }}
                      ></div>
                      <div
                        class="palette-bar bar2"
                        style={{
                          opacity: 0.7519,
                          visibility: "inherit",
                          backgroundColor: "#becccf"
                        }}
                      ></div>
                      <div
                        class="palette-bar bar3"
                        style={{
                          opacity: 0.9549,
                          visibility: "inherit",
                          backgroundColor: "#92b3bc"
                        }}
                      ></div>
                      <div
                        class="palette-bar bar4"
                        style={{
                          opacity: 0.521,
                          visibility: "inherit",
                          backgroundColor: "#676e5c"
                        }}
                      ></div>
                      <div
                        class="palette-bar bar5"
                        style={{
                          opacity: 0.521,
                          visibility: "inherit",
                          backgroundColor: "#77879b"
                        }}
                      ></div>
                      <div
                        class="palette-bar bar6"
                        style={{
                          opacity: 0.521,
                          visibility: "inherit",
                          backgroundColor: "#33707d"
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
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
                <div className="color-chip__title">FRESH GREEN</div>
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
                <div className="color-chip__title">AFFECTIONATE BLUE</div>
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
                <div className="color-chip__title">DISTINGUISHED BLUE</div>
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
                <div className="color-chip__title">DELICIOUS APPLES</div>
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
                <div className="color-chip__title">CALM BLUE</div>
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
                <div className="color-chip__title">GREENISH BLUE</div>
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
                <div className="color-chip__title">WARM OILY</div>
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
                <div className="color-chip__title">ROYAL RASASI</div>
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
                <div className="color-chip__title">CHARCOAL LEAD</div>
                {/* <div className="color-chip__desc">الرصاصي الفحمي</div> */}
              </div>

            </div>
          </div>
        </Container>

        <Container>
          <div className="page-content">
            <div class="section-inner">
              <div class="inner-wide streamlined tetris">
                <div class="tetris-column tetris-right primary">
                  <div class="tetris-text">
                    <h1
                      class="title animate-left"
                      style={{
                        fontWeight: 'normal',
                        marginBottom: '7px',
                        opacity: 1,
                        visibility: "inherit",
                        transform: "translate(0px, 0px)"
                      }}
                    >Warm <span>Shades</span></h1>
                    <div
                      class="palette-bars animate-left"
                      style={{
                        opacity: 1,
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                        backgroundColor: "#d0bdab",
                      }}
                    >
                      <div
                        class="palette-bar bar1"
                        style={{
                          opacity: 0.3881,
                          visibility: "inherit",
                          backgroundColor: "#c3a68b"
                        }}
                      ></div>
                      <div
                        class="palette-bar bar2"
                        style={{
                          opacity: 0.7519,
                          visibility: "inherit",
                          backgroundColor: "#b79a85"
                        }}
                      ></div>
                      <div
                        class="palette-bar bar3"
                        style={{
                          opacity: 0.9549,
                          visibility: "inherit",
                          backgroundColor: "#e8d5bb"
                        }}
                      ></div>
                      <div
                        class="palette-bar bar4"
                        style={{
                          opacity: 0.521,
                          visibility: "inherit",
                          backgroundColor: "#f2e6dd"
                        }}
                      ></div>
                      <div
                        class="palette-bar bar5"
                        style={{
                          opacity: 0.521,
                          visibility: "inherit",
                          backgroundColor: "#9d8672"
                        }}
                      ></div>
                      <div
                        class="palette-bar bar6"
                        style={{
                          opacity: 0.521,
                          visibility: "inherit",
                          backgroundColor: "#d0bdab"
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="color-grid">
              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#bda78e" }}>
                  <div className="color-chip__code">
                    <h4>GP-X050</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/baking-color.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">BAKING COLOR</div>
                {/* <div className="color-chip__desc">لون خبزي</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#dabb88" }}>
                  <div className="color-chip__code">
                    <h4>GP-J097</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/honey-color.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">HONEY COLOR</div>
                {/* <div className="color-chip__desc">لون العسل</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#c2a289" }}>
                  <div className="color-chip__code">
                    <h4>GP-H113</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/cream-color.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">CREAM COLOR</div>
                {/* <div className="color-chip__desc">لون كريمة</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#a0897b" }}>
                  <div className="color-chip__code">
                    <h4>GP-X037</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/the-color-feels-warm.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">FEEL-WARM COLOR</div>
                {/* <div className="color-chip__desc">لون احساس الدفئ</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#a36d46" }}>
                  <div className="color-chip__code">
                    <h4>GP-J113</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/autumn-color.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">AUTUMN COLOR</div>
                {/* <div className="color-chip__desc">لون الخريف</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#9a5743" }}>
                  <div className="color-chip__code">
                    <h4>GP-M129</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/marble-color.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">MARBLE COLOR</div>
                {/* <div className="color-chip__desc">اللون الرخامي</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#cc9d57" }}>
                  <div className="color-chip__code">
                    <h4>GP-M079</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/upscale-gold-color.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">UPSCALE GOLD COLOR</div>
                {/* <div className="color-chip__desc">لون الذهب الراقي</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#8c8881" }}>
                  <div className="color-chip__code">
                    <h4>GP-K157</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/color-elegant-gray.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">ELEGANT GRAY COLOR</div>
                {/* <div className="color-chip__desc">لون اناقة الرمادي</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#7f5a6d" }}>
                  <div className="color-chip__code">
                    <h4>GP-N141</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/shine-color.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">SHINE COLOR</div>
                {/* <div className="color-chip__desc">لون التألق</div> */}
              </div>
            </div>

          </div>
        </Container>



        <Container>
          <div className="page-content">
            <div class="section-inner">
              <div class="inner-wide streamlined tetris">
                <div class="tetris-column tetris-right primary">
                  <div class="tetris-text">
                    <h1
                      class="title animate-left"
                      style={{
                        fontWeight: 'normal',
                        marginBottom: '7px',
                        opacity: 1,
                        visibility: "inherit",
                        transform: "translate(0px, 0px)"
                      }}
                    >Harmony <span>Shades</span></h1>
                    <div
                      class="palette-bars animate-left"
                      style={{
                        opacity: 1,
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                        backgroundColor: "#faf7f0",
                      }}
                    >
                      <div
                        class="palette-bar bar1"
                        style={{
                          opacity: 0.3881,
                          visibility: "inherit",
                          backgroundColor: "#d6e3e3"
                        }}
                      ></div>
                      <div
                        class="palette-bar bar2"
                        style={{
                          opacity: 0.7519,
                          visibility: "inherit",
                          backgroundColor: "#d3d8c0"
                        }}
                      ></div>
                      <div
                        class="palette-bar bar3"
                        style={{
                          opacity: 0.9549,
                          visibility: "inherit",
                          backgroundColor: "#bfd0c5"
                        }}
                      ></div>
                      <div
                        class="palette-bar bar4"
                        style={{
                          opacity: 0.521,
                          visibility: "inherit",
                          backgroundColor: "#fedce3"
                        }}
                      ></div>
                      <div
                        class="palette-bar bar5"
                        style={{
                          opacity: 0.521,
                          visibility: "inherit",
                          backgroundColor: "#e3d2cb"
                        }}
                      ></div>
                      <div
                        class="palette-bar bar6"
                        style={{
                          opacity: 0.521,
                          visibility: "inherit",
                          backgroundColor: "#faf7f0"
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="color-grid">
              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#d6e3e3" }}>
                  <div className="color-chip__code">
                    <h4>GP-F016</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/malibu-blue-color.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">MALIBU BLUE COLOR</div>
                {/* <div className="color-chip__desc">الأخضر المنعش</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#d3d8c0" }}>
                  <div className="color-chip__code">
                    <h4>GP-F058</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/lemonade-color.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">LEMONADE COLOR</div>
                {/* <div className="color-chip__desc">الأزرق الحنون</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#fedce3" }}>
                  <div className="color-chip__code">
                    <h4>GP-V141</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/baby-pink-color.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">BABY PINK COLOR</div>
                {/* <div className="color-chip__desc">الأزرق المميز</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#bfd0c5" }}>
                  <div className="color-chip__code">
                    <h4>GP-F031</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/mint-color.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">MINT COLOR</div>
                {/* <div className="color-chip__desc">التفاح اللذيذ</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#b0a69a" }}>
                  <div className="color-chip__code">
                    <h4>GP-V113</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/sand-color.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">SAND COLOR</div>
                {/* <div className="color-chip__desc">الأزرق الهادئ</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#d1cec5" }}>
                  <div className="color-chip__code">
                    <h4>GP-V099</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/early-sunset-color.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">EARLY SUNSET COLOR</div>
                {/* <div className="color-chip__desc">الأزرق المخضر</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#faf7f0" }}>
                  <div className="color-chip__code">
                    <h4>GP-F167</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/pearl-color.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">PEARL COLOR</div>
                {/* <div className="color-chip__desc">الزيتي الدافئ</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#cfc8c3" }}>
                  <div className="color-chip__code">
                    <h4>GP-G109</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/partisle-beige-color.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">PARTISLE BEIGE COLOR</div>
                {/* <div className="color-chip__desc">الرصاصي الملوكي</div> */}
              </div>

              <div className="color-chip">
                <div className="color-chip__inner" style={{ backgroundColor: "#e3d2cb" }}>
                  <div className="color-chip__code">
                    <h4>GP-J120</h4>
                  </div>
                  <div className="color-chip__detail" style={{ backgroundImage: "url(/assets/images/colors/latte-color.jpg)" }}>
                    {/* <img src="/assets/images/colors/shadow.png" alt="" class="shadow" /> */}
                    <div className="shadow"></div>
                  </div>
                </div>
                <div className="color-chip__title">LATTE COLOR</div>
                {/* <div className="color-chip__desc">الرصاصي الفحمي</div> */}
              </div>

            </div>
          </div>

          {/* banners */}
          <div class="section-inner mt-2">
            <div class="inner-wide streamlined tetris">
              <div class="tetris-column tetris-right primary">
                <div class="titletetris-text">
                  <h1
                    class="title animate-left"
                    style={{
                      fontWeight: 'normal',
                      marginBottom: '7px',
                      opacity: 1,
                      visibility: "inherit",
                      transform: "translate(0px, 0px)"
                    }}
                  >Trending <span>Colors</span></h1>
                  <div
                    class="palette-bars animate-left"
                    style={{
                      opacity: 1,
                      visibility: "inherit",
                      transform: "translate(0px, 0px)",
                      backgroundColor: "#faf7f0",
                    }}
                  >
                    <div
                      class="palette-bar bar1"
                      style={{
                        opacity: 0.3881,
                        visibility: "inherit",
                        backgroundColor: "#d6e3e3"
                      }}
                    ></div>
                    <div
                      class="palette-bar bar2"
                      style={{
                        opacity: 0.7519,
                        visibility: "inherit",
                        backgroundColor: "#d3d8c0"
                      }}
                    ></div>
                    <div
                      class="palette-bar bar3"
                      style={{
                        opacity: 0.9549,
                        visibility: "inherit",
                        backgroundColor: "#bfd0c5"
                      }}
                    ></div>
                    <div
                      class="palette-bar bar4"
                      style={{
                        opacity: 0.521,
                        visibility: "inherit",
                        backgroundColor: "#fedce3"
                      }}
                    ></div>
                    <div
                      class="palette-bar bar5"
                      style={{
                        opacity: 0.521,
                        visibility: "inherit",
                        backgroundColor: "#e3d2cb"
                      }}
                    ></div>
                    <div
                      class="palette-bar bar6"
                      style={{
                        opacity: 0.521,
                        visibility: "inherit",
                        backgroundColor: "#faf7f0"
                      }}
                    ></div>
                  </div>
                  <h3
                    class="title animate-left"
                    style={{
                      fontWeight: 'normal',
                      marginBottom: '7px',
                      opacity: 1,
                      visibility: "inherit",
                      transform: "translate(0px, 0px)"
                    }}
                  >

                  </h3>
                </div>
                <img
                  class="animate-left mt-5"
                  src="/assets/images/colors/page-bottom.jpg"
                  alt="A cropped view of a table and chair. On the table is a cup of coffee, plate of food and potted plant. The scene is very casual."
                  style={{
                    opacity: 1,
                    visibility: "inherit",
                    transform: "translate(0px, 0px)",
                  }}
                />
              </div>
            </div>
          </div>
        </Container>


      </div >
    </LayoutTwo >
  );
};

export default About;
