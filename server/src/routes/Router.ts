import { Router } from "express";
import SessionController from "../controllers/sessionController/SessionController";
import UserController from "../controllers/userController/UserController";
import ClienteController from "../controllers/clienteController/ClienteController";
import isOver18 from "../middlewares/verificacaoDeIdade";
import { verifyToken } from "../middlewares/verifyToken";
const router = Router();

router.post("/registeCliente", ClienteController.registeCliente);
router.post("/register", UserController.register);
router.post("/login", SessionController.login);
// router.get("/users/:_id", UserController.buscarDados);
router.put("/editar/:_id",  UserController.atualizarDadosUsuario);
router.put("/editarCliente/:_id",  UserController.atualizarDadosUsuarioCliente);
router.get("/inicio",  UserController.buscarBarbeiro);
router.get("/buscarGeral",  UserController.buscarGeral);

// router.get("/alunos", verifyToken, AlunoController.buscarTodosAlunos);
// router.get("/alunos/:_id", verifyToken, AlunoController.buscarAluno);
// router.get("/alunosFiltrados", verifyToken, AlunoController.filtrarAlunosPorIdade);
// router.post("/registrarAluno", verifyToken, isOver18, AlunoController.registrarAluno);
// router.put("/editarAluno/:_id", verifyToken, isOver18, AlunoController.atualizarDadosAlunos);
// router.delete("/deletarAluno/:_id", verifyToken, AlunoController.deletarAluno);

export default router;