import { Glow, GlowCapture } from "@codaworks/react-glow";
import Titl from "react-parallax-tilt";
import Container from "../ui/Container";
import StyledHome from "../ui/StyledHome";
import Content from "../ui/Content";
import rpdc from "../assets/RPDC.png";
export default function Landing() {
  return (
    <GlowCapture>
      <Titl
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={900}
        scale={1}
        transitionSpeed={2000}
      >
        <Glow color="blue">
          <Container>
            <StyledHome className="...  from-indigo-500/30 from-10% via-sky-500/30 via-30% to-emerald-500/30 to-90%  glow:bg-gradient-to-r">
              <Content>
                <img src={rpdc} alt="logo" />
                <h2>RESEARCH, DEVELOPMENT AND EXTENSION CENTER</h2>
                <h4>ONLINE CLIENT SATISFACTION SURVEY</h4>
                <p>
                  Thank you for taking the time to complete this evaluation.
                  Your feedback is valuable to us and will help us improve our
                  services. We appreciate your effort in answering the
                  questions. Please do not hesitate to reach out if you have any
                  further comments or suggestions. Thank you once again!
                </p>
              </Content>
            </StyledHome>
          </Container>
        </Glow>
      </Titl>
    </GlowCapture>
  );
}
