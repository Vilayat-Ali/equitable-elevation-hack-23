import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import FeedLayout from "../../layouts/FeedLayout";
import Feed from "../../cards/Feed";

const Home = () => {
  const [postContent, setPostContent]: [string, Dispatch<SetStateAction<string>>] = useState<string>("");

  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const feedData = [...Array(20)].map((_, index) => ({
    name: "User " + index,
    title: selectedOption || "Default",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 10,
    dislikes: 0,
    comments: 0,
  }));

  return (
    <FeedLayout>
      <Flex direction="row" justifyContent="space-evenly">
        <Box w="20vw" h="30vh" p="2vw" borderRadius={"0.5vw"} shadow="md">
          <Text textAlign="center" fontSize="2xl" color="#9B6ADE" fontWeight="bold">
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
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setPostContent(e.target.value)}
              />
              </HStack>
              <Menu>
                <MenuButton as={Button} variant="outline" color="#9B6ADE" size="sm">
                  {selectedOption || "Select Option"}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => handleOptionSelect("SOS")}>SOS</MenuItem>
                  <MenuItem onClick={() => handleOptionSelect("Announcement")}>Announcement</MenuItem>
                  <MenuItem onClick={() => handleOptionSelect("Help")}>Help</MenuItem>
                </MenuList>
              </Menu>
            
            <Button variant="solid" color="#fff" bgColor="#9B6ADE" w="fit-content" mt="2">
              Send
            </Button>
          </Flex>
          <Box my="2vh">
            {feedData.map((feed, index) => (
              <Feed key={index} {...feed} />
            ))}
          </Box>
        </Box>

        <Box width="5vw"></Box>
      </Flex>
    </FeedLayout>
  );
};

export default Home;
