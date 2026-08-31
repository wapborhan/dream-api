const userRouter = require("./user");
const authRouter = require("./auth");
const JobsRouter = require("./jobs");

const routers = [
  ["/users", userRouter],
  ["/auth", authRouter],
  ["/srjobs", JobsRouter],
];

const applyRouter = (app) => {
  routers.forEach(([path, router]) => {
    app.use(`/v1${path}`, router);
  });
};

module.exports = applyRouter;
