import { Transform } from 'class-transformer';

export const ParseImageByType = (type: string) =>
  Transform(({ obj }) => {
    return obj?.images?.find((image) => image.type === type);
  });
