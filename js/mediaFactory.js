import ImageFactory from './ImageFactory';
import VideoFactory from './VideoFactory';

export default class MediaFactory {
  constructor(mediaType, data,onLikeChange) {
    if (mediaType === 'image') {
      return new ImageFactory(data,onLikeChange);
    }
    if (mediaType === 'video') {
      return new VideoFactory(data,onLikeChange);
    }

    throw new Error('Type de média non reconnu');
  }
}
