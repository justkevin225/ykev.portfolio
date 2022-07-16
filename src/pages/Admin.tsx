import styled from "@emotion/styled";
import React, { useEffect } from "react";

const Form = styled.form`
  position: relative;
  width: 450px;
  height: 61px;
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
      top: 34px;
      left: 16.5px;
      transition: all 0.2s ease-in-out;
      background-color: none;
      color: #212121;
      border-radius: 3.5px;
      margin: 0 3px;
      width: 100%;
      cursor: text;
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
    const nameInputField: any = document.querySelector(".nameInput input");
    const email: any = document.querySelector(".email");
    const emailInput: any = document.querySelector(".emailInput");
    const emailInputField: any = document.querySelector(".emailInput input");
    const message: any = document.querySelector(".message");
    const messageInput: any = document.querySelector(".messageInput");
    const formBtnNameToEmail: any = document.querySelector(
      "#formBtnNameToEmail"
    );
    const formBtnEmailToMessage: any = document.querySelector(
      "#formBtnEmailToMessage"
    );

    name.addEventListener("click", () => {
      name.classList.add("movePlaceholder");

      // afficher name input
      nameInput.classList.add("d-Klex");
      nameInput.classList.remove("d-none");

      // retirer message input
      messageInput.classList.remove("d-Klex");
      messageInput.classList.add("d-none");

      // afficher message input
      emailInput.classList.remove("d-Klex");
      emailInput.classList.add("d-none");

      // retirer label email
      email.classList.add("d-none");
      email.classList.remove("d-inline");

      // ajouter btn name  to email
      formBtnNameToEmail.classList.add("d-inline-block");
      formBtnNameToEmail.classList.remove("d-none");

      // retirer btn email  to message
      formBtnEmailToMessage.classList.remove("d-inline-block");
      formBtnEmailToMessage.classList.add("d-none");
    });

    formBtnEmailToMessage.addEventListener("click", () => {
      if (emailInputField.value !== "") {
        // afficher message input
        messageInput.classList.add("d-Klex");
        messageInput.classList.remove("d-none");

        // retirer name input
        nameInput.classList.remove("d-Klex");
        nameInput.classList.add("d-none");

        // retirer message input
        emailInput.classList.remove("d-Klex");
        emailInput.classList.add("d-none");

        // On place la valeur de email dans le label
        email.textContent = emailInputField.value;

        // retirer btn email  to message
        formBtnEmailToMessage.classList.remove("d-inline-block");
        formBtnEmailToMessage.classList.add("d-none");

        // Ajouter le bouton denvoi du form
      }
    });

    formBtnNameToEmail.addEventListener("click", () => {
      if (nameInputField.value !== "") {
        // retirer label email
        email.classList.remove("d-none");
        email.classList.add("d-inline");

        // retirer name input
        nameInput.classList.remove("d-Klex");
        nameInput.classList.add("d-none");

        // retirer message input
        messageInput.classList.remove("d-Klex");
        messageInput.classList.add("d-none");

        // afficher message input
        emailInput.classList.add("d-Klex");
        emailInput.classList.remove("d-none");

        // On place la valeur de name dans le label
        name.textContent = nameInputField.value;

        // retirer btn name  to email
        formBtnNameToEmail.classList.remove("d-inline-block");
        formBtnNameToEmail.classList.add("d-none");

        // ajouter btn email  to message
        formBtnEmailToMessage.classList.add("d-inline-block");
        formBtnEmailToMessage.classList.remove("d-none");
      }
    });

    email.addEventListener("click", () => {
      email.classList.add("movePlaceholder");
      // afficher message input
      emailInput.classList.add("d-Klex");
      emailInput.classList.remove("d-none");

      // retirer name input
      nameInput.classList.remove("d-Klex");
      nameInput.classList.add("d-none");

      // retirer message input
      messageInput.classList.remove("d-Klex");
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
              <label htmlFor="name">Qui êtes vous ?</label>
            </span>
            <span className="email d-none">
              <label htmlFor="email">Entrez votre adresse svp...</label>
            </span>
            <span className="message d-none">
              <label htmlFor="message">Votre message :)</label>
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
        <button className="btn btn-secondary my-3" id="formBtnNameToEmail">
          Name to Email
        </button>
        <button
          className="btn btn-secondary my-3 d-none"
          id="formBtnEmailToMessage"
        >
          Email to Message
        </button>
      </div>
    </>
  );
};

export default Admin;
