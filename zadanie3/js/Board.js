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
        $boardDelete.click(function () {
            
        });
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
    var card4 = new Card('Zlecenie od klienta');
    var card5 = new Card('Stworzyć tablicę kanban');
    var card6 = new Card('Stworzyć tablicę kanban');
    var card7 = new Card('Stworzyć tablicę kanban');
    var card8 = new Card('Stworzyć tablicę kanban');
// Dodawanie kart do kolumn
    todoColumn.addCard(card1);
    todoColumn.addCard(card2);
    todoColumn.addCard(card4);
    todoColumn.addCard(card5);
    todoColumn.addCard(card6);
    todoColumn.addCard(card7);
    todoColumn.addCard(card8);

    doingColumn.addCard(card2);
    doingColumn.addCard(card1);
    doingColumn.addCard(card3);
    doneColumn.addCard(card3);



//Kontrola widoku kolumn przy różnej szerokości ekranu
//$(window).on('resize', function () {
//    var w = window.outerWidth;
////    var columns = $('.column-container').find('.col-325');
////    var columnsArr = $.makeArray(columns);
////    var length = columnsArr.length;
//    
//    $('.col-325').removeClass('clear');
//    
//    var c = document.getElementsByClassName("col-325");
//    console.log(c.length);
//    if (467 < w && w <= 767) {
//        for (var i = 0; i < c.length; i = i + 2) {
//            c[i].className += ' clear';
//        }
//    }
//    else if (767 < w && w <= 1199 ) {
//        for (var i = 0; i < c.length; i = i + 3) {
//            c[i].className += ' clear';
//        }
//    }
//    else if (1199 < w) {
//        for (var i = 0; i < c.length; i = i + 4) {
//            c[i].className += ' clear';
//        }
//    }
//});
