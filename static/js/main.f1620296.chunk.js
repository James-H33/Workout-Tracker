(this["webpackJsonpworkout-tracker"]=this["webpackJsonpworkout-tracker"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports={Wrapper:"Expander_Wrapper__lRBYn",WrapperActive:"Expander_WrapperActive__3CQum",ExpanderBtn:"Expander_ExpanderBtn__38Ztv",ExpanderBtnInactive:"Expander_ExpanderBtnInactive__1K0nY",ItemContainer:"Expander_ItemContainer__6O5hV",ItemContainerActive:"Expander_ItemContainerActive__3AiQZ"}},function(e,t,n){e.exports={SetWrapper:"SetContainer_SetWrapper__1G_Ck",Title:"SetContainer_Title__ypdjL",SetHeaders:"SetContainer_SetHeaders__1NhFY",TitleWrapper:"SetContainer_TitleWrapper__14oSQ",Exercises:"SetContainer_Exercises__3t9DB",AddSetBtn:"SetContainer_AddSetBtn__1TaGR"}},,,,function(e,t,n){e.exports={Wrapper:"Workout_Wrapper__3jwMp",Header:"Workout_Header__1Q9Mr",Sets:"Workout_Sets__r7yWC",ModalContentTitle:"Workout_ModalContentTitle__2gAg0"}},,,function(e,t,n){e.exports={LoginForm:"LoginForm_LoginForm__3YooB",ErrorMessage:"LoginForm_ErrorMessage__2gZEx",FormInput:"LoginForm_FormInput__14xi-"}},function(e,t,n){e.exports={SetItem:"Set_SetItem__wY0wT",SetItemComplete:"Set_SetItemComplete__3e-ju",SetItemNum:"Set_SetItemNum__2lXL7",SetItemDelete:"Set_SetItemDelete__RqHld"}},,,,,,function(e,t,n){e.exports={StartCTA:"Home_StartCTA__3DyAR",WorkoutSection:"Home_WorkoutSection__17VSO",AddWorkout:"Home_AddWorkout__2Tqii"}},function(e,t,n){e.exports={Wrapper:"WorkoutCard_Wrapper__1hGnq",WrapperActive:"WorkoutCard_WrapperActive__uAxwO",Expander:"WorkoutCard_Expander__2ofnE"}},function(e,t,n){e.exports={Input:"Input_Input__2g0ZR",Standard:"Input_Standard__3JT3t",SetInput:"Input_SetInput__33TNv"}},,,,function(e,t,n){e.exports={Wrapper:"Backdrop_Wrapper__HAxEu",Active:"Backdrop_Active__2E0Bt"}},function(e,t,n){e.exports={Header:"Header_Header__3AmlC",HeaderLogout:"Header_HeaderLogout__J_pQN"}},,,function(e,t,n){e.exports={Modal:"Modal_Modal__3yRlg",Active:"Modal_Active__3qrQg"}},function(e,t,n){e.exports={PillButton:"PillButton_PillButton__34Kq1",Secondary:"PillButton_Secondary__2Klbn"}},function(e,t,n){e.exports={ExercisePicker:"ExercisePicker_ExercisePicker__1i6St",ExercisePickerOption:"ExercisePicker_ExercisePickerOption__2Pn6K"}},function(e,t,n){e.exports={Content:"Root_Content__1vHL5"}},function(e,t,n){e.exports={Wrapper:"WorkoutCardList_Wrapper__IslHm"}},function(e,t,n){e.exports={Button:"Button_Button__3xTAQ"}},function(e,t,n){e.exports={Timer:"Timer_Timer__1ciwL"}},,,,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(24),i=n.n(a),s=(n(54),n(6)),o=n(16),u=n(7),d=n(42),l=n.n(d),p=n(3),j=n.n(p),x=n(4),b=n(13),f=n(26),h=function(){function e(){Object(b.a)(this,e),this.base="https://jh-workout-tracker.herokuapp.com"}return Object(f.a)(e,[{key:"get",value:function(){var e=Object(x.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.base,"/").concat(t),{method:"GET",headers:{"Content-Type":"application/json",Authorization:this.getToken()}});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(x.a)(j.a.mark((function e(t,n){var r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.base,"/").concat(t),e.next=3,fetch(r,{method:"POST",headers:{"Content-Type":"application/json",Authorization:this.getToken()},body:JSON.stringify(n)});case 3:if(200===(c=e.sent).status){e.next=8;break}return e.next=7,c.json();case 7:throw e.sent;case 8:return e.next=10,c.json();case 10:return a=e.sent,e.abrupt("return",a);case 12:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"put",value:function(){var e=Object(x.a)(j.a.mark((function e(t,n){var r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.base,"/").concat(t),e.next=3,fetch(r,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:this.getToken()},body:JSON.stringify(n)});case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(x.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.base,"/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:this.getToken()}});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getToken",value:function(){return"Bearer "+localStorage.getItem("access_token")}}]),e}(),O=new h,v={get:function(){var e=Object(x.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("workouts");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addWorkout:function(){var e=Object(x.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.post("workouts",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateWorkout:function(){var e=Object(x.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.put("workouts/".concat(t.id),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteWorkout:function(){var e=Object(x.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.delete("workouts/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m="ADD_SET",_="ADD_EXERCISE",k="ADD_WORKOUT",g="UPDATE_WORKOUT",w="UPDATE_WORKOUTS",S="DELETE_WORKOUT",y="UPDATE_SET_VALUES",A="NEW_STATE",E="STORE_STATE",I="LOGGED_IN",C="BACKDROP",T=function(e){return function(){var t=Object(x.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.addWorkout(e);case 2:return r=t.sent,n({type:k,payload:r}),t.abrupt("return",Promise.resolve(r.id));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},W=function(e){return function(){var t=Object(x.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.updateWorkout(e);case 2:return r=t.sent,console.log("Updated Workout!"),n({type:w,payload:r}),t.abrupt("return",Promise.resolve(r));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(x.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.deleteWorkout(e);case 2:return r=t.sent,n({type:S,payload:r}),t.abrupt("return",Promise.resolve(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},B=n(35),M=n.n(B),P=n(0),L=function(e){var t=[M.a.Wrapper,e.isActive?M.a.Active:""].join(" ");return Object(P.jsx)("div",{className:t,onClick:e.onDeactivate})},D=n(36),F=n.n(D),H=new h,R={login:function(){var e=Object(x.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.post("user/login",t);case 3:return n=e.sent,localStorage.setItem("access_token",n.userId),e.abrupt("return",{success:!0,message:n.message});case 8:if(e.prev=8,e.t0=e.catch(0),!e.t0||!e.t0.message){e.next=12;break}return e.abrupt("return",{success:!1,message:e.t0.message});case 12:return e.abrupt("return",{success:!1,message:"Something went wrong..."});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),logout:function(){localStorage.removeItem("access_token")},isLoggedIn:function(){return Boolean(localStorage.getItem("access_token"))}},U=function(){var e=Object(u.c)((function(e){return e})),t=Object(u.b)(),n=Object(s.e)(),c=function(){n.push("/")},a=function(){R.logout(),t({type:I,payload:{isLoggedIn:!1}}),c()},i=e.isLoggedIn?Object(P.jsxs)(r.Fragment,{children:[Object(P.jsx)("h3",{onClick:c,children:"Workout Tracker"}),Object(P.jsx)("div",{className:F.a.HeaderLogout,onClick:a,children:"Logout"})]}):Object(P.jsx)("h3",{onClick:c,children:"Workout Tracker"});return Object(P.jsx)("header",{className:F.a.Header,children:i})},q=Object(s.f)((function(e){var t=Object(u.b)(),n=Object(u.c)((function(e){return e}));return Object(r.useEffect)((function(){n.isLoggedIn&&t(function(){var e=Object(x.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get();case 2:n=e.sent,t({type:A,payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[n.isLoggedIn,t]),Object(P.jsxs)(r.Fragment,{children:[Object(P.jsx)(U,{}),Object(P.jsx)("div",{className:l.a.Content,children:e.children}),Object(P.jsx)(L,{isActive:n.isBackdropActive,onDeactivate:function(){t({type:C,payload:{isActive:!1}})}})]})})),K=n(2),J=n(8),Q=n(49),G=n(48),X=n(43),Y=n.n(X),z=function(e){Object(Q.a)(n,e);var t=Object(G.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(P.jsx)("div",{className:Y.a.Wrapper,children:this.props.children})}}]),n}(r.Component),Z=n(29),V=n.n(Z),$=n(44),ee=n.n($),te=function(e){return Object(P.jsx)("button",{onClick:e.click,className:ee.a.Button,children:e.children})},ne=n(30),re=n.n(ne),ce=n(14),ae=n.n(ce),ie=n.p+"static/media/ellipse.dca05dca.svg",se=function(e,t,n){return(e?t:n).join(" ")},oe=function(e){var t=e.isActive||!1,n=se(t,[ae.a.ExpanderBtn,ae.a.ExpanderBtnInactive],[ae.a.ExpanderBtn]),r=se(t,[ae.a.ItemContainerActive,ae.a.ItemContainer],[ae.a.ItemContainer]),c=se(t,[ae.a.WrapperActive,ae.a.Wrapper],[ae.a.Wrapper]);return Object(P.jsxs)("div",{className:c,children:[Object(P.jsx)("div",{className:n,onClick:function(){e.open(!0)},children:Object(P.jsx)("img",{src:ie,alt:"..."})}),Object(P.jsx)("div",{className:r,children:e.children})]})},ue=function(e){var t=Object(s.e)(),n=Object(r.useState)({isExpanderOpen:!1}),c=Object(J.a)(n,2),a=c[0],i=c[1],o=[re.a.Wrapper,a.isExpanderOpen?re.a.WrapperActive:""].join(" ");return Object(P.jsxs)(r.Fragment,{children:[Object(P.jsx)(L,{isActive:a.isExpanderOpen,onDeactivate:function(){i({isExpanderOpen:!1})}}),Object(P.jsxs)("div",{className:o,children:[Object(P.jsx)("div",{className:re.a.Expander,children:Object(P.jsx)(oe,{isActive:a.isExpanderOpen,open:function(e){i({isExpanderOpen:e})},children:Object(P.jsx)("div",{onClick:e.delete,children:"Delete"})})}),Object(P.jsxs)("div",{onClick:function(){t.push("/workout/".concat(e.id))},children:[Object(P.jsx)("label",{children:e.title}),Object(P.jsx)("ul",{children:e.exercises.map((function(e,t){return Object(P.jsx)("li",{children:e.title},e.id)}))})]})]})]})},de=n(39),le=n.n(de),pe=function(e){var t=[le.a.Modal,e.isActive?le.a.Active:""].join(" ");return Object(P.jsx)("div",{className:t,children:e.children})},je=n(31),xe=n.n(je),be=function(e){var t=function(e){switch(e){case"Standard":return xe.a.Standard;case"SetInput":return xe.a.SetInput;default:return xe.a.Input}}(e.styleclass);return Object(P.jsx)("input",{className:t,type:e.type,placeholder:e.placeholder,value:e.value,disabled:e.disabled,onChange:function(t){e.updated(t)}})},fe=function e(t){Object(b.a)(this,e),this.weight=0,this.reps=0,this.isComplete=!1;var n=Object(K.a)({weight:0,reps:0,isComplete:!1},t);this.weight=n.weight,this.reps=n.reps,this.isComplete=n.isComplete},he=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:t&&11).toString(16)}))},Oe=function e(t){Object(b.a)(this,e),this.id="",this.title="",this.sets=[];var n=Object(K.a)({id:he(),title:"",sets:[]},t);this.id=n.id,this.title=n.title,this.sets=n.sets.map((function(e){return new fe(e)}))},ve=function e(t){Object(b.a)(this,e),this.id=null,this.title="",this.exercises=[];var n=Object(K.a)({id:null,title:"",exercises:[]},t);this.id=n.id,this.title=n.title,this.exercises=n.exercises.map((function(e){return new Oe(e)}))},me=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e})),n=Object(s.e)(),c=Object(r.useState)({isModalActive:!1,workoutTitle:""}),a=Object(J.a)(c,2),i=a[0],o=a[1],d=Object(r.useState)(null),l=Object(J.a)(d,2),p=l[0],b=l[1],f=t.workouts||[];Object(r.useEffect)((function(){p&&n.push("/workout/".concat(p))}),[p,n]);var h=function(){var t=Object(x.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(N(n));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){o(Object(K.a)(Object(K.a)({},i),{},{isModalActive:!i.isModalActive}))},v=function(){var t=Object(x.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=new ve({id:he(),title:i.workoutTitle}),e(T(n)).then((function(e){return b(e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(P.jsxs)(r.Fragment,{children:[Object(P.jsx)("h2",{children:"Workout Tracker"}),Object(P.jsx)("div",{className:V.a.StartCTA,children:Object(P.jsx)(te,{click:O,children:"Start New Workout"})}),Object(P.jsxs)("div",{className:V.a.WorkoutSection,children:[Object(P.jsx)("h3",{children:"Workouts"}),Object(P.jsx)(z,{children:f.map((function(e,t){return Object(P.jsx)(ue,{id:e.id,title:e.title,exercises:e.exercises,delete:function(){return h(e.id)}},e.id)}))})]}),Object(P.jsx)(pe,{isActive:i.isModalActive,children:Object(P.jsxs)("div",{className:V.a.AddWorkout,children:[Object(P.jsx)("h4",{children:"Name your workout: "}),Object(P.jsx)(be,{value:i.workoutTitle,placeholder:"Title",updated:function(e){var t=e.target.value;o(Object(K.a)(Object(K.a)({},i),{},{workoutTitle:t}))}}),Object(P.jsx)(te,{click:v,children:"Start"})]})}),Object(P.jsx)(L,{isActive:i.isModalActive,onDeactivate:function(){return O()}})]})},_e=n(18),ke=n(22),ge=n.n(ke),we=function(){var e=Object(r.useState)({username:"",password:""}),t=Object(J.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(J.a)(a,2),o=i[0],d=i[1],l=Object(u.b)(),p=Object(s.e)(),b=function(e,t){var r=e.target.value,a=Object(K.a)(Object(K.a)({},n),{},Object(_e.a)({},t,r));c(a)},f=function(){var e=Object(x.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.login(n);case 2:(t=e.sent).success?(l({type:I,payload:{isLoggedIn:!0}}),p.push("/")):d(t.message);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(P.jsxs)("div",{className:ge.a.LoginForm,children:[Object(P.jsx)("h3",{children:"Login"}),Object(P.jsxs)("div",{className:ge.a.FormInput,children:[Object(P.jsx)("label",{htmlFor:"username",children:"Username"}),Object(P.jsx)(be,{id:"username",styleclass:"Standard",type:"text",value:n.username,updated:function(e){return b(e,"username")},placeholder:"Username"})]}),Object(P.jsxs)("div",{className:ge.a.FormInput,children:[Object(P.jsx)("label",{htmlFor:"password",children:"Password"}),Object(P.jsx)(be,{id:"password",styleclass:"Standard",type:"password",value:n.password,updated:function(e){return b(e,"password")},placeholder:"Password"})]}),o?Object(P.jsx)("div",{className:ge.a.ErrorMessage,children:o}):null,Object(P.jsx)(te,{click:f,children:"Submit"})]})},Se=function(){return Object(P.jsx)(r.Fragment,{children:Object(P.jsx)(we,{})})},ye=n(15),Ae=n.n(ye),Ee=function(e){var t=Object(r.useState)({isExpanderActive:!1}),n=Object(J.a)(t,2),c=n[0],a=n[1],i=Object(u.b)(),s=Object(u.c)((function(e){return e})),o=function(){var t=Object(x.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.removeExercise();case 2:i({type:C,payload:{isExpanderActive:!1}});case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){s.isBackdropActive||a({isExpanderActive:!1})}),[s.isBackdropActive]),Object(P.jsxs)(r.Fragment,{children:[Object(P.jsxs)("div",{className:Ae.a.TitleWrapper,children:[Object(P.jsx)("h4",{className:Ae.a.Title,children:e.title}),Object(P.jsx)(oe,{open:function(){var e=c.isExpanderActive;i({type:C,payload:{isActive:!0}}),a({isExpanderActive:!e})},isActive:c.isExpanderActive,children:Object(P.jsx)("span",{onClick:o,children:"Remove"})})]}),Object(P.jsxs)("div",{className:Ae.a.SetWrapper,children:[Object(P.jsxs)("div",{className:Ae.a.SetHeaders,children:[Object(P.jsx)("div",{children:"Set"}),Object(P.jsx)("div",{children:"lbs"}),Object(P.jsx)("div",{children:"Reps"}),Object(P.jsx)("div",{children:Object(P.jsx)("input",{type:"checkbox",checked:!0,disabled:!0})})]}),Object(P.jsx)("div",{className:Ae.a.Exercises,children:e.children})]}),Object(P.jsx)("div",{className:Ae.a.AddSetBtn,onClick:e.addSet,children:Object(P.jsx)("span",{children:"Add Set"})})]})},Ie=n(23),Ce=n.n(Ie),Te=function(e){var t=Object(r.useState)((function(){return{touchStartPos:0,touchPos:0,touchEndPos:0,distanceMoved:0,isComplete:!1}})),n=Object(J.a)(t,2),c=n[0],a=n[1],i=function(t,n){var r=parseInt(t.target.value),c=new fe(Object(K.a)(Object(K.a)({},e.set),{},Object(_e.a)({},n,r)));e.updateSet(c,e.setIndex)},s=function(){var t=Object(x.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(c.distanceMoved>200)){t.next=6;break}return t.next=3,e.removeSet();case 3:a((function(e){return Object(K.a)(Object(K.a)({},e),{},{distanceMoved:0})})),t.next=7;break;case 6:u();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function e(){if(c.distanceMoved>=0){var t=c.distanceMoved-=5;a((function(e){return Object(K.a)(Object(K.a)({},e),{},{distanceMoved:t<0?0:t})})),requestAnimationFrame(e)}},u=function(){requestAnimationFrame(o)},d={transform:"translateX(-".concat(c.distanceMoved,"px)")},l=c.isComplete?Ce.a.SetItemComplete:Ce.a.SetItem;return Object(P.jsxs)("div",{className:l,onTouchStart:function(e){var t=e.touches[0].clientX;a((function(e){return Object(K.a)(Object(K.a)({},e),{},{touchStartPos:t})}))},onTouchEnd:s,onTouchMove:function(e){var t=e.touches[0].clientX,n=Math.abs(c.touchStartPos)-Math.abs(t);a((function(e){return Object(K.a)(Object(K.a)({},e),{},{distanceMoved:n})}))},style:d,children:[Object(P.jsx)("div",{className:Ce.a.SetItemDelete,children:Object(P.jsx)("span",{children:"Deleting..."})}),Object(P.jsx)("div",{className:Ce.a.SetItemNum,children:e.setIndex+1}),Object(P.jsx)("div",{children:Object(P.jsx)(be,{styleclass:"SetInput",type:"number",value:e.set.weight,updated:function(e){i(e,"weight")},disabled:c.isComplete})}),Object(P.jsx)("div",{children:Object(P.jsx)(be,{styleclass:"SetInput",type:"number",value:e.set.reps,updated:function(e){i(e,"reps")},disabled:c.isComplete})}),Object(P.jsx)("div",{children:Object(P.jsx)("input",{className:"SetInput",type:"checkbox",onChange:function(){a((function(e){return Object(K.a)(Object(K.a)({},e),{},{isComplete:!e.isComplete})}))},checked:c.isComplete})})]})},We=n(40),Ne=n.n(We),Be=function(e){var t={secondary:Ne.a.Secondary},n=[Ne.a.PillButton,t[e.variant]].join(" ");return Object(P.jsx)("div",{className:n,onClick:function(){e.click()},children:e.children})},Me=n(41),Pe=n.n(Me),Le=n.p+"static/media/dumbell.8cd36d92.png",De=[{title:"Pull Ups",image:Le},{title:"Bench Press",image:Le},{title:"Inclinde Bench",image:Le},{title:"Barbel Squat",image:Le},{title:"Incline Press",image:Le},{title:"Bulgarian Squat",image:Le},{title:"Deadlift",image:Le},{title:"Romanian Deadlift",image:Le},{title:"Straight Leg Deadlift",image:Le},{title:"Barbel Curl",image:Le},{title:"Hip Thrusts",image:Le},{title:"Lat Pulldown",image:Le},{title:"Bent Over Rows",image:Le},{title:"Chest Fly",image:Le},{title:"Tricep Extension",image:Le},{title:"Bicep Curl",image:Le},{title:"Lateral Raise",image:Le},{title:"Dips",image:Le}];De.sort((function(e,t){return e.title.localeCompare(t.title)}));var Fe=function(e){var t=De.map((function(t,n){return Object(P.jsxs)("div",{className:Pe.a.ExercisePickerOption,onClick:function(){return e.onExercisePicked(t.title)},children:[Object(P.jsx)("img",{src:t.image,alt:t.title}),Object(P.jsx)("label",{children:t.title})]},t.id)}));return Object(P.jsx)("div",{className:Pe.a.ExercisePicker,children:t})},He=n(19),Re=n.n(He),Ue=n(45),qe=n.n(Ue),Ke=function(){var e=Object(r.useState)(0),t=Object(J.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){setInterval((function(){c((function(e){return e+1}))}),1e3)}),[c]);return Object(P.jsxs)("div",{className:qe.a.Timer,children:["Duration: ",function(e){if(console.log(e),e>=60){var t=Math.floor(e/60),n=e%60;return console.log(t),n=n<10?"0".concat(n):n,console.log(n),"".concat(t,".").concat(n)}return e<10?"0.0".concat(e):"0.".concat(e)}(n)]})},Je=Object(s.f)((function(e){var t=Object(u.b)(),n=Object(s.e)(),c=Object(u.c)((function(e){return e})),a=Object(r.useState)({isModalActive:!1}),i=Object(J.a)(a,2),o=i[0],d=i[1],l=e.match.params.id,p=c.workouts.find((function(e){return e.id===l})),b=function(){var e=Object(x.a)(j.a.mark((function e(n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.exercises.filter((function(e,t){return t!==n})),c=Object(K.a)(Object(K.a)({},p),{},{exercises:r}),e.next=4,t(W(c));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){d({isModalActive:!o.isModalActive})},h=function(){var e=Object(x.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(W(p));case 2:n.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(x.a)(j.a.mark((function e(n,r){var c,a,i,s,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=p.exercises[r],a=c.sets.filter((function(e,t){return t!==n})),i=Object(K.a)(Object(K.a)({},c),{},{sets:a}),s=p.exercises.map((function(e,t){return t===r?i:e})),o=Object(K.a)(Object(K.a)({},p),{},{exercises:s}),e.next=7,t(W(o));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(P.jsxs)("div",{className:Re.a.Wrapper,children:[Object(P.jsxs)("div",{className:Re.a.Header,children:[Object(P.jsx)(te,{click:h,children:"Finish"}),Object(P.jsx)(Ke,{})]}),Object(P.jsx)("h2",{children:p?p.title:null}),Object(P.jsx)("div",{className:Re.a.Sets,children:p?p.exercises.map((function(e,n){return Object(P.jsx)("div",{children:Object(P.jsx)(Ee,{title:e.title,addSet:function(){return function(e){var n={type:m,payload:{id:p.id,exerciseIndex:e}};t(n)}(n)},removeExercise:function(){return b(n)},children:e.sets.map((function(e,r){return Object(P.jsx)(Te,{setIndex:r,set:e,updateSet:function(e,r){return function(e,n,r){var c={type:y,payload:{id:p.id,exerciseIndex:r,setIndex:n,newSet:e}};t(c)}(e,r,n)},removeSet:function(){return O(r,n)}},r)}))})},n)})):null}),Object(P.jsx)("div",{children:Object(P.jsx)(Be,{variant:"secondary",click:function(){return f()},children:"Add Exercise"})}),Object(P.jsx)(pe,{isActive:o.isModalActive,children:Object(P.jsxs)("div",{className:Re.a.ModalContent,children:[Object(P.jsx)("label",{className:Re.a.ModalContentTitle,children:"Pick an Exercise"}),Object(P.jsx)(Fe,{onExercisePicked:function(e){return n=e,d({isModalActive:!1}),void t({type:_,payload:{id:p.id,excercise:n}});var n}})]})}),Object(P.jsx)(L,{isActive:o.isModalActive,onDeactivate:function(){return f()}})]})}));n(62);var Qe=function(){var e=Object(u.c)((function(e){return e}));return Object(P.jsx)(o.a,{basename:"/Workout-Tracker",children:Object(P.jsx)(q,{children:e.isLoggedIn?Object(P.jsxs)(r.Fragment,{children:[Object(P.jsx)(s.a,{path:"/",exact:!0,component:me}),Object(P.jsx)(s.a,{path:"/workout/:id",exact:!0,component:Je}),Object(P.jsx)(s.a,{path:"/login",exact:!0,component:Se})]}):Object(P.jsx)(s.a,{path:"/",exact:!0,component:Se})})})},Ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},Xe=n(28),Ye=n(46),ze=n(47),Ze=n(32),Ve=function(e,t){var n=e.workouts.map((function(e){return e.id===t.payload.id&&(e=Object(K.a)(Object(K.a)({},e),{},{exercises:[].concat(Object(Ze.a)(e.exercises),[new Oe({title:t.payload.excercise,sets:[new fe]})])})),e}));return Object(K.a)(Object(K.a)({},e),{},{workouts:n})},$e=function(e,t){var n=e.workouts.map((function(e){var n=new ve(e);if(n.id===t.payload.id){var r=new fe,c=n.exercises[t.payload.exerciseIndex],a=c.sets[0]||new fe;r.weight=a.weight,r.reps=a.reps,c.sets=[].concat(Object(Ze.a)(c.sets),[r])}return n}));return Object(K.a)(Object(K.a)({},e),{},{workouts:n})},et=function(e,t){var n=t.payload,r=n.exerciseIndex,c=n.setIndex,a=n.newSet,i=e.workouts.map((function(e){var n=new ve(e);n.id===t.payload.id&&(n.exercises[r].sets[c]=a);return n}));return Object(K.a)(Object(K.a)({},e),{},{workouts:i})},tt=function(e,t){return localStorage.setItem("workout-tracker-state",JSON.stringify(e)),e},nt=function(e,t){var n=[].concat(Object(Ze.a)(e.workouts),[t.payload]);return tt(Object(K.a)(Object(K.a)({},e),{},{workouts:n}))},rt=function(e,t){var n=e.workouts.map((function(e){return e.id===t.payload.id?t.payload:e}));return Object(K.a)(Object(K.a)({},e),{},{workouts:n})},ct=function(e,t){var n=t.payload.workouts;return Object(K.a)(Object(K.a)({},e),{},{workouts:n})},at=function(e,t){var n=t.payload.workouts;return tt(Object(K.a)(Object(K.a)({},e),{},{workouts:n}))},it=function(e,t){return tt(Object(K.a)(Object(K.a)({},e),{},{isBackdropActive:t.payload.isActive}))},st=function(e,t){var n=t.payload.isLoggedIn;return tt(Object(K.a)(Object(K.a)({},e),{},{isLoggedIn:n,workouts:[]}))},ot={},ut={workouts:[],isBackdropActive:!1,isLoggedIn:R.isLoggedIn()},dt=[ze.a],lt=Object(Xe.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return $e(e,t);case _:return Ve(e,t);case k:return nt(e,t);case g:return rt(e,t);case w:return ct(e,t);case S:return at(e,t);case I:return st(e,t);case y:return et(e,t);case A:return Object(K.a)(Object(K.a)({},e),t.payload);case E:return tt(e);case C:return it(e,t);default:return e}}),ut,Object(Ye.composeWithDevTools)(Xe.applyMiddleware.apply(void 0,dt)));i.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(u.a,{store:lt,children:Object(P.jsx)(Qe,{})})}),document.getElementById("root")),Ge()}],[[63,1,2]]]);
//# sourceMappingURL=main.f1620296.chunk.js.map