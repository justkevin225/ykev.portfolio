import styled from "@emotion/styled";
import React, { useEffect } from "react";

const Form = styled.form`
  position: relative;
  /* left: 30px;
  right: 30px; */
  border: solid red 1px;
  width: 450px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .d-Klex {
    display: flex;
    align-items: center;
  }

  .placeholdersContainer {
    font-size: 0.85rem;
    z-index: 2;
    span {
      position: absolute;
      top: 34.5px;
      left: 16.5px;
      transition: all 0.2s ease-in-out;
      background-color: none;
      color: #212121;
      border-radius: 3.5px;
      margin: 0 3px;
      width: 100%;
      label {
        cursor: text;
      }
    }
    .movePlaceholder {
      position: relative;
      left: 0;
      top: 0;
      color: #fff;
      background-color: #212121;
      padding: 3px 13px;
      font-size: 0.7rem;
    }
  }
`;

const InputContainer = styled.div`
  position: relative;
  border-bottom: solid gray 1.5px;
  display: flex;
  align-items: center;
  padding: 3px 0%;

  input,
  textarea {
    position: relative;
    border: none;
    outline: none;
    background: none;
    margin-left: 6px;
  }
`;

const Admin = () => {
  useEffect(() => {
    const name: any = document.querySelector(".name");
    const nameInput: any = document.querySelector(".nameInput");
    const email: any = document.querySelector(".email");
    const emailInput: any = document.querySelector(".emailInput");
    const message: any = document.querySelector(".message");
    const messageInput: any = document.querySelector(".messageInput");

    name.addEventListener("click", () => {
      name.classList.add("movePlaceholder");
      email.classList.remove("d-none");
      email.classList.add("d-inline");

      nameInput.classList.add("d-Klex");
      nameInput.classList.remove("d-none");

      emailInput.classList.remove("d-Klex");
      messageInput.classList.remove("d-Klex");

      emailInput.classList.add("d-none");
      messageInput.classList.add("d-none");
    });

    email.addEventListener("click", () => {
      email.classList.add("movePlaceholder");
      message.classList.remove("d-none");
      message.classList.add("d-inline");

      emailInput.classList.add("d-Klex");
      emailInput.classList.remove("d-none");

      nameInput.classList.remove("d-Klex");
      messageInput.classList.remove("d-Klex");

      nameInput.classList.add("d-none");
      messageInput.classList.add("d-none");
    });

    message.addEventListener("click", () => {
      message.classList.add("movePlaceholder");

      messageInput.classList.add("d-Klex");
      messageInput.classList.remove("d-none");

      nameInput.classList.remove("d-Klex");
      emailInput.classList.remove("d-Klex");

      nameInput.classList.add("d-none");
      emailInput.classList.add("d-none");
    });
  }, []);

  return (
    <>
      <div>
        <Form>
          <div className="placeholdersContainer">
            <span className="name">
              <label htmlFor="name">Entrez votre nom...</label>
            </span>
            <span className="email d-none">
              <label htmlFor="email">Entrez votre adresse...</label>
            </span>
            <span className="message d-none">
              <label htmlFor="message">Votre message...</label>
            </span>
          </div>
          <InputContainer className="nameInput">
            <i className="fa-solid fa-user"></i>
            <input id="name" type="text" className="w-100" />
          </InputContainer>
          <InputContainer className="emailInput d-none">
            <i className="fa-solid fa-message"></i>
            <input id="email" type="text" className="w-100" />
          </InputContainer>
          <InputContainer className="messageInput d-none">
            <i className="fa-solid fa-robot"></i>
            <textarea id="message" className="w-100"></textarea>
          </InputContainer>
        </Form>
      </div>
      <button>Suivant</button>
    </>
  );
};

export default Admin;
