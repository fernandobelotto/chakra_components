import { ChakraProvider } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { v4 } from "uuid";
import { Transfer } from "./index";
import { RecordType } from "./useTransfer";

export default {
  title: "Transfer",
  component: Transfer,
} as ComponentMeta<typeof Transfer>;

export const Basic: ComponentStory<typeof Transfer> = () => {
  const originalData: RecordType[] = [
    { key: v4(), content: "Rosa", group: "left" },
    { key: v4(), content: "Isaac", group: "left" },
    { key: v4(), content: "Kale", group: "left" },
    { key: v4(), content: "Samson", group: "left" },
    { key: v4(), content: "Kenton", group: "left" },
  ];

  const [dataSource, setDataSource] = useState(originalData);

  return (
    <ChakraProvider>
      <Transfer dataSource={dataSource} setDataSource={setDataSource} />
    </ChakraProvider>
  )
};
