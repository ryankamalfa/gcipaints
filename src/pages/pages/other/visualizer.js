import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne, LayoutTwo } from "../../../components/Layout";
import Link from "next/link";
import { useRouter } from 'next/router'
import Visualizer from "../../../components/Visualizer";
import { ExteriorVisualizer } from "../../../components/Visualizer";
import { useEffect } from "react";
const VisualizerPage = () => {
    const [modalStatus, isOpen] = useState(false);
    const router = useRouter()
    const room = router.query.room || "bedroom";
    const exterior = "exterior";
    // const exterior = router.query.exterior || "exterior";

    // const renderLivingroom = () => (
    //     <Visualizer
    //         currentRoom={room}
    //         wall1={"/assets/images/colors/visualizer/living-room/wall1.png"}
    //         wall2={"/assets/images/colors/visualizer/living-room/wall2.png"}
    //         highlights={"/assets/images/colors/visualizer/living-room/highlights.png"}
    //         base={"/assets/images/colors/visualizer/living-room/base.jpg"}
    //         left={"38%"}
    //         right={"62%"}
    //     />
    // )

    const renderLivingroom = () => (
        <Visualizer
            currentRoom={room}
            wall1={"/assets/images/colors/visualizer/living-room/wall1.png"}
            wall2={"/assets/images/colors/visualizer/living-room/wall2.png"}
            wall3={"/assets/images/colors/visualizer/living-room/wall3.png"}
            highlights={"/assets/images/colors/visualizer/living-room/highlights.png"}
            base={"/assets/images/colors/visualizer/living-room/base.png"}
            left={"10%"}
            center={"40%"}
            right={"50%"}
        />
    )

    const renderKitchen = () => (
        <Visualizer
            currentRoom={room}
            wall1={"/assets/images/colors/visualizer/kitchen/wall2.png"}
            wall2={"/assets/images/colors/visualizer/kitchen/wall1.png"}
            wall3={"/assets/images/colors/visualizer/kitchen/wall1.png"}
            highlights={"/assets/images/colors/visualizer/kitchen/highlights.png"}
            base={"/assets/images/colors/visualizer/kitchen/base.png"}
            left={"50%"}
            right={"30%"}
            center={"20%"}
        />
    )

    // const renderBedroom = () => (
    //     <Visualizer
    //         currentRoom={room}
    //         wall1={"/assets/images/colors/visualizer/wall1.png"}
    //         wall2={"/assets/images/colors/visualizer/wall2.png"}
    //         highlights={"/assets/images/colors/visualizer/highlights.png"}
    //         base={"/assets/images/colors/visualizer/base.jpg"}
    //         left={"31.5%"}
    //         right={"68.5%"}
    //     />
    // )

    const renderBedroom = () => (
        <Visualizer
            currentRoom={room}
            wall1={"/assets/images/colors/visualizer/bedroom-temp/wall2.png"}
            wall2={"/assets/images/colors/visualizer/bedroom-temp/wall1.png"}
            // highlights={"/assets/images/colors/visualizer/highlights.png"}
            highlights={"/assets/images/colors/visualizer/bedroom-temp/highlights.png"}
            base={"/assets/images/colors/visualizer/bedroom-temp/base.png"}
            left={"31.5%"}
            right={"68.5%"}
        />
    )

    const renderKidsRoom = () => (
        <Visualizer
            currentRoom={room}
            wall1={"/assets/images/colors/visualizer/kids-room/wall.png"}
            wall2={"/assets/images/colors/visualizer/kids-room/wall.png"}
            highlights={"/assets/images/colors/visualizer/kids-room/highlights.png"}
            base={"/assets/images/colors/visualizer/kids-room/base.png"}
            left={"0%"}
            // right={"1%"}
            // center={'1%'}
            
        />
    )

    const renderExteriorView = () => (
        <ExteriorVisualizer
            exteriorCurrentRoom={exterior}
            exteriorWall1={"/assets/images/colors/visualizer/exterior/wall.png"}
            exteriorWall2={"/assets/images/colors/visualizer/exterior/wall.png"}
            exteriorHighlights={"/assets/images/colors/visualizer/exterior/highlights.png"}
            exteriorBase={"/assets/images/colors/visualizer/exterior/base.png"}
            left={"100%"}
            right={"50%"}
            // right={"1%"}
            // center={'1%'}
            
        />
    )

    return (
        <LayoutOne>
            <Container className="wide mw-100 p-0">
                    <div className="page-content">
                        {room === "bedroom" && renderBedroom()}
                        {room === "living-room" && renderLivingroom()}
                        {room === "kitchen" && renderKitchen()}
                        {room === "kids-room" && renderKidsRoom()}
                    </div>
                    {/* <div className="page-content">
                        {exterior === "exterior" && renderExteriorView()}
                    </div> */}
            </Container>
        </LayoutOne>
    );
};

export default VisualizerPage;
