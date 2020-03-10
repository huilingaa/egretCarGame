class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
        // this.onProgress();

    }

    private textField: egret.TextField;

    private createView(): void {
        let bg: egret.Bitmap = new egret.Bitmap(RES.getRes("loadBg_png"));
        this.addChild(bg);
        bg.x = 0;
        bg.y = 0;


        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 900;
        this.textField.x = 576;
        this.textField.textColor = 0x00A5FF;

        this.textField.text = `加载中`;
        this.textField.size = 20;

        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 922;
        this.textField.x = 908;
        this.textField.textColor = 0x00A5FF;
        this.textField.size = 20;


    }

    public onProgress(current: number, total: number): void {
        var text = (current / total) * 100;
        var t = parseInt(text.toString())
        this.textField.text = `${t}` + '%';
        var temp = t / 100 * 16
        for (var i = 0; i <= temp; i++) {
            let box: egret.Bitmap = new egret.Bitmap(RES.getRes("loading_png"));
            this.addChild(box);
            box.x = 332 + 32 * i;
            box.y = 930;
        }

    }
}