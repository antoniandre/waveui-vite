import{o as e,c as s,a as n,w as t,d as o,g as l,r as i,b as r}from"./vendor.66ab2837.js";const a=n("p",null,[o("If you want a different style than the "),n("span",{class:"code"},"w-progress"),o(" component, the spinner is a light\nalternative that you can easily use anywhere.\n")],-1),c=o("Three dots (default)"),d=o("<w-spinner />\n"),p=o("Fade"),u=o("<w-spinner fade />\n"),h=o("Bounce"),f=o("<w-spinner bounce />\n"),m=o("Value or v-model"),w=n("p",null,[o("Both the "),n("code",null,"value"),o(" and "),n("code",null,"v-model"),o(" will control the spinner visibility, but there is not\nmuch point in using a "),n("code",null,"v-model"),o(" here as the spinner will never emit a value update.")],-1),v=o("Toggle spinner"),y=o('<w-button @click="showSpinner = !showSpinner">Toggle spinner</w-button>\n<w-spinner :value="showSpinner" />'),g=o("data: () => ({\n  showSpinner: false\n})\n"),b=o("Sizes"),x=l("<p>The spinner size can be controlled via the preset sizes <code>xs</code>, <code>sm</code>, <code>md</code>,\n<code>lg</code>, <code>xl</code>, or explicit <code>size</code> prop.</p>",1),S=o('<w-spinner fade xs />\n<w-spinner fade sm />\n<w-spinner fade md />\n<w-spinner fade lg />\n<w-spinner fade xl />\n<w-spinner fade size="5em" />\n'),z=o("Colors"),_=n("p",null,[o("Like in most components, you can set a "),n("code",null,"color"),o(" for the spinner.")],-1),k=o('<w-spinner fade color="green" />\n<w-spinner fade color="amber" />\n<w-spinner fade color="orange" />\n<w-spinner fade color="error" />\n<w-spinner fade color="pink" />');const B={data:()=>({showSpinner:!1}),render:function(o,l,r,B,T,j){const A=i("title-link"),D=i("w-spinner"),I=i("example"),N=i("w-button");return e(),s("div",null,[a,n(A,{h2:""},{default:t((()=>[c])),_:1}),n(I,{"content-class":"w-flex justify-center"},{html:t((()=>[d])),default:t((()=>[n(D)])),_:1}),n(A,{h2:""},{default:t((()=>[p])),_:1}),n(I,{"content-class":"w-flex justify-center"},{html:t((()=>[u])),default:t((()=>[n(D,{fade:""})])),_:1}),n(A,{h2:""},{default:t((()=>[h])),_:1}),n(I,{"content-class":"w-flex justify-center"},{html:t((()=>[f])),default:t((()=>[n(D,{bounce:""})])),_:1}),n(A,{h2:""},{default:t((()=>[m])),_:1}),w,n(I,{"content-class":"w-flex"},{html:t((()=>[y])),js:t((()=>[g])),default:t((()=>[n(N,{class:"mr2",onClick:l[1]||(l[1]=e=>o.showSpinner=!o.showSpinner)},{default:t((()=>[v])),_:1}),n(D,{value:o.showSpinner},null,8,["value"])])),_:1}),n(A,{h2:""},{default:t((()=>[b])),_:1}),x,n(I,{"content-class":"w-flex justify-center"},{html:t((()=>[S])),default:t((()=>[n(D,{class:"ma1",fade:"",xs:""}),n(D,{class:"ma1",fade:"",sm:""}),n(D,{class:"ma1",fade:"",md:""}),n(D,{class:"ma1",fade:"",lg:""}),n(D,{class:"ma1",fade:"",xl:""}),n(D,{class:"ma1",fade:"",size:"5em"})])),_:1}),n(A,{h2:""},{default:t((()=>[z])),_:1}),_,n(I,{"content-class":"w-flex justify-center"},{html:t((()=>[k])),default:t((()=>[n(D,{class:"ma1",fade:"",color:"green"}),n(D,{class:"ma1",fade:"",color:"amber"}),n(D,{class:"ma1",fade:"",color:"orange"}),n(D,{class:"ma1",fade:"",color:"error"}),n(D,{class:"ma1",fade:"",color:"pink"})])),_:1})])}},T={key:0};const j={name:"w-spinner",props:{value:{},color:{type:String,default:"primary"},xs:{type:Boolean},sm:{type:Boolean},md:{type:Boolean},lg:{type:Boolean},xl:{type:Boolean},size:{type:[Number,String]},bounce:{type:Boolean},fade:{type:Boolean}},emits:[],computed:{isThreeDots(){return!this.bounce&&!this.fade},forcedSize(){return this.size&&(isNaN(this.size)?this.size:`${this.size}px`)},presetSize(){return(this.xs?"xs":this.sm&&"sm")||this.md&&"md"||this.lg&&"lg"||this.xl&&"xl"||null},styles(){return this.forcedSize&&`font-size: ${this.forcedSize}`||null},classes(){return{[this.color]:this.color,[`size--${this.presetSize}`]:this.presetSize&&!this.forcedSize,"w-spinner--bounce":this.bounce,"w-spinner--fade":this.fade,"w-spinner--three-dots":this.isThreeDots}}},render:function(n,t,o,l,i,a){return o.value||void 0===o.value?(e(),s("div",{key:0,class:["w-spinner",a.classes],style:a.styles},[a.isThreeDots?(e(),s("span",T)):r("",!0)],6)):r("",!0)}},A=n("div",{class:"w-divider my12"},null,-1),D=o("API");const I={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>The <code>value</code> or <code>v-model</code> controls the visibility of the spinner. Any truthy value will show the spinner whereas any falsy value will hide it. If no value/v-model or <code>undefined</code> is provided, the spinner will be visible.',color:'Sets the color of the spinner.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',xs:"Sets the size of the spinner.",sm:"Sets the size of the spinner.",md:"Sets the size of the spinner.",lg:"Sets the size of the spinner.",xl:"Sets the size of the spinner.",size:"Sets the size of the spinner. Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",bounce:"Sets the style of the spinner.",fade:"Sets the style of the spinner."},N={},P={},$={data:()=>({propsDescs:I,slots:N}),computed:{props:()=>j.props,events:()=>j.emits.reduce(((e,s)=>(e[s]={description:P[s]||""})&&e),{})},render:function(o,l,r,a,c,d){const p=i("title-link"),u=i("component-api");return e(),s("div",null,[A,n(p,{class:"title1",h2:""},{default:t((()=>[D])),_:1}),n(u,{class:"mt0",items:d.props,descriptions:o.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(u,{items:o.slots,title:"Slots"},null,8,["items"]),n(u,{items:d.events,title:"Events"},null,8,["items"])])}},C=o("w-spinner");const E={components:{Examples:B,Api:$},render:function(o,l,r,a,c,d){const p=i("ui-component-title"),u=i("examples"),h=i("api");return e(),s("main",null,[n(p,null,{default:t((()=>[C])),_:1}),n(u),n(h)])}};export default E;