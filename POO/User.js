export default class User {
	#name;
	#email;
	#bornDate;
	#role;
	#active;
	constructor(name, email, bornDate, role, active = true) {
		this.#name = name;
		this.#email = email;
		this.#bornDate = bornDate;
		this.#role = role || "student";
		this.#active = active;
	}

	#mountObjectUser() {
		return {
			name: this.#name,
			email: this.#email,
			bornDate: this.#bornDate,
			role: this.#role,
			active: this.#active,
		};
	}

	getInformation() {
		const objUser = this.#mountObjectUser();
		return `Name: ${objUser.name} Email: ${objUser.email} Born Date: ${objUser.bornDate} Role: ${objUser.role}`;
	}
}
