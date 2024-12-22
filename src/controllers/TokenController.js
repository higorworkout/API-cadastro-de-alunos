import User from '../model/User';
import jwt from 'jsonwebtoken';

class TokenController {
  async store(req, res) {
    const { email = '', password = ''} = req.body;

    if (!email || !password) {
        return res.status(401).json({ errors: ['Credential invalid'] });
    }

    const user = await User.findOne({ where: { email }});

    if(!user) {
      return res.status(401).json({ errors: ['User do not exist'] });
    }

    if(!( await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida']
      })
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION
    });
    res.json({ token });
  }
}


export default new TokenController();
