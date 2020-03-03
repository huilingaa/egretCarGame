class tool {
	public array: number[][];
	public arrayBtn: number[][];

	public random_num(min: number, max: number) {
		let Range = max - min;
		let Rand = Math.random();
		return (min + Math.round(Rand * Range));
	}

	public sortNumber(a: number, b: number) {
		return a - b;
	}

	public soo(temp) {
		var a = []
		for (var i = 0; i < 10; i++) {
			a.push(this.arrayS(temp[i]))
		}
		return a;
	}

	public arrayS(temp) {
		for (var i = 0; i < 10; i++) {
			var s = JSON.parse(JSON.stringify(temp))
			var sortNum = s.sort(this.sortNumber)
			var aa = [];
			temp.map(item => {
				aa.push(sortNum.indexOf(item) + 1)
			});
			return aa;
		}
	}

	public array_max(arr) {
		var max = arr[0];
		for (var i in arr) {
			if (arr[i] > max) { max = arr[i]; }
		}
		return max;
	}
	public reverse(arr) {
		for (var i = 0; i < arr.length; i++) {
			for (var j = i + 1; j < arr[i].length; j++) {
				var temp = arr[i][j];
				arr[i][j] = arr[j][i];
				arr[j][i] = temp;
			}
		}
		return arr
	}

	public gitData() {
		this.array = new Array();
		this.arrayBtn = new Array();
		for (var i = 0; i < 10; i++) {
			this.array[i] = new Array();
			for (var j = 0; j < 9; j++) {
				this.array[i][j] = this.random_num(0, 900);
				this.array[i][9] = -this.random_num(243, 1080);
			}
		}
		var reverseNum = JSON.parse(JSON.stringify(this.array))
		var aa = this.reverse(reverseNum);
		this.arrayBtn = this.soo(aa);
		return { returna: this.array, returnb: this.arrayBtn, returnc: aa };
	}
}