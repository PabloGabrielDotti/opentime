(self.webpackChunktimetrex=self.webpackChunktimetrex||[]).push([["combobox-TComboBox"],{5519:()=>{var e;(e=jQuery).fn.TComboBox=function(t){var i,n,r=e.extend({},e.fn.TComboBox.defaults,t),o=this,s=null,l=null,a=!1,h=!1,c=!1,u="",d=null,p=!0,f="value",m="label",g="";return this.setValueKey=function(e){f=e},this.setLabelKey=function(e){m=e},this.getEnabled=function(){return p},this.setEnabled=function(e){p=e,!1===e||""===e?(o.attr("disabled","true"),o.addClass("t-select-readonly")):(o.removeAttr("disabled"),o.removeClass("t-select-readonly"))},this.setCheckBox=function(e){d&&(d.children().eq(0)[0].checked=e)},this.isChecked=function(){return!(!d||!0!==d.children().eq(0)[0].checked)},this.setMassEditMode=function(t){t?((d=e(' <div class="mass-edit-checkbox-wrapper"><input type="checkbox" class="mass-edit-checkbox"></input><label for="checkbox-input-1" class="input-helper input-helper--checkbox"></label></div>')).insertBefore(e(this)),d.change((function(){o.trigger("formItemChange",[o])}))):d&&(d.remove(),d=null)},this.setErrorStyle=function(t,i,n){n?e(this).addClass("warning-tip"):e(this).addClass("error-tip"),u=t,i&&this.showErrorTip()},this.showErrorTip=function(t){Global.isSet(t)||(t=2),n||(n=(n=Global.loadWidgetByName(WidgetNamesDic.ERROR_TOOLTIP)).ErrorTipBox()),e(this).hasClass("warning-tip")?n.show(this,u,t,!0):n.show(this,u,t)},this.hideErrorTip=function(){Global.isSet(n)&&n.remove()},this.clearErrorStyle=function(){e(this).removeClass("error-tip"),e(this).removeClass("warning-tip"),this.hideErrorTip(),u=""},this.setField=function(e){i=e},this.getField=function(){return i},this.getLabel=function(){return!s||a&&1===s.length||h&&1===s.length?l:e(this).children("option:selected").text()},this.getValue=function(){if(!s||a&&1===s.length||h&&1===s.length)return l;var t=e(this).children("option:selected").attr("value");return!e.isNumeric(t)||"0"!==t&&"0"===t.toString()[0]||(t=parseFloat(t)),-1!==t&&"-1"!==t||(t=-1),t},this.getSelectedIndex=function(){return this[0].selectedIndex},this.setSelectedIndex=function(e){e<0&&(e=0),e>=this[0].length&&(e=this[0].length-1),this[0].selectedIndex=e,this.setValue(this[0].value)},this.getLabel=function(){return e(this).children("option:selected").text()},this.setValue=function(t){if(l=t,!s||s.length<1||a&&1===s.length||h&&1===s.length)c=!0;else{if(!Global.isSet(t)||!1===t)if(a)t=TTUUID.zero_id;else if(h)t=TTUUID.not_exist_id;else if(s&&s.length>0)return void this.setValue(s[0][f]);e(e(this).find("option")).removeAttr("selected"),e(e(this).find("option")).filter((function(){return null!=t&&e(this).attr("value")===t.toString()})).prop("selected",!0).attr("selected",!0)}},this.setSourceData=function(t){if(e(this).empty(),!Global.isSet(t)||t.length<1?a?t=Global.addFirstItemToArray(t,"empty",g):h&&(t=Global.addFirstItemToArray(t,"any",g)):a?t&&t.length>0&&t[0].value!=TTUUID.zero_id&&0!=t[0].value&&(t=Global.addFirstItemToArray(t,"empty",g)):h&&t&&t.length>0&&t[0].value!=TTUUID.not_exist_id&&-1!=t[0].value&&(t=Global.addFirstItemToArray(t,"any",g)),s=t,e(this)[0])if(e.isArray(t))for(var i=t.length,n=0;n<i;n++)e(this).append(e('<option value="'+t[n][f]+'"></option>').text(t[n][m]));else for(var r in t)e(this).append(e('<option value="'+r+'"></option>').text(t[r]));c&&this.setValue(l)},this.each((function(){var t=e.meta?e.extend({},r,e(this).data()):r;t.set_empty&&(a=t.set_empty),t.customFirstItemLabel&&(g=t.customFirstItemLabel),t.set_any&&(h=t.set_any),t.mass_edit_mode&&t.mass_edit_mode,i=t.field,e(this).change((function(){p&&(d&&o.setCheckBox(!0),o.trigger("formItemChange",[o]))})),e(this).click((function(){p||d||(LocalCacheData.current_open_sub_controller&&LocalCacheData.current_open_sub_controller.edit_view&&LocalCacheData.current_open_sub_controller.is_viewing||LocalCacheData.current_open_primary_controller&&LocalCacheData.current_open_primary_controller.edit_view&&LocalCacheData.current_open_primary_controller.is_viewing)&&(u=Global.view_mode_message,o.showErrorTip(10))})),e(this).mouseover((function(){p&&u&&u.length>0&&o.showErrorTip(20)})),e(this).mouseout((function(){o.hideErrorTip()}))})),this},e.fn.TComboBox.defaults={}}}]);
//# sourceMappingURL=combobox-TComboBox.bundle.js.map?v=ec40f59e77dfe83421bc