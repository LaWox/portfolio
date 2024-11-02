import { Typography } from "@mui/material";

export default function About() {
  return (
    <div
      id="about"
      className="mt-8 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen "
    >
      <Typography variant="h2" component="h1">
        Platon Woxer
      </Typography>
      <Typography variant="body1">Lite text om mig</Typography>
    </div>
  );
}
