import styled from "styled-components";

const StyledHome = styled.div`
  max-width: 80rem;
  max-height: 40rem;
  margin: 10rem auto;
  box-shadow: 2rem 2rem 5rem rgba(0, 0, 0, 0.5);
  border-radius: var(--border-radius-lg);
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(0.5rem);
`;

export default StyledHome;
