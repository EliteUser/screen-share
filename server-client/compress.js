const sharp = require('sharp');

const compressImage = async (buffer) => {
  return await sharp(buffer)
    .resize(1600)
    .jpeg({ quality: 60 })
    .toBuffer();
}

module.exports = {
  compressImage,
};

