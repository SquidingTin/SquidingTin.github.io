(function () {

	/* =========================
	   WINDOW LAYER SYSTEM
	========================= */

	const windowLayer =
		document.getElementById("windowLayer");

	let topZ = 1000;

	function bringToFront(el) {
		el.style.zIndex = ++topZ;
	}

	/* =========================
	   DRAG SYSTEM
	========================= */

	let dragTarget = null;
	let dragOffsetX = 0;
	let dragOffsetY = 0;
	let activeHandle = null;

	function unmaximize(win, clientX, clientY) {

		if (win.dataset.maximized !== "1") return;

		const old = JSON.parse(win.dataset.old || "{}");
		const rect = win.getBoundingClientRect();

		win.dataset.maximized = "0";

		win.style.left = old.left || rect.left + "px";
		win.style.top = old.top || rect.top + "px";
		win.style.width = old.width || "390px";
		win.style.height = "";

		const newRect = win.getBoundingClientRect();

		dragOffsetX = clientX - newRect.left;
		dragOffsetY = clientY - newRect.top;
	}

	function makeDraggable(win, handleSelector) {

		const handle = win.querySelector(handleSelector);
		if (!handle) return;

		handle.style.cursor = "grab";

		handle.addEventListener("mousedown", (e) => {

			if (e.target.closest(".win-btn")) return;

			e.preventDefault();

			dragTarget = win;
			activeHandle = handle;

			bringToFront(win);

			const rect = win.getBoundingClientRect();

			if (win.dataset.maximized === "1") {
				unmaximize(win, e.clientX, e.clientY);
			} else {
				dragOffsetX = e.clientX - rect.left;
				dragOffsetY = e.clientY - rect.top;
			}

			handle.style.cursor = "grabbing";
		});
	}

	document.addEventListener("mousemove", (e) => {

		if (!dragTarget) return;

		dragTarget.style.left = `${e.clientX - dragOffsetX}px`;
		dragTarget.style.top = `${e.clientY - dragOffsetY}px`;
	});

	document.addEventListener("mouseup", () => {

		if (activeHandle) {
			activeHandle.style.cursor = "grab";
		}

		dragTarget = null;
		activeHandle = null;
	});

	/* =========================
	   INIT
	========================= */

	window.addEventListener("DOMContentLoaded", () => {

		document.querySelectorAll(".fake-dialog").forEach(dialog => {
			makeDraggable(dialog, ".fake-dialog-titlebar");
		});

	});

	/* =========================
	   WINDOW CREATION
	========================= */

	function createWindow(title, content, x = 120, y = 80, width = 390, type = "window") {

		const win = document.createElement("div");

		win.className = type === "dialog"
			? "fake-dialog"
			: "fake-window";

		win.style.left = x + "px";
		win.style.top = y + "px";
		win.style.width = width + "px";

		bringToFront(win);

		win.innerHTML = `
			<div class="${type === "dialog"
				? "fake-dialog-titlebar"
				: "fake-window-titlebar"} window-titlebar">

				<span class="title-text">${title}</span>

				<div class="window-controls">
					<button type="button" class="win-btn minimize">_</button>
					<button type="button" class="win-btn maximize">□</button>
					<button type="button" class="win-btn close">×</button>
				</div>
			</div>

			<div class="${type === "dialog"
				? "fake-dialog-body"
				: "fake-window-body"}">
				${content}
			</div>
		`;

		if (title === "Image Viewer") {
			win.classList.add("image-viewer");
		}

		win.querySelector(".close").onclick = () => win.remove();

		win.querySelector(".minimize").onclick = () => {
			const body = win.querySelector(".fake-window-body, .fake-dialog-body");
			if (!body) return;

			const isHidden = body.style.display === "none";

			if (isHidden) {
				body.style.display = "";
				win.dataset.minimized = "0";
			} else {
				body.style.display = "none";
				win.dataset.minimized = "1";
			}
		};

		win.querySelector(".maximize").onclick = () => {

			const isMax = win.dataset.maximized === "1";

			if (!isMax) {

				win.dataset.maximized = "1";

				win.dataset.old = JSON.stringify({
					left: win.style.left,
					top: win.style.top,
					width: win.style.width
				});

				win.style.left = "0px";
				win.style.top = "0px";
				win.style.width = "100%";
				win.style.height = "97%";

			} else {

				win.dataset.maximized = "0";

				const old = JSON.parse(win.dataset.old || "{}");

				win.style.left = old.left || "120px";
				win.style.top = old.top || "80px";
				win.style.width = old.width || "390px";
				win.style.height = "";
			}
		};

		win.addEventListener("mousedown", () => {
			bringToFront(win);
		});

		windowLayer.appendChild(win);

		makeDraggable(win, ".window-titlebar");

		setTimeout(refreshCountdowns, 0);

		return win;
	}

	window.createWindow = createWindow;

	/* =========================
	   COUNTDOWN SYSTEM
	========================= */

	function updateCountdown() {

		const elements =
			document.querySelectorAll(".countdown");

		if (!elements.length) return;

		const now = Math.floor(Date.now() / 1000);

		elements.forEach(el => {

			const target = parseInt(el.dataset.target, 10);
			const start = parseInt(el.dataset.start, 10);

			if (Number.isNaN(target) || Number.isNaN(start)) return;

			const win = el.closest(".fake-window, .fake-dialog");
			if (!win) return;

			const fill = win.querySelector(".progress-fill");
			const percentText = win.querySelector(".progress-percent");
			const dialogText = win.querySelector(".fake-dialog-text");

			const totalDuration = target - start;

			const progress = totalDuration > 0
				? Math.min(1, Math.max(0, (now - start) / totalDuration))
				: 1;

			const remaining = Math.max(0, target - now);

			if (dialogText) {
				dialogText.textContent =
					progress < 1
						? "Restoring world from backup..."
						: "Backup Restored";
			}

			const percent = Math.floor(progress * 100);

			if (percentText) {
				percentText.textContent =
					progress < 1
						? percent + "% Loading..."
						: "100% Complete";
			}

			if (fill) {
				fill.style.width = (progress * 100) + "%";
			}

			const days = Math.floor(remaining / 86400);
			const hours = Math.floor((remaining % 86400) / 3600);
			const mins = Math.floor((remaining % 3600) / 60);

			if (days > 0) {
				el.textContent =
					days + " Days, " +
					hours + " Hours remaining";
			}
			else if (hours > 0) {
				el.textContent =
					hours + " Hours, " +
					mins + " Minutes remaining";
			}
			else {
				el.textContent =
					remaining <= 90
						? remaining + " Seconds remaining"
						: mins + " Minutes remaining";
			}
		});
	}

	/* =========================
	   CLOCK
	========================= */

	function updateClock() {

		const clock =
			document.getElementById("clock");

		if (!clock) return;

		const now = new Date();

		let hours = now.getHours();
		const minutes =
			now.getMinutes().toString().padStart(2, "0");

		const ampm = hours >= 12 ? "PM" : "AM";

		hours = hours % 12;
		if (hours === 0) hours = 12;

		clock.textContent =
			hours + ":" + minutes + " " + ampm;
	}

	/* =========================
	   FILE SYSTEM
	========================= */

	const imageFiles = [
		{ name: "Weekly Sylven.png", path: "images/Weekly_Sylven_W0.png" },
		{ name: "World Map.png", path: "images/map.png" },
		{ name: "New Spawn City.png", path: "images/newspawncity.png" },
		{ name: "New Spawn City 2.png", path: "images/newspawncity2.png" },
		{ name: "Mesa.png", path: "images/mesa.png" },
		{ name: "Forest.png", path: "images/forest.png" },
		{ name: "Mountains.png", path: "images/mountains.png" },
		{ name: "Dark Forest.png", path: "images/darkforest.png" },
		{ name: "Plains.png", path: "images/plains.png" },
		{ name: "Cherry Grove.png", path: "images/cherrygrove.png" },
		{ name: "Anthem of Rakau.mp3", path: "audio/forest.mp3", type: "audio" }
	];

	function openDocuments() {

		let filesHTML = "";

		for (const file of imageFiles) {

			filesHTML += `
				<div class="file" onclick="window.openFile(${JSON.stringify(file).replace(/"/g, '&quot;')})">
					<img src="icons/image.png">
					<div>${file.name}</div>
				</div>
			`;
		}

		createWindow(
			"Documents",
			`
			<div class="file-grid">
				${filesHTML}
			</div>
			`,
			300
		);
	}

	/* =========================
	   FILE ROUTER
	========================= */

	window.openFile = function (file) {

		if (file.type === "audio" || file.path.endsWith(".mp3")) {
			return openAudioPlayer(file);
		}

		createWindow(
			"Image Viewer",
			`<img src="${file.path}">`,
			320
		);
	};

	/* =========================
	   AUDIO PLAYER
	========================= */

	function openAudioPlayer(file) {

		console.log("[AudioPlayer] Opened file:", file);
		console.log("[AudioPlayer] Raw path:", file.path);

		const content = `
			<div style="display:flex; flex-direction:column; gap:10px; width:100%;">

				<div style="font-weight:bold;">${file.name}</div>

				<audio preload="auto" src="${file.path}"></audio>

				<button class="win-btn playBtn">Play</button>

				<input class="timeline" type="range" min="0" value="0" step="0.1" style="width:100%;">

				<div id="timeLabel">0:00 / 0:00</div>

			</div>
		`;

		const win = createWindow("Audio Player", content, 340);

		const audio = win.querySelector("audio");
		const playBtn = win.querySelector(".playBtn");
		const timeline = win.querySelector(".timeline");
		const timeLabel = win.querySelector(".timeLabel");

		console.log("[AudioPlayer] Audio element created:", audio);
		//console.log("[AudioPlayer] Initial src:", audio.src);

		function format(t) {
			if (!isFinite(t)) return "0:00";
			const m = Math.floor(t / 60);
			const s = Math.floor(t % 60).toString().padStart(2, "0");
			return `${m}:${s}`;
		}

		audio.addEventListener("loadstart", () => {
			console.log("[AudioPlayer] loadstart");
		});

		audio.addEventListener("loadedmetadata", () => {
			console.log("[AudioPlayer] loadedmetadata");
			console.log("[AudioPlayer] duration:", audio.duration);

			timeline.max = audio.duration || 0;

			timeLabel.textContent =
				`0:00 / ${format(audio.duration)}`;
		});

		audio.addEventListener("canplay", () => {
			console.log("[AudioPlayer] canplay (ready to play)");
		});

		audio.addEventListener("error", (e) => {
			console.error("[AudioPlayer] AUDIO ERROR EVENT:", e);
			console.error("[AudioPlayer] audio.error object:", audio.error);
			console.error("[AudioPlayer] failed src:", audio.src);
		});

		console.log("[AudioPlayer] calling audio.load()");
		audio.load();

		playBtn.onclick = async () => {

			console.log("[AudioPlayer] Play button clicked");
			console.log("[AudioPlayer] paused state:", audio.paused);

			try {
				if (audio.paused) {

					const playPromise = audio.play();

					if (playPromise !== undefined) {
						await playPromise
					}

					playBtn.textContent = "Pause";

				} else {

					audio.pause();
					playBtn.textContent = "Play";
				}

			} catch (e) {
				console.error("[AudioPlayer] play button exception:", e);
			}
		};

		timeline.addEventListener("input", () => {
			console.log("[AudioPlayer] seeking to:", timeline.value);
			audio.currentTime = Number(timeline.value);
		});

		audio.addEventListener("timeupdate", () => {

			if (!isFinite(audio.duration)) return;

			timeline.value = audio.currentTime;

			timeLabel.textContent =
				`${format(audio.currentTime)} / ${format(audio.duration)}`;
		});

		audio.addEventListener("ended", () => {
			console.log("[AudioPlayer] audio ended");
			playBtn.textContent = "Play";
		});
	}

	/* =========================
	   START MENU
	========================= */

	const startMenuData = [
		{
			name: "Programs",
			icon: "icons/programs.png",
			children: [
				{
					name: "Accessories",
					icon: "icons/folder.png",
					children: [
						{ name: "Paint", icon: "icons/missing.png" },
						{ name: "Notepad", icon: "icons/notepad.png" },
						{ name: "Calculator", icon: "icons/missing.png" }
					]
				},
				{
					name: "Games",
					icon: "icons/games.png",
					children: [
						{ name: "Minecraft", icon: "icons/minecraft.png" },
						{ name: "Kogama", icon: "icons/kogama.png" },
						{ name: "Polybius", icon: "icons/w2k_wmp_54.png" }
					]
				}
			]
		},
		{
			name: "Documents",
			icon: "icons/documents.png",
			onClick: openDocuments
		},
		{ name: "Settings", icon: "icons/settings.png" },
		{ name: "Find", icon: "icons/find.png" },
		{ name: "Help", icon: "icons/help.png" },
		{ name: "Run...", icon: "icons/run.png" },
		{ 
			name: "Shut Down...", 
			icon: "icons/shutdown.png",
			onClick: shutdown
		}
	];
	function shutdown() {
		window.close();
	}

	function createMenu(items) {

		const container = document.createElement("div");

		items.forEach(item => {

			const itemEl = document.createElement("div");
			itemEl.className = "start-item";

			const hasChildren =
				Array.isArray(item.children) &&
				item.children.length > 0;

			const left = document.createElement("div");
			left.className = "start-item-left";

			const icon = document.createElement("div");
			icon.className = "start-item-icon";

			if (item.icon) {
				icon.style.backgroundImage =
					`url("${item.icon}")`;
			}

			const label = document.createElement("span");
			label.textContent = item.name;

			left.appendChild(icon);
			left.appendChild(label);

			itemEl.appendChild(left);

			if (item.onClick) {

				itemEl.onclick = (e) => {
					e.stopPropagation();
					item.onClick();
				};
			}

			if (hasChildren) {

				const arrow = document.createElement("span");
				arrow.className = "start-item-arrow";
				arrow.textContent = "▶";

				itemEl.appendChild(arrow);

				const submenu = createMenu(item.children);
				submenu.classList.add("submenu");

				itemEl.appendChild(submenu);
			}

			container.appendChild(itemEl);
		});

		return container;
	}

	const startMenuContent =
		document.getElementById("startMenuContent");

	startMenuContent.appendChild(
		createMenu(startMenuData)
	);

	const startButton =
		document.getElementById("startButton");

	const startMenu =
		document.getElementById("startMenu");

	startButton.addEventListener("click", () => {
		startMenu.classList.toggle("active");
	});

	document.addEventListener("click", (e) => {

		if (!startMenu.contains(e.target) &&
			!startButton.contains(e.target)) {

			startMenu.classList.remove("active");
		}
	});

	/* =========================
	   TIMERS
	========================= */

	setInterval(updateCountdown, 1000);
	setInterval(updateClock, 1000);

	updateCountdown();
	updateClock();

})();
