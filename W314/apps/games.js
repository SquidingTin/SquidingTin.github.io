
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


export { openMinesweeper };