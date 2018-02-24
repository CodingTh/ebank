<template>
	<div class="footer">
		<div>
			<ul>
				<li v-for="(item, index) in nav">
					<a href="" :style="{'background-image':'url(./static/img/footer/'+ item.icon + (active == index ? '-active' : '') +'.png)'}" v-text="item.text">首页</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'footerView',
		data (){
			return {
				nav: [
					{
						icon: "home",
						text: "首页"
					},
					{
						icon: "deal",
						text: "交易"
					},
					{
						icon: "analyze",
						text: "人流洞察"
					},
					{
						icon: "personage",
						text: "我的"
					}
				],
				active: 0
			}
		}
	}
</script>

<style scoped>
	.footer div{
		width: 100%;
		padding-top: 1px;
		background: linear-gradient(to right, #40404F, #52FEFE, #3E3E4C);
		position: fixed;
		left: 0;
		bottom: 0;
	}
	.footer ul{
		text-align: center;
		font-size: 0;
		background: #292937;
	}
	.footer li{
		display: inline-block;
		width: 25%;
	}
	.footer a{
		display: block;
		height: 57px;
		background-position: center center;
		background-size: 32px;
		background-repeat: no-repeat;
		background-image: url(../../static/img/footer/home.png);
	}
</style>