const path = require('path');
const screenshot = require('screenshot-desktop');
const { compressImage } = require('./compress');
const { server } = require('./server');

const emitImage = async () => {
  const imagePath = path.join(__dirname, 'pic.jpg');
  // const start = global.performance.now();

  const imgBuf = await screenshot({ format: 'png' });
  const resultImgBuf = await compressImage(imgBuf, imagePath);

  // console.log(global.performance.now() - start);

  server.emit('message', resultImgBuf);

  console.log('Done');
}

(async () => {
  setInterval(async () => {
    await emitImage();
  }, 1000);
})();
