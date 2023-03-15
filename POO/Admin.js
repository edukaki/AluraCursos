import User from "./User.js";

class Admin extends User {
	constructor(name, email, bornDate, role, active = true) {
		super(name, email, bornDate, role, active);
		this.role = "admin";
	}
}

const newAdmin = new Admin("Edu", "edu@email.com", "1991-04-01");

console.log(newAdmin.getInformation());
