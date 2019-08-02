(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{171:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",function(){return o}),t.d(e,"rightToc",function(){return p}),t.d(e,"default",function(){return u});t(0);var a=t(217);function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var o={title:"react-native大量表单的解决方案",date:new Date("2018-06-06T04:49:16.000Z"),toc:!0},p=[],i={rightToc:p},s="wrapper";function u(n){var e=n.components,t=l(n,["components"]);return Object(a.b)(s,r({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"由于我们app里面有大量的(上十个)表单页面，每个表单可能包含下面这些不定字段："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"输入框"),Object(a.b)("li",{parentName:"ul"},"多行输入框"),Object(a.b)("li",{parentName:"ul"},"选择时间"),Object(a.b)("li",{parentName:"ul"},"选择城市（选省市区或者只有省）"),Object(a.b)("li",{parentName:"ul"},"选择、拍照银行卡图片并识别"),Object(a.b)("li",{parentName:"ul"},"选择、拍照身份证图片并识别，填入对应的名字、身份证等字段里"),Object(a.b)("li",{parentName:"ul"},"选择、拍照营业执照图片并识别"),Object(a.b)("li",{parentName:"ul"},"选择行业，行业比较多，要跳转到行业页面选择后再跳转回来"),Object(a.b)("li",{parentName:"ul"},"上传头像"),Object(a.b)("li",{parentName:"ul"},"等等")),Object(a.b)("p",null,"另外，有几个表单页面，字段达到数十个，这真是很难处理用户体验，而且我们也没有专门的用户体验师，设计师也有其它任务，所以app界面啥的都是我们自己整。"),Object(a.b)("p",null,"而且，表单还有下面一些基本的要求：\n1. 验证字段\n1. 本地存储没有提交的表单\n1. 初始化已经提交过的表单\n1. 表单提交后，没有审核通过，需要提示用户哪些字段有问题(这里不是同步通过的，人工审核还需要时间) "),Object(a.b)("p",null,"所以如果没有一个整体的方案，这么多表单都是难以管理的。"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"思考")),Object(a.b)("p",null,"之前我做web表单时，通常是用不同的type自动生成对应的input框。所以我在rn上也采用了这个方法。比如我写一个Form组件，传入下面的数据。"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"// data格式\nthis.state = {\n    formdata:[\n        {\n            name: 'name',\n            type: 'text',\n            required: true,\n            value: '',\n            placeholder:'请输入姓名'\n        },\n        {\n            name: 'age',\n            type: 'number',\n            required: true,\n            value: '',\n            min: 0,\n            max:100,\n            allow_edit:false \n        },\n        {\n            name: 'avatar',\n            type: 'image',\n            required: true,\n            value: '',\n            allow_edit: true\n        },\n    ]\n}\n\n// formdata 是表单的所有数据\nsubmit = (formdata)=>{\n\n}\n\n// 组件\n<Form data={formdata} submit={this.submit}>\n")),Object(a.b)("p",null,"根据这种formdata格式数据里的type就很容易生成不同类型的输入框控件，另外submit也很好处理了，接着来看看我的具体做法吧。"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"具体方案")),Object(a.b)("p",null,"下面是我的表单控件，放在",Object(a.b)("inlineCode",{parentName:"p"},"components/Form"),"里。"),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"./imgs/form1.png",alt:null}))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"index.js")),Object(a.b)("p",null,"在这里我导出了表单组件Form，伪代码如下。"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"class Form extends Component{\n\n    constructor(props){\n        let formData = props.formData.map(f => {\n            // 给单选框设置初始值，防止rn picker 只有触发change时才会修改值\n            if (f.type === 'select' && f.value == null) {\n                f.value = f.option[0].id \n            }\n            return f\n        })\n        this.state = {\n            formData\n        }\n    }\n\n    onChange = async (item) => {\n        let formData = this.state.formData.map(f => {\n            if (f.name === item.name) {\n                f = item\n            }\n            return f\n        })\n\n        this.setState({\n            formData\n        }, () => {\n            this.props.onChange && this.props.onChange(item, formData)\n        })\n    }\n\n    submit = ()=>{\n        this.props.submit && this.props.submit(data, this.state.formData)\n    }\n    \n    renderItem = ()=>{\n        // type = 'hidden'\n        if (f.type == 'hidden') {\n            return null\n        }\n        // 动态字段组件\n        let CName\n        try {\n            CName = FormItem[f.type.charAt(0).toUpperCase() + $.toCamelCase(f.type.substring(1))]\n\n            return <CName\n                key={i}\n                data={f}\n                placeholderTextColor={'#ccc'}\n                formData={this.state.formData}\n                storeKey={this.props.storeKey}\n                uploadEnd={this.props.uploadEnd}\n                onChange={this.onChange}\n            />\n        } catch (e) {\n            return <Text>字段渲染出错</Text>\n        }\n    }\n    render(){\n        <ScrollView>\n            {\n                formData && formData.map((f, i) => {\n                    return <View\n                        key={i}\n                        pointerEvents={f.allow_edit == 1 ? 'auto' : 'none'}>  // 用来控制是否可编辑\n                        {this.renderItem(f, i)}\n                    </View>\n                })\n            }    \n            <Button onPress={this.submit}>确认</Button>\n        </ScrollView>\n    }\n}\n")),Object(a.b)("p",null,"好了，",Object(a.b)("inlineCode",{parentName:"p"},"index.js"),"大致就是上面那样，当然，还有表单的本地存储，初始化表单数据，这些代码我没贴上来，之后单独再说。"),Object(a.b)("p",null,"下面是每个字段组件，也就是上面的",Object(a.b)("inlineCode",{parentName:"p"},"FormItem"),"对象下的各种组件："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Text.js")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Phone.js")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Number.js")),Object(a.b)("li",{parentName:"ul"},"等等")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"// Text.js\nexport default class Text extends Component {\n\n    constructor(props) {\n        super(props)\n    }\n\n    render = () => {\n        let { data } = this.props\n        return (\n            <Item inlineLabel style={this.props.style}>\n                <Label style={this.props.labelStyle}>{data.title}</Label>\n                <Input\n                    value={data.value || ''}\n                    type={'text'}\n                    onChangeText={value => {\n                        data.value = value\n                        this.props.onChange(data)\n                    }}\n                    placeholder={data.placeholder}\n                />\n            </Item>\n        )\n    }\n}\n")),Object(a.b)("p",null,"像上面，我在",Object(a.b)("inlineCode",{parentName:"p"},"Input"),"的",Object(a.b)("inlineCode",{parentName:"p"},"onChangeText"),"里修改了字段的value值，并且调用了",Object(a.b)("inlineCode",{parentName:"p"},"index.js"),"里的",Object(a.b)("inlineCode",{parentName:"p"},"onChange"),"更新表单的数据。"),Object(a.b)("p",null,"再来看看单选组件类似："),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'export default class Image extends Component {\n\n    constructor(props) {\n        super(props)\n    }\n\n    render() {\n        let {data} = this.props\n        return (\n            <Item style={[this.props.style, {paddingRight: 10}]}>\n                <Label style={this.props.labelStyle}>{data.title}</Label>\n                <Picker\n                    placeholder="请选择"\n                    selectedValue={data.value}\n                    onValueChange={(value) => {\n                        data.value = value\n                        this.props.onChange(data)\n                    }}\n                >\n                    {\n                        data.option.map((o, i) => {\n                            return <Picker.Item key={i} label={o.text} value={o.id}/>\n                        })\n                    }\n                </Picker>\n            </Item>\n        )\n    }\n}\n')),Object(a.b)("p",null,"使用：像这样处理之后，我们在外部使用表单组件就是十分的简单了。只需要像下面这样："),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"class MineVerified extends Component {\n\n    static options(passProps) {\n        return {\n            topBar: {\n                title: {\n                    text: '资料编辑'\n                }\n            }\n        }\n    }\n\n    constructor(props) {\n        super(props)\n        this.state = {\n            formData: [\n                {\n                    allow_edit: 1,\n                    required: 1,\n                    name: \"avatar\",\n                    option: null,\n                    title: \"头像\",\n                    type: \"image\",\n                    desc: '',\n                    style: 'avatar',\n                    value:  '' \n                },\n                {\n                    allow_edit: 1,\n                    required: 1,\n                    name: \"nickname\",\n                    option: null,\n                    title: \"昵称\",\n                    type: \"text\",\n                    desc: '',\n                    value:  ''\n                }\n            ]\n        }\n    }\n\n    submit = async (data) => {\n    }\n\n    render() {\n        return (\n            <Container>\n                <Form formData={this.state.formData}\n                      submit={this.submit}\n                      componentId={this.props.componentId}\n                />\n            </Container>\n        )\n    }\n}\n")))}u.isMDXComponent=!0},217:function(n,e,t){"use strict";t.d(e,"a",function(){return p}),t.d(e,"b",function(){return c});var a=t(0),r=t.n(a),l=r.a.createContext({}),o=function(n){var e=r.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):Object.assign({},e,n)),t},p=function(n){var e=o(n.components);return r.a.createElement(l.Provider,{value:e},n.children)},i="mdxType",s={inlineCode:"code",wrapper:function(n){return r.a.createElement(r.a.Fragment,{},n.children)}},u=function(n){var e=n.components,t=n.mdxType,a=n.originalType,l=n.parentName,p=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&-1===e.indexOf(a)&&(t[a]=n[a]);return t}(n,["components","mdxType","originalType","parentName"]),i=o(e);return r.a.createElement(i[l+"."+t]||i[t]||s[t]||a,e?Object.assign({},p,{components:e}):p)};function c(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,o=new Array(l);o[0]=u;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=n,p[i]="string"==typeof n?n:a,o[1]=p;for(var c=2;c<l;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);