import{c as s}from"./colors.8ca6c76f.js";import{o as e,c as a,a as n,w as l,F as d,u as c,d as o,f as t,g as i,r}from"./vendor.66ab2837.js";const b=o("shadows, borders & border radii"),u=n("p",null,[o("Wave UI offers a few CSS helper classes to control the drop shadow, borders and border radii."),n("br"),o("\nYou can use these classes on any component and any DOM element, even if the element is not part of\nWave UI."),n("br")],-1),h=o("The following offered classes are targetting the common use cases: there isn't a CSS class for\nanything you want to accomplish. It's of course a trade-off to keep the library lean."),m=n("br",null,null,-1),x=o("\nThat being said, it's very easy to add your own classes based on the same principle in your CSS!\n"),f=o("Shadows"),v=n("p",null,[o("Element shadows range from "),n("code",null,"-6"),o(" to "),n("code",null,"6"),o(". Negative values will produce an inset shadow,\nwhereas positive values will produce an outter drop shodow. "),n("code",null,".sh0"),o(" will remove any shadow.")],-1),w={class:"w-flex wrap"},p={class:"code"},g=o('<w-flex wrap>\n  <div class="box sh-6">.sh-6</div>\n  <div class="box sh-5">.sh-5</div>\n  <div class="box sh-4">.sh-4</div>\n  <div class="box sh-3">.sh-3</div>\n  <div class="box sh-2">.sh-2</div>\n  <div class="box sh-1">.sh-1</div>\n  <div class="box sh0">.sh0</div>\n  <div class="box sh1">.sh1</div>\n  <div class="box sh2">.sh2</div>\n  <div class="box sh3">.sh3</div>\n  <div class="box sh4">.sh4</div>\n  <div class="box sh5">.sh5</div>\n  <div class="box sh6">.sh6</div>\n</w-flex>'),y=o(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n\n"),j=o("Borders"),_=n("p",null,[o("Element borders range from "),n("code",null,"0"),o(" to "),n("code",null,"6"),o(", corresponding to the same number of pixels (for\nthe "),n("span",{class:"code"},"border-width"),o(") on all the sides. "),n("code",null,".bd0"),o(" will remove any border.")],-1),Y={class:"w-flex wrap"},S={class:"code"},k=o('<w-flex wrap>\n  <div class="box bd0">.bd0</div>\n  <div class="box bd1">.bd1</div>\n  <div class="box bd2">.bd2</div>\n  <div class="box bd3">.bd3</div>\n  <div class="box bd4">.bd4</div>\n  <div class="box bd5">.bd5</div>\n  <div class="box bd6">.bd6</div>\n</w-flex>'),I=o(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n\n"),U=o("Border radii"),C=i('<p>The border radii range from <code>0</code> to <code>6</code>, and are incremented by the <code>$base-increment</code>\n(SCSS variable) which is equal to 4px by default.<br> <code>.bdrs0</code> will remove any border radius, <code>.bdrsr</code> will produce a <strong>round</strong> border\nradius, <code>.bdrsm</code> will produce a <strong>max</strong> border radius (<span class="code">100%</span>).</p>',1),B=o("Here is difference between "),E=n("code",null,".bdrsr",-1),T=o(" and "),$=n("code",null,".bdrsm",-1),q=o(" (only visible on non-square elements):"),A=n("div",{class:"w-flex"},[n("div",{class:"box box--rect blue-light5--bg ma4 d-flex align-center justify-center bdrsr"},[n("span",{class:"code"},".bdrsr")]),n("div",{class:"box box--rect blue-light5--bg ma4 d-flex align-center justify-center bdrsm"},[n("span",{class:"code"},".bdrsm")])],-1),W={class:"w-flex wrap"},z={class:"code"},D=n("div",{class:"box blue-light5--bg ma4 d-flex align-center justify-center bdrsr"},[n("span",{class:"code"},".bdrsr")],-1),F=n("div",{class:"box blue-light5--bg ma4 d-flex align-center justify-center bdrsm"},[n("span",{class:"code"},".bdrsm")],-1),H=o('<w-flex wrap>\n  <div class="box bdrs0">.bdrs0</div>\n  <div class="box bdrs1">.bdrs1</div>\n  <div class="box bdrs2">.bdrs2</div>\n  <div class="box bdrs3">.bdrs3</div>\n  <div class="box bdrs4">.bdrs4</div>\n  <div class="box bdrs5">.bdrs5</div>\n  <div class="box bdrs6">.bdrs6</div>\n  <div class="box bdrsr">.bdrsr</div>\n  <div class="box bdrsm">.bdrsm</div>\n</w-flex>'),M=o(".box {\n  width: 80px;\n  height: 80px;\n  margin: 4px; /* You could use the class `ma1`. */\n  background-color: #e3f2fd; /* You could use the class `blue-light5--bg`. */\n  display: flex; /* You could use the class `d-flex`. */\n  align-items: center; /* You could use the class `align-center`. */\n  justify-content: center; /* You could use the class `justify-center`. */\n}\n\n"),N=o("Examples of use on UI components"),O=n("p",null,"Bellow are a few examples of components which accept the presented classes.",-1),G=n("span",{class:"caption mt3"},[n("strong",{class:"code"},"w-image"),o(" with "),n("code",{class:"mx1"},".bd1"),o(", "),n("code",{class:"mx1"},".bdrsr"),o(" and "),n("code",{class:"mx1"},".sh1"),o(" classes.")],-1),J=n("span",{class:"caption"},[o("a "),n("strong",{class:"code mx1"},"w-switch"),o(" with a "),n("code",{class:"mx1"},".bdrs1"),o(" class.")],-1),K=o('<w-flex align-center justify-space-around wrap>\n  <w-flex column align-center justify-center class="no-grow">\n    <w-image\n      class="bd1 sh1 bdrsr d-block"\n      :src="`${baseUrl}images/japanese-wave.png`"\n      :width="100"\n      :height="100">\n    </w-image>\n    <span class="caption mt3">\n      w-image with `.bd1`, `.bdrsr` and `.sh1` classes.\n    </span>\n  </w-flex>\n\n  <w-switch :value="true" class="bdrs1 my4">\n    <span class="caption">\n      a w-switch with a `.bdrs1` class.\n    </span>\n  </w-switch>\n</w-flex>'),L=o("data: () => ({\n  baseUrl: 'https://antoniandre.github.io/wave-ui/'\n})\n"),P=n("div",{class:"caption"},[o("a "),n("strong",{class:"code mx1"},"w-card"),o(" with "),n("code",{class:"mx1"},".bd0"),o(", "),n("code",{class:"mx1"},".bdrs4"),o(" and "),n("code",{class:"mx1"},".sh2"),o(" classes.")],-1),Q=n("div",{class:"title5"},[o("Accordion with "),n("code",{class:"mx1"},".bd1"),o(" and "),n("code",{class:"mx1"},".bdrs2"),o(" classes.")],-1),R=o('<w-card bg-color="orange-light5" class="bdrs4 bd0 sh2">\n  <div class="caption">\n    a w-card with `.bd0`, `.bdrs4` and `.sh2` classes.\n  </div>\n</w-card>\n\n<w-accordion :items="2" class="mt8 bdrs2 bd1">\n  <template #item-title="{ index }">\n    <div class="title5">\n      Accordion with `.bd1` and `.bdrs2` classes.\n    </div>\n  </template>\n\n  <template #item-title.2="{ index }">\n    Item '+t("{{ index }}")+'\n  </template>\n  <template #item-content="{ index }">\n    Content '+t("{{ index }}")+"\n  </template>\n</w-accordion>\n"),V=o("Some of the UI components that have wrappers won't work nicely with the border and shadow classes.\nIn this case you need to style them from your CSS.");const X={data:()=>({colors:s,horizontal:!1,baseUrl:"/waveui-vite/"}),render:function(s,i,X,Z,ss,es){const as=r("title-link"),ns=r("alert"),ls=r("example"),ds=r("w-divider"),cs=r("w-image"),os=r("w-flex"),ts=r("w-switch"),is=r("w-card"),rs=r("w-accordion");return e(),a("main",null,[n(as,{class:"mt4",h1:""},{default:l((()=>[b])),_:1}),u,n(ns,{tip:""},{default:l((()=>[h,m,x])),_:1}),n(as,{h2:""},{default:l((()=>[f])),_:1}),v,n(ls,null,{html:l((()=>[g])),css:l((()=>[y])),default:l((()=>[n("div",w,[(e(),a(d,null,c(13,(s=>n("div",{class:["box blue-light5--bg ma4 d-flex align-center justify-center","sh"+(s-7)],key:s},[n("span",p,".sh"+t(s-7),1)],2))),64))])])),_:1}),n(as,{h2:""},{default:l((()=>[j])),_:1}),_,n(ls,null,{html:l((()=>[k])),css:l((()=>[I])),default:l((()=>[n("div",Y,[(e(),a(d,null,c(7,(s=>n("div",{class:["box blue-light5--bg ma4 d-flex align-center justify-center","bd"+(s-1)],key:s},[n("span",S,".bd"+t(s-1),1)],2))),64))])])),_:1}),n(as,{h2:""},{default:l((()=>[U])),_:1}),C,n(ns,{tip:""},{default:l((()=>[B,E,T,$,q,A])),_:1}),n(ls,null,{html:l((()=>[H])),css:l((()=>[M])),default:l((()=>[n("div",W,[(e(),a(d,null,c(7,(s=>n("div",{class:["box blue-light5--bg ma4 d-flex align-center justify-center","bdrs"+(s-1)],key:s},[n("span",z,".bdrs"+t(s-1),1)],2))),64)),D,F])])),_:1}),n(ds,{class:"my12"}),n(as,{h2:""},{default:l((()=>[N])),_:1}),O,n(ls,null,{html:l((()=>[K])),js:l((()=>[L])),default:l((()=>[n(os,{"align-center":"","justify-space-around":"",wrap:""},{default:l((()=>[n(os,{class:"no-grow",column:"","align-center":"","justify-center":""},{default:l((()=>[n(cs,{class:"bd1 sh1 bdrsr d-block",src:`${s.baseUrl}images/japanese-wave.png`,width:100,height:100},null,8,["src"]),G])),_:1}),n(ts,{class:"bdrs1 my4",value:!0},{default:l((()=>[J])),_:1})])),_:1})])),_:1}),n(ls,{class:"mt8"},{html:l((()=>[R])),default:l((()=>[n(is,{class:"bdrs4 bd0 sh2","bg-color":"orange-light5"},{default:l((()=>[P])),_:1}),n(rs,{class:"mt8 bdrs2 bd1",items:2},{"item-title":l((({index:s})=>[Q])),"item-title.2":l((({index:s})=>[o("Item "+t(s),1)])),"item-content":l((({index:s})=>[o("Content "+t(s),1)])),_:1})])),_:1}),n(ns,{info:""},{default:l((()=>[V])),_:1})])}};export default X;
