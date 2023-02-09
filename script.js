const firstname = document.querySelector("span#firstname");
const lastname = document.querySelector("span#lastname");

async function getData() {
	let res = await fetch("https://tribes-api.netlify.app/.netlify/functions/member?id=cldeppc393z9h0avwfpz8hb99")
	return await res.json();
}

function showData(data) {
    console.log(data);
    firstname.textContent = data.data.member.name;
    lastname.textContent = data.data.member.prefix + " " + data.data.member.surname;
}

getData()
    .then (data => {
    showData(data)
})