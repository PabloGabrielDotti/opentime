(self.webpackChunktimetrex=self.webpackChunktimetrex||[]).push([["payroll-pay_stub_transaction-PayStubTransactionViewController"],{7900:(e,t,i)=>{"use strict";i.r(t),i.d(t,{"PayStubTransactionViewController":()=>a});class a extends BaseViewController{constructor(e={}){_.defaults(e,{el:"#pay_stub_transaction_view_container",status_array:null,currency_array:null,user_status_array:null,user_group_array:null,type_array:null,user_api:null,user_group_api:null,company_api:null,pay_stub_entry_api:null,include_entries:!0}),super(e)}init(){this.edit_view_tpl="PayStubTransactionEditView.html",this.permission_id="pay_stub",this.viewId="PayStubTransaction",this.script_name="PayStubTransactionView",this.table_name_key="pay_stub_transaction",this.context_menu_name=$.i18n._("Pay Stub Transaction"),this.navigation_label=$.i18n._("Pay Stub Transactions")+":",this.api=TTAPI.APIPayStubTransaction,this.currency_api=TTAPI.APICurrency,this.remittance_source_account_api=TTAPI.APIRemittanceSourceAccount,this.remittance_destination_account_api=TTAPI.APIRemittanceDestinationAccount,this.user_api=TTAPI.APIUser,this.pay_stub_entry_api=TTAPI.APIPayStubEntry,this.user_group_api=TTAPI.APIUserGroup,this.company_api=TTAPI.APICompany,this.pay_period_api=TTAPI.APIPayPeriod,this.initPermission(),this.render(),this.buildContextMenu(),this.initData(),this.setSelectRibbonMenuIfNecessary("PayStub")}initPermission(){super.initPermission(),PermissionManager.validate(this.permission_id,"view")||PermissionManager.validate(this.permission_id,"view_child")?this.show_search_tab=!0:this.show_search_tab=!1}initOptions(e){this.initDropDownOption("status","transaction_status_id")}getCustomContextMenuModel(){return{exclude:["default"],include:[ContextMenuIconName.view,ContextMenuIconName.edit,ContextMenuIconName.mass_edit,ContextMenuIconName.save,ContextMenuIconName.save_and_continue,ContextMenuIconName.save_and_next,ContextMenuIconName.cancel,{label:$.i18n._("TimeSheet"),id:ContextMenuIconName.timesheet,group:"navigation",icon:Icons.timesheet},{label:$.i18n._("Schedule"),id:ContextMenuIconName.schedule,group:"navigation",icon:Icons.schedule},{label:$.i18n._("Pay<br>Stubs"),id:ContextMenuIconName.pay_stub,group:"navigation",icon:Icons.pay_stubs},{label:$.i18n._("Pay Stub<br>Amendments"),id:ContextMenuIconName.pay_stub_amendment,group:"navigation",icon:Icons.pay_stub_amendment},{label:$.i18n._("Edit<br>Employee"),id:ContextMenuIconName.edit_employee,group:"navigation",icon:Icons.employee},{label:$.i18n._("Edit Pay<br>Period"),id:ContextMenuIconName.edit_pay_period,group:"navigation",icon:Icons.pay_period}]}}setDefaultMenu(e){if(this.context_menu_array){Global.isSet(e)&&e||this.selectContextMenu(),this.setTotalDisplaySpan();for(var t=this.context_menu_array.length,i=this.getGridSelectIdArray().length,a=0;a<t;a++){var n=$(this.context_menu_array[a]),s=$(n.find(".ribbon-sub-menu-icon")).attr("id");switch(n.removeClass("invisible-image"),n.removeClass("disable-image"),s){case ContextMenuIconName.pay_stub_transaction:case ContextMenuIconName.pay_stub:case ContextMenuIconName.view:this.setDefaultMenuViewIcon(n,i);break;case ContextMenuIconName.edit:this.setDefaultMenuEditIcon(n,i);break;case ContextMenuIconName.mass_edit:this.setDefaultMenuMassEditIcon(n,i);break;case ContextMenuIconName.save:this.setDefaultMenuSaveIcon(n,i);break;case ContextMenuIconName.save_and_next:this.setDefaultMenuSaveAndNextIcon(n,i);break;case ContextMenuIconName.save_and_continue:this.setDefaultMenuSaveAndContinueIcon(n,i);break;case ContextMenuIconName.cancel:this.setDefaultMenuCancelIcon(n,i);break;case ContextMenuIconName.timesheet:this.setDefaultMenuViewIcon(n,i,"punch");break;case ContextMenuIconName.schedule:this.setDefaultMenuViewIcon(n,i,"schedule");break;case ContextMenuIconName.pay_stub_amendment:this.setDefaultMenuViewIcon(n,i,"pay_stub_amendment");break;case ContextMenuIconName.edit_employee:this.setDefaultMenuEditEmployeeIcon(n,i,"user");break;case ContextMenuIconName.edit_pay_period:this.setDefaultMenuEditPayPeriodIcon(n,i)}}this.setContextMenuGroupVisibility()}}setDefaultMenuEditPayPeriodIcon(e,t,i){this.editPermissionValidate("pay_period_schedule")||e.addClass("invisible-image"),1===t?e.removeClass("disable-image"):e.addClass("disable-image")}setDefaultMenuEditEmployeeIcon(e,t){this.editChildPermissionValidate("user")||e.addClass("invisible-image"),1===t?e.removeClass("disable-image"):e.addClass("disable-image")}setDefaultMenuViewIcon(e,t,i){"punch"===i||"schedule"===i||"pay_stub_amendment"===i?super.setDefaultMenuViewIcon(e,t,i):(this.viewPermissionValidate(i)&&!this.edit_only_mode||e.addClass("invisible-image"),t>0&&this.viewOwnerOrChildPermissionValidate()?e.removeClass("disable-image"):e.addClass("disable-image"))}setEditMenu(){this.selectContextMenu();for(var e=this.context_menu_array.length,t=0;t<e;t++){var i=$(this.context_menu_array[t]),a=$(i.find(".ribbon-sub-menu-icon")).attr("id");if(i.removeClass("disable-image"),this.is_mass_editing)switch(a){case ContextMenuIconName.save:this.setEditMenuSaveIcon(i);break;case ContextMenuIconName.cancel:break;default:i.addClass("disable-image")}else switch(a){case ContextMenuIconName.edit:this.setEditMenuEditIcon(i);break;case ContextMenuIconName.mass_edit:this.setEditMenuMassEditIcon(i);break;case ContextMenuIconName.copy:this.setEditMenuCopyIcon(i);break;case ContextMenuIconName.save:this.setEditMenuSaveIcon(i);break;case ContextMenuIconName.save_and_continue:this.setEditMenuSaveAndContinueIcon(i);break;case ContextMenuIconName.save_and_new:this.setEditMenuSaveAndAddIcon(i);break;case ContextMenuIconName.save_and_next:this.setEditMenuSaveAndNextIcon(i);break;case ContextMenuIconName.save_and_copy:this.setEditMenuSaveAndCopyIcon(i);break;case ContextMenuIconName.copy_as_new:this.setEditMenuCopyAndAddIcon(i);break;case ContextMenuIconName.cancel:break;case ContextMenuIconName.import_icon:this.setEditMenuImportIcon(i);break;case ContextMenuIconName.timesheet:this.setEditMenuViewIcon(i,"punch");break;case ContextMenuIconName.schedule:this.setEditMenuViewIcon(i,"schedule");break;case ContextMenuIconName.pay_stub_transaction:this.setEditMenuViewIcon(i,"pay_stub_transaction");break;case ContextMenuIconName.pay_stub_amendment:this.setEditMenuViewIcon(i,"pay_stub_amendment");break;case ContextMenuIconName.edit_employee:this.setEditMenuViewIcon(i,"user");break;case ContextMenuIconName.edit_pay_period:this.setEditMenuViewIcon(i,"pay_period_schedule");break;case ContextMenuIconName.view:this.setEditMenuEditIcon(i)}}this.setContextMenuGroupVisibility()}setEditMenuViewIcon(e,t){this.viewPermissionValidate(t)&&!this.edit_only_mode||e.addClass("invisible-image"),this.current_edit_record&&this.current_edit_record.id||e.addClass("disable-image")}setDefaultMenuGeneratePayStubIcon(e,t,i){t>0?e.removeClass("disable-image"):e.addClass("disable-image")}setCurrentEditRecordData(){for(var e in this.include_entries=!0,this.current_edit_record){var t=this.edit_view_ui_dic[e];Global.isSet(t)&&t.setValue(this.current_edit_record[e])}this.collectUIDataToCurrentEditRecord(),this.setEditViewDataDone()}setEditViewDataDone(){super.setEditViewDataDone(),this.edit_view_ui_dic.user_id.setEnabled(!1),this.edit_view_ui_dic.remittance_source_account_id.setEnabled(!1),this.edit_view_ui_dic.remittance_destination_account_id.setEnabled(!1),this.edit_view_ui_dic.currency_id.setEnabled(!1),this.edit_view_ui_dic.amount.setEnabled(!1),this.edit_view_ui_dic.confirmation_number.setEnabled(!1)}onSaveClick(e){this.is_mass_editing&&(this.include_entries=!1),super.onSaveClick(e)}onSaveAndContinue(e){var t=this;Global.isSet(e)||(e=!1),this.is_changed=!1,this.is_add=!1,LocalCacheData.current_doing_context_action="save_and_continue";var i=this.current_edit_record;i=this.uniformVariable(i),this.api["set"+this.api.key_name](i,!1,e,{onResult:function(e){t.onSaveAndContinueResult(e)}})}onSaveAndContinueResult(e){var t=this;if(e.isValid()){var i=e.getResult();!0===i?t.refresh_id=t.current_edit_record.id:TTUUID.isUUID(i)&&i!=TTUUID.zero_id&&i!=TTUUID.not_exist_id&&(t.refresh_id=i),t.search(!1),t.onSaveAndContinueDone(e)}else t.setErrorTips(e),t.setErrorMenu()}getFilterColumnsFromDisplayColumns(){var e={pay_stub_transaction_date:!0,pay_stub_start_date:!0,pay_stub_end_date:!0,id:!0,status_id:!0,is_owner:!0,user_id:!0,pay_stub_id:!0,pay_period_id:!0,pay_stub_run_id:!0,currency_id:!0,remittance_source_account_type_id:!0},t=[];if(this.grid&&(t=this.grid.getGridParam("colModel")),t)for(var i=0;i<t.length;i++)e[t[i].name]=!0;return e}onFormItemChange(e,t){this.setIsChanged(e),this.setMassEditingFieldsWhenFormChange(e);var i=e.getField(),a=e.getValue();this.current_edit_record[i]=a,t||this.validate()}validate(){var e=this,t={};if(this.is_mass_editing){for(var i in this.edit_view_ui_dic)if(this.edit_view_ui_dic.hasOwnProperty(i)){var a=this.edit_view_ui_dic[i];Global.isSet(a.isChecked)&&a.isChecked()&&a.getEnabled()&&(t[i]=a.getValue())}}else t=this.current_edit_record;t=this.uniformVariable(t),this.api["validate"+this.api.key_name](t,{onResult:function(t){e.validateResult(t)}})}buildEditViewUI(){super.buildEditViewUI();var e={"tab_pay_stub_transaction":{"label":$.i18n._("Pay Stub Transaction")},"tab_audit":!0};this.setTabModel(e),this.navigation.AComboBox({api_class:TTAPI.APIPayStub,id:this.script_name+"_navigation",allow_multiple_selection:!1,layout_name:"global_pay_stub",navigation_mode:!0,show_search_inputs:!0}),this.setNavigation();var t,i=this.edit_view_tab.find("#tab_pay_stub_transaction").find(".first-column");this.edit_view_tabs[0]=[],this.edit_view_tabs[0].push(i),(t=Global.loadWidgetByName(FormItemType.AWESOME_BOX)).AComboBox({api_class:TTAPI.APIUser,allow_multiple_selection:!1,layout_name:"global_user",show_search_inputs:!1,set_empty:!1,field:"user_id"}),this.addEditFieldToColumn($.i18n._("Employee"),t,i,"",null,!0),(t=Global.loadWidgetByName(FormItemType.COMBO_BOX)).TComboBox({field:"status_id",set_empty:!1}),t.setSourceData(this.status_array),this.addEditFieldToColumn($.i18n._("Status"),t,i),(t=Global.loadWidgetByName(FormItemType.AWESOME_BOX)).AComboBox({api_class:TTAPI.APIRemittanceSourceAccount,allow_multiple_selection:!1,layout_name:"global_remittance_source_account",show_search_inputs:!1,set_empty:!1,field:"remittance_source_account_id"}),this.addEditFieldToColumn($.i18n._("Source Account"),t,i,"",null,!0),(t=Global.loadWidgetByName(FormItemType.AWESOME_BOX)).AComboBox({api_class:TTAPI.APIRemittanceDestinationAccount,allow_multiple_selection:!1,layout_name:"global_remittance_destination_account",show_search_inputs:!1,set_empty:!1,field:"remittance_destination_account_id"}),this.addEditFieldToColumn($.i18n._("Destination Account"),t,i,"",null,!0),(t=Global.loadWidgetByName(FormItemType.AWESOME_BOX)).AComboBox({field:"currency_id",set_empty:!1,layout_name:"global_currency",allow_multiple_selection:!1,show_search_inputs:!1,api_class:TTAPI.APICurrency}),this.addEditFieldToColumn($.i18n._("Currency"),t,i),(t=Global.loadWidgetByName(FormItemType.TEXT_INPUT)).TTextInput({field:"amount",width:300}),this.addEditFieldToColumn($.i18n._("Amount"),t,i),(t=Global.loadWidgetByName(FormItemType.DATE_PICKER)).TDatePicker({field:"transaction_date"}),this.addEditFieldToColumn($.i18n._("Transaction Date"),t,i),(t=Global.loadWidgetByName(FormItemType.TEXT_INPUT)).TTextInput({field:"confirmation_number",width:300}),this.addEditFieldToColumn($.i18n._("Confirmation #"),t,i),(t=Global.loadWidgetByName(FormItemType.TEXT_AREA)).TTextArea({field:"note",width:300}),this.addEditFieldToColumn($.i18n._("Note"),t,i)}buildSearchFields(){super.buildSearchFields(),this.search_fields=[new SearchField({label:$.i18n._("Status"),in_column:1,field:"transaction_status_id",multiple:!0,basic_search:!0,adv_search:!1,layout_name:"global_option_column",form_item_type:FormItemType.AWESOME_BOX}),new SearchField({label:$.i18n._("Source Account"),in_column:2,field:"remittance_source_account_id",layout_name:"global_remittance_source_account",api_class:TTAPI.APIRemittanceSourceAccount,multiple:!0,basic_search:!0,adv_search:!1,form_item_type:FormItemType.AWESOME_BOX}),new SearchField({label:$.i18n._("Pay Period"),in_column:1,field:"pay_period_id",layout_name:"global_Pay_period",api_class:TTAPI.APIPayPeriod,multiple:!0,basic_search:!0,adv_search:!1,form_item_type:FormItemType.AWESOME_BOX}),new SearchField({label:$.i18n._("Employee"),in_column:1,field:"user_id",api_class:TTAPI.APIUser,multiple:!0,basic_search:!0,adv_search:!1,layout_name:"global_user",form_item_type:FormItemType.AWESOME_BOX}),new SearchField({label:$.i18n._("Currency"),in_column:2,field:"currency_id",api_class:TTAPI.APICurrency,multiple:!0,basic_search:!0,adv_search:!1,layout_name:"global_currency",form_item_type:FormItemType.AWESOME_BOX}),new SearchField({label:$.i18n._("Transaction Date"),in_column:2,field:"transaction_date",multiple:!0,basic_search:!0,adv_search:!1,layout_name:"global_option_column",form_item_type:FormItemType.DATE_PICKER})]}onCustomContextClick(e){switch(e){case ContextMenuIconName.timesheet:case ContextMenuIconName.schedule:case ContextMenuIconName.pay_stub_amendment:case ContextMenuIconName.edit_employee:case ContextMenuIconName.generate_pay_stub:case ContextMenuIconName.pay_stub_transaction:case ContextMenuIconName.edit_pay_period:case ContextMenuIconName.pay_stub:this.onNavigationClick(e)}}onViewClick(e,t){this.onNavigationClick(ContextMenuIconName.view)}onNavigationClick(e){var t,i=this,a={},n=[],s=[],o=[],r=[];i.edit_view&&i.current_edit_record.id?(n.push(i.current_edit_record.id),s.push(i.current_edit_record.user_id),o.push(i.current_edit_record.pay_period_id),r.push(i.current_edit_record.pay_stub_id),t=i.current_edit_record.pay_stub_start_date):(c=this.getGridSelectIdArray(),$.each(c,(function(e,a){var d=i.getRecordFromGridById(a);n.push(d.id),s.push(d.user_id),o.push(d.pay_period_id),r.push(d.pay_stub_id),t=d.pay_stub_start_date})));switch(e){case ContextMenuIconName.pay_stub:a.filter_data={},a.filter_data.id={value:r},a.select_date=t,Global.addViewTab(this.viewId,$.i18n._("Pay Stub Transactions"),window.location.href),IndexViewController.goToView("PayStub",a);break;case ContextMenuIconName.edit_employee:s.length>0&&IndexViewController.openEditView(this,"Employee",s[0]);break;case ContextMenuIconName.edit_pay_period:o.length>0&&IndexViewController.openEditView(this,"PayPeriods",o[0]);break;case ContextMenuIconName.timesheet:s.length>0&&(a.user_id=s[0],a.base_date=t,Global.addViewTab(i.viewId,$.i18n._("Pay Stub Transactions"),window.location.href),IndexViewController.goToView("TimeSheet",a));break;case ContextMenuIconName.schedule:a.filter_data={};var d={value:s};a.filter_data.include_user_ids=d,a.select_date=t,Global.addViewTab(this.viewId,$.i18n._("Pay Stub Transactions"),window.location.href),IndexViewController.goToView("Schedule",a);break;case ContextMenuIconName.pay_stub_amendment:a.filter_data={},a.filter_data.user_id=s[0],a.filter_data.pay_period_id=o[0],Global.addViewTab(this.viewId,$.i18n._("Pay Stub Transactions"),window.location.href),IndexViewController.goToView("PayStubAmendment",a);break;case ContextMenuIconName.view:this.setCurrentEditViewState("view"),this.openEditView(),a.filter_data={};var c,_=(c=this.getGridSelectIdArray())[0];a.filter_data.id=[_],this.api["get"+this.api.key_name](a,{onResult:function(e){var t=e.getResult();if(t||(t=[]),!(t=t[0]))return TAlertManager.showAlert($.i18n._("Record does not exist")),void i.onCancelClick();i.sub_view_mode&&i.parent_key&&(t[i.parent_key]=i.parent_value),i.current_edit_record=t,i.initEditView()}});break;case ContextMenuIconName.pay_stub_transaction:IndexViewController.openEditView(this,"PayStubTransaction",s[0])}}}a.loadView=function(){Global.loadViewSource("PayStubTransaction","PayStubTransactionView.html",(function(e){var t=_.template(e,{});Global.contentContainer().html(t)}))}}}]);
//# sourceMappingURL=payroll-pay_stub_transaction-PayStubTransactionViewController.bundle.js.map?v=8a6198dd2183b38b1609