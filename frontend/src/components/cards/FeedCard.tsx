import React from 'react';
import { Box, Avatar, Text, Flex, Badge, IconButton, Icon } from '@chakra-ui/react';
import { FiThumbsUp, FiMessageCircle } from 'react-icons/fi';

interface FeedCardProps {
  name: string;
  title: string;
  company: string;
  content: string;
  likes: number;
  comments: number;
  imageUrl?: string;
}

const FeedCard: React.FC<FeedCardProps> = ({
  name,
  title,
  company,
  content,
  likes,
  comments,
  imageUrl,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      bg="white"
      boxShadow="md"
      maxW="xl"
      mb={4}
    >
      <Flex alignItems="center">
        <Avatar name={name} src={imageUrl} />
        <Box ml={3}>
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" color="gray.500">
            {title} at {company}
          </Text>
        </Box>
      </Flex>
      <Text mt={4}>{content}</Text>
      {imageUrl && <img src={imageUrl} alt="Feed" style={{ maxWidth: '100%', marginTop: '8px' }} />}
      <Flex justifyContent="space-between" mt={4}>
        <Flex alignItems="center">
          <Badge colorScheme="blue" mr={2}>
            {likes} Likes
          </Badge>
          <Badge colorScheme="blue">{comments} Comments</Badge>
        </Flex>
        <Flex alignItems="center">
          <IconButton
            aria-label="Like"
            icon={<Icon as={FiThumbsUp} />}
            variant="ghost"
            mr={2}
          />
          <IconButton
            aria-label="Comment"
            icon={<Icon as={FiMessageCircle} />}
            variant="ghost"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default FeedCard;
