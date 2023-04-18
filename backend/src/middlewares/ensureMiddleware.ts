import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";

export async function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return response.status(401).json({
      message: "Token required",
    });
  }

  const [_, token] = authHeader.split(" ");

  const privateKey = process.env.SECRET_KEY || "privatekey";

  try {
    const { sub } = verify(token, privateKey);
    request.userId = sub as string;

    return next();
  } catch (error) {
    throw new AppError(
      "Sessão expirada. Por favor, efetue login novamente.",
      401
    );
  }
}
