(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,function(e,t,s){e.exports={gradeThumb:"Statistics_gradeThumb__3c2Uo",grades:"Statistics_grades__2qyHm",gradeDescription:"Statistics_gradeDescription__2v0OP",resume:"Statistics_resume__104-e",resumeDescription:"Statistics_resumeDescription__3tviE"}},,,,function(e,t,s){e.exports={btnThumb:"FeedbackOptions_btnThumb__ps8nU",btn:"FeedbackOptions_btn__TeImW",bth:"FeedbackOptions_bth__1n6l3"}},function(e,t,s){e.exports={headline:"Section_headline__3J7WI",section:"Section_section__3sCdw"}},,function(e,t,s){e.exports={headline:"Notification_headline__1Qjk2"}},,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),n=s(7),i=s.n(n),r=(s(13),s(3)),d=(s(14),s(5)),o=s.n(d),b=s(0);var l=function(e){var t=e.options,s=e.click;return Object(b.jsx)("div",{className:o.a.btnThumb,children:t.map((function(e,t){return Object(b.jsx)("button",{className:o.a.btn,type:"button",name:e,onClick:s,children:e},t)}))})},j=s(1),u=s.n(j);function h(e){var t=e.good,s=e.neutral,a=e.bad,c=e.total,n=e.percentsApproving;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:u.a.gradeThumb,children:[Object(b.jsx)("p",{className:u.a.gradeDescription,children:"Satisfied Customers"}),Object(b.jsx)("p",{className:u.a.grades,children:t})]}),Object(b.jsxs)("div",{className:u.a.gradeThumb,children:[Object(b.jsx)("p",{className:u.a.gradeDescription,children:"Indifferent Customers"}),Object(b.jsx)("p",{className:u.a.grades,children:s})]}),Object(b.jsxs)("div",{className:u.a.gradeThumb,children:[Object(b.jsx)("p",{className:u.a.gradeDescription,children:"Unsatisfied Customers"}),Object(b.jsx)("p",{className:u.a.grades,children:a})]}),Object(b.jsxs)("div",{className:u.a.gradeThumb,children:[Object(b.jsx)("p",{className:u.a.gradeDescription,children:"Total Reviews"}),Object(b.jsx)("p",{className:u.a.grades,children:c})]}),Object(b.jsxs)("div",{className:u.a.gradeThumb,children:[Object(b.jsxs)("p",{className:u.a.resume,children:[n,"%"]}),Object(b.jsx)("p",{className:u.a.resumeDescription,children:"of our customers liked us!"})]})]})}var m=s(6),p=s.n(m);function O(e){var t=e.title,s=e.children;return Object(b.jsxs)("section",{className:p.a.section,children:[Object(b.jsx)("h2",{className:p.a.headline,children:t}),s]})}var x=s(8),_=s.n(x);function g(e){var t=e.message;return Object(b.jsx)("h2",{className:_.a.headline,children:t})}function f(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(0),i=Object(r.a)(n,2),d=i[0],o=i[1],j=Object(a.useState)(0),u=Object(r.a)(j,2),m=u[0],p=u[1],x={good:s,neutral:d,bad:m},_=function(){return s+d+m};return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(O,{title:"Give us your feedback",children:Object(b.jsx)(l,{options:Object.keys(x),click:function(e){switch(e.preventDefault(),e.target.name){case"good":c(s+1);break;case"neutral":o(d+1);break;case"bad":p(m+1);break;default:return}}})}),_()>0?Object(b.jsx)(O,{title:"Our Statistics",children:Object(b.jsx)(h,{good:s,neutral:d,bad:m,total:_(),percentsApproving:function(){var e=s/_()*100;return Math.round(e)}()})}):Object(b.jsx)(g,{message:"Rate Us!"})]})}i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.3c88f175.chunk.js.map