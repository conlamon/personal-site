(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,function(e,a,t){e.exports=t.p+"static/media/profilepic.f774f4e0.jpg"},function(e){e.exports={main:{name:"Connor Lamon",occupation:"Machine Learning Engineer",description:"Passionate about solving problems with computer vision, signal processing and natural language processing",image:"profilepic.jpg",bio:"This website is a work in progress. Check back later! (Or have a look at my LinkedIn / GitHub)",contactmessage:"",email:"connor[dot]lamon[at]gmail",address:{city:"Redwood City",state:"CA"},website:"http://www.conlamon.github.io",resumedownload:"http://www.conlamon.github.io",social:[{name:"linkedin",url:"https://www.linkedin.com/in/connor-lamon",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/conlamon",className:"fa fa-github"}]},resume:{skillmessage:"Engineer with experience building full stack machine learning products",education:[{school:"Stanford University",degree:"MS Electrical Engineering",graduated:"June 2018",description:"Explored and mastered machine learning and statistical techniques specifically related to deep learning and computer vision"},{school:"University of California, Santa Barbara",degree:"BS Electrical Engineering",graduated:"June 2015",description:""}],work:[{company:"Startup",title:"Machine Learning Engineer",years:"Aug. 2018 - Present",description:""},{company:"Lockheed Martin",title:"Systems Engineer Asc.",years:"Aug. 2015 - Feb. 2017",description:""}],skills:[{name:"Python",level:"80%"},{name:"Machine Learning",level:"90%"},{name:"ReactJs",level:"50%"},{name:"Tensorflow",level:"70%"},{name:"Keras",level:"80%"},{name:"C++",level:"20%"},{name:"PostgreSQL",level:"50%"}]},portfolio:{projects:[{title:"...",category:"...",image:"...",url:"..."}]}}},function(e,a,t){e.exports=t(31)},,,,,,function(e,a,t){},,function(e,a,t){},,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),c=t.n(r),i=(t(20),t(1)),o=t(2),s=t(4),m=t(3),u=t(5),p=(t(22),t(6),t(7),t(8),t(9),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data.name||"",a=this.props.data.occupation||"",t=this.props.data.description||"",n=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})||"";return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"Hi. I'm ",e,"."),l.a.createElement("h3",null,l.a.createElement("span",null,a),". ",t,"."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},n))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),d=t(12),h=t.n(d),E=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data.name||"",a=this.props.data.bio||"",t=this.props.data.address.city||"",n=this.props.data.address.state||"",r=this.props.data.email;this.props.data.resumedownload;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:h.a,alt:"Connor Lamon Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,a),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,t," ",n),l.a.createElement("br",null),l.a.createElement("span",null,r))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null))))))}}]),a}(n.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})||"";return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2018 Connor Lamon"),l.a.createElement("li",null,"Layout by ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),g=t(13),b=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={resumeData:g},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{data:this.state.resumeData.main}),l.a.createElement(E,{data:this.state.resumeData.main}),l.a.createElement(f,{data:this.state.resumeData.main}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,2,1]]]);
//# sourceMappingURL=main.bde0ffc4.chunk.js.map