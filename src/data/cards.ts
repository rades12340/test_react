

export interface CardInterface {
    id?: number,
    cardNumber: string,
    expDate: string,
    cardHolder: string,
    accNumber: string;
}

class Cards {
    private cards: CardInterface[] = []

    constructor() {
        this.cards = this.parseCards()
    }

    private parseCards() {
        return JSON.parse(localStorage.getItem('cards')!) || []
    }

    private attachCards() {
        this.cards = this.parseCards() || []
    }

    addCard(card: CardInterface) {
        this.cards.push({ id: Math.floor(Math.random() * 1000000), ...card })
        localStorage.setItem('cards', JSON.stringify(this.cards))
    }

    listCards() {
        this.attachCards()
        return this.cards
    }

    searchCard(id: string) {
        return this.cards.find(el => el.id === +id)
    }

    updateCard(id: string, data: CardInterface) {
        const index = this.cards.findIndex(el => el.id === +id)

        this.cards.map(card => card.id?.toString() === id ? { id, ...data } : card)

        localStorage.setItem('cards', JSON.stringify(this.cards))

    }
}


export default new Cards()