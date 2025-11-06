import { Request, Response } from "express";
import { SendEmailService } from "../../services/send-email/sendEmail.service";

class SendEmailController {
    async handle(request: Request, response: Response) {

        const { email } = request.body

        const sendEmailService = new SendEmailService

        const emailUser = await sendEmailService.execute({
            email
        })

        return response.json(emailUser)
    } 
}

export { SendEmailController }