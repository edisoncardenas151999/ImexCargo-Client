import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ItemCard({ data }) {
  const arrivalDays = data?.createdAt?.slice(5, 7);
  const arrivalCalc = new Date().getDate() - arrivalDays;

  const arrival = data?.arrival_time - arrivalCalc;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data?.imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          <p>{data?.title}</p>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          <p>Arriving in {arrival} days</p>
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Comfortable: This is a must-have quality for any piece of furniture.
          After all, what’s the point of having furniture if it isn’t
          comfortable? We recommend checking out couches, chairs, and ottomans
          that are specifically designed for comfort.
        </Typography>
      </CardContent>
    </Card>
  );
}
