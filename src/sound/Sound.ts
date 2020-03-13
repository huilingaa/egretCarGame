

class sound extends eui.Component implements eui.UIComponent {

    private _sound: egret.Sound;
    private _channel: egret.SoundChannel;
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.loadSound();
    }


    private loadSound(): void {
        var sound: egret.Sound = this._sound = new egret.Sound();;
        sound.addEventListener(egret.Event.COMPLETE, function (e: egret.Event) {
            this.init();
        }, this);
        sound.load("resource/assets/com/sound/StarWar.mp3");
    }

    public  play(): void {
       this._channel = this._sound.play();
    }
    public stop(): void {
        if (this._channel) {
            this._channel.stop();
            this._channel = null;
        }
    }


    // private _playTxt: egret.TextField;
    // private _pauseTxt: egret.TextField;
    // private _stopTxt: egret.TextField;
    // private _pauseTime: number = 30;
    // private switchOpen: boolean = false;
    // private init(): void {
    //     var rap: number = 180;
    //     var rapH: number = 200;

    //     //play
    //     var playTxt: egret.TextField = this._playTxt = new egret.TextField();
    //     playTxt.text = "播放";
    //     playTxt.touchEnabled = true;
    //     this.addChild(playTxt);

    //     playTxt.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
    //         this.switchOpen = !this.switchOpen;
    //         if (this.switchOpen) {
    //             this.play();
    //         } else {
    //             this.stop();
    //         }

    //     }, this);




    // }


}