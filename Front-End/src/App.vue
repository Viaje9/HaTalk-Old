<template>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.commit("setUser");
	},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,200,300,400,500,600&display=swap");
.app{
	width: 100%;
	height: 100vh;
	overflow: hidden;
}
* {
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	font-family: "Noto Sans TC";
	text-decoration: none;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
input,
button,
video {
	margin: 0;
	padding: 0;
	border: 0;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
body {
	line-height: 1;
}
ol,
ul {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
	content: "";
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button {
	box-sizing: unset;
	padding: 0;
	letter-spacing: unset;
}
button:hover {
	cursor: pointer;
}
input {
	outline: unset;
	border: unset;
}
</style>