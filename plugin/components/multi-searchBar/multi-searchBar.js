//index.js
Component({
	options: {
	    multipleSlots: true
	},
	properties: {
		mask: {
		    type: Boolean,
		    value: true
		},
		templateName: {
			type: String,
			value: ''
		},
		vtabs: {
			type: Array,
			value: []
		},
	},
	data: {
		isShow: true,
		currentTab: 0,
		swiper_open: false,
		
		activeTab: 0,
	},
	methods: {
		// 区域
		tabNav: function (e) {
			this.setData({
				displays: this.data.swiper_open ? "none" : "block",
				overflowHidden: !this.data.swiper_open,
				swiper_open: !this.data.swiper_open
			})
		},
		onTabClick(e) {
		  const index = e.detail.index
		  console.log('tabClick', index)
		},
		onChange(e) {
		  const index = e.detail.index
		  console.log('change', index)
		},
	}
})