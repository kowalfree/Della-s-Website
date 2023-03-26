const name = document.querySelector(".yourName");
const mail = document.querySelector(".yourMail");
const text = document.querySelector(".text");

const btn = document.querySelector(".send");

const check = (input) => {
	if (name.value === "" || mail.value === "" || text.value === "") {
		alert("NIE WYSŁANO. WYPEŁNIJ WSZYSTKIE POLA!");
	}

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

btn.addEventListener("click", (e) => {
	e.preventDefault();

	const checkMail = () => {
		const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;

		if (regex.test(mail.value)) {
			if (text.value.length >= 15) {
				const body = `Student: ${name.value} <br >

	        My e-mail: ${mail.value} <br > ${text.value}`;

				Email.send({
					Host: "smtp.elasticemail.com",
					Username: "kowalfree@op.pl",
					Password: "269AF8EF35CD2DFCF63D7E1F3256A84C4E7F",
					To: "kowalfree@op.pl",
					From: "kowalfree@op.pl",
					Subject: "Chinese Language",
					Body: body,
				}).then((message) => alert("WYSŁANO WIADOMOŚĆ"));
			}
		} else {
			mail.style.backgroundColor = "#fcdddffa";
			alert(`EMAIL JEST NIEPOPRAWNY!`);
		}
	};

	check([name, mail, text]);
	length();
	checkMail();
});
