class gameOther extends egret.DisplayObjectContainer {
    public switchOpen: boolean = true;
    public control: boolean = true;
    public rightSound: egret.Bitmap;
    public constructor() {
        super();
        this.onGroupComplete();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private async onAddToStage(event: egret.Event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("preload");
    }
    // 文字
    public onFont(font1: string, font2: string) {
        var label1: egret.TextField = new egret.TextField();
        var label2: egret.TextField = new egret.TextField();
        var fontArray = [label1, label2];
        for (var i in [0, 1]) {
            this.addChild(fontArray[i]);
            fontArray[i].y = 20
            fontArray[0].x = 147
            fontArray[1].x = 652
            fontArray[i].width = 281;
            fontArray[i].height = 52;
            fontArray[i].size = 22;
            fontArray[i].textAlign = egret.HorizontalAlign.CENTER;
            fontArray[i].verticalAlign = egret.VerticalAlign.MIDDLE;
            fontArray[i].textColor = 0xffffff;
            fontArray[0].text = "下期时间:" + font1;
            fontArray[1].text = "期号:" + font2;
        }
    }
    // 音乐样式与音乐
    public onGroupComplete() {
        var leftTime: egret.Bitmap = new egret.Bitmap();
        leftTime.texture = RES.getRes("calendar_png");
        this.addChild(leftTime);
        leftTime.y = 53
        leftTime.x = 20
        this.onSound(RES.getRes("shengyin_png"));
    }
    public onSound(instance: any) {
        this.rightSound = new egret.Bitmap();
        this.rightSound.texture = instance;
        this.addChild(this.rightSound);
        this.rightSound.y = 53
        this.rightSound.x = 1050 - this.rightSound.width
        this.rightSound.touchEnabled = true;
        this.rightSound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    }
    public onTouch(instance: any): void {
        if (this.switchOpen) {
            this.removeChild(this.rightSound)
        } else {
            this.addChild(this.rightSound);
        }
        this.switchOpen = !this.switchOpen

    }

}