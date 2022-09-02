/**
 * Get path segments from a url path of the route
 * @param {string} urlPath
 * @return {array}
 */

export const urlPathToSegments = (urlPath: string): string[] => {
  const pathSegments = urlPath.split('/');
  pathSegments.shift();
  return pathSegments;
};
