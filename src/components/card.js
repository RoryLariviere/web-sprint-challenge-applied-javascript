import axios from 'axios';
import {topics} from '../mocks/data';

const articleArr = topics.topics;

const Card = (article) => {

  const cardDiv = document.createElement(`div`);
  const headlineDiv = document.createElement(`div`);
  const authorDiv = document.createElement(`div`);
  const imgContDiv = document.createElement(`div`);
  const imgEl = document.createElement(`img`);
  const authNameSpan = document.createElement(`span`);

  cardDiv.classList.add(`card`);
  headlineDiv.classList.add(`headline`);
  authorDiv.classList.add(`author`);
  imgContDiv.classList.add(`img-container`);

  headlineDiv.textContent = article.headline;
  imgEl.src = article.authorPhoto;
  authNameSpan.textContent = `By: ${article.authorName}`;

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContDiv);
  imgContDiv.appendChild(imgEl);
  authorDiv.appendChild(authNameSpan);

  return cardDiv;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {

  axios
  .get(`https://lambda-times-api.herokuapp.com/articles`)
  .then(res => {
    articleArr.forEach(subj => {
      res.data.articles[subj].forEach(info => {
        document.querySelector(selector).appendChild(Card(info))
      })
    })
    console.log(res.data.articles)
  })
  .catch(err => {
    console.log(err)
  })

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
