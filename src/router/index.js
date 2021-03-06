const Router = require("koa-router");
const { getUsers, getUser } = require("../controller");

const router = new Router();

router.get("/", ctx => (ctx.body = "안녕하세요, 심준식입니다.1"));

router.get("/users", getUsers);
router.get("/users/:id", getUser);

module.exports = router;
