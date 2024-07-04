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
const Prisma = new client_1.PrismaClient();
function insertUser(username, firstName, lastName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield Prisma.user.create({
            data: {
                email: username,
                firstName,
                lastName,
                password
            }
        });
        console.log(res);
    });
}
function updateUser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstName, lastName, }) {
        const res = yield Prisma.user.update({
            where: { email: username },
            data: {
                firstName: firstName,
                lastName: lastName
            }
        });
        console.log(res);
    });
}
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield Prisma.user.findFirst({
            where: { email: username }
        });
        console.log(res);
    });
}
;
function deleteUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield Prisma.user.delete({
            where: {
                email: username
            }
        });
        console.log(`Deleted user with username ,  ${username}`);
    });
}
deleteUser("Ayush");
// getUser("Ayush")                                         // get the user from DB
// updateUser("gg@gmail.com" , {                            // updating firstname and latname of user 
//       firstName :  "shraddha" ,
//       lastName :  "khandelwal"
// });
// insertUser("gg@gmail.com" ,"sh", "kh" , "kh@123" );        // creating new user
