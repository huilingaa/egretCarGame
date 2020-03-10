class tool {
	public array: number[][];
	public arrayBtn: number[][];
	public newFire: number[][];
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
			var arr = [];
			// 转成大小顺序比
			temp.map((item, index) => {
				arr.push(sortNum.indexOf(item) + 1)
			});
			//消除相同留白的
			var tmp = [];
			arr.forEach(function (item, index) {
				if (arr.indexOf(item) !== arr.lastIndexOf(item) && tmp.indexOf(item) === -1) {
					tmp.push(item)
					arr[index] = item + 1;
				}
			})
			return arr;
		}
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
				this.array[i][j] = this.random_num(243, 837);
				this.array[i][9] = -this.random_num(243, 1080);
			}
		}

		var reverse = this.reverse(JSON.parse(JSON.stringify(this.array)));
		this.arrayBtn = this.soo(reverse);
		this.newFire = JSON.parse(JSON.stringify(reverse))
		var arr = [];
		var n = 1;
		for (var i = 0; i < 10; i++) {
			arr[i] = [];
			for (var j = 0; j < 10; j++) {
				if (i == 0 && this.newFire[0][j] > 500) {
					arr[0].push(j + 1)
				}

				if (i > 0 && i < 9) {
					if (this.newFire[i][j] - this.newFire[i - 1][j] >= 500) {
						arr[i].push(j + 1)
					}
				}
				if (i == 9) {
					if (Math.abs(this.newFire[i][j] - this.newFire[i - 1][j]) >= 500) {
						arr[i].push(j + 1)
					}
				}

			}

		}

		return { returna: this.newFire, returnb: this.arrayBtn, returnc: arr };
	}
}