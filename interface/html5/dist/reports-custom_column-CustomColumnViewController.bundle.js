(self.webpackChunktimetrex=self.webpackChunktimetrex||[]).push([["reports-custom_column-CustomColumnViewController","formula_builder-FormulaBuilder"],{9326:()=>{!function(e){e.fn.FormulaBuilder=function(t){var i,o,l=e.extend({},e.fn.FormulaBuilder.defaults,t),n=this,r="",a=null,s=!0,u=null;return this.getEnabled=function(){return s},this.setEnabled=function(e){s=e,!1===e||""===e?(u.children().attr("disabled","true"),u.addClass("t-text-area-readonly")):(u.children().removeAttr("disabled"),u.removeClass("t-text-area-readonly"))},this.setCheckBox=function(e){a&&(a.children().eq(0)[0].checked=e)},this.isChecked=function(){return!(!a||!0!==a.children().eq(0)[0].checked)},this.setMassEditMode=function(t){t?((a=e(' <div class="mass-edit-checkbox-wrapper"><input type="checkbox" class="mass-edit-checkbox"></input><label for="checkbox-input-1" class="input-helper input-helper--checkbox"></label></div>')).insertBefore(u),a.change((function(){n.trigger("formItemChange",[n])}))):a&&(a.remove(),a=null)},this.setValue=function(e){e||(e=""),u.val(e)},this.setErrorStyle=function(e,t,i){i?u.addClass("warning-tip"):u.addClass("error-tip"),r=e,t&&this.showErrorTip()},this.showErrorTip=function(e){Global.isSet(e)||(e=2),o||(o=(o=Global.loadWidgetByName(WidgetNamesDic.ERROR_TOOLTIP)).ErrorTipBox()),u.hasClass("warning-tip")?o.show(this,r,e,!0):o.show(this,r,e)},this.hideErrorTip=function(){Global.isSet(o)&&o.remove()},this.clearErrorStyle=function(){u.removeClass("error-tip"),u.removeClass("warning-tip"),this.hideErrorTip(),r=""},this.setField=function(e){i=e},this.getField=function(){return i},this.getValue=function(){return u.val()},this.setValue=function(e){e||(e=""),u.val(e)},this.each((function(){var t=e.meta?e.extend({},l,e(this).data()):l;i=t.field,u=e(this).children().eq(0);var o=e(this).children().eq(1);o.text(e.i18n._("Formula Builder")),o.unbind("click").bind("click",(function(){t.onFormulaBtnClick&&t.onFormulaBtnClick()})),t.width&&(t.width>0||t.width.indexOf("%")>0)?t.width.indexOf("%")>0?(n.width(t.width),u.css("width","calc( 100% - 115px )")):u.width(t.width):u.width(300),t.height>0&&u.height(t.height),t.rows>0?u.attr("rows",t.rows):u.attr("rows",5),t.style&&n.css(t.style),u.change((function(){a&&n.setCheckBox(!0),n.trigger("formItemChange",[n])})),u.mouseover((function(){s&&r&&r.length>0&&n.showErrorTip(20)})),u.mouseout((function(){e(n).is(":focus")||n.hideErrorTip()})),u.focusin((function(){s?r&&r.length>0&&n.showErrorTip(20):a||(LocalCacheData.current_open_sub_controller&&LocalCacheData.current_open_sub_controller.edit_view&&LocalCacheData.current_open_sub_controller.is_viewing||LocalCacheData.current_open_primary_controller&&LocalCacheData.current_open_primary_controller.edit_view&&LocalCacheData.current_open_primary_controller.is_viewing)&&(r=Global.view_mode_message,n.showErrorTip(10))})),u.focusout((function(){n.hideErrorTip()})),TTPromise.wait(null,null,(function(){u.parents(".formula-builder").css("opacity",1)}))})),this},e.fn.FormulaBuilder.defaults={}}(jQuery)},6729:(e,t,i)=>{"use strict";i.r(t),i.d(t,{"CustomColumnViewController":()=>o});i(9326);class o extends BaseViewController{constructor(e={}){_.defaults(e,{el:"#custom_column_view_container",sub_report_schedule_view_controller:null,type_array:null,format_array:null,exclude_columns_array:null,include_columns_array:null}),super(e)}init(e){this.edit_view_tpl="CustomColumnEditView.html",this.permission_id="report",this.viewId="CustomColumn",this.script_name="CustomColumnView",this.context_menu_name=$.i18n._("Custom Column"),this.navigation_label=$.i18n._("Custom Column")+":",this.table_name_key="report_custom_column",this.api=TTAPI.APIReportCustomColumn,this.render(),this.sub_view_mode?this.buildContextMenu(!0):(this.buildContextMenu(),this.sub_view_mode||this.initData(),this.setSelectRibbonMenuIfNecessary())}getCustomContextMenuModel(){var e={exclude:[ContextMenuIconName.mass_edit],include:[]};return this.sub_view_mode&&e.exclude.push(ContextMenuIconName.view),e}buildEditViewUI(){super.buildEditViewUI();var e=this,t={"tab_custom_column":{"label":$.i18n._("Custom Column")},"tab_audit":!0};this.setTabModel(t),this.edit_only_mode||(this.navigation.AComboBox({api_class:TTAPI.APIUserReportData,id:this.script_name+"_navigation",allow_multiple_selection:!1,layout_name:"global_branch",navigation_mode:!0,show_search_inputs:!0}),this.setNavigation());var i=this.edit_view_tab.find("#tab_custom_column").find(".first-column");this.edit_view_tabs[0]=[],this.edit_view_tabs[0].push(i);var o=Global.loadWidgetByName(FormItemType.TEXT_INPUT);o.TTextInput({field:"name",width:"100%"}),this.addEditFieldToColumn($.i18n._("Name"),o,i,""),o.parent().width("45%"),(o=Global.loadWidgetByName(FormItemType.TEXT_AREA)).TTextInput({field:"description",width:"100%"}),this.addEditFieldToColumn($.i18n._("Description"),o,i,"",null,null,!0),o.parent().width("45%"),(o=Global.loadWidgetByName(FormItemType.COMBO_BOX)).TComboBox({field:"type_id",set_empty:!1}),o.setSourceData(e.type_array),this.addEditFieldToColumn($.i18n._("Type"),o,i),(o=Global.loadWidgetByName(FormItemType.COMBO_BOX)).TComboBox({field:"format_id"}),o.setSourceData(e.format_array),this.addEditFieldToColumn($.i18n._("Format"),o,i),(o=(o=Global.loadWidgetByName(FormItemType.AWESOME_BOX)).AComboBox({field:"include_columns",set_empty:!0,allow_multiple_selection:!0,layout_name:"global_option_column",key:"value"})).setSourceData(e.include_columns_array),this.addEditFieldToColumn($.i18n._("Include Columns"),o,i,"",null,!0),(o=(o=Global.loadWidgetByName(FormItemType.AWESOME_BOX)).AComboBox({field:"exclude_columns",set_empty:!0,allow_multiple_selection:!0,layout_name:"global_option_column",key:"value"})).setSourceData(e.exclude_columns_array),this.addEditFieldToColumn($.i18n._("Exclude Columns"),o,i,"",null,!0),(o=Global.loadWidgetByName(FormItemType.FORMULA_BUILDER)).FormulaBuilder({field:"formula",width:"100%",onFormulaBtnClick:function(){var t=LocalCacheData.current_open_report_controller.api;e.api.getOptions("formula_functions",{onResult:function(i){var o=i.getResult();function l(t){var i=t.getResult(),l={};l.functions=Global.buildRecordArray(o),l.variables=Global.buildRecordArray(i),l.formula=e.current_edit_record.formula,l.current_edit_record=Global.clone(e.current_edit_record),l.api=e.api,IndexViewController.openWizard("FormulaBuilderWizard",l,(function(t){e.current_edit_record.formula=t,e.edit_view_ui_dic.formula.setValue(t)}))}30==e.current_edit_record.type_id||31==e.current_edit_record.type_id?t.getOptions("filter_columns",{onResult:l}):t.getOptions("formula_columns",{onResult:l})}})}}),e.addEditFieldToColumn($.i18n._("Formula"),o,i,"",null,!0,!0),o.parent().width("45%"),e.detachElement("formula")}onFormItemChange(e,t){this.setIsChanged(e),this.setMassEditingFieldsWhenFormChange(e);var i=e.getField(),o=e.getValue();switch(this.current_edit_record[i]=o,i){case"type_id":this.onTypeChange()}t||this.validate()}onAddClick(){super.onAddClick();var e=this;TTPromise.wait(null,null,(function(){e.collectUIDataToCurrentEditRecord(),e.onTypeChange()}))}onTypeChange(){10==this.current_edit_record.type_id?(this.detachElement("formula"),this.attachElement("exclude_columns"),this.attachElement("include_columns")):(this.attachElement("formula"),this.detachElement("exclude_columns"),this.detachElement("include_columns"))}setEditViewDataDone(){super.setEditViewDataDone(),this.onTypeChange()}buildSearchFields(){super.buildSearchFields(),this.search_fields=[new SearchField({label:$.i18n._("Name"),in_column:1,field:"name",multiple:!0,basic_search:!0,adv_search:!1,form_item_type:FormItemType.TEXT_INPUT}),new SearchField({label:$.i18n._("Description"),field:"description",basic_search:!0,adv_search:!1,in_column:1,form_item_type:FormItemType.TEXT_INPUT}),new SearchField({label:$.i18n._("Created By"),in_column:2,field:"created_by",layout_name:"global_user",api_class:TTAPI.APIUser,multiple:!0,basic_search:!0,adv_search:!1,script_name:"EmployeeView",form_item_type:FormItemType.AWESOME_BOX}),new SearchField({label:$.i18n._("Updated By"),in_column:2,field:"updated_by",layout_name:"global_user",api_class:TTAPI.APIUser,multiple:!0,basic_search:!0,adv_search:!1,script_name:"EmployeeView",form_item_type:FormItemType.AWESOME_BOX})]}getGridSetup(){var e=this,t={container_selector:this.sub_view_mode?"#tab_custom_columns":"body",sub_grid_mode:this.sub_view_mode,onSelectRow:function(){e.onGridSelectRow()},onCellSelect:function(){e.onGridSelectRow()},onSelectAll:function(){e.onGridSelectAll()},ondblClickRow:function(t){e.onGridDblClickRow(t)},onRightClickRow:function(t){e.getGridSelectIdArray().indexOf(t)<0&&(e.grid.grid.resetSelection(),e.grid.grid.setSelection(t),e.onGridSelectRow())}};return this.sub_view_mode&&(t.setGridSize=function(){e.sub_view_mode&&e.baseViewSubTabGridResize("#tab_custom_columns")},t.onResizeGrid=function(){e.sub_view_mode&&e.baseViewSubTabGridResize("#tab_custom_columns")}),t}openEditView(){this.edit_view||this.initEditViewUI(this.viewId,this.edit_view_tpl),this.sub_view_mode&&(this.parent_view_controller.need_refresh_display_columns=!0)}initOptions(e){var t=this;this.initDropDownOption("type"),this.initDropDownOption("format"),this.initDropDownOption("dynamic_columns","dynamic_columns",this.parent_view_controller.api,(function(e){var i=e.getResult();t.include_columns_array=Global.buildRecordArray(i),t.exclude_columns_array=Global.buildRecordArray(i)}))}onDeleteDone(e){this.parent_view_controller.need_refresh_display_columns=!0,this.removeDeletedRows()}onDeleteAndNextDone(e){this.parent_view_controller.need_refresh_display_columns=!0}searchDone(){$("window").trigger("resize"),this.sub_view_mode&&TTPromise.resolve("SubCustomColumnView","init"),super.searchDone()}}o.loadSubView=function(e,t,i){Global.loadViewSource("CustomColumn","SubCustomColumnView.html",(function(o){var l=_.template(o);Global.isSet(t)&&t(),Global.isSet(e)&&(e.html(l({})),Global.isSet(i)&&TTPromise.wait("BaseViewController","initialize",(function(){i(sub_custom_column_controller)})))}))}}}]);
//# sourceMappingURL=reports-custom_column-CustomColumnViewController.bundle.js.map?v=69f05bfe443996f09956