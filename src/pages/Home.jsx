import { useState } from "react";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import { Checkbox, Label, StyledInputs } from "../ui/StyledInput";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import rpdc from "../assets/RPDC.png";

import Container from "../ui/Container";
import StyledHome from "../ui/StyledHome";
import Content from "../ui/Content";
import Button from "../ui/Button";
import styled from "styled-components";
import useDarkMode from "../hook/useDarkMode";

const StyledEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function Home() {
  const { dark } = useDarkMode();
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);

  return (
    <>
      <GlowCapture>
        <Tilt
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
                    <strong>DATA PRIVACY NOTICE:</strong> I hereby authorized
                    the VIRGEN MILAGROSA UNIVERSITY FOUNDATION to collect and
                    process the data indicated herein for the purpose of
                    evaluation of this Activity. I understand that my personal
                    information is protected by RA 10173 (Data Privacy Act of
                    2012), and that my record will be stored for a maximum of 3
                    years.
                  </p>

                  <StyledInputs>
                    <Checkbox
                      id="id"
                      value={check}
                      onChange={() => setCheck((data) => !data)}
                    />
                    <Label htmlFor="id">I Agree</Label>
                  </StyledInputs>
                  {check && (
                    <StyledEnd>
                      {dark ? (
                        <Button
                          onClick={() => navigate("/rpdcEvaluation/Evalform")}
                        >
                          Proceed
                        </Button>
                      ) : (
                        <Button
                          style={{ color: "black" }}
                          onClick={() => navigate("/rpdcEvaluation/Evalform")}
                        >
                          Proceed
                        </Button>
                      )}
                    </StyledEnd>
                  )}
                </Content>
              </StyledHome>
            </Container>
          </Glow>
        </Tilt>
      </GlowCapture>
    </>
  );
}
