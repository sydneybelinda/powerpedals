// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const models = require('../../models/index');

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // console.log(db.sequelize)
  console.log(models.users)
  res.status(200).json({ name: 'John Doe' })
}
