import { Component, OnInit } from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = {};
  articles: Article[] = [
    {
      title: 'Shoping at MODANA Shop',
      url: 'https://shopee.vn/nuochoaminidanang'
    },
    {
      title: 'Shoping at MODANA Shop',
      url: 'https://shopee.vn/nuochoaminidanang'
    },
    {
      title: 'Shoping at MODANA Shop',
      url: 'https://shopee.vn/nuochoaminidanang'
    },
    {
      title: 'Shoping at MODANA Shop',
      url: 'https://shopee.vn/nuochoaminidanang'
    },
    {
      title: 'Shoping at MODANA Shop',
      url: 'https://shopee.vn/nuochoaminidanang'
    }
  ];

  addNewArticle() {
    this.articles.push(this.article);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
