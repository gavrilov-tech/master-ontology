export const REGEX = /.\/(csv)$/;

export const checkFileType = (type: string) => {
  return REGEX.test(type);
};
