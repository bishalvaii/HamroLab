import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SettingsIcon from '@mui/icons-material/Settings';

import ScienceIcon from '@mui/icons-material/Science';

const links = [
  { id: 1, text: 'Dashboard', path: '/', icon: <DashboardIcon/> },
  {id: 2, text: 'Lab' , path: 'lab' , icon: <ScienceIcon />},
  { id: 3, text: 'Doctors', path: 'doctors', icon: <PersonIcon/> },
  { id: 4, text: 'Patients', path: 'patients', icon: <GroupAddIcon /> },
  { id: 5, text: 'Service', path: 'services', icon: <MedicalServicesIcon /> },
  {id: 6, text: 'Settings', path: 'settings', icon: <SettingsIcon />},
];

export default links;