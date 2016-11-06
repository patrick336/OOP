 function Column(name) {
     var self = this;
     this.id = randomString();
     this.name = name || 'Nie wprowadzono nazwy';
     this.$element = createColumn();

     function createColumn() {
         // TWORZENIE ELEMENTÓW SKŁADOWYCH KOLUMNY
         var $row = $('<div>').addClass('row');
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
         this.$element.find('ul').append(card.$element);
//         $('#test').append(card.$element);
     }, 
     removeColumn: function () {
         this.$element.remove();
     }
 }