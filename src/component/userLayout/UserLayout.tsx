import { Box } from "@mui/material";
import { ReactNode } from "react";
interface prop {
  children: ReactNode;
}

const UserLayout = ({ children }: prop) => {
  return (
    <Box>
      this is userlayout
      <Box sx={{ width: "100%" }}>{children}</Box>
    </Box>
  );
};
export default UserLayout;