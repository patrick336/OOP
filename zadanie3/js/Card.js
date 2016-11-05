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