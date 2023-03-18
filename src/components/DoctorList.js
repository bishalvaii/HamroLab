import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/system';
import { Typography ,Button} from '@mui/material';
import { Link } from 'react-router-dom';

export default function DoctorList() {
  return (
    <>
    <Typography variant='h4'>Our Doctors</Typography>
    <Link to ="/doctors/create"> <Button>Create new doctor</Button> </Link>
    <ImageList sx={{ width: 750, height: 650 ,}} cols={3} rowHeight={250}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{m:  3    }}>
          <img
            src={`${item.img}?w=180&h=180&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <Box sx={{ height: '50px'}} >
          <p><b>{item.title}</b></p>
          <p>{item.depart}</p>
          </Box>
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
}

const itemData = [
  {
    img: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg',
    title: 'Sujeeta Sharma',
    depart: 'Neurologist'
  },
  {
    img: 'https://img.freepik.com/free-photo/doctor-with-white-robe-stethoscope_144627-43878.jpg',
    title: 'Rubina Rana',
    depart: 'Neurologist'
   
  },
  {
    img: 'https://thumbs.dreamstime.com/b/caucasian-male-smiling-doctor-happy-mature-doctor-white-coat-stethoscope-smiling-looking-camera-caucasian-male-131927441.jpg',
    title: 'Camera',
    depart: 'Neurologist'
  },
  {
    img: 'https://cdn.create.vista.com/api/media/small/138445770/stock-photo-male-doctor-in-hospital',
    title: 'Bikram Singh',
    depart: 'Neurologist'
  },
  {
    img: 'https://t4.ftcdn.net/jpg/00/58/33/17/360_F_58331714_RO7gYyfIE19CcD9MzJZxwEqqeetvtyhA.jpg',
    title: 'Hari Khadka',
    depart: 'Pathologist'
  },
  {
    img: 'https://cdn.create.vista.com/api/media/small/138445604/stock-photo-male-doctor-in-hospital',
    title: 'Sanjay Poudel',
    depart: 'Cardiologist'
  },
  {
    img: 'https://images.fineartamerica.com/images-medium-large-5/male-doctor-smiling-towards-camera-science-photo-library.jpg',
    title: 'Aashish Subedi',
    depart: 'Neurologist'
  },
  {
    img: 'https://t4.ftcdn.net/jpg/03/16/45/01/360_F_316450120_ZFImh7yCLYa4LTdGU68yiYqmFR91RV6r.jpg',
    title: 'Sozu Pokhrel',
    depart: 'Dentist'
  },
  {
    img: 'https://t3.ftcdn.net/jpg/02/74/03/26/360_F_274032618_OhzkPv4gkPC7pIumPDQYlILKH6eB28WH.jpg',
    title: 'Asmita Giri',
    depart: 'Dermatologist'
  },
  {
    img: 'https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg',
    depart: 'Cardiologist',
    title: 'Nandita Adhikari',
  },
 
];