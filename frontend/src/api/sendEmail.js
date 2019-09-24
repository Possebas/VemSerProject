//import { Mailer } from 'nodemailer-react'

//export default function sendEmail() {
//  const mailerConfig = {
//    defaults: {
//      from: {
//        name: 'vemserDbc',
//        address: 'vemserdbc@gmail.com',
//      },
//    },
//    transport: {
//      host: 'smtp.gmail.com',
//     secure: true,
//     auth: {
//       user: 'vemserdbc@gmail.com',
//        pass: 'vemser123',
//      },
//    },
//  }

//  const mailer = Mailer(mailerConfig)
//
// mailer.send('pass', {
//    firstName: 'Vemser',
//    lastName: 'DBC',
//    brand: 'Linkvalue',
//    newAccount: true,
//    password: Math.random().toString(36).substring(7),
//  }, {
//    to: 'imurilor@gmail.com',
//    attachments: [{ content: 'bar', filename: 'foo.txt' }],
//  })
//}