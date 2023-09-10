import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const HomePage = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left  "
        src="https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
      />
      <div className="w-full h-screen absolute top-24  bg-[#bfdbfe]/30 ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center ">
          <h1 className="sm:text-6xl text-5xl  font-semibold text-[#f8fafc]  animate-fade ">
            Welcome to Imex Cargo
          </h1>
          <h5 className="p-10 mt-40 w-screen h-30  sm:text-lg tracking-wider text-lg  font-semibold text-[#f8fafc] bg-sky-900 bg-opacity-75  animate-fade ">
            ImEx Cargo provides comprehensive logistics services for shippers
            and supports airline partners as GSA/GSSA for New England, New York,
            New Jersey & Philadelphia. ImEx Cargo offers advantages for
            companies and government agencies by leveraging our relationships
            with strategic partners and logistics professionals to fulfill
            supplier diversity opportunities and goals.
          </h5>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-2 gap-12 p-10  ">
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              sx={{ height: 200 }}
              image="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                WAREHOUSING
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our integrated solutions include Warehousing, Pick and Pack,
                Consolidation, and Distribution Services, Cargo Screening/
                General Order (G.O.).
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              sx={{ height: 200 }}
              image="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Certified
              </Typography>
              <Typography variant="body2" color="text.secondary">
                As a certified Woman-Owned Business owner in the industry, we
                offer contracting benefits available from local, state and
                federal agencies.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              sx={{ height: 200 }}
              image="https://images.unsplash.com/photo-1602258125130-19197c6dd4b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CHARTER
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ImEx Cargo tailors charter solutions to your meet specific
                requirements. Whether you need to transport time- critical
                cargo, hazardous materials, perishable products or oversized
                freight.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              sx={{ height: 200 }}
              image="https://images.unsplash.com/photo-1575470522418-b88b692b8084?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2976&q=80"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                We Build
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We Build We build and grow lasting relationships with Customers/
                Agents / Airlines and Partners alike from around the world to
                deliver best in class service.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
