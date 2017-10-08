var React = require('react-native');
var Dimensions = require('Dimensions');

var {
    PixelRatio
} = React;

var Util = {

    //单位像素
    pixel: 1 / PixelRatio.get(),
    //屏幕尺寸
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    getPixelSizeForLayoutSize: function (layoutSize) {
        return Math.round(layoutSize * PixelRatio.get());
    },

    //post请求
    post: function (url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => response.json())
            .then((responseJson) => {
                callback(responseJson);
                // callback(responseText);
            }).done();
    },

    //get请求
    get: function (url, callback) {
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
                // callback(responseText);
            }).done();
    },

    log: function (obj) {
        var description = "";
        for (var i in obj) {
            var property = obj[i];
            description += i + " = " + property + "\n";
        }
        alert(description);
    },
    //Key
    key: ''

};
div = (a, b) => {
    var c, d, e = 0,
        f = 0;
    try {
        e = a.toString().split(".")[1].length;
    } catch (g) {
    }
    try {
        f = b.toString().split(".")[1].length;
    } catch (g) {
    }
    return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), this.mul(c / d, Math.pow(10, f - e));
}
mul = (a, b) => {
    var c = 0,
        d = a.toString(),
        e = b.toString();
    try {
        c += d.split(".")[1].length;
    } catch (f) {
    }
    try {
        c += e.split(".")[1].length;
    } catch (f) {
    }
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}
module.exports = Util;