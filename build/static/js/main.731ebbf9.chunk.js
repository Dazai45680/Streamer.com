(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/35.285a8c02.gif"},18:function(e,t,a){e.exports=a(31)},23:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),i=(a(23),a(3)),s=a(4),l=a(6),m=a(5),u=a(7),d=(a(24),a(9),a(34)),h=a(36),v=a(35),p=a(33),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){return e.preventDefault(),r.a.createElement(p.a,{toexact:"/video/sdoo"}," ")}},{key:"render",value:function(){return r.a.createElement("div",{className:"navbar navbar-expand-sm navbar-dark bg-dark shadow-sm "},r.a.createElement("div",{className:"navbar-brand mr-auto "},"Streamer"),r.a.createElement("form",{className:"form-inline",onSubmit:this.handleSubmit},r.a.createElement("input",{className:"form-control bg-dark",type:"text",placeholder:"Search"})))}}]),t}(n.Component),b=a(10),g=a.n(b),E=(a(27),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={images:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("requesting_items").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,images:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.images;return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",{className:"container mr-5 bg-grey"},n.map(function(e){return r.a.createElement(p.a,{to:"/video/"+e},r.a.createElement("div",{className:"card item shadow-lg p-3 mb-3 ml-3 mt-3 roundedm"},r.a.createElement("img",{className:"card-img-top img-size",src:"/"+e,alt:""}),r.a.createElement("p",null,e)))})):r.a.createElement("div",{className:"Loading"},r.a.createElement("img",{src:g.a,alt:""}),r.a.createElement("h1",null,"Loading....."))}}]),t}(n.Component)),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={video_link:null,video_info:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.anime_name;fetch("/videos/"+t).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,video_link:t})},function(t){e.setState({isLoaded:!0,error:t})}),fetch("/info/"+t).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,video_info:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this,t=this.state.video_link,a=this.state.video_info;return r.a.createElement("div",{className:"video_image"},r.a.createElement("div",{className:"mr-8 yellow"},r.a.createElement("p",{className:"anime-P"},a)),r.a.createElement("div",{className:"container navbar-dark bg-dark  shadow-sm"},r.a.createElement("div",{className:"player row"},r.a.createElement("div",{className:"col-lg-12 video"},r.a.createElement("video",{ref:function(t){return e.video=t},onClick:this.handleTogglePlay,onTimeUpdate:this.handleProgress,onDoubleClick:this.handleFullscreen,controls:!0},r.a.createElement("source",{src:t,type:"video/mp4"}))))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={images:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.anime_search;fetch("/Sear"+t).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,images:t})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.images;return console.log(n),t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",{className:"container mr-5 bg-grey"},n.map(function(e){return r.a.createElement(p.a,{to:e},r.a.createElement("div",{className:"card item shadow-lg p-3 mb-3 ml-3 mt-3 roundedm"},r.a.createElement("img",{className:"card-img-top img-size",src:"/"+e,alt:""}),r.a.createElement("p",null,e)))})):r.a.createElement("div",{className:"Loading"},r.a.createElement("img",{src:g.a,alt:""}),r.a.createElement("h1",null,"Loading....."))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(d.a,null,r.a.createElement(h.a,null,r.a.createElement(v.a,{exact:!0,path:"/",component:E}),r.a.createElement(v.a,{path:"/video/:anime_name",component:j}),r.a.createElement(v.a,{path:"/search/:anime_search",component:y}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.731ebbf9.chunk.js.map