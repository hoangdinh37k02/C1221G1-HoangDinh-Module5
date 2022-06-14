import { Injectable } from '@angular/core';
import {IWord} from '../iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  iWord: IWord [] = [{
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
}
