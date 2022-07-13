import { formatDistanceToNow, subHours } from "date-fns";
import { v4 as uuid } from "uuid";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
 
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const products = [
  {
    id: uuid(),
    name: "Neurology",
    imageUrl: "https://static.thenounproject.com/png/867650-200.png",
    rate: "20%",
  },
  {
    id: uuid(),
    name: "Radiology",
    imageUrl:
      "https://cdn.imgbin.com/14/8/21/imgbin-computer-icons-x-ray-hospital-xray-tube-n8XsV7rAUwtVjzvVa29asrixZ.jpg",
    rate: "50%",
  },
  {
    id: uuid(),
    name: "Cardiology",
    imageUrl:
      "https://cdn.imgbin.com/3/19/1/imgbin-computer-icons-cardiology-icon-design-medicine-heart-qvEqpcZiCSGjm0eHbTmJXPgs5.jpg",
    rate: "40%",
  },
  {
    id: uuid(),
    name: "Dermatology",
    imageUrl: "https://static.thenounproject.com/png/603-200.png",
    rate: "60%",
  },
  {
    id: uuid(),
    name: "Gynocology",
    imageUrl:
      "https://icon-library.com/images/gynecology-icon/gynecology-icon-17.jpg",
    rate: "35%",
  },
];

export const ClinicFollowUp = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Follow up by Department"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem divider={i < products.length - 1} key={product.id}>
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48,
              }}
            />
          </ListItemAvatar>
          <ListItemText primary={product.name} />
          <ListItemText primary={product.rate} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);