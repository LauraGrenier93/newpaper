let app = {
    articles:[],
    wordFromArticles:[],
    arraySearchArticle:[],
    base_url: "http://localhost:8080/",
    message:'',

  /**
   * initialization of an array of an article
   */
  arrayArticle: function(){
    app.articles.forEach((article, index) => {
      let wordFromTitle = article.title.toLowerCase().split(' ');
      let wordFromDescription = article.description.toLowerCase().split(' ');
      app.wordFromArticles[index] = new Set(wordFromTitle.concat(wordFromDescription));
    });
    
  },

/**
 * 
 */
handleSearch: function(event){
    event.preventDefault();
    let valueField = document.querySelector('.search-input').value.trim();
    let wordFromInput = valueField.toLowerCase().split(' ');
    for(let i = 0; i < app.wordFromArticles.length; i++) {
     app.wordFromArticles[i].forEach(word=>{
        let wordOfArticle = wordFromInput.find(wordInput => wordInput === word);
        if(wordOfArticle){
          app.arraySearchArticle.push(app.articles[i]);
        }
      });
    };
    app.message='';
    app.hiddenArticle();
    app.displaySearchArticle(app.arraySearchArticle)
  },

  /**
   * setting up a controlled field
   */
  bindSearch: function(){
    let seachInputElement = document.querySelector('.search');
    seachInputElement.addEventListener('submit', app.handleSearch);
  },

  /**
  * Data recovery features
  */
  getListsFromAPI: async () => {
    try {
      let response = await fetch(app.base_url);
      if (response.status !== 200) {
        let error = await response.json();
        throw error;
      } else {
        app.articles = await response.json();
        app.arrayArticle();
        app.displayWorks();
        app.displayArticle(app.articles);
        app.upPage();
        app.showVideoOrHiden();
      }
    } catch (error) {
      console.error(error);
    }
  },

/**
 * function that hiddens the articles
 */
hiddenArticle:function(){
  let allArticleElements = document.querySelectorAll('.card');
  for(let i=0; i < allArticleElements.length; i++) {
    allArticleElements[i].classList.add('hide');
  }
},

displaySearchArticle: function(articles){
  console.log('article.length',articles.length);
  if(articles.length === 0){
    app.message = "il n'y a pas d'article en rapport avec votre recherche";
    let newMessageElement = document.querySelector('.info');
    console.log('newMessageElement',newMessageElement);
    newMessageElement.textContent = app.message;
  } else {
    let allArticleElements = document.querySelectorAll('.card');
    for(let i=0; i < allArticleElements.length; i++) {
      for(let j=0; j<articles.length; j++){
        if(articles[j]._id === allArticleElements[i].id){
          allArticleElements[i].classList.remove('hide');
          app.arraySearchArticle=[];
        }
      } 
    }
  }
 
},

    /**
     * function that displays the articles
     */
    displayArticle: function(articles){
        const newArticles = document.querySelector('.articles-container');
        for(let i=0; i<articles.length;i++){
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
            myImage.setAttribute('alt', articles[i].imgAlt);
            myHeader.appendChild(myImage);

            const myTitle=document.createElement('h3');
            myTitle.classList.add('card-title');
            myTitle.textContent = articles[i].title;
            myHeader.appendChild(myTitle);


            const mySection=document.createElement('section');
            mySection.classList.add('card-content');
            myArticle.appendChild(mySection);

            const myParaph=document.createElement('p');
            myParaph.textContent = articles[i].description;
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
     * function that displays the 12 works of Heracles
     */
    displayWorks:function(){
        const arrayOls=document.getElementsByTagName('ol');
        app.articles.forEach(article=> {
          const myLi=document.createElement('li');
          myLi.textContent = article.description;
          arrayOls[0].appendChild(myLi);
        }
        )
    },
    /**
     * go to top of page
     */
    upPage:function(){
      const myButtonUp =document.querySelector('.button');
      myButtonUp.addEventListener('click', ()=> {
        window.scrollTo({
          top:0,
          left:0,
          behavior:"smooth",
        })
      })
    },
    /**
   * video disappearing
   */
    showVideoOrHiden:function(){
    const myVideo =document.querySelector('.container-video');
    const iconeChevron=document.querySelector('.button-video');
    iconeChevron.addEventListener('click', ()=>{
        myVideo.classList.toggle("hidden");
        iconeChevron.classList.toggle("chevron-up")
    })

  },

        init: function () {
          app.bindSearch();
            app.getListsFromAPI();
    },

};
document.addEventListener('DOMContentLoaded', app.init);