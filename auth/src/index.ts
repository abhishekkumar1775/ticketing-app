import express from "express";
import { json } from "body-parser";
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/singin";
import { signoutRouter } from "./routes/singout";
import { signupRouter } from "./routes/singup";

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
