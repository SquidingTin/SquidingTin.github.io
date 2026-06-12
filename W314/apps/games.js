
	let minesweeperWindow = null;

	function openMinesweeper() {

		const content = `
			<div class="minesweeper">

				<div class="mine-status">
					Ready
				</div>

				<div id="mine-board" class="mine-board"></div>

			</div>
		`;

		if (
			minesweeperWindow &&
			document.body.contains(minesweeperWindow)
		) {

			bringToFront(minesweeperWindow);

			return minesweeperWindow;
		}

		const win = createWindow(
			"Minesweeper",
			content,
			200,
			100,
			330
		);

		minesweeperWindow = win;

		const oldClose = win.querySelector(".close");

		oldClose.onclick = () => {

			win.remove();

			const taskBtn = windowTaskMap.get(win);

			if (taskBtn) {
				taskBtn.remove();
			}

			if (minesweeperWindow === win) {
				minesweeperWindow = null;
			}
		};

		wireMinesweeper(win);

		return win;
	}

	function wireMinesweeper(win) {

		const ROWS = 9;
		const COLS = 9;
		const MINES = 10;

		const board = win.querySelector("#mine-board");
		const status = win.querySelector(".mine-status");

		let cells = [];
		let gameOver = false;
		function renderNumber(n) {

			const cls =
				n === 1 ? "ms-1" :
				n === 2 ? "ms-2" :
				n === 3 ? "ms-3" :
				n === 4 ? "ms-4" :
				"ms-4";

			return `<span class="ms-num ${cls}">${n}</span>`;
		}
		function startNewGame() {

			board.innerHTML = "";

			cells = [];
			gameOver = false;

			status.textContent = "Ready";

			for (let y = 0; y < ROWS; y++) {

				cells[y] = [];

				for (let x = 0; x < COLS; x++) {

					const btn = document.createElement("button");

					btn.className = "mine-cell";

					board.appendChild(btn);

					cells[y][x] = {
						element: btn,
						mine: false,
						revealed: false,
						flagged: false,
						count: 0
					};
				}
			}

			let placed = 0;

			while (placed < MINES) {

				const x = Math.floor(Math.random() * COLS);
				const y = Math.floor(Math.random() * ROWS);

				if (!cells[y][x].mine) {

					cells[y][x].mine = true;
					placed++;
				}
			}

			for (let y = 0; y < ROWS; y++) {
				for (let x = 0; x < COLS; x++) {

					if (cells[y][x].mine) {
						continue;
					}

					let count = 0;

					for (let oy = -1; oy <= 1; oy++) {
						for (let ox = -1; ox <= 1; ox++) {

							const nx = x + ox;
							const ny = y + oy;

							if (
								nx >= 0 &&
								ny >= 0 &&
								nx < COLS &&
								ny < ROWS &&
								cells[ny][nx].mine
							) {
								count++;
							}
						}
					}

					cells[y][x].count = count;
				}
			}

			function reveal(x, y) {

				if (
					x < 0 ||
					y < 0 ||
					x >= COLS ||
					y >= ROWS
				) {
					return;
				}

				const cell = cells[y][x];

				if (
					cell.revealed ||
					cell.flagged
				) {
					return;
				}

				cell.revealed = true;

				cell.element.disabled = true;

				if (cell.mine) {

					cell.element.textContent = cell.flagged ? "🚩" : "";

					gameOver = true;

					status.textContent =
						"Boom! New game in 5 seconds...";

					for (let yy = 0; yy < ROWS; yy++) {
						for (let xx = 0; xx < COLS; xx++) {

							if (cells[yy][xx].mine) {
								cells[yy][xx].element.textContent = "💣";
							}
						}
					}

					setTimeout(() => {

						if (
							document.body.contains(win)
						) {
							startNewGame();
						}

					}, 5000);

					return;
				}

				if (cell.count > 0) {

					cell.element.innerHTML = renderNumber(cell.count);

					return;
				}

				for (let oy = -1; oy <= 1; oy++) {
					for (let ox = -1; ox <= 1; ox++) {

						if (
							ox === 0 &&
							oy === 0
						) {
							continue;
						}

						reveal(
							x + ox,
							y + oy
						);
					}
				}
			}

			for (let y = 0; y < ROWS; y++) {
				for (let x = 0; x < COLS; x++) {

					const cell = cells[y][x];

					cell.element.onclick = () => {

						if (gameOver) {
							return;
						}

						reveal(x, y);
					};

					cell.element.oncontextmenu = e => {

						e.preventDefault();

						if (
							gameOver ||
							cell.revealed
						) {
							return;
						}

						cell.flagged =
							!cell.flagged;

						cell.element.textContent =
							cell.flagged
								? "🚩"
								: "";
					};
				}
			}
		}

		startNewGame();
	}

	function startGlitchScreen() {
		// ===== OVERRIDE PAGE =====
		document.body.innerHTML = "";
		document.body.style.margin = "0";
		document.body.style.overflow = "hidden";
		document.body.style.cursor = "none";

		const screen = document.createElement("div");
		screen.id = "screen";

		Object.assign(screen.style, {
		position: "fixed",
		inset: "0",
		width: "100vw",
		height: "100vh",
		background: 'url("images/default_desktop.png") center center / cover no-repeat',
		pointerEvents: "none"
		});

		document.body.appendChild(screen);

		// ===== DISABLE INPUT =====
		function block(e) {
		e.preventDefault();
		e.stopPropagation();
		return false;
		}

		window.addEventListener("mousemove", block, { passive: false });
		window.addEventListener("mousedown", block, { passive: false });
		window.addEventListener("mouseup", block, { passive: false });
		window.addEventListener("keydown", block, { passive: false });
		window.addEventListener("keyup", block, { passive: false });
		window.addEventListener("wheel", block, { passive: false });
		window.addEventListener("contextmenu", block, { passive: false });

		// ===== SETTINGS =====
		const SETTINGS = {
		tearChance: 0.78,
		warpChance: 0.20
		};

		const TILE = 32;
		const tiles = [];

		function buildTiles() {
		const w = window.innerWidth;
		const h = window.innerHeight;

		const cols = Math.ceil(w / TILE);
		const rows = Math.ceil(h / TILE);

		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < cols; x++) {
			const tile = document.createElement("div");

			tile.className = "tile";

			Object.assign(tile.style, {
				position: "absolute",
				width: TILE + "px",
				height: TILE + "px",
				left: x * TILE + "px",
				top: y * TILE + "px",
				backgroundImage: 'url("images/default_desktop.png")',
				backgroundSize: `${w}px ${h}px`,
				backgroundPosition: `-${x * TILE}px -${y * TILE}px`
			});

			screen.appendChild(tile);

			tiles.push({
				el: tile,
				homeX: x * TILE,
				homeY: y * TILE
			});
			}
		}
		}

		function glitchBurst() {
		for (const t of tiles) {
			const r = Math.random();

			if (r < SETTINGS.tearChance) {
			const x = (Math.random() - 0.5) * 60;
			const y = (Math.random() - 0.5) * 10;

			t.el.style.transform = `translate(${x}px, ${y}px)`;
			t.el.style.opacity = 0.7 + Math.random() * 0.3;
			}

			else if (r < SETTINGS.tearChance + SETTINGS.warpChance) {
			const x = (Math.random() - 0.5) * 160;
			const y = (Math.random() - 0.5) * 40;

			t.el.style.transform =
				`translate(${x}px, ${y}px) skewX(${(Math.random() - 0.5) * 3}deg)`;

			t.el.style.opacity = 0.4 + Math.random() * 0.4;
			}

			else {
			const cube = document.createElement("div");

			const ox = t.homeX;
			const oy = t.homeY;

			Object.assign(cube.style, {
				position: "absolute",
				width: "32px",
				height: "32px",
				left: ox + "px",
				top: oy + "px",
				backgroundSize: `${window.innerWidth}px ${window.innerHeight}px`,
				backgroundPosition: `-${ox}px -${oy}px`,
				opacity: 0.7,
				transform: `
				translate(${(Math.random() - 0.5) * 80}px,
							${(Math.random() - 0.5) * 80}px)
				rotate(${(Math.random() - 0.5) * 10}deg)
				`
			});

			screen.appendChild(cube);

			setTimeout(() => cube.remove(), 180);
			}
		}
		}

		function loop() {
		glitchBurst();
		setTimeout(loop, 30 + Math.random() * 200);
		}

		buildTiles();
		loop();

		// ===== AUTO RESET =====
		setTimeout(() => {
		location.reload();
		}, 5000);
	}


export { openMinesweeper };
export { startGlitchScreen };
