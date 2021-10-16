import ImageFactory from './ImageFactory';
import VideoFactory from './VideoFactory';

export default class MediaFactory {
  constructor(mediaType, data, medias, onLikeChange) {
    if (mediaType === 'image') {
      return new ImageFactory(data, medias, onLikeChange);
    }
    if (mediaType === 'video') {
      return new VideoFactory(data, medias, onLikeChange);
    }

    throw new Error('Type de média non reconnu');
  }
}
