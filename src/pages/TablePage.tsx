export { }
// import { Box, Heading, Text } from "@chakra-ui/react";
// import CodeBlock from "../components/codeblock/codeblock";
// // import { ChakraTable } from "../components/table";

// const TablePage = () => {
//   return (
//     <>
//       <Heading>Table</Heading>
//       <Box p={5} border="1px solid" rounded="lg" borderColor="gray.300">
//         <ChakraTable />
//       </Box>
//       <CodeBlock>
//         <Text>{table}</Text>
//       </CodeBlock>
//     </>
//   );
// };

// var table = `
// import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
// import { Table, Thead, Tr, Th, chakra, Tbody, Td } from "@chakra-ui/react";
// import React, { useMemo } from "react";
// import { useTable, useSortBy } from "react-table";
// export const ChakraTable = () => {
//   const data = useMemo(
//     () => [
//       {
//         fromUnit: "inches",
//         toUnit: "millimetres (mm)",
//         factor: 25.4,
//       },
//       {
//         fromUnit: "feet",
//         toUnit: "centimetres (cm)",
//         factor: 30.48,
//       },
//       {
//         fromUnit: "yards",
//         toUnit: "metres (m)",
//         factor: 0.91444,
//       },
//     ],
//     []
//   );

//   const columns = useMemo(
//     () => [
//       {
//         Header: "To convert",
//         accessor: "fromUnit",
//       },
//       {
//         Header: "Into",
//         accessor: "toUnit",
//       },
//       {
//         Header: "Multiply by",
//         accessor: "factor",
//         isNumeric: true,
//       },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data }, useSortBy);

//   return (
//     <Table {...getTableProps()}>
//       <Thead>
//         {headerGroups.map((headerGroup) => (
//           <Tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map((column) => (
//               <Th
//                 {...column.getHeaderProps(column.getSortByToggleProps())}
//                 isNumeric={column.isNumeric}
//               >
//                 {column.render("Header")}
//                 <chakra.span pl="4">
//                   {column.isSorted ? (
//                     column.isSortedDesc ? (
//                       <TriangleDownIcon aria-label="sorted descending" />
//                     ) : (
//                       <TriangleUpIcon aria-label="sorted ascending" />
//                     )
//                   ) : null}
//                 </chakra.span>
//               </Th>
//             ))}
//           </Tr>
//         ))}
//       </Thead>
//       <Tbody {...getTableBodyProps()}>
//         {rows.map((row) => {
//           prepareRow(row);
//           return (
//             <Tr {...row.getRowProps()}>
//               {row.cells.map((cell) => (
//                 <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
//                   {cell.render("Cell")}
//                 </Td>
//               ))}
//             </Tr>
//           );
//         })}
//       </Tbody>
//     </Table>
//   );
// };

// `;

// export default TablePage;
