<style scoped lang="css">
    @import '../../../static/css/home.css'
</style>
<template>
	<div class="home">
		<header>
			<div>
				<a href="">搜索</a>
				<h1>全国概览</h1>
			</div>
		</header>
		<div class="content">
			<div class="count">
				<ul class="circle">
					<li>
						<div class="box">
							<div>
								街区
								<span>8</span>
							</div>
						</div>
					</li>
					<li>
						<div class="box">
							<div>
								商圈
								<span>35</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="other">
				<div class="total">
					<span>总交易</span>
					<div class="num">301</div>
				</div>
				<div class="totalList">
					<div>
						<span class="xx">线下</span>
						<div class="num">30182</div>
					</div>
					<div>
						<span class="ewm">二维码</span>
						<div class="num">30182</div>
					</div>
					<div>
						<span class="nfc">NFC</span>
						<div class="num">30182</div>
					</div>
				</div>
			</div>
			<div class="statistics">
				<div class="zx">
					<div class="title">
						<h2>热门商圈</h2>
						<a href="">查看更多</a>
					</div>
					<ul>
						<li v-for="item in 2">
							<a href="">
								<div class="lb">
									<div>南京西路</div>
								</div>
								<div class="num">
									<div>
										交易笔数
										<span>312</span>
									</div>
									<div>
										总交易金额
										<span>￥0.00</span>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
				<div class="branch">
					<div class="title">
						<h2>热门分公司</h2>
						<a href="">查看更多</a>
					</div>
					<ul>
						<li v-for="item in 4">
							<a href="">
								<div class="t">乌鲁木齐</div>
								<div class="c">
									<div>
										街道数
										<span>17</span>
									</div>
									<div>
										商圈数
										<span>45</span>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
				<div class="zx seller">
					<div class="title">
						<h2>热门商户</h2>
						<a href="">查看更多</a>
					</div>
					<ul>
						<li v-for="item in 2">
							<a href="">
								<div class="lb">
									<div>南京西路</div>
								</div>
								<div class="num">
									<div>
										交易笔数
										<span>312</span>
									</div>
									<div>
										总交易金额
										<span>￥0.00</span>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import homeJs from "./home.js"
	export default homeJs
</script>
