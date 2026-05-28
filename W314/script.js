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

	const pages = {
		home: `
			<!DOCTYPE html>
			<html>
				<head>
					<style>
						
						body {
							font-family: Arial, sans-serif;
							background: #0f1117;
							color: #ffffff;
							margin: 0;

							display: flex;
							justify-content: center;
							align-items: center;
							min-height: 100vh;
							text-align: center;
						}

						.home-container {
							width: 100%;
							max-width: 1000px;

							display: flex;
							flex-direction: column;
							align-items: center;
						}

						.home-header {
							display: flex;
							flex-direction: column;
							align-items: center;
						}

						.home-title {
							font-size: 42px;
							font-weight: bold;
							margin-bottom: 10px;
						}

						.home-subtitle {
							color: #9ca3af;
							margin-bottom: 40px;
							font-size: 16px;
						}

						.page-grid {
							display: grid;
							grid-template-columns: repeat(auto-fit, 180px);
							gap: 18px;

							width: 100%;
							justify-content: center;
						}

						.page-card {
							background: #1a1d27;
							border: 1px solid #2a2f3d;
							border-radius: 14px;
							padding: 20px;
							cursor: pointer;
							transition:
								transform 0.15s ease,
								background 0.15s ease,
								border-color 0.15s ease;
							text-align: center;
						}

						.page-card:hover {
							background: #232838;
							border-color: #4b5563;
							transform: translateY(-2px);
						}

						.page-icon {
							width: 58px;
							height: 58px;
							margin: 0 auto 14px auto;
							border-radius: 12px;
							background: linear-gradient(
								135deg,
								#3b82f6,
								#1d4ed8
							);
							display: flex;
							align-items: center;
							justify-content: center;
							font-size: 28px;
							font-weight: bold;
							box-shadow: 0 4px 12px rgba(0,0,0,0.4);
						}

						.page-name {
							font-size: 17px;
							font-weight: bold;
							margin-bottom: 6px;
						}

						.page-url {
							font-size: 13px;
							color: #9ca3af;
							word-break: break-word;
						}
					</style>
				</head>

				<body>
					<script>
						function openPage(page) {
							location.hash = page;
						}
					</script>

					<div class="home-container">

						<div class="home-header">
							<div class="home-title">
								New Tab
							</div>

							<div class="home-subtitle">
								Frequently visited pages
							</div>
						</div>

						<div class="page-grid">

							<div class="page-card" onclick="parent.location.hash='ironco'">

								<div class="page-icon">
									I
								</div>

								<div class="page-name">
									Iron Co
								</div>

								<div class="page-url">
									www.ironco.net
								</div>

							</div>

							<div class="page-card" onclick="parent.location.hash='404'">

								<div class="page-icon">
									TDE
								</div>

								<div class="page-name">
									The Daily Emerald
								</div>

								<div class="page-url">
									www.DailyEmerald.com
								</div>

							</div>

							<div class="page-card" onclick="parent.location.hash='404'">

								<div class="page-icon">
									M
								</div>

								<div class="page-name">
									Mine Mail
								</div>

								<div class="page-url">
									www.m-mail.com
								</div>
								

							<div class="page-card" onclick="parent.location.hash='AngelElectronics'">

								<div class="page-icon">
									AE
								</div>

								<div class="page-name">
									AngelElectronics
								</div>

								<div class="page-url">
									www.AngelElectronics.com
								</div>

							</div>

							</div>

						</div>

					</div>

				</body>
			</html>
		`,

		ironco: `
			<!DOCTYPE html>
			<html>
				<head>
					<style>
						body {
						font-family: Arial, sans-serif;
						background-color: #0f0f12;
						background-image:
							linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),
							url("blocks/iron_block.png");
						background-repeat: repeat;
						background-size: 64px 64px;
						color: #e6e6e6;
						margin: 0;
						padding: 0;
						}

						header {
						  background: #1c1c22;
						  padding: 20px;
						  border-bottom: 2px solid #333;
						  text-align: center;

						  width: 125%;
						  box-sizing: border-box;
						}

						header h1 {
							margin: 0;
							font-size: 28px;
							color: #f2b705;
							text-align: center;
						}

						header p {
							margin: 5px 0 0;
							color: #aaa;
						}

						.container {
							padding: 20px;
							max-width: 900px;
							margin: auto;
						}

						.card {
							background: #1a1a1f;
							padding: 15px;
							margin-bottom: 15px;
							border-left: 4px solid #f2b705;
						}

						.card h2 {
							margin-top: 0;
							color: #fff;
						}

						.tag {
							display: inline-block;
							background: #333;
							padding: 3px 8px;
							font-size: 12px;
							margin-right: 5px;
							border-radius: 4px;
							color: #bbb;
						}

						footer {
							text-align: center;
							padding: 20px;
							color: #666;
							border-top: 1px solid #222;
							margin-top: 20px;
						}
					</style>
				</head>

				<body>
				<header>
					<h1>Iron Co News Network</h1>
					<p>Minecraft Industry & Labor Updates</p>
				</header>

				<div class="container">

					<div class="card">
						<h2>Iron Co Reaffirms Long Standing Ban on Iron Farms</h2>
						<span class="tag">Ethics</span>
						<span class="tag">Policy</span>
						<p>
							Iron Co has once again confirmed that it has never constructed or operated iron farms in any capacity.
							The company maintains that automated iron production systems are incompatible with its ethical mining standards,
							citing concerns over the mass containment and repeated destruction of iron golems.
						</p>
					</div>

					<div class="card">
						<h2>Hiring Surge: “Respect for Life in the Overworld Required”</h2>
						<span class="tag">Jobs</span>
						<span class="tag">Recruitment</span>
						<p>
							Iron Co is expanding its workforce, seeking miners, transport runners, and forge assistants who align with its
							“life-first resource extraction philosophy.” Applicants must agree to strict guidelines prohibiting automated
							iron farming practices and demonstrating humane treatment of village iron golems.
						</p>
					</div>

					<div class="card">
						<h2>CEO Statement: “We Do Not Industrialize Sentient Constructs”</h2>
						<span class="tag">Opinion</span>
						<p>
							“Iron golems are not machinery,” the CEO stated in a recent address.
							“They are protective constructs formed through village care and intent.
							We refuse to participate in systems that endlessly spawn and dismantle them for efficiency.”
						</p>
					</div>

					<div class="card">
						<h2>Internal Compliance Report: Zero Iron Farm Activity Recorded</h2>
						<span class="tag">Report</span>
						<p>
							Annual audits confirm Iron Co facilities have never implemented iron farm infrastructure.
							All iron supply chains are verified through manual mining, trading halls, and exploration-based recovery operations.
							The company describes this as “sustainable, non-exploitative resource acquisition.”
						</p>
					</div>

					<div class="card">
						<h2>Upcoming Infrastructure Projects: Regional Mining Expansion</h2>
						<span class="tag">Future</span>
						<p>
							Iron Co plans to expand its underground operations with newly mapped mining corridors,
							improved rail logistics between villages, and centralized smelting hubs powered by renewable lava flow systems.
						</p>
					</div>

				</div>

				<footer>
					© Iron Co Internal News Network - Not affiliated with Mojang
				</footer>
				</body>
			</html>
			`,
		AngelElectronics: `
			<!DOCTYPE html>
			<html>
				<head>
					<style>
						body {
							margin: 0;
							padding: 0;
							background-color: #0b0f0d;
							background-image:
								linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
								repeating-linear-gradient(90deg, #111 0px, #111 2px, #0b0f0d 2px, #0b0f0d 40px),
								repeating-linear-gradient(0deg, #111 0px, #111 2px, #0b0f0d 2px, #0b0f0d 40px);
							color: #c8ffe1;
							font-family: "Courier New", monospace;
							display: flex;
							justify-content: center;
							align-items: flex-start;
							min-height: 100vh;
						}

						.panel {
							margin-top: 40px;
							width: 900px;
							background: rgba(0, 0, 0, 0.75);
							border: 2px solid #00ff99;
							box-shadow: 0 0 25px rgba(0,255,153,0.15);
						}

						.header {
							padding: 20px;
							border-bottom: 2px solid #00ff99;
							background: linear-gradient(90deg, rgba(0,255,153,0.15), transparent);
						}

						.header h1 {
							margin: 0;
							font-size: 28px;
							color: #00ff99;
							letter-spacing: 2px;
						}

						.header p {
							margin: 5px 0 0 0;
							color: #9fffd5;
							font-size: 13px;
						}

						.grid {
							display: grid;
							grid-template-columns: 1fr 1fr;
							gap: 0;
						}

						.section {
							padding: 18px;
							border-right: 1px solid #123;
							border-bottom: 1px solid #123;
						}

						.section h2 {
							margin: 0 0 10px 0;
							font-size: 14px;
							color: #00ff99;
							text-transform: uppercase;
							letter-spacing: 1px;
						}

						.node {
							background: rgba(0,255,153,0.05);
							border: 1px solid rgba(0,255,153,0.2);
							padding: 8px;
							margin: 6px 0;
							font-size: 13px;
						}

						.tag {
							display: inline-block;
							padding: 2px 6px;
							margin-right: 5px;
							font-size: 11px;
							color: #0b0f0d;
							background: #00ff99;
						}

						.wire {
							height: 2px;
							background: linear-gradient(90deg, transparent, #00ff99, transparent);
							margin: 10px 0;
						}

						.footer {
							padding: 12px;
							font-size: 11px;
							color: #6affc2;
							border-top: 1px solid #123;
							text-align: center;
						}

						.status {
							float: right;
							color: #00ff99;
							font-size: 12px;
						}
					</style>
				</head>

				<body>
					<div class="panel">
						
						<div class="header">
							<h1>Angel Electronics <span class="status">ONLINE // POWER: STABLE</span></h1>
							<p>Redstone Wiring Division | The Forest of Rakau Network Node</p>
						</div>

						<div class="grid">

							<div class="section">
								<h2>System Overview</h2>
								<div class="node">
									<span class="tag">CORE</span> High efficiency redstone circuitry manufacturing
								</div>
								<div class="node">
									<span class="tag">FIELD</span> Tactical wiring systems for client installations
								</div>
								<div class="node">
									<span class="tag">AUTO</span> Self-triggered mechanical and trap systems
								</div>
							</div>

							<div class="section">
								<h2>Live Projects</h2>
								<div class="node">
									<b>S.A.P.M Mk V</b> — Sound Activated Proximity Mines (Ambush Protocol)
								</div>
								<div class="node">
									<b>Project Skybreaker</b> — High altitude redstone deployment network
								</div>
								<div class="node">
									<b>M.A.B</b> — Modular Assault Block system (Big Boi Class)
								</div>
							</div>

							<div class="section">
								<h2>Wiring Network Status</h2>
								<div class="node">Main Grid: <span style="color:#00ff99;">STABLE</span></div>
								<div class="node">Defense Circuits: <span style="color:#00ff99;">ARMED</span></div>
								<div class="node">Hidden Traces: <span style="color:#ff5555;">CLASSIFIED</span></div>
								<div class="wire"></div>
								<div class="node">Signal Integrity: 98.4%</div>
							</div>

							<div class="section">
								<h2>Hierarchy Node Map</h2>
								<div class="node">Intern → Basic wiring access</div>
								<div class="node">Grad 3 → Assembly circuits</div>
								<div class="node">Grad 2 → System design</div>
								<div class="node">Grad 1 → Core architecture</div>
								<div class="node">Archangel → Classified systems</div>
								<div class="node">Ten Heavenly → Network control</div>
								<div class="node">CEO → Root access</div>
							</div>

							<div class="section" style="grid-column: span 2;">
								<h2>Active Engineers</h2>
								<div class="node">Curious_Angel21 — ROOT / CEO</div>
								<div class="node">TechmanJ27 — Grad 2 // Circuit Specialist</div>
								<div class="node">AnonKayla — Grad 2 // Logic Systems</div>
								<div class="node">Peepz2010 — Intern // Training Node</div>
							</div>

						</div>

						<div class="footer">
							ANGEL ELECTRONICS NETWORK // ALL CIRCUITS RUNNING NORMALLY // DO NOT TRACE CLASSIFIED LINES
						</div>

					</div>
				</body>
			</html>
		`,

		404: `
			<!DOCTYPE html>
			<html>
			<head>
				<style>
					body {
						margin: 0;
						padding: 0;
						background-color: #3b2f2f;
						background-image:
							linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)),
							url("blocks/dirt.png");
						background-size: 64px 64px;
						color: #ffffff;
						font-family: "Courier New", monospace;
						display: flex;
						justify-content: center;
						align-items: center;
						height: 100vh;
						text-align: center;
					}

					.container {
						background: rgba(0, 0, 0, 0.6);
						border: 4px solid #2e7d32;
						padding: 30px 40px;
						box-shadow: 0 0 0 4px #1b1b1b;
						max-width: 500px;
					}

					h1 {
						margin: 0 0 10px 0;
						font-size: 28px;
						color: #ff5555;
						letter-spacing: 2px;
						text-transform: uppercase;
					}

					p {
						margin: 8px 0;
						font-size: 16px;
						color: #e0e0e0;
					}

					.block {
						margin-top: 15px;
						padding: 10px;
						background: #2e7d32;
						border: 3px solid #1b5e20;
						font-weight: bold;
					}

					.mini {
						font-size: 12px;
						color: #bdbdbd;
						margin-top: 10px;
					}
				</style>
			</head>
			<body>
				<div class="container">
					<h1>404</h1>
					<p>Page Not Found</p>
					<div class="block">You seem to be lost in the world...</div>
					<p class="mini">Try going back or entering a valid block address.</p>
				</div>
			</body>
			</html>
			`
	};




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

		if (!value) {
			desktop.style.backgroundImage = "none";
			desktop.style.backgroundColor = "#008282";
		} else {
			desktop.style.backgroundImage = `url("${value}")`;
			desktop.style.backgroundColor = "";
		}
	}

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
	

	function log(input) {

		const content = `
			Cannot open file:<br><br>
			'C:\\WIN314\\${input}.exe'
		`;

		const win = createWindow("Error", content);

		// find title text container (adjust selector to your structure)
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

		okBtn.innerHTML = `<button type="button">OK</button>`;
		okBtn.querySelector("button").onclick = () => win.remove();

		body.appendChild(okBtn);

		return win;
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

	/* =========================
		 Websites
	========================= */
	function openInternet() {

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

		// square window (width = height)
		const size = 800;
		const win = createWindow("OverNet", content, 200, 120, size, size);
		win.style.height = "600px";
		
		const body = win.querySelector(".browser-body");

		const backBtn = win.querySelector(".backBtn");
		const forwardBtn = win.querySelector(".forwardBtn");
		const homeBtn = win.querySelector(".homeBtn");
		const goBtn = win.querySelector(".goBtn");
		const addressBar = win.querySelector(".addressBar");

		function render(pageKey) {

			body.innerHTML = "";

			const isMaximized = win.dataset.maximized === "1";
			const scale = isMaximized ? 1 : 0.9;

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
					${pages[pageKey] || pages["404"]}
				</body>
				</html>
			`;

			body.appendChild(iframe);
		}
		
		function load(page) {

			if (!pages[page]) page = "404";

			history = history.slice(0, index + 1);
			history.push(page);
			index++;

			addressBar.value = page;
			render(page);
		}

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

		homeBtn.onclick = () => {
			window.location.hash = "home";
		};

		goBtn.onclick = () => load(addressBar.value.trim());

		addressBar.addEventListener("keydown", (e) => {
			if (e.key === "Enter") {
				load(addressBar.value.trim());
			}
		});

		function loadFromHash() {

			const hash = window.location.hash.replace("#", "").trim();

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
