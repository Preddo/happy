import Image from "../models/Image";
import uploadConfig from "../config/upload";

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: process.env.STORAGE_TYPE === "local"
        ? `${process.env.API_URL}/uploads/${image.url}`
        : `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${image.url}`
    }
  },

  renderMany(images: Image[]){
    return images.map(image => this.render(image))
  }
}
