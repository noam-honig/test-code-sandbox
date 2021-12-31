const express = require("express");
const cors = require("cors");
const { randomBytes } = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

const sleep = (ms) =>
  new Promise((resolve) => {
    const timerId = setTimeout(() => {
      resolve();
      clearTimeout(timerId);
    }, ms);
  });

const authRouter = express
  .Router()
  .post("/register", async (req, res, next) => {
    await sleep(1000);

    const { email, password } = req.body;

    try {
      if (email === "test@mail.com") {
        return res.sendStatus(409);
      }

      const userId = randomBytes(16).toString("hex");

      const token = jwt.sign({ email }, "secret", {
        expiresIn: "1h"
      });

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = {
        userId,
        email,
        hashedPassword,
        token,
        createdAt: new Date().toISOString()
      };

      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  })
  .post("/login", async (req, res, next) => {
    const { email, password } = req.body;

    try {
      await sleep(1000);

      // throw new Error('error')

      if (email !== "test@mail.com") {
        return res.sendStatus(404);
      }

      const testPassword = await bcrypt.hash("test", 10);
      const correctPassword = await bcrypt.compare(password, testPassword);

      if (!correctPassword) {
        return res.sendStatus(403);
      }

      const token = jwt.sign({ email }, "secret", {
        expiresIn: "1h"
      });

      res.status(200).json({ token });
    } catch (err) {
      next(err);
    }
  });

app.use(cors());
app.use(express.json());

app.get("/favicon.ico", (_, res) => {
  res.sendStatus(200);
});
app.use("/api/auth", authRouter);

app.use(errorHandler);

function errorHandler(err, req, res, next) {
  console.error(err);
  res.sendStatus(500);
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
