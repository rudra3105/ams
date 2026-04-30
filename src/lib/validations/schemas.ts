import { z } from 'zod';
export const companySchema = z.object({ name: z.string().min(2), industry: z.string().optional(), email: z.string().email().optional(), phone: z.string().optional() });
export const memberSchema = z.object({ name: z.string().min(2), email: z.string().email(), phone: z.string().optional() });
export const invoiceSchema = z.object({ amount: z.number().positive(), tax: z.number().min(0), status: z.enum(['DRAFT','PAID','UNPAID']) });
