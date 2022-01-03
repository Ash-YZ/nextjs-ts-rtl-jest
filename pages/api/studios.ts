// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  studios: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const version = Math.floor(Math.random() * 10000);

  const data = await fetch(
    `http://localhost:3000/assets/data/studios.csv?v=${version}`
  );
  const studios = await data.text();
  res.status(200).json({ studios });
}
