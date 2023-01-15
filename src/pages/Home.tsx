import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Home = () => {
  const components = [
    { slug: "volume", name: "Volume" },
    { slug: "transfer", name: "Transfer" },
    { slug: "table", name: "Table" },
    { slug: "roles-table", name: "Roles Table" },
    { slug: "fab-button", name: "Fab Button" },
    { slug: "form", name: "Form" },
  ];

  return (
    <>
      <Heading>Components</Heading>
      <Text>Collection of react components made with Chakra UI library</Text>
      <SimpleGrid columns={4} spacing={5}>
        {components.map((component) => (
          <Link to={`/components/${component.slug}`}>
            <VStack
              key={component.name}
              p={4}
              spacing={3}
              shadow="md"
              borderWidth="1px"
              rounded="lg"
            >
              <Heading fontSize="xl">{component.name}</Heading>
            </VStack>
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
};
