import User from "../../models/user/User";
import bCrypt from "bcrypt";
import { Request, Response } from "express";
import { IUserModel } from "../../models/user/interfaceIUserModel";

const hashPassword = async (userPassword: string) => {
  try {
    const salt = await bCrypt.genSalt(10);
    const encryptedPassword = await bCrypt.hash(userPassword, salt);
    return encryptedPassword;
  } catch (err) {
    return console.error(err);
  }
};

export default {
  async register(req: Request, res: Response) {
    try {
      const { nomeDaBarbearia,endereco,nome,userEmail,senha,tipo }: IUserModel = req.body;
      console.log( nomeDaBarbearia,endereco,nome,userEmail,senha,tipo)

      let email_trim = userEmail.trim();
      let password = senha.replace(/\s/g, "");

      if (password.length < 6 && password.length > 0) {
        return res.status(400).send({ message: "A senha deve ter mais de 6 caracteres" });
      }

      if (!nome || !email_trim || !password) {
        return res.status(400).send({ message: "Por favor preencha todos os campos!" });
      }

      const searchEmail = await User.findOne<Promise<IUserModel>>({ userEmail: email_trim });
      if (searchEmail) {
        return res.status(400).send({ message: "Email em uso!" });
      }

      const hashedPassword = await hashPassword(password);

      const newUser = new User({
        nomeDaBarbearia,
        endereco,
        nome,
        userEmail: email_trim,
        senha: hashedPassword,
        tipo
      });

      newUser.save((error: any) => {
        if (error) {
          console.error(error);
          return res.status(400).send({ message: "Preencha os campos corretamente", error });
        } else {
          return res.status(200).send({ message: "Registrado(a) com sucesso!" });
        }
      });
    } catch (error) {
      throw res.status(500).send({ message: "Internal server error" });
    }
  },

  async buscarDados (req: Request, res: Response) {

      const {_id} = req.params;
      const procuraUsuario = await User.findById(_id);
      if(!procuraUsuario) {

        return res.status(404).send({ message: "Usuario não encontrado"});
      }
      return res.status(200).send(procuraUsuario);
  },
  async atualizarDadosUsuario (req: Request, res: Response) {
    const {_id} = req.params;
    const {nomeDaBarbearia,endereco,nome,email} = req.body;
    const procuraUsuario = await User.findByIdAndUpdate(_id,{
      $set:{nomeDaBarbearia,endereco,nome,email}
    })
    .then((response) => res.status(200).send(response))
    .catch(err => res.status(500).send(err));


  },
  async atualizarDadosUsuarioCliente (req: Request, res: Response) {
    const {_id} = req.params;
    const {nome,email} = req.body;
    
    const procuraUsuario = await User.findByIdAndUpdate(_id,{
      $set:{nome,email}
    })
    .then((response) => res.status(200).send(response))
    .catch(err => res.status(500).send(err));


  },
  async buscarBarbeiro(req: Request, res: Response) {
    try {
      const barbeiros = await User.find({ tipo: "barbeiro" });
      console.log(barbeiros);
      res.status(200).json(barbeiros);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar barbeiros", error });
    }
  },
  async buscarGeral(req: Request, res: Response) { 
      const procuraUsuario = await User.find();
      if(!procuraUsuario) {

        return res.status(404).send({ message: "Usuario não encontrado"});
      }
      return res.status(200).send(procuraUsuario);
  }
};