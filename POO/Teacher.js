import User from "./User.js";

export default class Teacher extends User {
	constructor(name, email, bornDate, role = "teacher", active = true) {
		super(name, email, bornDate, role, active);
	}

	aproveStudent(student, course) {
		return `${student} aproved in ${course} course`;
	}
}
