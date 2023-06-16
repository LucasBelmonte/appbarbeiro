import Cliente from "../../models/cliente/Cliente";
import bCrypt from "bcrypt";
import { Request, Response } from "express";
import { ClienteModel } from "../../models/cliente/interfaceClienteModel";

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
  async registeCliente(req: Request, res: Response) {
    try {
      const {nomeDaBarbearia,endereco, nome,email,senha,tipo }: ClienteModel = req.body;
      // const { nome,email,senha,tipo }: ClienteModel = req.body;
      console.log( nome,email,senha,tipo)

      let email_trim = email.trim();
      let password = senha.replace(/\s/g, "");

      if (password.length < 6 && password.length > 0) {
        return res.status(400).send({ message: "A senha deve ter mais de 6 caracteres" });
      }

      if (!nome || !email_trim || !password) {
        return res.status(400).send({ message: "Por favor preencha todos os campos!" });
      }

      const searchEmail = await Cliente.findOne<Promise<ClienteModel>>({ email: email_trim });
      if (searchEmail) {
        return res.status(400).send({ message: "Email em uso!" });
      }

      const hashedPassword = await hashPassword(password);

      
      const newCliente = new Cliente({
        nomeDaBarbearia,
        endereco,
        nome,
        email: email_trim,
        senha: hashedPassword,
        tipo
      });

      newCliente.save((error: any) => {
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
};