// lib
import {
  Box,
  Link,
  Image,
  Flex,
  Text,
  Button,
  VStack,
  GridItem,
  Heading,
  Grid,
} from "@chakra-ui/react";

const LandingPage = () => {
  const features: { title: string; description: string }[] = [
    {
      title: "Community Building",
      description: "Helping Hands believes in community building",
    },
    {
      title: "Community Interaction",
      description: "Helping Hands believes in community interaction",
    },
  ];

  return (
    <Box overflowX="hidden">
      <Flex direction="column" minH="100vh">
        {/* Navbar */}
        <Flex
          bg="#FFF"
          p={4}
          justify="space-between"
          align="center"
          shadow="md"
        >
          <Flex align="center">
            <Image src="/logo.png" alt="Logo" w={8} h={8} />
            <Text fontSize="2xl" color="#9B6ADE" ml={2}>
              Helping Hands
            </Text>
          </Flex>

          <Link href="/account/signup">
            <Button bgColor="#9B6ADE" color="#FFF">
              Join
            </Button>
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
            h="40vh"
            padding="4vw 2vw"
            backgroundColor="rgba(0, 0, 0, 0.7)" // Add a semi-transparent overlay to improve text readability
            color="white"
            textAlign="center"
          >
            <Text fontSize="6xl">
              Always Offering a{" "}
              <span style={{ color: "#9B6ADE" }}>Helping Hand</span>.
            </Text>
            <Text fontSize="xl" color="rgba(255,255,255,0.7)">
              Join our community to make a difference in the lives of others.
            </Text>
          </VStack>
        </Box>

        {/* About Us */}
        <Box bg="white" p={8} color="black">
          {" "}
          {/* Set background to white and text to black */}
          <Text fontSize="3xl" fontWeight="bold" mb={4} color="#9b6ade">
            About Us
          </Text>
          <Text fontSize="lg" mb={4} color="rgba(0,0,0,0.75)">
            At Helping Hands, we've created a platform that blends the power of
            social media with the spirit of compassion. Our mission is simple:
            to connect those in need with those who can make a difference. Just
            like Instagram, users can share their stories and post requests for
            assistance, whether it's financial support, essential supplies, or a
            helping hand in times of crisis. We believe in the strength of
            community and the profound impact small acts of kindness can have on
            someone's life. By joining our community, you become a part of
            something bigger, where your support and generosity can change
            lives.
          </Text>
          <Text fontSize="lg" color="rgba(0,0,0,0.75)">
            Whether you're looking to lend a hand or seeking help, Helping Hands
            provides a safe and supportive space for individuals and
            organizations to come together. Our user-friendly interface makes it
            easy to create and share posts, connect with like-minded
            individuals, and build a network of caring individuals who want to
            make the world a better place. We encourage you to explore our
            platform, join our community, and experience the joy of giving and
            receiving support. Together, we can create a world where kindness
            and empathy prevail, one helping hand at a time.
          </Text>
        </Box>

        <Box
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          bg="white"
          overflow="hidden"
        >
          <Heading mb={8} fontSize="3xl" color="#9B6ADE">
            Features
          </Heading>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={8}
          >
            {features.map((feature, index) => (
              <GridItem
                key={index}
                p={6}
                borderRadius="md"
                bgColor="#9B6ADE"
                color="white"
                textAlign="center"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.3s ease-out"
              >
                <VStack spacing={4} cursor="pointer">
                  <Heading fontSize="xl">{feature.title}</Heading>
                  <Text>{feature.description}</Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingPage;
