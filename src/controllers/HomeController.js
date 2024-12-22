import Aluno from '../model/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz',
      sobrenome: 'Otavio',
      email: 'luiz@teste.com',
      idade: 50,
      peso: 300,
      altura: 2,
    });
    res.json(novoAluno)
  }
}


export default new HomeController();