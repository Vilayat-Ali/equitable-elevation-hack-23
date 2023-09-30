import React, { useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Text,
  Badge,
  IconButton,
  Icon,
  Button,
  Input,
} from '@chakra-ui/react';
import { FiThumbsUp, FiThumbsDown, FiMessageCircle, FiEdit } from 'react-icons/fi';

interface FeedProps {
  name: string;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  comments: number;
  imageUrl?: string;
}

const Feed: React.FC<FeedProps> = ({ name, title, content, likes, dislikes, comments, imageUrl }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Handle saving edited content here (e.g., send it to a server)
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} bg="white" boxShadow="md" mb={4}>
      <Flex alignItems="center">
        <Avatar name={name} src={imageUrl} />
        <Box ml={3}>
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" color="gray.500">
            {title}
          </Text>
        </Box>
      </Flex>
      {isEditing ? (
        <Input
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          mt={4}
          mb={2}
        />
      ) : (
        <Text mt={4}>{editedContent}</Text>
      )}
      {imageUrl && <img src={imageUrl} alt="Feed" style={{ maxWidth: '100%', marginTop: '8px' }} />}
      <Flex justifyContent="space-between" mt={4}>
        <Flex alignItems="center">
          <Badge colorScheme="blue" mr={2}>
            {likes} Likes
          </Badge>
          <Badge colorScheme="red" mr={2}>
            {dislikes} Dislikes
          </Badge>
          <Badge colorScheme="blue">{comments} Comments</Badge>
        </Flex>
        <Flex alignItems="center">
          <IconButton aria-label="Like" icon={<Icon as={FiThumbsUp} />} variant="ghost" mr={2} />
          <IconButton aria-label="Dislike" icon={<Icon as={FiThumbsDown} />} variant="ghost" mr={2} />
          <IconButton aria-label="Comment" icon={<Icon as={FiMessageCircle} />} variant="ghost" />
          {isEditing ? (
            <Button colorScheme="blue" size="sm" onClick={handleSaveClick} ml={2}>
              Save
            </Button>
          ) : (
            <IconButton
              aria-label="Edit"
              icon={<Icon as={FiEdit} />}
              variant="ghost"
              size="sm"
              onClick={handleEditClick}
              ml={2}
            />
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Feed;
