import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
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

const resultado = await prisma.user.findMany()
console.log(resultado)
}

main()

.catch(e =>{
    throw e
})
.finally(async()=>{
    await prisma.$disconnect()
})
