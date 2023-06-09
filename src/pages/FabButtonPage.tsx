import { Box, Heading, Text } from "@chakra-ui/react";
import CodeBlock from "../components/codeblock/codeblock";
import FabButton from "../components/fab-button";

const FabButtonPage = () => {
  return (
    <>
      <Heading>Fab Button</Heading>
      <Box p={5} border="1px solid" rounded="lg" borderColor="gray.300">
        <FabButton />
      </Box>
      <CodeBlock>
        <Text>{code}</Text>
      </CodeBlock>
    </>
  );
};

var code = `const FabButton = (props: Props) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Box>
        <VStack>
          <SlideFade in={isOpen} offsetY="80px">
            <IconButton aria-label="add" icon={<StarIcon />} />
          </SlideFade>
          <SlideFade in={isOpen} offsetY="40px">
            <IconButton aria-label="add" icon={<EmailIcon />} />
          </SlideFade>
          <SlideFade in={isOpen} offsetY="20px">
            <IconButton aria-label="add" icon={<DeleteIcon />} />
          </SlideFade>
          <IconButton onClick={onToggle} aria-label="add" icon={<AddIcon />} />
        </VStack>
      </Box>
    </>
  );
};`;

export default FabButtonPage;
