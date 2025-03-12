import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    try {
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
            },
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