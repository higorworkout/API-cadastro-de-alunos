import jwt from 'jsonwebtoken';
import User from '../model/User';

export default async (req, res, next) => {
   let { authorization } = req.headers;

   if(!authorization) {
     return res.status(401).json({
       error: ['Login required'],
     })
   }

   // const [text, token] = authorization.split(' ');
   const token = authorization.split(' ')[1];

   try {
      const dados = jwt.verify(token, process.env.TOKEN_SECRET)
      const { id, email } = dados;

      const user = await User.findOne({
        where: {
          id,
          email,

        }
      })

      if(!user) {
        return res.status(401).json({
          errors: ['Usuário invalido'],
        })
      }

      req.userId = id;
      req.userEmail = email;

      return next();
   } catch(e) {
      return res.status(401).json({
        errors: ['Token expirado ou inválido'],
      })
   }
};
