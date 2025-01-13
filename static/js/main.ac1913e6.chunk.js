(this.webpackJsonppls=this.webpackJsonppls||[]).push([[0],{17:function(e,t,a){e.exports=a(36)},25:function(e,t,a){},26:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),s=(a(25),a(6)),i=a(2),o=a(5);var m=()=>{const[e,t]=Object(n.useState)([]),[a,r]=Object(n.useState)([]),[c,s]=Object(n.useState)(()=>{const e=localStorage.getItem("registeredEvents");return e?JSON.parse(e):[]}),[i,m]=Object(n.useState)({title:"",type:"",location:"",date:""}),[d,u]=Object(n.useState)(""),[E,p]=Object(n.useState)(""),[v,g]=Object(n.useState)([]),[h,b]=Object(n.useState)([]),[N,f]=Object(n.useState)(!1),y=["Competition","Event","Networking","Seminar","Sports"],[w,S]=Object(n.useState)("Today");Object(n.useEffect)(()=>{fetch("https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/events").then(e=>e.json()).then(e=>{t(e),r(e)}).catch(e=>console.error("Error fetching events:",e))},[]);const C=e=>{const{name:t,value:a}=e.target;m(e=>Object(o.a)(Object(o.a)({},e),{},{[t]:a}))},j=async e=>{const t=localStorage.getItem("userId");if(t)try{const a=await fetch("https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/eventregistrations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({eventId:e,userId:t})});if(a.ok)s(t=>[...t,e]),alert("You have successfully registered for the event!");else{const e=await a.json();alert(e.message||"An error occurred.")}}catch(a){console.error("Error registering for the event:",a),alert("Something went wrong. Please try again.")}else alert("You need to sign in to register for this event.")};Object(n.useEffect)(()=>{let t=[...e];if(d&&(t=t.filter(e=>e.type===d)),E){const e=new Date;t=t.filter(t=>{const a=new Date(t.date);if("Today"===E)return a.toDateString()===e.toDateString();if("Tomorrow"===E){const t=new Date(e);return t.setDate(e.getDate()+1),a.toDateString()===t.toDateString()}if("This Weekend"===E){const t=new Date(e);t.setDate(e.getDate()+(6-e.getDay()));const n=new Date(t);return n.setDate(t.getDate()+1),a>=t&&a<=n}return!0})}r(t)},[d,E,e]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"hero"},l.a.createElement("h1",{className:"hero-title"},"Welcome to JIHC Events"),l.a.createElement("p",{className:"hero-subtitle"},"Discover, learn, and connect.")),l.a.createElement("div",{className:"search-section"},l.a.createElement("input",{type:"text",name:"title",value:i.title,onChange:C,placeholder:"Enter event name",className:"search-input"}),l.a.createElement("select",{name:"type",value:i.type,onChange:C,className:"filter-dropdown"},l.a.createElement("option",{value:""},"Select Event Type"),y.map((e,t)=>l.a.createElement("option",{key:t,value:e},e))),l.a.createElement("select",{name:"location",value:i.location,onChange:C,className:"filter-dropdown"},l.a.createElement("option",{value:""},"Select Location"),["ACT Hall","Library","Library Auditorium","Sports Hall","Techolab"].map((e,t)=>l.a.createElement("option",{key:t,value:e},e))),l.a.createElement("input",{type:"date",name:"date",value:i.date,onChange:C,className:"search-input"}),l.a.createElement("button",{onClick:()=>{const t=e.filter(e=>{const t=""===i.title||e.title.toLowerCase().includes(i.title.toLowerCase()),a=""===i.type||e.type===i.type,n=""===i.location||e.location===i.location,l=""===i.date||e.date===i.date;return t&&a&&n&&l});r(t)},className:"search-btn"},"Search")),l.a.createElement("div",{className:"filtered-search-events"},a.length>0?l.a.createElement("div",{className:"events-container"},a.map(e=>{const t=c.includes(e.id),a=e.attendees/e.maxAttendees*100;return l.a.createElement("div",{key:e.id,className:"event-card"},l.a.createElement("img",{src:e.image,alt:e.title,className:"event-image"}),l.a.createElement("div",{className:"image-badge"},e.price),l.a.createElement("div",{className:"event-details"},l.a.createElement("h3",{className:"event-title"},e.title),l.a.createElement("div",{className:"event-inline"},l.a.createElement("div",{className:"event-date"},l.a.createElement("i",{className:"fa fa-calendar","aria-hidden":"true"}),e.date),l.a.createElement("div",{className:"event-location"},l.a.createElement("i",{className:"fa fa-map-marker","aria-hidden":"true"}),e.location)),l.a.createElement("div",{className:"event-audience"},e.audience),l.a.createElement("div",{className:"progress-bar-container"},l.a.createElement("div",{className:"progress-fill",style:{width:"".concat(a,"%")}})),l.a.createElement("p",{className:"progress-info"},e.attendees,"/",e.maxAttendees," Attendees"),t?l.a.createElement("button",{className:"register-button registered",disabled:!0},"Registered"):l.a.createElement("button",{className:"register-button",onClick:()=>j(e.id),disabled:!localStorage.getItem("userId")||e.attendees>=e.maxAttendees},e.attendees>=e.maxAttendees?"Event Full":"Register Now")))})):l.a.createElement("p",{className:"no-events-message"},"No events found for your search.")),l.a.createElement("div",{className:"category-filter"},y.map(t=>{let{type:a,image:n}=t;return l.a.createElement("div",{key:a,className:"category-circle",onClick:()=>r(e.filter(e=>e.type===a))},l.a.createElement("img",{src:n,alt:a,className:"category-image"}),l.a.createElement("p",{className:"category-title"},a))})),l.a.createElement("div",{className:"date-filter-section"},l.a.createElement("h2",{className:"section-title"},"Filter by Date"),l.a.createElement("div",{className:"date-filter"},["Today","Tomorrow","This Week"].map(t=>l.a.createElement("button",{key:t,className:"date-button",onClick:()=>(t=>{const a=new Date,n=e.filter(e=>{const n=new Date(e.date);if("Today"===t)return n.toDateString()===a.toDateString();if("Tomorrow"===t){const e=new Date(a);return e.setDate(a.getDate()+1),n.toDateString()===e.toDateString()}if("This Week"===t){const e=new Date(a);e.setDate(a.getDate()-a.getDay()+1);const t=new Date(e);return t.setDate(e.getDate()+6),n>=e&&n<=t}return!1});b(n),f(!0)})(t)},t))),l.a.createElement("div",{className:"filtered-events-section"},l.a.createElement("div",{className:"events-container"},(N?h:v).map(e=>{const t=c.includes(e.id),a=e.attendees/e.maxAttendees*100;return l.a.createElement("div",{key:e.id,className:"event-card"},l.a.createElement("img",{src:e.image,alt:e.title,className:"event-image"}),l.a.createElement("div",{className:"image-badge"},e.price),l.a.createElement("div",{className:"event-details"},l.a.createElement("h3",{className:"event-title"},e.title),l.a.createElement("div",{className:"event-inline"},l.a.createElement("div",{className:"event-date"},l.a.createElement("i",{className:"fa fa-calendar","aria-hidden":"true"}),e.date),l.a.createElement("div",{className:"event-location"},l.a.createElement("i",{className:"fa fa-map-marker","aria-hidden":"true"}),e.location)),l.a.createElement("div",{className:"event-audience"},e.audience),l.a.createElement("div",{className:"progress-bar-container"},l.a.createElement("div",{className:"progress-fill",style:{width:"".concat(a,"%")}})),l.a.createElement("p",{className:"progress-info"},e.attendees,"/",e.maxAttendees," Attendees"),t?l.a.createElement("button",{className:"register-button registered",disabled:!0},"Registered"):l.a.createElement("button",{className:"register-button",onClick:()=>j(e.id),disabled:!localStorage.getItem("userId")||e.attendees>=e.maxAttendees},e.attendees>=e.maxAttendees?"Event Full":"Register Now")))})),": (",0===(N?h:v).length&&l.a.createElement("p",{className:"no-events-message"},"No events found."),")")),l.a.createElement("div",{className:"popular-events-section"},l.a.createElement("h2",{className:"section-title"},"Popular Events in ACT Hall",l.a.createElement("div",{className:"section-underline"})),l.a.createElement("div",{className:"scroll-buttons-container"},l.a.createElement("button",{className:"scroll-button left-scroll",onClick:()=>{document.querySelector(".popular-events-scroll").scrollBy({left:-300,behavior:"smooth"})}},"<"),l.a.createElement("button",{className:"scroll-button right-scroll",onClick:()=>{document.querySelector(".popular-events-scroll").scrollBy({left:300,behavior:"smooth"})}},">")),l.a.createElement("div",{className:"popular-events-scroll"},a.filter(e=>"ACT Hall"===e.location).map(e=>{const t=c.includes(e.id),a=e.attendees/e.maxAttendees*100;return l.a.createElement("div",{key:e.id,className:"event-card"},l.a.createElement("img",{src:e.image,alt:e.title,className:"event-image"}),l.a.createElement("div",{className:"image-badge"},e.price),l.a.createElement("div",{className:"event-details"},l.a.createElement("h3",{className:"event-title"},e.title),l.a.createElement("div",{className:"event-inline"},l.a.createElement("div",{className:"event-date"},e.date),l.a.createElement("div",{className:"event-location"},e.location)),l.a.createElement("div",{className:"progress-bar-container"},l.a.createElement("div",{className:"progress-fill",style:{width:"".concat(a,"%")}})),l.a.createElement("p",{className:"progress-info"},e.attendees,"/",e.maxAttendees," Attendees"),t?l.a.createElement("button",{className:"register-button registered",disabled:!0},"Registered"):l.a.createElement("button",{className:"register-button",onClick:()=>j(e.id),disabled:!localStorage.getItem("userId")||e.attendees>=e.maxAttendees},e.attendees>=e.maxAttendees?"Event Full":"Register Now")))}))),l.a.createElement("div",{className:"student-events-section"},l.a.createElement("h2",{className:"section-title"},"Events for Students",l.a.createElement("div",{className:"section-underline"})),l.a.createElement("div",{className:"student-events-container"},a.filter(e=>"Student"===e.audience).map(e=>{const t=c.includes(e.id),a=e.attendees/e.maxAttendees*100;return l.a.createElement("div",{key:e.id,className:"event-card"},l.a.createElement("img",{src:e.image,alt:e.title,className:"event-image"}),l.a.createElement("div",{className:"image-badge"},e.price),l.a.createElement("div",{className:"event-details"},l.a.createElement("h3",{className:"event-title"},e.title),l.a.createElement("div",{className:"event-inline"},l.a.createElement("div",{className:"event-date"},l.a.createElement("i",{className:"fa fa-calendar","aria-hidden":"true"}),e.date),l.a.createElement("div",{className:"event-location"},l.a.createElement("i",{className:"fa fa-map-marker","aria-hidden":"true"}),e.location)),l.a.createElement("div",{className:"event-audience"},e.audience),l.a.createElement("div",{className:"progress-bar-container"},l.a.createElement("div",{className:"progress-fill",style:{width:"".concat(a,"%")}})),l.a.createElement("p",{className:"progress-info"},e.attendees,"/",e.maxAttendees," Attendees"),t?l.a.createElement("button",{className:"register-button registered",disabled:!0},"Registered"):l.a.createElement("button",{className:"register-button",onClick:()=>j(e.id),disabled:!localStorage.getItem("userId")||e.attendees>=e.maxAttendees},e.attendees>=e.maxAttendees?"Event Full":"Register Now")))}))),l.a.createElement("div",{className:"events-container"},l.a.createElement("h2",{className:"section-title"},"More Events",l.a.createElement("div",{className:"section-underline"})),a.map(e=>{const t=c.includes(e.id),a=e.attendees/e.maxAttendees*100;return l.a.createElement("div",{key:e.id,className:"event-card"},l.a.createElement("img",{src:e.image,alt:e.title,className:"event-image"}),l.a.createElement("div",{className:"image-badge"},e.price),l.a.createElement("div",{className:"event-details"},l.a.createElement("h3",{className:"event-title"},e.title),l.a.createElement("div",{className:"event-inline"},l.a.createElement("div",{className:"event-date"},l.a.createElement("i",{className:"fa fa-calendar","aria-hidden":"true"}),e.date),l.a.createElement("div",{className:"event-location"},l.a.createElement("i",{className:"fa fa-map-marker","aria-hidden":"true"}),e.location)),l.a.createElement("div",{className:"event-audience"},e.audience),l.a.createElement("div",{className:"progress-bar-container"},l.a.createElement("div",{className:"progress-fill",style:{width:"".concat(a,"%")}})),l.a.createElement("p",{className:"progress-info"},e.attendees,"/",e.maxAttendees," Attendees"),t?l.a.createElement("button",{className:"register-button registered",disabled:!0},"Registered"):l.a.createElement("button",{className:"register-button",onClick:()=>j(e.id),disabled:!localStorage.getItem("userId")||e.attendees>=e.maxAttendees},e.attendees>=e.maxAttendees?"Event Full":"Register Now")))})))};var d=e=>{let{onClose:t,onEventCreated:a}=e;const[r,c]=Object(n.useState)({title:"",type:"",date:"",location:"",price:"",deadline:"",audience:"Student",description:"",image:"",maxAttendees:50}),s=e=>{const{name:t,value:a}=e.target;c(e=>Object(o.a)(Object(o.a)({},e),{},{[t]:a}))};return l.a.createElement("div",{className:"modal-overlay"},l.a.createElement("div",{className:"modal create-event-modal"},l.a.createElement("button",{className:"close-btn",onClick:t},"\u2715"),l.a.createElement("h2",{className:"modal-title"},"Create New Event"),l.a.createElement("div",{className:"modal-content"},l.a.createElement("form",{onSubmit:async e=>{e.preventDefault();const n=localStorage.getItem("userId");if(!n)return void alert("User ID is missing. Please log in again.");const l=Object(o.a)(Object(o.a)({},r),{},{organizerId:parseInt(n)});try{const e=await fetch("https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/events",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(e.ok){const n=await e.json();alert("Event created successfully!"),a(n),t()}else{const t=await e.json();alert(t.message||"Failed to create the event.")}}catch(c){console.error("Error creating event:",c),alert("Something went wrong. Please try again.")}},className:"create-event-form"},l.a.createElement("div",{className:"form-section"},l.a.createElement("div",{className:"form-column"},l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"title"},"Event Title"),l.a.createElement("input",{type:"text",id:"title",name:"title",value:r.title,onChange:s,required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"type"},"Event Type"),l.a.createElement("input",{type:"text",id:"type",name:"type",value:r.type,onChange:s,required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"date"},"Date"),l.a.createElement("input",{type:"date",id:"date",name:"date",value:r.date,onChange:s,required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"location"},"Location"),l.a.createElement("input",{type:"text",id:"location",name:"location",value:r.location,onChange:s,required:!0}))),l.a.createElement("div",{className:"form-column"},l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"price"},"Price"),l.a.createElement("input",{type:"text",id:"price",name:"price",value:r.price,onChange:s,required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"deadline"},"Registration Deadline"),l.a.createElement("input",{type:"date",id:"deadline",name:"deadline",value:r.deadline,onChange:s,required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"audience"},"Audience"),l.a.createElement("select",{id:"audience",name:"audience",value:r.audience,onChange:s,required:!0},l.a.createElement("option",{value:"Student"},"Student"),l.a.createElement("option",{value:"Teacher"},"Teacher"),l.a.createElement("option",{value:"All"},"All"))),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"maxAttendees"},"Max Attendees"),l.a.createElement("input",{type:"number",id:"maxAttendees",name:"maxAttendees",value:r.maxAttendees,onChange:s,required:!0})))),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"description"},"Description"),l.a.createElement("textarea",{id:"description",name:"description",value:r.description,onChange:s,rows:"4",required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"image"},"Image URL"),l.a.createElement("input",{type:"text",id:"image",name:"image",value:r.image,onChange:s,required:!0})),l.a.createElement("div",{className:"form-buttons"},l.a.createElement("button",{type:"button",className:"cancel-btn",onClick:t},"Cancel"),l.a.createElement("button",{type:"submit",className:"submit-btn"},"Create Event"))))))};var u=()=>{const[e,t]=Object(n.useState)(null),[a,r]=Object(n.useState)([]),[c,s]=Object(n.useState)([]),[o,m]=Object(n.useState)(!0),[u,E]=Object(n.useState)(null),[p,v]=Object(n.useState)(!1),[g,h]=Object(n.useState)(!1),[b,N]=Object(n.useState)(null),f=Object(i.p)(),y=localStorage.getItem("userId");Object(n.useEffect)(()=>{y||(console.warn("UserId is null, redirecting to home page..."),f("/"))},[y,f]),Object(n.useEffect)(()=>{if(!y)return;(async()=>{try{const e=await fetch("https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/users/".concat(y));if(!e.ok)throw new Error("Failed to fetch user data.");const a=await e.json();t(a);const n=await fetch("https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/events"),l=(await n.json()).filter(e=>e.organizerId===parseInt(y));r(l)}catch(u){console.error("Error fetching user data:",u),E("Failed to load user data.")}finally{m(!1)}})()},[y]);return Object(n.useEffect)(()=>{(async()=>{if(y)try{const e=await fetch("https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/users/".concat(y));if(!e.ok)throw new Error("Failed to fetch registered events.");const t=await e.json(),a=t.eventRegistrations.map(e=>e.eventId).map(e=>fetch("https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/events/".concat(e)).then(e=>e.json())),n=await Promise.all(a);s(n)}catch(u){console.error("Error fetching registered events:",u)}else console.warn("UserId is null, skipping fetch for registered events.")})()},[y]),o?l.a.createElement("div",null,"Loading..."):u?l.a.createElement("div",null,u):l.a.createElement("div",{className:"profile-page"},l.a.createElement("h1",null,"Welcome, ",e.name,"!"),"Teacher"===e.userType&&l.a.createElement("button",{onClick:()=>v(!0)},"Create Event"),p&&l.a.createElement(d,{onClose:()=>v(!1),onEventCreated:e=>{e?r(t=>[...t,e]):console.warn("No event data returned from CreateEventModal.")}}),g&&l.a.createElement(d,{onClose:()=>h(!1),onEventCreated:e=>{e&&r(t=>t.map(t=>t.id===e.id?e:t))},existingEvent:b}),l.a.createElement("h2",null,"Your Created Events"),a.length>0?a.map(e=>l.a.createElement("div",{key:e.id,className:"event-card"},l.a.createElement("h3",null,e.title),l.a.createElement("p",null,"Location: ",e.location),l.a.createElement("p",null,"Date: ",e.date),l.a.createElement("button",{onClick:()=>(e=>{N(e),h(!0)})(e)},"Update"),l.a.createElement("button",{onClick:()=>(async e=>{try{(await fetch("https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/events/".concat(e),{method:"DELETE"})).ok?(alert("Event deleted successfully!"),r(t=>t.filter(t=>t.id!==e))):alert("Failed to delete event.")}catch(u){console.error("Error deleting event:",u),alert("An error occurred while trying to delete the event.")}})(e.id)},"Delete"))):l.a.createElement("p",null,"You have not created any events yet."))};var E=e=>{let{onClose:t,setIsLoggedIn:a,setUserName:r}=e;const[c,s]=Object(n.useState)({email:"",password:""}),i=e=>{const{name:t,value:a}=e.target;s(e=>Object(o.a)(Object(o.a)({},e),{},{[t]:a}))};return l.a.createElement("div",{className:"modal-overlay"},l.a.createElement("div",{className:"modal"},l.a.createElement("button",{className:"close-btn",onClick:t},"\u2715"),l.a.createElement("div",{className:"modal-content"},l.a.createElement("h2",{className:"modal-title"},"Welcome Back!"),l.a.createElement("p",{className:"modal-subtitle"},"Sign in to discover and register for JIHC Events."),l.a.createElement("form",{onSubmit:async e=>{e.preventDefault();try{const e=await fetch("https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/users"),n=(await e.json()).find(e=>e.email===c.email&&e.password===c.password);n?(console.log("User found!",n),a(!0),r(n.name),localStorage.setItem("userId",n.id),t()):alert("Invalid email or password.")}catch(n){console.error("Error signing in:",n),alert("Something went wrong. Please try again.")}},className:"modal-form"},l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"example@email.com",value:c.email,onChange:i,required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Enter your password",value:c.password,onChange:i,required:!0})),l.a.createElement("button",{type:"submit",className:"submit-btn"},"Sign In")))))};var p=e=>{let{onClose:t,setIsLoggedIn:a,setUserName:r}=e;const[c,s]=Object(n.useState)({name:"",email:"",password:"",userType:"Student"}),i=e=>{const{name:t,value:a}=e.target;s(e=>Object(o.a)(Object(o.a)({},e),{},{[t]:a}))};return l.a.createElement("div",{className:"modal-overlay"},l.a.createElement("div",{className:"modal"},l.a.createElement("button",{className:"close-btn",onClick:t},"\u2715"),l.a.createElement("div",{className:"modal-content"},l.a.createElement("h2",{className:"modal-title"},"Create an Account"),l.a.createElement("p",{className:"modal-subtitle"},"Join our community of event-goers and explore amazing events!"),l.a.createElement("form",{onSubmit:async e=>{e.preventDefault();try{const e=await fetch("https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}),n=await e.json();e.ok?(a(!0),r(n.name),localStorage.setItem("userId",n.id),t()):alert(n.message||"Sign-up failed. Please try again.")}catch(n){console.error("Error signing up:",n),alert("Something went wrong. Please try again.")}},className:"modal-form"},l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"name"},"Full Name"),l.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"John Doe",value:c.name,onChange:i,required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"example@email.com",value:c.email,onChange:i,required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Enter your password",value:c.password,onChange:i,required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"userType"},"User Type"),l.a.createElement("select",{name:"userType",id:"userType",value:c.userType,onChange:i,required:!0},l.a.createElement("option",{value:"Student"},"Student"),l.a.createElement("option",{value:"Teacher"},"Teacher"),l.a.createElement("option",{value:"Other"},"Other"))),l.a.createElement("button",{type:"submit",className:"submit-btn"},"Sign Up")))))};var v=()=>{const[e,t]=Object(n.useState)(!1),[a,r]=Object(n.useState)(!1),[c,i]=Object(n.useState)(!1),[o,m]=Object(n.useState)(""),[d,u]=Object(n.useState)(null);Object(n.useEffect)(()=>{if(c){const e=localStorage.getItem("userType");e&&u(e)}else u(null)},[c]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"header"},l.a.createElement(s.b,{to:"/"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:"https://res.cloudinary.com/dlxfub7s1/image/upload/v1734863215/jihc-logo-v1_xr5t1z.png",alt:"JIHC Events Logo"}))),l.a.createElement("nav",{className:"nav-menu"},l.a.createElement(s.b,{to:"/",className:"nav-link"},"Home"),l.a.createElement(s.b,{to:"/events",className:"nav-link"},"Events"),l.a.createElement(s.b,{to:"/about",className:"nav-link"},"About Us"),l.a.createElement(s.b,{to:"/contact",className:"nav-link"},"Contact Us"),c&&"Teacher"===d&&l.a.createElement(s.b,{to:"/create-event",className:"nav-link"},"Create Event")),l.a.createElement("div",{className:"auth-buttons"},c?l.a.createElement(l.a.Fragment,null,l.a.createElement(s.b,{to:"/profile",className:"btn profile-btn"},"Profile"),l.a.createElement("button",{onClick:()=>{i(!1),m(""),u(null),localStorage.removeItem("userId"),localStorage.removeItem("userType")},className:"btn logout-btn"},"Logout")):l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:()=>{t(!0)},className:"btn sign-in-btn"},"Sign In"),l.a.createElement("button",{onClick:()=>{r(!0)},className:"btn sign-up-btn"},"Sign Up"))),e&&l.a.createElement(E,{onClose:()=>t(!1),setIsLoggedIn:i,setUserName:m}),a&&l.a.createElement(p,{onClose:()=>r(!1),setIsLoggedIn:i,setUserName:m})))};var g=()=>l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"footer-top"},l.a.createElement("div",{className:"footer-logo"},l.a.createElement("h2",null,"JIHC College"))),l.a.createElement("div",{className:"footer-contact"},l.a.createElement("div",{className:"footer-contact-item"},l.a.createElement("p",null,"123 JIHC Street, Main City, Country")),l.a.createElement("div",{className:"footer-contact-item"},l.a.createElement("p",null,"+123 456 789")),l.a.createElement("div",{className:"footer-contact-item"},l.a.createElement("p",null,"info@jihccollege.edu"))),l.a.createElement("div",{className:"footer-bottom"},l.a.createElement("ul",{className:"footer-links"},l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},"About Us")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact"},"Contact")),l.a.createElement("li",null,l.a.createElement("a",{href:"#privacy"},"Privacy Policy"))),l.a.createElement("p",{className:"copyright"},"\xa9 ",(new Date).getFullYear()," JIHC College. All rights reserved.")));a(26);var h=()=>{const{eventId:e}=Object(i.r)(),[t,a]=Object(n.useState)(null),[r,c]=Object(n.useState)(!0),[s,m]=Object(n.useState)(null),d=Object(i.p)();Object(n.useEffect)(()=>{(async()=>{try{const t=await fetch("https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/events/".concat(e));if(!t.ok)throw new Error("Failed to fetch event data.");const n=await t.json();a(n)}catch(s){console.error("Error fetching event data:",s),m("Failed to load event data.")}finally{c(!1)}})()},[e]);const u=e=>{const{name:t,value:n}=e.target;a(e=>Object(o.a)(Object(o.a)({},e),{},{[t]:n}))};return r?l.a.createElement("div",null,"Loading..."):s?l.a.createElement("div",{className:"error-message"},s):l.a.createElement("div",{className:"update-event-page"},l.a.createElement("h1",null,"Update Event"),l.a.createElement("form",{onSubmit:async a=>{a.preventDefault();try{if(!(await fetch("https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/events/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)throw new Error("Failed to update event.");alert("Event updated successfully!"),d("/profile")}catch(s){console.error("Error updating event:",s),alert("Failed to update the event. Please try again.")}}},l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",name:"title",value:t.title,onChange:u,required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"type"},"Type"),l.a.createElement("input",{type:"text",name:"type",value:t.type,onChange:u,required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"date"},"Date"),l.a.createElement("input",{type:"date",name:"date",value:t.date,onChange:u,required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"location"},"Location"),l.a.createElement("input",{type:"text",name:"location",value:t.location,onChange:u,required:!0})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"price"},"Price"),l.a.createElement("input",{type:"text",name:"price",value:t.price,onChange:u})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"description"},"Description"),l.a.createElement("textarea",{name:"description",value:t.description,onChange:u,required:!0})),l.a.createElement("button",{type:"submit"},"Update Event")))},b=a(15),N=a(8),f=a(7);var y=()=>{const e=Object(n.useRef)();return l.a.createElement("div",{className:"contact-section"},l.a.createElement("div",{className:"contact-form"},l.a.createElement("h1",{className:"contact-title"},"Contact Us"),l.a.createElement("p",{className:"contact-description"},"We'd love to hear from you! Please fill out the form below or visit us at our address."),l.a.createElement("form",{ref:e,onSubmit:t=>{t.preventDefault(),b.a.sendForm("service_g6whaij","template_j0ctme9",e.current,"E5iW-kR7EcirveQHC").then(e=>{alert("Message sent successfully!"),t.target.reset()},e=>{alert("An error occurred. Please try again.")})}},l.a.createElement("input",{type:"text",name:"firstName",placeholder:"First Name*",required:!0}),l.a.createElement("input",{type:"text",name:"lastName",placeholder:"Last Name*",required:!0}),l.a.createElement("input",{type:"email",name:"email",placeholder:"Email*",required:!0}),l.a.createElement("textarea",{name:"message",rows:"5",placeholder:"Message*",required:!0}),l.a.createElement("button",{type:"submit",className:"submit-btn"},"Send Message")),l.a.createElement("div",{className:"contact-details"},l.a.createElement("div",{className:"contact-item"},l.a.createElement(N.a,{icon:f.a,className:"contact-icon"}),l.a.createElement("a",{href:"mailto:info@jihc.kz",className:"contact-text"},"info@jihc.kz")),l.a.createElement("div",{className:"contact-item"},l.a.createElement(N.a,{icon:f.c,className:"contact-icon"}),l.a.createElement("a",{href:"tel:87078020088",className:"contact-text"},"8-707-802-00-88")),l.a.createElement("div",{className:"contact-item"},l.a.createElement(N.a,{icon:f.b,className:"contact-icon"}),l.a.createElement("span",{className:"contact-text"},"\u0422\u0430\u0440\u0430\u0437, \u0443\u043b. \u041f\u0443\u0448\u043a\u0438\u043d\u0430, 154")))),l.a.createElement("div",{className:"contact-info"},l.a.createElement("div",{className:"map-container"},l.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46763.522386370154!2d71.33593595381794!3d42.899850827140625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a703484d578eb5%3A0xbb36b3fc4ad3ccd2!2z0JbQkNCc0JHQq9CbINCY0J3QndCe0JLQkNCm0JjQr9Cb0KvSmiDQltCe0pLQkNCg0Ksg0JrQntCb0JvQldCU0JbQhg!5e0!3m2!1sru!2skz!4v1736695792761!5m2!1sru!2skz",width:"100%",height:"450",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}))))},w=a(9);var S=()=>{const[e,t]=Object(n.useState)(0),a=[{icon:l.a.createElement(w.a,null),title:"Organized Events",description:"Seamlessly manage and organize events for everyone."},{icon:l.a.createElement(w.d,null),title:"Community Building",description:"Foster connections and build a stronger community."},{icon:l.a.createElement(w.b,null),title:"Growth Opportunities",description:"Unlock personal and professional growth opportunities."},{icon:l.a.createElement(w.c,null),title:"Recognitions",description:"Celebrate achievements with recognition and rewards."}];return l.a.createElement("div",{className:"about-us"},l.a.createElement("section",{className:"header-section"},l.a.createElement("h1",null,"About JIHC Events"),l.a.createElement("p",null,"Discover how we build connections and inspire through events."),l.a.createElement("div",{className:"underline"})),l.a.createElement("div",{className:"why-choose-us-slider"},l.a.createElement("button",{className:"slider-button prev",onClick:()=>{t(e=>(e-1+a.length)%a.length)}},"<"),l.a.createElement("div",{className:"slider-container"},a.map((t,a)=>{const n=a-e,r=0===n;return l.a.createElement("div",{key:a,className:"slider-item ".concat(r?"center":""),style:{transform:"translateX(".concat(50*n,"%) scale(").concat(r?1:.8,")"),zIndex:r?2:1,opacity:r?1:.6}},l.a.createElement("div",{className:"icon"},t.icon),l.a.createElement("h3",{className:"title"},t.title),l.a.createElement("p",{className:"description"},t.description))})),l.a.createElement("button",{className:"slider-button next",onClick:()=>{t(e=>(e+1)%a.length)}},">")),l.a.createElement("div",{className:"mission-vision-section"},l.a.createElement("div",{className:"mission-container"},l.a.createElement("div",{className:"mission-box"},l.a.createElement("h3",null,"Our Mission"),l.a.createElement("p",null,"To inspire students and organizers by creating opportunities for learning, networking, and collaboration through impactful events.")),l.a.createElement("div",{className:"mission-image"},l.a.createElement("img",{src:"https://res.cloudinary.com/dlxfub7s1/image/upload/v1736717765/154657e5b8393753a45bdd2f307b2598_vzvd4s.jpg",alt:"Mission Visual"}))),l.a.createElement("div",{className:"vision-container"},l.a.createElement("div",{className:"vision-image"},l.a.createElement("img",{src:"https://res.cloudinary.com/dlxfub7s1/image/upload/v1736717765/60ab479cb8f5b6e91ecfd28e3ef4a5f4_jdva9z.jpg",alt:"Vision Visual"})),l.a.createElement("div",{className:"vision-box"},l.a.createElement("h3",null,"Our Vision"),l.a.createElement("p",null,"To be a leading platform for event management, empowering students and teachers to create memorable and impactful experiences.")))),l.a.createElement("div",{className:"puzzle-reviews-section"},l.a.createElement("h2",{className:"reviews-title"},"What People Say"),l.a.createElement("div",{className:"puzzle-reviews-container"},l.a.createElement("div",{className:"puzzle-piece top-left"},l.a.createElement("p",null,'"JIHC Events transformed the way we organize and participate in events. It\'s a game-changer!"'),l.a.createElement("span",null,"- Moldir, Student ")),l.a.createElement("div",{className:"puzzle-piece top-right"},l.a.createElement("p",null,'"The tools and community built around this platform are incredible. Highly recommend it."'),l.a.createElement("span",null,"- Azina, Student ")))))},C=a(14);a(29);var j=()=>{const[e,t]=Object(n.useState)([]),[a,r]=Object(n.useState)([]),[c,s]=Object(n.useState)({title:"",type:"",location:""}),[i,m]=Object(n.useState)(""),[d,u]=Object(n.useState)(null),E=["Competition","Event","Networking","Seminar","Sports"];Object(n.useEffect)(()=>{fetch("https://jihceventsapi-hpdng8h8e7eqhdbm.canadacentral-01.azurewebsites.net/api/events").then(e=>e.json()).then(e=>{t(e),r(e)}).catch(e=>console.error("Error fetching events:",e))},[]);const p=e=>{const{name:t,value:a}=e.target;s(e=>Object(o.a)(Object(o.a)({},e),{},{[t]:a}))};return l.a.createElement("div",{className:"events-page"},l.a.createElement("h1",{className:"page-title"},"Events"),l.a.createElement("div",{className:"filters-container"},l.a.createElement("div",{className:"calendar-container"},l.a.createElement("h3",null,"Select Date"),l.a.createElement(C.a,{onChange:t=>{u(t);const a=e.filter(e=>new Date(e.date).toDateString()===t.toDateString());r(a)},value:d})),l.a.createElement("div",{className:"category-filter"},l.a.createElement("h3",null,"Categories"),l.a.createElement("ul",null,E.map(t=>l.a.createElement("li",{key:t,className:i===t?"active":"",onClick:()=>(t=>{m(t);const a=e.filter(e=>e.type===t);r(a)})(t)},t)))),l.a.createElement("div",{className:"search-section"},l.a.createElement("input",{type:"text",name:"title",value:c.title,onChange:p,placeholder:"Enter event name"}),l.a.createElement("select",{name:"type",value:c.type,onChange:p},l.a.createElement("option",{value:""},"Select Event Type"),E.map(e=>l.a.createElement("option",{key:e,value:e},e))),l.a.createElement("select",{name:"location",value:c.location,onChange:p},l.a.createElement("option",{value:""},"Select Location"),["ACT Hall","Library","Library Auditorium","Sports Hall","Techolab"].map(e=>l.a.createElement("option",{key:e,value:e},e))),l.a.createElement("button",{className:"filter-button",onClick:()=>{const t=e.filter(e=>{const t=""===c.title||e.title.toLowerCase().includes(c.title.toLowerCase()),a=""===c.type||e.type===c.type,n=""===c.location||e.location===c.location;return t&&a&&n});r(t)}},"Search"),l.a.createElement("button",{className:"filter-button reset",onClick:()=>{r(e),s({title:"",type:"",location:""}),m(""),u(null)}},"Reset"))),l.a.createElement("div",{className:"events-container"},a.length>0?a.map(e=>l.a.createElement("div",{key:e.id,className:"event-card"},l.a.createElement("img",{src:e.image,alt:e.title,className:"event-image"}),l.a.createElement("div",{className:"event-details"},l.a.createElement("h3",{className:"event-title"},e.title),l.a.createElement("p",{className:"event-date"},e.date),l.a.createElement("p",{className:"event-location"},e.location),l.a.createElement("p",{className:"event-description"},e.description)))):l.a.createElement("p",null,"No events found matching your criteria.")))};var O=()=>{const[e,t]=Object(n.useState)(!1),[a,r]=Object(n.useState)(null),[c,o]=Object(n.useState)(!1),[d,b]=Object(n.useState)(!0);Object(n.useEffect)(()=>{const e=localStorage.getItem("userId");e&&(r(e),t(!0))},[]);const N=()=>{o(!1)};return l.a.createElement(s.a,null,l.a.createElement(v,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",element:l.a.createElement(m,null)}),l.a.createElement(i.a,{path:"/profile",element:l.a.createElement(u,{userId:a})}),l.a.createElement(i.a,{path:"/sign-in",element:l.a.createElement(E,{onClose:N})}),l.a.createElement(i.a,{path:"/sign-up",element:l.a.createElement(p,{onClose:N})}),l.a.createElement(i.a,{path:"/update-event/:eventId",element:l.a.createElement(h,null)}),l.a.createElement(i.a,{path:"/contact",element:l.a.createElement(y,null)}),l.a.createElement(i.a,{path:"/about",element:l.a.createElement(S,null)}),l.a.createElement(i.a,{path:"/events",element:l.a.createElement(j,null)})," "),l.a.createElement(g,null))};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)))}},[[17,1,2]]]);
//# sourceMappingURL=main.ac1913e6.chunk.js.map