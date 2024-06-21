import { 
  HStack,
  Link,
  Icon,
  useColorMode as mode,
  Text
} from "@chakra-ui/react";

export const NavLink = ({ icon, isActive, label, ...rest}) => {
  return (
    <Link
      display="block"
      py={2}
      px={3}
      borderRadius="md"
      transition="all 0.3s"
      fontWeight="medium"
      lineHeight="1.5rem"
      aria-current={isActive ? "page" : undefined}
      color={mode("blackAlpha.800", "whiteAlpha.800")}
      _hover={{
        bg: mode("gray.100", "gray.700"),
        color: mode("black", "white"),
      }}
      _activeLink={{
        bg: "#1B9DED",
        color: mode("white", "black"),
      }}
      {...rest}
    >
      <HStack spacing={4}>
        <Icon as={icon} boxSize="20px" />
        <Text as="span" fontSize={{ base: "xs", lg: "sm" }}>
          {label}
        </Text>
      </HStack>
    </Link>
  );
};