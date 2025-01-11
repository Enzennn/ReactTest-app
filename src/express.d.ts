import { Request } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: User; // Ganti `any` dengan tipe user yang sesuai, misalnya `string` atau `User`.
  }
}
