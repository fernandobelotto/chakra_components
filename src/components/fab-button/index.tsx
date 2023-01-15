import { StarIcon, EmailIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  SlideFade,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

const FabButton = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Box>
        <VStack>
          <SlideFade in={isOpen} offsetY="80px">
            <IconButton
              size="sm"
              rounded="full"
              aria-label="add"
              icon={<StarIcon />}
            />
          </SlideFade>
          <SlideFade in={isOpen} offsetY="40px">
            <IconButton
              size="sm"
              rounded="full"
              aria-label="add"
              icon={<EmailIcon />}
            />
          </SlideFade>
          <SlideFade in={isOpen} offsetY="20px">
            <IconButton
              size="sm"
              rounded="full"
              aria-label="add"
              icon={<DeleteIcon />}
            />
          </SlideFade>
          <IconButton
            size="sm"
            rounded="full"
            onClick={onToggle}
            aria-label="add"
            icon={<AddIcon />}
          />
        </VStack>
      </Box>
    </>
  );
};

export default FabButton;
