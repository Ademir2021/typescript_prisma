"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // const criarUser = await prisma.user.create({
        //     data:{
        //         email:"teste3@teste.com",
        //         name: "Felipe Camargo",
        //         age: 40,
        //         country: "Fênix Pr" 
        //     }
        // })
        // const atualUser = await prisma.user.update({
        //     data: {
        //         name: 'Marcio Antonio da Cunha',
        //     },
        //     where: {
        //         id: 1,
        //     },
        // })
        const resultado = yield prisma.user.findMany();
        console.log(resultado);
    });
}
main()
    .catch(e => {
    throw e;
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
