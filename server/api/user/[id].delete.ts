import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const id = parseInt(event.context.params.id);
    try {
        const user = await prisma.user.delete({
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