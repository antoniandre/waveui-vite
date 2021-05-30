import{o as e,c as t,a as o,w as s,d as n,f as l,r as a,G as r,s as i,B as c,A as p,q as d,b as u,T as y}from"./vendor.66ab2837.js";const m=o("p",null,[n("By default the overlay has a "),o("span",{class:"code"},"0.3"),n(" opacity with a black color and a z-index\nof "),o("span",{class:"code"},"500"),n("."),o("br"),n("\nIt is very easy to overrides these defaults via CSS, but you can also pass them as\nparameters to the "),o("span",{class:"code"},"w-overlay"),n(".\n")],-1),h=n("Overlay with custom opacity and control on "),v=o("span",{class:"code"},"persistent",-1),w=o("p",null,"When the overlay is persistent, it will not close on click and on escape key.",-1),b=o("p",null,"When persistent is set to false and by default, the escape key will also close the overlay.",-1),k=n("Show overlay"),f=o("div",{class:"title4"},"Options",-1),g={class:"code white"},O={class:"code white"},A=n("wi-cross"),_=n("Hide overlay"),x=n("data: () => ({\n  showOverlay: false,\n  opacity: 0.3,\n  persistent: false,\n  persistentNoAnimation: false\n})\n"),B=n("Overlay with custom background color"),C=n("Show a blue overlay"),V=n("wi-cross"),N=n("Hide overlay"),S=n('<w-button\n  bg-color="primary"\n  dark\n  @click="showOverlay = true">\n  Show a blue overlay\n</w-button>\n\n<w-overlay\n  v-model="showOverlay"\n  bg-color="rgba(35, 71, 129, 0.4)">\n  <w-button\n    bg-color="primary"\n    lg\n    dark\n    @click="showOverlay = false">\n    <w-icon class="mr2">wi-cross</w-icon>\n    Hide overlay\n  </w-button>\n</w-overlay>'),z=n("data: () => ({\n  showOverlay: false\n})\n"),I=n("CSS backdrop filter"),E=o("p",null,[n("The backdrop filter is\n"),o("a",{href:"https://caniuse.com/css-backdrop-filter",target:"_blank"},"not supported on all the browsers"),n("\nyet but very nice.")],-1),T=n(".w-overlay {backdrop-filter: blur(10px);}"),U=n("Show a blur backdrop"),$=n("wi-cross"),H=n("Hide overlay");const W={data:()=>({showOverlay:!1,showBlueOverlay:!1,showBlurBackdropOverlay:!1,opacity:.3,persistent:!1,persistentNoAnimation:!1})};W.render=function(r,i,c,p,d,u){const y=a("title-link"),W=a("w-button"),j=a("w-divider"),D=a("w-input"),P=a("w-flex"),R=a("w-icon"),M=a("w-overlay"),q=a("example"),G=a("ssh-pre");return e(),t("div",null,[m,o(y,{h2:""},{default:s((()=>[h,v])),_:1}),w,b,o(q,null,{html:s((()=>[n('<w-flex wrap>\n  <w-button bg-color="primary" dark @click="showOverlay = true">\n    Show overlay\n  </w-button>\n\n  <w-divider\n    class="mx6"\n    vertical\n    color="grey-light4">\n  </w-divider>\n\n  <div>\n    <div class="title4">Options</div>\n    <w-button\n      class="mr2"\n      bg-color="primary-light1"\n      :class="persistent ? \'pr4\' : \'\'"\n      @click="persistent = !persistent"\n      sm\n      dark>\n      :persistent="'+l(r.persistent)+'"\n    </w-button>\n\n    <w-button\n      bg-color="primary-light1"\n      @click="persistentNoAnimation = !persistentNoAnimation"\n      :disabled="!persistent"\n      sm\n      dark>\n      :persistent-no-animation="'+l(r.persistentNoAnimation)+'"\n    </w-button>\n\n    <w-input\n      class="mt2 d-block"\n      v-model="opacity"\n      outline\n      type="number"\n      label="Overlay opacity"\n      label-position="left"\n      step="0.1"\n      min="0"\n      max="1">\n    </w-input>\n  </div>\n</w-flex>\n\n<w-overlay\n  v-model="showOverlay"\n  :persistent="persistent"\n  :persistent-no-animation="persistentNoAnimation"\n  :opacity="opacity">\n  <w-button\n    bg-color="primary"\n    lg\n    dark\n    @click="showOverlay = false">\n    <w-icon class="mr2">wi-cross</w-icon>\n    Hide overlay\n  </w-button>\n</w-overlay>',1)])),js:s((()=>[x])),default:s((()=>[o(P,{wrap:""},{default:s((()=>[o(W,{class:"my2","bg-color":"primary",dark:"",onClick:i[1]||(i[1]=e=>r.showOverlay=!0)},{default:s((()=>[k])),_:1}),o(j,{class:"mx6",vertical:"",color:"grey-light4"}),o("div",null,[f,o(W,{class:["d-block mr2",r.persistent?"pr4":""],"bg-color":"primary-light1",onClick:i[2]||(i[2]=e=>r.persistent=!r.persistent),sm:"",dark:""},{default:s((()=>[o("div",g,':persistent="'+l(r.persistent)+'"',1)])),_:1},8,["class"]),o(W,{class:"d-block mt2","bg-color":"primary-light1",onClick:i[3]||(i[3]=e=>r.persistentNoAnimation=!r.persistentNoAnimation),disabled:!r.persistent,sm:"",dark:""},{default:s((()=>[o("div",O,':persistent-no-animation="'+l(r.persistentNoAnimation)+'"',1)])),_:1},8,["disabled"]),o(D,{class:"mt2 d-block",modelValue:r.opacity,"onUpdate:modelValue":i[4]||(i[4]=e=>r.opacity=e),outline:"",type:"number",label:"Overlay opacity","label-position":"left",step:"0.1",min:"0",max:"1"},null,8,["modelValue"])])])),_:1}),o(M,{modelValue:r.showOverlay,"onUpdate:modelValue":i[6]||(i[6]=e=>r.showOverlay=e),persistent:r.persistent,"persistent-no-animation":r.persistentNoAnimation,opacity:r.opacity},{default:s((()=>[o(W,{"bg-color":"primary",lg:"",dark:"",onClick:i[5]||(i[5]=e=>r.showOverlay=!1)},{default:s((()=>[o(R,{class:"mr2"},{default:s((()=>[A])),_:1}),_])),_:1})])),_:1},8,["modelValue","persistent","persistent-no-animation","opacity"])])),_:1}),o(y,{h2:""},{default:s((()=>[B])),_:1}),o(q,{"content-class":"w-flex align-center"},{html:s((()=>[S])),js:s((()=>[z])),default:s((()=>[o(W,{"bg-color":"primary",dark:"",onClick:i[7]||(i[7]=e=>r.showBlueOverlay=!0)},{default:s((()=>[C])),_:1}),o(M,{modelValue:r.showBlueOverlay,"onUpdate:modelValue":i[9]||(i[9]=e=>r.showBlueOverlay=e),"bg-color":"rgba(35, 71, 129, 0.4)"},{default:s((()=>[o(W,{"bg-color":"primary",lg:"",dark:"",onClick:i[8]||(i[8]=e=>r.showBlueOverlay=!1)},{default:s((()=>[o(R,{class:"mr2"},{default:s((()=>[V])),_:1}),N])),_:1})])),_:1},8,["modelValue"])])),_:1}),o(y,{h2:""},{default:s((()=>[I])),_:1}),E,o(G,{language:"css"},{default:s((()=>[T])),_:1}),o(W,{"bg-color":"primary",dark:"",onClick:i[10]||(i[10]=e=>r.showBlurBackdropOverlay=!0)},{default:s((()=>[U])),_:1}),o(M,{class:"blur-backdrop",modelValue:r.showBlurBackdropOverlay,"onUpdate:modelValue":i[12]||(i[12]=e=>r.showBlurBackdropOverlay=e)},{default:s((()=>[o(W,{"bg-color":"primary",lg:"",dark:"",onClick:i[11]||(i[11]=e=>r.showBlurBackdropOverlay=!1)},{default:s((()=>[o(R,{class:"mr2"},{default:s((()=>[$])),_:1}),H])),_:1})])),_:1},8,["modelValue"])])};const j={name:"w-overlay",props:{modelValue:{},opacity:{type:[Number,String,Boolean]},bgColor:{type:String},zIndex:{type:[Number,String,Boolean]},persistent:{type:Boolean},persistentNoAnimation:{type:Boolean}},emits:["input","update:modelValue","click","close"],data:()=>({persistentAnimate:!1}),computed:{backgroundColor(){return this.bgColor||this.opacity&&`rgba(0, 0, 0, ${this.opacity})`||!1},classes(){return{"w-overlay--persistent-animate":this.persistentAnimate}},styles(){return{backgroundColor:this.backgroundColor,zIndex:!(!this.zIndex&&0!==this.zIndex)&&this.zIndex}}},methods:{onClick(e){e.target.classList.contains("w-overlay")&&(this.persistent&&!this.persistentNoAnimation?(this.persistentAnimate=!0,setTimeout((()=>this.persistentAnimate=!1),150)):this.persistent||(this.$emit("update:modelValue",!1),this.$emit("input",!1),this.$emit("close",!1)),this.$emit("click",e))}},render:function(o,n,l,a,m,h){const v=r("focus");return e(),t(y,{name:"fade",mode:"out-in",appear:""},{default:s((()=>[l.modelValue?i((e(),t("div",{key:0,class:["w-overlay",h.classes],style:l.modelValue&&h.styles||null,onKeydown:n[1]||(n[1]=c(p(((...e)=>h.onClick&&h.onClick(...e)),["stop"]),["escape"])),onClick:n[2]||(n[2]=(...e)=>h.onClick&&h.onClick(...e)),tabindex:"0"},[d(o.$slots,"default")],38)),[[v]]):u("",!0)])),_:3})}},D=o("div",{class:"w-divider my12"},null,-1),P=n("API");const R={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the overlay. Any truthy value will show the overlay whereas any falsy value will hide it.',opacity:"Sets a custom opacity on the overlay.",bgColor:'Applies a color to the overlay\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',zIndex:"Applies a z-index (positive or negative integer) to the overlay.",persistent:"When set to true, clicking outside of the overlay or pressing the escape key will not close the overlay.<br>A bounce animation will give the user a feedback that the overlay content needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the overlay or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user)."},M={default:{description:"The overlay content, if any."}},q={input:{description:"Emitted on overlay hide (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},"update:modelValue":{description:"Emitted on overlay hide (a click on overlay doesn't trigger this event if <code>persistent</code>).<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},close:{description:"Emitted on overlay hide (a click on overlay doesn't trigger this event if <code>persistent</code>).",params:{"[Boolean]":"Represents the open state of the overlay: false on overlay close."}},click:{description:"Emitted on every overlay click. Whether the <code>persistent</code> prop is set to true or false.",params:{"[DOM event object]":"The associated click DOM event."}}},G={data:()=>({propsDescs:R,slots:M}),computed:{props:()=>j.props,events:()=>j.emits.reduce(((e,t)=>(e[t]=q[t]||{})&&e),{})},render:function(n,l,r,i,c,p){const d=a("title-link"),u=a("component-api");return e(),t("div",null,[D,o(d,{class:"title1",h2:""},{default:s((()=>[P])),_:1}),o(u,{class:"mt0",items:p.props,descriptions:n.propsDescs,title:"Props"},null,8,["items","descriptions"]),o(u,{items:n.slots,title:"Slots"},null,8,["items"]),o(u,{items:p.events,title:"Events"},null,8,["items"])])}},K=n("w-overlay");const L={components:{Examples:W,Api:G},render:function(n,l,r,i,c,p){const d=a("ui-component-title"),u=a("examples"),y=a("api");return e(),t("main",null,[o(d,null,{default:s((()=>[K])),_:1}),o(u),o(y)])}};export default L;