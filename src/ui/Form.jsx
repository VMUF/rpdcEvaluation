import styled from "styled-components";

export const ContainerBox = styled.div`
  max-width: 60rem;
  max-height: 25rem;
  box-shadow: 2rem 2rem 5rem rgba(0, 0, 0, 0.5);
  border-radius: var(--border-radius-lg);
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1rem 1.8rem;

  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(0.5rem);

  & h3 {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    font-size: 1.4rem;
    text-transform: uppercase;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 5rem 0;
  z-index: 900;
`;

export const DivQuestion = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  z-index: 999;
`;
export const DivCenter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1000;

  & img {
    align-self: center;
    justify-self: center;
    opacity: 0.5;
    max-width: 170%;
    @media (max-width: 56.75em) {
      max-width: 100%;
    }
  }
`;

export const MultiInputs = styled.input.attrs({ type: "radio" })`
  cursor: pointer;
  display: none;
  position: absolute;
`;

export const Labels = styled.label`
  display: flex;
  align-items: center;

  &::before {
    content: "";
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 1.5rem;
    border-radius: 50%;

    border: 3px solid var(--color-blue-700);
  }
`;

export const Buttons = styled.button`
  background-color: rgba(0, 0, 0);
  color: white;
  width: 10rem;
  border: none;
  border-radius: var(--border-radius-md);
  padding: 0.6rem;
  align-self: end;
  font-size: 1.4rem;
`;

export const DarkButtons = styled.button`
  background-color: var(--color-blue-700);
  color: #ffffff;
  width: 10rem;
  border: none;
  border-radius: var(--border-radius-md);
  padding: 0.6rem;
  align-self: end;
  font-size: 1.4rem;
`;

export const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 8rem;
  color: black;
`;

export default function FormStyling() {
  return;
}
