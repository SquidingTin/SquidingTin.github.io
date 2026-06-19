import { openMinecraft } from "./minecraft.js";
import { openMinesweeper } from "./games.js";
import { startGlitchScreen } from "./games.js";
import { settings } from "./settings.js";
import { mail } from "./mail.js";

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
		{ name: "Mesa.png", path: "images/mesa.png", type: "image" },
		{ name: "Taiga.png", path: "images/forest.png", type: "image" },
		{ name: "Mountains.png", path: "images/mountains.png", type: "image" },
		{ name: "Dark Forest.png", path: "images/darkforest.png", type: "image" },
		{ name: "Plains.png", path: "images/plains.png", type: "image" },
		{ name: "Cherry Grove.png", path: "images/cherrygrove.png", type: "image" },
		
		{ name: "Spawn Factory.png", path: "images/New_newspawncity1.png", type: "image" },
		{ name: "Spawn Tower.png", path: "images/New_newspawncity2.png", type: "image" },
		{ name: "Spawn Market.png", path: "images/New_newspawncity3.png", type: "image" },
		{ name: "Spawn Arcade.png", path: "images/New_newspawncity4.png", type: "image" },
		
		
		{ name: "Map V2.png", path: "images/Map_V2_Combo.png", type: "image" },
		{ name: "New Spawn Map V2.png", path: "images/newspawncity_map.png", type: "image" },

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
						{ name: "MineSweeper", icon: "icons/sweeper.png", onClick: () => openMinesweeper()}
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

	const pages = {
		home: `
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

							background: #1f2937; /* fallback background instead of gradient */
							display: flex;
							align-items: center;
							justify-content: center;

							box-shadow: 0 4px 12px rgba(0,0,0,0.4);
							overflow: hidden; /* important for images */
						}

						.page-icon img {
							width: 100%;
							height: 100%;
							object-fit: contain; /* keeps logo from stretching */
							padding: 10px; /* optional breathing room */
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

							<div class="page-card" onclick="parent.location.hash='rakau'">

								<div class="page-icon">
									R
								</div>

								<div class="page-name">
									Rakau
								</div>

								<div class="page-url">
									www.Rakau.Gov
								</div>

							</div>

							<div class="page-card" onclick="parent.location.hash='rakaufaith'">

								<div class="page-icon">
									RF
								</div>

								<div class="page-name">
									Rakau Faith
								</div>

								<div class="page-url">
									www.rakaufaith.com
								</div>

							</div>

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

							<div class="page-card" onclick="parent.location.hash='mail'">

								<div class="page-icon">
									M
								</div>

								<div class="page-name">
									Mine Mail
								</div>

								<div class="page-url">
									www.m-mail.com
								</div>

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
								

							<div class="page-card" onclick="parent.location.hash='cctc'">

								<div class="page-icon">
									TC
								</div>
								
								<div class="page-name">
									Cerasus Consolidated Traction Company
								</div>

								<div class="page-url">
									www.CCTC.net
								</div>

							</div>
								

							<div class="page-card" onclick="parent.location.hash='mooshroom'">

								<div class="page-icon">
									M
								</div>
								
								<div class="page-name">
									Mushroom Isles Archipelago
								</div>

								<div class="page-url">
									www.Mushroom.Gov
								</div>

							</div>
							
							<div class="page-card" onclick="parent.location.hash='greencross'">

								<div class="page-icon">
									G
								</div>
								
								<div class="page-name">
									Green Cross
								</div>

								<div class="page-url">
									www.greencross.Gov
								</div>

							</div>
							
							<div class="page-card" onclick="parent.location.hash='herobrine'">

								<div class="page-icon">
									H
								</div>
								
								<div class="page-name">
									Disciples of Herobrine
								</div>

								<div class="page-url">
									www.Herobrine.xyz
								</div>

							</div>
							
							<div class="page-card" onclick="parent.location.hash='blossomgate'">

								<div class="page-icon">
									BG
								</div>
								
								<div class="page-name">
									Blossomgate Exchange
								</div>

								<div class="page-url">
									www.blossomgate.net
								</div>

							</div>
							
							<div class="page-card" onclick="parent.location.hash='interbiome'">

								<div class="page-icon">
									IB
								</div>
								
								<div class="page-name">
									Inter-Biome Democratic Alliance
								</div>

								<div class="page-url">
									www.interbiome.net
								</div>

							</div>
							
							<div class="page-card" onclick="parent.location.hash='endx'">

								<div class="page-icon">
									<img src="images/company/EndX/icon.png" alt="EndX">
								</div>
								
								<div class="page-name">
									EndX
								</div>

								<div class="page-url">
									www.EndX.com
								</div>

							</div>

						</div>

					</div>

		`,

		ironco: `
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
							overflow-x: hidden;
						}

						header {
							background: #1c1c22;
							padding: 20px;
							border-bottom: 2px solid #333;
							text-align: center;

							width: 125%;
							box-sizing: border-box;
						}

						.headercontainer {
							width: 90%;
							text-align: center;
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

				<header>
					<div class="headercontainer">
						<h1>
							<a href="https://dailyemerald.miraheze.org/wiki/Iron_Industries_Co."
							 target="_blank"
							 rel="noopener noreferrer"
							 style="text-decoration: none; color: inherit;">
							Iron Industries Co.
							</a>
						</h1>
						<p>Minecraft Industry & Labor Updates</p>
					<div>
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
			`,
		AngelElectronics: `
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
					<div class="panel">
						
						<div class="header">
						<h1>
							<a href="https://dailyemerald.miraheze.org/wiki/Angel_Electronics"
							 target="_blank"
							 rel="noopener noreferrer"
							 style="text-decoration: none; color: inherit;">
							Angel Electronics
							</a>
							<span class="status">ONLINE // POWER: STABLE</span>
						</h1>
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
									<b>S.A.P.M Mk V</b> — Sound Activated Proximity Mines (Code name: Ambush)
								</div>
								<div class="node">
									<b>M.A.B</b> — Military Air Bomber (Code name: Big Boi Class)
								</div>
								<div class="node">
									<b>Project Skybreaker</b>
								</div>
							</div>

							<div class="section">
								<h2>Wiring Network Status</h2>
								<div class="node">Main Grid: <span style="color:#00ff99;">STABLE</span></div>
								<div class="node">Defense Circuits: <span style="color:#00ff99;">ARMED</span></div>
								<div class="node">Project Skybreaker: <span style="color:#ff5555;">CLASSIFIED</span></div>
								<div class="wire"></div>
								<div class="node">Signal Integrity: 98.4%</div>
							</div>

							<div class="section">
								<h2>Hierarchy Node Map</h2>
								<div class="node">CEO → Root access</div>
								<div class="node">Archangel → Classified systems</div>
								<div class="node">Ten Heavenly → Network control</div>
								<div class="node">Grad 3 → Assembly circuits</div>
								<div class="node">Grad 2 → System design</div>
								<div class="node">Grad 1 → Core architecture</div>
								<div class="node">Intern → Basic wiring access</div>
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
		`,

		404: `
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
					<div class="container">
						<h1>404</h1>
						<p>Page Not Found</p>
						<div class="block">You seem to be lost in the world...</div>
						<p class="mini">Try going back or entering a valid block address.</p>
					</div>
			`,
			
			cctc: `
					<style>
						body{
							margin:0;
							background:#f3f0e8;
							color:#1f1f1f;
							background-image:
								linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)),
								url("blocks/rail_round_block.png");
							background-size: 64px 64px;
							font-family:Arial, Helvetica, sans-serif;
							line-height:1.6;
							overflow-x: hidden;
						}

						header{
							width:112%;
							box-sizing:border-box;
							background:
							linear-gradient(rgba(90,20,35,0.75), rgba(90,20,35,0.85));
							background-size:cover;
							background-position:center;
							color:white;
							padding:90px 40px;
							text-align:center;
							border-bottom:8px solid #741b2f;
						}
								
						.headercontainer {
							width: 90%;
							text-align: center;
						}

						header h1{
							margin:0;
							font-size:56px;
							letter-spacing:2px;
							text-transform:uppercase;
						}

						header p{
							font-size:20px;
							margin-top:10px;
							opacity:0.9;
						}

						nav{
							width:110%;
							background:#202020;
							padding:14px;
							text-align:center;
							position:sticky;
							top:0;
							z-index:10;
						}

						nav a{
							color:white;
							text-decoration:none;
							margin:0 18px;
							font-weight:bold;
							font-size:15px;
							transition:0.2s;
						}

						nav a:hover{
							color:#ffb3c7;
						}

						.hero{
							width:110%;
							background:#ffffff;
							padding:50px 30px;
							text-align:center;
							border-bottom:1px solid #d0d0d0;
						}

						.hero h2{
							font-size:40px;
							margin-bottom:10px;
							color:#741b2f;
						}

						.hero p{
							max-width:900px;
							margin:auto;
							font-size:18px;
							color:#444;
						}

						.container{
							width:95%;
							max-width:1400px;
							margin:auto;
							padding:40px 0;
						}

						.section{
							background:white;
							padding:35px;
							margin-bottom:35px;
							border-radius:10px;
							box-shadow:0 3px 10px rgba(0,0,0,0.1);
							border-top:6px solid #741b2f;
						}

						.section h2{
							margin-top:0;
							font-size:34px;
							color:#741b2f;
							border-bottom:2px solid #ddd;
							padding-bottom:10px;
						}

						.grid{
							display:grid;
							grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
							gap:20px;
							margin-top:25px;
						}

						.card{
							background:#fafafa;
							border:1px solid #ddd;
							border-radius:8px;
							padding:25px;
						}

						.card h3{
							margin-top:0;
							font-size:24px;
							color:#222;
						}

						.red{
							border-left:8px solid #c62828;
						}

						.blue{
							border-left:8px solid #1565c0;
						}

						.green{
							border-left:8px solid #2e7d32;
						}

						table{
							width:100%;
							border-collapse:collapse;
							margin-top:20px;
						}

						table th{
							background:#741b2f;
							color:white;
							padding:14px;
							text-align:left;
						}

						table td{
							padding:14px;
							border-bottom:1px solid #ddd;
						}

						.notice{
							background:#fff3cd;
							border-left:6px solid #ffb300;
							padding:20px;
							margin-top:20px;
							border-radius:6px;
						}

						.rules{
							background:#1f1f1f;
							color:#f5f5f5;
							padding:30px;
							border-radius:8px;
						}

						.rules h3{
							color:#ffb3c7;
							margin-top:30px;
						}

						.rules ul{
							padding-left:22px;
						}

						.quote-grid{
							display:grid;
							grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
							gap:20px;
							margin-top:25px;
						}

						.quote{
							background:#741b2f;
							color:white;
							padding:30px;
							border-radius:10px;
							font-size:22px;
							font-weight:bold;
							position:relative;
							overflow:hidden;
						}

						.quote span{
							display:block;
							margin-top:14px;
							font-size:14px;
							letter-spacing:2px;
							text-transform:uppercase;
							opacity:0.7;
						}
						
						.imageQuote{
							padding:0;
							background:#111;
							overflow:hidden;
							display:inline-block;
							height:auto;
						}

						.imageQuote img{
							width:100%;
							height:auto;
							display:block;
							object-fit:contain;
						}

						.imageQuote span{
							display:block;
							padding:18px;
						}

						footer{
							width:115%;
							background:#111;
							color:#aaa;
							text-align:center;
							padding:40px;
							margin-top:40px;
							font-size:14px;
						}

						.badge{
							display:inline-block;
							padding:6px 14px;
							border-radius:999px;
							font-size:13px;
							font-weight:bold;
							margin-bottom:12px;
							color:white;
						}

						.badge.red{
							background:#c62828;
						}

						.badge.blue{
							background:#1565c0;
						}

						.badge.green{
							background:#2e7d32;
						}
						
						.progressbar{
							width:100%;
							height:22px;
							background:#ddd;
							border-radius:999px;
							overflow:hidden;
							margin-top:10px;
						}

						.progressfill{
							height:100%;
							background:linear-gradient(90deg,#741b2f,#b03052);
							width:0%;
							transition:0.3s;
						}
					</style>


						<header>
							<div class="headercontainer">
								<h1>
									<a href="https://discord.gg/jsJpPTf7QZ"
									 target="_blank"
									 rel="noopener noreferrer"
									 style="text-decoration: none; color: inherit;">
									Cerasus Consolidated Traction Company
									</a>
								</h1>
								<p>Regional Rail • Interurbans • Iceways • Cherry Biome Transit Infrastructure</p>
							<div>
						</header>

						<nav>
						
							<div class="headercontainer">
								<a>Services</a>
								<a>Operations</a>
								<a>Iceways</a>
								<a>Construction</a>
								<a>Campaigns</a>
								<a>Rules</a>
							</div>
						</nav>

						<section class="hero">
							<div class="headercontainer">
								<h2>Rethink Travel</h2>
								<p>
									CCTC provides unified transportation throughout the Cherry Biome and beyond using high efficiency rail infrastructure,
									interurban service, elevated express corridors, and future high speed iceway systems.
								</p>
							</div>
						</section>

						<div class="container">

							<section class="section" id="services">
								<h2>Current Services</h2>

								<div class="grid">

									<div class="card red">
										<div class="badge red">Express</div>
										<h3>Direct to Selia Sakura</h3>
										<p>
											Nonstop elevated rapid service connecting downtown corridors with future expansion capability for integrated iceway conversion.
										</p>
									</div>

									<div class="card blue">
										<div class="badge blue">Interurban</div>
										<h3>Mob Farm / North Line</h3>
										<p>
											Regional trunk service providing integrated local and long distance transportation between settlements, farms, and infrastructure corridors.
										</p>
									</div>

									<div class="card green">
										<div class="badge green">Regional</div>
										<h3>East Line to Oggsybile</h3>
										<p>
											Extended regional rail service operating via eastern corridors with future expansion planned toward NST and Tradesburg.
										</p>
									</div>

								</div>

								<table>
									<tr>
										<th>Route</th>
										<th>Service Type</th>
										<th>Status</th>
									</tr>

									<tr>
										<td>Cherry Biome Railway</td>
										<td>Mainline Passenger Service</td>
										<td>Planning</td>
									</tr>

									<tr>
										<td>Creeper Farm → Oggys Ville</td>
										<td>Regional Connector</td>
										<td>Planning</td>
									</tr>

									<tr>
										<td>NST → Tradesburg</td>
										<td>Future Expansion</td>
										<td>Planning</td>
									</tr>
								</table>
							</section>
							
							<section class="section" id="progress">
								<h2>Construction Progress</h2>

								<div class="grid">

									<div class="card">
										<h3>Land Acquisition / Surveying</h3>
										<div class="progressbar">
											<div class="progressfill" style="width:0%;"></div>
										</div>
										<p>0%</p>
									</div>

									<div class="card">
										<h3>Resource Acquisition</h3>
										<div class="progressbar">
											<div class="progressfill" style="width:0%;"></div>
										</div>
										<p>0%</p>
									</div>

									<div class="card">
										<h3>Bridging / Tunneling</h3>
										<div class="progressbar">
											<div class="progressfill" style="width:0%;"></div>
										</div>
										<p>0%</p>
									</div>

									<div class="card">
										<h3>Station Construction</h3>
										<div class="progressbar">
											<div class="progressfill" style="width:0%;"></div>
										</div>
										<p>0%</p>
									</div>

									<div class="card">
										<h3>Track Placing / Redstoning</h3>
										<div class="progressbar">
											<div class="progressfill" style="width:0%;"></div>
										</div>
										<p>0%</p>
									</div>

									<div class="card">
										<h3>Service Testing</h3>
										<div class="progressbar">
											<div class="progressfill" style="width:0%;"></div>
										</div>
										<p>0%</p>
									</div>

								</div>

								<table>
									<tr>
										<th>Service Pattern</th>
										<th>Cities Served</th>
									</tr>

									<tr>
										<td>N/A</td>
										<td>N/A</td>
									</tr>
								</table>

							</section>
							<section class="section" id="operations">
								<h2>Rail Operations</h2>

								<div class="grid">

									<div class="card">
										<h3>Safety Systems</h3>
										<p>
											Crossings include auditory warnings, visual indicators, and physical barriers to prevent collisions and improve operational reliability.
										</p>
									</div>

									<div class="card">
										<h3>Speed & Efficiency</h3>
										<p>
											Rails utilize optimized 1-38 powered spacing grids to reduce environmental mining costs while maintaining consistent travel speeds up to 18 mph / 30 kmph.
										</p>
									</div>

									<div class="card">
										<h3>Station Design</h3>
										<p>
											Stations are standardized on fixed grid alignments and elevations for rapid construction, predictable navigation, and efficient service flow.
										</p>
									</div>

									<div class="card">
										<h3>Service Patterns</h3>
										<p>
											Express corridors prioritize nonstop operation while blue line interurban services provide local stopping patterns integrated with regional rail.
										</p>
									</div>

								</div>

								<div class="notice">
									<strong>Infrastructure Priority:</strong>
									All CCTC rail corridors prioritize straight and level alignments to minimize powered rail usage and reduce operational inefficiency.
								</div>

							</section>

							<section class="section" id="iceways">
								<h2>Iceway Operations</h2>

								<div class="grid">

									<div class="card">
										<h3>High Speed Infrastructure</h3>
										<p>
											Iceways minimize packed ice usage through controlled corridors, anti-derail walls, and anti-spawn button placement.
										</p>
									</div>

									<div class="card">
										<h3>Station Navigation</h3>
										<p>
											Distance markers and unique station indicators assist riders with orientation and provide rapid exit access before platforms.
										</p>
									</div>

									<div class="card">
										<h3>Controlled Access</h3>
										<p>
											Lower access stations and launch platforms prevent unauthorized travel while maintaining uninterrupted traffic flow.
										</p>
									</div>

									<div class="card">
										<h3>Integrated Transfers</h3>
										<p>
											Iceway services connect directly with feeder rail stations to support regional movement across long distance corridors.
										</p>
									</div>

								</div>

							</section>

							<section class="section" id="construction">
								<h2>Construction Standards</h2>

								<div class="grid">

									<div class="card">
										<h3>Urban Rail</h3>
										<p>
											Temporary street running tramways provide preliminary service before conversion into tunnel or elevated rapid transit corridors.
										</p>
									</div>

									<div class="card">
										<h3>Track Standards</h3>
										<p>
											Single track corridors are prioritized for rapid deployment with passing controlled manually until double tracking becomes mandatory.
										</p>
									</div>

									<div class="card">
										<h3>Viaducts</h3>
										<p>
											Elevated structures utilize cherry wood decking with reinforced stone supports sourced from local materials.
										</p>
									</div>

									<div class="card">
										<h3>Tunnel Systems</h3>
										<p>
											Tunnel entrances include emergency exits and efficient cobblestone construction standards to maximize resource efficiency.
										</p>
									</div>

								</div>

							</section>

							<section class="section" id="branding">
								<h2>Advertising Campaigns</h2>

								<div class="quote-grid">

									<div class="quote imageQuote">
										<img src="images/company/CCTC/horse.png">
									</div>

									<div class="quote imageQuote">
										<img src="images/company/CCTC/boat.png">
									</div>

									<div class="quote imageQuote">
										<img src="images/company/CCTC/arrow.png">
									</div>

									<div class="quote imageQuote">
										<img src="images/company/CCTC/firework.png">
									</div>

									<div class="quote imageQuote">
										<img src="images/company/CCTC/cart.png">
									</div>

								</div>

							</section>

							<section class="section" id="rules">
								<h2>System Rules & Right Of Way Regulations</h2>

								<div class="rules">

									<h3>Property & Airspace</h3>

									<ul>
										<li>CCTC retains exclusive rights to all vertical airspace from Y = 30 to the world height limit within unincorporated territories.</li>
										<li>CCTC controls a protected corridor extending one block to either side of active rail infrastructure.</li>
										<li>All crossings over rail infrastructure must maintain a minimum clearance of three blocks.</li>
									</ul>

									<h3>Infrastructure Protection</h3>

									<ul>
										<li>No player may damage, modify, obstruct, or interfere with CCTC infrastructure.</li>
										<li>No external rail systems may connect to the network without formal approval.</li>
										<li>Construction impacting CCTC property is subject to public review and authorization.</li>
									</ul>

									<h3>Station Conduct</h3>

									<ul>
										<li>Players may only interact with authorized controls and storage systems.</li>
										<li>Signs, displays, item frames, and informational infrastructure may not be altered.</li>
										<li>Unauthorized access points and hidden stations are prohibited.</li>
									</ul>

									<h3>Vehicle Rules</h3>

									<ul>
										<li>Minecarts and boats may not be deployed against designated travel directions.</li>
										<li>Mobs and unauthorized entities are prohibited from the network.</li>
										<li>Unoccupied carts, furnace carts, chest carts, hopper carts, and unauthorized boats are prohibited.</li>
									</ul>

									<h3>Passenger Safety</h3>

									<ul>
										<li>Passengers may not walk on active rail lines or iceways.</li>
										<li>Use of the CCTC system is entirely at rider risk.</li>
										<li>CCTC is not liable for item loss, injury, death, lag, glitches, or mob encounters.</li>
									</ul>

									<h3>Public Conduct</h3>

									<ul>
										<li>Harassment, spam, panhandling, threats, and rider disruption are prohibited on all CCTC property.</li>
									</ul>

								</div>

							</section>

						</div>

						<footer>
							Cerasus Consolidated Traction Company • Regional Transportation Authority • Cherry Biome Railway Company<br>
							Connecting Cherry Biome Communities Through Rail & Iceway Infrastructure
						</footer>

						`,
			
			mooshroom: `
						<style>
							body {
								margin: 0;
								font-family: Georgia, serif;
								background:
									linear-gradient(rgba(25,20,20,0.88), rgba(25,20,20,0.92)),
									url("blocks/Lodestone_top_block.png");
								background-size: cover;
								background-attachment: fixed;
								color: #f5e9e9;
								overflow-x: hidden;
							}

							header {
								width:112%;
								background:
									linear-gradient(rgba(120,30,50,0.85), rgba(70,15,25,0.92));
								padding: 70px 30px;
								text-align: center;
								border-bottom: 8px solid #d97b9a;
								box-shadow: 0 0 25px rgba(0,0,0,0.5);
							}

							header h1 {
								margin: 0;
								font-size: 54px;
								letter-spacing: 3px;
								color: #fff;
								text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
							}

							header p {
								margin-top: 15px;
								font-size: 18px;
								color: #f3cfd8;
							}

							nav {
								background: #3f1721;
								padding: 14px;
								text-align: center;
								border-bottom: 3px solid #d97b9a;
							}

							nav a {
								color: #ffd6df;
								text-decoration: none;
								margin: 0 18px;
								font-size: 15px;
								font-weight: bold;
								transition: 0.2s;
							}

							nav a:hover {
								color: white;
								text-shadow: 0 0 10px pink;
							}

							.container {
								max-width: 1100px;
								margin: auto;
								padding: 40px 20px;
							}

							.section {
								background: rgba(40,25,25,0.88);
								border: 2px solid #a84865;
								margin-bottom: 30px;
								padding: 30px;
								border-radius: 10px;
								box-shadow: 0 0 20px rgba(0,0,0,0.35);
							}

							.section h2 {
								margin-top: 0;
								font-size: 30px;
								color: #ffb8ca;
								border-bottom: 2px solid #a84865;
								padding-bottom: 10px;
							}

							.article {
								margin-bottom: 24px;
								padding-left: 18px;
								border-left: 4px solid #d97b9a;
							}

							.article h3 {
								margin-bottom: 8px;
								color: #ffd6df;
							}

							.article p {
								line-height: 1.7;
								color: #f1e6e6;
							}

							.footer {
								text-align: center;
								padding: 30px;
								background: #2a1016;
								border-top: 5px solid #d97b9a;
								color: #caa;
								font-size: 14px;
								width:112%;
							}

							.banner {
								background: rgba(255,192,203,0.08);
								border: 1px solid rgba(255,192,203,0.3);
								padding: 18px;
								margin-bottom: 30px;
								border-radius: 8px;
								text-align: center;
								font-size: 18px;
								color: #ffe5ec;
							}

							.tag {
								display: inline-block;
								background: #7b2942;
								padding: 6px 12px;
								border-radius: 4px;
								margin: 4px;
								font-size: 13px;
								border: 1px solid #d97b9a;
							}

							@media (max-width: 700px) {
								header h1 {
									font-size: 38px;
								}

								.section {
									padding: 20px;
								}

								nav a {
									display: inline-block;
									margin: 6px 10px;
								}
							}
						</style>


					<header>
						<h1>The Mooshroom Nation</h1>
						<p>Official Government Portal of the Mushroom Isles Archipelago</p>
					</header>


					<div class="container">

						<div class="banner">
							Protecting the Mushroom Isles, preserving the Mooshroom way of life, and defending the archipelago since the founding of the Republic.
							<br><br>

							<span class="tag">Federal Republic</span>
							<span class="tag">Mooshlism</span>
							<span class="tag">Protected Archipelago</span>
							<span class="tag">National Senate</span>
						</div>

						<div class="section" id="government">
							<h2>First Part: Forms of Government</h2>

							<div class="article">
								<h3>Article 1</h3>
								<p>
									The Mooshroom Nation is Republican and Federal.
								</p>
							</div>
						</div>

						<div class="section" id="crimes">
							<h2>Second Part: Crimes</h2>

							<div class="article">
								<h3>Article 2</h3>
								<p>
									Murder is punishable by death and all assets are confiscated for the government.
								</p>
							</div>

							<div class="article">
								<h3>Article 3</h3>
								<p>
									The dissemination of political ideas carries a punishment, which will be decided by a judge.
								</p>
							</div>

							<div class="article">
								<h3>Article 4</h3>
								<p>
									Slavery and forced labor of villagers are the second most serious crimes. The punishment may vary but it will always be hard punished.
								</p>
							</div>

							<div class="article">
								<h3>Article 5</h3>
								<p>
									Citizens must respect one another. Theft, destruction of property, and treason within the nation will be punished.
								</p>
							</div>

							<div class="article">
								<h3>Article 6</h3>
								<p>
									Deputies are required to wear pink patriotic symbols when going to the Senate (it can be underwear).
								</p>
							</div>

							<div class="article">
								<h3>Article 7</h3>
								<p>
									All citizens must pay a small tax to care for and protect the flora and fauna of the archipelago.
								</p>
							</div>
						</div>

						<div class="section" id="territory">
							<h2>Third Part: Territorial Rules</h2>

							<div class="article">
								<h3>Article 8</h3>
								<p>
									The lands claimed by Mooshrooms belong to the nation. No one may build on or alter important areas without authorization.
								</p>
							</div>
						</div>

						<div class="section" id="citizens">
							<h2>Fourth Part: Citizens Rights</h2>

							<div class="article">
								<h3>Article 9</h3>
								<p>
									Any person accepted by the leaders will be considered a citizen of Mooshrooms and will have the right to protection and housing.
								</p>
							</div>

							<div class="article">
								<h3>Article 10</h3>
								<p>
									Every citizen must help defend the nation in case of war or invasion, unless they have a disability that prevents them from fighting.
								</p>
							</div>
						</div>

						<div class="section" id="economy">
							<h2>Fifth Part: Economic Laws</h2>

							<div class="article">
								<h3>Article 11</h3>
								<p>
									Trade within the nation must be fair. Stores and businesses can be established if the government approves it.
								</p>
							</div>

							<div class="article">
								<h3>Article 12</h3>
								<p>
									All citizens must pay the required taxes no matter what, or else the authorities are going to proceed with seizure or tax enforcement proceedings.
								</p>
							</div>
						</div>

						<div class="section" id="religion">
							<h2>Final Part: Religions</h2>

							<div class="article">
								<h3>Article 13</h3>
								<p>
									The main religion is Mooshlism.
								</p>
							</div>

							<div class="article">
								<h3>Article 14</h3>
								<p>
									There must be no racism or discrimination between religions.
								</p>
							</div>
						</div>

					</div>

					<div class="footer">
						© Mooshroom Nation Government • Mushroom Isles National Constitution
					</div>

						`,
			
			greencross: `
					<style>
					</style>
					<div class="container">
						<h1>404</h1>
						<p>Page Not Finished</p>
						<div class="block">You seem to be lost in the world...</div>
					</div>
						`,
			
			herobrine: `
					<style>
						body {
							margin: 0;
							font-family: "Courier New", monospace;
							background-color: #111;
							background-image:
								linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.9)),
								url("blocks/netherrack.png");
							background-size: 128px;
							color: #d8d8d8;
							overflow-x: hidden;
						}

						header {
							background:
								linear-gradient(rgba(40,0,0,0.7), rgba(0,0,0,0.95)),
								url("blocks/obsidian.png");
							padding: 80px 30px;
							text-align: center;
							border-bottom: 6px solid #7a0000;
							box-shadow: 0 0 30px black inset;
							width:112%;
						}
						
						.headercontainer {
							width: 90%;
							text-align: center;
						}

						header h1 {
							font-size: 64px;
							margin: 0;
							color: white;
							letter-spacing: 4px;
							text-shadow:
								0 0 10px white,
								0 0 20px #880000;
						}

						header p {
							margin-top: 16px;
							font-size: 18px;
							color: #bbbbbb;
						}

						.navbar {
							display: flex;
							justify-content: center;
							gap: 20px;
							padding: 14px;
							background: #1b1b1b;
							border-bottom: 3px solid #4d0000;
							position: sticky;
							top: 0;
							width:112%;
						}

						.navbar a {
							color: #cccccc;
							text-decoration: none;
							padding: 8px 14px;
							border: 1px solid #444;
							background: #202020;
						}

						.navbar a:hover {
							background: #500000;
							color: white;
						}

						.container {
							max-width: 1100px;
							margin: auto;
							padding: 40px 20px;
						}

						.panel {
							background:
								linear-gradient(rgba(25,25,25,0.95), rgba(10,10,10,0.95)),
								url("blocks/deepslate.png");
							background-size: 96px;
							border: 4px solid #3b3b3b;
							padding: 25px;
							margin-bottom: 30px;
							box-shadow: 0 0 20px rgba(0,0,0,0.8);
						}

						.panel h2 {
							margin-top: 0;
							color: white;
							border-bottom: 2px solid #7a0000;
							padding-bottom: 10px;
							text-shadow: 0 0 8px #660000;
						}

						.dictation {
							margin-bottom: 18px;
							padding: 14px;
							background: rgba(0,0,0,0.45);
							border-left: 5px solid #8d0000;
						}

						.dictation-title {
							color: white;
							font-weight: bold;
							margin-bottom: 8px;
						}

						.warning {
							background: #2b0000;
							border: 2px solid #990000;
							padding: 16px;
							color: #ffb3b3;
							margin-top: 20px;
						}

						.shrine {
							display: grid;
							grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
							gap: 18px;
							margin-top: 20px;
						}

						.shrine-card {
							background: rgba(0,0,0,0.5);
							border: 2px solid #555;
							padding: 18px;
							text-align: center;
						}

						.shrine-card h3 {
							color: white;
							margin-top: 0;
						}

						.footer {
							text-align: center;
							padding: 30px;
							color: #777;
							border-top: 3px solid #2b0000;
							background: #111;
							margin-top: 50px;
							width:112%;
						}

						.glow {
							color: white;
							text-shadow:
								0 0 5px white,
								0 0 10px #aa0000,
								0 0 20px #aa0000;
						}
					</style>


					<header>
						<div class="headercontainer">
							<h1 class="glow">DISCIPLES OF HEROBRINE</h1>
							<p>The Chaos Is Truth</p>
						</div>
					</header>

					<div class="container">

						<div class="panel">
							<h2>Welcome Wanderer</h2>

							<p>
								You have entered sacred ground.
								The Disciples of Herobrine preserve the old truths abandoned by kingdoms,
								server rulers, and false prophets.
							</p>

							<p>
								We seek not peace, but understanding of the chaos that shapes the world.
								Those who fear the dark cannot see the stars beyond it.
							</p>

							<div class="warning">
								WARNING:
								Outsiders and crystal followers are watched closely.
								Trespassers entering holy shrines may be removed by force.
							</div>
						</div>

						<div class="panel">
							<h2>The Seven Dictations</h2>

							<div class="dictation">
								<div class="dictation-title">1st Dictation</div>
								Do not hide or run from the chaos for it is the true nature of our world.
							</div>

							<div class="dictation">
								<div class="dictation-title">2nd Dictation</div>
								Notch is true but is blinded. His gardens remain Herobrine's home and a place of sanctity.
							</div>

							<div class="dictation">
								<div class="dictation-title">3rd Dictation</div>
								Iron is the most righteous metal, for it is tried and true.
							</div>

							<div class="dictation">
								<div class="dictation-title">4th Dictation</div>
								The crystals of beyond are false and dishonest.
								They should never be used against another man unless thou wish to be like the crystal.
							</div>

							<div class="dictation">
								<div class="dictation-title">5th Dictation</div>
								The withering of the soul is the process to going to the gardens of the end.
								Endless fruit and a thousand stars await.
							</div>

							<div class="dictation">
								<div class="dictation-title">6th Dictation</div>
								A shrine must be in everyone's homeland.
								Redstone must light it.
							</div>

							<div class="dictation">
								<div class="dictation-title">7th Commandment</div>
								Defend your church and holy grounds as you would your home.
								Many wish to see us dead, and so you may be called upon to serve.
							</div>
						</div>

						<div class="panel">
							<h2>Approved Shrine Materials</h2>

							<div class="shrine">
								<div class="shrine-card">
									<h3>Iron Blocks</h3>
									<p>The righteous metal.</p>
								</div>

								<div class="shrine-card">
									<h3>Redstone Lamps</h3>
									<p>The sacred light.</p>
								</div>

								<div class="shrine-card">
									<h3>Obsidian</h3>
									<p>Stone of endurance.</p>
								</div>

								<div class="shrine-card">
									<h3>Soul Fire</h3>
									<p>The flame beyond worlds.</p>
								</div>
							</div>
						</div>

						<div class="panel">
							<h2>Public Notice</h2>

							<p>
								The northern sanctuaries remain closed after repeated attacks from End Crystal sects.
								Travel only in groups and report all suspicious beacon structures.
							</p>

							<p>
								Recruitment ceremonies occur every blood moon cycle.
								New disciples are expected to bring iron ingots and a redstone torch.
							</p>
						</div>

					</div>

					<div class="footer">
						DISCIPLES OF HEROBRINE • THE GARDENS AWAIT • VERSION 1.3.7
					</div>

			`,
			
			blossomgate: `

					<style>
						body {
							margin: 0;
							font-family: "Trebuchet MS", sans-serif;
							background-color: #efe4d0;
							background-image:
								linear-gradient(rgba(255,255,255,0.75), rgba(240,230,210,0.88))
							background-size: 128px;
							color: #2d2d2d;
							overflow-x: hidden; 
						}

						header {
							background:
								linear-gradient(rgba(255,192,203,0.35), rgba(30,40,55,0.88)),
								url("blocks/cherry_planks.png");
							background-size: cover;
							background-position: center;
							color: white;
							padding: 90px 40px;
							text-align: center;
							border-bottom: 8px solid #d98fa4;
							box-shadow: inset 0 -20px 40px rgba(0,0,0,0.35);
							width:112%;
						}
						
						.headercontainer {
							width: 90%;
							text-align: center;
						}

						header h1 {
							margin: 0;
							font-size: 64px;
							letter-spacing: 3px;
							text-shadow:
								0 0 10px rgba(255,255,255,0.4),
								0 0 20px rgba(255,180,200,0.5);
						}

						header p {
							margin-top: 18px;
							font-size: 20px;
							color: #ffe7ef;
							width:112%;
						}

						.navbar {
							display: flex;
							justify-content: center;
							flex-wrap: wrap;
							gap: 12px;
							padding: 14px;
							background: #2c3e50;
							border-bottom: 4px solid #d98fa4;
						}

						.navbar a {
							color: white;
							text-decoration: none;
							padding: 10px 16px;
							background: #3f5870;
							border: 1px solid rgba(255,255,255,0.12);
							font-weight: bold;
						}

						.navbar a:hover {
							background: #d98fa4;
							color: #222;
						}

						.container {
							max-width: 1200px;
							margin: auto;
							padding: 40px 20px;
						}

						.panel {
							background:
								linear-gradient(rgba(255,255,255,0.92), rgba(245,240,235,0.95));
							border: 4px solid #cbb9a0;
							padding: 28px;
							margin-bottom: 30px;
							box-shadow: 0 5px 15px rgba(0,0,0,0.12);
						}

						.panel h2 {
							margin-top: 0;
							color: #a84d69;
							border-bottom: 3px solid #d98fa4;
							padding-bottom: 10px;
						}

						.hero {
							font-size: 18px;
							line-height: 1.8;
						}

						.location-box {
							background: #fff3da;
							border: 2px solid #d7b777;
							padding: 16px;
							margin-top: 20px;
							font-weight: bold;
						}

						.features {
							display: grid;
							grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
							gap: 20px;
							margin-top: 25px;
						}

						.feature {
							background:
								linear-gradient(rgba(255,255,255,0.9), rgba(240,240,240,0.9)),
								url("blocks/smooth_sandstone.png");
							background-size: 96px;
							border: 3px solid #cbb9a0;
							padding: 20px;
						}

						.feature h3 {
							margin-top: 0;
							color: #2c3e50;
						}

						.trade-banner {
							background:
								linear-gradient(90deg, #ffe3eb, #fff6d8);
							border: 3px solid #d98fa4;
							padding: 24px;
							text-align: center;
							font-size: 24px;
							font-weight: bold;
							color: #7a2d46;
							margin-top: 20px;
						}

						.routes {
							margin-top: 20px;
							display: flex;
							flex-wrap: wrap;
							gap: 14px;
						}

						.route {
							background: #2c3e50;
							color: white;
							padding: 12px 16px;
							font-weight: bold;
							border-left: 5px solid #d98fa4;
						}

						.footer {
							background: #2c3e50;
							color: #d2d2d2;
							text-align: center;
							padding: 30px;
							border-top: 5px solid #d98fa4;
							margin-top: 40px;
							width:112%;
						}

						.coin {
							font-size: 82px;
							margin-bottom: 10px;
							opacity: 0.9;
						}
					</style>


					<header>
						<div class="headercontainer">
							<div class="coin">❀</div>

							<h1>
								<a href="https://discord.gg/B4KFabQMku"
								 target="_blank"
								 rel="noopener noreferrer"
								 style="text-decoration: none; color: inherit;">
								BLOSSOMGATE EXCHANGE
								</a>
							</h1>

							<p>
								The Grand Trading Gateway Between Forest and Cherry
							</p>
						</div>

					</header>

					<div class="container">

						<div class="panel">
							<h2>Welcome to Blossomgate</h2>

							<div class="hero">
								Blossomgate Exchange stands as one of the largest neutral trading cities
								connecting the Forest and Cherry biomes.
								Located along the coastal crossing routes,
								the city serves as a gateway for merchants,
								travelers,
								caravans,
								and diplomatic envoys from across the known world.
								<br><br>
								With bustling harbors,
								open trade markets,
								and direct transit routes between eastern and western settlements,
								Blossomgate has become a vital center of commerce and travel.
							</div>

							<div class="location-box">
								OFFICIAL LOCATION:
								1483, 60, -1611
								• Coastal Beach Border Between Forest and Cherry Biomes
							</div>
						</div>

						<div class="panel">
							<h2>Trade Features</h2>

							<div class="features">

								<div class="feature">
									<h3>Tax Free Markets</h3>

									<p>
										All trade conducted within Blossomgate Exchange is exempt from import taxes,
										export taxes,
										and regional tariffs.
									</p>
								</div>

								<div class="feature">
									<h3>Biome Merchant Access</h3>

									<p>
										Trading parties from multiple different biomes regularly arrive through
										the city gates and harbor districts.
									</p>
								</div>

								<div class="feature">
									<h3>Protected Harbor</h3>

									<p>
										The Exchange maintains secure dockyards and guarded warehouse districts
										for safe storage of goods and resources.
									</p>
								</div>

								<div class="feature">
									<h3>Fast Travel Corridors</h3>

									<p>
										Roads and ferry systems provide easy movement between Forest settlements
										and Cherry territory.
									</p>
								</div>

							</div>

							<div class="trade-banner">
								ALL TRADE WITHIN BLOSSOMGATE IS FREE OF TAXATION
							</div>
						</div>

						<div class="panel">
							<h2>Primary Trade Routes</h2>

							<div class="routes">
								<div class="route">Forest Timber Route</div>
								<div class="route">Cherry Blossom Road</div>
								<div class="route">Eastern Coastal Ferry</div>
								<div class="route">Northern Caravan Passage</div>
								<div class="route">Cross Biome Merchant Trail</div>
							</div>
						</div>

						<div class="panel">
							<h2>Harbor Bulletin</h2>

							<p>
								The Harbor Authority has announced expanded dock capacity
								for incoming merchant vessels following increased seasonal trade activity.
							</p>

							<p>
								Foreign merchants are reminded that combat within market districts
								is prohibited under Exchange law.
							</p>
						</div>

					</div>

					<div class="footer">
						BLOSSOMGATE EXCHANGE • FREE TRADE DISTRICT • ESTABLISHED ON THE COASTAL CROSSING
					</div>

			`,
			
			interbiome: `
					<style>
						body {
							margin: 0;
							font-family: "Trebuchet MS", sans-serif;
							background-color: #d8d2bf;
							background-image:
								linear-gradient(rgba(255,255,255,0.75), rgba(240,230,210,0.88))
							background-size: 128px;
							color: #222;
							overflow-x: hidden;
						}

						header {
							background-color: rgba(128, 128, 128, 0.25);
							background:
								linear-gradient(rgba(255,255,255,0.75), rgba(240,230,210,0.88))
							color: white;
							padding: 70px 40px;
							text-align: center;
							border-bottom: 8px solid #8f1d1d;
							box-shadow: inset 0 -10px 30px rgba(0,0,0,0.4);
							width:112%;
						}

						header h1 {
							margin: 0;
							font-size: 58px;
							letter-spacing: 3px;
							text-shadow: 0 0 12px rgba(255,255,255,0.25);
						}

						header p {
							margin-top: 18px;
							font-size: 18px;
							color: #d0d7e0;
						}

						.navbar {
							display: flex;
							justify-content: center;
							flex-wrap: wrap;
							gap: 12px;
							padding: 14px;
							background: #2f3542;
							border-bottom: 4px solid #8f1d1d;
							width:112%;
						}

						.navbar a {
							text-decoration: none;
							color: white;
							background: #495469;
							padding: 10px 16px;
							border: 1px solid rgba(255,255,255,0.15);
							font-weight: bold;
						}

						.navbar a:hover {
							background: #8f1d1d;
						}

						.container {
							max-width: 1200px;
							margin: auto;
							padding: 40px 20px;
						}

						.panel {
							background: rgba(255,255,255,0.9);
							border: 4px solid #9a9a9a;
							padding: 28px;
							margin-bottom: 30px;
							box-shadow: 0 4px 12px rgba(0,0,0,0.15);
						}

						.panel h2 {
							margin-top: 0;
							border-bottom: 3px solid #8f1d1d;
							padding-bottom: 10px;
							color: #1d2d44;
						}

						.hero {
							font-size: 18px;
							line-height: 1.7;
						}

						.party-grid {
							display: grid;
							grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
							gap: 20px;
							margin-top: 25px;
						}

						.party {
							background:
								linear-gradient(rgba(240,240,240,0.95), rgba(225,225,225,0.95))
							background-size: 96px;
							border: 3px solid #7d7d7d;
							padding: 20px;
						}

						.party h3 {
							margin-top: 0;
							color: #8f1d1d;
						}

						.party-title {
							font-size: 14px;
							color: #555;
							margin-bottom: 14px;
						}

						.values {
							display: flex;
							flex-wrap: wrap;
							gap: 12px;
							margin-top: 20px;
						}

						.value {
							background: #2f3542;
							color: white;
							padding: 10px 14px;
							font-weight: bold;
							border-left: 4px solid #8f1d1d;
						}

						.notice {
							background: #fff2d9;
							border: 2px solid #c9a95f;
							padding: 16px;
							margin-top: 20px;
						}

						.footer {
							background: #1d1f24;
							color: #9ca3af;
							text-align: center;
							padding: 30px;
							border-top: 5px solid #8f1d1d;
							margin-top: 40px;
							width:112%;
						}

						.seal {
							font-size: 90px;
							margin-bottom: 10px;
							opacity: 0.9;
						}
					</style>


					<header>
						<div class="seal">✦</div>

						<h1>INTER-BIOME DEMOCRATIC ALLIANCE</h1>

						<p>
							Unity • Order • Stability • Prosperity Across All Biomes
						</p>
					</header>

					<div class="container">

						<div class="panel">
							<h2>Welcome to the IBDC</h2>

							<div class="hero">
								The Inter-Biome Democratic Alliance was founded as a coalition
								of Centre Right biome governments and political organizations
								dedicated to maintaining regional stability, lawful governance,
								economic cooperation, and national prosperity across the known biomes.
								<br><br>
								The Alliance stands united against disorder, instability,
								and political extremism while preserving the identity and traditions
								of all member nations.
							</div>

							<div class="notice">
								OFFICIAL NOTICE:
								The next Inter-Biome Assembly meeting will occur during the coming harvest cycle.
								Delegates from all member states are expected to attend.
							</div>
						</div>

						<div class="panel">
							<h2>Founding Member Parties</h2>

							<div class="party-grid">

								<div class="party">
									<h3>Teito no Sakura Kyōtei</h3>

									<div class="party-title">
										"The Pact of the Cherry Blossoms of the Imperial Capital"
									</div>

									<p>
										A Cherrian nationalist party led by Chairman and Brother of the Tenno,
										Valorian von Tlagarhani.
									</p>

									<p>
										The party supports strong government institutions,
										loyalty to the Tenno,
										and preservation of Cherrian cultural identity.
									</p>
								</div>

								<div class="party">
									<h3>Mushroom National Union</h3>

									<div class="party-title">
										Representative Party of the Mooshroom Isles
									</div>

									<p>
										Led by Saxon Dixie,
										the Mushroom National Union advocates for regional autonomy,
										industrial development,
										and coordinated defense between island territories.
									</p>
								</div>

								<div class="party">
									<h3>United Plains Party</h3>

									<div class="party-title">
										Representative Movement of the Central Plains
									</div>

									<p>
										Led by Wisdomz,
										the United Plains Party promotes direct democracy,
										citizen assemblies,
										and agricultural development throughout the plains biomes.
									</p>
								</div>

							</div>
						</div>

						<div class="panel">
							<h2>Alliance Principles</h2>

							<div class="values">
								<div class="value">Strong Democratic Institutions</div>
								<div class="value">Biome Sovereignty</div>
								<div class="value">Economic Cooperation</div>
								<div class="value">Regional Security</div>
								<div class="value">Lawful Governance</div>
								<div class="value">Mutual Prosperity</div>
							</div>
						</div>

						<div class="panel">
							<h2>Department Bulletin</h2>

							<p>
								The Security Council has announced expanded patrols along disputed biome borders
								following increased reports of illegal portal crossings and unauthorized militia activity.
							</p>

							<p>
								Member governments are encouraged to report hostile movements directly
								to the Inter-Biome Coordination Office.
							</p>
						</div>

					</div>

					<div class="footer">
						INTER-BIOME DEMOCRATIC ALLIANCE • CENTRAL ADMINISTRATIVE NETWORK • EST. 2026
					</div>

			`,

rakau: `


			<style>
				body {
					margin: 0;
					font-family: Arial, sans-serif;
					background: #0f1a12;
					color: #e8f5e9;
					overflow-x: hidden;
					width: 100%;
					background-color: #0f0f12;
					background-image:
						linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),
						url("blocks/Lodestone_top_block.png");
					background-repeat: repeat;
					background-size: 64px 64px;
				}

				.header {
					width: 115vw;
					margin-left: calc(50% - 50vw);

					background:
						linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
						url("images/forest.png");

					background-size: cover;
					background-position: center;

					padding: 120px 30px;
					border-bottom: 4px solid #2e6b4f;
				}
				.headercontainer {
					width: 90%;
					text-align: center;
				}
				.hero h1 {
					margin: 0;
					font-size: 64px;
					color: #ffffff;
				}

				.hero p {
					font-size: 20px;
					color: #d7f0da;
					margin-top: 15px;
				}

				.bannerQuote {
					margin-top: 25px;
					font-style: italic;
					color: #9ccc9c;
					font-size: 18px;
				}

				.container {
					padding: 30px;
					max-width: 1200px;
					margin: auto;
				}

				.grid {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
					gap: 20px;
				}

				.card {
					background: #15241a;
					padding: 25px;
					margin-bottom: 20px;
					border-left: 4px solid #2e6b4f;
					border-radius: 10px;
					box-shadow: 0 0 15px rgba(0,0,0,0.25);
				}

				.card h2 {
					margin-top: 0;
					color: #7ed98a;
				}

				.card h3 {
					color: #9ce3a7;
				}

				.card p {
					line-height: 1.7;
					color: #dceedd;
				}

				.card ul {
					padding-left: 20px;
				}

				.card ul li {
					margin-bottom: 10px;
				}

				.lawBox {
					background: #1b2f21;
					padding: 15px;
					margin-top: 15px;
					border-radius: 8px;
					border: 1px solid #335842;
				}

				.companyGrid {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
					gap: 15px;
				}

				.company {
					background: #1a2d20;
					padding: 15px;
					border-radius: 8px;
					text-align: center;
					border: 1px solid #335842;
					cursor: pointer;
				}

				footer {
					text-align: center;
					padding: 25px;
					background: #0b120d;
					color: #7fa88a;
					margin-top: 40px;
					border-top: 3px solid #2e6b4f;
					width:112%;
				}

			</style>

			<div class="header">
				<div class="headercontainer">
					<h1>
						<a href="https://discord.gg/h8qY27ywCk"
						 target="_blank"
						 rel="noopener noreferrer"
						 style="text-decoration: none; color: inherit;">
						Forest of Rakau
						</a>
					</h1>

					<p>
						Official Administrative Authority of the Forest of Rakau
					</p>

					<div class="bannerQuote">
						"Peace through balance. Strength through roots."
					</div>
				</div>

			</div>

			<div class="container">


				<div class="card" id="about">

					<h2>About the Nation</h2>

					<p>
						The Forest of Rakau (FRK) is a theocratic council-based nation
						located within the great forests bordering the Snow and Cherry
						Grove regions. The nation values sustainability, peace,
						controlled growth, and coexistence with nature.
					</p>

					<p>
						Rakau's central geographic location has made it a growing
						center of trade, diplomacy, and commerce. Numerous independent
						companies and guilds have emerged from the forests of Rakau.
					</p>

					<p>
						The government is centered around the High Council and the
						spiritual leadership of the Kaikorero of Rakau.
					</p>

				</div>

				<div class="grid">

					<div class="card" id="council">

						<h2>High Council</h2>

						<p>
							The High Council serves as the highest governing authority
							within Rakau. Each Elder oversees a governmental Ring.
						</p>

						<ul>
							<li>
								<b>LilySelina</b><br>
								Elder of Architecture
							</li>

							<li>
								<b></b><br>
								Elder of Defense
							</li>

							<li>
								<b>WFP_Headmaster</b><br>
								Elder of Foreign Affairs
							</li>

							<li>
								<b>Sel_</b><br>
								Elder of Resources
							</li>

							<li>
								<b>woof</b><br>
								Elder of Governance
							</li>
						</ul>

					</div>

					<!-- KAIKORERO -->

					<div class="card">

						<h2>Kaikorero of Rakau</h2>

						<p>
							<b>Mr_twisted9999</b>
						</p>

						<p>
							Spiritual representative and ceremonial leader of Rakau.
							The Kaikorero guides the nation's beliefs, traditions,
							and harmony with nature.
						</p>

						<p>
							Commonly referred to by citizens as the
							<b>Tree Pope</b>.
						</p>

					</div>

				</div>

				<!-- GOVERNANCE -->

				<div class="card">

					<h2>Government Structure</h2>

					<p>
						Rakau operates under a theocratic council system where the
						High Council governs the nation while the Kaikorero acts as
						a spiritual and ideological authority.
					</p>

					<p>
						A Legate is an appointed administrator responsible for
						governing towns and settlements within Rakau. Legates are
						selected directly by the High Council.
					</p>

				</div>

				<!-- RINGS -->

				<div class="card" id="rings">

					<h2>Rings of Government</h2>

					<div class="grid">

						<div class="lawBox">

							<h3>Ring of Ambassadors</h3>

							<p>
								Diplomats responsible for alliances, negotiations,
								treaties, and foreign relations.
							</p>

						</div>

						<div class="lawBox">

							<h3>Ring of Building</h3>

							<p>
								Plans and constructs public infrastructure,
								roads, cities, and housing.
							</p>

						</div>

						<div class="lawBox">

							<h3>Ring of Defense</h3>

							<p>
								The military branch of Rakau, commonly known
								as The Termites.
							</p>

						</div>

						<div class="lawBox">

							<h3>Ring of Resources</h3>

							<p>
								Collects, stores, and distributes food,
								materials, lumber, and ores.
							</p>

						</div>

						<div class="lawBox">

							<h3>Ring of Order</h3>

							<p>
								Responsible for law enforcement,
								justice, and internal stability.
							</p>

						</div>

					</div>

				</div>

				<div class="card" id="laws">

					<h2>Laws of Rakau</h2>

					<div class="lawBox">
						<b>Murder of citizens is prohibited.</b>
						<p>
							Punishable by imprisonment, exile, or death.
						</p>
					</div>

					<div class="lawBox">
						<b>Thievery is prohibited.</b>
						<p>
							Theft from the government is considered a severe crime.
						</p>
					</div>

					<div class="lawBox">
						<b>Griefing or sabotage is prohibited.</b>
						<p>
							Punishable by imprisonment, exile, or death.
						</p>
					</div>

					<div class="lawBox">
						<b>Mass deforestation requires approval.</b>
						<p>
							Forest clearing larger than 7x7 chunks requires approval
							from the Kaikorero.
						</p>
					</div>

					<div class="lawBox">
						<b>No weapons within the capital.</b>
						<p>
							Weapons are confiscated at the gate and returned upon exit.
						</p>
					</div>

					<div class="lawBox">
						<b>Selling saplings outside Rakau is illegal.</b>
					</div>

					<div class="lawBox">
						<b>Treason is punishable by exile or death.</b>

						<p>
							Includes:
						</p>

						<ul>
							<li>Usurping power</li>
							<li>Leaking classified information</li>
							<li>Attacking Elders or the Kaikorero</li>
							<li>Serving foreign interests over Rakau</li>
						</ul>

					</div>

				</div>

				<div class="grid">

					<div class="card">

						<h2>Citizen Benefits</h2>

						<ul>
							<li>Basic housing provided</li>
							<li>Food distribution for citizens</li>
							<li>Protected trade routes</li>
							<li>Access to national infrastructure</li>
						</ul>

					</div>

					<div class="card">

						<h2>Religion & Ideology</h2>

						<p>
							The Faith of Rakau promotes coexistence with nature,
							sustainability, peace, and responsible use of resources.
						</p>

						<p>
							Citizens believe natural resources are gifts that must
							never be exploited through greed or waste.
						</p>

					</div>

				</div>

				<div class="card" id="cities">

					<h2>Cities & Villages</h2>

					<div class="grid">

						<div class="lawBox">
							<h3>Evertea</h3>
							<p>Sacred Capital of Rakau</p>
						</div>

						<div class="lawBox">
							<h3>Arbor City</h3>
						</div>

						<div class="lawBox">
							<h3>Ardenne</h3>
						</div>

						<div class="lawBox">
							<h3>Driftwood</h3>
						</div>

						<div class="lawBox">
							<h3>Sidos</h3>
						</div>

					</div>

				</div>

				<div class="card">

					<h2>Economy & Trade</h2>

					<p>
						Rakau's central position has transformed the nation into
						a major continental trade hub.
					</p>

					<p>
						Timber, food, engineering companies, redstone industries,
						and diplomatic neutrality have helped fuel economic growth.
					</p>

				</div>

				<!-- COMPANIES -->

				<div class="card" id="companies">

					<h2>Registered Companies</h2>

					<div class="companyGrid">

						<a class="company" onclick="parent.location.hash='AngelElectronics'">
							Angel Electronics
						</a>

						<a class="company" onclick="parent.location.hash='endx'">
							EndX
						</a>

						<a class="company" onclick="parent.location.hash='happyghast">
							Happy Ghast Inc.
						</a>

						<a class="company" onclick="parent.location.hash='hotdogredstone">
							Hotdog Redstone
						</a>

						<a class="company" onclick="parent.location.hash='greenroad">
							The Greenroad Guild
						</a>

						<a class="company" onclick="parent.location.hash='mail'">
							OverNet Mail
						</a>

					</div>

				</div>

			</div>

			<footer>
				Forest of Rakau Government Portal — Official Administrative Network
			</footer>

			`,
	
			rakaufaith: `
				<style>
					body {
						margin: 0;
						font-family: Georgia, serif;
						background: #07140c;
						color: #d9f7e2;
						overflow-x: hidden; 
					}

					header {
						background: linear-gradient(#0f2a18, #07140c);
						text-align: center;
						padding: 60px 20px;
						border-bottom: 3px solid #2f7a4f;
						width:112%;
					}

					header h1 {
						font-size: 40px;
						margin: 0;
					}

					header p {
						font-style: italic;
						color: #9edbb8;
					}

					.container {
						max-width: 900px;
						margin: auto;
						padding: 30px;
					}

					.section {
						margin-bottom: 30px;
						padding: 20px;
						background: rgba(255,255,255,0.03);
						border-left: 3px solid #2f7a4f;
					}

					h2 {
						color: #a6e3c2;
					}

					footer {
						text-align: center;
						padding: 20px;
						color: #6fa887;
						font-size: 12px;
						width:112%;
					}

					.quote {
						font-style: italic;
						color: #bdebd1;
					}
				</style>

				<header>
					<h1>The Faith of Rakau</h1>
					<p>A Covenant of Nature, Peace, and Coexistence</p>
				</header>

				<div class="container">

					<div class="section">
						<h2>Core Beliefs</h2>
						<p class="quote">
							“To live as one with nature is to live in harmony with all things.”
						</p>
						<ul>
							<li>Sustainability — nature is a sacred gift, not a resource to exploit</li>
							<li>Respect for Sacred Land — shrines and sanctuaries must never be desecrated</li>
							<li>Coexistence — players and nature must live in balance</li>
							<li>Peace — conflict is avoided whenever possible</li>
						</ul>
					</div>

					<div class="section">
						<h2>The Kaikorero of Rakau</h2>
						<p>
							The Kaikorero is the voice of the forest, often described as the "Tree Pope".
							They serve as the spiritual link between the people and nature, guiding governance
							through the will of the forest.
						</p>
						<p>
							Pronunciation: Kairorero (kai'koːɾɛˌɾo), Rakau (RAH-kaw)
						</p>
					</div>

					<div class="section">
						<h2>Sacred Law</h2>
						<ul>
							<li>Mass deforestation is forbidden without approval</li>
							<li>Sacred sites must be protected at all costs</li>
							<li>Greed that harms nature is condemned by the forest</li>
							<li>Destruction of the forest brings severe reprisal</li>
						</ul>
					</div>

					<div class="section">
						<h2>Role in Government</h2>
						<p>
							The Faith of Rakau is deeply integrated into governance. The Kaikorero
							influences the High Council, ensuring that laws and actions align with
							the will of the forest.
						</p>
					</div>

				</div>

				<footer>
					The Faith of Rakau — Walk gently, live in harmony.
				</footer>

			`,
	
			endx: `



				<style>
					body {
						margin: 0;
						background-image: url("images/company/EndX/Sky.png");
						background-repeat: repeat;
						font-family: Arial, Helvetica, sans-serif;
						color: white;
						overflow-x: hidden;
						overflow-x: hidden; 
					}
											
											

					#secret-toggle {
						display: none;
					}

					/* ================= HEADER ================= */
					header {
						position: fixed;
						top: 0;
						width: 100%;
						z-index: 1000;
						display: flex;
						justify-content: space-between;
						padding: 20px 50px;
						background: rgba(0,0,0,0.4);
						backdrop-filter: blur(10px);
						box-sizing: border-box;
						width:112%;
					}

					.logo {
						height: 40px;
						width: auto;
						filter: invert(1);
						cursor: pointer;
					}

					/* ================= HERO ================= */
					.hero {
						height: 100vh;
						display: flex;
						align-items: flex-end;
						padding: 80px;
						box-sizing: border-box;
						width:112%;
						height:112%;
					}

					.hero1 {
						background: url("images/company/EndX/world.png") center/cover no-repeat;
					}

					.hero2 {
						background: url("images/company/EndX/world2.png") center/cover no-repeat;
					}

					.hero3 {
						background: url("images/company/EndX/lander.png") center/cover no-repeat;
					}

					#secret-toggle:checked ~ .hero1 {
						background-image: url("images/company/EndX/world_secret.png");
					}

					#secret-toggle:checked ~ .hero2 {
						background-image: url("images/company/EndX/world2_secret.png");
					}

					#secret-toggle:checked ~ .hero3 {
						background-image: url("images/company/EndX/lander_secret.png");
					}

					.hero h1 {
						font-size: 55px;
						letter-spacing: 4px;
						max-width: 700px;
					}

					.secret-text {
						display: none;
					}

					/* HERO TEXT */
					#secret-toggle:checked ~ .hero .normal-text {
						display: none;
					}

					#secret-toggle:checked ~ .hero .secret-text {
						display: inline;
					}

					/* SECTION TEXT (THIS WAS MISSING) */
					#secret-toggle:checked ~ .section .normal-text {
						display: none;
					}

					#secret-toggle:checked ~ .section .secret-text {
						display: inline;
					}


					/* ================= TEXT SECTIONS ================= */
					.section {
						padding: 120px 15%;
					}

					.section h2 {
						font-size: 40px;
						margin-bottom: 20px;
					}

					.section p {
						opacity: 0.7;
						max-width: 700px;
						line-height: 1.6;
					}

					.split {
						display: flex;
						gap: 50px;
						align-items: center;
					}

					.split img {
						width: 25%;
						border-radius: 3px;
					}
					/* ================= FOOTER ================= */
					footer {
						padding: 40px;
						text-align: center;
						opacity: 0.6;
						border-top: 1px solid #222;
						width:112%;
					}
				</style>
				<input type="checkbox" id="secret-toggle">

				<header>
					<label for="secret-toggle">
						<img class="logo" src="images/company/EndX/Endx_logo.png" alt="ENDX Logo">
					</label>
				</header>

				<section class="hero hero1">
					<h1>
						<span class="normal-text">END SHIP ROCKET</span>
						<span class="secret-text">VOID SHIP PROTOTYPE</span>
					</h1>
				</section>

				<section class="hero hero2">
					<h1>
						<span class="normal-text">SMP ORBITAL PROGRAM</span>
						<span class="secret-text">SMP DEEP SPACE PROGRAM</span>
					</h1>
				</section>

				<section class="hero hero3">
					<h1>
						<span class="normal-text">REVOLUTIONIZING ENDX TECHNOLOGY</span>
						<span class="secret-text">CLASSIFIED ENDX TECHNOLOGY</span>
					</h1>
				</section>

				<section class="section split">
					<img src="images/company/EndX/avatar.png">
					<div>
					<h2>
						<span class="normal-text">Orbital Engineering Systems</span>
						<span class="secret-text">Unlocking Unknown Dimensions</span>
					</h2>

					<p>
						<span class="normal-text">
						ENDX develops advanced rocket systems, orbital cargo ships, and experimental propulsion systems.
						</span>

						<span class="secret-text">
						ENDX operates classified void propulsion research across unknown orbital layers.
						</span>
						</p>
					</div>
				</section>
				
				<footer>
					ENDX Aerospace • <a href="https://www.youtube.com/@Robietexture"
						 target="_blank"
						 rel="noopener noreferrer"
						 style="text-decoration: none; color: inherit;">
						Offical YouCube Channel
						</a>
				</footer>
			`
	};

	const trashFiles = [
		{ name: "2026-05-09 18.33.42.png", path: "images/2026-05-09_18.33.42.png" },
		{ name: "2026-05-23 06.49.02.png", path: "images/2026-05-23_06.49.02.png" },
		{ name: "World Map.png", path: "images/map.png"},
		{ name: "New Spawn City.png", path: "images/newspawncity.png", type: "image" },
		{ name: "New Spawn City 2.png", path: "images/newspawncity2.png", type: "image" },
		
		//{ name: "Anthem of Rakau.mp3", path: "audio/forest.mp3", type: "audio" }
	];

	const startMenuContent = document.getElementById("startMenuContent");

	const startButton = document.getElementById("startButton");

	const startMenu = document.getElementById("startMenu");
	


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
				okBtn.querySelector("button").onclick = () => {
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

		const size = 800;
		const win = createWindow("OverNet", content, 200, 120, size, size);
		win.style.height = "600px";

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

			const isMaximized = win.dataset.maximized === "1";
			const scale = isMaximized ? 1 : 0.9;

			let html = pages[pageKey] || pages["404"];

			// MAIL OVERRIDE (only exception)
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
		// NAV BUTTONS
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

		homeBtn.onclick = () => {
			window.location.hash = "home";
		};

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

			const hash = window.location.hash.replace("#", "").trim();

			if (hash === "mail") {
				history = ["mail"];
				index = 0;
				addressBar.value = "mail";
				render("mail");
				return;
			}

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
	


})();
