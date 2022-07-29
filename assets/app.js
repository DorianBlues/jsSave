import{_ as d,W as p,j as c,h as l}from"./vendor.js";const n=d.default||d,u=p`
    html, body {
        margin: 0;
        padding: 0;
        height: 100vh;
        background: #2b2b2b;
    }
`,x=n.div`
    width: 100%;
    height: 100%;
    padding: 30px;
    box-sizing: border-box;
`,h=n.div`
    min-height: 416px;
    img {
        width: 100%;
        border-radius: 15px;
    }
`,g=n.div`
    margin: 0 auto;
    font-size: 20px;
    line-height: 32px;
    padding-top: 15px;
    div {
        color: #dcdcdc;
    }
`,m=n.div`
    display: flex;
    padding-top: 30px;
    div {
        display: block;
        font-size: 24px;
        line-height: 73px;
        width: 230px;
        border-radius: 9px;
        background: rgba(82,87,97,0.70);
        text-align: center;
        color: #fff;
        margin-right: 26px;
    }
`,t=c.exports.jsx,b=c.exports.jsxs,r=(e,o)=>e.display.resources.filter(s=>s.type===o),y=({data:e})=>{console.log(e);const o=r(e,"picture"),s=r(e,"content"),a=e.display.buttonArea||[];return b(x,{children:[t(u,{}),t(h,{children:o.map(i=>t("img",{src:i.url,alt:""},i.url))}),t(g,{children:s.map(i=>t("div",{children:i.text}))}),t(m,{children:a.map(i=>t("div",{onClick:()=>{window.liQA.buttonJump("helpCenterJump","\u53BB\u5E2E\u52A9\u4E2D\u5FC3","buttonId","h5test")},children:i.text}))})]})},f={source:"word",hitQuestionId:"4454_0",hitQuestion:"\u513F\u7AE5\u9501\u574F\u4E86\u600E\u4E48\u529E",templateId:"template_image",expression:"in_car_assistant_default",display:{resources:[{index:"101",type:"content",text:`\u53EF\u4EE5\u5148\u5728\u4E2D\u63A7\u5C4F\u201C\u8BBE\u7F6E\u201D\u4E2D\uFF0C\u70B9\u51FB\u201C\u8F66\u8F86\u2014\u2014\u8F66\u9501\u2014\u2014\u7AE5\u9501\u6309\u952E\u201D\uFF0C\u786E\u8BA4\u529F\u80FD\u72B6\u6001\u6B63\u5E38\u3002
\u82E5\u6B63\u5E38\u53EF\u70B9\u51FB\u4F4D\u4E8E\u9A7E\u9A76\u5458\u4FA7\u8F66\u7A97\u5F00\u5173\u4E0A\u7684\u201C\u7AE5\u9501\u6309\u952E\u201D\uFF0C\u770B\u662F\u5426\u53EF\u4EE5\u6062\u590D\u3002
\u82E5\u4ECD\u7136\u5B58\u5728\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFB\u670D\u52A1\u4E13\u5BB6\u6216\u5BA2\u670D\u8FDB\u884C\u62A5\u4FEE\u3002\u5BA2\u670D\u7535\u8BDD\uFF1A 4006860900`},{index:"101",type:"picture",url:"https://p.ampmake.com//voiceplatform/qa/resource/prod/20220615/99260fc8c39b9a719201e73150a3ce21_k2lVphiwQIfp07ucTyDEY.webp"}],buttonArea:[{index:"401",type:"settingsJump",text:"\u53BB\u8BBE\u7F6E",uri:"lixiang://carsettings/navigate?class1=class1_vehicle&class2=item_lock&key=chj_key_child_lock"},{index:"402",type:"customerService",text:"\u7406\u60F3\u5BA2\u670D",tel:"4006860900"}]}};l(document.getElementById("root"),t(y,{data:window.data||f}));
