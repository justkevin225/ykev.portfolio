import React from "react";
import { motion } from "framer-motion";
import pagesVariants from "../helpers/pagesVariants";
import Bubble from "../components/Bubble/Bubble";
import randomInt from "../helpers/randomInt";
import styled from "styled-components";
import CardContact from "../components/CardContact/CardContact";
import Card from "../helpers/cardStyle";
import { cardsDatas } from "../data/ContactDatas";
import FormContact from "../components/FormContact/FormContact";

const Main = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  .exit {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const Contact = () => {

  return (
    <Main
      variants={pagesVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        initial={{
          x: "-50%",
        }}
        animate={{
          x: 0,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          x: "-50%",
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
        className="exit"
      >
        <Bubble width="85px" x="39%" y="60%" duration={randomInt(2, 6)} />
        <Bubble width="45px" x="25%" y="70%" duration={randomInt(2, 6)} />
        <Bubble width="105px" x="8%" y="30%" duration={randomInt(2, 6)} />
      </motion.div>
      <motion.div
        initial={{
          x: "50%",
        }}
        animate={{
          x: 0,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          x: "50%",
          transition: {
            duration: 0.3,
          },
        }}
        className="exit"
      >
        <Bubble width="50px" x="75%" y="75%" duration={randomInt(2, 6)} />
        <Bubble width="90px" x="60%" y="15%" duration={randomInt(2, 6)} />
        <Bubble width="70px" x="88%" y="35%" duration={randomInt(2, 6)} />
      </motion.div>

      <div className="container pt-4">
        <div className="row justify-content-center">
          <div className="col-10">
            <Card
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0, transition: { duration: 0.3 } }}
              transition={{
                type: "spring",
                duration: 6.5,
                delay: 0.3,
                stiffness: 200,
                bounce: 0.1,
              }}
              className="p-3 pb-4"
            >
              <h2 className="fw-bold">Contactez-moi</h2>
              <div className="fs-6 mb-2">
                Si vous voulez entrer en contact avec moi, pour me parlez d’une collaboration,
                d'une embauche, ou pour simplement me dire bonjour, remplissez le magnifique
                formulaire ci-dessous ou joignez moi à l'aide d'une des méthodes plus bas.
              </div>
              <FormContact />
            </Card>
          </div>
        </div>
        <div className="row justify-content-center my-3">
          <div className="col-10">
            <motion.div
              className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-3"
            >
              {cardsDatas.map((cardData) => {
                return <CardContact
                  key={cardData.id}
                  topIcon={cardData.topIcon}
                  btnIcon={cardData.btnIcon}
                  btnText={cardData.btnText}
                  link={cardData.link}
                  delay={cardData.delay}
                  contactMean={cardData.contactMean}
                  contactRef={cardData.contactRef}
                />
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </Main >
  );
};

export default Contact;
