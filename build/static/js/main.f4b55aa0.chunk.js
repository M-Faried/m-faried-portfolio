(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(51)},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var o,n=a(1),i=a.n(n),r=a(13),s=a.n(r),l=a(7),c=a(4),d=function(e){var t=e.link,a=e.icon,o=e.text;return i.a.createElement("a",{className:"navlink",href:t,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:a,alt:o}),i.a.createElement("span",null,o))},m=function(e){var t=e.route,a=e.icon,o=e.text,n=e.onClick;return i.a.createElement(l.b,{className:"navlink",to:t,onClick:n},i.a.createElement("i",{className:a}),o&&i.a.createElement("small",null,o))},p=function(e){var t=e.isOpen,a=e.toggleNavbarOpen;return i.a.createElement("button",{className:"menu-btn",onClick:a},i.a.createElement("i",{className:t?"fas fa-chevron-circle-left":"fas fa-chevron-circle-right"}))},u={Jhc:"".concat("/m-faried-portfolio","/logos/tech/logo-js-html-css.png"),Javascript:"".concat("/m-faried-portfolio","/logos/tech/javascript.svg"),Css:"".concat("/m-faried-portfolio","/logos/tech/css-5.svg"),Html:"".concat("/m-faried-portfolio","/logos/tech/html-5.svg"),React:"".concat("/m-faried-portfolio","/logos/tech/react.svg"),Bootstrap:"".concat("/m-faried-portfolio","/logos/tech/bootstrap-5-1.svg"),Pwa:"".concat("/m-faried-portfolio","/logos/tech/pwa-logo.svg"),Ethereum:"".concat("/m-faried-portfolio","/logos/tech/ethereum.svg"),NodeJS:"".concat("/m-faried-portfolio","/logos/tech/node.svg"),Firebase:"".concat("/m-faried-portfolio","/logos/tech/firebase.svg"),MongoDB:"".concat("/m-faried-portfolio","/logos/tech/mongodb.svg"),Mongo:"".concat("/m-faried-portfolio","/logos/tech/mongo.svg"),DotNet:"".concat("/m-faried-portfolio","/logos/tech/logo-dot-net.png"),Embedded:"".concat("/m-faried-portfolio","/logos/tech/logo-embedded.png"),Heroku:"".concat("/m-faried-portfolio","/logos/tech/heroku.svg")},h={Github:"".concat("/m-faried-portfolio","/logos/navbar/github.svg"),Linkedin:"".concat("/m-faried-portfolio","/logos/navbar/linkedin.svg"),Medium:"".concat("/m-faried-portfolio","/logos/navbar/medium-4.svg "),Twitter:"".concat("/m-faried-portfolio","/logos/navbar/twitter.svg"),Coursera:"".concat("/m-faried-portfolio","/logos/navbar/couersera.svg"),Wordpress:"".concat("/m-faried-portfolio","/logos/navbar/wordpress-blue.svg"),Stackoverflow:"".concat("/m-faried-portfolio","/logos/navbar/stack-overflow.svg")},f="/m-faried-portfolio",g="https://www.linkedin.com/in/mo-faried-0258a445/",b="https://github.com/M-Faried",y="https://twitter.com/MFaried24540176/",k=(a(29),function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],o=t[1];return i.a.createElement("nav",{className:a?"show":""},i.a.createElement("div",{className:"nav-links-container"},i.a.createElement(m,{route:f,icon:"fas fa-home fa-3x",text:"Home",onClick:function(){return o(!1)}}),i.a.createElement(m,{route:"/m-faried-portfolio/contacts",icon:"fas fa-address-card fa-3x",text:"Contact Me",onClick:function(){return o(!1)}}),i.a.createElement(d,{link:g,text:"LinkedIn",icon:h.Linkedin}),i.a.createElement(d,{link:b,text:"Github",icon:h.Github}),i.a.createElement(d,{link:"https://medium.com/@m.a.faried",text:"Medium",icon:h.Medium}),i.a.createElement(d,{link:"https://stackoverflow.com/users/13571921/mo-faried",text:"Stack Overflow",icon:h.Stackoverflow}),i.a.createElement(d,{link:y,text:"Twitter",icon:h.Twitter}),i.a.createElement(d,{link:"https://mafaried.wordpress.com/",text:"Personal Blog",icon:h.Wordpress})),i.a.createElement(p,{isOpen:a,toggleNavbarOpen:function(){return o(!a)}}))}),v=a(0),E=function(){var e=Object(v.k)().pathname;return Object(n.useEffect)(function(){window.scrollTo(0,0)},[e]),null},w=a(56),S=a(54),N=(a(31),function(e){var t=e.routes,a=e.effectName,o=e.effectDuration,r=Object(v.k)(),s=Object(n.createRef)();return"/"===r.pathname?i.a.createElement(v.a,{to:f}):i.a.createElement(w.a,null,i.a.createElement(S.a,{key:r.key,nodeRef:s,timeout:o,classNames:a},i.a.createElement("div",{ref:s},i.a.createElement(v.d,null,t.map(function(e,t){return i.a.createElement(v.b,{key:t,path:e.path,element:e.element,exact:!0})})))))}),R=function(e){var t=e.children;return i.a.createElement("span",{className:"text-blue"},t)},M=(a(33),function(){return i.a.createElement("div",{className:"logo"},i.a.createElement("img",{src:"".concat("/m-faried-portfolio","/images/my-photo.jpg"),alt:"portfolio-owner"}))}),x=function(){return i.a.createElement(n.Fragment,null,i.a.createElement("h2",null,"He",i.a.createElement(R,null,"ll"),"o,"),i.a.createElement("h2",null,i.a.createElement(R,null,"I")," am"),i.a.createElement("h1",null,"MO FAR",i.a.createElement(R,null,"I"),"ED"))},P=function(){return i.a.createElement("div",{className:"intro-text-sub-container"},i.a.createElement("div",{className:"intro-text-sub"},"Senior Team Leader"),i.a.createElement("div",{className:"intro-text-sub"},"Senior React Frontend Developer"),i.a.createElement("div",{className:"intro-text-sub"},"Web 3.0 & Blockchain Developer"))},C=function(){return i.a.createElement("div",{className:"container my-5"},i.a.createElement("div",{className:"intro-container"},i.a.createElement(M,null),i.a.createElement("div",{className:"intro-text"},i.a.createElement(x,null),i.a.createElement(P,null))))},G=(a(36),function(){return i.a.createElement("div",{className:"container my-5"},i.a.createElement("div",{className:"pitch-container"},"A passionate Senior Software Engineer & Team Leader with ",i.a.createElement("span",{className:"text-blue"},"13 years")," of experience and a diverse set of skills and talents in software development and maintenance of high-quality software practices."))}),T=a(2),F=a(5),D="react",A="javascript",j="css",H="html",L="mongo",O="bootstrap",W="expressjs",I="nodejs",J="pwa",B="firebase",_="heroku",z="github",K="blockchain",V="dotnet",U=(o={},Object(F.a)(o,D,u.React),Object(F.a)(o,J,u.Pwa),Object(F.a)(o,B,u.Firebase),Object(F.a)(o,A,u.Javascript),Object(F.a)(o,j,u.Css),Object(F.a)(o,H,u.Html),Object(F.a)(o,K,u.Ethereum),Object(F.a)(o,I,u.NodeJS),Object(F.a)(o,L,u.Mongo),Object(F.a)(o,_,u.Heroku),Object(F.a)(o,O,u.Bootstrap),o),q=[{key:"React",description:"React Frontend Development",logos:[u.React],tag:D,proLevel:80},{key:"HTML, CSS, Javascript",description:i.a.createElement(n.Fragment,null,"Web development using ",i.a.createElement("span",{className:"text-red"},"HTML5"),","," ",i.a.createElement("span",{className:"text-blue"},"CSS3"),", and"," ",i.a.createElement("span",{className:"text-yellow"},"Javascript")),logos:[u.Jhc],tag:H,proLevel:70},{key:"PWA",description:"Progressive Web Apps",logos:[u.Pwa],tag:J,proLevel:50},{key:"Blockchain",description:"Web3 & Blockchain Development",logos:[u.Ethereum],tag:K,proLevel:50},{key:"NodeJS",description:"NodeJS & ExpressJS For Back End Web API Development",logos:[u.NodeJS],tag:I,proLevel:50},{key:"Firebase",description:"Firebase Back End Platform & SDK",logos:[u.Firebase],tag:B,proLevel:60},{key:"DotNet",tag:V,description:"Software C# & WPF Tooling Engineer for 8 years @ Valeo Automotive Systems",logos:[u.DotNet],proLevel:70}],X=(a(39),function(e){var t=e.logos,a=e.desc,o=e.onClick;return i.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-6 col-xl-4"},i.a.createElement("div",{className:"skill-card",onClick:o},i.a.createElement("div",{className:"skill-card-content"},i.a.createElement("div",{className:t.length>1?"multi-logo":"logo"},t.map(function(e){return i.a.createElement("img",{key:e,src:e,alt:"logo"})})),i.a.createElement("div",{className:"description"},a),i.a.createElement("small",null,"Click To View Projects"))))}),Y=function(){var e=Object(v.m)(),t=function(t){return function(){var a=Object(T.j)("/m-faried-portfolio/:id",{id:t.tag});e(a)}};return i.a.createElement("div",{className:"container my-5"},i.a.createElement("div",{className:"row justify-content-center"},q.map(function(e){return i.a.createElement(X,{key:e.key,logos:e.logos,desc:e.description,onClick:t(e)})})))},Z=function(){return i.a.createElement("div",null,i.a.createElement(C,null),i.a.createElement(G,null),i.a.createElement(Y,null))},Q=a(55),$=(a(41),function(e){var t=e.title,a=e.screenShots,o=e.descriptions,r=e.responsibilities,s=e.tecnologies,l=e.links,c=e.tags;return i.a.createElement("div",{className:"project"},i.a.createElement("div",{className:"techs"},c.filter(function(e){return U[e]}).map(function(e){return i.a.createElement("img",{key:U[e],src:U[e],alt:""})})),i.a.createElement("h1",null,t),i.a.createElement("div",{className:"project-body"},l.map(function(e){return i.a.createElement("div",{key:Q.a(),className:"mx-lg-5 text-blue"},e.header,":"," ",i.a.createElement("a",{href:e.ref,target:"blank"},e.ref))}),a&&a.length>0&&i.a.createElement("div",{className:"screen-shot"},a.map(function(e){return i.a.createElement("img",{key:Q.a(),src:e,alt:"screen shot"})})),i.a.createElement("div",{className:"description my-lg-5"},o.map(function(e){return i.a.createElement("p",{key:Q.a()},e)}),r&&r.length>0&&i.a.createElement(n.Fragment,null,i.a.createElement("h3",null,"Responsibilties"),i.a.createElement("ul",null,r.map(function(e){return i.a.createElement("li",{key:Q.a()},e)}))),i.a.createElement("h3",null,"Technologies & APIs"),i.a.createElement("ul",null,s.map(function(e){return i.a.createElement("li",{key:Q.a()},e)})))))}),ee=[{key:"lxt",title:"Senior React Frontend Team Leader For 2 Years",tags:[D,B,z,A,H,j],links:[{header:"LXT",ref:"https://www.lxt.ai/"}],descriptions:["Working as full time React Frontend Team Lead for 2 years on the development of the entire organization's main platform.","The platform was created for the management and the facilitation of data annotation projects used by thousands of annotators around the world to annotate any type of data."],screenShots:[],tecnologies:["ReactJS","Context API","Redux & Redux Toolkit","Axios","Label Studio Platform & Components","AntDesign","Firebase SDK","ClickUp for project management & tracking SCRUM activities"],responsibilities:["Development of the entire Frontend of the organization's complex platform using ReactJS.","Coordinating feature design with the backend team.","Acting as the SCRUM Master for the team.","Creating and maintaining the development process based on SCRUM framework.","Creating and maintaining the activity and the process of Validation & Testing."]},{key:"my_portfolio",title:"My Portfolio",tags:[D,H,j,A,O],descriptions:["The portfolio you are currently browsing."],screenShots:[],tecnologies:["Full application visual, layout, workflow design","React","React Router DOM V6","Context API","Bootstrap","CSS Transitions","NPM","GitHub Pages for deployment"],links:[]},{key:"kindleHighlights",title:"Kindle Highlights",tags:[D,J,O],descriptions:["Kindle Highlights is a viewer for Kindle highlights and clippings.It supports mobile and desktop layouts and can be installed on both via browsers."],screenShots:["".concat("/m-faried-portfolio","/images/kindle_01.PNG"),"".concat("/m-faried-portfolio","/images/kindle_02.PNG")],tecnologies:["Full application visual, layout, workflow design","React","React Router DOM","Context API","React Bootstrap","NPM","Workbox for Service Worker Creation and handling caching resources","GitHub Pages for deployment"],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/Kindle-Highlights/",display:"Kindle Highlights"}]},{key:"memorize",title:"Memorize",tags:[D,B,J,O],descriptions:["Memorize is a cloud application developed to provide students with a simple, touch screen friendly, and distraction free study tool. The application support cloud and access from multiple devices and its backend is developed using Google's Firebase platform and SDK including Authentication, Firestore, and Hosting services."],screenShots:["".concat("/m-faried-portfolio","/images/memorize_01.PNG"),"".concat("/m-faried-portfolio","/images/memorize_02.PNG")],tecnologies:["Full application visual, layout, workflow design","React","React Router DOM","Context API","Bootstrap","NPM","Firebase Platform & SDK","Workbox for Service Worker creation and handling caching resources."],links:[{header:"Deployed Website",ref:"https://memorize-f4c77.firebaseapp.com/",display:"Memorize"}]},{key:"contactKeeper",title:"Contact Keeper",tags:[D,I,W,L,_,z,O],descriptions:["Contact Keeper is a full stack MERN application which allows users to create accounts and Create, Retrieve, Update, Search, Delete their contacts.","The front-end was built using React, and the back-end was implemented as a web API and all the communication with the database is made using HTTP requests and authenticated using using JsonWebTokens."," I used the MongoDB cloud version for this project and the connection to database and Model Object management was done using Mongoose framework."],screenShots:["".concat("/m-faried-portfolio","/images/ContactKeeper_01.PNG"),"".concat("/m-faried-portfolio","/images/ContactKeeper_02.PNG")],tecnologies:["React","React Router DOM","Context API","Bootstrap","Axios","NPM","Node.js & ExpressJS for creating the back-end API which controls the CRUD operations of the data and handles user authentication and session.","Json Web Tokens[jwt] to manage user session and authentication using tokens.","Mongoose module to create the database access layer and object data modeling.","Cloud version of MongoDB which was created using Atlas.","Postman for back-end API testing and validation.","Heroku hosting service for deployment."],links:[{header:"Deployed Website",ref:"https://contact-keeper-11.herokuapp.com",display:"Contact Keeper"},{header:"Github Repository",ref:"https://github.com/M-Faried/contact-keeper",display:"Github Repository"}]},{key:"expenseTracker",title:"Expense Tracker",tags:[D,I,W,L,_,z,O],descriptions:["Expense Tracker is a full stack MERN application which allows users to create accounts and track expenses versus their income.","The front-end was built using React, and the back-end was implemented as a web API and all the communication with the database is made using HTTP requests and authenticated using using JsonWebTokens.","I used the MongoDB cloud version for this project and the connection to database and Model Object management was done using Mongoose framework."],screenShots:["".concat("/m-faried-portfolio","/images/ExpenseTracker_01.PNG"),"".concat("/m-faried-portfolio","/images/ExpenseTracker_02.PNG")],tecnologies:["React","React Router DOM","Context API","Bootstrap","Axios","NPM","Node.js & ExpressJS for creating the back-end API which controls the CRUD operations of the data and handles user authentication and session.","Json Web Tokens[jwt] to manage user session and authentication using tokens.","Mongoose module to create the database access layer and object data modeling.","Cloud version of MongoDB which was created using Atlas.","Postman for back-end API testing and validation.","Heroku hosting service for deployment."],links:[{header:"Deployed Website",ref:"https://expense-tracker-11.herokuapp.com",display:"Expense Tracker"},{header:"Github Repository",ref:"https://github.com/M-Faried/mern-expense-tracker",display:"Github Repository"}]},{key:"githubFinder",title:"Github Finder",tags:[D,z,O],descriptions:["Github Finder is an application which helps users to search Github developer profiles."],screenShots:["".concat("/m-faried-portfolio","/images/GitHubFinder.PNG")],tecnologies:["React","React Router DOM","Context API","Bootstrap","Axios","NPM","Github API"],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/github-finder/",display:"Github Finder"},{header:"Github Repository",ref:"https://github.com/M-Faried/github-finder",display:"Github Repository"}]},{key:"mealRecipeFinder",title:"Meal Recipe Finder",tags:[H,j,A],descriptions:["Meal Recipe Finder is an application which helps users find meal recipies to cook."],screenShots:["".concat("/m-faried-portfolio","/images/MealFinder_01.PNG"),"".concat("/m-faried-portfolio","/images/MealFinder_02.PNG")],tecnologies:["Full application visual, layout, workflow design","Plain HTML5, CSS3, and Javascript","The Meal DB Web Service","GitHub Pages for deployment"],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/meal-recipe-finder/",display:"Meal Recipe Finder"},{header:"Github Repository",ref:"https://github.com/M-Faried/meal-recipe-finder",display:"Github Repository"}]},{key:"myVoice",title:"My Voice",tags:[H,j,A],descriptions:["My Voice is an application to help autistic children communicate their thoughts and needs."],screenShots:["".concat("/m-faried-portfolio","/images/my-voice.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript","Web Speech API","GitHub Pages for deployment"],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/my-voice/",display:"My Voice"},{header:"Github Repository",ref:"https://github.com/M-Faried/my-voice",display:"Github Repository"}]},{key:"lyricsSearch",title:"Song Lyrics Search App",tags:[H,j,A],descriptions:["Lyrics search application."],screenShots:["".concat("/m-faried-portfolio","/images/LyricsSearchApp.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript","Lyrics OVH API","GitHub Pages for deployment"],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/lyrics-search-app/",display:"Lyrics Search App"},{header:"Github Repository",ref:"https://github.com/M-Faried/lyrics-search-app",display:"Github Repository"}]},{key:"exchangeRate",title:"Exchange Rate Calculator",tags:[H,j,A],descriptions:["An online hangman game.Currency exchange rate calculator application."],screenShots:["".concat("/m-faried-portfolio","/images/ExchangeRateCalculator.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript","Exchange Rate API","GitHub Pages for deployment"],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/exchange-rate-calculator/",display:"Exchange Rate Calculator"},{header:"Github Repository",ref:"https://github.com/M-Faried/exchange-rate-calculator",display:"Github Repository"}]},{key:"relaxer",title:"Relaxer",tags:[H,j,A],descriptions:["A web application to guide users practice relaxing breathing technique."],screenShots:["".concat("/m-faried-portfolio","/images/Relaxer.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript","GitHub Pages for deployment"],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/relaxer/",display:"Relaxer"},{header:"Github Repository",ref:"https://github.com/M-Faried/relaxer",display:"Github Repository"}]},{key:"hangman",title:"Hangman Game",tags:[H,j,A],descriptions:["An online hangman game."],screenShots:["".concat("/m-faried-portfolio","/images/hangman.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript","GitHub Pages for deployment"],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/hangman-game/",display:"Hangman Game"},{header:"Github Repository",ref:"https://github.com/M-Faried/hangman-game",display:"Github Repository"}]},{key:"speedTyping",title:"Speed Typing Game",tags:[H,j,A],descriptions:["An online speed typeing game."],screenShots:["".concat("/m-faried-portfolio","/images/TypingGame.PNG")],tecnologies:["Plain HTML5, CSS3, and Javascript","GitHub Pages for deployment"],links:[{header:"Deployed Website",ref:"https://m-faried.github.io/simple-typing-game/",display:"Speed Typing Game"},{header:"Github Repository",ref:"https://github.com/M-Faried/simple-typing-game",display:"Github Repository"}]},{key:"eth_star_notary",title:"Star Notary NFT DAPP",tags:[K,A],descriptions:["Star registration system based on star coordinates as NFT using ERC721 standard."],screenShots:[],tecnologies:["Solidity","Truffle","MetaMask","Remix","Ganache","Rinkeby Ethereum Testing Network","Infura","openzeppelin-solidity ERC721 Standard","Mocha & Chime For Testing","Web3 & truffle-hdwallet-provider","Plain Html, CSS, and Javascript for the frontend."],links:[{header:"Github Repository",ref:"https://github.com/M-Faried/ubc-web3-erc721-star-notary-v3",display:"Github Repository"}]},{key:"eth_supply_chain",title:"Supply Chain Management",tags:[K,A],descriptions:["The application was built to provide a coffee company with Supply Chain Management System and stores all the transactions on the Ethereum network."],screenShots:[],tecnologies:["Solidity","Truffle","MetaMask","Remix","Ganache","Rinkeby Ethereum Testing Network","Infura","Mocha & Chime For Testing","Web3 & truffle-hdwallet-provider","Plain Html, CSS, and Javascript for the frontend."],links:[{header:"Github Repository",ref:"https://github.com/M-Faried/ubc-web3-supply-chain-dapp",display:"Github Repository"}]},{key:"eth_real_estate",title:"Real Estate Dapp",tags:[K,A],descriptions:["The capstone project of Udacity Nanodegree Program which is a decentralized real estate marketplace."],screenShots:[],tecnologies:["ZoKrates","Interactive zero knowledge 3","Decenteralized Oracles","openzeppelin-solidity ERC721 Standard","Solidity","Truffle","MetaMask","Remix","Ganache","Rinkeby Ethereum Testing Network","Infura","Mocha & Chime For Testing","Web3 & truffle-hdwallet-provider","Plain Html, CSS, and Javascript for the frontend."],links:[{header:"Github Repository",ref:"https://github.com/christophercelaya/decentralized-real-estate-marketplace",display:"Github Repository"}]}],te=function(){var e=Object(v.o)().id,t=e?ee.filter(function(t){return t.tags.includes(e)}):ee;return i.a.createElement("div",{className:"container my-5"},t.map(function(e){return i.a.createElement($,e)}))},ae=(a(43),function(){return i.a.createElement("div",{className:"container my-5"},i.a.createElement("div",{className:"field-container"},i.a.createElement("div",{className:"field-logo"},i.a.createElement("img",{src:u.DotNet,alt:"dot net logo"}),i.a.createElement("h1",null,"WPF & C#"),i.a.createElement("a",{target:"blank",href:g},"Check Linked IN")),i.a.createElement("div",{className:"field-desc"},i.a.createElement("h1",{className:"text-purple my-4"},"Software Tooling Engineer for 8 years @ Valeo Automotive Systems"," "),i.a.createElement("p",null,"Responsible for the design and development of performance critical desktop applications using WPF, C#, and"," ",i.a.createElement("a",{href:"https://www.vector.com/int/en/products/products-a-z/libraries-drivers/xl-driver-library/",target:"blank"},"Vector Network Interfaces & Drivers")," ","for the following purposes:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Real Time Debugging & Data Acquisition from the ECU's based on various communication protocols like"," ",i.a.createElement("a",{href:"https://www.vector.com/int/en/know-how/technologies/networks/can/",target:"blank"},"CAN-FD")," ","and"," ",i.a.createElement("a",{href:"https://www.vector.com/int/en/know-how/technologies/networks/automotive-ethernet/",target:"blank"},"Automotive Ethernet")," ","and also based on various"," ",i.a.createElement("a",{href:"https://www.autosar.org/",target:"blank"},"AUTOSAR's")," ","diagnostic protocols like XCP and DLT."),i.a.createElement("li",null,"Facilitation & automation of validation cycle of the embedded software through MIL / SIL / HIL validation phases and using Jenkins server for continuous integration.")))))}),oe=(a(45),function(e){var t=e.icon,a=e.label,o=e.display,n=e.link,r=e.newTab,s=void 0===r||r;return i.a.createElement("p",null,i.a.createElement("i",{className:t})," ",i.a.createElement(R,null,a," "),!n&&i.a.createElement("span",null,o),n&&i.a.createElement("a",{href:n,target:s?"blank":""},o))}),ne=function(){return i.a.createElement("div",{className:"container my-5"},i.a.createElement("div",{className:"contacts-body"},i.a.createElement(oe,{icon:"fas fa-envelope text-blue",label:"Email:",display:"m.a.faried@gmail.com",link:"mailto:m.a.faried@gmail.com",newTab:!1}),i.a.createElement(oe,{icon:"fas fa-phone-square text-blue",label:"Mobile:",display:"(+20) 1003109540"}),i.a.createElement(oe,{icon:"fas fa-map-marker-alt text-blue",label:"Location:",display:"Cairo, Egypt"}),i.a.createElement(oe,{icon:"fab fa-linkedin text-blue",label:"Linked In:",link:g,display:g}),i.a.createElement(oe,{icon:"fab fa-github text-blue",label:"Github:",link:b,display:b}),i.a.createElement(oe,{icon:"fab fa-twitter text-blue",label:"Twitter:",link:y,display:y})))},ie=(a(47),[{path:f,element:i.a.createElement(Z,null)},{path:"/m-faried-portfolio/dotnet",element:i.a.createElement(ae,null)},{path:"/m-faried-portfolio/:id",element:i.a.createElement(te,null)},{path:"/m-faried-portfolio/contacts",element:i.a.createElement(ne,null)}]),re=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(l.a,null,i.a.createElement(E,null),i.a.createElement(k,null),i.a.createElement(N,{routes:ie,effectName:"fade",effectDuration:500})))};s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(re,null)),document.getElementById("root"))}},[[22,2,1]]]);