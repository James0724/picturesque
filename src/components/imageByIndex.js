import image1 from "./carousel/cheetah-cub-gc81497814_1920.jpg";
import image2 from "./carousel/mammal-g115b7b61d_1920.jpg";
import image3 from "./carousel/rhino-g33e949cc8_1920.jpg";
import image4 from "./carousel/wildebeest-g2eb46f327_1920.jpg";

export const images = [image1, image2, image3, image4];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
