import connectMongo from '../../../database/connect';
import User from '../../../model/Schema'
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
//   connectMongo().catch((error) => res.json({ error: 'Connection failed.!' }));

  if (req.method === 'POST') {
    if (!req.body) {
      return res.status(404).json({ error: 'Dont have form data' });
    }
    const { name, email, phone, password } = req.body;
console.log(req.body)
    // check duplicate user
    // const checkExistingUser = await User.findOne({email})
    // console.log(checkExistingUser)
    // if(checkExistingUser) {
    //     return res.status(422).json({message: "User already exist..."})
    // }
    // create user
    User.create({name, email, phone, password: await hash(password, 12)}, function(err, data){
        if(err) {return res.status(404).json({err})}
        res.status(201).json({status: true, user: data})
    })
  } else {
    res
      .status(500)
      .json({ message: 'HTTP method not valid. Only POST accepted' });
  }
}
