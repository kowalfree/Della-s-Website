const name = document.querySelector(".yourName");
const mail = document.querySelector(".yourMail");
const text = document.querySelector(".text");

const btn = document.querySelector(".send");

const check = (input) => {
	input.forEach((el) => {
		if (el.value === "") {
			el.style.backgroundColor = "#fcdddffa";
		} else {
			el.style.backgroundColor = "white";
		}
	});
};

const length = () => {
	if (
		(name.value.length < 3 && name.value !== "") ||
		(text.value.length < 15 && text.value !== "")
	) {
		alert(`YOU HAVE ENTERED TOO FEW CHARACTERS!`);
	}

	const error = (input, min) => {
		if (input.value.length < min && input.value !== "") {
			input.style.backgroundColor = "#fcdddffa";
		}
	};

	error(name, 3);
	error(text, 15);
};
const checkMail = () => {
	const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;

	if (regex.test(mail.value)) {
		if (text.value.length >= 15 && name.value.length >= 3) {
			const body = `Student: ${name.value} <br >

		My e-mail: ${mail.value} <br > ${text.value}`;

			Email.send({
				Host: "smtp.elasticemail.com",
				Username: "yourname",
				Password: "yourpassword",
				To: "your email",
				From: "your email",
				Subject: "Chinese Language",
				Body: body,
			}).then((message) => alert("MESSAGE SENT"));
		} else if (name.value === "" || text.value === "") {
			alert("NOT SENT. FILL IN ALL FIELDS!");
		}
	} else {
		if (name.value === "" || mail.value === "" || text.value === "") {
			alert("NOT SENT. FILL IN ALL FIELDS!");
		}
		if (mail.value !== "") {
			mail.style.backgroundColor = "#fcdddffa";
			alert(`EMAIL IS INCORRECT!`);
		}
	}
};

btn.addEventListener("click", (e) => {
	e.preventDefault();

	check([name, mail, text]);
	length();
	checkMail();
});

// ! scroll on animations

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
