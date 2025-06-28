import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { ChevronDownIcon } from "@chakra-ui/icons";

// Mock user data - in a real app this would come from auth context
const mockUser = {
  name: "Alex Johnson",
  email: "alex@builder.io",
  avatar: "https://bit.ly/sage-adebayo",
};

const Header = () => {
  return (
    <Box
      as="header"
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      px={8}
      py={4}
    >
      <Flex align="center" maxW="container.xl" mx="auto">
        {/* Builder.io Logo */}
        <Link href="/ideas">
          <HStack cursor="pointer" spacing={3}>
            <Box
              bg="brand.500"
              color="white"
              px={3}
              py={2}
              borderRadius="lg"
              fontWeight="bold"
            >
              🧱
            </Box>
            <Heading size="md" color="gray.900">
              Builder Feedback
            </Heading>
          </HStack>
        </Link>

        <Spacer />

        {/* Navigation */}
        <HStack spacing={6}>
          <Link href="/ideas">
            <Button
              variant="ghost"
              color="gray.600"
              _hover={{ color: "brand.500" }}
            >
              💡 Ideas
            </Button>
          </Link>
          <Link href="/submit">
            <Button
              variant="ghost"
              color="gray.600"
              _hover={{ color: "brand.500" }}
            >
              📝 Submit
            </Button>
          </Link>
          <Link href="/roadmap">
            <Button
              variant="ghost"
              color="gray.600"
              _hover={{ color: "brand.500" }}
            >
              🗺️ Roadmap
            </Button>
          </Link>

          {/* User Profile Dropdown */}
          <Menu>
            <MenuButton>
              <HStack spacing={2} cursor="pointer">
                <Avatar size="sm" src={mockUser.avatar} name={mockUser.name} />
                <Text fontSize="sm" color="gray.700">
                  {mockUser.name}
                </Text>
                <ChevronDownIcon color="gray.500" />
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem color="gray.600">👤 Profile</MenuItem>
              <MenuItem color="gray.600">⚙️ Settings</MenuItem>
              <MenuItem color="gray.600">🚪 Sign out</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
