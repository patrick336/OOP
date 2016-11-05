$(function () {
    function randomString() {
        var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
        var str = '';
        var i = 0;
        for (i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * chars.length - 1)]
        }
        return str;
    }

    function Column(name) {
        var self = this;
        this.id = randomString();
        this.name = name || 'Nie wprowadzono nazwy';
        this.$element = createColumn();

        function createColumn() {
            // TWORZENIE ELEMENTÓW SKŁADOWYCH KOLUMNY
            var $grid = $('<div>').addClass('col-xs-6 col-md-4 col-lg-3');
            var $column = $('<div>').addClass('column block-center');
            var $columnTitle = $('<h3>').addClass('column-title').text(self.name);
            var $columnCardList = $('<ul>').addClass('column-card-list');
            var $columnDelete = $('<button class="btn close-pos close-theme"><i class="fa fa-times" aria-hidden="true"></i></button>');
            var $columnAddCard = $('<button>').addClass('btn block-center').text('Dodaj kartę');
            // PODPINANIE ODPOWIEDNICH ZDARZEŃ
            $columnDelete.click(function () {
                self.removeColumn();
            });
            $columnAddCard.click(function (event) {
                event.preventDefault();
                self.addCard(new Card(prompt("Wpisz nazwę karty")));
            });
            // KONSTRUOWANIE ELEMENTU KOLUMNY
            $column.append($columnTitle).append($columnDelete).append($columnAddCard).append($columnCardList);
            $grid.append($column);
            // ZWRACANIE STWORZONEJ  KOLUMNY
            return $grid;
        }
    }
    Column.prototype = {
        addCard: function (card) {
            this.$element.children('ul').append(card.$element);
        }, 
        removeColumn: function () {
            this.$element.remove();
        }
    }

    function Card(description) {
        var self = this;
        this.id = randomString();
        this.description = description || 'Nie wprowadzono opisu zadania';
        this.$element = createCard();

        function createCard() {
            var $card = $('<li>').addClass('card');
            var $cardDescription = $('<p>').addClass('card-description').text(self.description);
            var $cardDelete = $('<button>').addClass('btn').text('&times');
            
            $cardDelete.click(function () {
                self.removeCard();
            });
            $card.append($cardDelete).append($cardDescription);
            return $card;
        } 
    }
    Card.prototype = {
        removeCard: function () {
            this.$element.remove();
        }
    }

    function Board(name) {
        var self = this;
        this.id = randomString();
        this.name = name || 'Tablica kanban';
        this.$element = createTable();

        function createTable() {
            var $board = $('<div>').addClass('board');
            var $boardHeader = $('<h1>').addClass('boardHeader').text(self.name);
            var $boardInsert = $('<button>').addClass('btn create-column').text('Wstaw kolumnę');
            var $boardDelete = $('<button>').addClass('btn').text('Usuń kolumnę');
            var $columnCointainer = $('<div>').addClass('column-container');
            $boardInsert.click(function () {
                self.addTable();
            });
            $boardDelete.click(function () {});
            $board.append($boardHeader).append($boardInsert).append($boardDelete).append($columnCointainer);
            return $board;
        }
    }
    Board.prototype = {
        addTable: function () {
            var column = new Column(prompt("Wpisz nazwę kolumny"));
            this.$element.append(column.$element);
        }
    }
    $('.create-board').click(function () {
        var newBoard = new Board(prompt("Nazwa tablicy"));
        $('body .container').append(newBoard.$element);
    });
    var board = {
        name: 'Tablica Kanban', 
        addColumn: function (column) {
            this.$element.append(column.$element);
            initSortable();
        }, 
        $element: $('.column-container .row')
    };

    function initSortable() {
        $('.column-card-list').sortable({
            connectWith: '.column-card-list', 
            placeholder: 'card-placeholder'
        });
    }
    $('.create-column').click(function () {
        var name = prompt('Wpisz nazwę kolumny');
        var column = new Column(name);
        board.addColumn(column);
    });
    //Tworzenie kolumn 
    var todoColumn = new Column('Do zrobienia');
    var doingColumn = new Column('W trakcie');
    var doneColumn = new Column('Wykonane');
    var marked = new Column('Wysłane na produkcje');
    //Dodawanie kolumn do tablicy
    board.addColumn(todoColumn);
    board.addColumn(doingColumn);
    board.addColumn(doneColumn);
    board.addColumn(marked);
    //Tworzenie nowych egzemplarzy kart
    var card1 = new Card('Nowe zadanie');
    var card2 = new Card('Stworzyć tablicę kanban');
    var card3 = new Card('Zlecenie od klienta');
    // Dodawanie kart do kolumn
    todoColumn.addCard(card1);
    doingColumn.addCard(card2);
    doneColumn.addCard(card3);
});