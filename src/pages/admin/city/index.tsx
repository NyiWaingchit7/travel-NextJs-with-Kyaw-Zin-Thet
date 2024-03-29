import NewCity from "@/component/NewCIty";
import ItemCard from "@/component/cards/ItemCard";
import { useAppSelector } from "@/store/hook";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const City = () => {
  const [open, setOpen] = useState(false);
  const data = useAppSelector((store) => store.city.items);
  if (!data) return null;
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => setOpen(true)}
          size="small"
          sx={{ color: "info.main" }}
        >
          Add new City
        </Button>
      </Box>
      {data && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap",
            mt: 2,
          }}
        >
          {data.map((d) => (
            <ItemCard
              key={d.id}
              title={d.name}
              description={d.description}
              href={`/admin/city/${d.id}`}
              assetUrl={d.assetUrl || ""}
            />
          ))}
        </Box>
      )}
      <NewCity open={open} setOpen={setOpen} />
    </Box>
  );
};
export default City;
