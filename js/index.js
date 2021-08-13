let app = {

  /**
   * adds a listener one article
   */
   bindDisplayArticle: function(){
    let buttonElements = document.querySelectorAll('.btn');
    for(element of buttonElements){
      element.addEventListener('click', handle.handleDisplayArticle);
    }
  },

  /**
   * adds a listener to reset the search
   */
   bindResetSearch: function(){
    let buttonElements = document.querySelector('.search-button');
    buttonElements.addEventListener('click', handle.handleResetSearch);
  },

  /**
   * adds a listener on the menu buttons
   */
   bindMenu: function(){
    let buttonElements = document.querySelectorAll('.nav-item-link');
    for(element of buttonElements){
      element.addEventListener('click', handle.handleMenu);
    }  
  },

  /**
   * adds a listener on the input
   */
  bindSearch: function(){
    let seachInputElement = document.querySelector('.search');
    seachInputElement.addEventListener('submit', handle.handleSearch);
  },

  /**
   * reset the message info
   */
     resetMessage: function(message){
      let newMessageElements = document.querySelectorAll('.info');
      newMessageElements.forEach(element => element.textContent = message);
    },
    
  /**
   * added css to activate the menu buttons
   */
  initActiveButtonMenu:function(){
    let buttonElements = document.querySelectorAll('.nav-item-link');
    for(element of buttonElements){
      element.classList.remove('nav-item-link--current-page');
    }  
  },

  /**
   * method that resets text highlighting
   */
  resetTextHighlighting: function(){
    let regex1 = new RegExp('<span style="background-color:#f39c12;">', 'gi');
    let regex2 = new RegExp('</span>', 'gi');
        for(let j=0; j<article.articles.length; j++){
            article.articles[j].title = article.articles[j].title.replace(regex1, '');
            article.articles[j].title = article.articles[j].title.replace(regex2, '');
            article.descriptionMinimum[j] = article.descriptionMinimum[j].replace(regex1, '');
            article.descriptionMinimum[j] = article.descriptionMinimum[j].replace(regex2, '');
        }
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
          api.getListsFromAPI();
          app.upPage();
          app.showVideoOrHiden();
          app.bindSearch();
          app.bindMenu();
    },

};
document.addEventListener('DOMContentLoaded', app.init);