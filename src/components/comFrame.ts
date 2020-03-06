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
    public onFont(font1: string, font2: string, state: string) {
        var arrBom = [{
            x: 174, x2: 652, y: 66, font: '期号 20200221172'
        }, {
            x: 738, x2: 718, y: 66, font: '下期时间 13：49'
        }, {
            x: 55, y: 937, font: '期号'
        }, {
            x: 180, y: 937, font: '20200221159'
        }, {
            x: 60, y: 984, font: '2020-02-21'
        }, {
            x: 220, y: 984, font: '16:09'
        },
        {
            x: 493, y: 937, font: '冠亚军和'
        },
        {
            x: 411, y: 984, font: '12'
        },
        {
            x: 521, y: 984, font: '大'
        }, {
            x: 648, y: 984, font: '双'
        },
        {
            x: 834, y: 937, font: '1-5龙虎'
        },
        {
            x: 706 + 60, y: 984, font: '龙'
        },
        {
            x: 706 + 60 * 2, y: 984, font: '龙'
        }, {
            x: 706 + 60 * 3, y: 984, font: '虎'
        }, {
            x: 706 + 60 * 4, y: 984, font: '龙'
        }, {
            x: 706 + 60 * 5, y: 984, font: '虎'
        },
        ]
        var arrayX = [200, 712]
        var font = [];
        arrBom.forEach((item, index) => {
            font[index] = new egret.TextField()
            this.addChild(font[index]);
            if (state !== 'playIng' || index < 2) {
                font[index].x = state == 'playIng' ? arrayX[index] : item.x
                font[index].y = state == 'playIng' ? 36 : item.y
                font[index].text = item.font;
            }
            font[index].size = 22;
            font[index].textColor = 0xffffff;
        });

    }
    // 音乐样式与播放
    public toggleMusic() {
        var leftTime: egret.Bitmap = new egret.Bitmap();
        leftTime.texture = RES.getRes("calendar_png");
        this.addChild(leftTime);
        leftTime.y = 53
        leftTime.x = 20
        var rightSound = new egret.Bitmap();
        this.addChild(rightSound);
        rightSound.texture = RES.getRes('shengyin_png');


        rightSound.y = 53
        rightSound.x = 1050 - rightSound.width
        rightSound.touchEnabled = true;
        rightSound.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
             var switchOpen = !switchOpen
            // this.texture = RES.getRes('loading_png');
            if (switchOpen) {
                console.log('as');
                rightSound.texture = RES.getRes('shengyin_png');
            } else {
                console.log('no');
                rightSound.texture = RES.getRes('loading_png');
            }
        }, rightSound);

    }



}