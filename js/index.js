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