const app = getApp()
Page({
	data: {
		vtabs: [
			{ title: '常规', templateName:'template1' },
			{ title: '选项2', templateName:'template2' },
			{ title: '选项3', templateName:'template3' },
			{ title: '选项4', templateName:'template4' },
		],
		streetList: [],
		streetIndex: '',
		params: {
			Condition1: '',
			Condition2: '',
			Condition3: '',
			Condition4: '',
			Condition5: '',
			Condition6: '',
			Condition7: '',
			Condition8: '',
			Condition9: '',
			Condition11: '',
			Condition22: '',
			Condition33: '',
			Condition44: '',
			Condition55: '',
			Condition66: '',
			Condition77: '',
			Condition88: '',
			Condition99: '',
			Condition111: '',
			Condition222: '',
			Condition333: '',
			Condition444: '',
			Condition555: '',
			Condition666: '',
			Condition777: '',
			Condition888: '',
			Condition999: '',
			Condition1111: '',
			Condition2222: '',
			Condition3333: '',
			Condition4444: '',
			Condition5555: '',
			Condition6666: '',
			Condition7777: '',
			Condition8888: '',
			Condition9999: ''
		}
	},
	onLoad: function () {
		this.setData({
			streetList: app.globalData.streetList
		})
		console.log(this.data.streetList)
	},
	bindStreetChange(e) {
		let ConditionName = `params.${e.currentTarget.dataset.name}`
	  	this.setData({
	  		streetIndex: e.detail.value,
			[ConditionName]: this.data.streetList[e.detail.value].name
	  	});
	},
	ConditionInput(e) {
		let ConditionName = `params.${e.currentTarget.dataset.name}`
		this.setData({
			[ConditionName]: e.detail.value
		})
	},
	formSubmit() {
		console.log(this.data.params)
	}
});