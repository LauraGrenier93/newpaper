let app = {
    message:'',

  /**
   * adds a listener on the input
   */
  bindSearch: function(){
    let seachInputElement = document.querySelector('.search');
    seachInputElement.addEventListener('submit', handle.handleSearch);
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
    },

};
document.addEventListener('DOMContentLoaded', app.init);