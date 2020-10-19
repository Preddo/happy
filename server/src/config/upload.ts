import multerS3 from 'multer-s3';
import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import aws from 'aws-sdk';

const storageTypes = {
  local: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, file.originalname);

        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, fileName);
      })
    },
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: "orphanage-storage",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, file.originalname);

        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, fileName);
      })
    }
  })
}

export default {
  dest: path.resolve(__dirname, "..", "..", "uploads"),
  storage: process.env.STORAGE_TYPE === 'local'
    ? storageTypes.local
    : storageTypes.s3,
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (req: any, file: { mimetype: string; }, callback: any) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Invalid file type."), undefined);
    }
  },
  config: {
    aws: {
      bucket: 'orphanage-storage'
    }
  }
}
