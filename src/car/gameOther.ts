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
    public onGroupComplete() {
        var imgleft: egret.Bitmap = new egret.Bitmap();
        imgleft.texture = RES.getRes("left_png");
        this.addChild(imgleft);
        imgleft.y = 20
        imgleft.x = 0.5
        var imgright: egret.Bitmap = new egret.Bitmap();
        imgright.texture = RES.getRes("right_png");
        this.addChild(imgright);
        imgright.y = 20
        imgright.x = 967
        var leftTime: egret.Bitmap = new egret.Bitmap();
        leftTime.texture = RES.getRes("calendar_png");
        this.addChild(leftTime);
        leftTime.y = 53
        leftTime.x = 20
        // 声音
        this.onSound(RES.getRes("shengyin_png"));
    }
    public onSound(instance: any) {
        this.rightSound = new egret.Bitmap();
        this.rightSound.texture = instance;
        this.addChild(this.rightSound);
        this.rightSound.y = 53
        this.rightSound.x = 1060 - this.rightSound.width
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