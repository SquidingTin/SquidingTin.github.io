
import { updateClock } from "./clock.js";
	const backgrounds = [
		{ name: "None", value: "" },
		{ name: "New Spawn City", value: "images/documents/backgrounds/newspawncity.png" },
		
		{ name: "Mesa", value: "images/documents/backgrounds/Mesa.png" },
		{ name: "Taiga", value: "images/documents/backgrounds/Taiga.png" },
		{ name: "Dark Forest", value: "images/documents/backgrounds/Dark.png" },
		{ name: "Plains", value: "images/documents/backgrounds/Plains.png" },
		{ name: "Cherry Grove", value: "images/documents/backgrounds/Cherry.png" }
		{ name: "Desert", value: "images/documents/backgrounds/Desert.png" },
		{ name: "Forest", value: "images/documents/backgrounds/Forest.png" },
		{ name: "Jungle", value: "images/documents/backgrounds/Jungle.png" },
		{ name: "Snow", value: "images/documents/backgrounds/Snow.png" },
		{ name: "Swamp", value: "images/documents/backgrounds/Swamp.png" },
	];
	
	let settingsWindow = null;

	function settings() {

		const optionsHTML = backgrounds.map(bg =>
			`<option value="${bg.value}">${bg.name}</option>`
		).join("");

		const content = `
			<div style="display:flex; flex-direction:column; gap:10px;">

				<label><b>Background</b></label>
				<select id="bgSelect" style="padding:4px;">
					${optionsHTML}
				</select>

				<label style="margin-top:10px;"><b>Clock format</b></label>
				<select id="clockSelect" style="padding:4px;">
					<option value="12">12 Hour (AM/PM)</option>
					<option value="24">24 Hour</option>
				</select>

			</div>
		`;

		if (settingsWindow && document.body.contains(settingsWindow)) {

			const body = settingsWindow.querySelector(".fake-dialog-body, .fake-window-body");

			if (body) {
				body.innerHTML = content;
				wireSettings(settingsWindow);
			}

			return settingsWindow;
		}

		// create new window
		const win = createWindow("Settings", content, 300, 200, 300);
		settingsWindow = win;

		wireSettings(win);

		return win;
	}

	function wireSettings(win) {

		const select = win.querySelector("#bgSelect");
		const clockSelect = win.querySelector("#clockSelect");

		const savedBg = localStorage.getItem("desktop_bg") || "";
		select.value = savedBg;
		applyBackground(savedBg);

		select.addEventListener("change", () => {
			const value = select.value;
			localStorage.setItem("desktop_bg", value);
			applyBackground(value);
		});

		const savedClock = localStorage.getItem("clock_format") || "12";
		clockSelect.value = savedClock;

		clockSelect.addEventListener("change", () => {
			localStorage.setItem("clock_format", clockSelect.value);
			updateClock();
		});

		const titleBar = win.querySelector(".fake-dialog-titlebar, .fake-window-titlebar");
		const titleText = titleBar?.querySelector(".title-text");

		if (titleText && !titleText.querySelector("img")) {
			const icon = document.createElement("img");
			icon.src = "icons/restrict.png";
			icon.style.width = "16px";
			icon.style.height = "16px";
			icon.style.imageRendering = "pixelated";
			icon.style.marginRight = "6px";

			titleText.prepend(icon);
		}
	}

	function applyBackground(value) {
		const desktop = document.querySelector(".desktop");

		if (!desktop) return;

		if (!value) {
			desktop.style.backgroundImage = "none";
			desktop.style.backgroundColor = "#008282";
		} else {
			desktop.style.backgroundImage = `url("${value}")`;
			desktop.style.backgroundColor = "";
		}
	}

export { settings };
