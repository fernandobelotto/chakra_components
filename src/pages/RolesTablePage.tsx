import { Box, Heading, Text } from "@chakra-ui/react";
import CodeBlock from "../components/codeblock/codeblock";
import RolesTable from "../components/roles-table/RolesTable";

const RolesTablePage = () => {
  const mockData = [
    {
      entity: "Users",
      key: "user_permissions",
      read: true,
      write: false,
      update: true,
      deleteKey: false,
    },
    {
      entity: "Products",
      key: "product_permissions",
      read: false,
      write: true,
      update: false,
      deleteKey: true,
    },
    {
      entity: "Orders",
      key: "order_permissions",
      read: true,
      write: true,
      update: true,
      deleteKey: false,
    },
    {
      entity: "Invoices",
      key: "invoice_permissions",
      read: true,
      write: false,
      update: false,
      deleteKey: false,
    },
  ];

  return (
    <>
      <Heading>Roles Table</Heading>
      <Box p={5} border="1px solid" rounded="lg" borderColor="gray.300">
        <RolesTable data={mockData} />
      </Box>
      <CodeBlock>
        <Text>{code}</Text>
      </CodeBlock>
    </>
  );
};

var code = `import { Checkbox, Table, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import React, { useState } from "react";

const columns = ["Entity", "Read", "Write", "Update", "Delete"];

interface Permission {
  entity: string;
  key: string;
  read: boolean;
  write: boolean;
  update: boolean;
  deleteKey: boolean;
  [permission: string]: boolean | string;
}

const RolesTable = ({ data }: { data: Permission[] }) => {
  const [permissions, setPermissions] = useState(data);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
    permission: string
  ) => {
    const newPermissions = [...permissions];
    const index = newPermissions.findIndex((p) => p.key === key);

    newPermissions[index][permission] = e.target.checked;

    if (permission === "read" && !e.target.checked) {
      newPermissions[index].write = false;
      newPermissions[index].update = false;
      newPermissions[index].deleteKey = false;
    }
    if (permission === "write" && e.target.checked) {
      newPermissions[index].read = true;
    }
    if (permission === "update" && e.target.checked) {
      newPermissions[index].read = true;
    }
    if (permission === "deleteKey" && e.target.checked) {
      newPermissions[index].read = true;
    }

    setPermissions(newPermissions);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {permissions.map(({ entity, key, read, write, update, deleteKey }) => (
          <Tr key={key}>
            <Td>{entity}</Td>
            <Td>
              <Checkbox
                isChecked={read}
                onChange={(e) => handleChange(e, key, "read")}
              />
            </Td>
            <Td>
              <Checkbox
                isChecked={write}
                onChange={(e) => handleChange(e, key, "write")}
              />
            </Td>
            <Td>
              <Checkbox
                isChecked={update}
                onChange={(e) => handleChange(e, key, "update")}
              />
            </Td>
            <Td>
              <Checkbox
                isChecked={deleteKey}
                onChange={(e) => handleChange(e, key, "deleteKey")}
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default RolesTable;`;

export default RolesTablePage;
