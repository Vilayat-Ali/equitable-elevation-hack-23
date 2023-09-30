

import React from 'react';
import {
  Box,
  extendTheme,
  Link,
  Image,
  Flex,
  Text,
  Button,
  VStack,
  Icon,
  HStack,
} from '@chakra-ui/react';
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'lightblue', // Change background color to a friendly light blue
        color: 'white', // Set text color to white for better contrast
      },
    },
  },
});

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <>
      <Flex direction="column" minH="100vh">
        {/* Navbar */}
        <Flex bg="blue.500" p={4} justify="space-between" align="center">
          {/* Logo and Company Name */}
          <Flex align="center">
            <Image src="/logo.png" alt="Logo" w={8} h={8} />
            <Text fontSize="2xl" color="white" ml={2}>
              Helping Hands
            </Text>
          </Flex>

          {/* Join Button */}
          <Link href="/account/signup">
            <Button colorScheme="teal">Join</Button> {/* Use teal color for Join button */}
          </Link>
        </Flex>

        {/* Hero Section with background image */}
        <Box
          w="100vw"
          h="40vh"
          backgroundImage="url('https://images.pexels.com/photos/7260030/pexels-photo-7260030.jpeg')" // Replace with your background image
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <VStack
            spacing="6"
            justifyContent="center"
            w="100vw"
            padding="4vw 2vw"
            backgroundColor="rgba(0, 0, 0, 0.5)" // Add a semi-transparent overlay to improve text readability
            color="white"
            textAlign="center"
          >
            <Text fontSize="4xl">Always Offering a Helping Hand.</Text>
            <Text fontSize="xl">
              Join our community to make a difference in the lives of others.
            </Text>
            <HStack spacing="4">
              <Button variant="solid" colorScheme="teal">
                Join Community
              </Button>
              <Button variant="outline">Learn More</Button>
            </HStack>
          </VStack>
        </Box>

        {/* About Us */}
        <Box bg="white" p={8} color="black"> {/* Set background to white and text to black */}
          <Text fontSize="3xl" fontWeight="bold" mb={4}>
            About Us
          </Text>
          <Text fontSize="lg" mb={4}>
            At Helping Hands, we've created a platform that blends the power
            of social media with the spirit of compassion. Our mission is
            simple: to connect those in need with those who can make a
            difference. Just like Instagram, users can share their stories and
            post requests for assistance, whether it's financial support,
            essential supplies, or a helping hand in times of crisis. We
            believe in the strength of community and the profound impact small
            acts of kindness can have on someone's life. By joining our
            community, you become a part of something bigger, where your
            support and generosity can change lives.
          </Text>
          <Text fontSize="lg">
            Whether you're looking to lend a hand or seeking help, Helping
            Hands provides a safe and supportive space for individuals and
            organizations to come together. Our user-friendly interface makes
            it easy to create and share posts, connect with like-minded
            individuals, and build a network of caring individuals who want to
            make the world a better place. We encourage you to explore our
            platform, join our community, and experience the joy of giving and
            receiving support. Together, we can create a world where kindness
            and empathy prevail, one helping hand at a time.
          </Text>
        </Box>

        {/* Footer */}
        <Box bg="teal" p={4} color="white" display="flex" justifyContent="space-between">
          <Text fontSize="sm">© 2023 Helping Hands. All rights reserved.</Text>
          {/* Social Media Links */}
          <HStack spacing="4">
            <Link href="https://www.linkedin.com">
              <Icon as={FaLinkedin} boxSize={5} color="white" />
            </Link>
            <Link href="https://www.instagram.com">
              <Icon as={FaInstagram} boxSize={5} color="white" />
            </Link>
            <Link href="https://www.youtube.com">
              <Icon as={FaYoutube} boxSize={5} color="white" />
            </Link>
          </HStack>
        </Box>
      </Flex>
    </>
  );
};

export default LandingPage;
