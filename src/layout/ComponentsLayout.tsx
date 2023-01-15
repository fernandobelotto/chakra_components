import { Button } from "@chakra-ui/react";

import { Link, Outlet } from "react-router-dom";

const ComponentsLayout = () => {
  return (
    <>
      <Button
        as={Link}
        size="sm"
        textTransform="uppercase"
        fontSize="xs"
        to="/"
      >
        go back
      </Button>
      <Outlet />
    </>
  );
};

export default ComponentsLayout;
