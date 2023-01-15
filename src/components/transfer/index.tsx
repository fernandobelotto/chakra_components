import { HStack, IconButton, VStack } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TransferBox } from "./transfer-box";
import { RecordType, useTransfer } from "./useTransfer";

type Props = {
  dataSource: RecordType[];
  setDataSource: (data: RecordType[]) => void;
};

export const Transfer = ({ dataSource, setDataSource }: Props) => {
  
  const {
    handleSelectItem,
    handleSelectAll,
    leftItems,
    rightItems,
    allCheckedLeft,
    allCheckedRight,
    isIndeterminateLeft,
    isIndeterminateRight,
    isSomeItemSelectedLeft,
    isSomeItemSelectedRight,
    handleMoveToRight,
    handleMoveToLeft,
    leftSelectedItems,
    rightSelectedItems,
  } = useTransfer({ dataSource, setDataSource });

  return (
    <HStack h="300px">
      <TransferBox
        selectedItems={leftSelectedItems}
        items={leftItems}
        handleSelectItem={handleSelectItem}
        allChecked={allCheckedLeft}
        isIndeterminate={isIndeterminateLeft}
        handleSelectAll={handleSelectAll}
        group="left"
        title="source"
      />
      <VStack>
        <IconButton
          aria-label="Move to right"
          icon={<FiChevronRight />}
          size="xs"
          colorScheme="blue"
          onClick={handleMoveToRight}
          isDisabled={!isSomeItemSelectedLeft}
        />
        <IconButton
          aria-label="Move to left"
          icon={<FiChevronLeft />}
          size="xs"
          colorScheme="blue"
          isDisabled={!isSomeItemSelectedRight}
          onClick={handleMoveToLeft}
        />
      </VStack>
      <TransferBox
        selectedItems={rightSelectedItems}
        items={rightItems}
        handleSelectItem={handleSelectItem}
        allChecked={allCheckedRight}
        isIndeterminate={isIndeterminateRight}
        handleSelectAll={handleSelectAll}
        group="right"
        title="target"
      />
    </HStack>
  );
};
