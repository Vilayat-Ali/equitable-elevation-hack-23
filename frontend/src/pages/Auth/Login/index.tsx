// components
import { Box, Flex, FormControl, FormLabel, Input, Button, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// assets
import RegisterBgImg from "../../../assets/register.jpg";

const Login = () => {
  return (
    <Flex direction="row" justifyContent="start" alignItems="start" width="100vw" height="100vh" overflow="hidden">
      {/* Image section */}
      <Box width="45%" height="inherit" bgImage={RegisterBgImg} objectFit="contain" objectPosition="center"></Box>
      {/* Image section */}

      {/* Form section */}
      <Box width="55%" height="inherit" display="flex" flexDirection="row" justifyContent="center" alignItems="center">

        <Box as={VStack} spacing="2" width="85%" height="fit-content" shadow="md" padding="2rem" borderRadius="5%">

          <Text fontSize="40">Login</Text>

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

          <Text>Don't have an account? <Link to="/account/signup">Signin</Link></Text>

          {/* Button */}
          <Button colorScheme='blue'>Submit</Button>

        </Box>
      </Box>
      {/* Form section */}
    </Flex>
  );
};

export default Login;
