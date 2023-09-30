// lib
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import {
  Flex,
  Box,
  Text,
  List,
  ListItem,
  Avatar,
  HStack,
  Textarea,
  Button,
} from "@chakra-ui/react";

// components
import FeedLayout from "../../layouts/FeedLayout";
import Feed from "../../cards/Feed";

const Home = () => {
  const [postContent, setPostContent]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState<string>("");

  return (
    <FeedLayout>
      <Flex direction="row" justifyContent="space-evenly">
        <Box w="20vw" h="30vh" p="2vw" borderRadius={"0.5vw"} shadow="md">
          <Text
            textAlign="center"
            fontSize="2xl"
            color="#9B6ADE"
            fontWeight="bold"
          >
            Your Stats
          </Text>
          <List>
            <ListItem>one</ListItem>
            <ListItem>one</ListItem>
            <ListItem>one</ListItem>
          </List>
        </Box>

        <Box w="60vw" display="flex" flexDirection="column">
          <Flex
            direction="column"
            alignItems="flex-end"
            border="1px solid #9B6ADE"
            borderRadius="0.5vw"
            padding="2vw"
            shadow="md"
          >
            <HStack justifyContent="start" alignItems="start" spacing="2">
              <Avatar name="nnam" />
              <Textarea
                width="53.5vw"
                color="#9B6ADE"
                border="1px solid #9B6ADE"
                placeholder="Hey There! I'm here to say..."
                resize="none"
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setPostContent(e.target.value)
                }
              />
            </HStack>
            <Button
              variant="solid"
              color="#fff"
              bgColor="#9B6ADE"
              w="fit-content"
              mt="2"
            >
              Send
            </Button>
          </Flex>
          <Box my="2vh">
            {[...Array(40)].map((index) => (
              <Feed
                key={index}
                name={"Mohd Ahmad"}
                title={"Asking for help"}
                content={"Meri gaand mein dard ho raha h"}
                likes={0}
                dislikes={0}
                comments={0}
              />
            ))}
          </Box>
        </Box>

        <Box width="10vw"></Box>
      </Flex>
    </FeedLayout>
  );
};

export default Home;
