import{o as e,c as a,a as t,w as i,d as n,f as s,b as l,g as o,r,e as d,T as h,q as g}from"./vendor.66ab2837.js";import{c}from"./console.e8b28bea.js";const m=n("Why using w-image and not a simple <img>"),u=o('<div class="title3">A simple &lt;img&gt;</div><p>will display when loaded, and will take the dimensions of the actual image.<br>\nWhen the image has a large file size, it will be loaded in chunks, and the image will be displayed\ntruncated until completely loaded.<br><br>\nIf ever it fails to load a broken image icon will display instead (different on every browser).<br></p><div class="title3">The w-image</div><p>can show a spinner while the image is loading, and display the image all at once with a nice\nanimation (like fade-in) when the iamge is ready.<br>\nIt also allows you to set a fallback image in case the provided image might be unfound (convenient with\ndynamic sources).<br>\nIf ever no image is found, <strong class="code">w-image</strong> will handle the error gracefully and will emit a\n<code>@error</code> event containing the error. A blank transparent image will be displayed in place of the\nimage itself. So that, nothing looks broken.\n</p>',4),p=n("Default"),w=t("p",null,"With no given width, height or ratio, the image is loaded full-size.",-1),b=n('<w-image :src="`${baseUrl}images/favicon.png`"></w-image>'),f=n("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+s("import")+".meta.env.BASE_URL`,\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n"),v=n("Given dimensions"),y=n('<w-image\n  class="mr5"\n  :src="`${baseUrl}images/japanese-wave.png`"\n  :width="150"\n  :height="150">\n</w-image>\n<w-image\n  :src="`${baseUrl}images/japanese-wave.png`"\n  :width="500"\n  :height="150">\n</w-image>'),k=n("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+s("import")+".meta.env.BASE_URL`,\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n"),S=n("Image ratio"),U=t("p",null,[n("You may want to have a responsive image. By setting an image ratio (height / width) and a width\nto 100% the image will always keep the ratio while resizing."),t("br"),n("\nIf no "),t("code",null,"width"),n(" or "),t("code",null,"height"),n(" is set but a "),t("code",null,"ratio"),n(" is given, the "),t("code",null,"width"),n(" will\nbe set to 100%.")],-1),_=n('<w-image\n  :src="`${baseUrl}images/japanese-wave.png`"\n  :ratio="233 / 1000">\n</w-image>'),x=n("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+s("import")+".meta.env.BASE_URL`,\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n"),R=n("Using the <img> tag"),$=o('<p>You can choose which tag the <strong class="code">w-image</strong> should use.<br>\nIf you use an <code>img</code> tag, the image will behave exactly like a standard image.\nThe biggest benefit of that, is that you can set a <code>width</code> or <code>height</code> only, keep a ratio,\nand apply a <code>max-width</code> or <code>max-height</code> on top of that so if the image would be bigger\nthan the container it would still apply the ratio on the constrained image.\n</p>',1),j=n('<w-image\n  :src="`${baseUrl}images/japanese-wave.png`"\n  width="100%"\n  tag="img"\n  style="max-width: 700px">\n</w-image>'),I=n("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+s("import")+".meta.env.BASE_URL`,\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n"),T=n("Loading spinner"),W=t("p",null,"This image is very big, so that you have time to see the spinner while loading.\nRefresh the page if you haven't seen it!",-1),E=n('<w-image\n  :src="`${baseUrl}images/spirit-island--alberta.png`"\n  width="100%"\n  :ratio="1 / 2">\n</w-image>'),L=n("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+s("import")+".meta.env.BASE_URL`,\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})"),B=t("strong",null,"Dev notes:",-1),A=n(" disabling the browser cache will prevent you from seeing the transition."),C=t("br",null,null,-1),V=n("\nThe reason for it is that the image first loads in the "),z=t("strong",{class:"code"},"w-image",-1),O=n(" component, then\nonce it's fully loaded, the image src is filled (or background url) and the image would load again\nif you disable the cache. On big images, you would then see a truncated image until completely\nloaded, just like a standard <img>.\n"),G=n("Transitions"),D=t("p",null,"Once the image is fully loaded, it will display in one piece with a fade transition by default.\nYou can customize the transition.",-1),H={class:"w-flex wrap justify-center align-center"},N={class:"mr4 my2"},P=t("div",{class:"title3 mb2"},"Transition names",-1),F=n("Reload image"),Y=n("data: () => ({\n  img: {\n    initialSrc: 'https://antoniandre.github.io/wave-ui/images/spirit-island--alberta.png',\n    src: 'https://antoniandre.github.io/wave-ui/images/spirit-island--alberta.png',\n    transition: 'fade'\n  },\n  transitions: [\n    { label: 'fade' },\n    { label: 'slide-fade-up' },\n    { label: 'slide-fade-down' },\n    { label: 'slide-fade-left' },\n    { label: 'slide-fade-right' },\n    { label: 'scale' },\n    { label: 'scale-fade' },\n    { label: 'bounce' },\n    { label: 'twist' },\n    { label: 'none', value: '' }\n  ]\n}),\nmethods: {\n  reload () {\n    this.img.src = ''\n    setTimeout(() => this.img.src = this.img.initialSrc, 500)\n  }\n}"),M=t("strong",null,"Dev notes:",-1),q=n(" disabling the browser cache will prevent you from seeing the transition."),J=t("br",null,null,-1),K=n("\nThe reason for it is that the image first loads in the "),Q=t("strong",{class:"code"},"w-image",-1),X=n(" component, then\nonce it's fully loaded, the image src is filled (or background url) and the image would load again\nif you disable the cache. On big images, you would then see a truncated image until completely\nloaded, just like a standard <img>.\n"),Z=n("Fallback"),ee=t("p",null,[n("The default fallback is a blank 1x1 transparent gif. So if the image can't load, a transparent\nbackground will be there instead preventing the browser's broken image logo."),t("br"),n("\nYou can also provide a custom fallback image to display if the image cannot load."),t("br"),n("\nFor instance, in a e-boutique you may try to load the image of an item without knowing if this item\nhas an available image or not."),t("br"),t("br"),n("\nThanks to the "),t("code",null,"error"),n(" emitted event, you can trigger a specific action, such as displaying an\nerror message like in this example. But this is optional, and without the custom alert nothing would\nlook broken when you provide a valid fallback image!")],-1),ae=n("Oops. The image could not load!"),te=n('<w-image\n  :src="`${baseUrl}images/broken.png`"\n  :fallback="`${baseUrl}images/not-found.jpg`"\n  @error="showError = true">\n</w-image>\n\n<w-alert\n  v-if="showError"\n  error>\n  Oops. The image could not load!\n</w-alert>'),ie=n("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+s("import")+".meta.env.BASE_URL`,\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/',\n  showError: false\n})\n"),ne=n("Lazy"),se=t("p",null,[n("By using the lazy attribute, it is possible to load the image only when it is in the viewport."),t("br"),n("\nWave UI internally uses an IntersectionObserver and will only start loading the image when it is\nvisible.")],-1),le=n('<w-image\n  :src="`${baseUrl}images/spirit-island--alberta.png`"\n  lazy\n  :ratio="2550 / 5098">\n</w-image>'),oe=n("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+s("import")+".meta.env.BASE_URL`,\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n"),re=n("Content - via default slot"),de=t("p",null,[n("In some cases, it can be convenient to have some content on top of the image."),t("br"),n("\nBy default the content will be horizontally and vertically centered, but you could easily align it\nat the bottom left for instance, with the attribute "),t("code",null,'content-class="align-end justify-start pa2"'),n(".")],-1),he=t("span",{class:"title1 pink"},"Wave UI",-1),ge=n('<w-image\n  :src="`${baseUrl}images/japanese-wave.png`"\n  :ratio="2550 / 5098">\n  <span class="title1 pink">Wave UI</span>\n</w-image>'),ce=n("data: () => ({\n  // With Webpack or Vue CLI, you can also use `"+s("process")+".env.BASE_URL`,\n  // or with Vite, you can also use `"+s("import")+".meta.env.BASE_URL`,\n  // if the image is in the public/ folder.\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})");const me={data:()=>({baseUrl:"/waveui-vite/",img:{initialSrc:"/waveui-vite/images/spirit-island--alberta.png",src:"/waveui-vite/images/spirit-island--alberta.png",transition:"fade"},transitions:[{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"},{label:"twist"},{label:"none",value:""}],showError:!1}),methods:{reload(){this.img.src="",setTimeout((()=>this.img.src=this.img.initialSrc),500)}},render:function(o,d,h,g,c,me){const ue=r("title-link"),pe=r("w-image"),we=r("example"),be=r("alert"),fe=r("w-radios"),ve=r("w-button"),ye=r("w-alert");return e(),a("div",null,[t(ue,{h2:""},{default:i((()=>[m])),_:1}),u,t(ue,{h2:""},{default:i((()=>[p])),_:1}),w,t(we,{"content-class":"text-center"},{html:i((()=>[b])),js:i((()=>[f])),default:i((()=>[t(pe,{src:`${o.baseUrl}images/favicon.png`},null,8,["src"])])),_:1}),t(ue,{h2:""},{default:i((()=>[v])),_:1}),t(we,{"content-class":"text-center w-flex justify-space-around wrap"},{html:i((()=>[y])),js:i((()=>[k])),default:i((()=>[t(pe,{class:"mr5",src:`${o.baseUrl}images/japanese-wave.png`,width:150,height:150},null,8,["src"]),t(pe,{src:`${o.baseUrl}images/japanese-wave.png`,width:500,height:150},null,8,["src"])])),_:1}),t(ue,{h2:""},{default:i((()=>[S])),_:1}),U,t(we,{"content-class":"text-center"},{html:i((()=>[_])),js:i((()=>[x])),default:i((()=>[t(pe,{src:`${o.baseUrl}images/japanese-wave.png`,ratio:.233},null,8,["src"])])),_:1}),t(ue,{h2:"",slug:"using-the-img-tag"},{default:i((()=>[R])),_:1}),$,t(we,{"content-class":"text-center"},{html:i((()=>[j])),js:i((()=>[I])),default:i((()=>[t(pe,{src:`${o.baseUrl}images/japanese-wave.png`,width:"100%",tag:"img",style:{"max-width":"700px"}},null,8,["src"])])),_:1}),t(ue,{h2:""},{default:i((()=>[T])),_:1}),W,t(we,{"content-class":"text-center"},{html:i((()=>[E])),js:i((()=>[L])),default:i((()=>[t(pe,{src:`${o.baseUrl}images/spirit-island--alberta.png`,width:"100%",ratio:.5},null,8,["src"])])),_:1}),t(be,{tip:""},{default:i((()=>[B,A,C,V,z,O])),_:1}),t(ue,{h2:""},{default:i((()=>[G])),_:1}),D,t(we,null,{html:i((()=>[n('<div class="w-flex wrap justify-center align-center">\n  <div class="mr4 my2">\n    <div class="title3 mb2">\n      Transition names\n    </div>\n    <w-radios\n      v-model="img.transition"\n      :items="transitions"\n      item-value-key="label">\n      <template #label="{ item }">\n        <code>\n          '+s("{{ item.label }}")+'\n        </code>\n      </template>\n    </w-radios>\n    <w-button\n      class="mt2"\n      @click="reload">\n      Reload image\n    </w-button>\n  </div>\n\n  <w-image\n    :src="img.src"\n    :width="500"\n    :height="250"\n    :transition="img.transition">\n  </w-image>\n</div>',1)])),js:i((()=>[Y])),default:i((()=>[t("div",H,[t("div",N,[P,t(fe,{modelValue:o.img.transition,"onUpdate:modelValue":d[1]||(d[1]=e=>o.img.transition=e),items:o.transitions,"item-value-key":"label"},{label:i((({item:e})=>[t("code",null,s(e.label),1)])),_:1},8,["modelValue","items"]),t(ve,{class:"mt2",onClick:me.reload},{default:i((()=>[F])),_:1},8,["onClick"])]),t(pe,{src:o.img.src,width:500,height:250,transition:o.img.transition},null,8,["src","transition"])])])),_:1}),t(be,{tip:""},{default:i((()=>[M,q,J,K,Q,X])),_:1}),t(ue,{h2:""},{default:i((()=>[Z])),_:1}),ee,t(we,{"content-class":"text-center"},{html:i((()=>[te])),js:i((()=>[ie])),default:i((()=>[t(pe,{src:`${o.baseUrl}images/broken.png`,fallback:`${o.baseUrl}images/not-found.jpg`,onError:d[2]||(d[2]=e=>o.showError=!0)},null,8,["src","fallback"]),o.showError?(e(),a(ye,{key:0,error:""},{default:i((()=>[ae])),_:1})):l("",!0)])),_:1}),t(ue,{h2:""},{default:i((()=>[ne])),_:1}),se,t(we,null,{html:i((()=>[le])),js:i((()=>[oe])),default:i((()=>[t(pe,{src:`${o.baseUrl}images/spirit-island--alberta.png?v1`,lazy:"",ratio:2550/5098},null,8,["src"])])),_:1}),t(ue,{h2:"",slug:"content"},{default:i((()=>[re])),_:1}),de,t(we,null,{html:i((()=>[ge])),js:i((()=>[ce])),default:i((()=>[t(pe,{src:`${o.baseUrl}images/japanese-wave.png`,ratio:2550/5098},{default:i((()=>[he])),_:1},8,["src"])])),_:1})])}},ue={key:0,class:"w-image__loader"};const pe={name:"w-image",props:{tag:{type:String,default:"span"},src:{type:String},width:{type:[Number,String]},height:{type:[Number,String]},ratio:{type:[Number,String]},lazy:{type:Boolean},absolute:{type:Boolean},fixed:{type:Boolean},contain:{type:Boolean},noSpinner:{type:Boolean},fallback:{type:String},transition:{type:String,default:"fade"},contentClass:{type:[String,Array,Object]}},emits:["loading","loaded","error"],data(){return{loading:!1,loaded:!1,imgSrc:"",imgWidth:this.width||0,imgHeight:this.height||0,imgComputedRatio:0}},computed:{imgGivenRatio(){return parseFloat(this.ratio)},wrapperTag(){return["span","div"].includes(this.tag)?this.tag:"span"},wrapperClasses(){return{"w-image-wrap--absolute":this.absolute,"w-image-wrap--fixed":this.fixed,"w-image-wrap--has-ratio":this.imgGivenRatio}},wrapperStyles(){return{width:this.imgGivenRatio?null:(isNaN(this.imgWidth)?this.imgWidth:`${this.imgWidth}px`)||null,height:this.imgGivenRatio||"img"===this.tag?null:(isNaN(this.imgHeight)?this.imgHeight:`${this.imgHeight}px`)||null,"padding-bottom":this.imgGivenRatio&&100*this.imgGivenRatio+"%"}},imageClasses(){return{"w-image--loading":this.loading,"w-image--loaded":this.loaded,"w-image--contain":this.contain}},imageStyles(){return{"background-image":"img"!==this.tag&&this.loaded?`url('${this.imgSrc}')`:null}}},methods:{loadImage(e=!1){if(!this.loading)return this.loading=!0,this.loaded=!1,this.$emit("loading",e?this.fallback:this.src),new Promise((a=>{const t=new Image;t.onload=i=>(this.width||this.height||this.imgGivenRatio||(this.imgWidth=i.target.width,this.imgHeight=i.target.height),this.imgComputedRatio=i.target.height/i.target.width,this.loading=!1,this.loaded=!0,this.imgSrc=e?this.fallback:this.src,this.$emit("loaded",this.imgSrc),a(t)),t.onerror=a=>{this.$emit("error",a),this.fallback&&!e?(this.loading=!1,this.loadImage(!0)):(this.loading=!1,this.loaded=!1)},t.src=e?this.fallback:this.src}))}},mounted(){if(!this.src)return c("The w-image component was used without src.");if(this.lazy){const e=new IntersectionObserver((a=>{a[0]&&a[0].isIntersecting&&(this.loadImage(),e.disconnect())}),this.intersectionConfig);e.observe(this.$el)}else this.loadImage()},watch:{src(){this.loadImage()},width(e){this.imgWidth=e},height(e){this.imgHeight=e}},render:function(n,s,o,c,m,u){const p=r("w-progress");return e(),a(d(u.wrapperTag),{class:["w-image-wrap",u.wrapperClasses],style:u.wrapperStyles},{default:i((()=>[t(h,{name:o.transition,appear:""},{default:i((()=>[m.loaded?(e(),a(d(o.tag),{key:0,class:["w-image",u.imageClasses],style:u.imageStyles,src:"img"===o.tag?m.imgSrc:null},null,8,["class","style","src"])):l("",!0)])),_:1},8,["name"]),!o.noSpinner&&m.loading?(e(),a("div",ue,[n.$slots.loading?g(n.$slots,"loading",{key:0}):(e(),a(p,{key:1,circle:"",indeterminate:""}))])):l("",!0),n.$slots.default?(e(),a(d(u.wrapperTag),{key:1,class:["w-image__content",o.contentClass]},{default:i((()=>[g(n.$slots,"default")])),_:3},8,["class"])):l("",!0)])),_:3},8,["class","style"])}},we=t("div",{class:"w-divider my12"},null,-1),be=n("API");const fe={tag:'Tells which tag to use for the <strong class="code">w-image</strong>\'s image. It can be any valid HTML tag, like &lt;span&gt; or &lt;div&gt;. The wrapper of the image will use a &lt;span&gt; tag unless you use set the <code>tag</code> to div.<br><br>If you use the <code>img</code> tag, the image itself will use the &lt;img&gt; tag and the wrapper will use a &lt;span&gt; tag. The image will have a particular behavior as explained in the <a href="#using-the-img-tag">Using the &lt;img&gt; tag</a> example.',src:"The source of the image to display.",width:"Sets the width of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.",height:"Sets the height of the image.<br>Accepts a string made of a value and a unit (e.g. <code>10em</code>) or a number (e.g. <code>450</code>) that will be a pixel value.",ratio:'Sets the ratio of the image, allowing to only define a width or a height and preserve the image aspect ratio while resizing. Refer to the <a href="#ratio">Ratio</a> example.',lazy:'When set to true, the image will only load when it starts being visible in the viewport.<br>Refer to the <a href="#lazy">Lazy</a> example.',absolute:"Sets the CSS position of the image to <code>absolute</code>.",fixed:"Sets the CSS position of the image to <code>fixed</code>.",contain:'By default the <strong class="code">w-image</strong> component uses a background to display the image, and it sets the <span class="code">background-size</span> to "<span class="code">cover</span>". This option will set the <span class="code">background-size</span> to "<span class="code">contain</span>".',noSpinner:"Removes the default spinner while the image is loading.",fallback:'Provides a fallback image, to display when the given image source is not found. Refer to the <a href="#fallback">Fallback</a> example.',transition:'Applies a particular transition to display the image when it is fully loaded.<br>Check all the transitions that apply to the notification in the <a href="#transitions">Transitions</a> example. Refer to the <a href="#transitions">transitions</a> example.',contentClass:"Applies the given classes to the content wrapper when using the <code>default</code> slot."},ve={default:{description:"Provide a custom content, to display on top of the image."},loading:{description:"Provide a custom loading content, if the default spinner doesn't suit in your app."}},ye={error:{description:"Emitted on image load error.",params:{"[DOM event]":"The associated DOM event."}},loaded:{description:"Emitted on image successful load.",params:{String:"The image source that was successfully loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> failed)."}},loading:{description:"Emitted when the image starts loading.",params:{String:"The image source that is being loaded (can be the provided <code>src</code> or <code>fallback</code> if the <code>src</code> already failed)."}}},ke={data:()=>({propsDescs:fe,slots:ve}),computed:{props:()=>pe.props,events:()=>pe.emits.reduce(((e,a)=>(e[a]=ye[a]||{})&&e),{})},render:function(n,s,l,o,d,h){const g=r("title-link"),c=r("component-api");return e(),a("div",null,[we,t(g,{class:"title1",h2:""},{default:i((()=>[be])),_:1}),t(c,{class:"mt0",items:h.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),t(c,{items:n.slots,title:"Slots"},null,8,["items"]),t(c,{items:h.events,title:"Events"},null,8,["items"])])}},Se=n("w-image");const Ue={components:{Examples:me,Api:ke},render:function(n,s,l,o,d,h){const g=r("ui-component-title"),c=r("examples"),m=r("api");return e(),a("main",null,[t(g,{slug:"w-image"},{default:i((()=>[Se])),_:1}),t(c),t(m)])}};export default Ue;