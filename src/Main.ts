class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event: egret.Event) {

        // 赋值Global.stage，方便后面访问stage
        Global.stage = this.stage
        egret.lifecycle.addLifecycleListener((context) => {
            context.onUpdate = () => {
            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
    }

    private async loadResource() {
        try {
            await RES.loadConfig("resource/default.res.json", "resource/");//加载配置表
            await RES.loadGroup("loading");//加载loading组
            await this.loadTheme();
            const loadingView = new LoadingUI();//创建loadingUI实例
            this.stage.addChild(loadingView);
            await RES.loadGroup("preload", 0, loadingView);//加载默认preload组资源,并执行loadingView
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }



    private loadTheme() {
        return new Promise((resolve, reject) => {
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);
        })
    }

    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    //创建游戏场景
    private createGameScene() {

        // Global.addScene(new GameScene())
        // Global.addScene(new GameOverScene())
        Global.addScene(new GameStartScene())
    }
}