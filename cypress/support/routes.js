class Routes {

    as = {
        postArticles: 'postArticles',
        getArticlesTitle: 'getArticlesTitle',
        getArticlesTitleComments: 'getArticlesTitleComments',
        postUsers: 'postUsers',
        getArticlesTags: 'getArticlesTags',
        getArticlesFeed: 'getArticlesFeed'
    }


    init(){//start the routes
        cy.intercept('POST', '**/api/articles').as(this.as.postArticles);
        cy.intercept('GET', '**/api/articles/agilizei-title-**').as(this.as.getArticlesTitle);
        cy.intercept('GET', '**/api/articles/agilizei-title-**/comments').as(this.as.getArticlesTitleComments);
        cy.intercept('POST', '**/api/users').as(this.as.postUsers);
        cy.intercept('GET', '**/api/tags').as(this.as.getArticlesTags);
        cy.intercept('GET', '**/api/articles/feed**').as(this.as.getArticlesFeed);

    }

}


export default new Routes();