(function () {


	/* =========================
	   Data
	========================= */
	
	const imageFiles = [
		{
			name: "News",
			type: "folder",
			children: [
				{
					name: "The International",
					type: "folder",
					children: [
						{
							name: "5/26/26",
							type: "folder",
							children: [
								{ name: "The International Page 1.png", path: "images/The_International/5_26_26_1.png", type: "image" },
								{ name: "The International Page 2.png", path: "images/The_International/5_26_26_2.png", type: "image" },
								{ name: "The International Page 3.png", path: "images/The_International/5_26_26_3.png", type: "image" }
							]
						}
					]
				},
				{
					name: "Weekly Sylven",
					type: "folder",
					children: [
						{ name: "Weekly Sylven W0.png", path: "images/Sylven/Weekly_Sylven_W0.png", type: "image" }
					]
				}
			]
		},
		{ name: "World Map.png", path: "images/map.png", type: "image" },
		{ name: "New Spawn City.png", path: "images/newspawncity.png", type: "image" },
		{ name: "New Spawn City 2.png", path: "images/newspawncity2.png", type: "image" },
		{ name: "Mesa.png", path: "images/mesa.png", type: "image" },
		{ name: "Forest.png", path: "images/forest.png", type: "image" },
		{ name: "Mountains.png", path: "images/mountains.png", type: "image" },
		{ name: "Dark Forest.png", path: "images/darkforest.png", type: "image" },
		{ name: "Plains.png", path: "images/plains.png", type: "image" },
		{ name: "Cherry Grove.png", path: "images/cherrygrove.png", type: "image" },

		{ name: "Anthem of Rakau.mp3", path: "audio/forest.mp3", type: "audio" }
	];

	const desktop = [
		{ 
			name: "My Computer", 
			icon: "icons/computer.png",
			onClick: () => settings()
		},
		{ 
			name: "Minecraft", 
			icon: "icons/minecraft.png",
			onClick: () => openMinecraft()
		},
		{ 
			name: "Discord", 
			icon: "icons/discord.png",
			onClick: () => openLink("https://discord.gg/EYcBYPXhq5")
		},
		{
			name: "News", 
			icon: "icons/documents.png",
			onClick: () => openDocuments("News")
		},
		{ 
			name: "Trash Can", 
			icon: "icons/trash.png",
			onClick: () => openTrash()
		},
	];
	
	const startMenuData = [
		{
			name: "Programs",
			icon: "icons/programs.png",
			children: [
				{
					name: "Accessories",
					icon: "icons/folder.png",
					children: [
						{ name: "Paint", icon: "icons/missing.png", onClick: () => log("Paint")},
						{ name: "Notepad", icon: "icons/notepad.png", onClick: () => log("Notepad")},
						{ name: "Calculator", icon: "icons/missing.png", onClick: () => log("Calculator")}
					]
				},
				{
					name: "Games",
					icon: "icons/games.png",
					children: [
						{ name: "Minecraft", icon: "icons/minecraft.png", onClick: () => openMinecraft()},
						{ name: "Kogama", icon: "icons/kogama.png", onClick: () => openMinecraft()},
						{ name: "Polybius", icon: "icons/w2k_wmp_54.png", onClick: () => log("Polybius")}
					]
				}
			]
		},
		{
			name: "Documents",
			icon: "icons/documents.png",
			onClick: () => openDocuments()
		},
		{ 
			name: "Settings", 
			icon: "icons/settings.png",
			onClick: () => settings()
		},
		{ 
			name: "Find", 
			icon: "icons/find.png",
			onClick: () => log("Find")
		},
		{ 
			name: "Help", 
			icon: "icons/help.png",
			onClick: () => log("Help")
		},
		{ 
			name: "Run...", 
			icon: "icons/run.png",
			onClick: () => log("Run")
		},
		{ 
			name: "Shut Down...", 
			icon: "icons/shutdown.png",
			onClick: () => shutdown()
		}
	];

	const backgrounds = [
		{ name: "None", value: "" },
		{ name: "New Spawn City", value: "images/newspawncity.png" },
		{ name: "Mesa", value: "images/mesa.png" },
		{ name: "Forest", value: "images/forest.png" },
		{ name: "Mountains", value: "images/mountains.png" },
		{ name: "Dark Forest", value: "images/darkforest.png" },
		{ name: "Plains", value: "images/plains.png" },
		{ name: "Cherry Grove", value: "images/cherrygrove.png" }
	];

	const minecraftNews = [
		{
			title: "Compatibility with Windows 3.14",
			content: `
				<p>
					Windows 3.14 has officially been updated for the new world. 
				</p>

				<p>
					Though our homes may be gone, survivors can safely reconnect, rebuild, and stay informed 
					through the restored network.
				</p>
			`
		},
		{
			title: "Our homes may be gone, but we survived.",
			content: `
				<ul>
					<li>Community farms now under construction</li>
					<li>Memorial wall created for lost towns and builds</li>
					<li>First diamonds discovered since the evacuation</li>
					<li>Officials confirm no signs of Wither Storm corruption</li>
					<li>Trade market expected to reopen later this week</li>
					<li>Builders wanted for reconstruction projects</li>
					<li>Mining expeditions heading deeper underground each day</li>
					<li>Hope returns as rebuilding officially begins</li>
				</ul>
				
			`
		}
	];
	//<img src="images/mountains.png" class="mc-banner">

	const minecraftSidebar = [
		{
			title: "Official links:",
			links: [
				{ name: "Minecraft.net", url: "https://www.minecraft.net/en-us" },
				{ name: "Merchandise", url: "https://thedailyemerald.dashery.com/" },
				{ name: "Patreon", url: "https://www.patreon.com/cw/DailyEmerald" },
				{ name: "Reddit", url: "https://www.reddit.com/r/TheDailyEmerald/" },
				{ name: "Youtube", url: "https://www.youtube.com/@thedailyemeraldmc" },
			]
		}
	];

	const taskButtonsContainer = document.querySelector(".task-buttons-container");
	const windowTaskMap = new WeakMap();
	/* =========================
	   WINDOW LAYER SYSTEM
	========================= */

	const windowLayer = document.getElementById("windowLayer");

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

		win.querySelector(".close").onclick = () => {
			win.remove();

			const taskBtn = windowTaskMap.get(win);
			if (taskBtn) taskBtn.remove();

			if (documentsWindow === win) {
				documentsWindow = null;
			}
		};

		win.querySelector(".minimize").onclick = () => {
			win.style.display = "none";
			win.dataset.minimized = "1";
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
		createTaskButton(win, title);

		makeDraggable(win, ".window-titlebar");

		setTimeout(updateCountdown, 0);

		return win;
	}

	window.createWindow = createWindow;

	function createTaskButton(win, title) {
		if (!taskButtonsContainer) return;

		const wrapper = document.createElement("div");
		wrapper.className = "task-buttons";

		const btn = document.createElement("div");
		btn.className = "task-button";
		btn.textContent = title;

		btn.onclick = () => {
			if (win.style.display === "none") {
				win.style.display = "";
				win.dataset.minimized = "0";
				bringToFront(win);
			} else {
				win.style.display = "none";
				win.dataset.minimized = "1";
			}
		};

		wrapper.appendChild(btn);
		taskButtonsContainer.appendChild(wrapper);

		windowTaskMap.set(win, wrapper);
	}

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

	let documentsWindow = null;
	let currentFolder = null;

	function getIcon(file) {
		if (file.type === "audio") return "icons/audio.png";
		if (file.type === "folder") return "icons/folder.png";
		return "icons/image.png";
	}

	function renderFolder(folder) {

		currentFolder = folder;

		let filesHTML = "";

		for (const file of folder.children) {

			const safeFile = JSON.stringify({
				...file,
				type: file.type || "image"
			}).replace(/"/g, '&quot;');

			const icon = getIcon(file);

			filesHTML += `
				<div class="file ${file.type || ""}" onclick='window.openFile(${safeFile})'>
					<img src="${icon}">
					<div>${file.name}</div>
				</div>
			`;
		}

		return `<div class="file-grid">${filesHTML}</div>`;
	}

	function openDocuments(folderName = null, list = imageFiles) {

		let targetFolder = null;

		function search(name, items) {

			for (const item of items) {

				if (item.type === "folder") {

					if (item.name === name) {
						return item;
					}

					if (item.children) {
						const found = search(name, item.children);
						if (found) return found;
					}
				}
			}

			return null;
		}

		if (folderName) {
			targetFolder = search(folderName, list);
		}

		if (!targetFolder) {
			targetFolder = {
				name: "Documents",
				children: imageFiles
			};
		}

		currentFolder = targetFolder;

		const content = renderFolder(targetFolder);

		if (documentsWindow) {

			const body =
				documentsWindow.querySelector(".fake-window-body") ||
				documentsWindow.querySelector(".fake-dialog-body");

			if (body) body.innerHTML = content;

			const title = documentsWindow.querySelector(".title-text");
			if (title) title.textContent = targetFolder.name;

			return;
		}

		documentsWindow = createWindow(
			targetFolder.name,
			content,
			300
		);
	}

	window.openFolder = function(folder) {

		if (!folder.children) return;

		currentFolder = folder;

		const newContent = renderFolder(folder);

		if (!documentsWindow) return;

		const contentEl =
			documentsWindow.querySelector(".fake-window-body") ||
			documentsWindow.querySelector(".fake-dialog-body");

		if (contentEl) {
			contentEl.innerHTML = newContent;
		}

		const titleEl = documentsWindow.querySelector(".title-text");
		if (titleEl) {
			titleEl.textContent = folder.name;
		}
	};
	
	/* =========================
	   FILE ROUTER
	========================= */

	window.openFile = function (file) {

			if (file.type === "folder") {
				return window.openFolder(file);
			}

			if (file.type === "audio" || file.path?.endsWith(".mp3")) {
				return openAudioPlayer(file);
			}

			createWindow(
				"Image Viewer",
				`<img src="${file.path}" style="max-width:100%;">`,
				320
			);
		};
	/* =========================
	   AUDIO PLAYER
	========================= */

	function openAudioPlayer(file) {

		const content = `
			<div style="display:flex; flex-direction:column; gap:10px; width:100%;">

				<div style="font-weight:bold;">${file.name}</div>

				<audio preload="auto" src="${file.path}"></audio>

				<button class="win-btn playBtn" style="
					width:40px;
					height:40px;
					display:flex;
					align-items:center;
					justify-content:center;
				">
					<img class="playIcon" src="icons/play.png" style="width:35px; height:35px;">
				</button>

				<input class="timeline" type="range" min="0" value="0" step="0.1" style="width:100%;">

				<div class="timeLabel">0:00 / 0:00</div>

			</div>
		`;

		const win = createWindow("Audio Player", content, 340);

		const audio = win.querySelector("audio");
		const playBtn = win.querySelector(".playBtn");
		const timeline = win.querySelector(".timeline");
		const timeLabel = win.querySelector(".timeLabel");
		const playIcon = win.querySelector(".playIcon");

		const playSrc = "icons/play.png";
		const pauseSrc = "icons/pause.png";

		function format(t) {
			if (!isFinite(t)) return "0:00";
			const m = Math.floor(t / 60);
			const s = Math.floor(t % 60).toString().padStart(2, "0");
			return `${m}:${s}`;
		}

		audio.addEventListener("loadstart", () => {
			//console.log("[AudioPlayer] loadstart");
		});

		audio.addEventListener("timeupdate", () => {
			timeline.value = audio.currentTime;

			timeLabel.textContent =
				`${format(audio.currentTime)} / ${format(audio.duration)}`;
		});
		timeline.addEventListener("input", () => {
			audio.currentTime = timeline.value;
		});

		audio.addEventListener("canplay", () => {
			console.log("[AudioPlayer] canplay (ready to play)");
		});

		audio.addEventListener("error", (e) => {
			console.error("[AudioPlayer] AUDIO ERROR EVENT:", e);
			console.error("[AudioPlayer] audio.error object:", audio.error);
			console.error("[AudioPlayer] failed src:", audio.src);
		});
		audio.load();

		/* =========================
		   PLAY BUTTON
		========================= */

		playBtn.onclick = async () => {

			try {
				if (audio.paused) {

					const playPromise = audio.play();

					if (playPromise !== undefined) {
						await playPromise.catch(err => {
							console.warn("[AudioPlayer] play() failed:", err);
						});
					}

					playIcon.src = pauseSrc;

				} else {
					audio.pause();
					playIcon.src = playSrc;
				}

			} catch (e) {
				console.error("[AudioPlayer] play button exception:", e);
			}
		};
	}

	/* =========================
	   START MENU
	========================= */

	
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
			</div>
		`;

		const win = createWindow("Settings", content, 300, 150, 300);

		const select = win.querySelector("#bgSelect");

		const saved = localStorage.getItem("desktop_bg") || "";
		select.value = saved;

		applyBackground(saved);

		select.addEventListener("change", () => {
			const value = select.value;

			localStorage.setItem("desktop_bg", value);
			applyBackground(value);
		});
	}

	function applyBackground(value) {
		const desktop = document.querySelector(".desktop");

		if (!desktop) return;

		// shared settings for proper scaling
		desktop.style.backgroundRepeat = "no-repeat";
		desktop.style.backgroundPosition = "center";
		desktop.style.backgroundSize = "cover";

		if (!value) {
			desktop.style.backgroundImage = "none";
			desktop.style.backgroundColor = "#008282";
		} else {
			desktop.style.backgroundImage = `url("${value}")`;
			desktop.style.backgroundColor = "";
		}
	}



	function log(input) {
		//console.log("[Action] Attempted to open:", input);

		const dialog = document.createElement("div");

		dialog.style.position = "absolute";
		dialog.style.left = "200px";
		dialog.style.top = "200px";
		dialog.style.zIndex = 99999;

		dialog.innerHTML = `
			<div class="fake-window" style=" width: 390px; background: #c0c0c0; border: 2px solid #000; box-shadow: 4px 4px 0px #000; font-family: sans-serif; ">

				<div class="window-titlebar" style=" cursor: grab; background: #000080; color: white; display: flex; align-items: center; justify-content: space-between; padding: 4px; ">

					<div style="display:flex;align-items:center;gap:6px;">
						<img src="icons/restrict.png" style="width:16px;height:16px;image-rendering:pixelated;">
						<span>Error</span>
					</div>

					<div class="window-controls">
						<button type="button" class="win-btn close">×</button>
					</div>
				</div>

				<div style="padding:12px;">
					Cannot open file:<br><br>
					'C:\\WIN314\\${input}.exe'
				</div>

				<div style="text-align:right;padding:10px;">
					<button id="closeBtn">OK</button>
				</div>
			</div>
		`;

		document.body.appendChild(dialog);

		dialog.getBoundingClientRect();

		const win = dialog.querySelector(".fake-window");
		const titleBar = dialog.querySelector(".window-titlebar");

		function closeWindow() {
			dialog.remove();
		}

		dialog.querySelector("#closeBtn").onclick = closeWindow;
		dialog.querySelector(".win-btn.close").onclick = closeWindow;

		//makeDraggable(win, ".window-titlebar");
	}
	
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


	/* =========================
	   Launcher
	========================= */
	function openMinecraft() {

		const username = "Player";

		let newsHTML = "";

		for (const post of minecraftNews) {

			newsHTML += `
				<div class="mc-news-post">

					<h2>
						<a>
							${post.title}
						</a>
					</h2>

					${post.content}

				</div>
			`;
		}

		let sidebarHTML = "";

		for (const section of minecraftSidebar) {

			sidebarHTML += `
				<div class="mc-sidebar-section">

					<h3>${section.title}</h3>
			`;

			if (section.links) {

				for (const link of section.links) {

					sidebarHTML += `
						<a href="${link.url}" target="_blank">
							${link.name}
						</a>
					`;
				}
			}

			if (section.custom) {
				sidebarHTML += section.custom;
			}

			sidebarHTML += `</div>`;
		}

		const content = `
			<div class="mc-launcher">

				<div class="mc-tabs">
					<div class="mc-tab active">
						Update Notes
					</div>

					<div class="mc-tab">
						Launcher Log
					</div>

					<div class="mc-tab">
						Profile Editor
					</div>
				</div>

				<div class="mc-main">

					<div class="mc-news">

						<div class="mc-news-content">

							<h1>Minecraft News</h1>

							${newsHTML}

						</div>

					</div>

					<div class="mc-sidebar">

						${sidebarHTML}

					</div>

				</div>

				<div class="mc-bottom">

					<div class="mc-profile">

						<label>Profile:</label>

						<select>
							<option>1.21.11</option>
							<option>Latest Release</option>
							<option>1.12.4</option>
						</select>

						<div class="mc-profile-buttons">
							<button>New Profile</button>
							<button>Edit Profile</button>
						</div>

					</div>

					<div class="mc-play-area">

						<button class="mc-play-btn">
							Play
						</button>

					</div>

					<div class="mc-status">

						<div>
							Welcome, <b>${username}</b>
						</div>

						<div>
							Ready to update & play Minecraft
						</div>

						<button class="mc-switch-user">
							Switch User
						</button>

					</div>

				</div>

			</div>
		`;

		const win = createWindow(
			"Minecraft Launcher",
			content,
			120,
			40,
			880
		);

		const playBtn =
			win.querySelector(".mc-play-btn");

		playBtn.onclick = () => {

			playBtn.textContent = "Launching...";

			setTimeout(() => {
				playBtn.textContent = "Play";
			}, 3000);

			//console.log("[Minecraft] Launch requested");
		};
	}

	function openLink(input) {
		window.open(input, "_blank");
	}
	
	function createDesktopIcons() {
		const desktopEl = document.querySelector(".desktop");
		if (!desktopEl) return;

		const iconLayer = document.createElement("div");
		iconLayer.className = "desktop-icons";

		desktop.forEach(item => {

			const icon = document.createElement("div");
			icon.className = "desktop-icon";

			icon.innerHTML = `
				<div class="desktop-icon-img"
					style="background-image:url('${item.icon}')"></div>
				<div class="desktop-icon-label">${item.name}</div>
			`;

			icon.onclick = (e) => {
				e.stopPropagation();
				if (item.onClick) item.onClick();
			};

			iconLayer.appendChild(icon);
		});

		desktopEl.appendChild(iconLayer);
	}


	const trashFiles = [
		{ name: "2026-05-09 18.33.42.png", path: "images/2026-05-09_18.33.42.png" },
		{ name: "2026-05-23 06.49.02.png", path: "images/2026-05-23_06.49.02.png" },
		//{ name: "Anthem of Rakau.mp3", path: "audio/forest.mp3", type: "audio" }
	];

	function openTrash() {

		let filesHTML = "";

		for (const file of trashFiles) {

			filesHTML += `
				<div class="file" onclick="window.openFile(${JSON.stringify(file).replace(/"/g, '&quot;')})">
					<img src="icons/image.png">
					<div>${file.name}</div>
				</div>
			`;
		}

		createWindow(
			"Trash",
			`
			<div class="file-grid">
				${filesHTML}
			</div>
			`,
			300
		);
	}



	window.addEventListener("DOMContentLoaded", createDesktopIcons);

	const startMenuContent =
		document.getElementById("startMenuContent");

	startMenuContent.appendChild( createMenu(startMenuData) );

	const startButton = document.getElementById("startButton");

	const startMenu = document.getElementById("startMenu");

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
