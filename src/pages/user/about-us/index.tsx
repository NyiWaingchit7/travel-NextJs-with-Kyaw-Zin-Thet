import { Box, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        mt: 2,
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ boxShadow: 2, padding: 1 }}>
        <Box sx={{ maxWidth: "1100px", mx: 2, mt: 2 }}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            What do we do?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "primary.light",
              ml: 2,
              fontSize: { xs: "0.6rem", sm: "1rem" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            voluptas aliquid accusantium expedita quam veniam nihil fugit sequi
            aut, et nostrum at voluptatum, labore ipsa aperiam facere ex quidem
            libero? Consequatur maxime quaerat placeat quae. Repudiandae impedit
            beatae numquam ipsum voluptatibus neque, ad expedita harum accusamus
            rerum soluta quisquam at doloremque eveniet eius laborum vero id
            corrupti reiciendis quia aperiam. Eum quia laudantium earum atque
            animi culpa aperiam quas nemo maiores laborum sed soluta, placeat
            velit neque in molestias ipsa iste. A tenetur placeat ea, ab veniam
            quam enim sint.
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "1100px", mx: 2, mt: 2 }}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            What is the purpose of the web?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "primary.light",
              ml: 2,
              fontSize: { xs: "0.6rem", sm: "1rem" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            voluptas aliquid accusantium expedita quam veniam nihil fugit sequi
            aut, et nostrum at voluptatum, labore ipsa aperiam facere ex quidem
            libero? Consequatur maxime quaerat placeat quae. Repudiandae impedit
            beatae numquam ipsum voluptatibus neque, ad expedita harum accusamus
            rerum soluta quisquam at doloremque eveniet eius laborum vero id
            corrupti reiciendis quia aperiam. Eum quia laudantium earum atque
            animi culpa aperiam quas nemo maiores laborum sed soluta, placeat
            velit neque in molestias ipsa iste. A tenetur placeat ea, ab veniam
            quam enim sint.
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "1100px", mx: 2, mt: 2 }}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            What can we support for user?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "primary.light",
              ml: 2,
              fontSize: { xs: "0.6rem", sm: "1rem" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            voluptas aliquid accusantium expedita quam veniam nihil fugit sequi
            aut, et nostrum at voluptatum, labore ipsa aperiam facere ex quidem
            libero? Consequatur maxime quaerat placeat quae. Repudiandae impedit
            beatae numquam ipsum voluptatibus neque, ad expedita harum accusamus
            rerum soluta quisquam at doloremque eveniet eius laborum vero id
            corrupti reiciendis quia aperiam. Eum quia laudantium earum atque
            animi culpa aperiam quas nemo maiores laborum sed soluta, placeat
            velit neque in molestias ipsa iste. A tenetur placeat ea, ab veniam
            quam enim sint.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default AboutUs;
