import { Injectable } from '@angular/core';
import {IWord} from '../iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  iWords: IWord [] = [{
    word: 'hello',
    mean: 'xin chào'
  }, {
    word: 'morning',
    mean: 'chào buổi sáng'
  }, {
    word: 'school',
    mean: 'trường học'
  }, {
    word: 'hi',
    mean: 'xin chào'
  }, {
    word: 'animal',
    mean: 'động vật'
  }];
  constructor() { }
  getAll() {
    return this.iWords;
  }

  findById(word: string) {
    for (let i = 0; i < this.iWords.length ; i++) {
      if (word === this.iWords[i].word){
        return this.iWords[i];
      }
    }
  }
}
