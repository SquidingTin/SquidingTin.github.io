let minesweeperWindow = null;

let tetrisWindow = null;

function openMinesweeper() {

	const content = `
		<div class="minesweeper">
			<div class="mine-status">Ready</div>
			<div id="mine-board" class="mine-board"></div>
		</div>
	`;

	if (minesweeperWindow && document.body.contains(minesweeperWindow)) {
		bringToFront(minesweeperWindow);
		return minesweeperWindow;
	}

	const win = createWindow("Minesweeper", content, 200, 100, 330);

	minesweeperWindow = win;

	const oldClose = win.querySelector(".close");

	oldClose.onclick = () => {
		win.remove();

		const taskBtn = windowTaskMap.get(win);
		if (taskBtn) taskBtn.remove();

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

	let firstClick = true;

	function renderNumber(n) {
		const cls =
			n === 1 ? "ms-1" :
			n === 2 ? "ms-2" :
			n === 3 ? "ms-3" :
			"ms-4";

		return `<span class="ms-num ${cls}">${n}</span>`;
	}

	function startNewGame() {

		board.innerHTML = "";
		cells = [];
		gameOver = false;
		firstClick = true;

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
				const cell = cells[y][x];

				btn.onclick = () => {

					if (gameOver) return;

					if (firstClick) {
						firstClick = false;
						startGameFromFirstClick(x, y);
					}

					reveal(x, y);
				};

				btn.oncontextmenu = (e) => {

					e.preventDefault();

					if (gameOver || cell.revealed) return;

					cell.flagged = !cell.flagged;

					cell.element.textContent = cell.flagged ? "🚩" : "";
				};
			}
		}
	}

	function placeMines(safeX, safeY) {

		const forbidden = new Set();

		for (let oy = -1; oy <= 1; oy++) {
			for (let ox = -1; ox <= 1; ox++) {

				const nx = safeX + ox;
				const ny = safeY + oy;

				if (
					nx >= 0 &&
					ny >= 0 &&
					nx < COLS &&
					ny < ROWS
				) {
					forbidden.add(`${nx},${ny}`);
				}
			}
		}

		let placed = 0;

		while (placed < MINES) {

			const x = Math.floor(Math.random() * COLS);
			const y = Math.floor(Math.random() * ROWS);

			if (forbidden.has(`${x},${y}`)) continue;

			if (!cells[y][x].mine) {
				cells[y][x].mine = true;
				placed++;
			}
		}
	}

	function calculateCounts() {

		for (let y = 0; y < ROWS; y++) {
			for (let x = 0; x < COLS; x++) {

				if (cells[y][x].mine) continue;

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
	}

	function reveal(x, y) {

		if (x < 0 || y < 0 || x >= COLS || y >= ROWS) return;

		const cell = cells[y][x];

		if (cell.revealed || cell.flagged) return;

		cell.revealed = true;
		cell.element.disabled = true;

		if (cell.mine) {

			cell.element.textContent = "💣";
			gameOver = true;

			status.textContent = "Boom! New game in 5 seconds...";

			for (let yy = 0; yy < ROWS; yy++) {
				for (let xx = 0; xx < COLS; xx++) {
					if (cells[yy][xx].mine) {
						cells[yy][xx].element.textContent = "💣";
					}
				}
			}

			setTimeout(() => {
				if (document.body.contains(win)) {
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
				if (ox === 0 && oy === 0) continue;
				reveal(x + ox, y + oy);
			}
		}
	}

	function startGameFromFirstClick(x, y) {
		placeMines(x, y);
		calculateCounts();
	}


	startNewGame();
}



function openTetris() {

	const content = `
		<div class="tetris-wrapper">

			<div id="tetris-board" class="tetris-board"></div>

			<div class="tetris-side">
				<div class="tetris-next">
					<div class="label">Next</div>
					<div id="next1" class="mini"></div>
					<div id="next2" class="mini"></div>
					<div id="next3" class="mini"></div>
				</div>

				<div class="tetris-score">
					<div>Score</div>
					<div id="score">0</div>
				</div>
			</div>

		</div>
	`;

	if (tetrisWindow && document.body.contains(tetrisWindow)) {
		bringToFront(tetrisWindow);
		return tetrisWindow;
	}

	const win = createWindow("Tetris", content, 200, 100, 320);
	tetrisWindow = win;

	const oldClose = win.querySelector(".close");

	oldClose.onclick = () => {
		win.remove();
		const taskBtn = windowTaskMap.get(win);
		if (taskBtn) taskBtn.remove();
		if (tetrisWindow === win) tetrisWindow = null;
	};

	wireTetris(win);
	return win;
}

function wireTetris(win) {

	const COLS = 10;
	const ROWS = 20;

	const boardEl = win.querySelector("#tetris-board");

	let board = [];
	let current = null;
	let pos = { x: 3, y: 0 };

	let score = 0;
	let gameOver = false;

	let nextQueue = [];
	let dropTimer = null;

	const SHAPES = [
		[[1,1,1,1]],
		[[1,1],[1,1]],
		[[0,1,0],[1,1,1]],
		[[1,0,0],[1,1,1]],
		[[0,0,1],[1,1,1]]
	];

	function createBoard() {
		board = Array.from({ length: ROWS }, () =>
			Array(COLS).fill(0)
		);
	}

	function randomPiece() {
		return SHAPES[Math.floor(Math.random() * SHAPES.length)];
	}

	function fillQueue() {
		while (nextQueue.length < 3) {
			nextQueue.push(randomPiece());
		}
	}

	function collides(x, y, piece) {
		for (let py = 0; py < piece.length; py++) {
			for (let px = 0; px < piece[py].length; px++) {
				if (!piece[py][px]) continue;

				let nx = x + px;
				let ny = y + py;

				if (nx < 0 || nx >= COLS || ny >= ROWS) return true;
				if (ny >= 0 && board[ny][nx]) return true;
			}
		}
		return false;
	}

	function spawnPiece() {

		fillQueue();

		current = nextQueue.shift();
		nextQueue.push(randomPiece());

		pos = { x: 3, y: 0 };

		if (collides(pos.x, pos.y, current)) {
			gameOver = true;
			clearInterval(dropTimer);
		}

		updateSide();
	}

	function merge() {
		for (let y = 0; y < current.length; y++) {
			for (let x = 0; x < current[y].length; x++) {
				if (!current[y][x]) continue;

				let bx = pos.x + x;
				let by = pos.y + y;

				if (by >= 0) board[by][bx] = 1;
			}
		}
	}

	function clearLines() {

		let cleared = 0;

		for (let y = ROWS - 1; y >= 0; y--) {
			if (board[y].every(v => v)) {
				board.splice(y, 1);
				board.unshift(Array(COLS).fill(0));
				y++;
				cleared++;
			}
		}

		if (cleared > 0) {
			score += [0, 100, 300, 500, 800][cleared] || cleared * 250;
			document.getElementById("score").textContent = score;
		}
	}

	function rotate(piece) {
		return piece[0].map((_, i) =>
			piece.map(row => row[i]).reverse()
		);
	}

	function move(dx, dy) {
		if (!collides(pos.x + dx, pos.y + dy, current)) {
			pos.x += dx;
			pos.y += dy;
		}
		draw();
	}

	function drop() {

		if (gameOver) return;

		if (!collides(pos.x, pos.y + 1, current)) {
			pos.y++;
		} else {
			merge();
			clearLines();
			spawnPiece();
		}

		draw();
	}

	function rotatePiece() {
		let r = rotate(current);

		if (!collides(pos.x, pos.y, r)) {
			current = r;
		}
		draw();
	}

	function draw() {

		boardEl.innerHTML = "";

		for (let y = 0; y < ROWS; y++) {
			for (let x = 0; x < COLS; x++) {

				let val = board[y][x];

				if (current) {
					for (let py = 0; py < current.length; py++) {
						for (let px = 0; px < current[py].length; px++) {

							if (!current[py][px]) continue;

							if (x === pos.x + px && y === pos.y + py) {
								val = 2;
							}
						}
					}
				}

				const cell = document.createElement("div");
				cell.className = "tetris-cell" + (val ? " filled" : "");
				boardEl.appendChild(cell);
			}
		}
	}

	function drawMini(piece, el) {

		el.innerHTML = "";

		if (!piece) return;

		for (let y = 0; y < 4; y++) {
			for (let x = 0; x < 4; x++) {

				const val = piece[y]?.[x] ? 1 : 0;

				const cell = document.createElement("div");
				cell.className = "mini-cell" + (val ? " filled" : "");
				el.appendChild(cell);
			}
		}
	}
	
	function updateSide() {

		fillQueue();

		drawMini(nextQueue[0], win.querySelector("#next1"));
		drawMini(nextQueue[1], win.querySelector("#next2"));
		drawMini(nextQueue[2], win.querySelector("#next3"));

		win.querySelector("#score").textContent = score;
	}

	function loop() {
		drop();
	}

	function start() {
		createBoard();

		fillQueue();
		spawnPiece();

		draw();
		updateSide();

		dropTimer = setInterval(loop, 500);
	}

	window.addEventListener("keydown", (e) => {

		if (!document.body.contains(win)) return;
		if (gameOver) return;

		switch (e.key) {
			case "ArrowLeft":
				move(-1, 0);
				break;
			case "ArrowRight":
				move(1, 0);
				break;
			case "ArrowDown":
				drop();
				break;
			case "ArrowUp":
				rotatePiece();
				break;
		}
	});

	start();
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
	setTimeout(() => {location.reload();}, 5000);
}


export { openMinesweeper };
export { openTetris };
export { startGlitchScreen };
