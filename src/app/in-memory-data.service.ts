export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Valtenesi rosso doc' },
      { id: 2, name: 'Valtenesi chiaretto doc' },
      { id: 3, name: 'Groppello' },
      { id: 4, name: 'Garda classico' }
          ];
    return { heroes };
  }
}
