import connectMongo from '../../../database/connect';
import User from '../../../model/Schema';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
  // res.json({word: 'You are a fucking bastard'})
  // connectMongo().catch((error) => res.json({ error: 'Connection failed.!' }));
  try {
    await connectMongo();

    if (req.method === 'POST') {
      if (!req.body) {
        return res.status(404).json({ error: 'Dont have form data' });
      }
      const { name, email, phone, password } = req.body;

      // check duplicate user
      const checkExistingUser = await User.findOne({ email });

      if (checkExistingUser) {
        return res.status(422).json({ message: 'User already exist...' });
      }
      console.log(req.body);
      // create user
      const data = User.create({
        name,
        email,
        phone,
        password: await hash(password, 12),
      });

      res.status(201).json({ status: true, user: data });
    } else {
      res
        .status(500)
        .json({ message: 'HTTP method not valid. Only POST accepted' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
