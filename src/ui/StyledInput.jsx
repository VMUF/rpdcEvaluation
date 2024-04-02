import styled from "styled-components";

export const StyledInputs = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 900;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
  display: none;
  position: absolute;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  &::before {
    content: "";
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.5rem;

    border: 1px solid red;
  }
`;

export default function StyledInput() {
  return;
}
