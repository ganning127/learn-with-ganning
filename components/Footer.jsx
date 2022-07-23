import { Text, Box, Link } from "@chakra-ui/react";

export const Footer = (props) => {
  return (
    <Box as="footer" {...props}>
      <Text color="brand.light.text">
        ~ made with love from{" "}
        <Link
          href="https://www.ganning.me/"
          color="brand.light.blue.600"
          _hover={{
            fontSize: "xl",
          }}
          transition="all .2s"
          isExternal
        >
          Ganning Xu
        </Link>
        .
      </Text>
    </Box>
  );
};
