let app = {
    articles:[
    {
    "title": "Le lion de Némée",
    "img": "../img/lion.jpg",
    "img_alt": "Le lion de Némée",
    "text": "Étouffer le lion de Némée à la peau impénétrable, et rapporter sa dépouille."
    },
    {
    "title": "L'hydre de Lerne",
    "img": "../img/hydre.jpg",
    "img_alt": "L'hydre de Lerne",
    "text": "Tuer l'hydre de Lerne, dont les têtes tranchées repoussaient sans cesse."
    },
    {
    "title": "La biche de Cérynie",
    "img": "../img/biche.jpg",
    "img_alt": "La biche de Cérynie",
    "text": "Capturer la biche de Cérynie aux sabots d'airain et aux bois d'or, créature sacrée d'Artémis."
    },
    {
    "title": "Le sanglier d'Érymanthe",
    "img": "../img/sanglier.jpg",
    "img_alt": "Le sanglier d'Érymanthe",
    "text": "Ramener vivant l'énorme sanglier d'Érymanthe."
    },
    {
    "title": "Les écuries d'Augias",
    "img": "../img/ecuries.jpg",
    "img_alt": "Les écuries d'Augias",
    "text": "Nettoyer les écuries d'Augias, qui ne l'avaient jamais été, car elles étaient si grandes que personne n'avait jamais eu le courage de le faire."
    },
    {
    "title": "Les oiseaux du lac Stymphale",
    "img": "../img/oiseaux.jpg",
    "img_alt": "Les oiseaux du lac Stymphale",
    "text": "Tuer les oiseaux du lac Stymphale aux plumes d'airain."
    }
    ],
    works:[
    "Étouffer le lion de Némée à la peau impénétrable, et rapporter sa dépouille.",
    "Tuer l'hydre de Lerne, dont les têtes tranchées repoussaient sans cesse.",
    "Capturer la biche de Cérynie aux sabots d'airain et aux bois d'or, créature sacrée d'Artémis.",
    "Ramener vivant l'énorme sanglier d'Érymanthe.",
    "Nettoyer les écuries d'Augias, qui ne l'avaient jamais été, car elles étaient si grandes que personne n'avait jamais eu le courage de le faire.",
    "Tuer les oiseaux du lac Stymphale aux plumes d'airain.",
    "Dompter le taureau crétois de Minos, que celui-ci n'avait pas voulu sacrifier à Poséidon.",
    "Capturer les cavales de Diomède (juments mangeuses d'hommes).",
    "Rapporter la ceinture d'Hippolyte, fille d'Arès et reine des Amazones.",
    "Rapporter les pommes d'or du jardin des Hespérides, que gardait Ladon.",
    "Vaincre le géant aux trois corps Géryon, et voler son troupeau de bœufs.",
    "Descendre aux Enfers et enchaîner Cerbère, le chien aux trois têtes puis le présenter à Eurysthée pour témoigner de son succès."
    ],

    /**
     * function that displays the articles
     */
    displayArticle: function(){
        const newArticles = document.querySelector('.card');
        for(let i=0; i<app.articles.length;i++){
            const myHeader= document.createElement('header')
            myHeader.classList.add('card-header');
            newArticles.appendChild(myHeader);

            const myImg= document.createElement('img');
            myImg.classList.add('picture');
            myImg.classList.add('rounded');
            myImg.setAttribute('src', app.articles[i].img);
            myImg.setAttribute('alt', app.articles[i].img_alt);
            myHeader.appendChild(myImg);

            const myTitle=document.createElement('h3');
            myTitle.classList.add('card-title');
            myTitle.textContent = app.articles[i].title;
            myHeader.appendChild(myTitle);


            const mySection=document.createElement('section');
            mySection.classList.add('card-content');
            newArticles.appendChild(mySection);

            const myParaph=document.createElement('p');
            myParaph.textContent = app.articles[i].text;
            mySection.appendChild(myParaph);


            const myFooter=document.createElement('footer');
            myFooter.classList.add('card-footer');
            newArticles.appendChild(myFooter);

            const linkRead=document.createElement('a');
            linkRead.classList.add('btn');
            linkRead.setAttribute('href', '#');
            linkRead.textContent = 'Lire la suite';
            myFooter.appendChild(linkRead);

            const linkLike=document.createElement('a');
            linkLike.classList.add('btn');
            linkLike.setAttribute('href', '#');
            linkLike.textContent ='J\'aime';
            myFooter.appendChild(linkLike);
        }
    },
    /**
     * function that displays the 12 works of Heracles
     */
    displayWorks:function(){
        const arrayOls=document.getElementsByTagName('ol');
        app.works.forEach(work=> {
          const myLi=document.createElement('li');
          myLi.textContent = work;
          arrayOls[0].appendChild(myLi);
        }
        )
    },

        init: function () {
        app.displayArticle();
        app.displayWorks();
    },
};

document.addEventListener('DOMContentLoaded', app.init)