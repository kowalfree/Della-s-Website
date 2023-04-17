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
		alert(`WPISAŁEŚ ZA MAŁĄ ILOŚĆ ZNAKÓW!`);
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
			}).then((message) => alert("WYSŁANO WIADOMOŚĆ"));
		} else if (name.value === "" || text.value === "") {
			alert("NIE WYSŁANO. WYPEŁNIJ WSZYSTKIE POLA!");
		}
	} else {
		if (name.value === "" || mail.value === "" || text.value === "") {
			alert("NIE WYSŁANO. WYPEŁNIJ WSZYSTKIE POLA!");
		}
		if (mail.value !== "") {
			mail.style.backgroundColor = "#fcdddffa";
			alert(`EMAIL JEST NIEPOPRAWNY!`);
		}
	}
};

btn.addEventListener("click", (e) => {
	e.preventDefault();

	check([name, mail, text]);
	length();
	checkMail();
});