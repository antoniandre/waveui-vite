var t=Object.defineProperty,o=Object.defineProperties,e=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,a=(o,e,n)=>e in o?t(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n;import{o as s,c as r,a as c,w as p,m as d,t as h,d as m,f as u,r as w,q as f,s as v,v as g,T as b}from"./vendor.66ab2837.js";import{c as y}from"./console.e8b28bea.js";const x={class:"tooltips-demo"},_=c("strong",null,"Important notes",-1),k=c("br",null,null,-1),T=m("\nBy default when you use "),S=c("code",null,"<w-tooltip>",-1),C=m(", it creates a wrapper around the activator\nelement and the tooltip is added inside this wrapper."),H=c("br",null,null,-1),E=m("\nIn this case you can add classes to the wrapper to style it as desired."),B=c("br",null,null,-1),O=c("br",null,null,-1),I=m("\nBut in some cases, for instance if the activator element is placed in a container that has a hidden\noverflow, the tooltip needs to be placed outside of this container to be fully visible."),P=c("br",null,null,-1),V=m("\nYou can use the "),$=c("code",null,"detachTo",-1),A=m(" prop to place it elsewhere in the DOM, like in the\n"),j=c("a",{href:"#appending-to-a-dom-node"},"Appending to a particular DOM node",-1),q=m(" example."),D=c("br",null,null,-1),M=m("\nIn this case, the wrapper will be hidden and unstylable whereas the tooltip itself will be appended to\nthe DOM node you provided.\n"),N=m("Tooltip position"),R=m("mdi mdi-home"),W=m("Home"),z=m("mdi mdi-home"),U=m("Home"),F=m("mdi mdi-home"),L=m("Home"),Y=m("mdi mdi-home"),G=m("Home"),J=m('<div class="text-center">\n  <w-tooltip left>\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="primary-light2">\n        mdi mdi-home\n      </w-icon>\n    </template>\n    Home\n  </w-tooltip>\n\n  <w-tooltip top>\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="primary-light2">\n        mdi mdi-home\n      </w-icon>\n    </template>\n    Home\n  </w-tooltip>\n\n  <w-tooltip>\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="primary-light2">\n        mdi mdi-home\n      </w-icon>\n    </template>\n    Home\n  </w-tooltip>\n\n  <w-tooltip right>\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="primary-light2">\n        mdi mdi-home\n      </w-icon>\n    </template>\n    Home\n  </w-tooltip>\n</div>\n'),K=m("Toggle on click"),Q=m("wi-star"),X=m("Star"),Z=m("Star"),tt=m("wi-star"),ot=m("Star"),et=m("Star"),nt=m('<div class="text-center">\n  <w-tooltip show-on-click left>\n    <template #activator="{ on }">\n      <w-button\n        class="ma2"\n        v-on="on"\n        bg-color="info">\n        <w-icon class="mr1">\n          wi-star\n        </w-icon>\n        Star\n      </w-button>\n    </template>\n    Star\n  </w-tooltip>\n\n  <w-tooltip show-on-click right>\n    <template #activator="{ on }">\n      <w-button\n        class="ma2"\n        v-on="on"\n        bg-color="info-dark2"\n        dark>\n        <w-icon class="mr1">\n          wi-star\n        </w-icon>\n        Star\n      </w-button>\n    </template>\n    Star\n  </w-tooltip>\n</div>\n'),it=m("Using v-model"),lt=m("Toggle with v-model"),at=c("p",null,"Click the button to toggle the tooltips.",-1),st={class:"d-iblock my2 mx6"},rt=m("wi-star"),ct=m("Star"),pt=m("wi-star"),dt=m("Star"),ht=m("wi-star"),mt=m("Star"),ut=m("wi-star"),wt=m("Star"),ft=m('<div class="text-center">\n  <w-button\n    @click="showTooltip = !showTooltip"\n    class="my2 mx6"\n    bg-color="primary"\n    dark\n    width="6em">\n    '+u("{{ showTooltip ? 'Hide' : 'Show' }}")+' tooltip\n  </w-button>\n\n  <div class="d-iblock my2 mx6">\n    <w-tooltip\n      class="ma2"\n      v-model="showTooltip"\n      show-on-click\n      left>\n      <template #activator="{ on }">\n        <w-icon v-on="on">wi-star</w-icon>\n      </template>\n      Star\n    </w-tooltip>\n\n    <w-tooltip\n      class="ma2"\n      v-model="showTooltip"\n      show-on-click\n      top>\n      <template #activator="{ on }">\n        <w-icon v-on="on">wi-star</w-icon>\n      </template>\n      Star\n    </w-tooltip>\n\n    <w-tooltip\n      class="ma2"\n      v-model="showTooltip"\n      show-on-click>\n      <template #activator="{ on }">\n        <w-icon v-on="on">wi-star</w-icon>\n      </template>\n      Star\n    </w-tooltip>\n\n    <w-tooltip\n      class="ma2"\n      v-model="showTooltip"\n      show-on-click\n      right>\n      <template #activator="{ on }">\n        <w-icon v-on="on">wi-star</w-icon>\n      </template>\n      Star\n    </w-tooltip>\n  </div>\n</div>'),vt=m("data: () => ({\n  showTooltip: false\n})\n"),gt=m("Using v-model to update a variable"),bt=c("p",null,"Click the star to toggle the tooltip.",-1),yt=m("wi-star"),xt=m("Star"),_t={class:"mt4"},kt=m('<w-tooltip\n  v-model="showTooltip"\n  show-on-click\n  right>\n  <template #activator="{ on }">\n    <w-icon v-on="on">wi-star</w-icon>\n  </template>\n  Star\n</w-tooltip>\n\n<div class="mt4">\n  The tooltip is '+u("{{ showTooltip ? 'visible' : 'hidden' }}")+".\n</div>"),Tt=m("data: () => ({\n  showTooltip: false\n})\n"),St=m("Background color & text color"),Ct=c("p",null,[m("Like in most components, you can set a "),c("code",null,"color"),m(" for the text and a "),c("code",null,"bg-color"),m(" for the\nbackground.")],-1),Ht=m("wi-star"),Et=m("Star"),Bt=m("wi-star"),Ot=m("Star"),It=m("wi-star"),Pt=m("Star"),Vt=m("wi-star"),$t=m("Star"),At=m('<div class="text-center pb8">\n  <w-tooltip color="white" bg-color="blue">\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="blue">\n        wi-star\n      </w-icon>\n    </template>\n    Star\n  </w-tooltip>\n\n  <w-tooltip color="white" bg-color="purple">\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="purple">\n        wi-star\n      </w-icon>\n    </template>\n    Star\n  </w-tooltip>\n\n  <w-tooltip\n    color="orange-dark1"\n    bg-color="yellow-light3">\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="amber">\n        wi-star\n      </w-icon>\n    </template>\n    Star\n  </w-tooltip>\n\n  <w-tooltip color="orange">\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl>\n        wi-star\n      </w-icon>\n    </template>\n    Star\n  </w-tooltip>\n</div>\n'),jt=m("Tile, round and shadow"),qt=m("mdi mdi-square"),Dt=m("Tile"),Mt=m("mdi mdi-circle"),Nt=m("Round"),Rt=m("mdi mdi-heart"),Wt=m("Shadow"),zt=m('<div class="text-center pb8">\n  <w-tooltip color="red-light2" tile>\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="red-light2">\n        mdi mdi-square\n      </w-icon>\n    </template>\n    Tile\n  </w-tooltip>\n\n  <w-tooltip color="amber-dark1" round>\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="amber">\n        mdi mdi-circle\n      </w-icon>\n    </template>\n    Round\n  </w-tooltip>\n\n  <w-tooltip color="pink-light1" shadow>\n    <template #activator="{ on }">\n      <w-icon\n        class="ma2"\n        v-on="on"\n        xl\n        color="pink-light1">\n        mdi mdi-heart\n      </w-icon>\n    </template>\n    Shadow\n  </w-tooltip>\n</div>\n'),Ut=m("Different contents"),Ft=m("wi-star"),Lt=m("Star"),Yt=m("Lorem ipsum, dolor sit amet consectetur adipisicing elit."),Gt=c("br",null,null,-1),Jt=m("Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!"),Kt=c("br",null,null,-1),Qt=c("br",null,null,-1),Xt=m("Recusandae distinctio perferendis expedita pariatur fuga."),Zt=m('<div class="text-center">\n  <w-tooltip class="ma3" color="primary">\n    <template #activator="{ on }">\n      <span v-on="on">\n        Content with icon\n      </span>\n    </template>\n    <w-icon class="mr1">wi-star</w-icon>\n    Star\n  </w-tooltip>\n\n  <w-tooltip class="ma3" color="primary">\n    <template #activator="{ on }">\n      <span v-on="on" ref="truc">\n        Very long content\n      </span>\n    </template>\n    Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n    <br />\n    Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!\n    <br />\n    <br />\n    Recusandae distinctio perferendis expedita pariatur fuga.\n  </w-tooltip>\n</div>\n'),to=m("Transitions"),oo={class:"text-center py6"},eo=m("mdi mdi-home"),no=m("Home"),io=m("mdi mdi-home"),lo=m("Home"),ao=m("mdi mdi-home"),so=m("Home"),ro=m("mdi mdi-home"),co=m("Home"),po=m('<div class="text-center">\n  <w-radios\n    class="my4"\n    inline\n    v-model="transition"\n    :items="transitions">\n  </w-radios>\n\n  <div class="text-center py6">\n    <w-tooltip :transition="transition" left>\n      <template #activator="{ on }">\n        <w-icon\n          class="ma2"\n          v-on="on"\n          color="primary"\n          xl>\n          mdi mdi-home\n        </w-icon>\n      </template>\n      Home\n    </w-tooltip>\n\n    <w-tooltip :transition="transition">\n      <template #activator="{ on }">\n        <w-icon\n          class="ma2"\n          v-on="on"\n          color="primary"\n          xl>\n          mdi mdi-home\n        </w-icon>\n      </template>\n      Home\n    </w-tooltip>\n\n    <w-tooltip :transition="transition" top>\n      <template #activator="{ on }">\n        <w-icon\n          class="ma2"\n          v-on="on"\n          color="primary"\n          xl>\n          mdi mdi-home\n        </w-icon>\n      </template>\n      Home\n    </w-tooltip>\n\n    <w-tooltip :transition="transition" right>\n      <template #activator="{ on }">\n        <w-icon\n          class="ma2"\n          v-on="on"\n          color="primary"\n          xl>\n          mdi mdi-home\n        </w-icon>\n      </template>\n      Home\n    </w-tooltip>\n  </div>\n</div>\n'),ho=m("data: () => ({\n  transition: 'bounce',\n  transitions: [\n    { label: 'Default', value: '' },\n    { label: 'Bounce', value: 'bounce' },\n    { label: 'Scale', value: 'scale' },\n    { label: 'Twist', value: 'twist' },\n    { label: 'Fade', value: 'fade' },\n    { label: 'Scale-fade', value: 'scale-fade' }\n  ]\n})\n"),mo=m("Appending to a particular DOM node"),uo=c("p",null,"In this example, the yellow container of the pink activator has an overflow hidden, but we want the\ntooltip to be fully visible. So we detach it to the green container.",-1),wo={class:"another-container text-center green-light5--bg pa6"},fo=m("mdi mdi-bomb"),vo=m("Hover me"),go=c("span",null,[m("This tooltip is appended to the "),c("span",{class:"green"},"green"),m(" container!")],-1),bo=m('<div class="wrapper text-center green-light5--bg pa6">\n  <w-card bg-color="yellow-light5">\n    <w-tooltip detach-to=".wrapper">\n      <template #activator="{ on }">\n        <w-tag\n          v-on="on"\n          lg\n          color="pink-light1"\n          bg-color="pink-light5">\n          <w-icon class="mr1">mdi mdi-bomb</w-icon>\n          Hover me\n      </template>\n\n      <span>\n        This tooltip is appended to the green container!\n      </span>\n    </w-tooltip>\n  </w-card>\n</div>'),yo=m(".wrapper {position: relative;}\n\n.w-card {\n  overflow: hidden;\n  display: inline-block;\n  padding: 8px;\n}\n\n.w-card:before, .w-card:after {\n  content: '';\n  position: absolute;\n  background-color: #ffea62;\n  width: 6em;\n  height: 6em;\n  border-radius: 100%;\n}\n\n.w-card:before {top: 0;left: 0;}\n.w-card:after {bottom: 0;right: 0;}\n\n.w-tag {z-index: 1;}\n"),xo=m("The DOM element that the tooltip is detached to must have a position (fixed, absolute or\nrelative).");const _o={data:()=>({showTooltip:!1,showTooltip2:!1,transition:"bounce",transitions:[{label:"Default",value:""},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Scale-fade",value:"scale-fade"}]})};_o.render=function(t,o,e,n,i,l){const a=w("alert"),f=w("title-link"),v=w("w-icon"),g=w("w-tooltip"),b=w("example"),y=w("w-button"),_o=w("w-radios"),ko=w("w-tag"),To=w("w-card");return s(),r("div",x,[c(a,{tip:""},{default:p((()=>[_,k,T,S,C,H,E,B,O,I,P,V,$,A,j,q,D,M])),_:1}),c(f,{h2:""},{default:p((()=>[N])),_:1}),c(b,{"content-class":"text-center"},{html:p((()=>[J])),default:p((()=>[c(g,{left:""},{activator:p((({on:t})=>[c(v,d({class:"ma2"},h(t),{xl:"",color:"primary-light2"}),{default:p((()=>[R])),_:2},1040)])),default:p((()=>[W])),_:1}),c(g,{top:""},{activator:p((({on:t})=>[c(v,d({class:"ma2"},h(t),{xl:"",color:"primary-light2"}),{default:p((()=>[z])),_:2},1040)])),default:p((()=>[U])),_:1}),c(g,null,{activator:p((({on:t})=>[c(v,d({class:"ma2"},h(t),{xl:"",color:"primary-light2"}),{default:p((()=>[F])),_:2},1040)])),default:p((()=>[L])),_:1}),c(g,{right:""},{activator:p((({on:t})=>[c(v,d({class:"ma2"},h(t),{xl:"",color:"primary-light2"}),{default:p((()=>[Y])),_:2},1040)])),default:p((()=>[G])),_:1})])),_:1}),c(f,{h2:""},{default:p((()=>[K])),_:1}),c(b,{"content-class":"text-center"},{html:p((()=>[nt])),default:p((()=>[c(g,{"show-on-click":"",left:""},{activator:p((({on:t})=>[c(y,d({class:"ma2"},h(t),{"bg-color":"info"}),{default:p((()=>[c(v,{class:"mr1"},{default:p((()=>[Q])),_:1}),X])),_:2},1040)])),default:p((()=>[Z])),_:1}),c(g,{"show-on-click":"",right:""},{activator:p((({on:t})=>[c(y,d({class:"ma2"},h(t),{"bg-color":"info-dark2",dark:""}),{default:p((()=>[c(v,{class:"mr1"},{default:p((()=>[tt])),_:1}),ot])),_:2},1040)])),default:p((()=>[et])),_:1})])),_:1}),c(f,{h2:""},{default:p((()=>[it])),_:1}),c(f,{h3:""},{default:p((()=>[lt])),_:1}),at,c(b,{"content-class":"text-center my4"},{html:p((()=>[ft])),js:p((()=>[vt])),default:p((()=>[c(y,{class:"my2 mx6",onClick:o[1]||(o[1]=o=>t.showTooltip=!t.showTooltip),"bg-color":"primary",dark:"",width:"6em"},{default:p((()=>[m(u(t.showTooltip?"Hide":"Show")+" tooltip",1)])),_:1}),c("div",st,[c(g,{class:"ma2","model-value":t.showTooltip,"show-on-click":"",left:""},{activator:p((({on:t})=>[c(v,h(t),{default:p((()=>[rt])),_:2},1040)])),default:p((()=>[ct])),_:1},8,["model-value"]),c(g,{class:"ma2","model-value":t.showTooltip,"show-on-click":"",top:""},{activator:p((({on:t})=>[c(v,h(t),{default:p((()=>[pt])),_:2},1040)])),default:p((()=>[dt])),_:1},8,["model-value"]),c(g,{class:"ma2","model-value":t.showTooltip,"show-on-click":""},{activator:p((({on:t})=>[c(v,h(t),{default:p((()=>[ht])),_:2},1040)])),default:p((()=>[mt])),_:1},8,["model-value"]),c(g,{class:"ma2","model-value":t.showTooltip,"show-on-click":"",right:""},{activator:p((({on:t})=>[c(v,h(t),{default:p((()=>[ut])),_:2},1040)])),default:p((()=>[wt])),_:1},8,["model-value"])])])),_:1}),c(f,{h3:""},{default:p((()=>[gt])),_:1}),bt,c(b,{"content-class":"text-center my4"},{html:p((()=>[kt])),js:p((()=>[Tt])),default:p((()=>[c(g,{modelValue:t.showTooltip2,"onUpdate:modelValue":o[2]||(o[2]=o=>t.showTooltip2=o),"show-on-click":"",right:""},{activator:p((({on:t})=>[c(v,h(t),{default:p((()=>[yt])),_:2},1040)])),default:p((()=>[xt])),_:1},8,["modelValue"]),c("div",_t,"The tooltip is "+u(t.showTooltip2?"visible":"hidden")+".",1)])),_:1}),c(f,{h2:""},{default:p((()=>[St])),_:1}),Ct,c(b,{"content-class":"text-center pb8"},{html:p((()=>[At])),default:p((()=>[c(g,{color:"white","bg-color":"blue"},{activator:p((({on:t})=>[c(v,d({class:"ma2"},h(t),{xl:"",color:"blue"}),{default:p((()=>[Ht])),_:2},1040)])),default:p((()=>[Et])),_:1}),c(g,{color:"white","bg-color":"purple"},{activator:p((({on:t})=>[c(v,d({class:"ma2"},h(t),{xl:"",color:"purple"}),{default:p((()=>[Bt])),_:2},1040)])),default:p((()=>[Ot])),_:1}),c(g,{color:"orange-dark1","bg-color":"yellow-light3"},{activator:p((({on:t})=>[c(v,d({class:"ma2"},h(t),{xl:"",color:"amber"}),{default:p((()=>[It])),_:2},1040)])),default:p((()=>[Pt])),_:1}),c(g,{color:"orange"},{activator:p((({on:t})=>[c(v,d({class:"ma2"},h(t),{xl:""}),{default:p((()=>[Vt])),_:2},1040)])),default:p((()=>[$t])),_:1})])),_:1}),c(f,{h2:""},{default:p((()=>[jt])),_:1}),c(b,{"content-class":"text-center pb8"},{html:p((()=>[zt])),default:p((()=>[c(g,{color:"red-light2",tile:""},{activator:p((({on:t})=>[c(v,d({class:"ma2"},h(t),{xl:"",color:"red-light2"}),{default:p((()=>[qt])),_:2},1040)])),default:p((()=>[Dt])),_:1}),c(g,{color:"amber-dark1",round:""},{activator:p((({on:t})=>[c(v,d({class:"ma2"},h(t),{xl:"",color:"amber"}),{default:p((()=>[Mt])),_:2},1040)])),default:p((()=>[Nt])),_:1}),c(g,{color:"pink-light1",shadow:""},{activator:p((({on:t})=>[c(v,d({class:"ma2"},h(t),{xl:"",color:"pink-light1"}),{default:p((()=>[Rt])),_:2},1040)])),default:p((()=>[Wt])),_:1})])),_:1}),c(f,{h2:""},{default:p((()=>[Ut])),_:1}),c(b,{"content-class":"text-center"},{html:p((()=>[Zt])),default:p((()=>[c(g,{class:"ma3",color:"primary"},{activator:p((({on:t})=>[c("span",h(t),"Content with icon",16)])),default:p((()=>[c(v,{class:"mr1"},{default:p((()=>[Ft])),_:1}),Lt])),_:1}),c(g,{class:"ma3",color:"primary"},{activator:p((({on:t})=>[c("span",d(h(t),{ref:"truc"}),"Very long content",16)])),default:p((()=>[Yt,Gt,Jt,Kt,Qt,Xt])),_:1})])),_:1}),c(f,{h2:""},{default:p((()=>[to])),_:1}),c(b,{"content-class":"text-center"},{html:p((()=>[po])),js:p((()=>[ho])),default:p((()=>[c(_o,{class:"my4",inline:"",modelValue:t.transition,"onUpdate:modelValue":o[3]||(o[3]=o=>t.transition=o),items:t.transitions},null,8,["modelValue","items"]),c("div",oo,[c(g,{transition:t.transition,left:""},{activator:p((({on:t})=>[c(v,d({class:"ma2"},h(t),{color:"primary",xl:""}),{default:p((()=>[eo])),_:2},1040)])),default:p((()=>[no])),_:1},8,["transition"]),c(g,{transition:t.transition},{activator:p((({on:t})=>[c(v,d({class:"ma2"},h(t),{color:"primary",xl:""}),{default:p((()=>[io])),_:2},1040)])),default:p((()=>[lo])),_:1},8,["transition"]),c(g,{transition:t.transition,top:""},{activator:p((({on:t})=>[c(v,d({class:"ma2"},h(t),{color:"primary",xl:""}),{default:p((()=>[ao])),_:2},1040)])),default:p((()=>[so])),_:1},8,["transition"]),c(g,{transition:t.transition,right:""},{activator:p((({on:t})=>[c(v,d({class:"ma2"},h(t),{color:"primary",xl:""}),{default:p((()=>[ro])),_:2},1040)])),default:p((()=>[co])),_:1},8,["transition"])])])),_:1}),c(f,{h2:"",slug:"appending-to-a-dom-node"},{default:p((()=>[mo])),_:1}),uo,c(b,{class:"mb12","content-class":"pa0"},{html:p((()=>[bo])),css:p((()=>[yo])),default:p((()=>[c("div",wo,[c(To,{"bg-color":"yellow-light5"},{default:p((()=>[c(g,{"detach-to":".another-container"},{activator:p((({on:t})=>[c(ko,d(h(t),{lg:"",color:"pink-light1","bg-color":"pink-light5"}),{default:p((()=>[c(v,{class:"mr1"},{default:p((()=>[fo])),_:1}),vo])),_:2},1040)])),default:p((()=>[go])),_:1})])),_:1})])])),_:1}),c(a,{warning:""},{default:p((()=>[xo])),_:1})])};const ko={name:"w-tooltip",props:{modelValue:{},showOnClick:{type:Boolean},color:{type:String},bgColor:{type:String},noBorder:{type:Boolean},shadow:{type:Boolean},tile:{type:Boolean},round:{type:Boolean},transition:{type:String,default:""},tooltipClass:{type:String},detachTo:{},fixed:{type:Boolean},top:{type:Boolean},bottom:{type:Boolean},left:{type:Boolean},right:{type:Boolean},zIndex:{type:[Number,String,Boolean]}},emits:["input","update:modelValue","open","close"],data:()=>({showTooltip:!1,coordinates:{top:0,left:0,width:0,height:0},activatorEl:null,tooltipEl:null,timeoutId:null}),computed:{transitionName(){const t=this.position.replace(/top|bottom/,(t=>({top:"up",bottom:"down"}[t])));return this.transition||`w-tooltip-slide-fade-${t}`},detachToTarget(){let t=this.detachTo||".w-app";return!0===t||t&&!["object","string"].includes(typeof t)?t=".w-app":"object"!=typeof t||t.nodeType||(t=".w-app",y("Invalid node provided in w-tooltip `attach-to`. Falling back to .w-app.")),"string"==typeof t&&(t=document.querySelector(t)),t||(y("Unable to locate "+(this.detachTo?`target ${this.detachTo}`:".w-app")),t=document.querySelector(".w-app")),t},tooltipParentEl(){return this.detachTo?this.detachToTarget:this.$refs.wrapper},position(){return(this.top?"top":this.bottom&&"bottom")||this.left&&"left"||this.right&&"right"||"bottom"},tooltipCoordinates(){const t={},{top:o,left:e,width:n,height:i}=this.coordinates;switch(this.position){case"top":t.top=o,t.left=e+n/2;break;case"bottom":t.top=o+i,t.left=e+n/2;break;case"left":t.top=o+i/2,t.left=e;break;case"right":t.top=o+i/2,t.left=e+n}return t},classes(){return{[this.color]:!this.bgColor,[`${this.bgColor} ${this.bgColor}--bg`]:this.bgColor,[this.tooltipClass]:this.tooltipClass,[`w-tooltip--${this.position}`]:!0,"w-tooltip--tile":this.tile,"w-tooltip--round":this.round,"w-tooltip--shadow":this.shadow,"w-tooltip--fixed":this.fixed,"w-tooltip--active":this.showTooltip,"w-tooltip--no-border":this.noBorder||this.bgColor,"w-tooltip--custom-transition":this.transition}},styles(){return{zIndex:this.zIndex||0===this.zIndex||null,top:~~this.tooltipCoordinates.top+"px",left:~~this.tooltipCoordinates.left+"px"}},eventHandlers(){let t={};return this.showOnClick?t={click:this.toggle}:(t={focus:this.toggle,blur:this.toggle,mouseenter:this.toggle,mouseleave:this.toggle},"ontouchstart"in window&&(t.click=this.toggle)),t}},methods:{toggle(t){let o=this.showTooltip;"ontouchstart"in window?"click"===t.type&&(o=!o):"click"===t.type&&this.showOnClick?o=!o:["mouseenter","focus"].includes(t.type)&&!this.showOnClick?o=!0:["mouseleave","blur"].includes(t.type)&&!this.showOnClick&&(o=!1),this.timeoutId=clearTimeout(this.timeoutId),o?(this.coordinates=this.getCoordinates(t),this.timeoutId=setTimeout((()=>{this.showTooltip=!0,this.$emit("update:modelValue",!0),this.$emit("input",!0),this.$emit("open")}),10)):(this.showTooltip=!1,this.$emit("update:modelValue",!1),this.$emit("input",!1),this.$emit("close"))},getCoordinates(){const{top:t,left:s,width:r,height:c}=this.activatorEl.getBoundingClientRect();let p={top:t,left:s,width:r,height:c};if(!this.fixed){const{top:r,left:c}=this.tooltipParentEl.getBoundingClientRect();d=((t,o)=>{for(var e in o||(o={}))i.call(o,e)&&a(t,e,o[e]);if(n)for(var e of n(o))l.call(o,e)&&a(t,e,o[e]);return t})({},p),p=o(d,e({top:t-r,left:s-c}))}var d;const h=this.tooltipEl;h.style.visibility="hidden",h.style.display="table";const m=window.getComputedStyle(h,null);if("top"===this.position&&t-h.offsetHeight<0){const o=-parseInt(m.getPropertyValue("margin-top"));p.top-=t-h.offsetHeight-o-4}else if("left"===this.position&&s-h.offsetWidth<0){const t=-parseInt(m.getPropertyValue("margin-left"));p.left-=s-h.offsetWidth-t-4}else if("right"===this.position&&s+r+h.offsetWidth>window.innerWidth){const t=parseInt(m.getPropertyValue("margin-left"));p.left-=s+r+h.offsetWidth-window.innerWidth+t+4}else if("bottom"===this.position&&t+c+h.offsetHeight>window.innerHeight){const o=parseInt(m.getPropertyValue("margin-top"));p.top-=t+c+h.offsetHeight-window.innerHeight+o+4}return this.transition&&(["top","bottom"].includes(this.position)&&(p.left-=h.offsetWidth/2),["left","right"].includes(this.position)&&(p.top-=h.offsetHeight/2),"left"===this.position&&(p.left-=h.offsetWidth),"top"===this.position&&(p.top-=h.offsetHeight)),h.style.visibility=null,h.style.display="none",p},insertTooltip(){const t=this.$refs.wrapper;t.parentNode.insertBefore(this.activatorEl,t),this.detachToTarget.appendChild(this.tooltipEl)},removeTooltip(){this.tooltipEl&&this.tooltipEl.parentNode&&this.tooltipEl.parentNode.removeChild(this.tooltipEl)}},mounted(){this.activatorEl=this.$refs.wrapper.firstElementChild,this.detachTo&&this.insertTooltip(),this.modelValue&&this.toggle({type:"click",target:this.activatorEl})},beforeUnmount(){this.removeTooltip(),this.activatorEl&&this.activatorEl.parentNode&&this.activatorEl.parentNode.removeChild(this.activatorEl)},watch:{modelValue(t){t!==this.showTooltip&&this.toggle({type:"click",target:this.activatorEl})},detachTo(){this.removeTooltip(),this.insertTooltip()}},render:function(t,o,e,n,i,l){return s(),r("div",{class:["w-tooltip-wrap",{"w-tooltip-wrap--attached":!e.detachTo}],ref:"wrapper"},[f(t.$slots,"activator",{on:l.eventHandlers}),c(b,{name:l.transitionName},{default:p((()=>[v((s(),r("div",{class:["w-tooltip",l.classes],ref:o=>t.tooltipEl=o,key:t._.uid,style:l.styles},[e.bgColor?(s(),r("div",{key:0,class:e.color},[f(t.$slots,"default")],2)):f(t.$slots,"default",{key:1})],6)),[[g,t.showTooltip]])])),_:3},8,["name"])],2)}},To=c("div",{class:"w-divider my12"},null,-1),So=m("API");const Co={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the tooltip. Any truthy value will show the tooltip whereas any falsy value will hide it.',showOnClick:"Triggers the tooltip apparition on activator click instead of hover by default. Another click on the activator will hide the tooltip.",color:'Applies a color to the tooltip\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the tooltip\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',shadow:"Applies a drop shadow to the tooltip.",noBorder:"Removes the default border from the tooltip element.",transition:'Applies a particular transition to the tooltip element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',tile:"Removes the default border-radius and sets sharp edges on the tooltip.",round:"Sets a maximum border-radius on the corners of the tooltip, giving it a round look.",tooltipClass:"Applies a custom CSS class to the tooltip element.",detachTo:"Moves the tooltip element into another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, `.w-app` will be the target.<br>By default a wrapper is created around the activator element and the tooltip is appended inside it.",fixed:"Sets the CSS position of the tooltip to <code>fixed</code> (absolute by default).",top:"Places the tooltip at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container otherwise.",bottom:"Places the tooltip at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container otherwise.",left:"Places the tooltip at the left of the screen when the <code>fixed</code> prop is set to true or at the left of its container otherwise.",right:"Places the tooltip at the right of the screen when the <code>fixed</code> prop is set to true or at the right of its container otherwise.",zIndex:"Applies a z-index (positive or negative integer) to the tooltip."},Ho={activator:{description:'<strong>This slot is required and must have the v-on="on" directive set on it for the tooltip to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},default:{description:"The tooltip content."}},Eo={},Bo={data:()=>({propsDescs:Co,slots:Ho}),computed:{props:()=>ko.props,events:()=>ko.emits.reduce(((t,o)=>(t[o]={description:Eo[o]||""})&&t),{})},render:function(t,o,e,n,i,l){const a=w("title-link"),d=w("component-api");return s(),r("div",null,[To,c(a,{class:"title1",h2:""},{default:p((()=>[So])),_:1}),c(d,{class:"mt0",items:l.props,descriptions:t.propsDescs,title:"Props"},null,8,["items","descriptions"]),c(d,{items:t.slots,title:"Slots"},null,8,["items"]),c(d,{items:l.events,title:"Events"},null,8,["items"])])}},Oo=m("w-tooltip");const Io={components:{Examples:_o,Api:Bo},render:function(t,o,e,n,i,l){const a=w("ui-component-title"),d=w("examples"),h=w("api");return s(),r("main",null,[c(a,null,{default:p((()=>[Oo])),_:1}),c(d),c(h)])}};export default Io;
