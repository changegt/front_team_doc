/**
 * @class
 * @classdesc 测试说明1
 */
var PersonC = function(){
	this.opt = opt;
	this.init();
}

/**
 * @example
 * ```
 * new PersonC({
 * 		name: '1',
 * 		age: 12
 * });
 * ```
 */
PersonC.prototype = {
	/** @memberof PersonC */
	name: '',
	/** @memberof PersonC */
	age: 0,

	init: function(){
		this.name = this.opt.name;
		this.age = this.opt.age;
	},

	setName (name) {
		this.name = name;
	},

	setAge (age) {
		this.age = age;
	},

	do (event) {
		alert(this.name+'正在'+event);
	},

	sing: function(){

	}
};

