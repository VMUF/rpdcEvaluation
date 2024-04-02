import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: cneter;
  padding: 2rem;
  text-align: center;
  transition: all 0.5s;

  & h2 {
    font-size: 1.4rem;
    font-weight: 900;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  & h4 {
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  & p {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  & img {
    align-self: center;
    width: 10.3rem;
    height: 10.3rem;
  }

  & p {
    text-align: justify;
  }
`;

export default Content;
