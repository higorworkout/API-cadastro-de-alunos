import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 255],
            msg: "Nome precisa ter entre 3 e 255 caracteres."
          }
        }
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 255],
            msg: "Sobrenome precisa ter entre 3 e 255 caracteres."
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe.'
        },
        validade: {
          isEmail: {
            msg: "E-mail inválido."
          }
        }
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validade: {
          isInt: {
            msg: "Idade precisa ser um número inteiro."
          }
        }
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validade: {
          isFloat: {
            args: [3, 255],
            msg: "Peso precisa ser um número inteiro ou ponto flutuante."
          }
        }
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validade: {
          isFloat: {
            msg: "Altura precisa ser um número inteiro ou ponto flutuante."
          }
        }
      },
    }, {
      sequelize,
    });

    return this;
  }

}



