<template>
	<div class="outer">
		<div class="container">
			<ul>
				<li>
					<router-link class="btn" to="/User">
						<div class="bgImg"></div>
					</router-link>
				</li>
				<li>
					<router-link class="btn" to="/Search"
						><div class="bgImg"></div
					></router-link>
				</li>
				<li>
					<router-link class="btn" to="/Chat"
						><div class="bgImg"></div
					></router-link>
				</li>
				<li>
					<router-link class="btn" to="/"
						><div class="bgImg"></div
					></router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.outer {
	$color1: #0b2239;
	$color2: #ffffff;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(90deg, #3939db, #0094ff);
	.container {
		width: 1140px;
		ul {
			display: flex;
			flex-wrap: wrap;
			li {
				box-sizing: border-box;
				width: 50%;
				height: 282px;
				padding: 15px;
				.btn {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					background-color: $color2;
					transition: box-shadow 0.1s;
					box-shadow: 7px 7px 5px rgba(0, 0, 0, 50%);
				}
				.btn:active {
					box-shadow: 0 0 0 rgba(0, 0, 0, 0%);
				}
			}
			li:nth-child(3n + 1) .btn {
				background-color: $color1;
			}
			li:nth-child(1) .btn .bgImg {
				width: 35%;
				height: 75%;
				background-size: cover;
				background-position: 0px 0px;
				background-image: url("../assets/images/account.svg");
			}
			li:nth-child(2) .btn .bgImg {
				width: 35%;
				height: 75%;
				background-size: cover;
				background-position: 100% 0px;
				background-image: url("../assets/images/search.svg");
			}
			li:nth-child(3) .btn .bgImg {
				width: 50%;
				height: 75%;
				background-size: cover;
				background-position: 105% 0px;
				background-image: url("../assets/images/friends.svg");
			}
			li:nth-child(4) .btn .bgImg {
				width: 35%;
				height: 75%;
				background-size: cover;
				background-position: 0px 0px;
				background-image: url("../assets/images/settings.svg");
			}
		}
	}
}
@media (max-width: 960px) {
	.outer {
		.container {
			width: 100%;
			ul {
				li:nth-child(1) .btn .bgImg {
					width: 50%;
					height: 30%;
				}
				li:nth-child(2) .btn .bgImg {
					width: 50%;
					height: 30%;
				}
				li:nth-child(3) .btn .bgImg {
					width: 65%;
					height: 30%;
				}
				li:nth-child(4) .btn .bgImg {
					width: 50%;
					height: 31%;
				}
			}
		}
	}
}
</style>
