(self.webpackChunktimetrex=self.webpackChunktimetrex||[]).push([["portal-sign_in-PortalForgotPasswordController"],{76:(e,t,i)=>{"use strict";i.r(t),i.d(t,{"PortalForgotPasswordController":()=>r});var s=i(6739),o=i(7526);class r extends s.TTBackboneView{constructor(e={}){_.defaults(e,{events:{"click .send-reset-email":"sendResetEmail"}}),super(e)}initialize(e){super.initialize(e),this.api=o.y.APIRecruitmentAuthentication;var t=Global.loadWidget("views/portal/sign_in/PortalForgotPassword.html");this.setElement(_.template(t)()),this.emailInput=this.$("#email"),this.render()}render(){var e=this;this.emailInput.focus(),this.emailInput.unbind("keydown").bind("keydown",(function(t){13===t.keyCode&&e.sendResetEmail()})),$("body").append(this.$el),this.$el.modal({"show":!0,"backdrop":"static"}),this.$el.on("hidden.bs.modal",(function(){e.$el.remove()}))}sendResetEmail(){var e=this,t=this.emailInput.val();this.api.resetPassword(t,{onResult:function(t){t.isValid()?t.getResult().hasOwnProperty("email_sent")&&(e.$el.modal("hide"),IndexViewController.instance.router.showTipModal($.i18n._("An email has been sent to you with instructions on how to change your password."))):e.showErrorAlert(t)}})}showErrorAlert(e){var t=e.getDetails();t||(t=e.getDescription());var i="";Global.isArray(t)||"object"==typeof t?$.each(t,(function(e,t){t.hasOwnProperty("error")&&(t=t.error);var s=0;for(var o in t)i+=t[o],s>0&&(i+="<br>"),s++})):i=t,this.emailInput.css("border","1px solid red"),this.emailInput.tooltip({title:i}),this.emailInput.tooltip("show")}}}}]);
//# sourceMappingURL=portal-sign_in-PortalForgotPasswordController.bundle.js.map?v=321e65520b1e63fe1859