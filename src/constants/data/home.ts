import {
  ACCOUNT_INFO_ICON,
  CUBE_ICON,
  FOLDER_ICON,
  XLS_FILE_ICON,
} from '../../assets/icons/Icon';
import { GalleryItem } from '../../types';
import { CONCEPTS_ROUTE, NEW_CONCEPT_ROUTE, UPLOAD_ROUTE, USER_INFO_ROUTE } from '../routes';

export const getGalleryItems: GalleryItem[] = [
    {
      iconName: ACCOUNT_INFO_ICON,
      title: 'User Info',
      description: 'User Info',
      linkText: 'View Information',
      route: USER_INFO_ROUTE,
    },
    {
      iconName: CUBE_ICON,
      title: 'Concepts',
      description: 'Concepts',
      linkText: 'View Information',
      route: CONCEPTS_ROUTE,
    },
    {
      iconName: FOLDER_ICON,
      title: 'Add New Concept',
      description: 'Add New Concept',
      linkText: 'View Information',
      route: NEW_CONCEPT_ROUTE,
    },
    {
      iconName: XLS_FILE_ICON,
      title: 'Upload File',
      description: 'Upload File',
      linkText: 'View Information',
      route: UPLOAD_ROUTE,
    },

  ];
