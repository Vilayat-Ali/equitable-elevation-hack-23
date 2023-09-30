// lib
import { type ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

type Props = {
  children: ReactNode;
};

// eslint-disable-next-line no-empty-pattern
const FeedLayout = ({ children }: Props) => {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
};

export default FeedLayout;
