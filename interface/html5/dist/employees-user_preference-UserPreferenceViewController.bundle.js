(self.webpackChunktimetrex=self.webpackChunktimetrex||[]).push([["employees-user_preference-UserPreferenceViewController"],{8427:(e,i,t)=>{"use strict";t.r(i),t.d(i,{"UserPreferenceViewController":()=>a});class a extends BaseViewController{constructor(e={}){_.defaults(e,{el:"#user_preference_view_container",date_format_array:null,other_date_format_array:null,js_date_format_array:null,flex_date_format_array:null,jquery_date_format_array:null,time_format_array:null,js_time_format_array:null,flex_time_format_array:null,date_time_format_array:null,time_unit_format_array:null,distance_format_array:null,time_zone_array:null,location_timezone_array:null,area_code_timezone_array:null,timesheet_view_array:null,start_week_day_array:null,schedule_icalendar_type_array:null,language_array:null,user_group_array:null,country_array:null,province_array:null,e_province_array:null,user_api:null,user_group_api:null,company_api:null,api_date:null}),super(e)}init(e){this.edit_view_tpl="UserPreferenceEditView.html",this.permission_id="user_preference",this.viewId="UserPreference",this.script_name="UserPreferenceView",this.table_name_key="user_preference",this.context_menu_name=$.i18n._("Preference"),this.navigation_label=$.i18n._("Employees")+":",this.api=TTAPI.APIUserPreference,this.api_date=TTAPI.APITTDate,this.user_api=TTAPI.APIUser,this.user_group_api=TTAPI.APIUserGroup,this.company_api=TTAPI.APICompany,this.render(),this.buildContextMenu(),this.initData()}getCustomContextMenuModel(){return{exclude:[ContextMenuIconName.add,ContextMenuIconName.copy,ContextMenuIconName.copy_as_new,ContextMenuIconName.save_and_copy,ContextMenuIconName.save_and_new,ContextMenuIconName.delete_icon,ContextMenuIconName.delete_and_next],include:[]}}initOptions(){var e=this;this.initDropDownOption("status","",this.user_api),this.initDropDownOption("country","country",this.company_api),this.initDropDownOption("language"),this.initDropDownOption("date_format"),this.initDropDownOption("time_format"),this.initDropDownOption("time_unit_format"),this.initDropDownOption("distance_format"),this.initDropDownOption("time_zone"),this.initDropDownOption("start_week_day"),this.initDropDownOption("schedule_icalendar_type"),this.initDropDownOption("default_login_screen"),this.user_group_api.getUserGroup("",!1,!1,{onResult:function(i){i=i.getResult(),i=Global.buildTreeRecord(i),e.user_group_array=i,!e.sub_view_mode&&e.basic_search_field_ui_dic.group_id&&(e.basic_search_field_ui_dic.group_id.setSourceData(i),e.adv_search_field_ui_dic.group_id.setSourceData(i))}})}setProvince(e,i){var t=this;e&&"-1"!==e&&"0"!==e?this.company_api.getOptions("province",e,{onResult:function(e){(e=e.getResult())||(e=[]),t.province_array=Global.buildRecordArray(e),t.adv_search_field_ui_dic.province.setSourceData(t.province_array)}}):(t.province_array=[],this.adv_search_field_ui_dic.province.setSourceData([]))}eSetProvince(e,i){var t=this,a=t.edit_view_ui_dic.province;e&&"-1"!==e&&"0"!==e?this.company_api.getOptions("province",e,{onResult:function(e){(e=e.getResult())||(e=[]),t.e_province_array=Global.buildRecordArray(e),i&&t.e_province_array.length>0&&(t.current_edit_record.province=t.e_province_array[0].value,a.setValue(t.current_edit_record.province)),a.setSourceData(t.e_province_array)}}):(t.e_province_array=[],a.setSourceData([]))}onSetSearchFilterFinished(){if(1===this.search_panel.getSelectTabIndex()){var e=this.adv_search_field_ui_dic.country.getValue();this.setProvince(e)}}onBuildAdvUIFinished(){this.adv_search_field_ui_dic.country.change($.proxy((function(){var e=this.adv_search_field_ui_dic.country.getValue();this.setProvince(e),this.adv_search_field_ui_dic.province.setValue(null)}),this))}buildSearchFields(){this.search_fields=[new SearchField({label:$.i18n._("Employee"),in_column:1,field:"user_id",multiple:!0,basic_search:!0,adv_search:!0,layout_name:"global_user",api_class:TTAPI.APIUser,form_item_type:FormItemType.AWESOME_BOX}),new SearchField({label:$.i18n._("Status"),in_column:1,field:"status_id",multiple:!0,basic_search:!0,adv_search:!0,layout_name:"global_option_column",form_item_type:FormItemType.AWESOME_BOX}),new SearchField({label:$.i18n._("First Name"),in_column:1,field:"first_name",basic_search:!0,adv_search:!0,form_item_type:FormItemType.TEXT_INPUT}),new SearchField({label:$.i18n._("Last Name"),in_column:1,field:"last_name",basic_search:!0,adv_search:!0,form_item_type:FormItemType.TEXT_INPUT}),new SearchField({label:$.i18n._("Employee Number"),in_column:1,field:"employee_number",basic_search:!1,adv_search:!0,form_item_type:FormItemType.TEXT_INPUT}),new SearchField({label:$.i18n._("Group"),in_column:2,multiple:!0,field:"group_id",layout_name:"global_tree_column",tree_mode:!0,basic_search:!0,adv_search:!0,form_item_type:FormItemType.AWESOME_BOX}),new SearchField({label:$.i18n._("Default Branch"),in_column:2,field:"default_branch_id",layout_name:"global_branch",api_class:TTAPI.APIBranch,multiple:!0,basic_search:!0,adv_search:!0,form_item_type:FormItemType.AWESOME_BOX}),new SearchField({label:$.i18n._("Default Department"),field:"default_department_id",in_column:2,layout_name:"global_department",api_class:TTAPI.APIDepartment,multiple:!0,basic_search:!0,adv_search:!0,form_item_type:FormItemType.AWESOME_BOX}),new SearchField({label:$.i18n._("Title"),field:"title_id",in_column:2,layout_name:"global_job_title",api_class:TTAPI.APIUserTitle,multiple:!0,basic_search:!1,adv_search:!0,form_item_type:FormItemType.AWESOME_BOX}),new SearchField({label:$.i18n._("Country"),in_column:3,field:"country",multiple:!0,basic_search:!1,adv_search:!0,layout_name:"global_option_column",form_item_type:FormItemType.COMBO_BOX}),new SearchField({label:$.i18n._("Province/State"),in_column:3,field:"province",multiple:!0,basic_search:!1,adv_search:!0,layout_name:"global_option_column",form_item_type:FormItemType.AWESOME_BOX})]}onFormItemChange(e,i){this.setIsChanged(e),this.setMassEditingFieldsWhenFormChange(e);var t=e.getField(),a=e.getValue();this.current_edit_record[t]=a,"schedule_icalendar_type_id"===t&&this.onStatusChange(),i||this.validate()}buildEditViewUI(){super.buildEditViewUI();var e=this,i={"tab_preference":{"label":$.i18n._("Preference")},"tab_schedule_sync":{"label":$.i18n._("Schedule Synchronization"),"init_callback":"initSubScheduleSyncView"},"tab_audit":!0};this.setTabModel(i),this.navigation.AComboBox({id:this.script_name+"_navigation",api_class:TTAPI.APIUser,allow_multiple_selection:!1,layout_name:"global_user",navigation_mode:!0,show_search_inputs:!0}),this.setNavigation();var t,a,l,n=this.edit_view_tab.find("#tab_preference"),d=n.find(".first-column"),_=n.find(".second-column");this.edit_view_tabs[0]=[],this.edit_view_tabs[0].push(d),this.edit_view_tabs[0].push(_),(t=Global.loadWidgetByName(FormItemType.TEXT)).TText({field:"full_name"}),this.addEditFieldToColumn($.i18n._("Employee"),t,d,""),(t=Global.loadWidgetByName(FormItemType.COMBO_BOX)).TComboBox({field:"language",set_empty:!0}),t.setSourceData(e.language_array),this.addEditFieldToColumn($.i18n._("Language"),t,d),(t=Global.loadWidgetByName(FormItemType.COMBO_BOX)).TComboBox({field:"date_format",set_empty:!0}),t.setSourceData(e.date_format_array),this.addEditFieldToColumn($.i18n._("Date Format"),t,d),(t=Global.loadWidgetByName(FormItemType.COMBO_BOX)).TComboBox({field:"time_format",set_empty:!0}),t.setSourceData(e.time_format_array),this.addEditFieldToColumn($.i18n._("Time Format"),t,d),(t=Global.loadWidgetByName(FormItemType.COMBO_BOX)).TComboBox({field:"time_unit_format",set_empty:!0}),t.setSourceData(e.time_unit_format_array),this.addEditFieldToColumn($.i18n._("Time Units"),t,d),(t=Global.loadWidgetByName(FormItemType.COMBO_BOX)).TComboBox({field:"distance_format",set_empty:!0}),t.setSourceData(e.distance_format_array),this.addEditFieldToColumn($.i18n._("Distance Units"),t,d),(t=Global.loadWidgetByName(FormItemType.COMBO_BOX)).TComboBox({field:"time_zone",set_empty:!0}),t.setSourceData(e.time_zone_array),this.addEditFieldToColumn($.i18n._("Time Zone"),t,d),(t=Global.loadWidgetByName(FormItemType.COMBO_BOX)).TComboBox({field:"start_week_day"}),t.setSourceData(e.start_week_day_array),this.addEditFieldToColumn($.i18n._("Calendar Starts On"),t,d),(t=Global.loadWidgetByName(FormItemType.TEXT_INPUT)).TTextInput({field:"items_per_page",width:50}),this.addEditFieldToColumn($.i18n._("Rows per page"),t,d),(t=Global.loadWidgetByName(FormItemType.COMBO_BOX)).TComboBox({field:"default_login_screen"}),t.setSourceData(e.default_login_screen_array),this.addEditFieldToColumn($.i18n._("Default Screen"),t,d),(t=Global.loadWidgetByName(FormItemType.CHECKBOX)).TCheckbox({field:"enable_save_timesheet_state"}),this.addEditFieldToColumn($.i18n._("Save TimeSheet State"),t,d),(t=Global.loadWidgetByName(FormItemType.CHECKBOX)).TCheckbox({field:"enable_auto_context_menu"}),this.addEditFieldToColumn($.i18n._("Automatically Show Context Menu"),t,d,""),(t=Global.loadWidgetByName(FormItemType.SEPARATED_BOX)).SeparatedBox({label:$.i18n._("Email Notifications")}),this.addEditFieldToColumn(null,t,_),(t=Global.loadWidgetByName(FormItemType.CHECKBOX)).TCheckbox({field:"enable_email_notification_exception"}),this.addEditFieldToColumn($.i18n._("Exceptions"),t,_),(t=Global.loadWidgetByName(FormItemType.CHECKBOX)).TCheckbox({field:"enable_email_notification_message"}),this.addEditFieldToColumn($.i18n._("Messages"),t,_),(t=Global.loadWidgetByName(FormItemType.CHECKBOX)).TCheckbox({field:"enable_email_notification_pay_stub"}),this.addEditFieldToColumn($.i18n._("Pay Stubs"),t,_,""),(t=Global.loadWidgetByName(FormItemType.CHECKBOX)).TCheckbox({field:"enable_email_notification_home"}),this.addEditFieldToColumn($.i18n._("Send Notifications to Home Email"),t,_,"");var r=this.edit_view_tab.find("#tab_schedule_sync").find(".first-column");this.edit_view_tabs[1]=[],this.edit_view_tabs[1].push(r),(t=Global.loadWidgetByName(FormItemType.SEPARATED_BOX)).SeparatedBox({label:$.i18n._("Shifts Scheduled to Work")}),this.addEditFieldToColumn(null,t,r,"",null,!0,!1,"shifts_scheduled_to_work"),(t=Global.loadWidgetByName(FormItemType.TEXT_INPUT)).TTextInput({field:"schedule_icalendar_alarm1_working",width:90,need_parser_sec:!0}),a=$("<div class='widget-h-box'></div>"),l=$("<span class='widget-right-label'>( "+$.i18n._("before schedule start time")+" )</span>"),a.append(t),a.append(l),this.addEditFieldToColumn($.i18n._("Alarm 1"),t,r,"",a,!0),(t=Global.loadWidgetByName(FormItemType.TEXT_INPUT)).TTextInput({field:"schedule_icalendar_alarm2_working",width:90,need_parser_sec:!0}),a=$("<div class='widget-h-box'></div>"),l=$("<span class='widget-right-label'>( "+$.i18n._("before schedule start time")+" )</span>"),a.append(t),a.append(l),this.addEditFieldToColumn($.i18n._("Alarm 2"),t,r,"",a,!0),(t=Global.loadWidgetByName(FormItemType.SEPARATED_BOX)).SeparatedBox({label:$.i18n._("Shifts Scheduled Absent")}),this.addEditFieldToColumn(null,t,r,"",null,!0,!1,"shifts_scheduled_absent"),(t=Global.loadWidgetByName(FormItemType.TEXT_INPUT)).TTextInput({field:"schedule_icalendar_alarm1_absence",width:90,need_parser_sec:!0}),a=$("<div class='widget-h-box'></div>"),l=$("<span class='widget-right-label'>( "+$.i18n._("before schedule start time")+" )</span>"),a.append(t),a.append(l),this.addEditFieldToColumn($.i18n._("Alarm 1"),t,r,"",a,!0),(t=Global.loadWidgetByName(FormItemType.TEXT_INPUT)).TTextInput({field:"schedule_icalendar_alarm2_absence",width:90,need_parser_sec:!0}),a=$("<div class='widget-h-box'></div>"),l=$("<span class='widget-right-label'>( "+$.i18n._("before schedule start time")+" )</span>"),a.append(t),a.append(l),this.addEditFieldToColumn($.i18n._("Alarm 2"),t,r,"",a,!0),(t=Global.loadWidgetByName(FormItemType.SEPARATED_BOX)).SeparatedBox({label:$.i18n._("Modified Shifts")}),this.addEditFieldToColumn(null,t,r,"",null,!0,!1,"modified_shifts"),(t=Global.loadWidgetByName(FormItemType.TEXT_INPUT)).TTextInput({field:"schedule_icalendar_alarm1_modified",width:90,need_parser_sec:!0}),a=$("<div class='widget-h-box'></div>"),l=$("<span class='widget-right-label'>( "+$.i18n._("before schedule start time")+" )</span>"),a.append(t),a.append(l),this.addEditFieldToColumn($.i18n._("Alarm 1"),t,r,"",a,!0),(t=Global.loadWidgetByName(FormItemType.TEXT_INPUT)).TTextInput({field:"schedule_icalendar_alarm2_modified",width:90,need_parser_sec:!0}),a=$("<div class='widget-h-box'></div>"),l=$("<span class='widget-right-label'>( "+$.i18n._("before schedule start time")+" )</span>"),a.append(t),a.append(l),this.addEditFieldToColumn($.i18n._("Alarm 2"),t,r,"",a,!0)}onMassEditClick(){var e=this;e.is_add=!1,e.is_viewing=!1,e.is_mass_editing=!0,LocalCacheData.current_doing_context_action="mass_edit",e.openEditView();var i={},t=this.getGridSelectIdArray();t.length;this.mass_edit_record_ids=[],$.each(t,(function(i,t){e.mass_edit_record_ids.push(t)})),i.filter_data={},i.filter_data.id=this.mass_edit_record_ids,this.api["getCommon"+this.api.key_name+"Data"](i,{onResult:function(i){var t=i.getResult();t||(t=[]),e.unique_columns=[],e.linked_columns=[],e.current_edit_record=t,e.initEditView()}})}onStatusChange(){0==this.current_edit_record.schedule_icalendar_type_id?(this.detachElement("schedule_icalendar_alarm1_working"),this.detachElement("schedule_icalendar_alarm2_working"),this.detachElement("schedule_icalendar_alarm1_absence"),this.detachElement("schedule_icalendar_alarm2_absence"),this.detachElement("schedule_icalendar_alarm1_modified"),this.detachElement("schedule_icalendar_alarm2_modified"),this.detachElement("shifts_scheduled_to_work"),this.detachElement("shifts_scheduled_absent"),this.detachElement("modified_shifts")):(this.attachElement("schedule_icalendar_alarm1_working"),this.attachElement("schedule_icalendar_alarm2_working"),this.attachElement("schedule_icalendar_alarm1_absence"),this.attachElement("schedule_icalendar_alarm2_absence"),this.attachElement("schedule_icalendar_alarm1_modified"),this.attachElement("schedule_icalendar_alarm2_modified"),this.attachElement("shifts_scheduled_to_work"),this.attachElement("shifts_scheduled_absent"),this.attachElement("modified_shifts")),this.editFieldResize()}setCurrentEditRecordData(){for(var e in this.current_edit_record){var i=this.edit_view_ui_dic[e];if(Global.isSet(i))switch(e){case"full_name":i.setValue(this.current_edit_record.first_name+" "+this.current_edit_record.last_name);break;default:i.setValue(this.current_edit_record[e])}}this.collectUIDataToCurrentEditRecord(),this.setEditViewDataDone()}setEditViewDataDone(){super.setEditViewDataDone(),this.onStatusChange()}setCalendarURL(e){Global.isSet(e)||(e=this.edit_view_ui_dic.calendar_url),this.is_mass_editing?e.setValue("Not available when mass editing"):this.api.getScheduleIcalendarURL(this.current_edit_record.user_name,this.current_edit_record.schedule_icalendar_type_id,{onResult:function(i){var t=i.getResult();e.setValue(ServiceCaller.root_url+t,!0),e.unbind("click"),e.click((function(){window.open(e.text())}))}})}initSubScheduleSyncView(){Global.getProductEdition()>=15?(this.edit_view_tab.find("#tab_schedule_sync").find(".first-column").css("display","block"),this.edit_view.find(".permission-defined-div").css("display","none"),this.buildContextMenu(!0),this.setEditMenu()):(this.edit_view_tab.find("#tab_schedule_sync").find(".first-column").css("display","none"),this.edit_view.find(".permission-defined-div").css("display","block"),this.edit_view.find(".permission-message").html(Global.getUpgradeMessage()))}onSaveDone(e){this.getSelectedItem().id===LocalCacheData.getLoginUser().id&&Global.updateUserPreference()}onSaveAndContinueDone(e){this.onSaveDone(e)}onSaveAndNextDone(e){this.onSaveDone(e)}validate(){var e=this,i={};if(this.is_mass_editing){for(var t in this.edit_view_ui_dic){var a=this.edit_view_ui_dic[t];Global.isSet(a.isChecked)&&a.isChecked()&&a.getEnabled()&&(i[t]=a.getValue())}this.mass_edit_record_ids.length>0&&(i.id=this.mass_edit_record_ids[0])}else i=this.current_edit_record;this.api["validate"+this.api.key_name](i,{onResult:function(i){e.validateResult(i)}})}}a.loadView=function(){Global.loadViewSource("UserPreference","UserPreferenceView.html",(function(e){Global.contentContainer().html(e)}))}}}]);
//# sourceMappingURL=employees-user_preference-UserPreferenceViewController.bundle.js.map?v=2dcebedf45888e8439bf