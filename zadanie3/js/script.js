$(function(){

    function randomString () {
        var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
        var str='';
        var i=0;
        for(i=0;i<10;i++){
            str += chars[Math.floor(Math.random()*chars.length-1)]
        }
        return str;
    }
    

    
    function Column (name) {
        var self = this;
        this.id = randomString();
        this.name = name || 'Nie wprowadzono nazwy';
        this.$element = createColumn ();
        function createColumn() {
            
// TWORZENIE ELEMENTÓW SKŁADOWYCH KOLUMNY
        var $column = $('<div>').addClass('column col-xs-4');
        var $columnTitle = $('<h2>').text(self.name);
        var $columnCardList = $('<ul>').addClass('column-card-list list-group');
        var $columnDelete = $('<button>').addClass('btn btn-danger').text('x');
        var $columnAddCard = $('<button>').addClass('btn btn-success ').text('Dodaj kartę');

// PODPINANIE ODPOWIEDNICH ZDARZEŃ
        $columnDelete.click(function() {
            self.removeColumn();
        });
            
        $columnAddCard.click(function(event) {
            self.addCard(new Card(prompt("Wpisz nazwę karty")));
        });

// KONSTRUOWANIE ELEMENTU KOLUMNY
        $column.append($columnTitle)
               .append($columnDelete)
               .append($columnAddCard)
               .append($columnCardList);

// ZWRACANIE STWORZONEJ  KOLUMNY
            return $column;
        }
    
    }
    
    Column.prototype = {
        addCard: function(card) {
            this.$element.children('ul').append(card.$element);
        },
        removeColumn: function (){
            this.$element.remove();   
        }
    }
  
    function Card (description) {
        var self = this;
    
        this.id = randomString();
        this.description = description || 'Nie wprowadzono opisu zadania';
        this.$element = createCard();
    
    function createCard(){
            var $card = $('<li>').addClass('list-group-item row');
            var $cardDescription = $('<p>').addClass('card-description').text(self.description);
            var $cardDelete = $('<button>').addClass('btn btn-warning').text('x');
        
    
        $cardDelete.click(function(){
            self.removeCard();
        });
    
        $card.append($cardDelete)
             .append($cardDescription);
    
        return $card;
      }
    }
  
    
  
    Card.prototype = {
        removeCard : function () {
            this.$element.remove();
        }
    }
  
  
//    function Board(name){
//        var self =this;
//        var $body = $('body');
//        
//        this.id = randomString();
//        this.name = name || 'Nowa tablica';
//        this.$element = createTable ();
//    
    
// Tworzenie składowych tabeli
//        function createTable (){
//            var $board = $('<div>').addClass('board');
//            var $boardHeader = $('<h1>').addClass('boardHeader').text(self.name);
//            var $boardInsert = $('<button').addClass('btn btn-default create-column');
//            var $columnCointainer = $('div').addClass('column-container');
//        
//            $boardInsert.click(function(){
//               self.addTable(); 
//            });
//            
//            $board.append($boardHeader)
//                  .append($boardInsert)
//                  .append($columnCointainer);
//        
//                return $board;
//        }
//        
//    }
//       Board.prototype = {
//        addTable : function () {
//            new Board(prompt("Wpisz nazwę karty"))
//        }
//    }
    
    var board = {
        name: 'Tablica Kanban',
        addColumn: function(column){
          this.$element.append(column.$element);
          initSortable();    
        },
        $element: $('#board .column-container')
    
    };
  
  
function initSortable() {
    $('.column-card-list').sortable({
      dropOnEmpty: true, 
      forceHelperSize: true,
      forcePlaceholderSize: true,
//      items: "> li",
//      grid: [ 20, 10 ],    
      opacity: 0.5,
      connectWith: '.column-card-list',
      placeholder: 'card-placeholder'
    });
  }
  
    $('.create-column').click(function(){
       var name = prompt('Wpisz nazwę kolumny');
       var column = new Column (name);
       board.addColumn(column);
    });
  
    
  //Tworzenie kolumn 

    var todoColumn = new Column ('Do zrobienia');
    var doingColumn = new Column ('W trakcie');
    var doneColumn = new Column ('Skończone');


//Dodawanie kolumn do tablicy

    board.addColumn(todoColumn);
    board.addColumn(doingColumn);
    board.addColumn(doneColumn);

//Tworzenie nowych egzemplarzy kart

    var card1 = new Card ('Nowe zadanie');
    var card2 = new Card ('Stworzyć tablicę kanban');
    var card3 = new Card ('Zlecenie od klienta');

// Dodawanie kart do kolumn

    todoColumn.addCard(card1);
    doingColumn.addCard(card2);
    doneColumn.addCard(card3);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
});


