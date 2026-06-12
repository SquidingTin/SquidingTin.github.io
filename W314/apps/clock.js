	/* =========================
		 CLOCK
	========================= */

	function updateClock() {

		const clock = document.getElementById("clock");
		if (!clock) return;

		const now = new Date();

		const format = localStorage.getItem("clock_format") || "12";

		let hours = now.getHours();
		const minutes = now.getMinutes().toString().padStart(2, "0");

		if (format === "24") {
			clock.textContent = hours + ":" + minutes;
			return;
		}

		const ampm = hours >= 12 ? "PM" : "AM";

		hours = hours % 12;
		if (hours === 0) hours = 12;

		clock.textContent = hours + ":" + minutes + " " + ampm;
	}

	setInterval(updateClock, 1000);

	updateClock();
export { updateClock };