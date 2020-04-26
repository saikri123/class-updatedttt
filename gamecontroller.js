class GameController {
    constructor(player1, player2, board, cell) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = board;
        this.cell = cell;
        this.store
    }
    markplace() {

        this.board.hoverturn();
        let storeplace = this.cell.place
        for (let i = 0; i < storeplace.length; i++) {
            storeplace[i].innerHtml = i;

        }
        for (let i = 0; i < storeplace.length; i++) {

            storeplace[i].addEventListener('click', function markit(e) {

                let current_position = e.currentTarget;
                this.cell.placemark(current_position.innerHtml);
                this.checkwinner(storeplace, this.cell.mark_turn)
                this.playerchange();
                this.hoverchange();


            }.bind(this), { once: true })
        }

    }

    playerchange() {
        if (this.cell.mark_turn == this.player1.symbol)
            this.cell.mark_turn = this.player2.symbol;
        else
            this.cell.mark_turn = this.player1.symbol;
    }

    hoverchange() {
        if (this.board.hover_player == 'xhover')
            this.board.hover_player = 'circlehover';
        else if (this.board.hover_player == 'circlehover')
            this.board.hover_player = 'xhover';
        this.board.hoverturn();
    }

    checkwinner(checkplayer, turn) {
        let count = 0;
        let flag = 0;
        let arr = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < 3; j++) {
                if (checkplayer[arr[i][j]].classList.contains(turn))
                    count++;
            }
            if (count == 3) {
                let addshow = document.getElementById('win');
                addshow.classList.add('show');
                let winner = document.getElementById('cond');

                winner.innerHTML = turn + " is winner";
                console.log(checkplayer.length)

                let btn = document.getElementById('btn');
                btn.addEventListener('click', function reset() {
                    for (let k = 0; k < checkplayer.length; k++) {
                        checkplayer[k].classList.remove('x')
                        checkplayer[k].classList.remove('circle')
                    }

                    addshow.classList.remove('show')
                    let player1 = new Player('x', 'player1');
                    let player2 = new Player('circle', 'player2');
                    let board = new Board('xhover');
                    let cell = new Cell('x');
                    let gamecontroller = new GameController(player1, player2, board, cell);
                    gamecontroller.markplace();
                }.bind(this))
            }
            count = 0;
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < 3; j++) {
                if ((checkplayer[arr[i][j]].classList.contains('x')) || (checkplayer[arr[i][j]].classList.contains('circle'))) {
                    flag++;
                }
            }
        }
        if (flag == 24) {
            let addshow = document.getElementById('win');
            addshow.classList.add('show');
            let winner = document.getElementById('cond');

            winner.innerHTML = turn + " is winner";

            let btn = document.getElementById('btn');

            btn.addEventListener('click', function reset() {
                for (let k = 0; k < checkplayer.length; k++) {
                    checkplayer[k].classList.remove('x')
                    checkplayer[k].classList.remove('circle')

                }

                addshow.classList.remove('show')
                let player1 = new Player('x', 'player1');
                let player2 = new Player('circle', 'player2');
                let board = new Board('xhover');
                let cell = new Cell('x');
                let gamecontroller = new GameController(player1, player2, board, cell);
                gamecontroller.markplace();
            }.bind(this))


        }

    }

}