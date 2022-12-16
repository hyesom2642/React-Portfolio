// > icon images
import batteryIcon from '../../../assets/icons/battery.png';
import wifiIcon from '../../../assets/icons/wifi.png';
import searchIcon from '../../../assets/icons/search.png';

const LeftData = [
  {
    id: 0,
    title: '파일',
  },
  {
    id: 1,
    title: '편집',
  },
  {
    id: 2,
    title: '보기',
  },
  {
    id: 3,
    title: '이동',
  },
  {
    id: 4,
    title: '윈도우',
  },
  {
    id: 5,
    title: '도움말',
  },
];

const RightData = [
  {
    id: 0,
    title: 'battery',
    imageUrl: `${batteryIcon}`
  },
  {
    id: 1,
    title: 'wifi',
    imageUrl: `${wifiIcon}`
  },
  {
    id: 2,
    title: 'search',
    imageUrl: `${searchIcon}`
  },
]

export { LeftData, RightData };