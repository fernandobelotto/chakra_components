import { Box, Heading, Text } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import { v4 } from "uuid";
import CodeBlock from "../components/codeblock/codeblock";
import { Transfer } from "../components/transfer";

export interface RecordType {
  key: string;
  content: string;
  group: string;
  isSelected?: boolean;
}

const TransferPage = () => {
  const originalData: RecordType[] = [
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
  ];

  const [dataSource, setDataSource] = useState(originalData);

  return (
    <>
      <Heading>Transfer</Heading>
      <Box p={5} border="1px solid" rounded="lg" borderColor="gray.300">
        <Transfer dataSource={dataSource} setDataSource={setDataSource} />
      </Box>
      <CodeBlock>
        <Text>{transfer}</Text>
      </CodeBlock>
    </>
  );
};

var transfer = `
export const TransferUsage = () => {
  const originalData: RecordType[] = [
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
    { key: v4(), content: faker.name.firstName(), group: "left" },
  ];

  const [dataSource, setDataSource] = useState(originalData);

  return <Transfer dataSource={dataSource} setDataSource={setDataSource} />;
};
`;

export default TransferPage;
