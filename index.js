let app = {
    articles:[],
    base_url: "http://localhost:8080/",
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
        app.displayArticle();
        app.displayWorks();
        app.upPage();
        app.showVideoOrHiden();
      }
    } catch (error) {
      console.error(error);
    }
  },
    /**
     * function that displays the articles
     */
    displayArticle: function(){
        const newArticles = document.querySelector('.articles-container');
        for(let i=0; i<app.articles.length;i++){
            const myArticle = document.createElement('article');
            myArticle.classList.add('card')
            newArticles.appendChild(myArticle);

            const myHeader= document.createElement('header')
            myHeader.classList.add('card-header');
            myArticle.appendChild(myHeader);

            const myImage= document.createElement('img');
            myImage.classList.add('picture');
            myImage.classList.add('rounded');
            myImage.setAttribute('src', '.'+ app.articles[i].imageUrl);
            myImage.setAttribute('alt', app.articles[i].imgAlt);
            myHeader.appendChild(myImage);

            const myTitle=document.createElement('h3');
            myTitle.classList.add('card-title');
            myTitle.textContent = app.articles[i].title;
            myHeader.appendChild(myTitle);


            const mySection=document.createElement('section');
            mySection.classList.add('card-content');
            myArticle.appendChild(mySection);

            const myParaph=document.createElement('p');
            myParaph.textContent = app.articles[i].description;
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
            app.getListsFromAPI();
    },

};
document.addEventListener('DOMContentLoaded', app.init);