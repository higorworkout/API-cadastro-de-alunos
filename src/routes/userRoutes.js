import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';
const router = new Router();

// Não deveria existir
//router.get("/", userController.index);
// router.get("/:id", userController.show);

router.post("/", userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;


/*
index -> Lista todos os usuários -> get
store/create -> cria todos os usuarios -> POST
delete -> apaga um usuario
show -> mostra um usuario
update -> atualiza um usuario -> PATCH ou Put
*/
