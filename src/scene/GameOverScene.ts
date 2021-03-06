class GameOverScene extends eui.Component implements eui.UIComponent {
	private gameOther: gameOther;
	private animation: egret.Tween;
	public constructor() {
		super();
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		this.init()
	}
	//初始化 
	private init() {
		var optionss = JSON.parse(egret.localStorage.getItem('arrayBtn')) || [10, 6, 8, 9, 1, 5, 7, 2, 4, 3];
		this.gameOther = new gameOther();
		this.gameOther.onFont('20200221173', '11:45', 'playOver');
		this.addChild(this.gameOther)
		var btnAry = []; var tempAry = [];
		for (var i = 0; i < 10; i++) {
			btnAry[i] = new btnSort((i + 1) + '_png')
			btnAry[i].appear(1080 - optionss[i] * 102.9 + 25, 194)
			btnAry[i].setScale(1.2);
			this.addChild(btnAry[i])
		}
		var nameList = [optionss.indexOf(9) + 1, optionss.indexOf(8) + 1, optionss.indexOf(10) + 1]
		this.initImg(nameList);
	}
	public initImg(nameList: any) {
		var num = [{
			x: 101, y: 656, scale: .66, fontX: 174, fontY: 390, badgeX: 421, badgeY: 348, width: 148, height: 140, //left
		}, {
			x: 702, y: 656, scale: .66, fontX: 767, fontY: 390, badgeX: 174, badgeY: 390, width: 148, height: 140, //right  
		}, {
			x: 324, y: 656, scale: 1, fontX: 421, fontY: 348, badgeX: 767, badgeY: 390, width: 235, height: 233, //center  
		},]
		var imgArr = []
		var fontArr = []
		var badgeArr = []
		num.forEach((item, index) => {
			// 车
			imgArr[index] = new egret.Bitmap(RES.getRes("over" + nameList[index] + "_png"));
			imgArr[index].scaleX = item.scale
			imgArr[index].scaleY = item.scale
			this.addChild(imgArr[index]);
			imgArr[index].y = item.y
			imgArr[index].x = item.x
			egret.Tween.get(imgArr[index], {}).
				to({ x: item.x, y: item.y + 10, }, 1000, egret.Ease.sineInOut).
				to({ x: item.x, y: item.y }, 1000, egret.Ease.sineIn, );
			// 奖徽
			badgeArr[index] = new egret.Bitmap(RES.getRes(['one', 'two', 'three'][index] + "_png"));
			this.addChild(badgeArr[index]);
			badgeArr[index].y = item.badgeY
			badgeArr[index].x = item.badgeX
			egret.Tween.get(badgeArr[index], { loop: true }).
				to({ x: item.badgeX, y: item.badgeY + 10 }, 800, egret.Ease.sineIn).
				to({ x: item.badgeX, y: item.badgeY }, 800, egret.Ease.sineIn);
		})
		num.forEach((item, index) => {
			fontArr[index] = new egret.TextField()
			Global.written(this, fontArr[index], {
				x: item.fontX, y: item.fontY + 4,
				textColor: [0xAFD0E2, 0xD48D55, 0xFBDB19][index], text: nameList[index], size: [36, 36, 58][index],
				fontFamily: 'PingFang SC', strokeColor: [0x6791A5, 0xA4572A, 0xE7A200][index], stroke: 1
			});
			fontArr[index].width = item.width;
			fontArr[index].height = item.height;
			fontArr[index].textAlign = egret.HorizontalAlign.CENTER;
			fontArr[index].verticalAlign = egret.VerticalAlign.MIDDLE;
			egret.Tween.get(fontArr[index], { loop: true }).
				to({ x: item.fontX, y: item.fontY + 14 }, 800, egret.Ease.sineIn).
				to({ x: item.fontX, y: item.fontY + 4 }, 800, egret.Ease.sineIn);
		})
	}
}
