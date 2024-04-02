import styled from "styled-components";

export const ButtonDark = styled.div`
  display: flex;
  position: fixed;
  gap: 0;
  top: 0;
  right: 0;
  z-index: 999;
  & button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;

    color: white;
    & p {
      display: flex;
      align-items: center;
      font-size: 2rem;

      & span {
        font-size: 1rem;
      }
    }
  }
`;

export default function BtnDark() {
  return;
}
