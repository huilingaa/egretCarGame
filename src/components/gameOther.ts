class gameOther extends egret.DisplayObjectContainer {
    public switchOpen: boolean = true;
    public control: boolean = true;
    public rightSound: egret.Bitmap;
    public constructor() {
        super();
        this.toggleMusic();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private async onAddToStage(event: egret.Event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.toggleMusic, this);
        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("preload");
    }
    // 文字
    public onFont(font1: string, font2: string, start: number) {
        var label1: egret.TextField = new egret.TextField();
        var label2: egret.TextField = new egret.TextField();
        var arr = [{
            x1: 147, x2: 652, y: 20, width: 281, height: 52
        }, {
            x1: 148, x2: 718, y: 50, width: 222, height: 52
        }]
        var fontArray = [label1, label2];
        for (var i in [0, 1]) {
            this.addChild(fontArray[i]);
            fontArray[0].x = arr[start].x1
            fontArray[1].x = arr[start].x2
            fontArray[i].y = arr[start].y
            fontArray[i].width = arr[start].width;
            fontArray[i].height = arr[start].height;
            fontArray[i].size = 20;
            fontArray[i].textAlign = egret.HorizontalAlign.CENTER;
            fontArray[i].verticalAlign = egret.VerticalAlign.MIDDLE;
            fontArray[i].textColor = 0xffffff;
            fontArray[0].text = "下期时间:" + font1;
            fontArray[1].text = "期号:" + font2;
        }
    }
    // 音乐样式与音乐
    public toggleMusic() {
        var leftTime: egret.Bitmap = new egret.Bitmap();
        leftTime.texture = RES.getRes("calendar_png");
        this.addChild(leftTime);
        leftTime.y = 53
        leftTime.x = 20
        this.rightSound = new egret.Bitmap();
        this.addChild(this.rightSound);
        this.onSound(RES.getRes("shengyin_png"));
    }
    public onSound(instance: any) {
        this.rightSound.texture = instance;
        this.rightSound.y = 53
        this.rightSound.x = 1050 - this.rightSound.width
        this.rightSound.touchEnabled = true;
        this.rightSound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    }
    public onTouch(): void {
        if (!this.switchOpen) {
            this.onSound(RES.getRes("shengyin_png"));
        } else {
            this.onSound(RES.getRes("shengyinClose_png"));
        }
        this.switchOpen = !this.switchOpen

    }

}