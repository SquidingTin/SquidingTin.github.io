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

	/* =========================
		 Launcher
	========================= */

	let minecraftWindow = null;

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
					<div class="mc-tab active">Update Notes</div>
					<div class="mc-tab">Launcher Log</div>
					<div class="mc-tab">Profile Editor</div>
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
						<button class="mc-play-btn">Play</button>
					</div>

					<div class="mc-status">
						<div>Welcome, <b>${username}</b></div>
						<div>Ready to update & play Minecraft</div>
						<button class="mc-switch-user">Switch User</button>
					</div>

				</div>

			</div>
		`;

		if (minecraftWindow && document.body.contains(minecraftWindow)) {

			const body = minecraftWindow.querySelector(".fake-dialog-body, .fake-window-body");

			if (body) {
				body.innerHTML = content;
				wireMinecraft(minecraftWindow);
			}

			return minecraftWindow;
		}

		const win = createWindow(
			"Minecraft Launcher",
			content,
			120,
			40,
			880
		);

		minecraftWindow = win;

		wireMinecraft(win);

		return win;
	}

	function wireMinecraft(win) {

		const playBtn = win.querySelector(".mc-play-btn");

		if (playBtn) {
			playBtn.onclick = () => {
				playBtn.textContent = "Launching...";

				setTimeout(() => {
					playBtn.textContent = "Play";
				}, 3000);
			};
		}
	}
export { openMinecraft };