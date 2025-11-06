import { Request, Response, Router } from "express";
import { SendEmailController } from "./controllers/send-email/sendEmail.controller";

const router = Router();

router.get("/", (request: Request, response: Response) => {
  return response.send("Send Emails");
});


router.post("/send-email", new SendEmailController().handle)

export { router };
