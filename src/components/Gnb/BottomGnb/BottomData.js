// > icon images
import userIcon from '../../../assets/icons/user.png';
import folderIcon from '../../../assets/icons/folder.png';
import noteIcon from '../../../assets/icons/notes.png';
import calendarIcon from '../../../assets/icons/calendar.png';
import instagramIcon from '../../../assets/icons/instagram.png';
import appleTvIcon from '../../../assets/icons/apple-tv.png';

const BottomData = [
  {
    id: 0,
    title: 'profile',
    imageUrl: `${userIcon}`,
    path: '/profile'
  },
  {
    id: 1,
    title: 'project',
    imageUrl: `${folderIcon}`,
    path: '/project',
  },
  {
    id: 2,
    title: 'note',
    imageUrl: `${noteIcon}`
  },
  {
    id: 3,
    title: 'calendar',
    imageUrl: `${calendarIcon}`
  },
  {
    id: 4,
    title: 'instagram',
    imageUrl: `${instagramIcon}`,
  },
  {
    id: 5,
    title: 'apple-tv',
    imageUrl: `${appleTvIcon}`
  },
]

export default BottomData;