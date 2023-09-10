import ContactForm from "../Components/ContactForm";
import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Contact = () => {
  return (
    <div>
      <div className="App w-6/12 ml-10">
        <header className="App-header">
          <div className="py-6">
            <ContactForm />
          </div>
        </header>
      </div>
      <div className="ml-10">
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://scontent.xx.fbcdn.net/v/t1.15752-9/375647774_614785657481581_9009349956985778733_n.png?stp=dst-png_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=pEsiN-xiWN0AX968Bsj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTLGnf_oheOVk7fbOINykwJD_3X1-v2JAFyLIpTyulnfg&oe=6524BCB5"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Contact Us!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Call. 617-718-4639 Email. group@imexcargo.com Address. 1R Newbury
              Street, Peabody, MA 01960
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
