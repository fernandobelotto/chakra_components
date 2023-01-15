import { Link, Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

type Props = {};

export const Layout = (props: Props) => {
  return (
    <>
      <ColorModeSwitcher />
      <Container margin="auto" pt={24} minH="100vh">
        <VStack align="flex-start" spacing={3}>
          <Outlet />
        </VStack>
        <Footer />
      </Container>
    </>
  );
};

const Footer = () => {
  return (
    <Flex p={5} justify="center">
      <Text textAlign="center">
        made in 🇧🇷 with 👊 by
        <Link href="https://github.com/fernandobelotto" target="_blank">
          @fernandobelotto
        </Link>
      </Text>
    </Flex>
  );
};
