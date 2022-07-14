const pagesVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opcaity: 0,
    transition: {
      duration: 0.3,
      delay: 0.3,
    },
  },
};

export default pagesVariants;
