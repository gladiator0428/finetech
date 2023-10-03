import styled from "styled-components";
export const MainContainer = styled.div`
  position: relative;
`;
export const MainWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  img {
    width: 7em;
    object-fit: contain;
  }
  p {
    justify-content: center;
    margin-top: 1em;
    color: rgb(134, 134, 134);
    margin-bottom: 12em;
  }

  button {
    background-color: transparent;
    color: rgb(134, 134, 134);
    padding: 16px 32px;
    font-size: 16px;
    border: none;
    font-family: "Hanken Grotesk Medium";
    margin-top: 1em;
  }
`;
export const LogoTextView = styled.div`
  margin-top: 1rem;
  font-size: 1.5em;
  text-transform: lowercase;
  span {
    color: black;
  }
  span:first-child {
    color: rgb(0, 186, 250);
  }
`;
export const SignContainer = styled.div`
  background-color: rgb(0, 186, 250);
  cursor: pointer;
  border: none;
  border-radius: 32px;
  color: white;
  padding: 16px 32px;
  font-size: 16px;
  font-family: "Hanken Grotesk Medium";
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 12px;
  @media screen and (max-width: 480px) {
    max-width: 240px;
  }
  max-width: 320px;
  width: 100%;
`;
export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  backdrop-filter: blur(3px);
`;
export const ModalWrapper = styled.div`
  z-index: 9999999999;
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  width: 360px;
  height: auto;
  box-shadow: rgba(55, 65, 81, 0.15) 0px 8px 36px;
  border-radius: 2rem;
  padding: 0px 16px;
  h5 {
    line-height: 20px;
    height: 20px;
    font-size: 13px;
    width: 100%;
    font-weight: 100;
    margin: 1rem 0 0 0;
    text-align: start;
  }
  h6 {
    font-size: 13px;
    line-height: 20px;
    font-weight: 100;
    margin: 1rem 0;
  }
`;
export const HeaderView = styled.div`
  position: relative;
  background-color: hsl(0, 0%, 57%);
  div {
    cursor: pointer;
    position: absolute;
    right: 0;
    width: 24px;
    height: 24px;
    background-color: hsl(0, 0%, 96%);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 1rem;
  }
`;
export const PhoneView = styled.div`
  border: 1px solid hsl(0, 0%, 92%);
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  border-radius: 0.5rem;
  margin-top: 3.5rem;
  svg {
    margin: 0 0.5rem;
  }
  button {
    cursor: pointer;
    background-color: hsl(0, 0%, 96%);
    color: hsl(0, 0%, 57%);
    /* cursor: not-allowed; */
    height: 100%;
    border: none;
    padding-left: 15px;
    padding-right: 15px;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  input {
    background-color: transparent;
    height: 44px;
    border: none;
    width: 100%;
    outline: none;
  }
`;
export const LineView = styled.div`
  display: flex;
  align-items: center;
  hr {
    width: 50%;
    height: 0px;
    border-top: 1px solid var(--privy-color-foreground-4);
    margin: 0px 8px;
  }
`;
export const SocialView = styled.div`
  button {
    width: 49%;
    height: 44px;
    border: 1px solid hsl(0deg 0% 92.16%) !important;
    background-color: transparent;
    border-radius: 0.5rem;
  }
  button:first-child {
    margin-right: 0.25rem;
  }
`;
export const FooterView = styled.div`
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 0.1rem;
  }
  span {
    font-size: 13px;
  }
`;
