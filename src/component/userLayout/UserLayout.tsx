import { useAppDispatch } from "@/store/hook";
import { userAppData } from "@/store/slices/appSlice";
import { Box } from "@mui/material";
import { ReactNode, useEffect } from "react";
import UserFooter from "./UserFooter";
import UserNavBar from "./UserNavBar";
interface prop {
  children: ReactNode;
}

const UserLayout = ({ children }: prop) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(userAppData());
  }, []);
  return (
    <Box>
      <UserNavBar />
      <Box sx={{ width: "100%" }}>{children}</Box>
      <UserFooter />
    </Box>
  );
};
export default UserLayout;
