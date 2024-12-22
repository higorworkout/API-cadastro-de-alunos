import Aluno from '../model/Aluno';
import Photo from '../model/Photo';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura']
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const newAluno = await Aluno.create(req.body);

      return res.json(newAluno)

    } catch(e) {
        return res.status(400).json({errors: e.errors.map(err => err.message)});
    }

  }


  async show(req, res) {
    try {
      const { id } = req.params

      if(!id) {
        return res.status(400).json({
          error: ['Faltando ID'],
        })
      }

      const aluno = await Aluno.findByPk(id);

      if(!aluno) {
        return res.status(400).json({
          error: ['Aluno não existe'],
        })
      }
      return res.json(aluno);

    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  // Update

  async update(req, res) {
    try {
      const { id } = req.params;
      const user = await Aluno.findByPk(id);

      if(!user) {
        return res.status(400).json({ errors: ['Usuario não existe']});
      }

      const updatedAluno = await Aluno.update(req.body);

      console.log(updatedAluno);

      return res.json(updatedAluno);

    } catch(e) {
      return res.json(e)
    }
  }

  async delete(req, res) {

    try {
      const { id } = req.params;

      if(!id) {
        return res.status(400).json({
          error: ['Faltando ID'],
        })
      }

      const aluno = await Aluno.findByPk(id);

      if(!aluno) {
        return res.status(400).json({
          error: ['Aluno não existe'],
        })
      }

      await aluno.destroy();
      return res.json({
        message: true
      });

    } catch(e) {
      return res.json(e)
    }

  }

}


export default new AlunoController();



  //async index(req, res) {
   // const alunos = await Aluno.findAll({
   //   attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
   //   order: [['id', 'DESC'], [ Photo, 'id', 'DESC']],
   //   include: {
   //     model: Photo,
   //     attributes: ['filename'],
   //   }
   // });
   // res.json(alunos);
