var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,s=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&n(e,a,t[a]);if(o)for(var a of o(t))i.call(t,a)&&n(e,a,t[a]);return e};import{o as r,c as d,a as u,w as c,f as m,d as p,r as h,F as b,u as v,q as f,b as w,m as g,e as y}from"./vendor.66ab2837.js";import{F as V}from"./form-elements.2275b6fe.js";const _=u("p",{class:"mb3"},"What it looks like:",-1),k=u("div",{class:"title4 mt4"},"States",-1),O={class:"w-flex wrap"},T=u("p",{class:"mt12"},[p("There are 2 components: "),u("span",{class:"code"},"w-radio"),p(" & "),u("span",{class:"code"},"w-radios"),p(".\nThe later is a group of radio buttons for convenience.")],-1),C=u("p",null,"Let's start with the basic component.",-1),L=p("<w-radio>"),I=u("div",{class:"w-divider"},null,-1),U=u("div",{class:"title3"},"Important notes",-1),x=u("strong",{class:"title5"},"Name attribute",-1),$=u("p",{class:"mb4"},[p("With individual radio buttons (using "),u("span",{class:"code"},"<w-radio>"),p("), the "),u("code",null,"name"),p(" prop is\nneeded for the radios to work together. This is how HTML knows they are part of the same group\nof choices."),u("br"),p("\nBut when you use a group of radio buttons via "),u("span",{class:"code"},"<w-radios>"),p(", Wave UI will add the\nname attributes for you.")],-1),j=u("strong",{class:"title5"},"Form validation",-1),D=u("p",null,[p("When a validation is needed on radio buttons, each individual radio button ("),u("span",{class:"code"},"w-radio"),p(")\nhas a separate validation message."),u("br"),p("\nIf you want only one validation for a group of radio buttons, you must use the "),u("span",{class:"code"},"w-radios"),p("\ncomponent.\n")],-1),P=u("div",{class:"title4 mb2"},"1. Here is a single radio button",-1),S=p("I am single - not very useful"),E=u("div",{class:"title4 mt8 mb2"},"2. Here is a duo",-1),q=p("Option 1"),A=p("Option 2"),M=u("div",{class:"title4 mt8 mb2"},"3. A trio using v-model",-1),H=p("Option 1"),B=p("Option 2"),R=p("Option 3"),K=u("div",{class:"title4 mt8 mb2"},"4. A trio using v-model and a set name",-1),F=p("Option 1"),N=p("Option 2"),W=p("Option 3"),z=p('<div class="title4 mb2">1. Here is a single radio button</div>\n<w-radio>I am single - not very useful</w-radio>\n\n<div class="title4 mt8 mb2">2. Here is a duo</div>\n<w-radio class="mr2" name="radio1">Option 1</w-radio>\n<w-radio name="radio1">Option 2</w-radio>\n\n<div class="title4 mt8 mb2">3. A trio using v-model</div>\n<w-radio\n  class="mr2"\n  v-model="radio2"\n  return-value="option 1">\n  Option 1\n</w-radio>\n<w-radio\n  class="mr2"\n  v-model="radio2"\n  return-value="option 2">\n  Option 2\n</w-radio>\n<w-radio\n  v-model="radio2"\n  return-value="option 3">\n  Option 3\n</w-radio>\n\n<div class="title4 mt8 mb2">\n  4. A trio using v-model and a set name\n</div>\n<w-radio\n  class="mr2"\n  v-model="radio3"\n  name="radio3"\n  return-value="option 1">\n  Option 1\n</w-radio>\n<w-radio\n  class="mr2"\n  v-model="radio3"\n  name="radio3"\n  return-value="option 2">\n  Option 2\n</w-radio>\n<w-radio\n  v-model="radio3"\n  name="radio3"\n  return-value="option 3">\n  Option 3\n</w-radio>'),Y=p("data: () => ({\n  radio2: false,\n  radio3: false\n})\n"),G=u("p",null,[p("The above example (case 3 & 4) shows that the radio buttons work without the name attribute,\nusing a v-model, but the navigation using the keyboard arrows will not work as the names are not\nprovided."),u("br"),p("\nCase 4 is fully operational. "),u("span",{class:"code"},":tada:"),p("\n(Keyboard arrows navigation is a browser choice, Safari doesn't have it)"),u("br"),u("strong",null,[p("Note that when you use the "),u("span",{class:"code"},"w-radios"),p(" component, a unique name is set by default so you don't\nhave to worry about it if you don't need it.\n")])],-1),J=p("Custom label in w-radio"),Q=u("p",null,[u("span",{class:"code"},"w-radio"),p(" provides a default slot to customize the content.")],-1),X=u("span",{class:"pr1"},"Choice 1 has an icon",-1),Z=p("mdi mdi-star"),ee=p("Choice 2 is a tag"),te=p("mdi mdi-heart"),ae=p('<w-radio class="mr5" name="radio1">\n  <span class="pr1">Choice 1 has an icon</span>\n  <w-icon md>mdi mdi-star</w-icon>\n</w-radio>\n\n<w-radio name="radio1">\n  <w-tag bg-color="green-light5" color="green-dark2">\n    Choice 2 is a tag\n    <w-icon class="ml1">mdi mdi-heart</w-icon>\n  </w-tag>\n</w-radio>'),oe=p("As seen in this example, the "),le=u("span",{class:"code"},"w-radio",-1),ie=p(" component allows you to have complete freedom\nin your radio buttons."),ne=u("br",null,null,-1),se=p("\nBut because in most cases you won't need that, the "),re=u("span",{class:"code"},"w-radios",-1),de=p(" component will make you go\nmuch faster.\n"),ue=p("<w-radios>"),ce=u("div",{class:"w-divider"},null,-1),me=u("p",{class:"my5"},[p("The "),u("span",{class:"code"},"w-radios"),p(" component allows a fast and easy rendering of\nmultiple radio buttons by passing the items through a prop."),u("br"),p("\nIt accepts an inline parameter to display the radio buttons inline,\nand allows you to customize the label of each radio button through slot.\n")],-1),pe=p("V-model"),he=p("If a value is set in the choice's data, it will be returned through the v-model when selected."),be=u("br",null,null,-1),ve=p("\nIf no value is set, the choice's label will be returned instead."),fe=u("p",null,"The v-model can also be preset, or updated externally.",-1),we={class:"w-flex align-center"},ge={class:"title3 ml10"},ye=p("v-model: "),Ve=p('<div class="w-flex align-center">\n  <w-radios\n    v-model="selection"\n    :items="radioItems">\n  </w-radios>\n\n  <div class="title3 ml10">\n    v-model: '+m("{{ selection || 'null' }}")+"\n  </div>\n</div>"),_e=p("data: () => ({\n  selection: 1,\n  radioItems: [\n    { label: 'Choice 1', value: 1 },\n    { label: 'Choice 2', value: 2 },\n    { label: 'Choice 3', value: 3 }\n  ]\n})\n"),ke=p("Inline layout"),Oe=p('<w-radios :items="radioItems" inline></w-radios>'),Te=p("data: () => ({\n  radioItems: [\n    { label: 'Choice 1' },\n    { label: 'Choice 2' },\n    { label: 'Choice 3' }\n  ]\n})\n"),Ce=p("Custom label content"),Le=u("p",null,[u("span",{class:"code"},"w-radios"),p(" also provides a slot to customize the label of each radio button: "),u("code",null,"item"),p(".")],-1),Ie=u("p",null,"The great thing is that you can access any custom data from this slot!",-1),Ue={class:"pr2"},xe=p("data: () => ({\n  selection: 'Square',\n  radioItems: [\n    { label: 'Square', icon: 'mdi mdi-square' },\n    { label: 'Circle', icon: 'mdi mdi-circle' },\n    { label: 'Triangle', icon: 'mdi mdi-triangle' }\n  ],\n})\n"),$e=u("div",{class:"w-divider grey-light5 my12"},null,-1),je=p("Color"),De=u("p",null,[p("By default the "),u("span",{class:"code"},"w-radio"),p(" & "),u("span",{class:"code"},"w-radios"),p(" components will use the\nprimary color."),u("br"),p("\nYou can provide a different color with the "),u("code",null,"color"),p(" option, or you can even set a different\ncolor per item by providing a "),u("code",null,"color"),p(" attribute in each of the item objects.\n")],-1),Pe=u("span",{class:"code"},"w-radios",-1),Se=p(" colors"),Ee=p("Option 1"),qe=u("div",{class:"title4 mt8 mb2"},"Different color per item",-1),Ae=p("Option 2"),Me=p('<w-radios\n  class="mr2"\n  v-model="selection1"\n  :items="radios1"\n  color="purple">\n  Option 1\n</w-radios>\n\n<div class="title4 mt8 mb2">\n  Different color per item\n</div>\n\n<w-radios\n  v-model="selection2"\n  :items="radios2">\n  Option 2\n</w-radios>'),He=p("data: () => ({\n  selection1: 1,\n  radios1: [\n    { label: 'Choice 1', value: 1 },\n    { label: 'Choice 2', value: 2 },\n    { label: 'Choice 3', value: 3 }\n  ],\n  selection2: 1,\n  radios2: [\n    { label: 'Choice 1', value: 1, color: 'amber' },\n    { label: 'Choice 2', value: 2, color: 'warning' },\n    { label: 'Choice 3', value: 3, color: 'error' }\n  ]\n})\n"),Be=u("span",{class:"code"},"w-radio",-1),Re=p(" colors"),Ke=p("Option 1"),Fe=p("Option 2"),Ne=u("div",{class:"title4 mt8 mb2"},"Different color per item",-1),We=p("Option 1"),ze=p("Option 2"),Ye=p('<w-radio\n  class="mr2"\n  v-model="selection1"\n  name="radio1"\n  color="teal-light1"\n  :return-value="1">\n  Option 1\n</w-radio>\n\n<w-radio\n  v-model="selection1"\n  name="radio1"\n  color="teal-light1"\n  :return-value="2">\n  Option 2\n</w-radio>\n\n<div class="title4 mt8 mb2">\n  Different color per item\n</div>\n\n<w-radio\n  class="mr2"\n  v-model="selection2"\n  name="radio2"\n  color="pink-light3"\n  :return-value="1">\n  Option 1\n</w-radio>\n\n<w-radio\n  v-model="selection2"\n  name="radio2"\n  color="blue-light1"\n  :return-value="2">\n  Option 2\n</w-radio>\n'),Ge=p("data: () => ({\n  selection1: 1,\n  selection2: 1\n})");const Je={data:()=>({selection1:1,selection2:1,selection3:1,selection4:1,selection5:"Square",selection6:1,selection7:1,radio2:!1,radio3:!1,radios1:[{label:"Choice 1",value:1},{label:"Choice 2",value:2},{label:"Choice 3",value:3}],radios2:[{label:"Choice 1"},{label:"Choice 2"},{label:"Choice 3"}],radios3:[{label:"Square",icon:"mdi mdi-square"},{label:"Circle",icon:"mdi mdi-circle"},{label:"Triangle",icon:"mdi mdi-triangle"}],radios4:[{label:"Choice 1",value:1,color:"amber"},{label:"Choice 2",value:2,color:"warning"},{label:"Choice 3",value:3,color:"error"}]})};Je.render=function(e,t,a,o,l,i){const n=h("w-radios"),s=h("w-radio"),b=h("w-card"),v=h("title-link"),f=h("alert"),w=h("example"),g=h("w-icon"),y=h("w-tag");return r(),d("div",null,[u(b,{"bg-color":"blue-light5"},{default:c((()=>[_,u(n,{modelValue:e.selection1,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selection1=t),items:e.radios1,inline:""},null,8,["modelValue","items"]),k,u("div",O,[u(s,{class:"mr3 mb1","model-value":!0,label:"Checked"}),u(s,{class:"mr3 mb1","model-value":!1,label:"Unchecked"}),u(s,{class:"mr3 mb1","model-value":!0,disabled:"",label:"Checked &amp; disabled"}),u(s,{class:"mr3 mb1","model-value":!1,disabled:"",label:"Unchecked &amp; disabled"})])])),_:1}),T,C,u(v,{class:"title1 mt12",h2:"",slug:"w-radio"},{default:c((()=>[L])),_:1}),I,u(f,{tip:""},{default:c((()=>[U,x,$,j,D])),_:1}),u(w,null,{html:c((()=>[z])),js:c((()=>[Y])),default:c((()=>[P,u(s,null,{default:c((()=>[S])),_:1}),E,u(s,{class:"mr2",name:"radio1"},{default:c((()=>[q])),_:1}),u(s,{name:"radio1"},{default:c((()=>[A])),_:1}),M,u(s,{class:"mr2",modelValue:e.radio2,"onUpdate:modelValue":t[2]||(t[2]=t=>e.radio2=t),"return-value":"option 1"},{default:c((()=>[H])),_:1},8,["modelValue"]),u(s,{class:"mr2",modelValue:e.radio2,"onUpdate:modelValue":t[3]||(t[3]=t=>e.radio2=t),"return-value":"option 2"},{default:c((()=>[B])),_:1},8,["modelValue"]),u(s,{modelValue:e.radio2,"onUpdate:modelValue":t[4]||(t[4]=t=>e.radio2=t),"return-value":"option 3"},{default:c((()=>[R])),_:1},8,["modelValue"]),K,u(s,{class:"mr2",modelValue:e.radio3,"onUpdate:modelValue":t[5]||(t[5]=t=>e.radio3=t),name:"radio3","return-value":"option 1"},{default:c((()=>[F])),_:1},8,["modelValue"]),u(s,{class:"mr2",modelValue:e.radio3,"onUpdate:modelValue":t[6]||(t[6]=t=>e.radio3=t),name:"radio3","return-value":"option 2"},{default:c((()=>[N])),_:1},8,["modelValue"]),u(s,{modelValue:e.radio3,"onUpdate:modelValue":t[7]||(t[7]=t=>e.radio3=t),name:"radio3","return-value":"option 3"},{default:c((()=>[W])),_:1},8,["modelValue"])])),_:1}),G,u(v,{h2:""},{default:c((()=>[J])),_:1}),Q,u(w,{"content-class":"mt3"},{html:c((()=>[ae])),default:c((()=>[u(s,{class:"mr5",name:"radio4"},{default:c((()=>[X,u(g,{md:""},{default:c((()=>[Z])),_:1})])),_:1}),u(s,{name:"radio4"},{default:c((()=>[u(y,{"bg-color":"green-light5",color:"green-dark2"},{default:c((()=>[ee,u(g,{class:"ml1"},{default:c((()=>[te])),_:1})])),_:1})])),_:1})])),_:1}),u(f,{tip:""},{default:c((()=>[oe,le,ie,ne,se,re,de])),_:1}),u(v,{class:"title1 mt12",h2:"",slug:"w-radios"},{default:c((()=>[ue])),_:1}),ce,me,u(v,{class:"title2 primary",h3:""},{default:c((()=>[pe])),_:1}),u(f,{info:""},{default:c((()=>[he,be,ve])),_:1}),fe,u(w,null,{html:c((()=>[Ve])),js:c((()=>[_e])),default:c((()=>[u("div",we,[u(n,{modelValue:e.selection1,"onUpdate:modelValue":t[8]||(t[8]=t=>e.selection1=t),items:e.radios1},null,8,["modelValue","items"]),u("div",ge,[ye,u("code",null,m(e.selection1||"null"),1)])])])),_:1}),u(v,{h2:""},{default:c((()=>[ke])),_:1}),u(w,{"content-class":"mt3"},{html:c((()=>[Oe])),js:c((()=>[Te])),default:c((()=>[u(n,{items:e.radios2,inline:""},null,8,["items"])])),_:1}),u(v,{h2:""},{default:c((()=>[Ce])),_:1}),Le,Ie,u(w,null,{html:c((()=>[p('<w-radios\n  v-model="selection"\n  :items="radioItems"\n  color="green">\n  <template #item="{ item }">\n    <span class="pr2">'+m("{{ item.label }}")+'</span>\n    <w-icon class="success">'+m("{{ item.icon }}")+"</w-icon>\n  </template>\n</w-radios>",1)])),js:c((()=>[xe])),default:c((()=>[u(n,{modelValue:e.selection5,"onUpdate:modelValue":t[9]||(t[9]=t=>e.selection5=t),items:e.radios3,color:"green"},{item:c((({item:e})=>[u("span",Ue,m(e.label),1),u(g,{class:"success"},{default:c((()=>[p(m(e.icon),1)])),_:2},1024)])),_:1},8,["modelValue","items"])])),_:1}),$e,u(v,{h2:""},{default:c((()=>[je])),_:1}),De,u(v,{h3:"",slug:"w-radios--colors"},{default:c((()=>[Pe,Se])),_:1}),u(w,null,{html:c((()=>[Me])),js:c((()=>[He])),default:c((()=>[u(n,{class:"mr2",modelValue:e.selection6,"onUpdate:modelValue":t[10]||(t[10]=t=>e.selection6=t),items:e.radios1,color:"purple"},{default:c((()=>[Ee])),_:1},8,["modelValue","items"]),qe,u(n,{modelValue:e.selection7,"onUpdate:modelValue":t[11]||(t[11]=t=>e.selection7=t),items:e.radios4},{default:c((()=>[Ae])),_:1},8,["modelValue","items"])])),_:1}),u(v,{h3:"",slug:"w-radio--colors"},{default:c((()=>[Be,Re])),_:1}),u(w,null,{html:c((()=>[Ye])),js:c((()=>[Ge])),default:c((()=>[u(s,{class:"mr2",modelValue:e.selection3,"onUpdate:modelValue":t[12]||(t[12]=t=>e.selection3=t),name:"radio5",color:"teal-light1","return-value":1},{default:c((()=>[Ke])),_:1},8,["modelValue"]),u(s,{modelValue:e.selection3,"onUpdate:modelValue":t[13]||(t[13]=t=>e.selection3=t),name:"radio5",color:"teal-light1","return-value":2},{default:c((()=>[Fe])),_:1},8,["modelValue"]),Ne,u(s,{class:"mr2",modelValue:e.selection4,"onUpdate:modelValue":t[14]||(t[14]=t=>e.selection4=t),name:"radio6",color:"pink-light3","return-value":1},{default:c((()=>[We])),_:1},8,["modelValue"]),u(s,{modelValue:e.selection4,"onUpdate:modelValue":t[15]||(t[15]=t=>e.selection4=t),name:"radio6",color:"blue-light1","return-value":2},{default:c((()=>[ze])),_:1},8,["modelValue"])])),_:1})])};const Qe={name:"w-radios",mixins:[V],props:{items:{type:Array,required:!0},modelValue:{type:[String,Number,Boolean]},labelOnLeft:{type:Boolean},itemLabelKey:{type:String,default:"label"},itemValueKey:{type:String,default:"value"},itemColorKey:{type:String,default:"color"},inline:{type:Boolean},color:{type:String,default:"primary"}},emits:["input","update:modelValue","focus"],provide:()=>({wRadios:!0}),data:()=>({inputValue:null}),computed:{radioItems(){return(this.items||[]).map(((e,o)=>{return l=s({},e),i={label:e[this.itemLabelKey],value:void 0===e[this.itemValueKey]?e[this.itemLabelKey]||o:e[this.itemValueKey],color:e[this.itemColorKey]||this.color},t(l,a(i));var l,i}))},classes(){return["w-radios","w-radios--"+(this.inline?"inline":"column")]}},methods:{onInput(e){this.inputValue=!0,this.$emit("update:modelValue",e.value),this.$emit("input",e.value)}}};Qe.render=function(e,t,a,o,l,i){const n=h("w-radio");return r(),d(y(e.formRegister?"w-form-element":"div"),g({ref:"formEl"},e.formRegister&&{validators:e.validators,inputValue:e.inputValue,disabled:e.isDisabled},{valid:e.valid,"onUpdate:valid":t[2]||(t[2]=t=>e.valid=t),onReset:t[3]||(t[3]=t=>{e.$emit("update:modelValue",e.inputValue=null),e.$emit("input",null)}),column:!a.inline,class:i.classes}),{default:c((()=>[(r(!0),d(b,null,v(i.radioItems,((o,l)=>(r(),d(n,{key:l,"model-value":o.value===a.modelValue,"onUpdate:modelValue":e=>i.onInput(o),onFocus:t[1]||(t[1]=t=>e.$emit("focus",t)),name:e.inputName,label:o.label,"label-on-left":a.labelOnLeft,color:o.color,disabled:e.isDisabled||null,readonly:e.isReadonly||null,class:{mt1:!a.inline&&l}},{default:c((()=>[e.$slots.item?f(e.$slots,"item",{key:0,item:o}):o.label?(r(),d("div",{key:1,innerHTML:o.label},null,8,["innerHTML"])):w("",!0)])),_:2},1032,["model-value","onUpdate:modelValue","name","label","label-on-left","color","disabled","readonly","class"])))),128))])),_:1},16,["valid","column","class"])};const Xe={name:"w-radio",mixins:[V],inject:{wRadios:{default:null}},props:{modelValue:{default:!1},returnValue:{},label:{type:String},labelOnLeft:{type:Boolean},color:{type:String,default:"primary"},noRipple:{type:Boolean}},emits:["input","update:modelValue","focus"],data:()=>({inputValue:!1,ripple:{start:!1,end:!1,timeout:null}}),computed:{hasLabel(){return this.label||this.$slots.default},classes(){return{["w-radio w-radio--"+(this.inputValue?"checked":"unchecked")]:!0,"w-radio--disabled":this.isDisabled,"w-radio--ripple":this.ripple.start,"w-radio--rippled":this.ripple.end}}},methods:{toggleFromOutside(){this.inputValue=void 0!==this.returnValue?this.returnValue===this.modelValue:this.modelValue},onInput(e){this.inputValue=e.target.checked;const t=this.inputValue&&void 0!==this.returnValue?this.returnValue:this.inputValue;this.$emit("update:modelValue",t),this.$emit("input",t),this.noRipple||(this.inputValue?(this.ripple.start=!0,this.ripple.timeout=setTimeout((()=>{this.ripple.start=!1,this.ripple.end=!0,setTimeout((()=>this.ripple.end=!1),100)}),700)):(this.ripple.start=!1,clearTimeout(this.ripple.timeout)))}},created(){void 0!==this.modelValue&&this.toggleFromOutside()},watch:{modelValue(){this.toggleFromOutside()}},render:function(e,t,a,o,l,i){return r(),d(y(e.formRegister&&!i.wRadios?"w-form-element":"div"),g({ref:"formEl"},e.formRegister&&{validators:e.validators,inputValue:e.inputValue,disabled:e.isDisabled},{valid:e.valid,"onUpdate:valid":t[4]||(t[4]=t=>e.valid=t),onReset:t[5]||(t[5]=t=>{e.$emit("update:modelValue",e.inputValue=null),e.$emit("input",null)}),class:i.classes}),{default:c((()=>[u("input",{ref:"input",id:`w-radio--${e._.uid}`,type:"radio",name:e.inputName,checked:e.inputValue||null,disabled:e.isDisabled||null,required:e.required||null,onFocus:t[1]||(t[1]=t=>e.$emit("focus",t)),onChange:t[2]||(t[2]=e=>i.onInput(e)),"aria-checked":e.inputValue||"false",role:"radio"},null,40,["id","name","checked","disabled","required","aria-checked"]),i.hasLabel&&a.labelOnLeft?(r(),d(b,{key:0},[e.$slots.default?(r(),d("label",{key:0,class:"w-radio__label w-form-el-shakable pr2",for:`w-radio--${e._.uid}`},[f(e.$slots,"default")],8,["for"])):a.label?(r(),d("label",{key:1,class:"w-radio__label w-form-el-shakable pr2",for:`w-radio--${e._.uid}`,innerHTML:a.label},null,8,["for","innerHTML"])):w("",!0)],64)):w("",!0),u("div",{class:["w-radio__input",this.color],onClick:t[3]||(t[3]=t=>{e.$refs.input.focus(),e.$refs.input.click()})},null,2),i.hasLabel&&!a.labelOnLeft?(r(),d(b,{key:1},[e.$slots.default?(r(),d("label",{key:0,class:"w-radio__label w-form-el-shakable pl2",for:`w-radio--${e._.uid}`},[f(e.$slots,"default")],8,["for"])):a.label?(r(),d("label",{key:1,class:"w-radio__label w-form-el-shakable pl2",for:`w-radio--${e._.uid}`,innerHTML:a.label},null,8,["for","innerHTML"])):w("",!0)],64)):w("",!0)])),_:3},16,["valid","class"])}},Ze=u("div",{class:"w-divider my12"},null,-1),et=p("<w-radios> API"),tt=u("div",{class:"w-divider my12"},null,-1),at=p("<w-radio> API");const ot={propsDescs:{items:"An array of radio button items to display. Each item object should contain at least a <code>label</code> or a <code>value</code> attribute.",value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide a value (of one of the <code>items</code> objects) to dictate the selected choice.<br>This value gets updated when using a v-model.',labelOnLeft:"Moves the label to the left of each radio button. By default the label is displayed on the right.",itemLabelKey:"The property name (aka key) in each item object where to find the label of the item (if any).",itemValueKey:"The property name (aka key) in each item object where to find the value of the item (if any).",itemColorKey:"The property name (aka key) in each item object where to find the color of the item (if any).",inline:"Displays all the radio buttons inline instead of in column.",color:'Applies a color to the active radio buttons. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',name:"Provide a native HTML <code>name</code> attribute to each radio button. If not provided, a unique common name will be computed and applied to all the radio buttons.",disabled:"Disables all the radio buttons making them unreactive to user interactions.",readonly:"The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to each radio button.",validators:'<span class="deep-orange">Only for validation, when the <strong class="code">w-radios</strong> component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.'},slots:{item:{description:"Provide a custom content for each radio button label."}},events:{input:{description:"Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 2.x only.",params:{"[String, Number, Boolean]":"The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},"update:modelValue":{description:"Emitted each time any of the radio buttons is toggled.<br>Updates the v-model value in Vue 3 only.",params:{"[String, Number, Boolean]":"The <code>return-value</code> of the selected radio button.<br>The <code>return-value</code> will be one of the following attributes, if they exist, in this order: the item value, the item label, the item index."}},focus:{description:"Emitted on each radio button focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},lt={propsDescs:{value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide a boolean to dictate the selected state of the radio button.<br>This value gets updated when using a v-model.',returnValue:"Since the native HTML radio uses the <code>value</code> attribute to define the selected state, the <code>return-value</code> prop let you specify a value to return to the <code>v-model</code> when the radio is selected (instead of returning <code>true</code>).",label:"Sets a visible label for the radio button.",labelOnLeft:"Moves the label to the left of the radio button. By default the label is displayed on the right.",color:'Applies a color to the radio button when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',noRipple:"Removes the ripple animation on select.",name:"Provide a native HTML <code>name</code> attribute to the radio button. If not provided, a unique name will be computed.",disabled:"Disables the radio button making it unreactive to user interactions.",readonly:"The radio button will still look like an interactive radio button except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the radio button.",validators:'<span class="deep-orange">Only for validation, when this radio button is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the radio button. Each function will be executed on radio button validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the radio button.'},slots:{default:{description:"The radio button label content."}},events:{input:{description:"Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"The current state of the radio button."}},"update:modelValue":{description:"Emitted each time the state of the radio button changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"The current state of the radio button."}},focus:{description:"Emitted on each radio button focus.",params:{"[DOM event object]":"The associated focus DOM event."}}}},it={data:()=>({radios:ot,radio:lt}),computed:{radiosProps:()=>s(s({},Qe.props),V.props),radioProps:()=>s(s({},Xe.props),V.props),radiosEvents:()=>Qe.emits.reduce(((e,t)=>(e[t]=ot.events[t]||{})&&e),{}),radioEvents:()=>Xe.emits.reduce(((e,t)=>(e[t]=lt.events[t]||{})&&e),{})},render:function(e,t,a,o,l,i){const n=h("title-link"),s=h("component-api");return r(),d("div",null,[Ze,u(n,{class:"title1",h2:"",slug:"w-radios-api"},{default:c((()=>[et])),_:1}),u(s,{class:"mt0",items:i.radiosProps,descriptions:e.radios.propsDescs,title:"Props"},null,8,["items","descriptions"]),u(s,{items:e.radios.slots,title:"Slots"},null,8,["items"]),u(s,{items:i.radiosEvents,title:"Events"},null,8,["items"]),tt,u(n,{class:"title1",h2:"",slug:"w-radio-api"},{default:c((()=>[at])),_:1}),u(s,{class:"mt0",items:i.radioProps,descriptions:e.radio.propsDescs,title:"Props"},null,8,["items","descriptions"]),u(s,{items:e.radio.slots,title:"Slots"},null,8,["items"]),u(s,{items:i.radioEvents,title:"Events"},null,8,["items"])])}},nt=u("span",{class:"code"},"w-radio",-1),st=p(" & "),rt=u("span",{class:"code"},"w-radios",-1);const dt={components:{Examples:Je,Api:it},render:function(e,t,a,o,l,i){const n=h("ui-component-title"),s=h("examples"),m=h("api");return r(),d("main",null,[u(n,{slug:"w-radio-and-w-radios",code:!1},{default:c((()=>[nt,st,rt])),_:1}),u(s),u(m)])}};export default dt;
