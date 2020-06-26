(this["webpackJsonpm-faried-portfolio-react"]=this["webpackJsonpm-faried-portfolio-react"]||[]).push([[0],{14:function(e,a,t){},19:function(e,a,t){e.exports=t(35)},24:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(15),o=t.n(s),l=t(6),r=t(1),i=t(17),m=(t(24),function(){var e=Object(n.useState)(!0),a=Object(i.a)(e,2),t=a[0],s=a[1],o="".concat("","/images/linkedin.png");return c.a.createElement("nav",{className:t?"show":""},c.a.createElement("div",{className:"nav-container"},c.a.createElement(l.b,{to:"/"},c.a.createElement("i",{className:"fas fa-home fa-2x"})),c.a.createElement(l.b,{to:"/contacts"},c.a.createElement("i",{className:"fas fa-address-card fa-2x"})),c.a.createElement("a",{href:"https://www.linkedin.com/in/mohamed-faried-0258a445/",target:"blank"},c.a.createElement("img",{src:o,alt:"Linked In"}))),c.a.createElement("button",{className:"menu-btn",onClick:function(){return s(!t)}},c.a.createElement("i",{className:t?"fas fa-chevron-circle-left":"fas fa-chevron-circle-right"})))}),d=(t(30),function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"intro-container"},c.a.createElement("div",{className:"logo popup-element pop"},c.a.createElement("img",{src:"/images/logo.jpg",alt:""})),c.a.createElement("div",{className:"intro-text"},c.a.createElement("h2",{className:"popup-element pop"},"He",c.a.createElement("span",{className:"text-blue"},"ll"),"o",c.a.createElement("span",{className:"text-blue"},",")),c.a.createElement("h2",{className:"popup-element pop"},c.a.createElement("span",{className:"text-blue"},"I")," am"),c.a.createElement("h1",{className:"popup-element pop"},"M",c.a.createElement("span",{className:"text-blue"},"."),"FAR",c.a.createElement("span",{className:"text-blue"},"I"),"ED"),c.a.createElement("small",{className:"popup-element pop text-blue"},"Full Stack Web Developer / Desktop Developer / Freelancer"))))}),p=t(36),h=(t(31),function(e){var a=e.logos,t=e.desc,n=e.link;return c.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-6 col-xl-4"},c.a.createElement("div",{className:"skill-card"},c.a.createElement(l.b,{to:n},c.a.createElement("div",{className:"skill-card-content"},c.a.createElement("div",{className:a.length>1?"multi-logo":"logo"},a.map((function(e){return c.a.createElement("img",{key:p.a(),src:e,alt:"logo"})}))),c.a.createElement("div",{className:"description"},t),c.a.createElement("small",null,"Click To View Projects")))))}),u=function(){var e=["".concat("","/images/react.svg")],a=["".concat("","/images/react.svg"),"".concat("","/images/node.svg"),"".concat("","/images/mongo.svg")],t=["".concat("","/images/logo-js-html-css.png")],n=c.a.createElement("p",null,"Web development using pure ",c.a.createElement("span",{className:"text-red"},"HTML5"),","," ",c.a.createElement("span",{className:"text-blue"},"CSS3"),", and"," ",c.a.createElement("span",{className:"text-yellow"},"Javascript")),s=["".concat("","/images/logo-dot-net.png")],o=["".concat("","/images/logo-embedded.png")];return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement(h,{logos:e,desc:"Font End Apps & PWA's Using React",link:"/pwa-react"}),c.a.createElement(h,{logos:a,desc:"Full MERN Stack Web Development [MongoDB, ExpressJS, React, NodeJS]",link:"/mern-stack"}),c.a.createElement(h,{logos:t,desc:n,link:"/jhc"})),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement(h,{logos:s,desc:"Software C# & WPF Tooling Engineer for 6 years @ Valeo Automotive Systems",link:"dot-net"}),c.a.createElement(h,{logos:o,desc:"Embedded Software Engineer for 4 Years @ Valeo Automotive Systems",link:"embedded"})))},g=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(d,null),c.a.createElement(u,null))},E=(t(32),function(e){var a=e.title,t=e.screenShots,n=e.descriptions,s=e.tecnologies,o=e.links;return c.a.createElement("div",{className:"project"},c.a.createElement("h1",null,a),c.a.createElement("div",{className:"project-body"},o.map((function(e){return c.a.createElement("div",{key:p.a(),className:"mx-5 text-blue"},e.header,":"," ",c.a.createElement("a",{href:e.ref,target:"blank"},e.ref))})),c.a.createElement("div",{className:"screen-shot"},t.map((function(e){return c.a.createElement("img",{key:p.a(),src:e,alt:"screen shot"})}))),c.a.createElement("div",{className:"description"},n.map((function(e){return c.a.createElement("p",{key:p.a()},e)})),c.a.createElement("h3",null,"Technologies & APIs"),c.a.createElement("ul",null,s.map((function(e){return c.a.createElement("li",{key:p.a()},e)}))))))}),f=function(){var e={title:"K-Highlights",descriptions:["K-Highlights is a viewer for Kindle highlights and clippings. The application is deployed as a website using HEROKU and published on PWA store."],screenShots:["".concat("","/images/k-highlights.PNG")],tecnologies:["REACT.","Workbox for creating Service Worker and handling caching resources.","Bootstrap."],links:[{header:"Deployed Website",ref:"https://k-highlights.herokuapp.com/",display:"K-Highlights"},{header:"PWA Store Link",ref:"https://progressiveapp.store/pwa/K-Highlights",display:"K-Highlights"}]},a={title:"Github Finder",descriptions:["Github Finder is an application which helps users to search Github developer profiles."],screenShots:["".concat("","/images/GitHubFinder.PNG")],tecnologies:["REACT.","Github API"],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/github-finder/",display:"Github Finder"}]};return c.a.createElement("div",{className:"container my-5"},c.a.createElement(E,e),c.a.createElement(E,a))},v=function(){var e={title:"Contact Keeper",descriptions:["Contact Keeper is a full stack MERN application which allows users to create accounts and Create, Retrieve, Update, Search, Delete their contacts.","The front-end was built using REACT, and the back-end was implemented as a web API and all the communication with the database is made using HTTP requests and authenticated using using JsonWebTokens."," I used the MongoDB cloud version for this project and the connection to database and Model Object management was done using Mongoose framework."],screenShots:["".concat("","/images/ContactKeeper_01.PNG"),"".concat("","/images/ContactKeeper_02.PNG")],tecnologies:["REACT for front-end.","Node.js & ExpressJS for creating the back-end API which controls the CRUD operations of the data and handles user authentication and session.","Json Web Tokens[jwt] to manage user session and authentication using tokens.","Mongoose module to create the database access layer and object data modeling.","Cloud version of MongoDB which was created using Atlas."],links:[{header:"Deployed Website",ref:"https://contact-keeper-11.herokuapp.com",display:"Contact Keeper"}]},a={title:"Expense Tracker",descriptions:["Expense Tracker is a full stack MERN application which allows users to create accounts and track expenses versus their income.","The front-end was built using REACT, and the back-end was implemented as a web API and all the communication with the database is made using HTTP requests and authenticated using using JsonWebTokens.","I used the MongoDB cloud version for this project and the connection to database and Model Object management was done using Mongoose framework."],screenShots:["".concat("","/images/ExpenseTracker_01.PNG"),"".concat("","/images/ExpenseTracker_02.PNG")],tecnologies:["REACT for front-end.","Node.js & ExpressJS for creating the back-end API which controls the CRUD operations of the data and handles user authentication and session.","Json Web Tokens[jwt] to manage user session and authentication using tokens.","Mongoose module to create the database access layer and object data modeling.","Cloud version of MongoDB which was created using Atlas."],links:[{header:"Deployed Website",ref:"https://expense-tracker-11.herokuapp.com",display:"Expense Tracker"}]};return c.a.createElement("div",{className:"container my-5"},c.a.createElement(E,e),c.a.createElement(E,a))},b=function(){var e={title:"Meal Recipe Finder",descriptions:["Meal Recipe Finder is an application which helps users find meal recipies to cook."],screenShots:["".concat("","/images/MealFinder_01.PNG"),"".concat("","/images/MealFinder_02.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript.","The Meal DB Web Service."],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/meal-recipe-finder/",display:"Meal Recipe Finder"}]},a={title:"My Voice",descriptions:["My Voice is an application to help autistic children communicate their thoughts and needs."],screenShots:["".concat("","/images/my-voice.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript.","Web Speech API."],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/my-voice/",display:"My Voice"}]},t={title:"Hangman Game",descriptions:["An online hangman game."],screenShots:["".concat("","/images/hangman.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript."],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/hangman-game/",display:"Hangman Game"}]},n={title:"Exchange Rate Calculator",descriptions:["An online hangman game.Currency exchange rate calculator application."],screenShots:["".concat("","/images/ExchangeRateCalculator.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript."],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/exchange-rate-calculator/",display:"Exchange Rate Calculator"}]},s={title:"Song Lyrics Search App",descriptions:["Lyrics search application."],screenShots:["".concat("","/images/LyricsSearchApp.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript."],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/lyrics-search-app/",display:"Lyrics Search App"}]},o={title:"Relaxer",descriptions:["A web application to guide users practice relaxing breathing technique."],screenShots:["".concat("","/images/Relaxer.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript."],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/relaxer/",display:"Relaxer"}]};return c.a.createElement("div",{className:"container my-5"},c.a.createElement(E,e),c.a.createElement(E,a),c.a.createElement(E,t),c.a.createElement(E,n),c.a.createElement(E,s),c.a.createElement(E,o))},k=(t(14),function(){return c.a.createElement("div",{className:"container my-5"},c.a.createElement("div",{className:"field-container"},c.a.createElement("div",{className:"field-logo"},c.a.createElement("img",{src:"".concat("","/images/logo-dot-net.png"),alt:"dot net logo"}),c.a.createElement("h1",null,"WPF & C#"),c.a.createElement("a",{href:"https://www.linkedin.com/in/mohamed-faried-0258a445/"},"Check Linked IN")),c.a.createElement("div",{className:"field-desc"},c.a.createElement("h1",{className:"text-purple my-4"},"Software Tooling Engineer for 6 years @ Valeo Automotive Systems"," "),c.a.createElement("p",null,"Responsible for the design and development of performance critical desktop applications using WPF, C#, and"," ",c.a.createElement("a",{href:"https://www.vector.com/int/en/products/products-a-z/libraries-drivers/xl-driver-library/",target:"blank"},"Vector Network Interfaces & Drivers")," ","for the following purposes:"),c.a.createElement("ul",null,c.a.createElement("li",null,"Real Time Debugging & Data Acquisition from the ECU's based on various communication protocols like"," ",c.a.createElement("a",{href:"https://www.vector.com/int/en/know-how/technologies/networks/can/",target:"blank"},"CAN-FD")," ","and"," ",c.a.createElement("a",{href:"https://www.vector.com/int/en/know-how/technologies/networks/automotive-ethernet/",target:"blank"},"Automotive Ethernet")," ","and also based on various"," ",c.a.createElement("a",{href:"https://www.autosar.org/",target:"blank"},"AUTOSAR's")," ","diagnostic protocols like XCP and DLT."),c.a.createElement("li",null,"Facilitation & automation of validation cycle of the embedded software through MIL / SIL / HIL validation phases and using Jenkins server for continuous integration.")))))}),N={color:"#61dbfb"},w=function(){return c.a.createElement("div",{className:"container my-5"},c.a.createElement("div",{className:"field-container"},c.a.createElement("div",{className:"field-logo"},c.a.createElement("img",{src:"".concat("","/images/logo-embedded.png"),alt:"embedded"}),c.a.createElement("h1",null,"Embedded Development"),c.a.createElement("a",{style:N,href:"https://www.linkedin.com/in/mohamed-faried-0258a445/",target:"blank"},"Check Linked IN")),c.a.createElement("div",{className:"field-desc"},c.a.createElement("p",{className:" my-4"},"Embedded software developer using Model Based Development approach for autmotive control systems for 4 Years @ Valeo Automotive Systems"))))},y=(t(33),function(){return c.a.createElement("div",{className:"container my-5"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"contact-container col-sm-12 col-md-6 col-lg-4"},c.a.createElement("div",{className:"contact-body"},c.a.createElement("a",{href:"mailto:m.a.faried@gmail.com"},c.a.createElement("div",{className:"logo"},c.a.createElement("i",{className:"fas fa-envelope"})),c.a.createElement("p",null,"m.a.faried@gmail.com")))),c.a.createElement("div",{className:"contact-container col-sm-12 col-md-6 col-lg-4"},c.a.createElement("div",{className:"contact-body"},c.a.createElement("a",{href:"mailto:m.faried.11111@gmail.com"},c.a.createElement("div",{className:"logo"},c.a.createElement("i",{className:"fas fa-envelope"})),c.a.createElement("p",null,"m.faried.11111@gmail.com")))),c.a.createElement("div",{className:"contact-container col-sm-12 col-md-6 col-lg-4"},c.a.createElement("div",{className:"contact-body"},c.a.createElement("a",{href:"#!",onClick:function(){return navigator.clipboard.writeText("(+2) 01003109540")}},c.a.createElement("div",{className:"logo"},c.a.createElement("i",{className:"fas fa-phone-square"})),c.a.createElement("p",null,"(+2) 01003109540"))))))});t(34);var S=function(){return c.a.createElement(l.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement(r.c,null,c.a.createElement(r.a,{exact:!0,path:"/pwa-react",component:f}),c.a.createElement(r.a,{exact:!0,path:"/mern-stack",component:v}),c.a.createElement(r.a,{exact:!0,path:"/jhc",component:b}),c.a.createElement(r.a,{exact:!0,path:"/dot-net",component:k}),c.a.createElement(r.a,{exact:!0,path:"/embedded",component:w}),c.a.createElement(r.a,{exact:!0,path:"/contacts",component:y}),c.a.createElement(r.a,{exact:!0,path:"/",component:g}))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.0b365148.chunk.js.map