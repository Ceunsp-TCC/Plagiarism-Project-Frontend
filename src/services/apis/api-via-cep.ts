import axios from 'axios'

export const apiViaCep = axios.create({
  baseURL: process.env.NEXT_PUBLIC_VIA_CEP,
})
