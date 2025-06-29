// src/assets/images/picData.js
import mewing from './Mewing.jpg';
import killer from './manip.jpg';
import goofy from './goofy.jpg'; // Fixed: Added the file extension
import aka from './aka.jpg';
import reactt from './reactt.png';
import MalariaAc from './MalariaAc.png';
import MalariaRe from './MalariaRe.png';
import numberRe from './numberRe.png'
import numberM from './numberM.png'
import Logo from './Logo.webp'
import number from './number.png'
import Malaria from './Malaria.png'
import AIThingy from './AIThingy.jpg'
import python from './Python.svg.png'
import tail from './tail.png'
import sql from './SQL.png'
import tf from './tf.png'
import ring from './ring.jpg'


const carouselData = [
  { title: 'meeewing', imageSrc: mewing },
  { title: 'manipolater', imageSrc: killer },
  { title: 'gooofy apple', imageSrc: goofy },
  // Add more items as needed...
];

export default carouselData;

// The export below seems redundant if you're already exporting the data as default
// but if you need to export images for other uses, you can keep this.
export {
  mewing,
  killer,
  goofy,
  aka,
  reactt,
  MalariaAc,
  MalariaRe,
  numberM,
  numberRe,
  number,
  Logo,
  Malaria,
  AIThingy,
  python,
  tail,
  sql,
  tf,
  ring
  
  
  
};
