// src/app/api/club/reject/[id]/route.ts
"use server"
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const { id, note } = req.body;

  console.log('id', id)

  try {
    const response = await api.put(`/bidaclubs/reject/${id}`, { note });
    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}