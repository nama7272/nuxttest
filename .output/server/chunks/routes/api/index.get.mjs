import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { c as defineEventHandler, e as createError } from '../../_/nitro.mjs';
import { createRequire } from 'module';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';

const require = createRequire(globalThis._importMeta_.url);
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const index_get = defineEventHandler(async () => {
  try {
    const user = await prisma.user.findMany();
    return user;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error"
    });
  } finally {
    await prisma.$disconnect();
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
