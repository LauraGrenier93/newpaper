let api = {
    base_url: "http://localhost:8080/",

  /**
  * Data recovery features
  */
  getListsFromAPI: async () => {
    try {
      let response = await fetch(api.base_url);
      if (response.status !== 200) {
        let error = await response.json();
        throw error;
      } else {
        article.articles = await response.json();
        article.displayWorks();
        article.displayArticles(article.articles);
        app.bindDisplayArticle();
      }
    } catch (error) {
      console.error(error);
    }
  },
}