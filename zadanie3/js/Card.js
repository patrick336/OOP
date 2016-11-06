function Card(description) {
    var self = this;
    this.id = randomString();
    this.description = description || 'Nie wprowadzono opisu zadania';
    this.$element = createCard();

    function createCard() {
        var $card = $('<li>').addClass('card');
        var $cardDescription = $('<p>').addClass('card-description').text(self.description);
        var $cardDelete = $('<button class="btn btn-trash"><i class="fa fa-trash" aria-hidden="true"></i></button>');
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