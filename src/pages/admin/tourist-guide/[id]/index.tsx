import NewTouristGuide from "@/component/NewTouristGuide";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import {
  deleteTouristGuide,
  getTouristGuide,
  updateTouristGuide,
} from "@/store/slices/touristGuideSlice";
import { fileUpload } from "@/utils/fileUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Typography } from "@mui/material";
import { TouristGuide } from "@prisma/client";
import { useRouter } from "next/router";
import { useState } from "react";

const TouristGuideDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const touristGuides = useAppSelector((store) => store.touristGuide.items);
  const data = touristGuides.find((item) => item.id === id) as TouristGuide;
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const handleUpdateImage = async (e: any) => {
    const image = e.target.files[0];

    const assetUrl = await fileUpload(image);
    console.log(assetUrl);

    dispatch(
      updateTouristGuide({
        ...data,
        assetUrl,
        onSuccess: () => {
          dispatch(getTouristGuide());
        },
      })
    );
  };
  const onSuccess = () => {
    dispatch(getTouristGuide());
    router.push("/admin/tourist-guide");
  };
  if (!data) return null;
  return (
    <Box>
      <Box
        sx={{
          width: { xs: "100%", md: "85%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          mt: 5,
        }}
      >
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => setOpen(true)}
        >
          <EditIcon />
        </Button>
        <Button
          size="small"
          variant="contained"
          color="success"
          sx={{ mx: 1 }}
          onClick={() => {
            dispatch(
              deleteTouristGuide({
                id,
                onSuccess,
              })
            );
          }}
        >
          <DeleteIcon />
        </Button>
      </Box>
      <Box
        sx={{
          width: { xs: "90%", sm: "70%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: { xs: "80%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 3,
            p: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              p: 1,
              mb: 1,
              borderRadius: 3,
              boxShadow: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{ width: "100%", height: "300px", borderRadius: 3 }}
              src={data.assetUrl || "/default-image.jpg"}
            />
            <Button
              variant="outlined"
              component="label"
              sx={{ width: "fit-content", mt: 2 }}
              size="small"
            >
              Upload File
              <input
                type="file"
                hidden
                onChange={(e) => {
                  handleUpdateImage(e);
                }}
              />
            </Button>
          </Box>
        </Box>{" "}
        <Box
          sx={{
            p: 2,
            mt: 3,
            bgcolor: "info.main",
            width: "100%",
            borderRadius: 3,
            boxShadow: 2,
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", textAlign: "center", fontSize: "1.3rem" }}
          >
            {data.name}
          </Typography>
          <Typography sx={{ fontSize: 16, mt: 3 }}>
            Language : {data.language}
          </Typography>
          <Typography sx={{ fontSize: 16, mt: 3 }}>
            Phone Number : {data.phoneNumber}
          </Typography>
          <Typography sx={{ fontSize: 16, mt: 3 }}>
            Price : {data.price}
          </Typography>
        </Box>
      </Box>
      <NewTouristGuide open={open} setOpen={setOpen} touristGuideData={data} />
    </Box>
  );
};
export default TouristGuideDetail;
