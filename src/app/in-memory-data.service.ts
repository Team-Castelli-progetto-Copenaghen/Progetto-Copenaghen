export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Prodotto 1' },
      { id: 12, name: 'Prodotto 2' },
      { id: 13, name: 'Prodotto 3' },
      { id: 14, name: 'Prodotto 4' },
      { id: 15, name: 'Prodotto 5' },
      { id: 16, name: 'Prodotto 6' }
    ];
    return { heroes };
  }
}
