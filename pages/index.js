import Head from "next/head";
import {
  Box,
  Text,
  Container,
  Heading,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Learn With Ganning</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <Container p={4} maxW="container.xl">
        <Box p={4} rounded="lg" bg="white" mx="auto" shadow="lg" mt={8}>
          <Heading>
            Oh,{" "}
            <Text as="span" color="brand.light.blue.600">
              hi there!
            </Text>
          </Heading>
          <Text fontSize="lg" color="brand.light.text" my={4}>
            You&apos;ve stumbed across{" "}
            <Text as="span" color="brand.light.blue.600" fontWeight="bold">
              Learn With Ganning
            </Text>
            , a program I&apos;ll be hosting in Summer 2023 offering programming
            courses in Web Development, Python, and Research. This website is
            currently under contstruction, but feel free to check back later!
          </Text>

          <Button
            as="a"
            href="https://ganning.notion.site/Learn-With-Ganning-cea90496956242d0b8b87e8810c8c130"
            target="_blank"
            bg="brand.light.blue.600"
            color="white"
            transition="all .2s"
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            Learn more
          </Button>
          <Button
            as="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSetgAbzDr3bnuYVp-jJ1ZLl88VU39x86YTWG2euj2NWwqiqPg/viewform"
            target="_blank"
            bg="transparent"
            color="brand.light.blue.600"
            transition="all .2s"
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            Keep me updated!
          </Button>
        </Box>
        <Footer mt={4} textAlign="center" />
      </Container>
    </>
  );
}
