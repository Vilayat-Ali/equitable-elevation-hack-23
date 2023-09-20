// components
import { Box, Flex, FormControl, FormLabel, Input, Button, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// assets
import RegisterBgImg from "../../../assets/register.jpg";

const Register = () => {
  return (
    <Flex direction="row" justifyContent="start" alignItems="start" width="100vw" height="100vh" overflow="hidden">
      {/* Image section */}
      <Box width="45%" height="inherit" bgImage={RegisterBgImg} objectFit="contain" objectPosition="center"></Box>
      {/* Image section */}

      {/* Form section */}
      <Box width="55%" height="inherit" display="flex" flexDirection="row" justifyContent="center" alignItems="center">

        <Box as={VStack} spacing="2" width="85%" height="fit-content" shadow="md" padding="2rem" borderRadius="5%">

          <Text fontSize="40">Create Account</Text>

          {/*  Name */}
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="name" placeholder='Enter your Name' />
          </FormControl>

          {/* Emai */}
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type='email' placeholder="Enter your Email" />
          </FormControl>

          {/* username */}
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input type='username' placeholder="Enter your Username" />
          </FormControl>

          {/* Password */}
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder="Password" />
          </FormControl>

          <Text>Already have an account? <Link to="/account/signin">Login</Link></Text>

          {/* Button */}
          <Button colorScheme='blue'>Submit</Button>

        </Box>
      </Box>
      {/* Form section */}
    </Flex>
  );
};

export default Register;
