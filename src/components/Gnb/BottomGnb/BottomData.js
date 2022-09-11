import userIcon from '../../../assets/icons/user.png';
import folderIcon from '../../../assets/icons/folder.png';
import noteIcon from '../../../assets/icons/notes.png';
import calendarIcon from '../../../assets/icons/calendar.png';
import instagramIcon from '../../../assets/icons/instagram.png';
import appleTvIcon from '../../../assets/icons/apple-tv.png';

const BottomData = [
  {
    title: 'profile',
    imageUrl: `${userIcon}`,
    path: '/profile'
  },
  {
    title: 'project',
    imageUrl: `${folderIcon}`,
    path: '/project',
  },
  {
    title: 'note',
    imageUrl: `${noteIcon}`
  },
  {
    title: 'calendar',
    imageUrl: `${calendarIcon}`
  },
  {
    title: 'instagram',
    imageUrl: `${instagramIcon}`,
  },
  {
    title: 'apple-tv',
    imageUrl: `${appleTvIcon}`
  },

]

export default BottomData;