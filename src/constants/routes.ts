export const HOME_ROUTE = '/';

export const USER_INFO_ROUTE = '/user';

export const CONCEPTS_ROUTE = '/concepts';
export const NEW_CONCEPT_ROUTE = '/concepts/new';
export const CREATE_EDIT_CONCEPT_ROUTE = (conceptId: string) => `/concepts/${conceptId}`;
export const EDIT_CONCEPT_ROUTE = '/concepts/:conceptId';

export const DASHBOARD_ROUTE = '/dashboard';

export const UPLOAD_ROUTE = '/upload';

export const NO_MATCH_ROUTE = '*';
