import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import connectMongo from '../../../database/connect'
import User from '../../../model/Schema'
import { compare } from 'bcryptjs'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: 'Credentials',
      async authorize(credentials, req) {
        connectMongo().catch(error=> {error: 'Connection Failed...'})

        // check user existence

        const result = await User.findOne({email: credentials.email})
        if(!result){
          throw new Error('No user found with the email. Please sign up')
        }

        // compare password
        const checkPass = await compare(credentials.password, result.password)
        if(!checkPass || result.email !== credentials.email) {
          throw new Error('Username or password does not match')
        }
        return result
      }
    })
  ],

  secret: 'h1kHB8zm0g9Km3hQhPYP4+1nEpzeEfv4F4YfP+mLGqY='
}) 