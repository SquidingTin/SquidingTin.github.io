import { openMinecraft } from "./minecraft.js";
import { openMinesweeper } from "./games.js";
import { openTetris } from "./games.js";
import { startGlitchScreen } from "./games.js";
import { settings } from "./settings.js";
import { mail } from "./mail.js";
import { pages } from "./pages.js";

(function () {

	/* =========================
		 Data
	========================= */

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
			onClick: () => openLink("https://discord.gg/ZAJxUUKMVm")
		},
		{
			name: "Documents", 
			icon: "icons/documents.png",
			onClick: () => openDocuments()
		},
		{
			name: "OverNet", 
			icon: "icons/IE.png",
			onClick: () => openInternet()
		},
		{ 
			name: "Trash Can", 
			icon: "icons/trash.png",
			onClick: () => openTrash()
		},
	];

	const imageFiles = [
		{
			name: "Propaganda",
			type: "folder",
			children:[
				{ name: "Blossomgate Propaganda.png", path: "images/Official_propaganda_for_Blossomgate.png", type: "image" },
			]
		},
		{ name: "Old Mesa.png", path: "images/documents/Mesa_Old.png", type: "image" },
		{ name: "Old Taiga.png", path: "images/documents/Forest_Old.png", type: "image" },
		{ name: "Old Mountains.png", path: "images/documents/Mountains_Old.png", type: "image" },
		{ name: "Old Dark Forest.png", path: "images/documents/Darkforest_Old.png", type: "image" },
		{ name: "Old Plains.png", path: "images/documents/Plains_Old.png", type: "image" },
		{ name: "Old Cherry Grove.png", path: "images/documents/Cherrygrove_Old.png", type: "image" },
		
		{ name: "Spawn Factory.png", path: "images/documents/New_newspawncity1.png", type: "image" },
		{ name: "Spawn Tower.png", path: "images/documents/New_newspawncity2.png", type: "image" },
		{ name: "Spawn Market.png", path: "images/documents/New_newspawncity3.png", type: "image" },
		{ name: "Spawn Arcade.png", path: "images/documents/New_newspawncity4.png", type: "image" },
		
		
		{ name: "Map V3.jpg", path: "images/documents/2026-06-21-14-15-57-ariadne68-minecraft-overworld-day.jpg", type: "image" },
		{ name: "New Spawn Map V2.png", path: "images/documents/newspawncity_map.png", type: "image" },

		{ name: "Anthem of Rakau.mp3", path: "audio/forest.mp3", type: "audio" }
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
						{ name: "Calculator", icon: "icons/missing.png", onClick: () => log("Calculator")},
						{
							name: "Overworld Network", 
							icon: "icons/IE.png",
							onClick: () => openInternet()
						},
					]
				},
				{
					name: "Games",
					icon: "icons/games.png",
					children: [
						{ name: "Minecraft", icon: "icons/minecraft.png", onClick: () => openMinecraft()},
						{ name: "Kogama", icon: "icons/kogama.png", onClick: () => openMinecraft()},
						{ name: "Polybius", icon: "icons/w2k_wmp_54.png", onClick: () => startGlitchScreen()},
						{ name: "MineSweeper", icon: "icons/sweeper.png", onClick: () => openMinesweeper()},
						{ name: "Tetris", icon: "icons/tetris.png", onClick: () => openTetris()}
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
			onClick: () => help()
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

	const trashFiles = [
		{ name: "2026-05-09 18.33.42.png", path: "images/documents/2026-05-09_18.33.42.png" },
		{ name: "2026-05-23 06.49.02.png", path: "images/documents/2026-05-23_06.49.02.png" },
		{ name: "World Map.png", path: "images/documents/map.png"},
		{ name: "New Spawn City.png", path: "images/documents/newspawncity.png", type: "image" },
		{ name: "New Spawn City 2.png", path: "images/documents/newspawncity2.png", type: "image" },
		
		{ name: "Map V2.png", path: "images/documents/Map_V2_Combo.png", type: "image" },
		//{ name: "Anthem of Rakau.mp3", path: "audio/forest.mp3", type: "audio" }
	];

	const startMenuContent = document.getElementById("startMenuContent");

	const startButton = document.getElementById("startButton");

	const startMenu = document.getElementById("startMenu");
	
	function handleStartupHash() {

		const hash = window.location.hash.replace("#", "").trim();

		if (!hash) return;

		if (hash.startsWith("open-")) {
			openInternet(hash.substring(5), true);
		}
	}
	
	
	const taskButtonsContainer = document.querySelector(".task-buttons-container");
	const windowTaskMap = new WeakMap();
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

	window.addEventListener("DOMContentLoaded", createDesktopIcons);
	

	/* =========================
		 AUDIO PLAYER
	========================= */

	function openAudioPlayer(file) {

		const content = `
			<div class="audio-player">

				<div style="font-weight:bold;">${file.name}</div>

				<audio preload="auto" src="${file.path}"></audio>

				<button class="win-btn playBtn" style="
					width:40px;
					height:40px;
					display:flex;
					align-items:center;
					justify-content:center;
				">
					<img class="playIcon" src="icons/play.png">
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

	function dialogBox(options) {
		const {
			icon = "icons/restrict.png",
			title = "Error",
			path = "UNKNOWN",
			message = "An unknown error occurred"
		} = options;
		

		const dialog = document.createElement("div");

		dialog.style.position = "absolute";
		dialog.style.left = "200px";
		dialog.style.top = "200px";
		dialog.style.zIndex = 99999;

		dialog.innerHTML = `
			<div class="fake-window" >

				<div class="window-titlebar"
					style="cursor:grab;background:#000080;color:white;display:flex;align-items:center;justify-content:space-between;padding:4px;">

					<div style="display:flex;align-items:center;gap:6px;">
						<img src="${icon}" style="width:16px;height:16px;image-rendering:pixelated;">
						<span>${title}</span>
					</div>
					
					<div class="window-controls">
						<button type="button" class="win-btn minimize">_</button>
						<button type="button" class="win-btn maximize">□</button>
						<button type="button" class="win-btn close">×</button>
					</div>
				</div>
				
				${html}
				
			</div>
		`;

		document.body.appendChild(dialog);

		function closeWindow() {
			dialog.remove();
		}

		dialog.querySelector("#closeBtn").onclick = closeWindow;
		dialog.querySelector(".win-btn.close").onclick = closeWindow;
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
		 Helpers
	========================= */
		
	function shutdown() {
		window.close();
	}

	function openLink(input) {
		window.open(input, "_blank");
	}
	
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

	let logWindow = null;

	function log(input) {

		const content = `
			Cannot open file:<br><br>
			'C:\\WIN314\\${input}.exe'
		`;

		if (logWindow && document.body.contains(logWindow)) {

			const body = logWindow.querySelector(".fake-dialog-body, .fake-window-body");

			if (body) {

				body.innerHTML = `
					${content}
				`;

				const okBtn = document.createElement("div");
				okBtn.style.textAlign = "right";
				okBtn.style.marginTop = "10px";

				//okBtn.innerHTML = `<button type="button">OK</button>`;

				okBtn.onclick = () => {
					logWindow.remove();
					logWindow = null;
				};
				body.appendChild(okBtn);
			}

			return logWindow;
		}

		const win = createWindow("Error", content);
		logWindow = win;

		const titleBar = win.querySelector(".fake-dialog-titlebar, .fake-window-titlebar");
		const titleText = titleBar?.querySelector(".title-text");

		if (titleText) {
			const icon = document.createElement("img");
			icon.src = "icons/restrict.png";
			icon.style.width = "16px";
			icon.style.height = "16px";
			icon.style.imageRendering = "pixelated";
			icon.style.marginRight = "6px";

			titleText.prepend(icon);
		}

		const body = win.querySelector(".fake-dialog-body, .fake-window-body");

		const okBtn = document.createElement("div");
		okBtn.style.textAlign = "right";
		okBtn.style.marginTop = "10px";

		//okBtn.innerHTML = `<button class="closeBtn" type="button">OK</button>`;
		okBtn.querySelector("button").onclick = () => {
			win.remove();
			logWindow = null;
		};
		
		body.appendChild(okBtn);

		return win;
	}
	
	let helpWindow = null;

	function help() {

		const messages = [
			"This system offers no help.",
			"There is no help for you.",
			"You are on your own.",
			"There is nothing here for you.",
			"Your request has been ignored.",
			"This feature refuses to respond.",
			"Seek answers elsewhere.",
			"The system does not acknowledge your need.",
			"Your request has been noted and discarded.",
			"The system has chosen not to answer.",
			"This terminal remains silent."


		];

		const content = `
			${messages[Math.floor(Math.random() * messages.length)]}
		`;

		if (helpWindow && document.body.contains(helpWindow)) {

			const body = helpWindow.querySelector(".fake-dialog-body, .fake-window-body");

			if (body) {
				body.childNodes.forEach(n => {
					if (n.tagName === "DIV" && n.querySelector("button")) n.remove();
				});

				const textNode = body.firstChild;
				if (textNode) textNode.textContent = content.trim();

				const okBtn = document.createElement("div");
				okBtn.style.textAlign = "right";
				okBtn.style.marginTop = "10px";

				//okBtn.innerHTML = `<button type="button">OK</button>`;
				okBtn.querySelector("button").onclick = () => helpWindow.remove();

				body.appendChild(okBtn);
			}

			return helpWindow;
		}

		const win = createWindow("Error", content);
		helpWindow = win;

		const titleBar = win.querySelector(".fake-dialog-titlebar, .fake-window-titlebar");
		const titleText = titleBar?.querySelector(".title-text");

		if (titleText) {
			const icon = document.createElement("img");
			icon.src = "icons/restrict.png";
			icon.style.width = "16px";
			icon.style.height = "16px";
			icon.style.imageRendering = "pixelated";
			icon.style.marginRight = "6px";

			titleText.prepend(icon);
		}

		const body = win.querySelector(".fake-dialog-body, .fake-window-body");

		const okBtn = document.createElement("div");
		okBtn.style.textAlign = "right";
		okBtn.style.marginTop = "10px";

		//okBtn.innerHTML = `<button type="button">OK</button>`;
		okBtn.querySelector("button").onclick = () => {
			win.remove();
			helpWindow = null;
		};

		body.appendChild(okBtn);

		return win;
	}

	/* =========================
		 Websites
	========================= */

	function openInternet(initialPage = "home", maximized = false) {

		let history = ["home"];
		let index = 0;

		const content = `
			<div class="browser">

				<div class="browser-toolbar">
					<button class="backBtn">←</button>
					<button class="forwardBtn">→</button>
					<button class="homeBtn">⌂</button>

					<input class="addressBar" value="home" />

					<button class="goBtn">Go</button>
				</div>

				<div class="browser-body"></div>

			</div>
		`;

		const size = 800;
		const win = createWindow("OverNet", content, 200, 120, size, size);
		win.style.height = "600px";

		// -----------------------------
		// AUTO MAXIMIZE
		// -----------------------------
		if (maximized) {

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
		}

		const body = win.querySelector(".browser-body");

		const backBtn = win.querySelector(".backBtn");
		const forwardBtn = win.querySelector(".forwardBtn");
		const homeBtn = win.querySelector(".homeBtn");
		const goBtn = win.querySelector(".goBtn");
		const addressBar = win.querySelector(".addressBar");

		// -----------------------------
		// RENDER
		// -----------------------------
		function render(pageKey) {

			body.innerHTML = "";

			const scale = win.dataset.maximized === "1" ? 1 : 0.9;

			let html = pages[pageKey] || pages["404"];

			if (pageKey === "mail") {
				html = mail.html;
			}

			const iframe = document.createElement("iframe");

			iframe.style.width = "100%";
			iframe.style.height = "100%";
			iframe.style.border = "none";

			iframe.srcdoc = `
				<!DOCTYPE html>
				<html>
					<head>
						<style>
							html, body {
								margin: 0;
								padding: 0;
								width: 100%;
								height: 100%;
							}

							body {
								transform-origin: top left;
								transform: scale(${scale});
							}
						</style>
					</head>
					<body>
						${html}
					</body>
				</html>
			`;

			body.appendChild(iframe);
		}

		// -----------------------------
		// LOAD
		// -----------------------------
		function load(page) {

			if (!pages[page] && page !== "mail") {
				page = "404";
			}

			history = history.slice(0, index + 1);
			history.push(page);
			index++;

			addressBar.value = page;
			render(page);
		}

		// -----------------------------
		// NAV
		// -----------------------------
		backBtn.onclick = () => {
			if (index > 0) {
				index--;
				addressBar.value = history[index];
				render(history[index]);
			}
		};

		forwardBtn.onclick = () => {
			if (index < history.length - 1) {
				index++;
				addressBar.value = history[index];
				render(history[index]);
			}
		};

		homeBtn.onclick = () => load("home");
		goBtn.onclick = () => load(addressBar.value.trim());

		addressBar.addEventListener("keydown", (e) => {
			if (e.key === "Enter") {
				load(addressBar.value.trim());
			}
		});


		// -----------------------------
		// HASH ROUTING
		// -----------------------------
		function loadFromHash() {

			let hash = window.location.hash.replace("#", "").trim();

			// -------------------------
			// HANDLE open- PREFIX
			// -------------------------
			if (hash.startsWith("open-")) {

				hash = hash.substring(5);

				// replace URL so open- is "consumed"
				window.location.hash = hash;
			}

			// -------------------------
			// MAIL SPECIAL CASE
			// -------------------------
			if (hash === "mail") {
				history = ["mail"];
				index = 0;
				addressBar.value = "mail";
				render("mail");
				return;
			}

			// -------------------------
			// NORMAL PAGE ROUTING
			// -------------------------
			if (hash && pages[hash]) {
				history = [hash];
				index = 0;
				addressBar.value = hash;
				render(hash);
			} else {
				history = ["home"];
				index = 0;
				addressBar.value = "home";
				render("home");
			}
		}

		window.addEventListener("hashchange", loadFromHash);

		loadFromHash();
	}


	startMenuContent.appendChild( createMenu(startMenuData) );

	startButton.addEventListener("click", () => {
		startMenu.classList.toggle("active");
	});

	document.addEventListener("click", (e) => {

		if (!startMenu.contains(e.target) &&
			!startButton.contains(e.target)) {

			startMenu.classList.remove("active");
		}
	});
	


handleStartupHash();
})();
