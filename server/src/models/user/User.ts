import mongoose from "mongoose";
import { IUserModel } from "./interfaceIUserModel";

const UserModelSchema = new mongoose.Schema<IUserModel>({
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

  userEmail: {
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

const User = mongoose.model<IUserModel>("User", UserModelSchema);
export default User;