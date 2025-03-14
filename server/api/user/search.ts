import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event);
        if (query && ( query.id || query.name || query.email)) {
            const id = parseInt(query.id);
            const name = query.name;
            const email = query.email;

            const whereClause = {};
            if (id) {
                whereClause.id = { equals: id };
            }
            if (name) {
                whereClause.name = { contains: name };
            }
            if (email) {
                whereClause.email = { contains: email };
            }
            const user = await prisma.user.findMany({
                where: whereClause,
            });
            return user;
        } else {
            return await prisma.user.findMany();
        }
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