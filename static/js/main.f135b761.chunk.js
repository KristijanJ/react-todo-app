(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),m=a.n(n),i=a(3),c=a.n(i),o=(a(14),a(1)),r=a(4),l=a(5),s=a(7),d=a(6),u=a(8);function p(e){var t=e.item,a=e.index,n=e.completed,i=e.removeItem,c=e.completeItem;return m.a.createElement("div",{className:"item"},n?m.a.createElement("span",{className:"item-span completed"},t," "):m.a.createElement("span",{className:"item-span"},t," "),m.a.createElement("div",{className:"action-buttons"},m.a.createElement("span",{className:"action-item-span",onClick:function(){return c(a)}},m.a.createElement("i",{className:"fas fa-check"})),m.a.createElement("span",{className:"action-item-span",onClick:function(){return i(a)}},m.a.createElement("i",{className:"fas fa-times"}))))}function h(e){var t=e.items,a=e.removeItem,n=e.completeItem;return m.a.createElement("div",{className:"items"},t.map((function(e){return m.a.createElement(p,{key:e.id,index:e.id,item:e.value,completed:e.completed,removeItem:a,completeItem:n})})))}function v(e){var t=e.handleSubmit,a=e.handleInputChange;return m.a.createElement("form",{onSubmit:t},m.a.createElement("input",{type:"text",onChange:a,placeholder:"Enter a new to-do item..."}),m.a.createElement("button",{type:"submit"},"Add item"))}a(15);var f=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).handleInputChange=function(t){e.setState({newItem:{id:Date.now(),value:t.target.value,completed:!1}})},e.handleSubmit=function(t){t.preventDefault(),e.addItem(e.state.newItem,t)},e.addItem=function(t,a){var n=Object(o.a)(e.state.items);""===t.value?alert("Please enter an Item"):(n.push(t),e.setState({items:n,newItem:{id:"",value:"",completed:!1}}),a.target.children[0].value="")},e.removeItem=function(t){var a=Object(o.a)(e.state.items).filter((function(e){return e.id!==t}));e.setState({items:a})},e.completeItem=function(t){var a=Object(o.a)(e.state.items);a.forEach((function(e){e.id===t&&(!1===e.completed?e.completed=!0:e.completed=!1)})),e.setState({items:a})},e.state={items:[{id:1,value:"Take the dog for a walk",completed:!1},{id:2,value:"Study for the exam",completed:!1},{id:3,value:"Buy new tires for the car",completed:!1}],newItem:{id:"",value:"",completed:!1}},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"main"},m.a.createElement("h1",{className:"title"},"TODO APP"),m.a.createElement(h,{items:this.state.items,removeItem:this.removeItem,completeItem:this.completeItem}),m.a.createElement("hr",{className:"hr-divider"}),m.a.createElement(v,{addItem:this.addItem,handleInputChange:this.handleInputChange,handleSubmit:this.handleSubmit}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(m.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.f135b761.chunk.js.map