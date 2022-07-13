import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'We offers various Medical Services in our hospital . Along with the trained and qualified medical professionals ',
    media: 'https://static.thenounproject.com/png/3381233-200.png',
    title: 'Medical Services',
    
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'We offers various Surgical Services. Surgery is a critical job and must be done with very carefullness    ',
    media: 'https://icon-library.com/images/operation-icon/operation-icon-21.jpg',
    title: 'Surgical Services',
 
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'We provides all the lab services to our patients. We can maintained and improvised labroratories',
    media: 'https://www.pngfind.com/pngs/m/320-3202612_laboratory-services-icon-hd-png-download.png',
    title: 'Labrotary Services',
    
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Paediatric services involves the treatment of the kids or infants with our specialized doctors in the field',
    media: 'https://w7.pngwing.com/pngs/307/686/png-transparent-pediatrics-computer-icons-family-medicine-physician-family-medicine-doctor-child-care-icon-miscellaneous-child-text.png',
    title: 'Paediatric Services',
    
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Radiology services are offered by us to every patients . It includes xray, ctscan and other scans on our body',
    media: 'https://icon2.cleanpng.com/20180224/wle/kisspng-x-ray-computed-tomography-health-care-icon-doctor-ct-silhouette-cartoon-5a91041b37b731.2909812115194532112282.jpg',
    title: 'Radiology Services',
    
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'If you are suffering from any kind of physical and mental disease and feel free to share with us for services',
    media: 'https://cdn.imgbin.com/11/20/9/imgbin-physical-therapy-computer-icons-manual-therapy-therapy-iEvdiMvrFen3TsgkfDbbNXyZ0.jpg',
    title: 'Rehabilitation Services',
    
  }
];