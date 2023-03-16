export default class User {
	#name;
	#lastName;
	#email;
	#bornDate;
	#role;
	#active;
	constructor(name, lastName, email, bornDate, role, active = true) {
		this.#name = name;
		this.#lastName = lastName;
		this.#email = email;
		this.#bornDate = bornDate;
		this.#role = role || "student";
		this.#active = active;
	}

	get name() {
		return this.#name;
	}

	get lastName() {
		return this.#lastName;
	}

	get email() {
		return this.#email;
	}

	get bornDate() {
		return this.#bornDate;
	}

	get role() {
		return this.#role;
	}

	get active() {
		return this.#active;
	}

	set name(name) {
		let [firstName, ...lastName] = name.split(" ");
		if (name.length < 3) {
			throw new Error("Name must have at least 3 characters");
		}

		this.#name = firstName;
		this.#lastName = lastName.join(" ");
	}

	set email(email) {
		this.#email = email;
	}

	set bornDate(bornDate) {
		this.#bornDate = bornDate;
	}

	set role(role) {
		this.#role = role;
	}

	set active(active) {
		this.#active = active;
	}

	// #mountObjectUser() {
	// 	return {
	// 		name: this.#name,
	// 		email: this.#email,
	// 		bornDate: this.#bornDate,
	// 		role: this.#role,
	// 		active: this.#active,
	// 	};
	// }

	getInformation() {
		return `Name: ${this.name} LastName: ${this.lastName} Email: ${this.email} Born Date: ${this.bornDate} Role: ${this.role}`;
	}
}
