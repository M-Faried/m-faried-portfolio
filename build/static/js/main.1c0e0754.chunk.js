(this["webpackJsonpm-faried-portfolio"]=this["webpackJsonpm-faried-portfolio"]||[]).push([[0],{14:function(e,a,t){},19:function(e,a,t){e.exports=t(35)},24:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(15),i=t.n(r),c=t(6),l=t(1),s=t(17),m=(t(24),function(){var e=Object(n.useState)(!0),a=Object(s.a)(e,2),t=a[0],r=a[1],i="".concat("/M-Faried/m-faried-portfolio","/images/linkedin.png");return o.a.createElement("nav",{className:t?"show":""},o.a.createElement("div",{className:"nav-container"},o.a.createElement(c.b,{to:"/"},o.a.createElement("i",{className:"fas fa-home fa-2x"})),o.a.createElement(c.b,{to:"/contacts"},o.a.createElement("i",{className:"fas fa-address-card fa-2x"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/mohamed-faried-0258a445/",target:"blank"},o.a.createElement("img",{src:i,alt:"Linked In"}))),o.a.createElement("button",{className:"menu-btn",onClick:function(){return r(!t)}},o.a.createElement("i",{className:t?"fas fa-chevron-circle-left":"fas fa-chevron-circle-right"})))}),d=(t(30),function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"intro-container"},o.a.createElement("div",{className:"logo popup-element pop"},o.a.createElement("img",{src:"/M-Faried/m-faried-portfolio/images/logo.jpg",alt:""})),o.a.createElement("div",{className:"intro-text"},o.a.createElement("h2",{className:"popup-element pop"},"He",o.a.createElement("span",{className:"text-blue"},"ll"),"o",o.a.createElement("span",{className:"text-blue"},",")),o.a.createElement("h2",{className:"popup-element pop"},o.a.createElement("span",{className:"text-blue"},"I")," am"),o.a.createElement("h1",{className:"popup-element pop"},"M",o.a.createElement("span",{className:"text-blue"},"."),"FAR",o.a.createElement("span",{className:"text-blue"},"I"),"ED"),o.a.createElement("small",{className:"popup-element pop text-blue"},"Full Stack Web Developer / Desktop Developer / Freelancer"))))}),p=t(36),h=(t(31),function(e){var a=e.logos,t=e.desc,n=e.link;return o.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-6 col-xl-4"},o.a.createElement("div",{className:"skill-card"},o.a.createElement(c.b,{to:n},o.a.createElement("div",{className:"skill-card-content"},o.a.createElement("div",{className:a.length>1?"multi-logo":"logo"},a.map((function(e){return o.a.createElement("img",{key:p.a(),src:e,alt:"logo"})}))),o.a.createElement("div",{className:"description"},t),o.a.createElement("small",null,"Click To View Projects")))))}),u=function(){var e=["".concat("/M-Faried/m-faried-portfolio","/images/react.svg")],a=["".concat("/M-Faried/m-faried-portfolio","/images/react.svg"),"".concat("/M-Faried/m-faried-portfolio","/images/node.svg"),"".concat("/M-Faried/m-faried-portfolio","/images/mongo.svg")],t=["".concat("/M-Faried/m-faried-portfolio","/images/logo-js-html-css.png")],n=o.a.createElement("p",null,"Web development using pure ",o.a.createElement("span",{className:"text-red"},"HTML5"),","," ",o.a.createElement("span",{className:"text-blue"},"CSS3"),", and"," ",o.a.createElement("span",{className:"text-yellow"},"Javascript")),r=["".concat("/M-Faried/m-faried-portfolio","/images/logo-dot-net.png")],i=["".concat("/M-Faried/m-faried-portfolio","/images/logo-embedded.png")];return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement(h,{logos:e,desc:"Font End Apps & PWA's Using React",link:"/pwa-react"}),o.a.createElement(h,{logos:a,desc:"Full MERN Stack Web Development [MongoDB, ExpressJS, React, NodeJS]",link:"/mern-stack"}),o.a.createElement(h,{logos:t,desc:n,link:"/jhc"})),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement(h,{logos:r,desc:"Software C# & WPF Tooling Engineer for 6 years @ Valeo Automotive Systems",link:"dot-net"}),o.a.createElement(h,{logos:i,desc:"Embedded Software Engineer for 4 Years @ Valeo Automotive Systems",link:"embedded"})))},g=function(){return o.a.createElement(n.Fragment,null,o.a.createElement(d,null),o.a.createElement(u,null))},f=(t(32),function(e){var a=e.title,t=e.screenShots,n=e.descriptions,r=e.tecnologies,i=e.links;return o.a.createElement("div",{className:"project"},o.a.createElement("h1",null,a),o.a.createElement("div",{className:"project-body"},i.map((function(e){return o.a.createElement("div",{key:p.a(),className:"mx-5 text-blue"},e.header,":"," ",o.a.createElement("a",{href:e.ref,target:"blank"},e.ref))})),o.a.createElement("div",{className:"screen-shot"},t.map((function(e){return o.a.createElement("img",{key:p.a(),src:e,alt:"screen shot"})}))),o.a.createElement("div",{className:"description"},n.map((function(e){return o.a.createElement("p",{key:p.a()},e)})),o.a.createElement("h3",null,"Technologies & APIs"),o.a.createElement("ul",null,r.map((function(e){return o.a.createElement("li",{key:p.a()},e)}))))))}),E=function(){var e={title:"K-Highlights",descriptions:["K-Highlights is a viewer for Kindle highlights and clippings. The application is deployed as a website using HEROKU and published on PWA store."],screenShots:["".concat("/M-Faried/m-faried-portfolio","/images/k-highlights.PNG")],tecnologies:["REACT.","Workbox for creating Service Worker and handling caching resources.","Bootstrap."],links:[{header:"Deployed Website",ref:"https://k-highlights.herokuapp.com/",display:"K-Highlights"},{header:"PWA Store Link",ref:"https://progressiveapp.store/pwa/K-Highlights",display:"K-Highlights"}]},a={title:"Github Finder",descriptions:["Github Finder is an application which helps users to search Github developer profiles."],screenShots:["".concat("/M-Faried/m-faried-portfolio","/images/GitHubFinder.PNG")],tecnologies:["REACT.","Github API"],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/github-finder/",display:"Github Finder"}]};return o.a.createElement("div",{className:"container my-5"},o.a.createElement(f,e),o.a.createElement(f,a))},v=function(){var e={title:"Contact Keeper",descriptions:["Contact Keeper is a full stack MERN application which allows users to create accounts and Create, Retrieve, Update, Search, Delete their contacts.","The front-end was built using REACT, and the back-end was implemented as a web API and all the communication with the database is made using HTTP requests and authenticated using using JsonWebTokens."," I used the MongoDB cloud version for this project and the connection to database and Model Object management was done using Mongoose framework."],screenShots:["".concat("/M-Faried/m-faried-portfolio","/images/ContactKeeper_01.PNG"),"".concat("/M-Faried/m-faried-portfolio","/images/ContactKeeper_02.PNG")],tecnologies:["REACT for front-end.","Node.js & ExpressJS for creating the back-end API which controls the CRUD operations of the data and handles user authentication and session.","Json Web Tokens[jwt] to manage user session and authentication using tokens.","Mongoose module to create the database access layer and object data modeling.","Cloud version of MongoDB which was created using Atlas."],links:[{header:"Deployed Website",ref:"https://contact-keeper-11.herokuapp.com",display:"Contact Keeper"}]},a={title:"Expense Tracker",descriptions:["Expense Tracker is a full stack MERN application which allows users to create accounts and track expenses versus their income.","The front-end was built using REACT, and the back-end was implemented as a web API and all the communication with the database is made using HTTP requests and authenticated using using JsonWebTokens.","I used the MongoDB cloud version for this project and the connection to database and Model Object management was done using Mongoose framework."],screenShots:["".concat("/M-Faried/m-faried-portfolio","/images/ExpenseTracker_01.PNG"),"".concat("/M-Faried/m-faried-portfolio","/images/ExpenseTracker_02.PNG")],tecnologies:["REACT for front-end.","Node.js & ExpressJS for creating the back-end API which controls the CRUD operations of the data and handles user authentication and session.","Json Web Tokens[jwt] to manage user session and authentication using tokens.","Mongoose module to create the database access layer and object data modeling.","Cloud version of MongoDB which was created using Atlas."],links:[{header:"Deployed Website",ref:"https://expense-tracker-11.herokuapp.com",display:"Expense Tracker"}]};return o.a.createElement("div",{className:"container my-5"},o.a.createElement(f,e),o.a.createElement(f,a))},b=function(){var e={title:"Meal Recipe Finder",descriptions:["Meal Recipe Finder is an application which helps users find meal recipies to cook."],screenShots:["".concat("/M-Faried/m-faried-portfolio","/images/MealFinder_01.PNG"),"".concat("/M-Faried/m-faried-portfolio","/images/MealFinder_02.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript.","The Meal DB Web Service."],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/meal-recipe-finder/",display:"Meal Recipe Finder"}]},a={title:"My Voice",descriptions:["My Voice is an application to help autistic children communicate their thoughts and needs."],screenShots:["".concat("/M-Faried/m-faried-portfolio","/images/my-voice.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript.","Web Speech API."],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/my-voice/",display:"My Voice"}]},t={title:"Hangman Game",descriptions:["An online hangman game."],screenShots:["".concat("/M-Faried/m-faried-portfolio","/images/hangman.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript."],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/hangman-game/",display:"Hangman Game"}]},n={title:"Exchange Rate Calculator",descriptions:["An online hangman game.Currency exchange rate calculator application."],screenShots:["".concat("/M-Faried/m-faried-portfolio","/images/ExchangeRateCalculator.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript."],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/exchange-rate-calculator/",display:"Exchange Rate Calculator"}]},r={title:"Song Lyrics Search App",descriptions:["Lyrics search application."],screenShots:["".concat("/M-Faried/m-faried-portfolio","/images/LyricsSearchApp.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript."],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/lyrics-search-app/",display:"Lyrics Search App"}]},i={title:"Relaxer",descriptions:["A web application to guide users practice relaxing breathing technique."],screenShots:["".concat("/M-Faried/m-faried-portfolio","/images/Relaxer.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript."],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/relaxer/",display:"Relaxer"}]};return o.a.createElement("div",{className:"container my-5"},o.a.createElement(f,e),o.a.createElement(f,a),o.a.createElement(f,t),o.a.createElement(f,n),o.a.createElement(f,r),o.a.createElement(f,i))},k=(t(14),function(){return o.a.createElement("div",{className:"container my-5"},o.a.createElement("div",{className:"field-container"},o.a.createElement("div",{className:"field-logo"},o.a.createElement("img",{src:"".concat("/M-Faried/m-faried-portfolio","/images/logo-dot-net.png"),alt:"dot net logo"}),o.a.createElement("h1",null,"WPF & C#"),o.a.createElement("a",{href:"https://www.linkedin.com/in/mohamed-faried-0258a445/"},"Check Linked IN")),o.a.createElement("div",{className:"field-desc"},o.a.createElement("h1",{className:"text-purple my-4"},"Software Tooling Engineer for 6 years @ Valeo Automotive Systems"," "),o.a.createElement("p",null,"Responsible for the design and development of performance critical desktop applications using WPF, C#, and"," ",o.a.createElement("a",{href:"https://www.vector.com/int/en/products/products-a-z/libraries-drivers/xl-driver-library/",target:"blank"},"Vector Network Interfaces & Drivers")," ","for the following purposes:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Real Time Debugging & Data Acquisition from the ECU's based on various communication protocols like"," ",o.a.createElement("a",{href:"https://www.vector.com/int/en/know-how/technologies/networks/can/",target:"blank"},"CAN-FD")," ","and"," ",o.a.createElement("a",{href:"https://www.vector.com/int/en/know-how/technologies/networks/automotive-ethernet/",target:"blank"},"Automotive Ethernet")," ","and also based on various"," ",o.a.createElement("a",{href:"https://www.autosar.org/",target:"blank"},"AUTOSAR's")," ","diagnostic protocols like XCP and DLT."),o.a.createElement("li",null,"Facilitation & automation of validation cycle of the embedded software through MIL / SIL / HIL validation phases and using Jenkins server for continuous integration.")))))}),N={color:"#61dbfb"},w=function(){return o.a.createElement("div",{className:"container my-5"},o.a.createElement("div",{className:"field-container"},o.a.createElement("div",{className:"field-logo"},o.a.createElement("img",{src:"".concat("/M-Faried/m-faried-portfolio","/images/logo-embedded.png"),alt:"embedded"}),o.a.createElement("h1",null,"Embedded Development"),o.a.createElement("a",{style:N,href:"https://www.linkedin.com/in/mohamed-faried-0258a445/",target:"blank"},"Check Linked IN")),o.a.createElement("div",{className:"field-desc"},o.a.createElement("p",{className:" my-4"},"Embedded software developer using Model Based Development approach for autmotive control systems for 4 Years @ Valeo Automotive Systems"))))},y=(t(33),function(){return o.a.createElement("div",{className:"container my-5"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"contact-container col-sm-12 col-md-6 col-lg-4"},o.a.createElement("div",{className:"contact-body"},o.a.createElement("a",{href:"mailto:m.a.faried@gmail.com"},o.a.createElement("div",{className:"logo"},o.a.createElement("i",{className:"fas fa-envelope"})),o.a.createElement("p",null,"m.a.faried@gmail.com")))),o.a.createElement("div",{className:"contact-container col-sm-12 col-md-6 col-lg-4"},o.a.createElement("div",{className:"contact-body"},o.a.createElement("a",{href:"mailto:m.faried.11111@gmail.com"},o.a.createElement("div",{className:"logo"},o.a.createElement("i",{className:"fas fa-envelope"})),o.a.createElement("p",null,"m.faried.11111@gmail.com")))),o.a.createElement("div",{className:"contact-container col-sm-12 col-md-6 col-lg-4"},o.a.createElement("div",{className:"contact-body"},o.a.createElement("a",{href:"#!",onClick:function(){return navigator.clipboard.writeText("(+2) 01003109540")}},o.a.createElement("div",{className:"logo"},o.a.createElement("i",{className:"fas fa-phone-square"})),o.a.createElement("p",null,"(+2) 01003109540"))))))});t(34);var M=function(){return o.a.createElement(c.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(m,null),o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/pwa-react",component:E}),o.a.createElement(l.a,{exact:!0,path:"/mern-stack",component:v}),o.a.createElement(l.a,{exact:!0,path:"/jhc",component:b}),o.a.createElement(l.a,{exact:!0,path:"/dot-net",component:k}),o.a.createElement(l.a,{exact:!0,path:"/embedded",component:w}),o.a.createElement(l.a,{exact:!0,path:"/contacts",component:y}),o.a.createElement(l.a,{exact:!0,path:"/",component:g}))))};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(M,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1c0e0754.chunk.js.map