import{o as e,c as t,a,w as n,f as s,d as l,b as r,g as i,r as o,q as d}from"./vendor.66ab2837.js";const u=a("ul",null,[a("li",{class:"title5"},[l("The "),a("span",{class:"code"},"w-form"),l(" component is used for validation.")]),a("li",null,[l("A "),a("span",{class:"code"},"w-form"),l(" is invisible and has no style by default. You can put it in a\n"),a("span",{class:"code"},"w-card"),l(" (or put a "),a("span",{class:"code"},"w-card"),l(" in it) to have some style. Alternatively,\nyou can apply colors and spaces CSS classes on it (e.g. "),a("span",{class:"code"},".blue--bg"),l(", "),a("span",{class:"code"},".pa4"),l(").")]),a("li",null,[l("The "),a("span",{class:"code"},"w-form"),l(" tag translates to a "),a("span",{class:"code"},"<form>"),l(" tag.")])],-1),m=l("How it works"),c=a("div",{class:"title3"},"The validation works in 3 steps:",-1),f={class:"title4"},v=l("Add one or more validator functions on the field you want validated"),h=l('<w-input label="First name" :validators="[validators.required]"></w-input>'),p=l("data: () => ({\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})"),b={class:"mt6 title4"},w=l("Wrap the field in a "),g=a("span",{class:"code"},"w-form",-1),y=l(" and add a submit button"),V=l('<w-form>\n  <w-input label="First name" :validators="[validators.required]"></w-input>\n\n  <w-button type="submit">Submit</w-button>\n</w-form>'),q=a("li",{class:"mt6 title4"},[l("That's enough"),a("p",{class:"body"},[l("you can let the "),a("span",{class:"code"},"w-form"),l(" component do the rest!"),a("br"),l("\nBut you might want more options, discover them in the examples bellow.\n")])],-1),_=a("strong",null,"As of version 1.14.4",-1),T=a("p",null,[l("It is also possible to trigger a particular field validation programmatically via\n"),a("code",null,"this.$refs.myField.validate()"),l(". all the validator functions associated on this field will be\nre-run.\n")],-1),k=l("Creating a validator function"),x=a("p",null,[l("A validator is a custom function that tells Wave UI if the field is valid or invalid when the\nvalidation happens. It must return either "),a("span",{class:"code"},"true"),l(" or a string containing an error\nmessage in case of invalidaty. An empty string also works."),a("br"),l("\nThe current value of the field is always passed in parameter to the validator."),a("br"),a("br"),l("\n\nIn the following snippet, the value is converted to boolean ("),a("code",null,"!!"),l("), and if falsy\n(e.g. empty string) the JavaScript engine will continue through the "),a("code",null,"||"),l(" and will return\na string to Wave UI, meaning the field is invalid.")],-1),C=l("data: () => ({\n  validators: {\n    required: value => !!value || 'This field is required'\n    // Other validators...\n  }\n})\n"),E=l("Basic validation"),S=a("p",null,[l("In this example and by default, the fields are validated on "),a("span",{class:"code"},"keyup"),l(", on "),a("span",{class:"code"},"blur"),l(",\nand on "),a("span",{class:"code"},"submit"),l("."),a("br"),l("\nThe v-model on the "),a("span",{class:"code"},"w-form"),l(" gets updated with the form status.")],-1),A={class:"text-right mt6"},U=a("strong",null,"v-model:",-1),F={class:"ml2 mr4"},j=l("Validate"),L=l('<w-form v-model="valid">\n  <w-input\n    label="First name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <w-input\n    class="mt3"\n    label="Last name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <div class="text-right mt6">\n    <strong>v-model:</strong>\n    <code class="ml2 mr4">\n      '+s("{{ valid === false ? 'false' : valid || 'null' }}")+'\n    </code>\n    <w-button type="submit" :disabled="valid === false">\n      Validate\n    </w-button>\n  </div>\n</w-form>'),I=l("data: () => ({\n  valid: null,\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})"),R=a("strong",null,"Heads up!",-1),$=a("div",null,[l("The v-model value has 3 states: "),a("code",null,"true"),l(" and "),a("code",null,"false"),l(" for success and error, but also\n"),a("code",null,"null"),l(" for pristine."),a("br"),l("\nPristine represents the moment where the form is still untouched, neither valid, nor invalid.")],-1),B=l("Even in the most advanced case, Wave UI's form validation is fairly simple, it doesn't\nrequire you to use "),D=a("code",null,"$refs",-1),O=l(".\n"),P=l("Direct submission to a server"),M=i('<p class="mt6">The <span class="code">w-form</span> prevents the form submission by default - for modern usage where an AJAX\ncall is made on success (<a href="#advanced-validation">see the last example: Advanced validation</a>).\n<br>\nBut in case you need to send the form as is to the server, you can set the <code>allow-submit</code>\noption to <span class="code">true</span> and provide a URL via the usual <code>action</code> attribute, and optionally\nset a <code>method</code> attribute. Just like a normal <span class="code">&lt;form&gt;</span> tag.<br><br>\n\nThe <span class="code">w-form</span> will handle the validation and prevent the form submission\nuntil the form is valid. Once the form is valid, the form submission will not be prevented and the\ndata will be submitted to the URL set in the <code>action</code> attribute.</p><p class="mt2">In this example, the form data will be submitted in another tab to a fake <span class="code">test.php</span>.\n</p>',2),Y={class:"text-right mt6"},J=l("Validate"),W=l('<w-form\n  action="test.php"\n  method="post"\n  target="_blank"\n  allow-submit>\n\n  <w-input\n    label="First name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <w-input\n    class="mt3"\n    label="Last name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <div class="text-right mt6">\n    <w-button type="submit">Validate</w-button>\n  </div>\n</w-form>'),H=l("data: () => ({\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})\n"),z=l("To submit a form via the HTML standard way like in this example, you need to add\nthe "),N=a("code",null,"action",-1),K=l(" attribute and optionally a "),X=a("code",null,"method",-1),G=l(" attribute.\n"),Q=l("Validate on submit, on blur, on keyup"),Z=i('<p>By default the validation happens on <span class="code">keyup</span>, on <span class="code">blur</span> and on\n<span class="code">submit</span>. You can disable the <span class="code">keyup</span> and <span class="code">blur</span> validations\nwith <code>no-keyup-validation</code> and <code>no-blur-validation</code>.</p>',1),ee={class:"text-right mt6"},te=l("Validate"),ae=l('<w-form no-keyup-validation no-blur-validation>\n  <w-input\n    label="First name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <w-input\n    class="mt3"\n    label="Last name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <div class="text-right mt6">\n    <w-button type="submit">Validate</w-button>\n  </div>\n</w-form>'),ne=l("data: () => ({\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})\n"),se=l("Reset the form"),le=a("p",null,[l("Once the form is invalid, you can reset it with a basic HTML reset button, like in this example."),a("br"),l("\nAlternatively, you can programmatically reset the form and all its element by setting the form\nvalue (or v-model) to "),a("code",null,"null"),l(", like pristine.")],-1),re={class:"text-right mt6"},ie=l("Reset"),oe=l("Validate"),de=l('<w-form v-model="valid">\n  <w-input\n    label="First name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <w-input\n    class="mt3"\n    label="Last name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <div class="text-right mt6">\n    <w-button\n      class="my1 mr2"\n      bg-color="warning"\n      type="reset">\n      Reset\n    </w-button>\n    <w-button\n      class="my1"\n      type="submit">\n      Validate\n    </w-button>\n  </div>\n</w-form>'),ue=l("data: () => ({\n  valid: null,\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})\n"),me=l("On validate, on success & on error events"),ce=i('<p class="title5">These events are fired on submit.</p><ul><li class="mt1"><code>before-validate</code> is always fired as soon as a submission is attempted (e.g. submit\nbutton click), prior validation.</li><li class="mt1"><code>validate</code> is always fired as soon as a submission is attempted, after validation.</li><li class="mt1"><code>success</code> is fired after submission when the validation is successful.\nYou should send the data to the server from this hook.</li><li class="mt1"><code>error</code> is fired after submission when the validation is failing.\nYou can show an error message from this hook.</li></ul>',2),fe=l("The form status is always accurate (through the "),ve=a("span",{class:"code"},"v-model",-1),he=l("), and the "),pe=a("code",null,"error",-1),be=l(" &\n"),we=a("code",null,"success",-1),ge=l(" events return the "),ye=a("span",{class:"code"},"errorsCount",-1),Ve=l("."),qe=a("br",null,null,-1),_e=l("\nSo the only thing you could be missing at this point is the exact number of errors between the\nsubmission attempts (if you need it) since a "),Te=a("span",{class:"code"},"keyup",-1),ke=l(" or "),xe=a("span",{class:"code"},"blur",-1),Ce=l(" event may trigger\nan error or success on that element. The next example introduces the "),Ee=a("code",null,"errors-count",-1),Se=l(" syncing\nfor this purpose."),Ae={class:"text-right mt6"},Ue=l("Validate"),Fe=l("data: () => ({\n  success: null,\n  error: null,\n  validated: 0,\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})\n"),je=l("Advanced validation with everything"),Le=a("p",null,[l("This example shows a full form validation and lifecycle - everything you could need."),a("br")],-1),Ie=a("ul",null,[a("li",null,"It handles the error and success states of the form elements on keyup, on blur and submit."),a("li",null,"It allows resetting the form."),a("li",null,[l("It keeps track of the form errors count at any time and displays a global message using the fired\n"),a("span",{class:"code"},"w-form"),l(" custom events."),a("br")]),a("li",null,"When the form is valid and submitted, it simulates a form sending to a backend and displays\na notification.")],-1),Re={class:"message-box"},$e=l("The form is valid, ready to send it!"),Be=l("I agree to the terms & conditions"),De=a("div",{class:"spacer"},null,-1),Oe=l("Reset"),Pe=l("Validate"),Me=l("The form was sent successfully!"),Ye=l("data: () => ({\n  form: {\n    valid: null,\n    submitted: false,\n    sent: false,\n    errorsCount: 0\n  },\n  validators: {\n    required: value => !!value || 'This field is required',\n    consent: value => !!value || 'You must agree'\n  }\n}),\n\nmethods: {\n  onSuccess () {\n    setTimeout(() => (this.form.sent = true), 2000)\n  },\n  onValidate () {\n    this.form.sent = false\n    this.form.submitted = this.form.errorsCount === 0\n  }\n}"),Je=l(".message-box {min-height: 35px;}\n"),We=l("Disabled & readonly form"),He=a("p",null,[l("You can add the "),a("code",null,"disabled"),l(" or "),a("code",null,"readonly"),l(" prop on the "),a("strong",{class:"code"},"w-form"),l(" tag to\ndisable all the fields or set them all to readonly.")],-1),ze=a("strong",null,"Caution",-1),Ne=a("div",null,[l("Wave UI will not reset the validity of the fields when you toggle the "),a("code",null,"disabled"),l("\nor "),a("code",null,"readonly"),l(" prop on the "),a("strong",{class:"code"},"w-form"),l(": the field is becoming uneditable but\nmay contain invalid data.")],-1),Ke=l("Form disabled"),Xe=l("Form readonly"),Ge=l("Reset"),Qe=l("Validate"),Ze=l('<w-button\n  :outline="!form.disabled"\n  @click="form.readonly = false;form.disabled = !form.disabled">\n  Form disabled\n</w-button>\n<w-button\n  class="ml2"\n  :outline="!form.readonly"\n  @click="form.disabled = false;form.readonly = !form.readonly">\n  Form readonly\n</w-button>\n\n<w-form\n  v-model="form.valid"\n  :disabled="form.disabled"\n  :readonly="form.readonly"\n  class="mt4">\n  <w-input\n    label="First name"\n    :validators="[validators.required, validators.alphabetical]">\n  </w-input>\n  <w-input\n    label="Last name"\n    :validators="[validators.required]"\n    class="mt3">\n  </w-input>\n\n  <w-flex justify-end class="mt4">\n    <w-button\n      type="reset"\n      bg-color="warning">\n      Reset\n    </w-button>\n    <w-button\n      type="submit"\n      :disabled="form.valid === false"\n      class="ml2">\n      Validate\n    </w-button>\n  </w-flex>\n</w-form>'),et=l("data: () => ({\n  form: {\n    valid: null,\n    disabled: false,\n    readonly: false\n  },\n  validators: {\n    required: value => !!value || 'This field is required',\n    alphabetical: value => /^[a-z \\-']+$/i.test(value) || 'This field only accepts letters.'\n  }\n})\n"),tt=l("Asynchronous validations"),at=a("p",null,"You may want to validate a field on server side, for this you can use an asynchronous validator.",-1),nt=l("You should first be familiar with Promises and "),st=a("span",{class:"code"},"async",-1),lt=l("/"),rt=a("span",{class:"code"},"await",-1),it=l(".\nIf you're not you can read about it\n"),ot=a("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",target:"_blank"},"here",-1),dt=l("."),ut=a("p",null,[l("This example presents a common case: checking if a username is already in use from a user\nregistration page."),a("br"),l("\nIf you type exactly "),a("code",null,"waveui"),l(" which is already taken, an error message will appear after\nconnecting to a server, via an Axios request for instance."),a("br"),l("\nA spinner is also displayed while the server is being requested.\n")],-1),mt=l('<w-form error-placeholders>\n  <w-input\n    label="Username"\n    :validators="[validators.required, validators.username]"\n    :inner-icon-right="form.loading ? \'mdi mdi-autorenew w-icon--spin\' : \'\'"\n    :loading="form.loading"\n    autocomplete="off">\n  </w-input>\n</w-form>'),ct=l("// Here we need access to `this`, so we can't use an arrow function.\ndata () {\n  return {\n    loading: false,\n    validators: {\n      required: value => !!value || 'This field is required',\n      username: async value => {\n        // Display the spinner while loading.\n        this.loading = true\n\n        // Simulate a server call: wait for 800ms.\n        await new Promise(r => setTimeout(r, 800))\n\n        // Remove the spinner.\n        this.loading = false\n\n        // If value is not 'waveui' return true (valid field).\n        // Otherwise (||) return the error message.\n        return value !== 'waveui' || 'This username is already in use'\n      }\n    }\n  }\n}\n"),ft=l("Loading bar color"),vt=a("p",null,[l("You can provide a custom loading bar color via the prop "),a("code",null,"progress-color"),l("."),a("br"),l("\nExample with "),a("code",null,'progress-color="cyan"'),l(":")],-1);const ht={data(){return{form1:{valid:null,loading:!1},form2:{valid:null},form3:{valid:null},form4:{valid:null},form5:{valid:null,error:null,success:null,validated:0},form6:{valid:null,submitted:!1,sent:!1,errorsCount:0},form7:{valid:null,disabled:!1,readonly:!1},validators:{username:async e=>(this.form1.loading=!0,await new Promise((e=>setTimeout(e,800))),this.form1.loading=!1,"waveui"!==e||"This username is already in use"),required:e=>!!e||"This field is required",alphabetical:e=>/^[a-z \-']+$/i.test(e)||"This field only accepts letters.",consent:e=>!!e||"You must agree"}}},methods:{onSuccess(){setTimeout((()=>this.form6.sent=!0),2e3)},onValidate(){this.form6.sent=!1,this.form6.submitted=0===this.form6.errorsCount}}};ht.render=function(i,d,ht,pt,bt,wt){const gt=o("alert"),yt=o("title-link"),Vt=o("ssh-pre"),qt=o("w-divider"),_t=o("w-input"),Tt=o("w-button"),kt=o("w-form"),xt=o("example"),Ct=o("w-alert"),Et=o("w-transition-fade"),St=o("w-checkbox"),At=o("w-flex"),Ut=o("w-notification"),Ft=o("w-card");return e(),t("div",null,[a(gt,{class:"mt6",tip:""},{default:n((()=>[u])),_:1}),a(yt,{h2:""},{default:n((()=>[m])),_:1}),c,a("ol",null,[a("li",f,[v,a(Vt,{class:"body",language:"html-vue",label:"Vue template"},{default:n((()=>[h])),_:1}),a(Vt,{class:"body",language:"js",label:"Javascript"},{default:n((()=>[p])),_:1})]),a("li",b,[w,g,y,a(Vt,{class:"body",language:"html-vue",label:"Vue template"},{default:n((()=>[V])),_:1})]),q]),a(gt,{tip:""},{default:n((()=>[_,T])),_:1}),a(yt,{class:"mt10",h3:""},{default:n((()=>[k])),_:1}),x,a(Vt,{language:"js",label:"Javascript"},{default:n((()=>[C])),_:1}),a(qt,{class:"mt12"}),a(yt,{h2:""},{default:n((()=>[E])),_:1}),S,a(xt,null,{html:n((()=>[L])),js:n((()=>[I])),default:n((()=>[a(kt,{modelValue:bt.form1.valid,"onUpdate:modelValue":d[1]||(d[1]=e=>bt.form1.valid=e)},{default:n((()=>[a(_t,{label:"First name",validators:[bt.validators.required,bt.validators.alphabetical]},null,8,["validators"]),a(_t,{class:"mt3",label:"Last name",validators:[bt.validators.required]},null,8,["validators"]),a("div",A,[U,a("code",F,s(!1===bt.form1.valid?"false":bt.form1.valid||"null"),1),a(Tt,{type:"submit",disabled:!1===bt.form1.valid},{default:n((()=>[j])),_:1},8,["disabled"])])])),_:1},8,["modelValue"])])),_:1}),a(gt,{warning:""},{default:n((()=>[R,$])),_:1}),a(gt,{success:""},{default:n((()=>[B,D,O])),_:1}),a(yt,{h2:""},{default:n((()=>[P])),_:1}),M,a(xt,null,{html:n((()=>[W])),js:n((()=>[H])),default:n((()=>[a(kt,{action:"test.php",method:"post",target:"_blank","allow-submit":""},{default:n((()=>[a(_t,{label:"First name",validators:[bt.validators.required]},null,8,["validators"]),a(_t,{class:"mt3",label:"Last name",validators:[bt.validators.required]},null,8,["validators"]),a("div",Y,[a(Tt,{type:"submit"},{default:n((()=>[J])),_:1})])])),_:1})])),_:1}),a(gt,{tip:""},{default:n((()=>[z,N,K,X,G])),_:1}),a(yt,{h2:""},{default:n((()=>[Q])),_:1}),Z,a(xt,null,{html:n((()=>[ae])),js:n((()=>[ne])),default:n((()=>[a(kt,{"no-keyup-validation":"","no-blur-validation":""},{default:n((()=>[a(_t,{label:"First name",validators:[bt.validators.required]},null,8,["validators"]),a(_t,{class:"mt3",label:"Last name",validators:[bt.validators.required]},null,8,["validators"]),a("div",ee,[a(Tt,{type:"submit"},{default:n((()=>[te])),_:1})])])),_:1})])),_:1}),a(yt,{h2:""},{default:n((()=>[se])),_:1}),le,a(xt,null,{html:n((()=>[de])),js:n((()=>[ue])),default:n((()=>[a(kt,{modelValue:bt.form4.valid,"onUpdate:modelValue":d[2]||(d[2]=e=>bt.form4.valid=e)},{default:n((()=>[a(_t,{label:"First name",validators:[bt.validators.required]},null,8,["validators"]),a(_t,{class:"mt3",label:"Last name",validators:[bt.validators.required]},null,8,["validators"]),a("div",re,[a(Tt,{class:"my1 mr2","bg-color":"warning",type:"reset"},{default:n((()=>[ie])),_:1}),a(Tt,{class:"my1",type:"submit"},{default:n((()=>[oe])),_:1})])])),_:1},8,["modelValue"])])),_:1}),a(yt,{h2:""},{default:n((()=>[me])),_:1}),ce,a(gt,{tip:""},{default:n((()=>[fe,ve,he,pe,be,we,ge,ye,Ve,qe,_e,Te,ke,xe,Ce,Ee,Se])),_:1}),a(xt,null,{html:n((()=>[l('<w-alert\n  :success="success"\n  :error="error"\n  :info="!success && !error">\n  '+s("{{ !success && !error ? 'The form is still pristine' : (success ? 'Success' : 'Error') }}")+"\n</w-alert>\n\n<p>\n  The form has been validated "+s("{{ validated }}")+' time(s).\n</p>\n\n<w-form\n  @validate="validated++;success = error = false"\n  @success="success = true"\n  @error="error = true">\n\n  <w-input\n    label="First name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <w-input\n    class="mt3"\n    label="Last name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <div class="text-right mt6">\n    <w-button type="submit">Validate</w-button>\n  </div>\n</w-form>',1)])),js:n((()=>[Fe])),default:n((()=>[a(Ct,{success:bt.form5.success,error:bt.form5.error,info:!bt.form5.success&&!bt.form5.error},{default:n((()=>[l(s(bt.form5.success||bt.form5.error?bt.form5.success?"Success":"Error":"The form is still pristine"),1)])),_:1},8,["success","error","info"]),a("p",null,"The form has been validated "+s(bt.form5.validated)+" time(s).",1),a(kt,{onValidate:d[3]||(d[3]=e=>{bt.form5.validated++,bt.form5.success=bt.form5.error=!1}),onSuccess:d[4]||(d[4]=e=>bt.form5.success=!0),onError:d[5]||(d[5]=e=>bt.form5.error=!0)},{default:n((()=>[a(_t,{label:"First name",validators:[bt.validators.required]},null,8,["validators"]),a(_t,{class:"mt3",label:"Last name",validators:[bt.validators.required]},null,8,["validators"]),a("div",Ae,[a(Tt,{type:"submit"},{default:n((()=>[Ue])),_:1})])])),_:1})])),_:1}),a(yt,{h2:"",slug:"advanced-validation"},{default:n((()=>[je])),_:1}),Le,Ie,a(xt,null,{html:n((()=>[l('<w-card class="white--bg" content-class="pa0">\n  <div class="message-box">\n    <w-transition-fade>\n      <w-alert\n        class="my0 text-light"\n        v-if="form.submitted"\n        success\n        no-border>\n        The form is valid, ready to send it!\n      </w-alert>\n\n      <w-alert\n        class="my0 text-light"\n        v-else-if="form.valid === false"\n        error\n        no-border>\n        The form has '+s("{{ form.errorsCount }}")+' errors.\n      </w-alert>\n    </w-transition-fade>\n  </div>\n\n  <w-form\n    class="px8 pt2 pb12"\n    v-model="form.valid"\n    v-model:errors-count="form.errorsCount"\n    @validate="onValidate"\n    @success="onSuccess">\n\n    <w-input\n      required\n      label="First name"\n      :validators="[validators.required]">\n    </w-input>\n\n    <w-input\n      class="mt3"\n      required\n      label="Last name"\n      :validators="[validators.required]">\n    </w-input>\n\n    <w-input\n      class="mt3"\n      disabled\n      required\n      label="User name"\n      :validators="[validators.required]">\n    </w-input>\n\n    <w-flex class="mt4" wrap align-center justify-end>\n      <w-checkbox\n        required\n        :validators="[validators.consent]">\n        I agree to the terms & conditions\n      </w-checkbox>\n\n      <div class="spacer" />\n\n      <w-button\n        class="my1 mr2"\n        bg-color="warning"\n        type="reset"\n        @click="form.submitted = form.sent = false">\n        Reset\n      </w-button>\n\n      <w-button\n        class="my1"\n        type="submit"\n        :disabled="form.valid === false"\n        :loading="form.submitted && !form.sent">\n        Validate\n      </w-button>\n    </w-flex>\n  </w-form>\n\n  <w-notification\n    v-model="form.sent"\n    success\n    transition="bounce"\n    absolute\n    plain\n    round\n    bottom>\n    The form was sent successfully!\n  </w-notification>\n</w-card>',1)])),js:n((()=>[Ye])),css:n((()=>[Je])),default:n((()=>[a(Ft,{class:"white--bg","content-class":"pa0"},{default:n((()=>[a("div",Re,[a(Et,null,{default:n((()=>[bt.form6.submitted?(e(),t(Ct,{key:0,class:"my0 text-light",success:"","no-border":""},{default:n((()=>[$e])),_:1})):!1===bt.form6.valid?(e(),t(Ct,{key:1,class:"my0 text-light",error:"","no-border":""},{default:n((()=>[l("The form has "+s(bt.form6.errorsCount)+" errors.",1)])),_:1})):r("",!0)])),_:1})]),a(kt,{class:"px8 pt2 pb12",modelValue:bt.form6.valid,"onUpdate:modelValue":d[7]||(d[7]=e=>bt.form6.valid=e),"errors-count":bt.form6.errorsCount,"onUpdate:errors-count":d[8]||(d[8]=e=>bt.form6.errorsCount=e),onValidate:wt.onValidate,onSuccess:wt.onSuccess},{default:n((()=>[a(_t,{required:"",label:"First name",validators:[bt.validators.required]},null,8,["validators"]),a(_t,{class:"mt3",required:"",label:"Last name",validators:[bt.validators.required]},null,8,["validators"]),a(_t,{class:"mt3",disabled:"",required:"",label:"User name",validators:[bt.validators.required]},null,8,["validators"]),a(At,{class:"mt4",wrap:"","align-center":"","justify-end":""},{default:n((()=>[a(St,{required:"",validators:[bt.validators.consent]},{default:n((()=>[Be])),_:1},8,["validators"]),De,a(Tt,{class:"my1 mr2","bg-color":"warning",type:"reset",onClick:d[6]||(d[6]=e=>bt.form6.submitted=bt.form6.sent=!1)},{default:n((()=>[Oe])),_:1}),a(Tt,{class:"my1",type:"submit",disabled:!1===bt.form6.valid,loading:bt.form6.submitted&&!bt.form6.sent},{default:n((()=>[Pe])),_:1},8,["disabled","loading"])])),_:1})])),_:1},8,["modelValue","errors-count","onValidate","onSuccess"]),a(Ut,{modelValue:bt.form6.sent,"onUpdate:modelValue":d[9]||(d[9]=e=>bt.form6.sent=e),success:"",transition:"bounce",absolute:"",plain:"",round:"",bottom:""},{default:n((()=>[Me])),_:1},8,["modelValue"])])),_:1})])),_:1}),a(yt,{h2:""},{default:n((()=>[We])),_:1}),He,a(gt,{warning:""},{default:n((()=>[ze,Ne])),_:1}),a(xt,null,{html:n((()=>[Ze])),js:n((()=>[et])),default:n((()=>[a(Tt,{outline:!bt.form7.disabled,onClick:d[10]||(d[10]=e=>{bt.form7.readonly=!1,bt.form7.disabled=!bt.form7.disabled})},{default:n((()=>[Ke])),_:1},8,["outline"]),a(Tt,{class:"ml2",outline:!bt.form7.readonly,onClick:d[11]||(d[11]=e=>{bt.form7.disabled=!1,bt.form7.readonly=!bt.form7.readonly})},{default:n((()=>[Xe])),_:1},8,["outline"]),a(kt,{class:"mt4",modelValue:bt.form7.valid,"onUpdate:modelValue":d[12]||(d[12]=e=>bt.form7.valid=e),disabled:bt.form7.disabled,readonly:bt.form7.readonly},{default:n((()=>[a(_t,{label:"First name",validators:[bt.validators.required,bt.validators.alphabetical]},null,8,["validators"]),a(_t,{class:"mt3",label:"Last name",validators:[bt.validators.required]},null,8,["validators"]),a(At,{class:"mt4","justify-end":""},{default:n((()=>[a(Tt,{type:"reset","bg-color":"warning"},{default:n((()=>[Ge])),_:1}),a(Tt,{class:"ml2",type:"submit",disabled:!1===bt.form7.valid},{default:n((()=>[Qe])),_:1},8,["disabled"])])),_:1})])),_:1},8,["modelValue","disabled","readonly"])])),_:1}),a(yt,{h2:""},{default:n((()=>[tt])),_:1}),at,a(gt,{tip:""},{default:n((()=>[nt,st,lt,rt,it,ot,dt])),_:1}),ut,a(xt,{"content-class":"pa6"},{html:n((()=>[mt])),js:n((()=>[ct])),default:n((()=>[a(kt,{"error-placeholders":""},{default:n((()=>[a(_t,{label:"Username",validators:[bt.validators.required,bt.validators.username],"inner-icon-right":bt.form1.loading?"mdi mdi-autorenew w-icon--spin":"",loading:bt.form1.loading,autocomplete:"off"},null,8,["validators","inner-icon-right","loading"])])),_:1})])),_:1}),a(yt,{h3:""},{default:n((()=>[ft])),_:1}),vt,a(_t,{class:"mt5",label:"Username",loading:!0,"progress-color":"cyan",autocomplete:"off"})])};const pt={name:"w-form",provide(){return{formRegister:this.register,formUnregister:this.unregister,validateElement:this.validateElement,formProps:this.$props}},props:{modelValue:{},allowSubmit:{type:Boolean},noKeyupValidation:{type:Boolean},noBlurValidation:{type:Boolean},errorPlaceholders:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean}},emits:["submit","before-validate","validate","success","error","reset","input","update:modelValue","update:errorsCount"],data:()=>({formElements:[],status:null,errorsCount:0}),computed:{classes(){return{"w-form--pristine":null===this.status,"w-form--error":!1===this.status,"w-form--success":!0===this.status,"w-form--error-placeholders":this.errorPlaceholders}}},methods:{register(e){this.formElements.push(e)},unregister(e){this.formElements=this.formElements.filter((t=>t._.uid!==e._.uid))},async validate(e){this.$emit("before-validate",{e:e,errorsCount:t});let t=0;return await(async()=>{var e;for(const a of this.formElements)!(null==(e=a.validators)?void 0:e.length)||a.disabled||a.readonly||(await this.checkElementValidators(a),t+=~~!a.Validation.isValid,a.$emit("update:valid",a.Validation.isValid))})(),this.updateErrorsCount(t),this.status=!t,this.$emit("validate",{e:e,errorsCount:t}),this.$emit(this.status?"success":"error",{e:e,errorsCount:t}),this.status},async validateElement(e){return await this.checkElementValidators(e),this.updateErrorsCount(),e.Validation.isValid},async checkElementValidators(e){let t=!1,a="";await(async(e,t)=>{for(const a of e)if(await t(a))return!0;return!1})(e.validators,(async n=>{const s=await("function"==typeof n&&n(e.inputValue));return t="string"!=typeof s,a=t?"":s,!t})),e.hasJustReset=!1,e.Validation.isValid=t,e.Validation.message=a},reset(e){e&&(this.status=null,this.formElements.forEach((e=>!e.disabled&&!e.readonly&&e.reset())),this.updateErrorsCount(0,!0),this.$emit("reset",e))},updateErrorsCount(e=null,t=!1){this.errorsCount=null!==e?e:this.formElements.reduce(((e,t)=>e+~~(!1===t.Validation.isValid)),0),this.status=t?null:!this.errorsCount,this.$emit("update:modelValue",this.status),this.$emit("input",this.status),this.$emit("update:errorsCount",this.errorsCount)},onSubmit(e){this.validate(e),this.$emit("submit",e),this.allowSubmit&&this.status||e.preventDefault()}},created(){this.status=this.modelValue||null},watch:{modelValue(e){(!1===this.status&&e||null===e&&null!==this.status)&&this.reset(),this.status=e}},render:function(a,n,s,l,r,i){return e(),t("form",{class:["w-form",i.classes],onSubmit:n[1]||(n[1]=(...e)=>i.onSubmit&&i.onSubmit(...e)),onReset:n[2]||(n[2]=(...e)=>i.reset&&i.reset(...e)),novalidate:""},[d(a.$slots,"default")],34)}},bt=a("div",{class:"w-divider my12"},null,-1),wt=l("API");const gt={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Contains the status of the form validity at all times. Three values are possible: <code>null</code> when pristine (untouched), <code>false</code> when invalid, <code>true</code> when valid.<br>This value gets updated every time a validation is triggered on a single field or on all the fields at once on form submit.<br>Setting this value to <code>null</code> will reset the form.',allowSubmit:"Native HTML submits the form to the server when all the form elements are valid.<br>Usually and by default, the form submission is prevented and an AJAX call is made from the front end. This is completely up to the developer.",noKeyupValidation:"Prevents the form element validation on keyup (happening by default).",noBlurValidation:"Prevents the form element validation on blur (happening by default).",errorPlaceholders:"Reserves a space under all the form elements so that triggering an error and showing the error message will not change the height of the form.",disabled:"Disables all the form fields all at once, making them unreactive to user interactions.",readonly:"Set all the form fields to readonly all at once. The fields will still look interactive but their value will not be editable by user interaction."},yt={default:{description:"The form content."}},Vt={submit:{description:"Emitted on form submit.",params:{"[DOM event object]":"The associated reset DOM event."}},"before-validate":{description:"Emitted before validation, every time a validation is triggered."},validate:{description:"Emitted on form validate, every time a validation is triggered.<br>Returns a single object containing:",params:{e:"The associated DOM event.",errorsCount:"An integer representing the number of errors in the form."}},success:{description:"Emitted on form success, when there is no error in the form and the validation is successful.<br>Returns a single object containing:",params:{e:"The associated DOM event.",errorsCount:"An integer representing the number of errors in the form."}},error:{description:"Emitted on form error, when there is at least one error in the form and the validation fails.<br>Returns a single object containing:",params:{e:"The associated DOM event.",errorsCount:"An integer representing the number of errors in the form."}},reset:{description:"Emitted on form reset. A reset can be triggered by setting the v-model value to null or by clicking on a reset button.",params:{"[DOM event object]":"The associated reset DOM event."}},input:{description:"Emitted every time the form status changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean, Null]":"The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid."}},"update:modelValue":{description:"Emitted every time the form status changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean, Null]":"The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid."}},"update:errorsCount":{description:"Emitted every time the errorsCount changes. To be used with <code>:errors-count.sync</code> on Vue 2.x or <code>v-model:errors-count</code> on Vue 3.",params:{"[Integer]":"The number of errors in the form."}}},qt={data:()=>({propsDescs:gt,slots:yt}),computed:{props:()=>pt.props,events:()=>pt.emits.reduce(((e,t)=>(e[t]=Vt[t]||{})&&e),{})},render:function(s,l,r,i,d,u){const m=o("title-link"),c=o("component-api");return e(),t("div",null,[bt,a(m,{class:"title1",h2:""},{default:n((()=>[wt])),_:1}),a(c,{class:"mt0",items:u.props,descriptions:s.propsDescs,title:"Props"},null,8,["items","descriptions"]),a(c,{items:s.slots,title:"Slots"},null,8,["items"]),a(c,{items:u.events,title:"Events"},null,8,["items"])])}},_t=l("w-form");const Tt={components:{Examples:ht,Api:qt},render:function(s,l,r,i,d,u){const m=o("ui-component-title"),c=o("examples"),f=o("api");return e(),t("main",null,[a(m,null,{default:n((()=>[_t])),_:1}),a(c),a(f)])}};export default Tt;
