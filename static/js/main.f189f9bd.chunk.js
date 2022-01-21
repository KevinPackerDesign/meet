(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{25:function(e,t,n){e.exports=n(54)},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),s=n.n(o),c=(n(30),n(5)),i=n.n(c),u=n(7),l=n(1),m=n(2),d=n(4),p=n(3),h=(n(32),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!0},e.handleClick=function(){!0===e.state.collapsed?e.setState({collapsed:!1}):e.setState({collapsed:!0})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.event;return r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"status"},e.status),r.a.createElement("div",{className:"summary"},e.summary),r.a.createElement("div",{className:"start"},e.start.dateTime),r.a.createElement("div",{className:"end"},e.end.dateTime),!1===this.state.collapsed&&r.a.createElement("p",{className:"description"},e.description),!0===this.state.collapsed&&r.a.createElement("button",{className:"infoButton",onClick:this.handleClick},"More Info"),!1===this.state.collapsed&&r.a.createElement("button",{className:"infoButton",onClick:this.handleClick},"Close Info"))}}]),n}(a.Component)),f=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.events;return r.a.createElement("ul",{className:"EventList"},e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h,{event:e}))})))}}]),n}(a.Component),v=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),n}(a.Component),g=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="blue",a}return Object(m.a)(n)}(v),w=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="red",a}return Object(m.a)(n)}(v),b=(n(33),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===a.length?e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({query:n,suggestions:a,infoText:""})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement(g,{text:this.state.infoText}),r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),r.a.createElement("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"}},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t,onClick:function(){return e.handleItemClicked(t)}},t)})),r.a.createElement("li",{onClick:function(){return e.handleItemClicked("all")}},r.a.createElement("b",null,"See all cities"))))}}]),n}(a.Component)),y=(n(34),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={EventsTotal:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;n<1||n>32?e.setState({EventsTotal:1,errorText:"Please pick a number between 1 and 32"}):e.setState({EventsTotal:n,errorText:""}),e.props.updateTotal(n),console.log(n)},e}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"NumberOfEvents"},r.a.createElement("p",{className:"numbertext"},"Number of Events Shown"),r.a.createElement("input",{value:this.props.numberOfEvents,className:"newEventsTotal",onChange:this.handleInputChanged}),r.a.createElement(w,{text:this.state.errorText}))}}]),n}(a.Component)),k=(n(35),n(24)),E=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],O=n(11),j=n.n(O),T=n(10),S=n.n(T),x=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},C=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://62kyrrzr45.execute-api.us-west-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return S.a.done(),e.abrupt("return",E);case 4:return e.next=6,M();case 6:if(!(t=e.sent)){e.next=16;break}return I(),n="https://62kyrrzr45.execute-api.us-west-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,j.a.get(n);case 12:return(a=e.sent).data&&(r=x(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),S.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},M=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,Z(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,j.a.get("https://62kyrrzr45.execute-api.us-west-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&C(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all"},e.updateEvents=function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N().then((function(t){var a="all"===n?t:t.filter((function(e){return e.location===n}));e.mounted&&e.setState({events:a.slice(0,e.state.numberOfEvents),currentLocation:n})}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.updateTotal=function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({numberOfEvents:n}),console.log(n,"from app"),e.updateEvents(e.state.currentLocation,e.state.numberOfEvents);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,N().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:x(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,{locations:this.state.locations,updateEvents:this.updateEvents}),r.a.createElement(y,{numberOfEvents:this.state.numberOfEvents,updateTotal:this.updateTotal}),r.a.createElement(f,{events:this.state.events}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(23).config("c44762ed63c34beeb43aa6911a887a08").install(),s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),B()}},[[25,1,2]]]);
//# sourceMappingURL=main.f189f9bd.chunk.js.map