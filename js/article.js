let article = {
    articles:[],
    arraySearchArticle:[],
    descriptionMinimum:[],
    /**
     * function that displays the articles
     */
    displayArticles: function(articles){
        const newArticles = document.querySelector('.articles-container');
        for(let i=0; i<articles.length;i++){
          article.descriptionMinimum[i] =article.articles[i].description.substring(0,130) + '...';
            const myArticle = document.createElement('article');
            myArticle.setAttribute('id',articles[i]['_id']);
            myArticle.setAttribute('class','card');
            newArticles.appendChild(myArticle);

            const myHeader= document.createElement('header')
            myHeader.classList.add('card-header');
            myArticle.appendChild(myHeader);

            const myImage= document.createElement('img');
            myImage.classList.add('picture');
            myImage.classList.add('rounded');
            myImage.setAttribute('src', '.'+ articles[i].imageUrl);
            myImage.setAttribute('alt', articles[i].imageAlt);
            myHeader.appendChild(myImage);

            const myTitle=document.createElement('h3');
            myTitle.classList.add('card-title');
            myTitle.textContent = articles[i].title;
            myHeader.appendChild(myTitle);


            const mySection=document.createElement('section');
            mySection.classList.add('card-content');
            myArticle.appendChild(mySection);

            const myParaph=document.createElement('p');
            myParaph.textContent = article.descriptionMinimum[i];
            mySection.appendChild(myParaph);


            const myFooter=document.createElement('footer');
            myFooter.classList.add('card-footer');
            myArticle.appendChild(myFooter);

            const linkRead=document.createElement('a');
            linkRead.classList.add('btn');
            linkRead.setAttribute('href', '#');
            linkRead.textContent = 'Lire la suite';
            myFooter.appendChild(linkRead);
        }
    },

    /**
     * function that hiddens the articles
     */
    hiddenArticle:function(){
        let allArticleElements = document.querySelectorAll('.card');
        document.querySelector('.content').classList.remove('hide');
        for(let i=0; i < allArticleElements.length; i++) {
            classOneArticle = allArticleElements[i].className = "card";
            allArticleElements[i].querySelector('.picture').className ="picture rounded";
            allArticleElements[i].querySelector('.btn').className="btn";
            allArticleElements[i].querySelector('p').textContent = article.articles[i].title;
            allArticleElements[i].classList.add('hide');
        }
    },

  /**
   * method that diplay article
   */
  displaySearchArticle: function(articles){
        let allArticleElements = document.querySelectorAll('.card');
        for(let i=0; i < allArticleElements.length; i++) {
          for(let j=0; j<articles.length; j++){
            if(articles[j]._id === allArticleElements[i].id){
              allArticleElements[i].classList.remove('hide');
              article.arraySearchArticle=[];
              allArticleElements[i].querySelector('.card-title').innerHTML= articles[j].title;
              allArticleElements[i].querySelector('p').innerHTML=  article.descriptionMinimum[j];
            }
          } 
        }
    },

        /**
     * function that displays the 12 works of Heracles
     */
   displayWorks:function(){
    const arrayOls=document.getElementsByTagName('ol');
    article.articles.forEach(article=> {
      const myLi=document.createElement('li');
      myLi.textContent = article.title;
      arrayOls[0].appendChild(myLi);
    }
    )
},
}