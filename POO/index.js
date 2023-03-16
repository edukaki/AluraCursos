import User from "./User.js";
import Admin from "./Admin.js";
import Teacher from "./Teacher.js";

const newUser = new User(
	"John",
	"John@email.com",
	"01/01/2000",
	"student",
	true
);
console.log(newUser.getInformation());
