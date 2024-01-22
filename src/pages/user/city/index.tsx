import { useAppSelector } from "@/store/hook";
import { Box, Card, CardActionArea, Typography } from "@mui/material";
import Link from "next/link";

const UserCity = () => {
  const cities = useAppSelector((store) => store.city.items);
  if (!cities) return null;
  return (
    <Box>
      {cities.map((d) => (
        <Box sx={{ m: 1 }}>
          <Link
            href={`/user/city/${d.id}`}
            key={d.id}
            style={{ textDecoration: "none", marginTop: "1000px" }}
          >
            <CardActionArea
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: { xs: "center", md: "flex-start" },
                color: "primary.main",
                flexDirection: { xs: "column", sm: "row" },
                p: 1,
                boxShadow: 1,
              }}
            >
              <Box sx={{ width: { xs: "50%", sm: "30%" } }}>
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: { xs: "150px", md: "200px" },
                    borderRadius: 3,
                  }}
                  src="../Yangon.jpg"
                />
              </Box>
              <Box sx={{ width: { xs: "70%", sm: "40%" }, mt: 1 }}>
                <Typography
                  sx={{
                    fontSize: { xs: "0.8rem", md: "1.2rem" },
                    fontWeight: "bold",
                    mt: 1,
                    textAlign: "center",
                  }}
                >
                  {d.name.toLocaleUpperCase()}
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 2,
                    fontSize: { xs: "0.7rem", md: "1rem" },
                    mt: 2,
                  }}
                >
                  {d.description.substring(0, 200)} ...{" "}
                  <Typography
                    sx={{
                      display: "inline",

                      borderRadius: 2,
                      color: "success.main",
                      fontSize: { xs: "0.7rem", md: "1rem" },
                    }}
                  >
                    See more
                  </Typography>
                </Typography>
              </Box>
            </CardActionArea>
          </Link>
        </Box>
      ))}
    </Box>
  );
};
export default UserCity;