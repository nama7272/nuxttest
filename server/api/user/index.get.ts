import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async () => {
    try {
        const user = await prisma.user.findMany();
        return user;
    } catch (error) {
        console.error(error);
        throw createError({
            statusCode: 500,
            statusMessage: "Internal Server Error",
        });
    } finally {
        await prisma.$disconnect();
    }
});