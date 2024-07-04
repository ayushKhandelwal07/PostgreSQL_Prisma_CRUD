import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

interface UpdatePrams{
      firstName : string;
      lastName : string;
}

//new user creating
async function insertUser(username : string , firstName : string , lastName : string , password : string ){  
      const res = await Prisma.user.create({
            data : { 
                  email : username,
                  firstName,
                  lastName,
                  password
            }
      });
      console.log(res);
}

//updaing firstname and lastname
async function updateUser(username : string , { 
      firstName,  
      lastName,
}:UpdatePrams ){
      const res = await Prisma.user.update({
            where : {email  : username},
            data : {
                  firstName : firstName,
                  lastName : lastName
            }
      });
      console.log(res);
}

//getUser from the DB
async function getUser(username : string){
      const res = await Prisma.user.findFirst({
            where : { email : username }
      });
      console.log(res);
};

//delete user in DB by using username
async function deleteUser(username : string){
      const res = await Prisma.user.delete({
            where : {
                  email : username
            }
      });
      console.log(`Deleted user with username ,  ${ username}`);
}

deleteUser("Ayush")

// getUser("Ayush")                                         // get the user from DB

// updateUser("gg@gmail.com" , {                            // updating firstname and latname of user 
//       firstName :  "sh" ,
//       lastName :  "khandelwal"
// });

// insertUser("g@gmail.com" ,"sh", "kh" , "kh@123" );        // creating new user