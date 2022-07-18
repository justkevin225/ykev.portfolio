import React, { useEffect, useState, useRef, forwardRef } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "@material-ui/core/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import emailjs from "emailjs-com";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";

const ButtonK = styled(Button)`
  background-color: ${(props) => props.theme.gray} !important;
  text-transform: none !important;
  color: ${(props) => props.theme.white} !important;
  font-family: "Maven Pro" !important;
  z-index: 10 !important;
  margin: 0 auto;
`;
const ButtonS = styled(LoadingButton)`
  background-color: ${(props) => props.theme.gray} !important;
  text-transform: none !important;
  color: ${(props) => props.theme.white} !important;
  font-family: "Maven Pro" !important;
  z-index: 100 !important;
  margin: 0 auto;
`;

const Form = styled.form`
  position: relative;
  width: 70%;
  height: 61px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-between;
  .Typewriter {
    display: inline-block !important;
    span {
      display: inline;
    }
  }
  .d-Klex {
    display: flex;
    align-items: center;
  }

  .placeholdersContainer {
    font-size: 0.85rem;
    z-index: 2;
    & > span {
      position: absolute;
      top: 30px;
      left: 16.5px;
      transition: all 0.2s ease-in-out;
      background-color: transparent;
      color: #212121;
      border-radius: 3.5px;
      margin: 0 3px;
      width: 97%;
      height: 30px;

      justify-content: center;
      cursor: text;
      label {
        cursor: text;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }
    }
    span:nth-of-type(3) {
      height: 50px;
      top: 23px;
      left: 22px;
    }
    .movePlaceholder {
      position: relative;
      left: 0 !important;
      top: 0 !important;
      color: #fff;
      display: inline;
      background-color: #4d4c4c;
      padding: 3px 13px;
      font-size: 0.65rem;
      &:hover {
        background-color: #1a1a1a;
      }
      cursor: pointer;
      label {
        cursor: pointer;
        display: inline;
      }
    }
  }
`;

const InputContainer = styled.div.attrs((props) => props)`
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.gray};
  display: flex;
  align-items: center;
  padding: 3px 0%;
  &:after {
    content: "";
    position: absolute;
    bottom: -1px;
    height: 1.3px;
    width: 100%;
    box-shadow: 0 0 3px 0px ${(props) => props.theme.gray};
    background: ${(props) => props.theme.gray};
    z-index: 2;
    transform-origin: center;
    transform: scaleX(0);
    animation: ${(props) =>
      props.focus && "animFocus ease-in-out 0.3s forwards"};
    @keyframes animFocus {
      0% {
        transform: scaleX(0);
      }
      100% {
        transform: scaleX(1);
      }
    }
  }

  input,
  textarea {
    position: relative;
    border: none;
    outline: none;
    background: none;
    margin-left: 6px;
    resize: none;
  }
`;

const FormContainer = styled.div`
  #Snack {
    position: absolute !important;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
  }
`;

const FormContact = () => {
  const formK = useRef();
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailTrigger, setEmailTrigger] = useState(false);
  const [messageTrigger, setMessageTrigger] = useState(false);
  const [focusNameTrigger, setfocusNameTrigger] = useState(false);
  const [focusEmailTrigger, setfocusEmailTrigger] = useState(false);
  const [focusMessageTrigger, setfocusMessageTrigger] = useState(false);

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_3l9e0lh",
        "template_8k9cm3t",
        formK.current,
        "08NpTkuFM9KM8__vV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const nameInputField = document.querySelector(".nameInput input");
    const emailInputField = document.querySelector(".emailInput input");
    const messageInputField = document.querySelector(".messageInput textarea");

    // vider tous les inputs
    nameInputField.value = "";
    emailInputField.value = "";
    messageInputField.value = "";
  });

  useEffect(() => {
    const name = document.querySelector(".name");
    const nameInput = document.querySelector(".nameInput");
    const nameInputField = document.querySelector(".nameInput input");
    const email = document.querySelector(".email");
    const emailInput = document.querySelector(".emailInput");
    const emailInputField = document.querySelector(".emailInput input");
    const message = document.querySelector(".message");
    const messageInput = document.querySelector(".messageInput");
    const FormK = document.querySelector("#FormK");
    const messageInputField = document.querySelector(".messageInput textarea");
    const formBtnNameToEmail = document.querySelector("#formBtnNameToEmail");
    const formBtnEmailToMessage = document.querySelector(
      "#formBtnEmailToMessage"
    );
    const formBtnSubmit = document.querySelector("#formBtnSubmit");

    // Evenements de focus et blur
    nameInputField.addEventListener("focus", () => {
      setfocusNameTrigger(true);
    });
    emailInputField.addEventListener("focus", () => {
      setfocusEmailTrigger(true);
      // afficher email input
      emailInput.classList.add("d-Klex");
      emailInput.classList.remove("d-none");
    });
    messageInputField.addEventListener("focus", () => {
      setfocusMessageTrigger(true);
      // afficher message input
      messageInput.classList.add("d-Klex");
      messageInput.classList.remove("d-none");
    });

    // Retirer les focus
    nameInputField.addEventListener("blur", () => {
      setfocusNameTrigger(false);
    });
    emailInputField.addEventListener("blur", () => {
      setfocusEmailTrigger(false);

      // Patch d'un bug
      emailInput.classList.remove("d-none");
      emailInput.classList.remove("d-none");
    });
    messageInputField.addEventListener("blur", () => {
      setfocusMessageTrigger(false);

      // Patch d'un bug
      messageInput.classList.remove("d-none");
      messageInput.classList.remove("d-none");
    });

    formBtnNameToEmail.addEventListener("click", () => {
      // On place le label name en haut
      name.classList.add("movePlaceholder");
      if (/^[a-zA-Z ]{3,15}$/.test(nameInputField.value)) {
        name.classList.remove("bg-danger");
        // On active animation du label email
        setEmailTrigger(true);

        // retirer label email
        email.classList.remove("d-none");
        email.classList.add("d-inline");

        // retirer name input
        nameInput.classList.remove("d-Klex");
        nameInput.classList.add("d-none");

        // retirer message input
        messageInput.classList.remove("d-Klex");
        messageInput.classList.add("d-none");

        // afficher email input
        emailInput.classList.add("d-Klex");
        emailInput.classList.remove("d-none");

        // On place la valeur de name dans le label
        name.innerHTML = `<i class='fa-duotone fa-user-hair'></i> <span class="mx-1">${nameInputField.value}</span>`;

        // retirer btn name  to email
        formBtnNameToEmail.classList.remove("d-inline-block");
        formBtnNameToEmail.classList.add("d-none");

        // ajouter btn email  to message
        formBtnEmailToMessage.classList.add("d-inline-block");
        formBtnEmailToMessage.classList.remove("d-none");
      } else {
        // En cas d'erreur
        name.innerHTML = "Donnez un nom correcte (3 - 15 caractères)...";
        name.classList.add("bg-danger");
      }
    });
    formBtnEmailToMessage.addEventListener("click", () => {
      // On place le label "Email" au top
      email.classList.add("movePlaceholder");
      if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(emailInputField.value)) {
        email.classList.remove("bg-danger");
        // On active animation du label email
        setMessageTrigger(true);

        // afficher message input
        messageInput.classList.add("d-Klex");
        messageInput.classList.remove("d-none");

        // afficher label message
        message.classList.remove("d-none");
        message.classList.add("d-inline");

        // retirer name input
        nameInput.classList.remove("d-Klex");
        nameInput.classList.add("d-none");

        // retirer message input
        emailInput.classList.remove("d-Klex");
        emailInput.classList.add("d-none");

        // On place la valeur de email dans le label
        email.innerHTML = `<i class='fa-duotone fa-at'></i> <span class="mx-1">${emailInputField.value}</span>`;

        // retirer btn email  to message
        formBtnEmailToMessage.classList.remove("d-inline-block");
        formBtnEmailToMessage.classList.add("d-none");

        // Ajouter le bouton denvoi du form
        formBtnSubmit.classList.add("d-inline-block");
        formBtnSubmit.classList.remove("d-none");
      } else {
        // En cas d'erreur
        email.innerHTML = "Format de l'adresse incorrecte...";
        email.classList.add("bg-danger");
      }
    });
    formBtnSubmit.addEventListener("click", () => {
      message.classList.add("movePlaceholder");
      // Patch d"un bug
      if (/^[A-Za-z]$/.test(messageInputField.value)) {
        setIsLoading(true);
        formBtnSubmit.classList.remove("d-none");
        message.innerHTML = "Merci de votre attention :)";
        message.classList.remove("bg-danger");
        setTimeout(() => {
          alert("OK");
          // On reinitialise le formulaire
          FormK.reset();
          name.classList.remove("movePlaceholder");
          name.classList.add("d-inline");
          name.classList.remove("d-none");
          email.classList.remove("movePlaceholder");
          email.classList.remove("d-inline");
          email.classList.add("d-none");
          message.classList.remove("movePlaceholder");
          message.classList.remove("d-inline");
          message.classList.add("d-none");
          name.innerHTML = "Qui êtes vous ?";
          email.innerHTML = "Saisissez votre adresse mail...";
          message.innerHTML = "Laissez moi un petit message...";
          nameInput.classList.add("d-Klex");
          nameInput.classList.remove("d-none");
          emailInput.classList.remove("d-Klex");
          emailInput.classList.add("d-none");
          messageInput.classList.remove("d-Klex");
          messageInput.classList.add("d-none");
          formBtnNameToEmail.classList.remove("d-none");
          formBtnNameToEmail.classList.add("d-inline");
          sendEmail();
          setOpen(true);
          setIsLoading(false);
        }, 5000);
      } else {
        // En cas d'erreur
        message.innerHTML = "N'avez vous rien à dire :( ?";
        message.classList.add("bg-danger");
      }
    });
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
      // retirer label message
      message.classList.add("d-none");
      message.classList.remove("d-inline");

      // ajouter btn name  to email
      formBtnNameToEmail.classList.add("d-inline-block");
      formBtnNameToEmail.classList.remove("d-none");

      // retirer btn email  to message
      formBtnEmailToMessage.classList.remove("d-inline-block");
      formBtnEmailToMessage.classList.add("d-none");

      // retirer btn submit
      formBtnSubmit.classList.remove("d-inline-block");
      formBtnSubmit.classList.add("d-none");
    });
    email.addEventListener("click", () => {
      email.classList.add("movePlaceholder");
      formBtnEmailToMessage.disabled = false;

      // retirer label message
      message.classList.add("d-none");
      message.classList.remove("d-inline");

      // afficher message input
      emailInput.classList.add("d-Klex");
      emailInput.classList.remove("d-none");

      // retirer name input
      nameInput.classList.remove("d-Klex");
      nameInput.classList.add("d-none");

      // retirer message input
      messageInput.classList.remove("d-Klex");
      messageInput.classList.add("d-none");

      // ajouter btn email  to message
      formBtnEmailToMessage.classList.add("d-inline-block");
      formBtnEmailToMessage.classList.remove("d-none");

      // retirer btn submit
      formBtnSubmit.classList.remove("d-inline-block");
      formBtnSubmit.classList.add("d-none");
    });
    message.addEventListener("click", () => {
      message.innerHTML = `<i class='fa-duotone fa-message-captions'></i> <span class='mx-1'>${message.textContent}</span>`;
      formBtnSubmit.disabled = false;
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
    <FormContainer>
      <Form id="FormK" ref={formK}>
        <div className="placeholdersContainer">
          <span className="name text-wrap">
            <label htmlFor="name">
              <Typewriter
                options={{ loop: false, cursor: "" }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2000)
                    .changeDelay(55)
                    .typeString("Qui êtes vous ?")
                    .start();
                }}
              />
            </label>
          </span>
          <span className="email d-none text-wrap">
            <label htmlFor="email">
              {emailTrigger && (
                <Typewriter
                  options={{ loop: false, cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(50)
                      .typeString("Saisissez votre e-mail...")
                      .start();
                  }}
                />
              )}
            </label>
          </span>
          <span className="message d-none text-wrap">
            <label htmlFor="message">
              {messageTrigger && (
                <Typewriter
                  options={{ loop: false, cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(50)
                      .typeString("Laissez moi un petit message :)")
                      .start();
                  }}
                />
              )}
            </label>
          </span>
        </div>
        <InputContainer focus={focusNameTrigger} className="nameInput">
          <i className="fa-duotone fa-user-hair"></i>
          <input id="name" name="nom" type="text" className="w-100" />
        </InputContainer>
        <InputContainer focus={focusEmailTrigger} className="emailInput d-none">
          <i className="fa-duotone fa-at"></i>
          <input id="email" name="email" type="email" className="w-100" />
        </InputContainer>
        <InputContainer
          focus={focusMessageTrigger}
          className="messageInput d-none"
        >
          <i className="fa-duotone fa-message-captions"></i>
          <textarea
            id="message"
            name="message"
            rows={2}
            className="w-100"
          ></textarea>
        </InputContainer>
      </Form>
      <div className="text-center mt-4">
        <ButtonK
          id="formBtnNameToEmail"
          variant="contained"
          size="small"
          endIcon={<i className="fa-duotone fa-person-to-portal"></i>}
        >
          Confirmer <small className="text-muted fs-8 mx-1">1/3</small>
        </ButtonK>
        <ButtonK
          className="d-none"
          id="formBtnEmailToMessage"
          variant="contained"
          size="small"
          endIcon={<i className="fa-duotone fa-person-to-portal"></i>}
        >
          Confirmer <small className="text-muted fs-8 mx-1">2/3</small>
        </ButtonK>
        <ButtonS
          loading={isLoading ? true : false}
          loadingPosition="end"
          variant="contained"
          size="small"
          id="formBtnSubmit"
          className="d-none"
          endIcon={<i className="fa-duotone fa-paper-plane"></i>}
        >
          {isLoading ? "Un instant..." : "Envoyer"}{" "}
          <small className="text-muted fs-8 mx-1">3/3</small>
        </ButtonS>
      </div>
      <Dialog onClose={handleClose} open={open}>
        <Snackbar
          id="Snack"
          style={{
            position: "absolute !important",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          open={open}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Votre message a bien été envoyé !
          </Alert>
        </Snackbar>
      </Dialog>
    </FormContainer>
  );
};

export default FormContact;
