import type { NextApiRequest, NextApiResponse } from 'next'
import type { User } from '../../interfaces'

// Fake users data
const inventaires: Inventaire[] = [{ id: "50" }, { id: "51" }, { id: "52" }]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(inventaires)
}