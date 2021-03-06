const config = require('config/config');
const multer = require('koa-multer');
const router = require('koa-router')();
const controller = require('./playlist.controller');

const storage = multer.diskStorage({
  destination: (request, file, cb) => cb(null, config.pathToServe),
  filename: (request, file, cb) => {
    cb(null, `${Date.now()}.${file.originalname.split('.').pop()}`);
  },
});

const limits = {
  fileSize: 5 * 1000000, // 5Mb
};

const upload = multer({ storage, limits });

router.get('/', controller.getPlaylists);
router.get('/:playlistId', controller.getPlaylistById);
router.post('/add', controller.addPlaylist);
router.post('/cover', upload.single('image'), controller.uploadPlaylistCover);
router.post('/track', controller.addTrackToPlaylist);
router.put('/:playlistId', controller.updatePlaylist);
router.del('/:playlistId', controller.deletePlaylist);

module.exports = router.routes();
