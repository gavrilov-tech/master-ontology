export type Concept = {
  _id?: string,
  conceptId: number;
  displayName: string;
  description: string;
  parentIds: string | null;
  childIds: string;
  alternateNames: string | null;
};

export type GalleryItem = {
  iconName: string,
  title: string,
  description: string,
  linkText: string,
  route: string,
};
