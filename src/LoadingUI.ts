class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
    }

    private textField: egret.TextField;

    private createView(): void {
        Global.painting(this, new egret.Bitmap(RES.getRes("loadBg_png")), { x: 0, y: 0 });
        Global.written(this, new egret.TextField(), { x: 576, y: 900, textColor: 0x00A5FF, text: '加载中', size: 20 });
        this.textField = new egret.TextField();
        Global.written(this, this.textField, { x: 908, y: 922, textColor: 0x00A5FF, text: '', size: 20 });
    }

    public onProgress(current: number, total: number): void {
        var text = (current / total) * 100;
        var t = parseInt(text.toString())+2
        this.textField.text = `${t}` + '%';
        var temp = t / 100 * 16
        for (var i = 0; i <= temp; i++) {
            Global.painting(this, new egret.Bitmap(RES.getRes("loading_png")), { x: 332 + 32 * i, y: 930 });
        }
    }
}