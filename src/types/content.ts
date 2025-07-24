interface BaseItem {
  id: number;
  title: string;
}

interface ImageItem {
  src: string;
  alt: string;
}

interface LeftContentItem extends BaseItem {
  breadCrumb: string;
}

interface TextItem {
  id: number;
  text: string;
}

export interface ContentProps {
  leftContent: LeftContentItem[];
  rightContent: BaseItem[];
  problem: TextItem[];
  challenge: TextItem[];
  solution: TextItem[];
  images: ImageItem[];
}
