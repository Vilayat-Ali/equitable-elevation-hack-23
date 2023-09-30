import React from 'react';
import { Box, Heading, Grid, GridItem, Textarea, Button, Text } from '@chakra-ui/react';
import FeedLayout from '../../layouts/FeedLayout';
import Feed from '../../cards/Feed'; 

const Home = () => (
  <FeedLayout>
    <Grid templateColumns="1fr 2fr 1fr" gap={4}>
      {/* Left Column (User Info) */}
      <GridItem colSpan={1}>
        <Box>
          <Heading as="h1" size="xl" mb={4}>
            Profile
          </Heading>
          {/* Add user information here */}
          <Box>
            <Text>Name: Mohd Ahmad</Text>
            <Text>Title: Software Engineer</Text>
          </Box>
        </Box>
      </GridItem>

      {/* Middle Column (Feed) */}
      <GridItem colSpan={2}>
        <Box>
          <Heading as="h1" size="xl" mb={4}>
            Post Something
          </Heading>
          {/* Post Input */}
          <Box mb={4}>
            <Textarea placeholder="Write something..." size="lg" resize="none" />
            <Button colorScheme="blue" mt={2}>
              Post
            </Button>
          </Box>

          {/* Previous Feed Posts */}
          <Feed
            name="Mohd Ahmad"
            title="Software Engineer"
            content="Please help me, I need an urgent help. I want an internship or full time work. If any one knows then help me  "
            likes={10}
            dislikes={4} comments={0} />
        </Box>
      </GridItem>

      {/* Right Column (Ads or Suggestions) */}
      <GridItem colSpan={1}>
        <Box>
          {/* Add ads or suggestions here */}
        </Box>
      </GridItem>
    </Grid>
  </FeedLayout>
);

export default Home;
