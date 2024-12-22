import multer from 'multer';

import multerConfig from '../config/multerConfig';

import Photo from '../model/Photo';

const upload = multer(multerConfig).single('foto')

class PhotoController {
  store(req, res) {
      return upload(req, res, async (err) => {
          if(err) {
            return res.status(400).json({
              errors: [err],
            })
          }
          try {
            const { originalname, filename } = req.file;
            const { aluno_id } = req.body;

            const foto = await Photo.create({ originalname, filename, aluno_id });

            return res.json(foto);
          } catch(e) {
             return res.status(400).json({
               errors: ['Aluno não existe', e.parent.name]
             })
          }
      });
    }
  }

export default new PhotoController();

