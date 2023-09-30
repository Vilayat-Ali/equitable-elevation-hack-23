// lib
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Image,
  HStack,
  Avatar,
  Icon,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
} from "@chakra-ui/react";
import MenuItems, { type MenuItem as MenuItemType } from "./menuItems";

// hooks
import useToggle from "../../hooks/useToggle";

// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showMobileDropDown, toggleMobileDropDown] = useToggle(false);
  const isThisLinkActive = (url: string) => window.location.pathname === url;

  return (
    <>
      <Box padding={{ base: "3vw 4vw", md: "0.5vw 4vw" }} shadow="md">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Image
              width={{ base: "10vw", md: "3vw" }}
              src="/logo.png"
              alt="code"
            />
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <HStack
              spacing="2.5"
              justifyContent="space-evenly"
              alignItems="center"
            >
              {MenuItems.map((item: MenuItemType) => (
                <Link key={item.url} to={item.url}>
                  <HStack
                    spacing="1"
                    alignItems="center"
                    color={"#9B6ADE"}
                    textDecoration={
                      isThisLinkActive(item.url) ? "underline" : "none"
                    }
                    _hover={{
                      textDecoration: "underline",
                    }}
                    fontSize="1vw"
                  >
                    <Icon as={item.icon} />
                    <Text>{item.title}</Text>
                  </HStack>
                </Link>
              ))}
            </HStack>
          </Box>
          <HStack spacing="2" alignItems="center">
            <Box display={{ base: "none", md: "block" }}>
              <Menu>
                <MenuButton>
                  <Avatar
                    size={{ base: "sm", md: "md" }}
                    bg="#9B6ADE"
                    name="ali"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>View Profile</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Box>

            <Box display={{ base: "block", md: "none" }}>
              <Icon
                color="#9B6ADE"
                fontSize="6vw"
                as={showMobileDropDown ? AiOutlineClose : GiHamburgerMenu}
                onClick={toggleMobileDropDown}
              />
            </Box>
          </HStack>
        </Flex>
      </Box>

      {showMobileDropDown && (
        <Box w="100vw" display={{ base: "block", md: "none" }} shadow="md">
          <VStack spacing="1" w="inherit">
            {MenuItems.map((item: MenuItemType) => (
              <Box width="100%" key={item.url}>
                <Link to={item.url}>
                  <HStack
                    spacing="1"
                    alignItems="center"
                    color={isThisLinkActive(item.url) ? "#fff" : "#9B6ADE"}
                    bgColor={isThisLinkActive(item.url) ? "#9B6ADE" : "#fff"}
                    fontSize="3vw"
                    padding="4vw 2vw"
                  >
                    <Icon as={item.icon} />
                    <Text>{item.title}</Text>
                  </HStack>
                </Link>
              </Box>
            ))}
          </VStack>
        </Box>
      )}
    </>
  );
};

export default Navbar;
