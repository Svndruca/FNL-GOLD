import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box className="style__header">
      <img
        className="img__logofnlgold"
        src="/img/img-LogoFnlgold.jpg"
        alt="Logo Fnl Gold"
      />
      <ul className="p__hedaertext">
        <h2>Home</h2>
        <h2>Cartelera</h2>
        <h2>Roster</h2>
        <h2>Tienda</h2>
        <h2>Contáctanos</h2>
      </ul>
    </Box>
  );
}
