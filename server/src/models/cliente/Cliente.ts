import mongoose from "mongoose";
import { ClienteModel } from "./interfaceClienteModel";

const ClienteModelSchema = new mongoose.Schema<ClienteModel>({

  nomeDaBarbearia: {
    type: String,
    // required: true,
    minlength: 2,
  },
  endereco: {
    type: String,
    // required: true,
    minlength: 2,
  },
    nome: {
      type: String,
      required: true,
      minlength: 2,
    },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  },
  senha: {
    type: String,
    required: true,
    minlength: 8,
  },
  tipo: {
    type: String,
    required: true,
    minlength: 2,
  },

});

const Cliente = mongoose.model<ClienteModel>("Cliente", ClienteModelSchema);
export default Cliente;