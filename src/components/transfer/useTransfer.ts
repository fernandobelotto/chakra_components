import { useState } from "react";

export interface RecordType {
  key: string;
  content: string;
  group: string;
  isSelected?: boolean;
}

type Props = {
  dataSource: RecordType[];
  setDataSource: (data: RecordType[]) => void;
};

export function useTransfer({ dataSource, setDataSource }: Props) {
  const handleSelectItem = (key: string) => {
    const newItems = dataSource.map((item) => {
      if (item.key === key) {
        return { ...item, isSelected: !item.isSelected };
      }
      return item;
    });
    setDataSource(newItems);
  };

  const handleSelectAll = (group: string, value: boolean) => {
    const newItems = dataSource.map((item) => {
      if (item.group === group) {
        return { ...item, isSelected: value };
      }
      return item;
    });
    setDataSource(newItems);
  };

  const leftItems = dataSource.filter((item) => item.group === "left");
  const rightItems = dataSource.filter((item) => item.group === "right");

  const allCheckedLeft =
    leftItems.map((item) => item?.isSelected).every(Boolean) &&
    leftItems.length > 0;
  const allCheckedRight =
    rightItems.map((item) => item.isSelected).every(Boolean) &&
    rightItems.length > 0;
  const isIndeterminateLeft =
    leftItems.map((item) => item.isSelected).some(Boolean) && !allCheckedLeft;
  const isIndeterminateRight =
    rightItems.map((item) => item.isSelected).some(Boolean) && !allCheckedRight;

  const isSomeItemSelectedLeft = leftItems
    .map((item) => item.isSelected)
    .some(Boolean);
  const isSomeItemSelectedRight = rightItems
    .map((item) => item.isSelected)
    .some(Boolean);

  const handleMoveToRight = () => {
    const newItems = dataSource.map((item) => {
      if (item.isSelected) {
        return { ...item, group: "right" };
      }
      return item;
    });
    setDataSource(newItems);
  };

  const handleMoveToLeft = () => {
    const newItems = dataSource.map((item) => {
      if (item.isSelected) {
        return { ...item, group: "left" };
      }
      return item;
    });
    setDataSource(newItems);
  };

  const leftSelectedItems = leftItems.filter((item) => item.isSelected);
  const rightSelectedItems = rightItems.filter((item) => item.isSelected);

  return {
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
    rightSelectedItems
  };
}
