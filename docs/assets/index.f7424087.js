var e=Object.defineProperty,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,i=(n,l,t)=>l in n?e(n,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[l]=t,s=(e,s)=>{for(var a in s||(s={}))l.call(s,a)&&i(e,a,s[a]);if(n)for(var a of n(s))t.call(s,a)&&i(e,a,s[a]);return e},a=(e,i)=>{var s={};for(var a in e)l.call(e,a)&&i.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&n)for(var a of n(e))i.indexOf(a)<0&&t.call(e,a)&&(s[a]=e[a]);return s};import{o,c as d,a as r,w as u,d as c,g as p,r as m,s as b,C as h,F as w,q as f,b as g,f as y,E as v,m as _,t as k,e as x}from"./vendor.66ab2837.js";import{F as S}from"./form-elements.2275b6fe.js";const L=c("Default"),P=r("p",null,[c("By default the "),r("span",{class:"code"},"w-input"),c(" component has a label inside the input field, that moves up\nabove the field on focus or when the field has some content or a placeholder."),r("br")],-1),T=c("Label"),I=c("<w-input>Label</w-input>\n"),R=c("Label and / or placeholder"),O=c('<w-input\n  class="mb4"\n  label="Label">\n</w-input>\n\n<w-input\n  class="mb3"\n  placeholder="Placeholder">\n</w-input>\n\n<w-input\n  class="mb3"\n  label="Label"\n  placeholder="Placeholder">\n</w-input>\n'),V=c("Static label"),$=r("p",null,[c("By default the label is positioned inside and on field focus, it will move up above the field\nand shrink."),r("br"),c("\nIt is possible to keep it inside and disable the animation with the "),r("code",null,"static-label"),c(" option.")],-1),M=r("p",{class:"mt4"},[r("strong",null,"Note:"),c(" If this option is set to true and the label is positioned inside when a placeholder is set,\nonly the placeholder will be displayed.\n")],-1),q=c('<w-input\n  class="mb4"\n  label="Label"\n  static-label>\n</w-input>\n'),A=c("Outline"),D=c('<w-input\n  class="mb2"\n  label="Outline"\n  outline>\n</w-input>\n\n<w-input\n  class="mb2"\n  placeholder="Outline"\n  outline>\n</w-input>\n\n<w-input\n  class="mb2"\n  label="Outline"\n  color="info"\n  outline>\n</w-input>\n\n<w-input\n  class="mb2"\n  label="Outline"\n  bg-color="blue-light5"\n  outline>\n</w-input>\n'),C=c("Shadow"),E=c('<w-input\n  class="mb4"\n  label="Shadow"\n  shadow>\n</w-input>\n\n<w-input\n  class="mb2"\n  label="Outline\n  with shadow"\n  shadow\n  outline>\n</w-input>\n'),H=c("Round & Tile"),B={class:"grow mb4",style:{"min-width":"200px"}},F=r("div",{class:"title4 mb2"},"Underline style (default)",-1),U={class:"grow mb4",style:{"min-width":"200px"}},j=r("div",{class:"title4 mb2"},"Outline style",-1),N=c('<w-flex wrap :gap="2">\n  <div\n    class="grow mb4"\n    style="min-width: 200px">\n    <div class="title4 mb2">\n      Underline style (default)\n    </div>\n\n    <w-input\n      class="mb1"\n      label="Round"\n      round>\n    </w-input>\n\n    <w-input\n      class="mb1"\n      label="Round and shadow"\n      round\n      shadow>\n    </w-input>\n\n    <w-input\n      class="mb1"\n      label="Tile"\n      tile>\n    </w-input>\n  </div>\n\n  <div\n    class="grow mb4"\n    style="min-width: 200px">\n\n    <div class="title4 mb2">\n      Outline style\n    </div>\n\n    <w-input\n      class="mb1"\n      label="Round"\n      round\n      outline>\n    </w-input>\n\n    <w-input\n      class="mb1"\n      label="Round and shadow"\n      round\n      outline\n      shadow>\n    </w-input>\n\n    <w-input\n      class="mb1"\n      label="Tile"\n      tile\n      outline>\n    </w-input>\n  </div>\n</w-flex>\n'),W=c("Colors"),z=r("p",{class:"mb4"},[c("Like in most components, you can set a "),r("code",null,"color"),c(" for the text and a "),r("code",null,"bg-color"),c(" for the\nbackground."),r("br"),c('\nBy default, the text has the "'),r("span",{class:"code"},"primary"),c('" color.')],-1),G={class:"grow mb4",style:{"min-width":"200px"}},Y=r("div",{class:"title4 mb2"},"Underline style (default)",-1),J={class:"grow mb4",style:{"min-width":"200px"}},K=r("div",{class:"title4 mb2"},"Outline style",-1),Q=c('<w-flex wrap :gap="2">\n  <div class="grow mb4" style="min-width: 200px">\n    <div class="title4 mb2">\n      Underline style (default)\n    </div>\n\n    <w-input\n      class="mb1"\n      model-value="Some content">\n    </w-input>\n\n    <w-input\n      class="mb1"\n      color="red"\n      model-value="Some\n      content">\n    </w-input>\n\n    <w-input\n      class="mb1"\n      bg-color="red-light5"\n      model-value="Some\n      content">\n    </w-input>\n\n    <w-input\n      class="mb1"\n      color="red-dark1"\n      bg-color="red-light5"\n      model-value="Some content">\n    </w-input>\n\n    <w-input\n      class="mb1"\n      color="orange-dark1"\n      bg-color="orange-light5"\n      model-value="Some content">\n    </w-input>\n  </div>\n\n  <div class="grow mb4" style="min-width: 200px">\n    <div class="title4 mb2">\n      Outline style\n    </div>\n\n    <w-input\n      class="mb1"\n      model-value="Some content"\n      outline>\n    </w-input>\n\n    <w-input\n      class="mb1"\n      color="red"\n      model-value="Some content"\n      outline>\n    </w-input>\n\n    <w-input\n      class="mb1"\n      bg-color="red-light5"\n      model-value="Some content"\n      outline>\n    </w-input>\n\n    <w-input\n      class="mb1"\n      color="red-dark1"\n      bg-color="red-light5"\n      model-value="Some content"\n      outline>\n    </w-input>\n\n    <w-input\n      class="mb1"\n      color="orange-dark1"\n      bg-color="orange-light5"\n      model-value="Some content"\n      outline>\n    </w-input>\n  </div>\n</w-flex>\n'),X=c("Label position"),Z=r("p",null,[c('The default label position is "'),r("span",{class:"code"},"inside"),c('", but it can also be "'),r("span",{class:"code"},"left"),c('" or "'),r("span",{class:"code"},"right"),c('".')],-1),ee=c("You could also set a label outside of the "),ne=r("span",{class:"code"},"w-input",-1),le=c(" and display it nicely with flex.\nBut it is convenient to let the "),te=r("span",{class:"code"},"w-input",-1),ie=c(" component handle the field focus event on\nlabel click."),se=r("br",null,null,-1),ae=c("\nThe "),oe=r("span",{class:"code"},"label",-1),de=c(" prop is here for this purpose and accepts any HTML.\n"),re=c('<w-input\n  class="mb2"\n  label="Inside"\n  label-position="inside"\n  outline>\n</w-input>\n\n<w-input\n  class="mb2"\n  label="Left"\n  label-position="left"\n  outline>\n</w-input>\n\n<w-input\n  class="mb2"\n  label="Right"\n  label-position="right"\n  outline>\n</w-input>\n'),ue=c("Custom label via default slot"),ce=r("p",null,[c("It is convenient to have the label inside the "),r("span",{class:"code"},"w-input"),c(" component to let it handle\nthe field focus event on label click."),r("br"),c("\nThe "),r("span",{class:"code"},"label"),c(" prop accepts any HTML, but because passing complex html via a prop is not fun,\nthere is also a prop for setting the label wish will grant more freedom.\n")],-1),pe=c("mdi mdi-arrow-right"),me=r("span",{class:"purple mx1"},"Inside",-1),be=c("mdi mdi-arrow-left"),he=r("span",{class:"green mr1"},"Left",-1),we=c("mdi mdi-arrow-right"),fe=c("mdi mdi-arrow-left"),ge=r("span",{class:"red ml1"},"Right",-1),ye=c('<w-input\n  class="mb2"\n  label-position="inside"\n  outline>\n  <w-icon class="orange">\n    mdi mdi-arrow-right\n  </w-icon>\n\n  <span class="purple mx1">\n    Inside\n  </span>\n\n  <w-icon class="orange">\n    mdi mdi-arrow-left\n  </w-icon>\n</w-input>\n\n<w-input\n  class="mb2"\n  label-position="left"\n  outline>\n  <span class="green mr1">\n    Left\n  </span>\n\n  <w-icon class="orange">\n    mdi mdi-arrow-right\n  </w-icon>\n</w-input>\n\n<w-input\n  class="mb2"\n  label-position="right"\n  outline>\n  <w-icon class="orange">\n    mdi mdi-arrow-left\n  </w-icon>\n\n  <span class="red ml1">\n    Right\n  </span>\n</w-input>\n'),ve=c("Inner icons"),_e=r("div",{class:"title4 mb2"},"Label outside",-1),ke=r("div",{class:"title4 mt6 mb2"},"Label inside",-1),xe=c('<div class="title4 mb2">\n  Label outside\n</div>\n\n<w-input\n  class="mb2"\n  label="Username"\n  label-position="left"\n  outline\n  inner-icon-left="mdi mdi-account">\n</w-input>\n\n<w-input class="mb2"\n  label="Password"\n  :type="isPassword ? \'password\' : \'text\'"\n  :inner-icon-left="isPassword ? \'mdi mdi-eye-off\' : \'mdi mdi-eye\'"\n  :inner-icon-right="isPassword ? \'mdi mdi-eye-off\' : \'mdi mdi-eye\'"\n  @click:inner-icon-right="isPassword = !isPassword">\n</w-input>\n\n<w-input class="mb2"\n  label="Password"\n  :type="isPassword ? \'password\' : \'text\'"\n  label-position="left"\n  outline\n  :inner-icon-right="isPassword ? \'mdi mdi-eye-off\' : \'mdi mdi-eye\'"\n  @click:inner-icon-right="isPassword = !isPassword">\n</w-input>\n\n<w-input\n  class="mb2"\n  label="Right"\n  label-position="right"\n  outline\n  inner-icon-left="wi-check">\n</w-input>\n\n<w-input\n  class="mb2"\n  label="Right"\n  label-position="right"\n  outline\n  inner-icon-right="wi-check">\n</w-input>\n\n<div class="title4 mt6 mb2">\n  Label inside\n</div>\n\n<w-input\n  class="mb2"\n  label="Inside"\n  label-position="inside"\n  outline\n  inner-icon-left="wi-search">\n</w-input>\n\n<w-input\n  class="mb2"\n  label="Inside"\n  label-position="inside"\n  outline\n  inner-icon-right="wi-search">\n</w-input>'),Se=c("data: () => ({\n  isPassword: true\n})\n"),Le=c("Disabled & readonly"),Pe=c('<w-input\n  class="mb3"\n  label="Disabled & empty"\n  outline\n  disabled>\n</w-input>\n\n<w-input\n  class="mb3"\n  label="Disabled & filled"\n  model-value="Some content"\n  outline\n  disabled>\n</w-input>\n\n<w-input\n  class="mb3"\n  label="Readonly & empty"\n  outline\n  readonly>\n</w-input>\n\n<w-input\n  class="mb3"\n  label="Readonly & filled"\n  model-value="Some content"\n  outline\n  readonly>\n</w-input>\n'),Te=c("Types"),Ie=r("p",null,[c('The default type is "'),r("span",{class:"code"},"text"),c('" but the types bellow are also supported.')],-1),Re=r("p",null,[c("On desktop you will not notice the difference between the fields "),r("span",{class:"code"},"email"),c(", "),r("span",{class:"code"},"tel"),c(",\n"),r("span",{class:"code"},"url"),c(", and the default text type. But on touch devices, the keyboard is tailored for the\ntype of input.")],-1),Oe=r("h3",null,"Textual inputs",-1),Ve={class:"input-types"},$e=r("div",{class:"code mb1"},'type="date"',-1),Me=c("date"),qe={class:"mt4"},Ae=r("div",{class:"code mb1"},'type="email"',-1),De=c("Email address"),Ce={class:"mt4"},Ee=r("div",{class:"code mb1"},'type="file"',-1),He=c("coming soon"),Be={class:"mt4"},Fe=r("div",{class:"code mb1"},'type="number"',-1),Ue=c("Age"),je={class:"mt4"},Ne=r("div",{class:"code mb1"},'type="password"',-1),We=c("Password"),ze={class:"mt4"},Ge=r("div",{class:"code mb1"},'type="search"',-1),Ye=c("Search"),Je={class:"mt4"},Ke=r("div",{class:"code mb1"},'type="tel"',-1),Qe=c("Tel"),Xe={class:"mt4"},Ze=r("div",{class:"code mb1"},'type="text"',-1),en=c("Text"),nn={class:"mt4"},ln=r("div",{class:"code mb1"},'type="time"',-1),tn=c("time"),sn={class:"mt4"},an=r("div",{class:"code mb1"},'type="url"',-1),on=c("Url"),dn={class:"mt4"},rn=r("span",{class:"code mb1 mr2"},'type="hidden"',-1),un=c("The hidden type is also accepted - but you don't need a "),cn=r("span",{class:"code"},"w-input",-1),pn=c(" for that!"),mn=c('<ul class="input-types">\n  <li>\n    <div class="code mb1">type="date"</div>\n    <w-input type="date">date</w-input>\n  </li>\n\n  <li>\n    <div class="code mb1">type="email"</div>\n    <w-input type="email">Email address</w-input>\n  </li>\n\n  <li>\n    <div class="code mb1">type="number"</div>\n    <w-input type="number" min="0" max="100">Age</w-input>\n  </li>\n\n  <li>\n    <div class="code mb1">type="password"</div>\n    <w-input type="password">Password</w-input>\n  </li>\n\n  <li>\n    <div class="code mb1">type="search"</div>\n    <w-input type="search">Search</w-input>\n  </li>\n\n  <li>\n    <div class="code mb1">type="tel"</div>\n    <w-input type="tel">Tel</w-input>\n  </li>\n\n  <li>\n    <div class="code mb1">type="text"</div>\n    <w-input>Text</w-input>\n  </li>\n\n  <li>\n    <div class="code mb1">type="time"</div>\n    <w-input type="time">time</w-input>\n  </li>\n\n  <li>\n    <div class="code mb1">type="url"</div>\n    <w-input type="url">Url</w-input>\n  </li>\n\n  <li>\n    <span class="code mb1 mr2" type="hidden">\n      The hidden type is also accepted - but you don\'t need a w-input for that!\n    </span>\n    <w-input type="hidden">\n  </li>\n'),bn=r("h3",null,"Other types of inputs",-1),hn=r("p",null,"For all the other types of input listed bellow, a specific Wave UI component should be used instead:",-1),wn={class:"other-input-types"},fn=p('<li class="mt1"><span class="code mr2">type=&quot;button&quot;</span><span class="grey">use <code>w-button</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;checkbox&quot;</span><span class="grey">use <code>w-checkbox</code> instead</span></li>',2),gn={class:"mt1"},yn=r("span",{class:"code mr2"},'type="color"',-1),vn=r("span",{class:"grey"},[c("use "),r("code",null,"w-color-picker"),c(" instead")],-1),_n=c("coming soon"),kn=p('<li class="mt1"><span class="code mr2">type=&quot;image&quot;</span><span class="grey">use the <code>img</code> HTML tag instead</span></li><li class="mt1"><span class="code mr2">type=&quot;radio&quot;</span><span class="grey">use <code>w-radio</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;range&quot;</span><span class="grey">use <code>w-slider</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;reset&quot;</span><span class="grey">use <code>w-button</code> instead</span></li><li class="mt1"><span class="code mr2">type=&quot;submit&quot;</span><span class="grey">use <code>w-button</code> instead</span></li>',5),xn={class:"mt1"},Sn=r("span",{class:"code mr2"},'type="time"',-1),Ln=r("span",{class:"grey"},[c("use "),r("code",null,"w-time-picker"),c(" instead")],-1),Pn=c("coming soon");const Tn={data:()=>({isPassword:!0})};Tn.render=function(e,n,l,t,i,s){const a=m("title-link"),c=m("w-input"),p=m("example"),b=m("w-flex"),h=m("alert"),w=m("w-icon"),f=m("w-tag");return o(),d("div",null,[r(a,{h2:""},{default:u((()=>[L])),_:1}),P,r(p,null,{html:u((()=>[I])),default:u((()=>[r(c,null,{default:u((()=>[T])),_:1})])),_:1}),r(a,{h2:""},{default:u((()=>[R])),_:1}),r(p,null,{html:u((()=>[O])),default:u((()=>[r(c,{class:"mb4",label:"Label"}),r(c,{class:"mb3",placeholder:"Placeholder"}),r(c,{class:"mb3",label:"Label",placeholder:"Placeholder"})])),_:1}),r(a,{h2:""},{default:u((()=>[V])),_:1}),$,M,r(p,null,{html:u((()=>[q])),default:u((()=>[r(c,{class:"mb3",label:"Label","static-label":""})])),_:1}),r(a,{h2:""},{default:u((()=>[A])),_:1}),r(p,null,{html:u((()=>[D])),default:u((()=>[r(c,{class:"mb4",label:"Outline",outline:""}),r(c,{class:"mb2",placeholder:"Outline",outline:""}),r(c,{class:"mb2",label:"Outline",color:"info",outline:""}),r(c,{class:"mb2",label:"Outline","bg-color":"blue-light5",outline:""})])),_:1}),r(a,{h2:""},{default:u((()=>[C])),_:1}),r(p,null,{html:u((()=>[E])),default:u((()=>[r(c,{class:"mb4",label:"Shadow",shadow:""}),r(c,{class:"mb2",label:"Outline with shadow",shadow:"",outline:""})])),_:1}),r(a,{h2:""},{default:u((()=>[H])),_:1}),r(p,null,{html:u((()=>[N])),default:u((()=>[r(b,{wrap:"",gap:2},{default:u((()=>[r("div",B,[F,r(c,{class:"mb1",label:"Round",round:""}),r(c,{class:"mb1",label:"Round and shadow",round:"",shadow:""}),r(c,{class:"mb1",label:"Tile",tile:""})]),r("div",U,[j,r(c,{class:"mb1",label:"Round",round:"",outline:""}),r(c,{class:"mb1",label:"Round and shadow",round:"",outline:"",shadow:""}),r(c,{class:"mb1",label:"Tile",tile:"",outline:""})])])),_:1})])),_:1}),r(a,{h2:""},{default:u((()=>[W])),_:1}),z,r(p,null,{html:u((()=>[Q])),default:u((()=>[r(b,{wrap:"",gap:2},{default:u((()=>[r("div",G,[Y,r(c,{class:"mb1","model-value":"Some content"}),r(c,{class:"mb1",color:"red","model-value":"Some content"}),r(c,{class:"mb1","bg-color":"red-light5","model-value":"Some content"}),r(c,{class:"mb1",color:"red-dark1","bg-color":"red-light5","model-value":"Some content"}),r(c,{class:"mb1",color:"orange-dark1","bg-color":"orange-light5","model-value":"Some content"})]),r("div",J,[K,r(c,{class:"mb1","model-value":"Some content",outline:""}),r(c,{class:"mb1",color:"red","model-value":"Some content",outline:""}),r(c,{class:"mb1","bg-color":"red-light5","model-value":"Some content",outline:""}),r(c,{class:"mb1",color:"red-dark1","bg-color":"red-light5","model-value":"Some content",outline:""}),r(c,{class:"mb1",color:"orange-dark1","bg-color":"orange-light5","model-value":"Some content",outline:""})])])),_:1})])),_:1}),r(a,{h2:""},{default:u((()=>[X])),_:1}),Z,r(h,{tip:""},{default:u((()=>[ee,ne,le,te,ie,se,ae,oe,de])),_:1}),r(p,null,{html:u((()=>[re])),default:u((()=>[r(c,{class:"mb2",label:"Inside","label-position":"inside",outline:""}),r(c,{class:"mb2",label:"Left","label-position":"left",outline:""}),r(c,{class:"mb2",label:"Right","label-position":"right",outline:""})])),_:1}),r(a,{h2:""},{default:u((()=>[ue])),_:1}),ce,r(p,null,{html:u((()=>[ye])),default:u((()=>[r(c,{class:"mb2","label-position":"inside",outline:""},{default:u((()=>[r(w,{class:"orange"},{default:u((()=>[pe])),_:1}),me,r(w,{class:"orange"},{default:u((()=>[be])),_:1})])),_:1}),r(c,{class:"mb2","label-position":"left",outline:""},{default:u((()=>[he,r(w,{class:"orange"},{default:u((()=>[we])),_:1})])),_:1}),r(c,{class:"mb2","label-position":"right",outline:""},{default:u((()=>[r(w,{class:"orange"},{default:u((()=>[fe])),_:1}),ge])),_:1})])),_:1}),r(a,{h2:""},{default:u((()=>[ve])),_:1}),r(p,null,{html:u((()=>[xe])),js:u((()=>[Se])),default:u((()=>[_e,r(c,{class:"mb2",label:"Username","label-position":"left",outline:"","inner-icon-left":"mdi mdi-account"}),r(c,{class:"mb2",label:"Password",type:e.isPassword?"password":"text","inner-icon-left":e.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","inner-icon-right":e.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","onClick:innerIconRight":n[1]||(n[1]=n=>e.isPassword=!e.isPassword)},null,8,["type","inner-icon-left","inner-icon-right"]),r(c,{class:"mb2",label:"Password",type:e.isPassword?"password":"text","label-position":"left",outline:"","inner-icon-right":e.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","onClick:innerIconRight":n[2]||(n[2]=n=>e.isPassword=!e.isPassword)},null,8,["type","inner-icon-right"]),r(c,{class:"mb2",label:"Right","label-position":"right",outline:"","inner-icon-left":"wi-check"}),r(c,{class:"mb2",label:"Right","label-position":"right",outline:"","inner-icon-right":"wi-check"}),ke,r(c,{class:"mb2",label:"Inside","label-position":"inside",outline:"","inner-icon-left":"wi-search"}),r(c,{class:"mb2",label:"Inside","label-position":"inside",outline:"","inner-icon-right":"wi-search"})])),_:1}),r(a,{h2:""},{default:u((()=>[Le])),_:1}),r(p,null,{html:u((()=>[Pe])),default:u((()=>[r(c,{class:"mb3",label:"Disabled & empty",outline:"",disabled:""}),r(c,{class:"mb3",label:"Disabled & filled","model-value":"Some content",outline:"",disabled:""}),r(c,{class:"mb3",label:"Readonly & empty",outline:"",readonly:""}),r(c,{class:"mb3",label:"Readonly & filled","model-value":"Some content",outline:"",readonly:""})])),_:1}),r(a,{h2:""},{default:u((()=>[Te])),_:1}),Ie,Re,Oe,r(p,null,{html:u((()=>[mn])),default:u((()=>[r("ul",Ve,[r("li",null,[$e,r(c,{type:"date"},{default:u((()=>[Me])),_:1})]),r("li",qe,[Ae,r(c,{type:"email"},{default:u((()=>[De])),_:1})]),r("li",Ce,[Ee,r(f,{class:"px1 ml1",color:"red",outline:""},{default:u((()=>[He])),_:1})]),r("li",Be,[Fe,r(c,{type:"number",min:"0",max:"100"},{default:u((()=>[Ue])),_:1})]),r("li",je,[Ne,r(c,{type:"password"},{default:u((()=>[We])),_:1})]),r("li",ze,[Ge,r(c,{type:"search"},{default:u((()=>[Ye])),_:1})]),r("li",Je,[Ke,r(c,{type:"tel"},{default:u((()=>[Qe])),_:1})]),r("li",Xe,[Ze,r(c,{type:"text"},{default:u((()=>[en])),_:1})]),r("li",nn,[ln,r(c,{type:"time"},{default:u((()=>[tn])),_:1})]),r("li",sn,[an,r(c,{type:"url"},{default:u((()=>[on])),_:1})]),r("li",dn,[rn,un,cn,pn,r(c,{type:"hidden"})])])])),_:1}),bn,hn,r("ul",wn,[fn,r("li",gn,[yn,vn,r(f,{class:"px1 ml1",color:"red",outline:""},{default:u((()=>[_n])),_:1})]),kn,r("li",xn,[Sn,Ln,r(f,{class:"px1 ml1",color:"red",outline:""},{default:u((()=>[Pn])),_:1})])])])};const In={name:"w-input",mixins:[S],props:{modelValue:{default:""},type:{type:String,default:"text"},label:{type:String},labelPosition:{type:String,default:"inside"},innerIconLeft:{type:String},innerIconRight:{type:String},staticLabel:{type:Boolean},placeholder:{type:String},color:{type:String,default:"primary"},progressColor:{type:String},bgColor:{type:String},minlength:{type:[Number,String]},maxlength:{type:[Number,String]},step:{type:[Number,String]},min:{type:[Number,String]},max:{type:[Number,String]},dark:{type:Boolean},outline:{type:Boolean},round:{type:Boolean},shadow:{type:Boolean},tile:{type:Boolean},loading:{type:Boolean}},emits:["input","update:modelValue","focus","blur","click:inner-icon-left","click:inner-icon-right"],data(){return{inputValue:this.modelValue,inputNumberError:!1,isFocused:!1}},computed:{listeners(){const e=this.$attrs,{input:n,focus:l,blur:t}=e;return a(e,["input","focus","blur"])},attrs(){const e=this.$attrs,{class:n}=e;return a(e,["class"])},hasValue(){return this.inputValue||["date","time"].includes(this.type)||"number"===this.type&&this.inputNumberError},hasLabel(){return this.label||this.$slots.default},showLabelInside(){return!this.staticLabel||!this.hasValue&&!this.placeholder},classes(){return{"w-input":!0,"w-input--disabled":this.isDisabled,"w-input--readonly":this.isReadonly,["w-input--"+(this.hasValue?"filled":"empty")]:!0,"w-input--focused":this.isFocused,"w-input--dark":this.dark,"w-input--floating-label":this.hasLabel&&"inside"===this.labelPosition&&!this.staticLabel,"w-input--no-padding":!(this.outline||this.bgColor||this.shadow||this.round),"w-input--has-placeholder":this.placeholder,"w-input--inner-icon-left":this.innerIconLeft,"w-input--inner-icon-right":this.innerIconRight}},inputWrapClasses(){return{[!1===this.valid?"error":this.color]:this.color||!1===this.valid,[`${this.bgColor}--bg`]:this.bgColor,"w-input__input-wrap--round":this.round,"w-input__input-wrap--tile":this.tile,"w-input__input-wrap--box":this.outline||this.bgColor||this.shadow,"w-input__input-wrap--underline":!this.outline,"w-input__input-wrap--shadow":this.shadow,"w-input__input-wrap--no-padding":!(this.outline||this.bgColor||this.shadow||this.round),"w-input__input-wrap--loading":this.loading}}},methods:{onInput(e){this.inputNumberError=e.target.validity.badInput,this.$emit("update:modelValue",this.inputValue),this.$emit("input",this.inputValue)},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)}},watch:{modelValue(e){this.inputValue=e}},render:function(e,n,l,t,i,s){const a=m("w-icon"),p=m("w-progress");return o(),d(x(e.formRegister?"w-form-element":"div"),_({ref:"formEl"},e.formRegister&&{validators:e.validators,inputValue:i.inputValue,disabled:e.isDisabled,readonly:e.isReadonly,isFocused:i.isFocused},{valid:e.valid,"onUpdate:valid":n[8]||(n[8]=n=>e.valid=n),onReset:n[9]||(n[9]=n=>{e.$emit("update:modelValue",i.inputValue=""),e.$emit("input","")}),class:s.classes}),{default:u((()=>["hidden"===l.type?b((o(),d("input",{key:0,type:"hidden",name:e.name||null,"onUpdate:modelValue":n[1]||(n[1]=e=>i.inputValue=e)},null,8,["name"])),[[h,i.inputValue]]):(o(),d(w,{key:1},["left"===l.labelPosition?(o(),d(w,{key:0},[e.$slots.default?(o(),d("label",{key:0,class:"w-input__label w-input__label--left w-form-el-shakable",for:`w-input--${e._.uid}`},[f(e.$slots,"default")],8,["for"])):l.label?(o(),d("label",{key:1,class:"w-input__label w-input__label--left w-form-el-shakable",for:`w-input--${e._.uid}`,innerHTML:l.label},null,8,["for","innerHTML"])):g("",!0)],64)):g("",!0),r("div",{class:["w-input__input-wrap",s.inputWrapClasses]},[l.innerIconLeft?(o(),d(a,{key:0,class:"w-input__icon w-input__icon--inner-left",tag:"label",for:`w-input--${e._.uid}`,onClick:n[2]||(n[2]=n=>e.$emit("click:inner-icon-left",n))},{default:u((()=>[c(y(l.innerIconLeft),1)])),_:1},8,["for"])):g("",!0),b(r("input",_({class:"w-input__input","onUpdate:modelValue":n[3]||(n[3]=e=>i.inputValue=e)},k(s.listeners),{onInput:n[4]||(n[4]=(...e)=>s.onInput&&s.onInput(...e)),onFocus:n[5]||(n[5]=(...e)=>s.onFocus&&s.onFocus(...e)),onBlur:n[6]||(n[6]=(...e)=>s.onBlur&&s.onBlur(...e)),id:`w-input--${e._.uid}`,type:l.type,name:e.inputName,placeholder:l.placeholder||null,step:l.step||null,min:l.min||null,max:l.max||null,minlength:l.minlength||null,maxlength:l.maxlength||null,readonly:e.isReadonly||null,"aria-readonly":e.isReadonly?"true":"false",disabled:e.isDisabled||null,required:e.required||null},s.attrs),null,16,["id","type","name","placeholder","step","min","max","minlength","maxlength","readonly","aria-readonly","disabled","required"]),[[v,i.inputValue]]),"inside"===l.labelPosition&&s.showLabelInside?(o(),d(w,{key:1},[e.$slots.default?(o(),d("label",{key:0,class:["w-input__label w-input__label--inside w-form-el-shakable",i.isFocused&&{[!1===e.valid?"error":l.color]:l.color||!1===e.valid}],for:`w-input--${e._.uid}`},[f(e.$slots,"default")],10,["for"])):l.label?(o(),d("label",{key:1,class:["w-input__label w-input__label--inside w-form-el-shakable",i.isFocused&&{[!1===e.valid?"error":l.color]:l.color||!1===e.valid}],for:`w-input--${e._.uid}`,innerHTML:l.label},null,10,["for","innerHTML"])):g("",!0)],64)):g("",!0),l.innerIconRight?(o(),d(a,{key:2,class:"w-input__icon w-input__icon--inner-right",tag:"label",for:`w-input--${e._.uid}`,onClick:n[7]||(n[7]=n=>e.$emit("click:inner-icon-right",n))},{default:u((()=>[c(y(l.innerIconRight),1)])),_:1},8,["for"])):g("",!0)],2),"right"===l.labelPosition?(o(),d(w,{key:1},[e.$slots.default?(o(),d("label",{key:0,class:"w-input__label w-input__label--right w-form-el-shakable",for:`w-input--${e._.uid}`},[f(e.$slots,"default")],8,["for"])):l.label?(o(),d("label",{key:1,class:"w-input__label w-input__label--right w-form-el-shakable",for:`w-input--${e._.uid}`,innerHTML:l.label},null,8,["for","innerHTML"])):g("",!0)],64)):g("",!0),l.loading?(o(),d(p,{key:2,class:"fill-width",size:"2",color:l.progressColor||l.color},null,8,["color"])):g("",!0)],64))])),_:3},16,["valid","class"])}},Rn=r("div",{class:"w-divider my12"},null,-1),On=c("API");const Vn={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>The text content of the input field.<br>Gets updated on text input.',type:"Applies a native HTML <code>type</code> attribute.",label:"Sets a visible label for the input field.",labelPosition:"Sets the position of the label to one of the following positions: 'left', 'right', 'inside'.",innerIconLeft:"Adds an icon on the left inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",innerIconRight:"Adds an icon on the right inside the input field.<br>Accepts a string: e.g. <code>mdi mdi-eye</code>.",staticLabel:"Prevents moving the label above the input field when the <code>labelPosition</code> is equal to <code>inside</code>. If a placeholder is present, it will be hidden and the label will be displayed instead.<br>When a value is set the static label is replaced by the textual value.",placeholder:"Provide a placeholder for the input field. If a label is positioned inside, it will be moved above the field so it doesn't overlap.",color:'Applies a color to the input field\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the input field\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',minlength:"Applies the native HTML <code>minlength</code> attribute.",maxlength:"Applies the native HTML <code>maxlength</code> attribute (prevents typing more than this amount of characters).",step:'Applies the native HTML <code>step</code> attribute used for the <code>type="number"</code> inputs (sets an incremental/decremental integer or floating step number, e.g. <code>0.3</code>).',min:'Applies the native HTML <code>min</code> attribute used for the <code>type="number"</code> inputs (sets an integer or floating minimum number).',max:'Applies the native HTML <code>max</code> attribute used for the <code>type="number"</code> inputs (sets an integer or floating maximum number).',dark:!1,outline:"The outline style applies the provided <code>color</code> (by default the <code>primary</code> color is used) to the text and border and no background color is set.",round:"Sets a maximum border-radius on the corners of the input field, giving it a round look.",shadow:"Applies a drop shadow to the input field.",tile:"Removes the default border-radius and sets sharp edges on the input field.",name:"Provide a native HTML <code>name</code> attribute to the input field. If not provided, a unique name will be computed.",disabled:"Disables the input field making it unreactive to user interactions.",readonly:"The input field will still look like an interactive input field except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the input field.",validators:'<span class="deep-orange">Only for validation, when the input field is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the input field. Each function will be executed on input field validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the input field.'},$n={default:{description:"The label content, if the <code>label</code> prop is not flexible enough."}},Mn={input:{description:"Emitted each time the input text changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[String]":"The new textual input value."}},"update:modelValue":{description:"Emitted each time the input text changes.<br>Updates the v-model value in Vue 3 only.",params:{"[String]":"The new textual input value."}},focus:{description:"Emitted on input focus.",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted on input blur.",params:{"[DOM event object]":"The associated blur DOM event."}},"click:inner-icon-left":{description:"Emitted on click of the left inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}},"click:inner-icon-right":{description:"Emitted on click of the right inner icon, if any.",params:{"[DOM event object]":"The associated click DOM event."}}},qn={data:()=>({propsDescs:Vn,slots:$n}),computed:{props:()=>s(s({},In.props),S.props),events:()=>In.emits.reduce(((e,n)=>(e[n]=Mn[n]||{})&&e),{})},render:function(e,n,l,t,i,s){const a=m("title-link"),c=m("component-api");return o(),d("div",null,[Rn,r(a,{class:"title1",h2:""},{default:u((()=>[On])),_:1}),r(c,{class:"mt0",items:s.props,descriptions:e.propsDescs,title:"Props"},null,8,["items","descriptions"]),r(c,{items:e.slots,title:"Slots"},null,8,["items"]),r(c,{items:s.events,title:"Events"},null,8,["items"])])}},An=c("w-input");const Dn={components:{Examples:Tn,Api:qn},render:function(e,n,l,t,i,s){const a=m("ui-component-title"),c=m("examples"),p=m("api");return o(),d("main",null,[r(a,null,{default:u((()=>[An])),_:1}),r(c),r(p)])}};export default Dn;
