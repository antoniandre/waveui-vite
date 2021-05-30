import{c as o}from"./colors.8ca6c76f.js";import{o as l,c as a,a as s,w as r,A as e,d as i,f as t,F as c,u as d,g as n,r as p,b as g}from"./vendor.66ab2837.js";const b=i("Colors"),h=s("p",null,[i("Wave UI colors work in a very simple way: for instance the class\n"),s("code",null,"pink"),i(" (or any color listed bellow) can be applied to any\nelement's text, and the class "),s("code",null,"pink--bg"),i(" can be applied to\nany element's background.\n")],-1),y=s("p",null,[i("All the components that accept colors, will accept the "),s("code",null,"color"),i("\nprop for the text color, and "),s("code",null,"bg-color"),i(" for the background when applicable.\n")],-1),v=s("p",null,"This way, it is possible to mix a background color with a different\ntext color of your choice.\n",-1),u=i("Status colors"),m=n('<div class="w-flex wrap ma-2 text-center basis-zero"><div class="color success--bg title3 grow py3 ma2">success</div><div class="color error--bg title3 grow py3 ma2">error</div><div class="color warning--bg title3 grow py3 ma2">warning</div><div class="color info--bg title3 grow py3 ma2">info</div></div>',1),w=i("The four status colors are considered dark and will therefore have a white text by default when used as a background color.\nYou can override this via CSS.\n"),f=n('<h3>Status colors shades</h3><div class="w-flex wrap mb12 ma-2 text-center basis-zero"><div class="w-flex wrap"><div class="color success-light3--bg title3 py3 ma2 body xs12">success-light3</div><div class="color success-light2--bg title3 py3 ma2 body xs12">success-light2</div><div class="color success-light1--bg title3 py3 ma2 body xs12">success-light1</div><div class="color success-dark1--bg title3 py3 ma2 white body xs12">success-dark1</div><div class="color success-dark2--bg title3 py3 ma2 white body xs12">success-dark2</div><div class="color success-dark3--bg title3 py3 ma2 white body xs12">success-dark3</div></div><div class="w-flex wrap"><div class="color error-light3--bg title3 py3 ma2 body xs12">error-light3</div><div class="color error-light2--bg title3 py3 ma2 body xs12">error-light2</div><div class="color error-light1--bg title3 py3 ma2 body xs12">error-light1</div><div class="color error-dark1--bg title3 py3 ma2 white body xs12">error-dark1</div><div class="color error-dark2--bg title3 py3 ma2 white body xs12">error-dark2</div><div class="color error-dark3--bg title3 py3 ma2 white body xs12">error-dark3</div></div><div class="w-flex wrap"><div class="color warning-light3--bg title3 py3 ma2 body xs12">warning-light3</div><div class="color warning-light2--bg title3 py3 ma2 body xs12">warning-light2</div><div class="color warning-light1--bg title3 py3 ma2 body xs12">warning-light1</div><div class="color warning-dark1--bg title3 py3 ma2 white body xs12">warning-dark1</div><div class="color warning-dark2--bg title3 py3 ma2 white body xs12">warning-dark2</div><div class="color warning-dark3--bg title3 py3 ma2 white body xs12">warning-dark3</div></div><div class="w-flex wrap"><div class="color info-light3--bg title3 py3 ma2 body xs12">info-light3</div><div class="color info-light2--bg title3 py3 ma2 body xs12">info-light2</div><div class="color info-light1--bg title3 py3 ma2 body xs12">info-light1</div><div class="color info-dark1--bg title3 py3 ma2 white body xs12">info-dark1</div><div class="color info-dark2--bg title3 py3 ma2 white body xs12">info-dark2</div><div class="color info-dark3--bg title3 py3 ma2 white body xs12">info-dark3</div></div></div>',2),k=s("span",{class:"code"},"primary",-1),x=i(", "),z=s("span",{class:"code"},"secondary",-1),_=i(" and your own colors & shades"),S=s("p",null,[i("In addition to the built-in status colors and color palette bellow, you can define a set\nof custom colors."),s("br"),i("\nThe primary color, and whichever color you add, will also be computed to 6 different shades:\n3 lighter ones and 3 darker ones."),s("br"),i("\nMore shades would most likely be redundant with the color palette.\n")],-1),C=s("div",{class:"color primary-light3--bg title3 grow basis-zero py3 white body"},"primary-light3",-1),I=s("div",{class:"color primary-light2--bg title3 grow basis-zero py3 white body"},"primary-light2",-1),T=s("div",{class:"color primary-light1--bg title3 grow basis-zero py3 white body"},"primary-light1",-1),U=s("div",{class:"color primary--bg title3 grow basis-zero py3 white"},"primary",-1),W=s("div",{class:"color primary-dark1--bg title3 grow basis-zero py3 white body"},"primary-dark1",-1),j=s("div",{class:"color primary-dark2--bg title3 grow basis-zero py3 white body"},"primary-dark2",-1),A=s("div",{class:"color primary-dark3--bg title3 grow basis-zero py3 white body"},"primary-dark3",-1),F=i("The primary color is considered dark by default, and will render,\nas well as its 3 darker shades, with a white text when used as a background color.\n"),Y=s("p",{class:"mt6 title3"},"To start defining your own colors add them to the WaveUI options:",-1),$=i("const waveui = new WaveUI({\n  colors: {\n    primary: '#9ac332',\n    secondary: '#5d9a26'\n  }\n})\n"),B=i("If you don't need it, you can add "),H=s("code",null,"disableColorShades: true",-1),M=i(" to the Wave UI options to disable\nthe color shades computing of the status colors and your custom colors.\n"),P=i("Color Palette"),V=s("p",null,"This built-in color palette will complete your collection of available colors for fast and easy designs.\n",-1),q={class:"w-flex wrap ma-2 basis-zero"},D={class:"color-palette ma2"},E=n('<div class="color color--top ma2 black--bg"><span>black</span><small>#000</small></div><div class="color color--top ma2 white--bg black"><span>white</span><small>#fff</small></div><div class="color color--top ma2 transparent--bg black"><span>transparent</span><small>transparent</small></div><div class="color color--top ma2 inherit--bg black"><span>inherit</span><small>inherit</small></div>',4),G=i("Your own CSS color classes"),J=s("p",null,[i("All the presented colors above are here to make you go faster when you need a color."),s("br"),i("\nBut you are completely free to define CSS classes in your CSS to associate a color to a class."),s("br"),i("\nFor instance, you can define:")],-1),K=i(".pale-green {color: #eafddd;}\n.pale-blue--bg {background-color: #e3ffff;}\n"),L=s("p",null,"...and use it on a component like this:",-1),N=i('<w-tag color="pale-green" bg-color="pale-blue">tag</w-tag>');const O={data:()=>({colors:o,horizontal:!1}),render:function(o,n,O,Q,R,X){const Z=p("title-link"),oo=p("alert"),lo=p("w-flex"),ao=p("ssh-pre"),so=p("w-button");return l(),a("main",null,[s(Z,{class:"mt4",h1:""},{default:r((()=>[b])),_:1}),h,y,v,s(Z,{h2:""},{default:r((()=>[u])),_:1}),m,s(oo,{class:"mb12",warning:""},{default:r((()=>[w])),_:1}),f,s(Z,{h2:"",slug:"primary-secondary-and-your-own-colors-and-shades"},{default:r((()=>[k,x,z,_])),_:1}),S,s(lo,{class:"text-center",wrap:"",gap:4},{default:r((()=>[C,I,T,U,W,j,A])),_:1}),s(oo,{warning:""},{default:r((()=>[F])),_:1}),Y,s(ao,{language:"js"},{default:r((()=>[$])),_:1}),s(oo,{tip:""},{default:r((()=>[B,H,M])),_:1}),s(Z,{class:"mt12 mb4 w-flex align-center",h2:"",slug:"color-palette"},{default:r((()=>[P,s(so,{class:"ml6","bg-color":"primary",sm:"",dark:"",onClick:n[1]||(n[1]=e((l=>o.horizontal=!o.horizontal),["prevent"]))},{default:r((()=>[i(t(o.horizontal?"Vertical":"Horizontal")+" display",1)])),_:1})])),_:1}),V,s("div",{class:["text-center",""+(o.horizontal?"horizontal":"vertical")]},[s("div",q,[(l(!0),a(c,null,d(o.colors,(({color:o,label:r,shades:e},i)=>(l(),a("div",{class:"color-palette ma2",key:i},[(l(!0),a(c,null,d(e,((e,i)=>(l(),a(c,{key:i},[5===i?(l(),a("div",{key:0,class:["color color--top",`${r}--bg`]},[s("span",null,t(r),1),s("small",null,t(o),1)],2)):g("",!0),s("div",{class:["color color--shade",[`${e.label}--bg`,i>=5?"color--darker":""]]},[s("span",null,t(e.label),1),s("small",null,t(e.color),1)],2)],64)))),128))])))),128)),s("div",D,[s("div",{class:["w-flex ma-2",{column:!o.horizontal}]},[E],2)])])],2),s(Z,{h2:""},{default:r((()=>[G])),_:1}),J,s(ao,{language:"css"},{default:r((()=>[K])),_:1}),L,s(ao,{language:"html-vue"},{default:r((()=>[N])),_:1})])}};export default O;
