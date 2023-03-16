import User from "./User.js";

export default class Admin extends User {
	constructor(name, email, bornDate, role, active = true) {
		super(name, email, bornDate, role, active);
		this.role = "admin";
	}

	createCourse(course, vacancies) {
		return `${course} course created with ${vacancies} vacancies`;
	}
}
