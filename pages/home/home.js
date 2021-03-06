var app = getApp()
var API = require('../../utils/api.js')
Page({

    data: {
        swiperArr: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        hasOpenId: false,
    },

    onLoad: function () {
        var that = this;
        let userInfo = wx.getStorageSync('userInfo');
        if (userInfo) {
            openId = JSON.parse(userInfo).openId
            that.setData({
                hasOpenId: true
            })
        }
        // 使用 Mock
        API.ajax({
            count: 5
        }, function (res) {
            //这里既可以获取模拟的res
            console.log(res)
            that.setData({
                swiperArr: res.data
            })
        });

        console.log(this.data.swiperArr)
    }
})