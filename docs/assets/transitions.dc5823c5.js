import{o as n,c as t,a as e,w as i,d as a,f as l,b as o,g as s,r as d}from"./vendor.66ab2837.js";const g=a("Transitions"),r=s('<p>Here is a list of all the available transition components.</p><ul><li><code>w-transition-fade</code></li><li class="mt1"><code>w-transition-scale</code></li><li class="mt1"><code>w-transition-scale-fade</code></li><li class="mt1"><code>w-transition-bounce</code></li><li class="mt1"><code>w-transition-twist</code></li><li class="mt1"><code>w-transition-expand</code></li><li class="mt1"><code>w-transition-slide</code></li><li class="mt1"><code>w-transition-slide-fade</code></li></ul>',2),c=a("The transitions (based on\n"),w=e("a",{href:"https://vuejs.org/v2/guide/transitions.html",target:"_blank"},"Vue native transitions",-1),p=a(")\nwork with element toggling using "),u=e("code",null,"v-if",-1),x=a(" or "),f=e("code",null,"v-show",-1),h=a("."),b=e("br",null,null,-1),m=a("Simple example (with "),v=e("code",null,"show",-1),S=a(" a boolean variable):"),y={class:"w-flex"},E=a('<w-transition-fade>\n  <span v-if="show">Hello!</span>\n</w-transition-fade>\n'),_=a("Transitions showcase"),k={key:0,class:"transition-box"},F={key:0,class:"transition-box"},Y={key:0,class:"transition-box"},X={key:0,class:"transition-box"},C={key:0,class:"transition-box"},T={key:0,class:"transition-box text-nowrap"},B={key:0,class:"transition-box"},D={key:0,class:"transition-box text-nowrap"},R={key:0,class:"transition-box text-nowrap"},j={key:0,class:"transition-box text-nowrap"},H=a('<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleFade = !toggleFade"\n    color="primary"\n    outline>\n    Fade '+l("{{ toggleFade ? 'out' : 'in' }}")+'\n  </w-button>\n  <w-transition-fade>\n    <div class="transition-box" v-if="toggleFade">Fading transition</div>\n  </w-transition-fade>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleScale = !toggleScale"\n    color="primary"\n    outline>\n    Scale '+l("{{ toggleScale ? 'out' : 'in' }}")+'\n  </w-button>\n  <w-transition-scale>\n    <div class="transition-box" v-if="toggleScale">Scaling transition</div>\n  </w-transition-scale>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleScaleFade = !toggleScaleFade"\n    color="primary"\n    outline>\n    Scale fade '+l("{{ toggleScaleFade ? 'out' : 'in' }}")+'\n  </w-button>\n  <w-transition-scale-fade>\n    <div class="transition-box" v-if="toggleScaleFade">Scaling & fading transition</div>\n  </w-transition-scale-fade>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleBounce = !toggleBounce"\n    color="primary"\n    outline>\n    Bounce '+l("{{ toggleBounce ? 'out' : 'in' }}")+'\n  </w-button>\n  <w-transition-bounce>\n    <div class="transition-box" v-if="toggleBounce">Bouncing transition</div>\n  </w-transition-bounce>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleTwist = !toggleTwist"\n    color="primary"\n    outline>\n    Twist '+l("{{ toggleTwist ? 'out' : 'in' }}")+'\n  </w-button>\n  <w-transition-twist>\n    <div class="transition-box" v-if="toggleTwist">Twisting transition</div>\n  </w-transition-twist>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleExpandX = !toggleExpandX"\n    color="primary"\n    outline>\n    '+l("{{ toggleExpandX ? 'Collapse' : 'Expand' }}")+' X\n  </w-button>\n  <w-transition-expand x>\n    <div class="transition-box text-nowrap" v-if="toggleExpandX">X-expanding transition</div>\n  </w-transition-expand>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleExpandY = !toggleExpandY"\n    color="primary"\n    outline>\n    '+l("{{ toggleExpandY ? 'Collapse' : 'Expand' }}")+' Y\n  </w-button>\n  <w-transition-expand y>\n    <div class="transition-box" v-if="toggleExpandY">Y-expanding transition</div>\n  </w-transition-expand>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleExpandXY = !toggleExpandXY"\n    color="primary"\n    outline>\n    '+l("{{ toggleExpandXY ? 'Collapse' : 'Expand' }}")+' X & Y\n  </w-button>\n  <w-transition-expand>\n    <div class="transition-box text-nowrap" v-if="toggleExpandXY">X & Y expanding transition</div>\n  </w-transition-expand>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleSlideFadeDown = !toggleSlideFadeDown"\n    color="primary"\n    outline>\n    Slide fade '+l("{{ toggleSlideFadeDown ? 'up' : 'down' }}")+'\n  </w-button>\n  <w-transition-slide-fade>\n    <div class="transition-box text-nowrap" v-if="toggleSlideFadeDown">Slide fade down transition</div>\n  </w-transition-slide-fade>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleSlideFadeRight = !toggleSlideFadeRight"\n    color="primary"\n    outline>\n    Slide fade '+l("{{ toggleSlideFadeRight ? 'left' : 'right' }}")+'\n  </w-button>\n  <w-transition-slide-fade right>\n    <div class="transition-box text-nowrap" v-if="toggleSlideFadeRight">Slide fade down transition</div>\n  </w-transition-slide-fade>\n</w-flex>\n'),A=a("data: () => ({\n  toggleFade: false,\n  toggleScale: false,\n  toggleScaleFade: false,\n  toggleBounce: false,\n  toggleTwist: false,\n  toggleExpandX: false,\n  toggleExpandY: false,\n  toggleExpandXY: false,\n  toggleSlideFadeDown: false,\n  toggleSlideFadeRight: false\n})\n"),I=a(".transition-toggle {\n  margin: 12px 24px 12px 0;\n  width: 7.7em;\n}\n\n.transition-box {\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 1em;\n  width: 14em;\n  text-align: center;\n}\n"),W=s('<p><strong class="mr1">Note:</strong>the <span class="code">slide-fade</span> transition take the direction in parameter, e.g. <span class="code">left</span>,\n<span class="code">right</span>, <span class="code">up</span>, <span class="code">down</span> and defaults to <span class="code">down</span>.</p>',1),J=a("The "),L=e("span",{class:"code"},"expand",-1),N=a(" transition"),U=e("p",null,"The great thing with Wave UI's expand transition is that it also animates any margin or padding on the\ntransitioning element! Look at this one:",-1),V={key:0,class:"transition-box pa6 ma10 yellow-light5--bg",style:{width:"auto"}},q=e("div",{class:"amber-light4--bg pa2",style:{overflow:"hidden","white-space":"nowrap",width:"200px"}},"X & Y expanding transition",-1),z=a("data: () => ({\n  toggleExpandXY: false\n})"),G=a(".transition-toggle {margin: 12px 24px 12px 0;}\n\n.transition-box {\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 1em;\n  width: 14em;\n  text-align: center;\n}\n\n.transition-box div {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 200px;\n}\n"),K=a("When using the x or xy expand transition, you may want to prevent the content to wrap to a new line while\nthe animation, like in the above example.\nTo do so, you can add the "),M=e("span",{class:"code"},"text-nowrap",-1),O=a(" class on the element being transitioned.\n"),P=a("The "),Q=e("span",{class:"code"},"slide",-1),Z=a(" transition"),$=e("p",null,[a("The slide transition is only designed for elements sliding from outside the view into the view or\nvice-versa, they will slide from 0% visibility to 100% visibility."),e("br"),a("\nIt works well for full screen elements or elements that are in a hidden-overflow container like\nin this example.")],-1),nn={style:{height:"90px",overflow:"hidden",padding:"4px"}},tn=e("div",{class:"title3 mb0"},"A sliding card.",-1),en=a('<div style="height: 90px;overflow: hidden;padding: 4px">\n  <w-button class="mb2" @click="showCard = !showCard">\n    '+l("{{ showCard ? 'Hide' : 'Show' }}")+' Card\n  </w-button>\n  <w-transition-slide left>\n    <w-card v-if="showCard" class="primary-light3--bg white">\n      <div class="title3">A sliding card.</div>\n    </w-card>\n  </w-transition-slide>\n</div>'),an=a("data: () => ({\n  showCard: false\n})\n"),ln=a("Transition duration"),on=e("p",null,[a("You can easily override the default transition/animation duration by setting an explicit\nCSS transition/animation duration on the element being transitioned:\n"),e("span",{class:"code"},'style="animation-duration: 3s"'),a(".")],-1),sn=e("p",null,"The expand transition being fully Javascript driven, it accepts a duration parameter in milliseconds.\nSo you don't need to override the duration from a CSS rule.",-1);const dn={data:()=>({toggleFade:!1,toggleScale:!1,toggleScaleFade:!1,toggleBounce:!1,toggleTwist:!1,toggleExpandX:!1,toggleExpandY:!1,toggleExpandXY:!1,toggleExpandXY2:!1,toggleSlideFadeDown:!1,toggleSlideFadeRight:!1,showCard:!1}),render:function(s,dn,gn,rn,cn,wn){const pn=d("title-link"),un=d("ssh-pre"),xn=d("alert"),fn=d("w-button"),hn=d("w-transition-fade"),bn=d("w-flex"),mn=d("w-transition-scale"),vn=d("w-transition-scale-fade"),Sn=d("w-transition-bounce"),yn=d("w-transition-twist"),En=d("w-transition-expand"),_n=d("w-transition-slide-fade"),kn=d("example"),Fn=d("w-card"),Yn=d("w-transition-slide");return n(),t("main",null,[e(pn,{class:"mt4",h1:""},{default:i((()=>[g])),_:1}),r,e(xn,{info:""},{default:i((()=>[c,w,p,u,x,f,h,b,m,v,S,e("div",y,[e(un,{class:"mb0",language:"html-vue"},{default:i((()=>[E])),_:1})])])),_:1}),e(pn,{h2:""},{default:i((()=>[_])),_:1}),e(kn,null,{html:i((()=>[H])),js:i((()=>[A])),css:i((()=>[I])),default:i((()=>[e(bn,{"align-center":""},{default:i((()=>[e(fn,{class:"transition-toggle",onClick:dn[1]||(dn[1]=n=>s.toggleFade=!s.toggleFade),color:"primary",outline:""},{default:i((()=>[a("Fade "+l(s.toggleFade?"out":"in"),1)])),_:1}),e(hn,null,{default:i((()=>[s.toggleFade?(n(),t("div",k,"Fading transition")):o("",!0)])),_:1})])),_:1}),e(bn,{"align-center":""},{default:i((()=>[e(fn,{class:"transition-toggle",onClick:dn[2]||(dn[2]=n=>s.toggleScale=!s.toggleScale),color:"primary",outline:""},{default:i((()=>[a("Scale "+l(s.toggleScale?"out":"in"),1)])),_:1}),e(mn,null,{default:i((()=>[s.toggleScale?(n(),t("div",F,"Scaling transition")):o("",!0)])),_:1})])),_:1}),e(bn,{"align-center":""},{default:i((()=>[e(fn,{class:"transition-toggle",onClick:dn[3]||(dn[3]=n=>s.toggleScaleFade=!s.toggleScaleFade),color:"primary",outline:""},{default:i((()=>[a("Scale fade "+l(s.toggleScaleFade?"out":"in"),1)])),_:1}),e(vn,null,{default:i((()=>[s.toggleScaleFade?(n(),t("div",Y,"Scaling & fading transition")):o("",!0)])),_:1})])),_:1}),e(bn,{"align-center":""},{default:i((()=>[e(fn,{class:"transition-toggle",onClick:dn[4]||(dn[4]=n=>s.toggleBounce=!s.toggleBounce),color:"primary",outline:""},{default:i((()=>[a("Bounce "+l(s.toggleBounce?"out":"in"),1)])),_:1}),e(Sn,null,{default:i((()=>[s.toggleBounce?(n(),t("div",X,"Bouncing transition")):o("",!0)])),_:1})])),_:1}),e(bn,{"align-center":""},{default:i((()=>[e(fn,{class:"transition-toggle",onClick:dn[5]||(dn[5]=n=>s.toggleTwist=!s.toggleTwist),color:"primary",outline:""},{default:i((()=>[a("Twist "+l(s.toggleTwist?"out":"in"),1)])),_:1}),e(yn,null,{default:i((()=>[s.toggleTwist?(n(),t("div",C,"Twisting transition")):o("",!0)])),_:1})])),_:1}),e(bn,{"align-center":""},{default:i((()=>[e(fn,{class:"transition-toggle",onClick:dn[6]||(dn[6]=n=>s.toggleExpandX=!s.toggleExpandX),color:"primary",outline:""},{default:i((()=>[a(l(s.toggleExpandX?"Collapse":"Expand")+" X",1)])),_:1}),e(En,{x:""},{default:i((()=>[s.toggleExpandX?(n(),t("div",T,"X-expanding transition")):o("",!0)])),_:1})])),_:1}),e(bn,{"align-center":""},{default:i((()=>[e(fn,{class:"transition-toggle",onClick:dn[7]||(dn[7]=n=>s.toggleExpandY=!s.toggleExpandY),color:"primary",outline:""},{default:i((()=>[a(l(s.toggleExpandY?"Collapse":"Expand")+" Y",1)])),_:1}),e(En,{y:""},{default:i((()=>[s.toggleExpandY?(n(),t("div",B,"Y-expanding transition")):o("",!0)])),_:1})])),_:1}),e(bn,{"align-center":""},{default:i((()=>[e(fn,{class:"transition-toggle",onClick:dn[8]||(dn[8]=n=>s.toggleExpandXY=!s.toggleExpandXY),color:"primary",outline:""},{default:i((()=>[a(l(s.toggleExpandXY?"Collapse":"Expand")+" X & Y",1)])),_:1}),e(En,null,{default:i((()=>[s.toggleExpandXY?(n(),t("div",D,"X & Y expanding transition")):o("",!0)])),_:1})])),_:1}),e(bn,{"align-center":""},{default:i((()=>[e(fn,{class:"transition-toggle",onClick:dn[9]||(dn[9]=n=>s.toggleSlideFadeDown=!s.toggleSlideFadeDown),color:"primary",outline:""},{default:i((()=>[a("Slide fade "+l(s.toggleSlideFadeDown?"up":"down"),1)])),_:1}),e(_n,null,{default:i((()=>[s.toggleSlideFadeDown?(n(),t("div",R,"Slide fade down transition")):o("",!0)])),_:1})])),_:1}),e(bn,{"align-center":""},{default:i((()=>[e(fn,{class:"transition-toggle",onClick:dn[10]||(dn[10]=n=>s.toggleSlideFadeRight=!s.toggleSlideFadeRight),color:"primary",outline:""},{default:i((()=>[a("Slide fade "+l(s.toggleSlideFadeRight?"left":"right"),1)])),_:1}),e(_n,{right:""},{default:i((()=>[s.toggleSlideFadeRight?(n(),t("div",j,"Slide fade right transition")):o("",!0)])),_:1})])),_:1})])),_:1}),W,e(pn,{h2:"",slug:"the-expand-transition"},{default:i((()=>[J,L,N])),_:1}),U,e(kn,null,{html:i((()=>[a('<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleExpandXY = !toggleExpandXY"\n    color="primary"\n    outline\n    width="7.3em">\n    '+l(s.toggleExpandXY?"Collapse":"Expand")+' X & Y\n  </w-button>\n  <w-transition-expand :duration="2000">\n    <div\n      v-if="toggleExpandXY"\n      class="transition-box pa6 ma10 yellow-light5--bg"\n      style="width: auto">\n      <div class="amber-light4--bg pa2">\n        X & Y expanding transition\n      </div>\n    </div>\n  </w-transition-expand>\n</w-flex>',1)])),js:i((()=>[z])),css:i((()=>[G])),default:i((()=>[e(bn,{"align-center":""},{default:i((()=>[e(fn,{class:"transition-toggle",onClick:dn[11]||(dn[11]=n=>s.toggleExpandXY2=!s.toggleExpandXY2),color:"primary",outline:"",width:"7.3em"},{default:i((()=>[a(l(s.toggleExpandXY2?"Collapse":"Expand")+" X & Y",1)])),_:1}),e(En,{duration:2e3},{default:i((()=>[s.toggleExpandXY2?(n(),t("div",V,[q])):o("",!0)])),_:1})])),_:1})])),_:1}),e(xn,{tip:""},{default:i((()=>[K,M,O])),_:1}),e(pn,{h2:"",slug:"the-slide-transition"},{default:i((()=>[P,Q,Z])),_:1}),$,e(kn,null,{html:i((()=>[en])),js:i((()=>[an])),default:i((()=>[e("div",nn,[e(fn,{class:"mb2",onClick:dn[12]||(dn[12]=n=>s.showCard=!s.showCard)},{default:i((()=>[a(l(s.showCard?"Hide":"Show")+" Card",1)])),_:1}),e(Yn,{left:""},{default:i((()=>[s.showCard?(n(),t(Fn,{key:0,class:"primary-light3--bg white"},{default:i((()=>[tn])),_:1})):o("",!0)])),_:1})])])),_:1}),e(pn,{h2:""},{default:i((()=>[ln])),_:1}),on,sn])}};export default dn;
