module.exports = {
  sayHello: function () {
    console.log('Hello plugin!')
  },
  answer: 42,
  _init: function (options) {
	  console.log(options)
  }
}