// components
import {
  useState,
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
} from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

// components
import ConfidentialInput from "../../../components/common/ConfidentialInput";

// interfaces
import { LoginPageInput } from "../../../interfaces/Input";

// assets
import RegisterBgImg from "../../../assets/register.jpg";

const Login = () => {
  const [loginInput, setLoginInput]: [
    LoginPageInput,
    Dispatch<SetStateAction<LoginPageInput>>
  ] = useState<LoginPageInput>({
    email: "",
    password: "",
  });

  const handleLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Flex
      direction="row"
      justifyContent="start"
      alignItems="start"
      width="100vw"
      height="100vh"
      overflow="hidden"
    >
      {/* Image section */}
      <Box
        width="45%"
        height="inherit"
        bgImage={RegisterBgImg}
        objectFit="contain"
        objectPosition="center"
      ></Box>
      {/* Image section */}

      {/* Form section */}
      <Box
        width="55%"
        height="inherit"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          as={VStack}
          spacing="2"
          width="85%"
          height="fit-content"
          shadow="md"
          padding="2rem"
          borderRadius="5%"
        >
          <Text fontSize="40">Login</Text>

          {/* username */}
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your Email"
              value={loginInput.email}
              onChange={handleLoginInput}
            />
          </FormControl>

          {/* Password */}
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <ConfidentialInput
              name="password"
              placeholder="Enter your password"
              value={loginInput.password}
              setValue={handleLoginInput}
            />
          </FormControl>

          <Text>
            Don't have an account?{" "}
            <Link to="/account/signup">
              <Button variant="outline">Signin</Button>
            </Link>
          </Text>

          {/* Button */}
          <Button colorScheme="blue">Submit</Button>
        </Box>
      </Box>
      {/* Form section */}
    </Flex>
  );
};

export default Login;
