import 'dotenv/config';
import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes.routes";

const app = express();

app.use(express.json())

app.use(router);

app.use(
  (erro: Error, request: Request, response: Response, next: NextFunction) => {
    if (erro instanceof Error) {
      return response.status(400).json({
        error: erro.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error.",
    });
  }
);

app.listen(process.env.PORT, () => console.log(`Servidor rodando em http://localhost:${process.env.PORT}`))
