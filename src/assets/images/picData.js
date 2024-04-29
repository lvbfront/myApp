// src/assets/images/picData.js
import mewing from './Mewing.jpg';
import killer from './manip.jpg';
import goofy from './goofy.jpg'; // Fixed: Added the file extension

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
};
