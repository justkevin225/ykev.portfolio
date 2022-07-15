import { motion } from "framer-motion";
import styled from "styled-components";

const Card = styled(motion.div)`
  color: ${(props) => props.theme.gray};
  border: 2.5px solid ${(props) => props.theme.gray};
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
`;
export default Card;
