import { Center, Checkbox, HStack, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

export const TransferBox = (props: {
  allChecked: boolean | undefined;
  isIndeterminate: boolean | undefined;
  items: any[];
  selectedItems: any[];
  handleSelectItem: (arg0: any) => void;
  handleSelectAll: (group: string, value: boolean) => void;
  group: string;
  title: ReactNode;
}) => {
  return (
    <VStack
      rounded="lg"
      height="full"
      border="1px solid"
      borderColor="gray.300"
      spacing={0}
    >
      <HStack p={2} borderBottom="1px solid" borderColor="gray.300">
        <Checkbox
          isChecked={props.allChecked}
          isIndeterminate={props.isIndeterminate}
          onChange={(e) => props.handleSelectAll(props.group, e.target.checked)}
        />
        {props.selectedItems?.length !== 0 && (
          <Text>
            {props.selectedItems.length} / {props.items.length} Items
          </Text>
        )}
        {props.selectedItems?.length === 0 && (
          <Text>{props.items.length} Items</Text>
        )}
        <Text>{props.title}</Text>
      </HStack>
      <VStack p={2} w="full" align="flex-start" overflow="auto">
        {props.items.length === 0 && (
          <Center h="full" w="full">
            <Text>No items</Text>
          </Center>
        )}
        {props.items.length !== 0 &&
          props.items.map((item) => {
            return (
              <Checkbox
                key={item.key}
                onChange={() => {
                  props.handleSelectItem(item.key);
                }}
                isChecked={item.isSelected}
              >
                {item.content}
              </Checkbox>
            );
          })}
      </VStack>
    </VStack>
  );
};
