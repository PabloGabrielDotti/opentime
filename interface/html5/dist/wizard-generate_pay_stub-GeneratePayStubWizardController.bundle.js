(self.webpackChunktimetrex=self.webpackChunktimetrex||[]).push([["wizard-generate_pay_stub-GeneratePayStubWizardController"],{7534:(t,e,i)=>{"use strict";i.r(e),i.d(e,{"GeneratePayStubWizardController":()=>a});class a extends BaseWizardController{constructor(t={}){_.defaults(t,{el:".wizard-bg"}),super(t)}init(t){this.title=$.i18n._("Generate Pay Stub Wizard"),this.steps=3,this.current_step=1,this.render()}render(){super.render(),this.initCurrentStep()}buildCurrentStepUI(){var t=this;switch(this.content_div.empty(),this.stepsWidgetDic[this.current_step]={},this.current_step){case 1:var e=this.getLabel();e.text($.i18n._("Generate pay stubs for individual employees when manual modifications or a termination occurs. Use Payroll -> Process Payroll if you wish to generate pay stubs for all employees instead.")),this.content_div.append(e);break;case 2:(e=this.getLabel()).text($.i18n._("Select one or more pay periods and choose a payroll run type")),this.content_div.append(e);var i=$(Global.loadWidget("global/widgets/wizard_form_item/WizardFormItem.html")),a=i.find(".form-item-label"),r=i.find(".form-item-input-div"),s=this.getAComboBox(TTAPI.APIPayPeriod,!0,"global_Pay_period","pay_period_id");s.unbind("formItemChange").bind("formItemChange",(function(e,i){t.saveCurrentStep(),t.onPayPeriodChange(!0),t.setPayRun(i.getValue())})),a.text($.i18n._("Pay Period")+": "),r.append(s),this.content_div.append(i),this.stepsWidgetDic[this.current_step][s.getField()]=s,a=(i=$(Global.loadWidget("global/widgets/wizard_form_item/WizardFormItem.html"))).find(".form-item-label"),r=i.find(".form-item-input-div");var d=this.getComboBox("type_id",!1);a.text($.i18n._("Payroll Run Type")+": "),r.append(d),this.content_div.append(i),this.stepsWidgetDic[this.current_step][d.getField()]=d,d.unbind("formItemChange").bind("formItemChange",(function(e,i){t.saveCurrentStep(),t.onPayrollTypeChange(!0)})),a=(i=$(Global.loadWidget("global/widgets/wizard_form_item/WizardFormItem.html"))).find(".form-item-label"),r=i.find(".form-item-input-div");var o=this.getDatePicker("carry_forward_to_date");a.text($.i18n._("Carry Forward Adjustments to")+": "),r.append(o),this.content_div.append(i),this.stepsWidgetDic[this.current_step][o.getField()]=o,this.stepsWidgetDic[this.current_step][o.getField()+"_row"]=i,i.hide(),a=(i=$(Global.loadWidget("global/widgets/wizard_form_item/WizardFormItem.html"))).find(".form-item-label"),r=i.find(".form-item-input-div"),o=this.getDatePicker("transaction_date"),a.text($.i18n._("Transaction Date")+": "),r.append(o),this.content_div.append(i),this.stepsWidgetDic[this.current_step][o.getField()]=o,this.stepsWidgetDic[this.current_step][o.getField()+"_row"]=i,i.hide(),a=(i=$(Global.loadWidget("global/widgets/wizard_form_item/WizardFormItem.html"))).find(".form-item-label"),r=i.find(".form-item-input-div");var n=Global.loadWidgetByName(FormItemType.TEXT_INPUT);n=n.TTextInput({field:"run_id",width:20}),a.text($.i18n._("Payroll Run")+": "),r.append(n),this.content_div.append(i),this.stepsWidgetDic[this.current_step][n.getField()]=n,this.stepsWidgetDic[this.current_step][n.getField()+"_row"]=i,i.hide();break;case 3:(e=this.getLabel()).text($.i18n._("Select one or more employees")),s=this.getAComboBox(TTAPI.APIUser,!0,"global_user","user_id",!0);var _=$("<div class='wizard-acombobox-div'></div>");_.append(s),this.stepsWidgetDic[this.current_step]={},this.stepsWidgetDic[this.current_step][s.getField()]=s,this.content_div.append(e),this.content_div.append(_)}}setPayRun(t){var e=TTAPI.APIPayStub,i=this.stepsWidgetDic[2];e.getCurrentPayRun(t,{onResult:function(t){var e=t.getResult();i.run_id.setValue(e)}})}buildCurrentStepData(){var t=this.stepsDataDic[this.current_step],e=this.stepsWidgetDic[this.current_step];if(t&&e)switch(this.current_step){case 2:if(t.pay_period_id){var i=t.pay_period_id;i=Global.array_unique(i),t&&e.pay_period_id.setValue(i),this.setPayRun(i)}this.onPayPeriodChange();break;case 3:if(t.user_id){var a=t.user_id;a=Global.array_unique(a),e.user_id.setValue(a)}}}onDoneClick(){var t=this;super.onDoneClick(),this.saveCurrentStep(),this.stepsDataDic&&this.stepsDataDic[2]&&this.stepsDataDic[3]||(TAlertManager.showAlert($.i18n._("Wizard data is not correct on step 2 or step 3, please open wizard and try again")),t.onCloseClick());var e=TTAPI.APIPayStub,i=this.stepsDataDic[2].pay_period_id,a=this.stepsDataDic[3].user_id,r=this.stepsDataDic[2].type_id,s=this.stepsDataDic[2].run_id,d=null,o=!1;5==r?(d=this.stepsDataDic[2].carry_forward_to_date,o=!0):d=this.stepsDataDic[2].transaction_date,e.setIsIdempotent(!0),e.generatePayStubs(i,a,o,s,r,d,{onResult:function(e){if(e.isValid()){var i=e.getAttributeInAPIDetails("user_generic_status_batch_id");i&&TTUUID.isUUID(i)&&i!=TTUUID.zero_id&&i!=TTUUID.not_exist_id&&UserGenericStatusWindowController.open(i,a,(function(){if(o){var t={filter_data:{}},e={value:a};t.filter_data.user_id=e,t.filter_data.status_id=50,IndexViewController.goToView("PayStubAmendment",t)}}))}t.onCloseClick(),t.call_back&&t.call_back()}}),t.onCloseClick()}onPayrollTypeChange(t){var e=this.stepsWidgetDic[this.current_step],i=this.stepsDataDic[this.current_step];if(e&&e.run_id_row&&e.carry_forward_to_date_row&&e.transaction_date_row){e.run_id_row.hide(),e.carry_forward_to_date_row.hide(),e.transaction_date_row.hide();var a=this.getNewestPayPeriod(this.selected_pay_periods);20==i.type_id&&e.run_id_row.show(),5!=i.type_id&&(e.transaction_date_row.show(),t?e.transaction_date.setValue(a?Global.strToDateTime(a.transaction_date).format():null):i.transaction_date?e.transaction_date.setValue(Global.strToDateTime(i.transaction_date).format()):e.transaction_date.setValue(a?Global.strToDateTime(a.transaction_date).format():null)),5==i.type_id&&(e.carry_forward_to_date_row.show(),t?e.carry_forward_to_date.setValue((new Date).format()):e.carry_forward_to_date.setValue(i.carry_forward_to_date||(new Date).format()))}}buildPayPeriodStatusIdArray(t){for(var e=[],i=0;i<t.length;i++){var a=t[i];e.push(a.status_id)}return e}getNewestPayPeriod(t){for(var e,i=0;i<t.length;i++){var a=t[i],r=Global.strToDateTime(a.transaction_date).getTime();(!e||r>e)&&(e=a)}return e}onPayPeriodChange(t){var e=this,i=this.stepsWidgetDic[this.current_step],a=this.stepsDataDic[this.current_step],r=TTAPI.APIPayStub,s=TTAPI.APIPayPeriod,d={filter_data:{}};d.filter_data.id=a.pay_period_id,a.pay_period_id&&0!==a.pay_period_id.length||(d.filter_data.id=[0]),s.getPayPeriod(d,{onResult:function(s){e.selected_pay_periods=s.getResult();var d=e.buildPayPeriodStatusIdArray(e.selected_pay_periods);r.getOptions("payroll_run_type",d,{onResult:function(r){var s=r.getResult(),d=Global.buildRecordArray(s);i.type_id.setSourceData(d),t?(a.type_id=d&&d[0].value,i.type_id.setValue(a.type_id)):(a.type_id||(a.type_id=d&&d[0].value),i.type_id.setValue(a.type_id)),e.onPayrollTypeChange(t)}})}})}saveCurrentStep(){this.stepsDataDic[this.current_step]={};var t=this.stepsDataDic[this.current_step],e=this.stepsWidgetDic[this.current_step];switch(this.current_step){case 1:break;case 2:t.pay_period_id=e.pay_period_id.getValue(),t.transaction_date=e.transaction_date.getValue(),t.carry_forward_to_date=e.carry_forward_to_date.getValue(),t.type_id=e.type_id.getValue(),t.run_id=e.run_id.getValue();break;case 3:t.user_id=e.user_id.getValue()}}setDefaultDataToSteps(){if(!this.default_data)return null;this.stepsDataDic[2]={},this.stepsDataDic[3]={},this.getDefaultData("user_id")&&(this.stepsDataDic[3].user_id=this.getDefaultData("user_id")),this.getDefaultData("pay_period_id")&&(this.stepsDataDic[2].pay_period_id=this.getDefaultData("pay_period_id"))}}}}]);
//# sourceMappingURL=wizard-generate_pay_stub-GeneratePayStubWizardController.bundle.js.map?v=332e3ad1da0bc8e8832f