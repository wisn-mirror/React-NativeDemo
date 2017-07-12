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
			
// npm i react-timer-mixin --save 更新定时器的类库
//注册定时器的类库
var TimerMixin=require('react-timer-mixin');


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
 
 movist：shift command +
 
 
 
  npm install react-native-tab-navigator --save  
  yarn add  react-navigation
 npm i -g npm 