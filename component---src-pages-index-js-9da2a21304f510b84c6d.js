webpackJsonp([35783957827783],{62:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function l(){return"undefined"==typeof N&&"undefined"!=typeof window&&window.IntersectionObserver&&(N=new window.IntersectionObserver(function(e){e.forEach(function(e){S.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),N}t.__esModule=!0;var n=a(24),i=s(n),r=a(29),o=s(r),d=a(28),c=s(d),u=a(74),f=s(u),m=a(73),p=s(m),h=a(1),g=s(h),y=a(7),b=s(y),v=function(e){var t=(0,p.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},E={},w=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!E[a]||(E[a]=!0,!1)},N=void 0,S=[],_=function(e,t){l().observe(e),S.push([e,t])},L=null,C=function(){if(null!==L)return L;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return L=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},j=function(e){var t=e.opacity,a=void 0===t?"1":t,s=e.src,l=e.srcSet,n=e.sizes,i=void 0===n?"":n,r=e.title,o=void 0===r?"":r,d=e.alt,c=void 0===d?"":d,u=e.width,f=void 0===u?"":u,m=e.height,p=void 0===m?"":m,h=e.transitionDelay,g=void 0===h?"0.5s":h;return'<img width="'+f+'" height="'+p+'" src="'+s+'" srcset="'+l+'" alt="'+c+'" title="'+o+'" sizes="'+i+'" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+g+";opacity:"+a+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},O=function(e){var t=e.style,a=e.onLoad,s=(0,f.default)(e,["style","onLoad"]);return g.default.createElement("img",(0,p.default)({},s,{onLoad:a,style:(0,p.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};O.propTypes={style:b.default.object,onLoad:b.default.func};var T=function(e){function t(a){(0,i.default)(this,t);var s=(0,o.default)(this,e.call(this,a)),l=!0,n=!0,r=!1,d=w(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(l=!1,n=!1,r=!0),"undefined"==typeof window&&(l=!1,n=!1),s.state={isVisible:l,imgLoaded:n,IOSupported:r},s.handleRef=s.handleRef.bind(s),s}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&_(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,s=t.alt,l=t.className,n=t.outerWrapperClassName,i=t.style,r=void 0===i?{}:i,o=t.imgStyle,d=void 0===o?{}:o,c=t.sizes,u=t.resolutions,f=t.backgroundColor,m=t.Tag,h=void 0;h="boolean"==typeof f?"lightgray":f;var y=(0,p.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d),b=(0,p.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(c){var E=c;return E.srcWebp&&E.srcSetWebp&&C()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),g.default.createElement(m,{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},g.default.createElement(m,{className:(l?l:"")+" gatsby-image-wrapper",style:(0,p.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef},g.default.createElement(m,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&g.default.createElement(O,{alt:s,title:a,src:E.base64,style:y}),E.tracedSVG&&g.default.createElement(O,{alt:s,title:a,src:E.tracedSVG,style:y}),h&&g.default.createElement(m,{title:a,style:{backgroundColor:h,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&g.default.createElement(O,{alt:s,title:a,srcSet:E.srcSet,src:E.src,sizes:E.sizes,style:b,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,p.default)({alt:s,title:a},E))}})))}if(u){var w=u,N=(0,p.default)({position:"relative",overflow:"hidden",display:"inline-block",width:w.width,height:w.height},r);return"inherit"===r.display&&delete N.display,w.srcWebp&&w.srcSetWebp&&C()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),g.default.createElement(m,{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},g.default.createElement(m,{className:(l?l:"")+" gatsby-image-wrapper",style:N,ref:this.handleRef},w.base64&&g.default.createElement(O,{alt:s,title:a,src:w.base64,style:y}),w.tracedSVG&&g.default.createElement(O,{alt:s,title:a,src:w.tracedSVG,style:y}),h&&g.default.createElement(m,{title:a,style:{backgroundColor:h,width:w.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:w.height}}),this.state.isVisible&&g.default.createElement(O,{alt:s,title:a,width:w.width,height:w.height,srcSet:w.srcSet,src:w.src,style:b,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,p.default)({alt:s,title:a,width:w.width,height:w.height},w))}})))}return null},t}(g.default.Component);T.defaultProps={fadeIn:!0,alt:"",Tag:"div"},T.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=T},47:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),n=s(l),i=a(40),r=s(i),o=a(62),d=(s(o),a(50)),c=s(d),u=a(49);s(u);t.default=function(e){var t=[],a=(e.data.filter(function(e){return e.node.fields.category in t?t[e.node.fields.category].push(e):t[e.node.fields.category]=[e]}),[]);for(var s in t){var l=t[s].map(function(e){var t=void 0;e.node.frontmatter.method&&(t=n.default.createElement("span",{className:"ui label "+e.node.frontmatter.method},e.node.frontmatter.method.toUpperCase()));var a=""+e.node.frontmatter.route;return n.default.createElement(r.default,{to:e.node.fields.slug,className:"ui item"},t?t:"",a)}),i=n.default.createElement("div",{className:"item"},n.default.createElement("h3",{className:"header item"},(0,c.default)(s)),n.default.createElement("div",{className:"menu"},l));a.push(i)}return a.reverse(),n.default.createElement("nav",{className:"Sidebar ui vertical menu",id:"sidebar"},a)},e.exports=t.default},49:function(e,t){"use strict";function a(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}t.__esModule=!0,t.default=a,e.exports=t.default},50:function(e,t){"use strict";function a(e){return void 0!==e?e.charAt(0).toUpperCase()+e.slice(1):null}t.__esModule=!0,t.default=a,e.exports=t.default},221:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var r=a(1),o=s(r),d=a(40),c=s(d),u=a(47),f=s(u),m=function(e){function t(a){return l(this,t),n(this,e.call(this,a))}return i(t,e),t.prototype.render=function(){var e=this.props.data,t=e.docs,a=e.sidebar;t.edges.map(function(e){return e.node.frontmatter.title});return o.default.createElement("div",{className:"Frontpage SiteContent"},o.default.createElement(f.default,{data:a.edges}),o.default.createElement("div",{className:"MainContent"},o.default.createElement("div",{className:"ui page"},o.default.createElement("section",{className:"ui cta padded gray"},o.default.createElement("h1",{className:"ui header"},"Welcome"),o.default.createElement("h2",{className:"ui header"},"Start here to learn how to use the Kushy platform."),o.default.createElement("a",{href:"#",className:"ui button"},o.default.createElement("i",{className:"icon github"}),"Edit on Github"),o.default.createElement("a",{href:"#",className:"ui button"},o.default.createElement("i",{className:"icon gitter"}),"Discuss on Gitter.im")),o.default.createElement("section",{className:"cta white padded"},o.default.createElement("section",{className:"ui three column grid"},o.default.createElement("aside",{className:"column"},o.default.createElement("h3",{className:"ui icon header"},o.default.createElement("i",{className:"settings icon"}),o.default.createElement("div",{className:"content"},"Fundamentals",o.default.createElement("p",{className:"sub header"},"Pre-adoption topics for ensuring a smooth ride into production"),o.default.createElement(c.default,{to:"/"},"Start preparing ⟫")))),o.default.createElement("aside",{className:"column"},o.default.createElement("h3",{className:"ui icon header"},o.default.createElement("i",{className:"settings icon"}),o.default.createElement("div",{className:"content"},"Guides",o.default.createElement("p",{className:"sub header"},"Implementation guides covering all the best-practices from schema to style"),o.default.createElement(c.default,{to:"/"},"Follow the guides ⟫")))),o.default.createElement("aside",{className:"column"},o.default.createElement("h3",{className:"ui icon header"},o.default.createElement("i",{className:"settings icon"}),o.default.createElement("div",{className:"content"},"Tutorials",o.default.createElement("p",{className:"sub header"},"Get started quickly with the Kushy API with step-by-step instructions"),o.default.createElement(c.default,{to:"/"},"Browse our tutorials ⟫")))))),o.default.createElement("section",{className:"ui cta padded gray"},o.default.createElement("h1",{className:"ui header"},"Build danker apps with Kushy"),o.default.createElement("section",{className:"ui two column stackable grid"},o.default.createElement("div",{className:"column"},o.default.createElement("img",{src:"https://kushy.net/img/Developers/StrainsAccess.png"})),o.default.createElement("div",{className:"column"},o.default.createElement("h2",{className:"ui header"},"Access over 10,000 strains"),o.default.createElement("p",null,"From THC to CBN and every terpene in between, find any strain you need and all the associated data.")),o.default.createElement("div",{className:"column"},o.default.createElement("h2",{className:"ui header"},"Find cannabis shops"),o.default.createElement("p",null,"Browse by location, access live product menus, and discover deals from dispensaries and headshops.")),o.default.createElement("div",{className:"column"},o.default.createElement("img",{src:"https://kushy.net/img/Developers/ShopsMarkerFind.png"})))),o.default.createElement("section",{className:"ui basic clearing segment two column grid"},o.default.createElement("section",{className:"column"}),o.default.createElement("section",{className:"column"},o.default.createElement(c.default,{className:"ui card",style:{float:"right"}},o.default.createElement("div",{className:"right aligned content"},o.default.createElement("aside",{className:"meta"},o.default.createElement("span",null,"Next")),o.default.createElement("h4",{className:"header"},"The Kushy Platform"))))))))},t}(r.Component);t.default=m;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-9da2a21304f510b84c6d.js.map