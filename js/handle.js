
let handle = {

    /**
    * method that adds a listener prepares the input data and initializes the info display search for an article
    */
    handleSearch: function(event){
        event.preventDefault();
        let valueField = document.querySelector('.search-input').value.trim();
        let wordFromInput = valueField.toLowerCase().split(' ');
        for(let i = 0; i < article.wordFromArticles.length; i++) {
            article.wordFromArticles[i].forEach(word=>{
                let wordOfArticle = wordFromInput.find(wordInput => wordInput === word);
                if(wordOfArticle){
                article.arraySearchArticle.push(article.articles[i]);
                }
            });
        };
        app.message='';
        document.querySelector('.info').textContent="";
        article.hiddenArticle();
        article.displaySearchArticle(article.arraySearchArticle)
   },
}
