import React from "react";
import { Box, Typography, Divider, Tooltip, Grid } from "@mui/material";
import { useProductContext } from "../contexts/ProductContext";

const CartDropdown: React.FC = () => {
  const { cart } = useProductContext();

  const headerStyle = {
    fontWeight: "bold",
    fontSize: "0.9rem",
    color: "black",
    textAlign: "center",
  };

  const cellStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "black",
    textAlign: "center",
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: { xs: "auto", sm: "100%" },
        bottom: { xs: "100%", sm: "auto" },
        right: 0,
        width: "300px",
        bgcolor: "background.paper",
        boxShadow: 3,
        p: 2,
        zIndex: 3,
        maxHeight: "400px",
        overflowY: "auto",
        borderRadius: "5px",
      }}
    >
      {/* Header */}
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography sx={headerStyle}>商品名稱</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={headerStyle}>顏色</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={headerStyle}>尺寸</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={headerStyle}>數量</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ my: 1 }} />

      {/* Items */}
      {cart.map((item, index) => (
        <Grid container spacing={0.5} key={index} sx={{ mb: 1 }}>
          <Grid item xs={6}>
            <Tooltip title={item.title} arrow>
              <Typography variant="body2" sx={cellStyle}>
                {item.title}
              </Typography>
            </Tooltip>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" sx={cellStyle}>
              {item.color || "N/A"}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" sx={cellStyle}>
              {item.size || "N/A"}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" sx={cellStyle}>
              {item.quantity}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default CartDropdown;
