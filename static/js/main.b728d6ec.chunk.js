(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(7),o=a.n(c),i=a(9),s=a(3),l=a(4),u=a(6),h=a(5),m=a(18),d=a.n(m),g=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n,c=e.pageSize,o=void 0===c?12:c;return d.a.get("".concat("https://pixabay.com/api/","?key=").concat("20676418-087852e37819860cce9abe695","&q=").concat(a,"&image_type=").concat("photo","&orientation=").concat("horizontal","&page=").concat(r,"&per_page=").concat(o)).then((function(e){return e.data.hits}))},j=a(0),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(n.Component),p=function(e){var t=e.previewImage,a=e.onClickImage;return Object(j.jsx)("li",{className:"ImageGalleryItem",onClick:a,children:Object(j.jsx)("img",{className:"ImageGalleryItem-image",src:t,alt:""})})},f=function(e){var t=e.images,a=e.onClickImage;return Object(j.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL;return Object(j.jsx)(p,{previewImage:n,onClickImage:function(){return a(r)}},t)}))})},y=function(){return Object(j.jsx)("h1",{className:"Loader",children:"It's gonna be legen... wait for it ...dary. Legendary!"})},O=function(e){var t=e.onClickButton;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),Object(j.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})},v=document.querySelector("#modal-root"),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(j.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:"Modal",children:Object(j.jsx)("img",{src:this.props.image,alt:""})})}),v)}}]),a}(n.Component),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchQuery:"",currentPage:1,error:null,imageForModal:"",showModal:!1,isLoading:!1},e.onChangeQuery=function(t){e.setState({images:[],searchQuery:t,currentPage:1,error:null})},e.fetchImages=function(){var t=e.state,a={searchQuery:t.searchQuery,currentPage:t.currentPage};e.setState({isLoading:!0}),g(a).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.toggleModal=function(t){e.setState((function(e){var a=e.showModal;return{imageForModal:a?"":t,showModal:!a}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.error,n=e.imageForModal,r=e.isLoading,c=t.length>0&&!r;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{onSubmit:this.onChangeQuery}),a&&Object(j.jsx)("h1",{className:"Error",children:"Oops, something went wrong..."}),Object(j.jsx)(f,{images:t,onClickImage:this.toggleModal}),r&&Object(j.jsx)(y,{}),c&&Object(j.jsx)(O,{onClickButton:this.fetchImages})]}),n&&Object(j.jsx)(w,{image:n,onClose:this.toggleModal})]})}}]),a}(n.Component);a(42),a(43);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b728d6ec.chunk.js.map