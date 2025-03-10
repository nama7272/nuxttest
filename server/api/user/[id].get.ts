import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
    const id = parseInt(event.context.params.id);
    try {
        const user = await prisma.user.findUnique({
            where: { id },
        });
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