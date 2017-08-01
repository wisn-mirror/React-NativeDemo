react-native start

react-native run-android

adb shell input keyevent 82

react-native init F --version 0.39.2

查看最新版
npm info react-native

更新版本：
npm update -g react-native-cli

指定版本
npm install —save react-native@版本

// npm i react-timer-mixin --save 更新定时器的类库
//注册定时器的类库
var TimerMixin=require('react-timer-mixin');

movist：shift command +

npm install react-native-tab-navigator --save  
yarn add  react-navigation
npm i -g npm 



Ios  command+D 
大小 command + 1/2/3/4
清除缓存： com+k


第三方组件：
yarn add  xxxxx
或者
npm install xxxxx --save  
组件：
react-native-tab-navigator
react-native-easy-toast



flex常用：

/*容器指定*/
display:flex;
display:-webkit-flex;
background: #E7E9C2;
width: 500px;
height: 600px;
/*flex-direction
flex-wrap
flex-flow
justify-content
align-items
align-content: */

/*flex-direction:row | row-reverse | column | column-reverse;*/
/*	row（默认值）：主轴为水平方向，起点在左端。
row-reverse：主轴为水平方向，起点在右端。
column：主轴为垂直方向，起点在上沿。
column-reverse：主轴为垂直方向，起点在下沿。*/
/*flex-direction:row;*/
/*flex-direction:row-reverse;*/
/*flex-direction:column;
flex-direction:column-reverse;*/

/*flex-wrap: nowrap | wrap | wrap-reverse;*/
/*nowrap（默认）：不换行*/
/*flex-wrap:nowrap;*/
/*wrap：换行，第一行在上方*/
flex-wrap:wrap;
/*wrap-reverse：换行，第一行在下方。*/
/*flex-wrap:wrap-reverse;*/
/*lex-flow是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。*/
/*flex-flow:row nowrap;*/

/*justify-content属性定义了项目在主轴上的对齐方式。*/
/*flex-start（默认值）：左对齐
flex-end：右对齐
center： 居中
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。*/
/*justify-content:flex-start;*/
/*justify-content:flex-end;*/
/*justify-content:center;*/
/*justify-content: space-between;*/
/*justify-content: space-around;*/


/*align-items属性定义项目在交叉轴上如何对齐。*/
/*flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。*/
/*align-items:flex-start;*/
/*align-items:flex-end;*/
/*align-items:center;*/
/*align-items:baseline;*/
/*align-items:stretch;*/


/*align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用*/
/*flex-start：与交叉轴的起点对齐。
flex-end：与交叉轴的终点对齐。
center：与交叉轴的中点对齐。
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch（默认值）：轴线占满整个交叉轴。*/
/*align-content:flex-start;*/
/*align-content:flex-end;*/
/*align-content:center;*/
/*align-content:stretch;*/
/*align-content:space-between;*/
/*align-content: space-around;*/

/*align-items: flex-start | flex-end | center | baseline | stretch;*/
/*	flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。 */
/*align-items:flex-start;*/
/*align-items:flex-end;*/
/*align-items: center;*/
/*align-items: stretch;*/
/*align-items:baseline;*/

/*
以下6个属性设置在项目上。
order
flex-grow
flex-shrink
flex-basis
flex
align-self*

问题：

报错：
	AAPT err(Facade for 2108943713) : No Delegate set : lost message:libpng error: Not a PNG file
	AAPT: libpng error: Not a PNG file
	AAPT err(Facade for 218841101) : No Delegate set : lost message:libpng error: Not a PNG file
	AAPT err(Facade for 934587258) : No Delegate set : lost message:libpng error: Not a PNG file
	AAPT err(Facade for 714762553) : No Delegate set : lost message:libpng error: Not a PNG file
	Error: java.util.concurrent.ExecutionException: com.android.ide.common.process.ProcessException: 
	:app:mergeDebugResources FAILED
在build.gradle中android中添加：
 aaptOptions { cruncherEnabled = false   }



报错“RCTBundleURLProvider.h” file not found
从网上下载别人的ReactNative项目，打开iOS项目的时候，xcode会报错，提示：“RCTBundleURLProvider.h” file not found

解决方法：
打开Mac里面的终端，进入项目所在的文件夹目录；
把项目里面的 node_modules 文件夹删除掉，然后执行 npm install 命令
npm install安装完成后， 执行react-native upgrade命令
最后重新打开Xcode,clean一下，应该就没有问题了，我的就是这么解决的。


报错react-children-only-expected-to-receive-a-single-react-element-child-error-whe
通过方法传递View要加入{...this.props}
 <Component {...this.props}/>


报错：'Navigator is deprecated and has been removed from this package. It can now be installed ' +
'and imported from `react-native-deprecated-custom-components` instead of `react-native`. ' +
'Learn about alternative navigation solutions at http://facebook.github.io/React-native/docs/navigation.html'
这是因为版本升级到0.43以上的话，Navigator不能直接从react-native里面获取了，

解决方案：
npm install react-native-deprecated-custom-components
--save
然后在引用的地方
import {Navigator}
from react-native-deprecated-custom-components

问题：Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) 
but got: object.
1.用到的地方使用
<Navigator.Navigator
initialRoute={{ name: defaultName, component: defaultComponent }}
configureScene={(route) => {
return Navigator.Navigator.SceneConfigs.VerticalDownSwipeJump;
}}
renderScene={(route, navigator) => {
let Component = route.component;
return <Component {...route.params} navigator={navigator} />
}} />
2或者使用这种方式：
import CustomerComponents, {Navigator} 
from 'react-native-deprecated-custom-components';
<Navigator></Navigator>


问题，使用react-native-deprecated-custom-components传值问题：
renderScene={(route, navigator) => {
let Component = route.component;
return <Component {...route.wisn} navigator={navigator}/>;
}}
其中...route.wisn 中的wisn 在以后的传值中要是用同一字段，比如：
this.props.navigator.push({
component: CustomKeyPage,
wisn:{
...this.props,
isRemoveKeyValue: true,
},
})


报错提示：Cannot update during an existing state transition (such as within render or another component's constructor). Render methods should be a pure function of props and state;
原因：props和states在渲染的时候更改了。


不能传值问题
/*this.state.data.map(function (item, index, input) {
return item.checked?  <PopularBar
tabLabel={item.name}
key={index}  {...this.props}/>:null;
})*/
