(self.webpackChunktimetrex=self.webpackChunktimetrex||[]).push([["wizard-login_user-LoginUserWizardController"],{2042:(e,t,r)=>{"use strict";r.r(t),r.d(t,{"LoginUserWizardController":()=>i});class i extends BaseWizardController{constructor(e={}){_.defaults(e,{el:".wizard"}),super(e)}init(e){this.title=$.i18n._("Login Override"),this.steps=1,this.current_step=1,this.render()}render(){this.wizard_id="LoginUser",super.render(),i.type=this.default_data,this.initCurrentStep()}buildCurrentStepUI(){var e=this;switch(this.content_div.empty(),this.stepsWidgetDic[this.current_step]={},this.current_step){case 1:var t=this.getLabel();t.text($.i18n._("Pick one employee then click the green checkmark icon to login")),this.content_div.append(t),Global.loadViewSource("LoginUser","LoginUserView.css"),Global.loadViewSource("LoginUser","LoginUserViewController.js",(function(){Global.loadViewSource("LoginUser","LoginUserView.html",(function(t){var r=_.template(t);e.content_div.append(r({}))}))}))}}buildCurrentStepData(){}onCloseClick(){$(this.el).remove(),LocalCacheData.current_open_wizard_controller=null,LocalCacheData.extra_filter_for_next_open_view=null}onDoneClick(){1==login_user_view_controller.getGridSelectIdArray().length?(this.onCloseClick(),this.call_back&&this.call_back(login_user_view_controller.getGridSelectIdArray()[0])):TAlertManager.showAlert($.i18n._("Choose one Employee"))}}i.type=""}}]);
//# sourceMappingURL=wizard-login_user-LoginUserWizardController.bundle.js.map?v=9a20e11d709eb7e54d9e