import User from '../model/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email} = novoUser;
      return res.json({ id, nome, email })

    } catch(e) {
        return res.status(400).json({errors: e.errors.map(err => err.message)});
    }

  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch(e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const idp = req.params.id

      const user = await User.findByPk(idp);

      const { id, nome, email} = user;
      return res.json({ id, nome, email});
    } catch(e) {
      return res.json(null);
    }
  }

  // Update

  async update(req, res) {
    try {

      const user = await User.findByPk(req.userId);
      console.log(user);


      if(!user) {
        return res.status(400).json({ errors: ['Usuario não existe']});
      }

      const newData = await user.update(req.body);
      const { id, nome, email} = newData
      return res.json({ id, nome, email });

    } catch(e) {
      return res.json(e)
    }
  }

  async delete(req, res) {
    try {

      const user = await User.findByPk(req.userId);
      console.log(user);


      if(!user) {
        return res.status(400).json({ errors: ['Usuario não existe']});
      }

      await user.destroy();
      return res.json(null);

    } catch(e) {
      return res.json(e)
    }
  }


}


export default new UserController();
