/*
 *插件作者:LPY
 *发布时间:2016年03月29日
 *插件介绍:图片上传本地预览插件 兼容浏览器(IE 谷歌 火狐) 为测试safari 当然如果是使用这些内核的浏览器基本都兼容
 *作  者QQ:1721821916
 *使用方法:
 *界面构造(IMG标签外必须拥有DIV 而且必须给予DIV控件ID)
 *<div id="Up0">
 *<!--<img class="imgShowUp0">       这是默认的缩略图，可选-->
 *<input type="file" class="UpSty1" id="Up0-Input0" name="ImagePathUp0">
 *</div>
 *<input type="button" class="UpSty2" id="BtnInputUp0">
 *建议请不要自行修改默认的样式名及ID，以防出现无法使用的问题

 *调用代码:
 *new uploadPreview({UpBtn: "BtnInputUp0", DivShow: "Up0", ImgShow: "imgShowUp"});
 *参数说明:
 *UpBtn:选择文件控件ID;
 *DivShow:DIV控件ID;
 *ImgShow:图片控件ID;
 *Width:预览宽度;
 *Height:预览高度;
 *num:最大可以上传的张数;如果不传的话，就是默认5张;
 *ImgType:支持文件类型 格式:["gif", "jpeg", "jpg", "bmp", "png"];
 *callback:选择文件后回调方法;

 *版本:v1.1
 1.实现每组最大上传限制为5张图片
 2.每个上传后的图片生成一个缩略图
 3.鼠标点击缩略图后，该图片删除，需要重新上传
 4.每个缩略图前面的那个input为上传的图片的文件域，与后台对接使用---这个是实现的思路。
 5.默认有一个[type=file]的input，最后也会有一个。这个是用来获取第一个上传的图片用的。---不要删除。
 */
export default function (curTag,tarTag,setting) {
  var _this = curTag;
  _this.IsNull = function (value) {
    if (typeof (value) == "function") {
      return false;
    }
    if (value == undefined || value == null || value == "" || value.length == 0) {
      return true;
    }
    return false;
  };
  _this.DefautlSetting = {
    UpBtn: "",
    DivShow: "",
    ImgShow: "",
    Width: 100,
    Height: 100,
    num: 5,
    ImgType: ["gif", "jpeg", "jpg", "bmp", "png"],
    ErrMsg: "选择文件错误,图片类型必须是(gif,jpeg,jpg,bmp,png)中的一种",
    callback: function () {
    }
  };
  _this.Setting = {
    UpBtn: _this.IsNull(setting.UpBtn) ? _this.DefautlSetting.UpBtn : setting.UpBtn,
    DivShow: _this.IsNull(setting.DivShow) ? _this.DefautlSetting.DivShow : setting.DivShow,
    ImgShow: _this.IsNull(setting.ImgShow) ? _this.DefautlSetting.ImgShow : setting.ImgShow,
    Width: _this.IsNull(setting.Width) ? _this.DefautlSetting.Width : setting.Width,
    Height: _this.IsNull(setting.Height) ? _this.DefautlSetting.Height : setting.Height,
    num: _this.IsNull(setting.num) ? _this.DefautlSetting.num : setting.num,
    ImgType: _this.IsNull(setting.ImgType) ? _this.DefautlSetting.ImgType : setting.ImgType,
    ErrMsg: _this.IsNull(setting.ErrMsg) ? _this.DefautlSetting.ErrMsg : setting.ErrMsg,
    callback: _this.IsNull(setting.callback) ? _this.DefautlSetting.callback : setting.callback
  };

  _this.getObjectURL = function (file) {
    var url = null;
    if (window.createObjectURL != undefined) {
      url = window.createObjectURL(file);
    } else if (window.URL != undefined) {
      url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) {
      url = window.webkitURL.createObjectURL(file);
    }
    //console.log(url);  缩略图的url
    return url;
  };
  if (curTag.value) {
    if (!RegExp("\.(" + _this.Setting.ImgType.join("|") + ")$", "i").test(curTag.value.toLowerCase())) {
      alert(_this.Setting.ErrMsg);
      this.value = "";
      return false;
    }

    //缩略图的img标签jq对象
    var imgShowClass = _this.Setting.ImgShow;

    //动态创建图片
    var oImg = null;
    if (window.navigator.userAgent.indexOf('MSIE') > -1) {
      //为处理IE下默认img的预览失败的小图标，用p标签方式解决。
      oImg = document.createElement('p');
    } else {
      //其他浏览器用img标签。
      oImg = document.createElement('img');
    }
    //增加相同的样式
    oImg.className = imgShowClass;
    //添加图片到这一组的最后
    var com = _this.Setting.DivShow;
    // var oDiv = document.getElementById(com);
    // debugger
    // oDiv.appendChild(oImg);
    com.appendChild(oImg);



    if (navigator.userAgent.indexOf("MSIE") > -1) {
      try {
        $(imgP)[parseInt($(imgP).length)].src = _this.getObjectURL(this.files[0]);

        alert(1);
        //document.getElementById(_this.Setting.ImgShow).src = _this.getObjectURL(this.files[0]);

      } catch (e) {
        //IE，目前缩略图展示有问题，需要和原始的比对来进行事先缩略图的显示
        var div = $("." + imgShowClass).last()[0];

        this.select();
        top.parent.document.body.focus();
        var src = document.selection.createRange().text;
        document.selection.empty();

        div.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod = scale)";
        div.style.width = _this.Setting.Width + "px";
        div.style.height = _this.Setting.Height + "px";
        //div._imgShow( ImagePreview.TRANSPARENT, div.style.width, div.style.height );
        try {
          div.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = src;
        } catch (e) {
          alert("该图片无法上传，请更换图片后上传");
          //上传失败后，删除上传的内容，并提示用户重新上传
          $(div).prev().remove();
          $(div).remove();
          return;
        }
      }
    } else {
      //chrome/FF缩略图
      debugger
      tarTag.src = _this.getObjectURL(curTag.files[0]);
      tarTag.style.zIndex=1;
    }

    //如果有callback，执行，自行设置
    _this.Setting.callback();

    //下面是用来删除图片的代码
  }
}