import { makeAutoObservable, runInAction } from 'mobx';
import { TypeQuotes } from './types';
import axios from 'axios';

class Quotes {
  quotes: TypeQuotes[] = [];
  errorMessage = '';

  constructor() {
    makeAutoObservable(this);
  }

  async fetchQuotes() {
    try {
      const result = await axios(
        'https://poloniex.com/public?command=returnTicker'
      );

      const myQuotes: TypeQuotes[] = [];

      for (const [key, value] of Object.entries(result.data)) {
        myQuotes.push({
          ticker: key,
          ...(value as Omit<TypeQuotes, 'ticker'>),
        });
      }

      runInAction(() => {
        this.quotes = myQuotes;
        this.errorMessage = '';
      });
    } catch (e) {
      console.error(e);

      runInAction(() => {
        this.errorMessage = 'Не удалось получить котировки!';
      });
    }
  }
}

export default new Quotes();
