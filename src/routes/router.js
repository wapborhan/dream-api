const userRouter = require("./user");
const routers = [
  {
    path: "/",
    handler: userRouter,
  },
];

const applyRouter = (app) => {
  routers.map((r) => {
    app.use(r.path, r.handler);
  });
};

module.exports = applyRouter;
