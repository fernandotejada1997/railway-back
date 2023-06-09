const { Router } = require('express');
const dogsRouter = require("../routes/dogsroute");
const temperamentsRouter = require('./temperamentsroute');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();

router.use("/dogs", dogsRouter)
router.use("/temperaments", temperamentsRouter)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
