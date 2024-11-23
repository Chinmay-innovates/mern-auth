const form = document.getElementById("form");
const username = document.getElementById("name");
const password = document.getElementById("password");
const error_message = document.getElementById("err-msg");

form.addEventListener("submit", (e) => {
	let errors = [];
	if (username) {
		errors = getSignupErrors(username.value, password.value);
	}
	if (errors.length > 0) {
		e.preventDefault();
		error_message.innerHTML = errors.join(". ");
	}
});

function getSignupErrors(name, pwd) {
	let errors = [];
	if (name === "" || name == null) {
		errors.push("Name is required");
		username.parentElement.classList.add("incorrect");
	}
	if (pwd === "" || pwd == null) {
		errors.push("Password is required");
		password.parentElement.classList.add("incorrect");
	}
	if (pwd.length < 6) {
		errors.push("Password must be at least 6 characters");
		password.parentElement.classList.add("incorrect");
	}
	return errors;
}

const allInputs = [username, password];

allInputs.forEach((input) => {
	input.addEventListener("input", () => {
		if (input.parentElement.classList.contains("incorrect")) {
			input.parentElement.classList.remove("incorrect");
			error_message.innerHTML = "";
		}
	});
});
