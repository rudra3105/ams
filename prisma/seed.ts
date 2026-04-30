import { PrismaClient, InvoiceStatus, UserRole } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const assoc = await prisma.association.upsert({ where: { id: 'demo-association' }, update: {}, create: { id: 'demo-association', name: 'Demo Chamber' } });
  await prisma.user.upsert({ where: { email: 'admin@demo.com' }, update: {}, create: { email: 'admin@demo.com', authId: 'seed-auth-1', fullName: 'Demo Admin', role: UserRole.ASSOCIATION_ADMIN, associationId: assoc.id } });
  const company = await prisma.company.create({ data: { name: 'Acme Corp', associationId: assoc.id, industry: 'Manufacturing' } });
  const member = await prisma.member.create({ data: { name: 'John Doe', email: 'john@demo.com', associationId: assoc.id } });
  await prisma.invoice.create({ data: { invoiceNo: 'INV-0001', associationId: assoc.id, companyId: company.id, memberId: member.id, amount: 1000, tax: 100, status: InvoiceStatus.UNPAID } });
}
main().finally(() => prisma.$disconnect());
