(self.webpackChunktimetrex=self.webpackChunktimetrex||[]).push([["wizard-user_photo-UserPhotoWizardController","filebrowser-CameraBrowser","filebrowser-TImage","filebrowser-TImageAdvBrowser","filebrowser-TImageBrowser","filebrowser-TImageCutArea"],{8128:()=>{!function(e){e.fn.CameraBrowser=function(t){Global.addCss("global/widgets/filebrowser/TImageBrowser.css");var i,a=e.extend({},e.fn.CameraBrowser.defaults,t),s=this,r=null,n=null,l=null;return this.stopCamera=function(){l&&(l.stop?l.stop():l.getTracks&&l.getTracks().forEach((e=>e.stop())))},this.showCamera=function(){function t(){TAlertManager.showAlert(e.i18n._("Unable to access Camera.<br><br>Please check your camera connections, permissions, and ensure you are using HTTPS. Alternatively, use the File upload method instead."))}navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia,navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){"srcObject"in r?r.srcObject=e:r.src=URL.createObjectURL(e),r.play(),l=e})).catch((function(e){t()})):navigator.getUserMedia?navigator.getUserMedia({video:!0},(function(e){"srcObject"in r?r.srcObject=e:r.src=URL.createObjectURL(e),r.play(),l=e}),t):navigator.webkitGetUserMedia?navigator.webkitGetUserMedia({video:!0},(function(e){r.src=window.webkitURL.createObjectURL(e),r.play(),l=e}),t):navigator.mozGetUserMedia?navigator.mozGetUserMedia({video:!0},(function(e){r.src=window.URL.createObjectURL(e),r.play(),l=e}),t):t()},this.setEnable=function(e){e;var t=this.children().eq(1);e?(t.removeAttr("disabled"),t.removeClass("disable-element")):(t.attr("disabled",!0),t.removeClass("disable-element").addClass("disable-element"))},this.clearErrorStyle=function(){},this.getField=function(){return i},this.getValue=function(){return!1},this.getFileName=function(){return"camera_stream.png"},this.getImageSrc=function(){return n[0].toDataURL()},this.setImage=function(e){var t=s.children().eq(0);if(!e)return t.attr("src",""),void t.hide();var i=new Date;t.hide(),t.attr("src",e+"&t="+i.getTime()),t.css("height","auto"),t.css("width","auto")},this.onImageLoad=function(t){e(t).show()},this.setValue=function(e){e||(e="")},this.each((function(){var t=e.meta?e.extend({},a,e(this).data()):a;i=t.field;r=e(this).children().eq(0).children().eq(0)[0],n=e(this).children().eq(0).children().eq(1);var l=e(this).children().eq(1).children().eq(0),o=e(this).children().eq(1).children().eq(1);l.prop("disabled",!1),o.prop("disabled",!0),l.bind("click",(function(){l.prop("disabled",!0),o.prop("disabled",!1),n.parent().addClass("flash"),setTimeout((function(){n.parent().removeClass("flash")}),1e3),n[0].getContext("2d").drawImage(r,0,0,400,300),n.css("z-index",51),s.trigger("change",[s])})),o.bind("click",(function(){l.prop("disabled",!1),o.prop("disabled",!0),Global.glowAnimation.stop(),n.css("z-index",-1),s.trigger("NoImageChange",[s])}))})),this},e.fn.CameraBrowser.defaults={}}(jQuery)},1469:()=>{!function(e){e.fn.TImage=function(t){Global.addCss("global/widgets/filebrowser/TImageBrowser.css");var i,a=e.extend({},e.fn.TImage.defaults,t);return this.clearErrorStyle=function(){},this.getField=function(){return i},this.getValue=function(){return null},this.setValue=function(e){if(e){var t=new Date;this.attr("src",e+"&t="+t.getTime())}else this.attr("src","")},this.each((function(){var t=e.meta?e.extend({},a,e(this).data()):a;i=t.field})),this},e.fn.TImage.defaults={},e(document).on("mouseover",".file-browser img",(function(t){var i=e(t.target).parents(".file-browser");if(!e(".file_browser_overlay")[0]&&1==e(t.target).attr("enable-delete")){var a=e(t.target).height(),s=(a-32)/2,r=e('<div class="file_browser_overlay"><img src="theme/default/images/delete-512.png" style="position:absolute;width:32px;height:32px;top:'+s+"px;left:"+s+'px;"></div>');r.css("position","absolute"),r.css("top","0px"),r.css("left","0"),r.css("cursor","pointer"),r.css("height",a+"px"),r.css("width","100%"),r.css("background","rgba(255,255,255,0.85)"),e(t.target).parents(".file-browser").append(r),e(document).on("click",".file_browser_overlay",(function(t){e(t.target).parent().find("img").attr("src");TAlertManager.showConfirmAlert(e.i18n._("This will permanently delete the image. Are you sure?"),"",(function(e){if(e){var t={type:"deleteClick",message:"Delete image clicked.",time:new Date};i.trigger(t)}}))})),e(document).on("mouseleave",".file-browser",(function(){(e(document).off("click",".file_browser_overlay"),e(".file_browser_overlay")[0])&&e(this).find(".file_browser_overlay").off().remove()}))}}))}(jQuery)},8243:()=>{!function(e){e.fn.TImageAdvBrowser=function(t){Global.addCss("global/widgets/filebrowser/TImageBrowser.css");var i,a,s,r=e.extend({},e.fn.TImageAdvBrowser.defaults,t),n=this,l="",o=177,c=42,d=null;return this.setEnable=function(e){e;var t=this.children().eq(1);e?t.show():t.hide()},this.clearErrorStyle=function(){},this.getField=function(){return i},this.getValue=function(){return s},this.setImage=function(e){if(!e)return a.attr("src",""),void a.hide();var t=new Date;a.hide(),a.attr("src",e+"&t="+t.getTime()+"&X-CSRF-Token="+getCookie("CSRF-Token")),a.css("height","auto"),a.css("width","auto")},this.onImageLoad=function(t){var i=e(t).height()>0?e(t).height():t.naturalHeight,a=e(t).width()>0?e(t).width():t.naturalWidth;i>c&&e(t).css("height",c),a>o&&(e(t).css("width",o),e(t).css("height","auto")),n.trigger("setSize"),i<5?e(t).hide():e(t).show()},this.setValue=function(e){e||(e="")},this.setEnableDelete=function(e){var t=n.find(".image");e?t.attr("enable-delete",1):t.removeAttr("enable-delete")},this.each((function(){var t=e.meta?e.extend({},r,e(this).data()):r;i=t.field;e(this).find("#upload_image").text(e.i18n._("Upload Image")),t.callBack&&(d=t.callBack),!1===t.show_browser&&e(this).children().eq(1).hide(),t.default_width>0&&(o=t.default_width),t.default_height>0&&(c=t.default_height),Global.isSet(t.name)&&t.name,Global.isSet(l)&&(l=t.accept_filter),Global.isSet(t.deleteImageHandler)&&n.find(".file-browser").on("deleteClick",(function(){t.deleteImageHandler()})),e(this).children().eq(1).bind("click",(function(){IndexViewController.openWizard("UserPhotoWizard",null,(function(e){d&&d(e),s=e}))})),(a=e(this).children().eq(0)).on("load",(function(){n.onImageLoad(this)})),a.hide()})),this},e.fn.TImageAdvBrowser.defaults={}}(jQuery)},3536:()=>{!function(e){e.fn.TImageBrowser=function(t){Global.addCss("global/widgets/filebrowser/TImageBrowser.css");var i,a,s=e.extend({},e.fn.TImageBrowser.defaults,t),r=this,n="filedata",l="",o=177,c=42;this.setEnabled=function(e){e;var t=this.find(".browser-form input");e?(t.removeAttr("disabled"),t.removeClass("disable-element")):(t.attr("disabled",!0),t.removeClass("disable-element").addClass("disable-element"))},this.clearErrorStyle=function(){},this.getFileName=function(){return a.val()},this.getField=function(){return i},this.setEnableDelete=function(e){var t=r.find(".image");e?t.attr("enable-delete",1):t.removeAttr("enable-delete")},this.getValue=function(){return a&&a.val()?"undefined"==typeof FormData?r.find(".browser-form"):new FormData(e(r.find(".browser-form"))[0]):null},this.getImageSrc=function(){return r.find(".image").attr("src")},this.setImage=function(e){var t=r.find(".image");if(!e)return t.attr("src",""),void t.hide();var i=new Date;t.hide(),t.attr("src",e+"&t="+i.getTime()),t.css("height","auto"),t.css("width","auto")};return this.setValue=function(e){e||(e="")},this.each((function(){var t=e.meta?e.extend({},s,e(this).data()):s;i=t.field,t.default_width>0&&(o=t.default_width),t.default_height>0&&(c=t.default_height),Global.isSet(t.name)&&(n=t.name),Global.isSet(l)&&(l=t.accept_filter),a=e(this).find(".browser");var d=e(this).find(".image");d.hide(),d.on("load",(function(){!function(t){var i=e(t).height()>0?e(t).height():t.naturalHeight,a=e(t).width()>0?e(t).width():t.naturalWidth;i>c&&e(t).css("height",c),a>o&&(e(t).css("width",o),e(t).css("height","auto")),r.trigger("setSize"),i<5?e(t).hide():e(t).show()}(this)})),l?a.attr("accept",l):(l="image/*",a.attr("accept","image/*")),a.attr("id","file_browser"),a.attr("name",n),Global.isSet(t.changeHandler)&&r.bind("imageChange",t.changeHandler),Global.isSet(t.deleteImageHandler)&&this.find(".file-browser").on("deleteClick",(function(){t.deleteImageHandler()})),a.bind("change",(function(){if(d.hide(),"undefined"!=typeof FileReader){var e=this.files?this.files:[];if(!e.length||!window.FileReader)return;if("image/*"===l){var t=new FileReader;t.readAsDataURL(e[0]),t.onloadend=function(){var e=this.result;d.attr("src",e)}}}r.trigger("imageChange",[r])}))})),this},e.fn.TImageBrowser.defaults={}}(jQuery)},8453:()=>{!function(e){e.fn.TImageCutArea=function(t){Global.addCss("global/widgets/filebrowser/TImageBrowser.css");var i,a=e.extend({},e.fn.TImageCutArea.defaults,t),s=this;this.clearErrorStyle=function(){},this.getField=function(){return i},this.getValue=function(){};var r=function(e){var t=s.children().eq(1).children().eq(1);if(e){new Date;t.attr("src",e)}else t.attr("src","")};this.setImage=function(t){var i=s.children().eq(0).children().eq(1);if(t){new Date;i.attr("src",t),r(t),setTimeout((function(){e(i).imgAreaSelect({handles:!0,x1:0,y1:0,x2:e(i).width(),y2:e(i).height(),onSelectEnd:function(t,a){var s=i[0].naturalWidth/i.width(),n=a.x1*s,l=a.y1*s,o=(a.x2,a.y2,a.width*s),c=a.height*s,d=e("<canvas></canvas>");(d=d[0]).width=o,d.height=c,d.getContext("2d").drawImage(i[0],n,l,o-1,c-1,0,0,o,c),r(""),r(d.toDataURL())}})}),100)}else i.attr("src","")},this.getAfterImageSrc=function(){return s.children().eq(1).children().eq(1).attr("src")},this.clearSelect=function(){var t=s.children().eq(0).children().eq(1);e(t).imgAreaSelect({remove:!0})};this.setValue=function(e){e||(e="")};for(var n=0;n<this.length;n++){var l=this[n],o=e.meta?e.extend({},a,e(l).data()):a;i=o.field,o.default_width>0&&o.default_width,o.default_height>0&&o.default_height,Global.isSet(o.name)&&o.name,e(l).children().eq(0).children().eq(1).on("load",(function(){})),e(l).children().eq(1).children().eq(1).on("load",(function(){}))}return this},e.fn.TImageCutArea.defaults={}}(jQuery)},5184:(e,t,i)=>{"use strict";i.r(t),i.d(t,{"UserPhotoWizardController":()=>a});i(3536),i(8128),i(8243),i(1469),i(8453);class a extends BaseWizardController{constructor(e={}){_.defaults(e,{el:".wizard-bg"}),super(e)}init(e){this.title=$.i18n._("Image upload Wizard"),this.steps=3,this.current_step=1,this.render()}render(){super.render(),this.initCurrentStep()}buildCurrentStepUI(){var e=this;switch(this.content_div.empty(),this.current_step){case 1:e.next_btn.removeClass("disable-image");var t=this.getLabel();t.text($.i18n._("Please choose the image source"));var i=this.getComboBox("image_type");i.setSourceData([{value:"file",label:$.i18n._("File")},{value:"camera",label:$.i18n._("Camera")}]),this.stepsWidgetDic[this.current_step]={},this.stepsWidgetDic[this.current_step][i.getField()]=i,this.content_div.append(t),this.content_div.append(i);break;case 2:var a,s=this.stepsDataDic[1];t=this.getLabel(),"file"===s.image_type?(t.text($.i18n._("Choose image file to upload")),a=this.getFileBrowser("image_data",null,500,350)):(t.text($.i18n._("Take picture from camera")),(a=this.getCameraBrowser("image_data")).unbind("NoImageChange").bind("NoImageChange",(function(){e.next_btn.addClass("disable-image"),Global.glowAnimation.stop(e.next_btn)}))),a.unbind("change").bind("change",(function(){e.next_btn.removeClass("disable-image"),Global.glowAnimation.start(e.next_btn,"#00ff00")})),this.stepsWidgetDic[this.current_step]={},this.stepsWidgetDic[this.current_step][a.getField()]=a,this.content_div.append(t),this.content_div.append(a),e.next_btn.addClass("disable-image");break;case 3:e.next_btn.removeClass("disable-image"),(t=this.getLabel()).text($.i18n._("Crop and resize image")),a=this.getImageCutArea("image_cut"),this.stepsWidgetDic[this.current_step]={},this.stepsWidgetDic[this.current_step][a.getField()]=a;var r=$(' <form enctype="multipart/form-data" class="browser-form"></form>');this.stepsWidgetDic[this.current_step].hide_form=r,this.content_div.append(t),this.content_div.append(a),this.content_div.append(r)}}buildCurrentStepData(){var e=this.stepsDataDic[this.current_step],t=this.stepsWidgetDic[this.current_step];switch(this.current_step){case 1:e&&t.image_type.setValue(e.image_type);break;case 2:"camera"===this.stepsDataDic[1].image_type&&t.image_data.showCamera(),Global.setWidgetEnabled(this.next_btn,!1);break;case 3:t.image_cut.setImage(this.stepsDataDic[2].img_src)}}onDoneClick(){super.onDoneClick(),this.saveCurrentStep();var e=this.stepsWidgetDic[this.current_step],t=this.stepsDataDic[this.current_step],i=new FormData(e.hide_form[0]),a=t.after_img_src&&t.after_img_src.split(",");a&&a.length>0&&(i.append("file_data",a[1]),i.append("base64_encoded",!0),i.append("mime_type",a[0].split(";")[0].split(":")[1]),i.append("file_name",this.stepsDataDic[2].file_name),this.call_back&&this.call_back(i)),this.onCloseClick()}onCloseClick(){var e=this.stepsWidgetDic[this.current_step];3===this.current_step&&e.image_cut.clearSelect(),2===this.current_step&&"camera"===this.stepsDataDic[1].image_type&&e.image_data.stopCamera(),$(this.el).remove(),LocalCacheData.current_open_wizard_controller=null}onNextClick(){if(!this.next_btn.hasClass("disable-image")){var e=this.stepsWidgetDic[this.current_step];3===this.current_step&&e.image_cut.clearSelect(),2===this.current_step&&"camera"===this.stepsDataDic[1].image_type&&(e.image_data.stopCamera(),Global.glowAnimation.stop(this.next_btn)),this.saveCurrentStep(),this.current_step=this.current_step+1,this.initCurrentStep()}}onBackClick(){if(!this.back_btn.hasClass("disable-image")){var e=this.stepsWidgetDic[this.current_step];3===this.current_step&&e.image_cut.clearSelect(),2===this.current_step&&"camera"===this.stepsDataDic[1].image_type&&(e.image_data.stopCamera(),Global.glowAnimation.stop(this.next_btn)),this.saveCurrentStep(),this.current_step=this.current_step-1,this.initCurrentStep()}}saveCurrentStep(){this.stepsDataDic[this.current_step]={};var e=this.stepsDataDic[this.current_step],t=this.stepsWidgetDic[this.current_step];switch(this.current_step){case 1:e.image_type=t.image_type.getValue();break;case 2:e.img_src=t.image_data.getImageSrc(),e.file_name=t.image_data.getFileName();break;case 3:e.after_img_src=t.image_cut.getAfterImageSrc()}}setDefaultDataToSteps(){if(!this.default_data)return null;this.stepsDataDic[2]={},this.stepsDataDic[3]={},this.getDefaultData("user_id")&&(this.stepsDataDic[3].user_id=this.getDefaultData("user_id")),this.getDefaultData("pay_period_id")&&(this.stepsDataDic[2].pay_period_id=this.getDefaultData("pay_period_id"))}}}}]);
//# sourceMappingURL=wizard-user_photo-UserPhotoWizardController.bundle.js.map?v=59625448ea87b64aee06