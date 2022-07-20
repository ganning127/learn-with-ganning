import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Box,
  Text,
  Container,
  Heading,
  Button,
  useColorMode,
} from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <Head>
        <title>Learn With Ganning</title>
      </Head>

      <Container p={4} maxW="container.xl">
        <Box p={4} rounded="lg" bg="white" mx="auto" shadow="lg" mt={8}>
          <Heading>Oh, hi there!</Heading>
          <Text fontSize="lg" color="brand.light.text" my={4}>
            You&apos;ve stumbed across{" "}
            <Text as="span" color="brand.light.highlight" fontWeight="bold">
              Learn With Ganning
            </Text>
            , a program we&apos;ll be hosting in Summer 2023 offering
            programming courses in ranging from Web Development to Research.
          </Text>

          <Button
            as="a"
            href="https://ganning.notion.site/Learn-With-Ganning-cea90496956242d0b8b87e8810c8c130"
            target="_blank"
            bg="brand.light.highlight"
            color="white"
            transition="all .2s"
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            Learn More
          </Button>
          <Button
            as="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSetgAbzDr3bnuYVp-jJ1ZLl88VU39x86YTWG2euj2NWwqiqPg/viewform"
            target="_blank"
            bg="transparent"
            color="brand.light.highlight"
            transition="all .2s"
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            Keep me updated!
          </Button>
        </Box>
      </Container>
    </>
  );
}
