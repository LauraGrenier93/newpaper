
let handle = {
    handleDisplayArticle:function(event){
        article.hiddenArticle();
        document.querySelector('.content').classList.add('hide');
        let buttonClicked = event.target;
        buttonClicked.classList.add('hide');
        let articleToDisplay = buttonClicked.closest('.card');
        articleToDisplay.classList.remove('hide');
        articleToDisplay.classList.add('one-article');
        let pictureToDisplay = articleToDisplay.querySelector('.picture');
        pictureToDisplay.classList.add('picture-float');
        for(let i=0; i<article.articles.length; i++){
            if(articleToDisplay.id === article.articles[i]['_id']){
                let  paraphToDisplay = articleToDisplay.querySelector('p');
                let regex = new RegExp('\\. I', 'g'); 
                paraphToDisplay.innerHTML = article.articles[i].description.replace(regex, '.<br><br>I');
                }
        }
    },

    /**
     * method that run to resets the search
     */
    handleResetSearch: function(){
        app.resetMessage('');
        document.querySelector('.search-input').value = '';
        app.resetTextHighlighting();
        article.hiddenArticle();
        article.displaySearchArticle(article.articles);
    },

    /**
    * method that adds prepares the input data and initializes the info display search for an article
    */
    handleSearch: function(event){
        event.preventDefault();
        app.resetTextHighlighting();
        let valueField = document.querySelector('.search-input').value.trim();
        let wordFromInput = valueField.toLowerCase();
        let regex = new RegExp(wordFromInput,"gi");
        for(let i = 0; i < article.articles.length; i++) {
                let testTitleArticle = regex.test(article.articles[i].title);
                let testDescriptionArticle = regex.test(article.descriptionMinimum[i]);
                if((testTitleArticle ||  testDescriptionArticle ) && valueField != ''){ 
                    let regex = new RegExp(wordFromInput + '(?!([^<]+)?<)', 'gi');  
                    article.articles[i].title = article.articles[i].title.replace(regex, '<span style="background-color:#f39c12;">'+ wordFromInput +'</span>');
                    article.descriptionMinimum[i] = article.descriptionMinimum[i].replace(regex, '<span style="background-color:#f39c12;">'+ wordFromInput +'</span>');
                    article.arraySearchArticle.push(article.articles[i]);
                }
            };
        app.resetMessage('');
        if(article.arraySearchArticle.length == 0){
            app.resetMessage("Il n'y a pas d'article en rapport avec votre recherche");
        }
        app.bindResetSearch();
        article.hiddenArticle();
        document.querySelector('.content').classList.add('hide');
        article.displaySearchArticle(article.arraySearchArticle);
        document.querySelector('.search-button').classList.remove('hide');
   },

    /**
    * method that adds css on Menu
    */
     handleMenu: function(event){
       app.initActiveButtonMenu();
       app.resetMessage();
       buttonClicked = event.target;
       buttonClicked.classList.add('nav-item-link--current-page');
       article. hiddenArticle();
       article.displaySearchArticle(article.articles);
   },
}
