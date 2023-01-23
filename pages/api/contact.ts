// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
require('dotenv').config();

var nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;

sgMail.setApiKey(SG_API_KEY);

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, name, message } = req.body;
console.log(email, name, message)
res.status(200).json({name: 'Bola'})
  
}
