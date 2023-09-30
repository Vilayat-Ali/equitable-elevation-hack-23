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
  Image,
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
import { RegisterPageInput } from "../../../interfaces/Input";

// assets
import RegisterBgImg from "../../../assets/register.jpg";

const Register = () => {
  const [registerInput, setRegisterInput]: [
    RegisterPageInput,
    Dispatch<SetStateAction<RegisterPageInput>>
  ] = useState<RegisterPageInput>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegisterInput = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterInput({
      ...registerInput,
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
        display={{ base: "none", md: "block" }}
        width="45%"
        height="inherit"
        bgImage={RegisterBgImg}
        objectFit="contain"
        objectPosition="center"
      ></Box>
      {/* Image section */}

      {/* Form section */}
      <Box
        width={{ base: "100%", md: "55%" }}
        height="inherit"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          as={VStack}
          spacing="3"
          width="85%"
          height="fit-content"
          shadow="md"
          padding="2rem"
          borderRadius="5%"
        >
          <Text fontSize="40">Create Account</Text>
          <VStack spacing="1">
            <Image src="/logo.png" alt="logo" />
            <Text fontSize={{ base: "xl", md: "3xl" }} color="#9B6ADE">
              Helping Hands
            </Text>
          </VStack>

          {/*  Name */}
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={registerInput.username}
              onChange={handleRegisterInput}
            />
          </FormControl>

          {/* Emai */}
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={registerInput.email}
              onChange={handleRegisterInput}
            />
          </FormControl>

          {/* Password */}
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <ConfidentialInput
              name="password"
              placeholder="Enter Password"
              value={registerInput.password}
              setValue={handleRegisterInput}
            />
          </FormControl>

          {/* Confirm Password */}
          <FormControl isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <ConfidentialInput
              name="confirmPassword"
              placeholder="Confirm Password"
              value={registerInput.confirmPassword}
              setValue={handleRegisterInput}
            />
          </FormControl>

          <Text>
            Already have an account?{" "}
            <Link to="/account/signin">
              <Button variant="outline">Login</Button>
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

export default Register;
