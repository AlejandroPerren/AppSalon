import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contactController = async (req: Request, res: Response) => {
  const { nombre, correo, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: correo,
    to: process.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${nombre}`,
    text: mensaje,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Mensaje enviado correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al enviar el mensaje.' });
  }
};
