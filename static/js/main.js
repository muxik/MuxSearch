// 类型
let type = get_active_id();

// 搜索引擎地址
let link = [
    // 百度
    "https://www.baidu.com/s?wd=",
    // 必应
    "https://cn.bing.com/search?q=",
    // 谷歌
    "https://www.google.com/search?q=",
    // Github
    "https://github.com/search?q="
];

window.onload = function () {
    // 自动获取焦点
    setTimeout(function() {
       try {
           document.getElementById('input').focus();
        }catch(e) {}
    });


    menu_active();
    page_time();
    search();
};

// 活动菜单
function menu_active() {
    let element = document.getElementsByClassName('item');
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener('click', function () {
            type = i.toString();
            for (let j = 0; j < element.length; j++) {
                element[j].className = "item";
            }
            element[i].className += " active";
        })
    }
    return type;
}

// 获取当前活动元素
function get_active_id() {
    let element = document.getElementsByClassName('item');
    for (let i = 0; i < element.length; i++) {
        if (element[i].className === "item active") {
            return element[i].getAttribute('id');
        }
    }
}

//时间戳转换方法    date:时间戳数字
function format_date(date) {
    var date = new Date(date);
    var YY = date.getFullYear() + '-';
    var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return YY + MM + DD + " " + hh + mm + ss;
}

// 获取当前时间
function get_date_time() {
    return format_date(new Date().getTime());
}

// 修改页面时间
function page_time() {
    let element = document.getElementById('time');
    setInterval(function () {
        element.innerHTML = get_date_time();
    }, 1000)
}

// 获取输入
function get_input() {
    let element = document.getElementById('input').value;
    if (element === "") {
        return false;
    } else {
        return element;
    }
}

// 搜索
function search() {
    let element = document.getElementById('search');
    // 键盘回车
    document.onkeydown = (event) => {
        if (event.keyCode === 13) {
            if (get_input() === false) {
                window.alert("请输入内容");
                return false;
            }
            redirect(type, get_input());
        }
    };
    // 点击搜索
    element.addEventListener('click', function () {
        if (get_input() === false) {
            window.alert("请输入内容");
            return false;
        }
         redirect(type,get_input())
    })
}

// 跳转
function redirect(id,content) {
    let url = link[id] + content;
    window.open(url,'_blank');
    return url;
}
