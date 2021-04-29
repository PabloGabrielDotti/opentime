/**
 * For an example of implementation see: interface/html5/views/payroll/remittance_wizard/PayrollRemittanceAgencyEventWizard.js
 *
 * CRITICAL: ALL WIZARDS MUST HAVE A HOME STEP SO THAT THEY HAVE SOMEWHERE TO START.
 **/

Wizard = Backbone.View.extend( {

	current_step: false,
	wizard_id: 'generic_wizard',
	wizard_name: $.i18n._( 'Wizard' ),
	step_history: {},
	step_objects: {},
	el: $( '.wizard' ),
	previous_wizard: null,
	_step_map: null,
	do_not_initialize_onload: false, //when this flag is set, initialize will not be run automagically.
	external_data: null,

	initialize: function( options ) {
		if ( options && options.external_data ) {
			this.setExternalData( options.external_data );
		}

		if ( !this.do_not_initialize_onload ) {
			this.step_history = {};
			this.step_objects = {};
			var $this = this;

			this.initStepObject( ( this.getCurrentStepName() ? this.getCurrentStepName() : 'home' ), function( obj ) {
				$this.init();
				$this.render();
				$this.enableButtons();

				if ( LocalCacheData.current_open_wizard_controller ) {
					$this.previous_wizard = LocalCacheData.current_open_wizard_controller;
				} else {
					$this.previous_wizard = false;
				}
				LocalCacheData.current_open_wizard_controller = $this;
			} );
		}
	},

	//always override
	init: function() {
		return;
	},

	setExternalData: function( data ) {
		this.external_data = data;
	},

	getExternalData: function() {
		return this.external_data;
	},

	events: {
		'click .close-btn': 'onCloseClick',
		'click .close-icon': 'onCloseClick',
		'click .wizard-overlay.onclick-close': 'onCloseClick',
		'click .forward-btn': 'onNextClick',
		'click .back-btn': 'onPrevClick',
		'click .done-btn': 'onDone'
	},

	onNextClick: function( e ) {
		if ( this.button_click_procesing == true ) {
			return false;
		}

		if ( $( e.target ).hasClass( 'disable-image' ) == false ) {
			this.disableButtons();

			var name = this.getStepObject().getNextStepName();
			var $this = this;
			this.initStepObject( name, function( step_obj ) {
				step_obj.setPreviousStepName( $this.getCurrentStepName() );
				$this.setCurrentStepName( name );
				//$this.enableButtons(); //This should be done at the end of each _render() function to avoid race conditions and hammer clicking right arrow causing JS exceptions.
			} );
		}
	},

	onPrevClick: function( e ) {
		if ( this.button_click_procesing == true ) {
			return false;
		}

		if ( e === true || $( e.target ).hasClass( 'disable-image' ) == false ) {
			this.disableButtons();

			var name = this.getStepObject().getPreviousStepName();
			var $this = this;

			//Needs to be initialized in the event that we came back from the min_tab.
			this.initStepObject( name, function( step_obj ) {
				//step_obj.setPreviousStepName($this.getCurrentStepName());
				$this.setCurrentStepName( name );
				//$this.enableButtons(); //This should be done at the end of each _render() function to avoid race conditions and hammer clicking right arrow causing JS exceptions.
			} );
		}
	},

	onCloseClick: function( e ) {
		if ( !e || $( e.target ).hasClass( 'disable-image' ) == false ) {
			var $this = this;

			if ( this.getStepObject().getPreviousStepName() !== false && this.getStepObject().getNextStepName() !== false ) { //Not on first step, and not last step
				TAlertManager.showConfirmAlert( $.i18n._( 'Are you sure you wish to cancel without completing all steps for this event?' ), null, function( flag ) {
					if ( flag === true ) {
						$this.cleanUp();
					}
				} );
			} else if ( this.getStepObject().getNextStepName() == false ) { //On last step.
				if ( this.getStepObject().isRequiredButtonsClicked() == false ) { //Required actions are not performed.
					TAlertManager.showConfirmAlert( $.i18n._( '<strong>WARNING</strong>: You are about to cancel without performing all required actions on this step! <br><br><strong>This may result in payments or reports not being submitted to this agency.</strong> <br><br>Are you sure you wish to continue?<br><br>' ), null, function( flag ) {
						if ( flag === true ) {
							$this.cleanUp();
						}
					} );
				} else { //Required actions ARE performed.
					TAlertManager.showConfirmAlert( $.i18n._( 'Are you sure you wish to cancel without marking this event as completed?' ), null, function( flag ) {
						if ( flag === true ) {
							$this.cleanUp();
						}
					} );
				}
			} else {
				$this.cleanUp();
			}
		}
	},

	onDone: function( e ) {
		if ( !e || $( e.target ).hasClass( 'disable-image' ) == false ) {
			var $this = this;

			if ( this.getStepObject().getNextStepName() == false && this.getStepObject().isRequiredButtonsClicked() == false ) { //On last step.
				TAlertManager.showConfirmAlert( $.i18n._( '<strong>WARNING</strong>: You are about to mark this event as completed without performing all required actions on this step! <br><br><strong>This may result in payments or reports not being submitted to this agency.</strong> <br><br>Are you sure you wish to continue?<br><br>' ), null, function( flag ) {
					if ( flag === true ) {
						$this.onDoneComplete();
					}
				} );
			} else {
				$this.onDoneComplete();
			}
		}
	},

	//Override this function to perform other actions when the user clicks the green checkmark to complete the wizard.
	onDoneComplete: function( e ) {
		$this.cleanUp();
	},

	addStepObject: function( name, obj ) {
		//always override.
		this.step_objects[name] = obj;
		return this.step_objects[name]; //returned for chaining.
	},

	getStepObject: function( name ) {
		if ( typeof name == 'undefined' ) {
			name = this.getCurrentStepName();
		}

		if ( typeof this.step_objects[name] == 'object' ) {
			return this.step_objects[name];
		}
		return this.step_objects['home'];
	},

	getCurrentStepName: function() {
		return this.current_step;
	},

	setCurrentStepName: function( val ) {
		this.current_step = val;
	},

	//Stub to stop backbone from complaining that it's missing, Wizard really doesn't render itself as such, it just displays its template.
	render: function() {
	},

	/*
	 * Clean up the markup.
	 */
	cleanUp: function() {
		$( this.el ).remove();
		for ( var n in this.step_objects ) {
			if ( this.step_objects[n] ) {
				this.step_objects[n].reload = true;
			}
		}

		LocalCacheData.current_open_wizard_controller = null;

		$().TFeedback( {
			source: this.wizard_id
		} );
	},

	/**
	 * setup a step object
	 *
	 * @param name
	 * @param callback
	 */
	initStepObject: function( name, callback ) {
		if ( this._step_map.hasOwnProperty( name ) ) {
			if ( this.step_objects[name] == null || typeof this.step_objects[name] != 'object' ) {
				var $this = this;
				Global.loadScript( this._step_map[name].script_path, function() {
					$this.setCurrentStepName( name );
					$( $this.el ).find( '.content' ).html( '' );

					var obj = new window[$this._step_map[name].object_name]( $this );
					obj.reload = false;
					$this.addStepObject( name, obj );

					if ( typeof callback == 'function' ) {
						callback( obj );
					}
				} );
				return;
			} else {
				//reopening a step
				this.setCurrentStepName( name );
				if ( typeof callback == 'function' ) {
					var obj = this.step_objects[name];

					$( this.el ).find( '.content' ).html( '' );
					obj = new window[this._step_map[name].object_name]( this );

					//reopening a step that has been opened in a previously closed wizard.
					if ( this.step_objects[name].reload == true ) {
						obj.clicked_buttons = {};
						obj.reload = false;
					}

					this.addStepObject( name, obj );

					callback( obj );
				}
				return;
			}
		}
	},

	disableButtons: function() {
		this.button_click_procesing = true;

		//Changing the button images causes flashing and isn't required for just disabling the buttons while the view loads.
		// $( this.el ).find( '.forward-btn' ).addClass( 'disable-image' );
		// $( this.el ).find( '.back-btn' ).addClass( 'disable-image' );
	},

	/**
	 * Enables the next/prev buttons
	 * the step object for the first step should return false instead fo a previous step name to disable the previous button
	 * the step object for the last step should return false instead of a next step name to disable the next button and enable the done button.
	 */
	enableButtons: function() {
		var step = this.getStepObject();

		if ( typeof step.getNextStepName() != 'string' ) {
			$( this.el ).find( '.forward-btn' ).addClass( 'disable-image' );
		} else {
			$( this.el ).find( '.forward-btn' ).removeClass( 'disable-image' );
		}

		if ( typeof step.getPreviousStepName() != 'string' ) {
			$( this.el ).find( '.back-btn' ).addClass( 'disable-image' );
		} else {
			$( this.el ).find( '.back-btn' ).removeClass( 'disable-image' );
		}

		if ( typeof step.getPreviousStepName() == 'string' && typeof step.getNextStepName() != 'string' ) {
			$( this.el ).find( '.done-btn' ).removeClass( 'disable-image' );
		} else {
			$( this.el ).find( '.done-btn' ).addClass( 'disable-image' );
		}

		this._enableButtons();

		this.button_click_procesing = false;
	},

	//override me.
	_enableButtons: function() {
	},

	/**
	 * minimize the wiazrd to a min_tab
	 */
	minimize: function() {
		LocalCacheData.PayrollRemittanceAgencyEventWizard = this;
		Global.addViewTab( this.wizard_id, this.wizard_name, window.location.href );
		this.delegateEvents();
		$( this.el ).remove();
	},

	reload: function() {
		for ( var i in this.step_objects ) {
			this.step_objects[i].reload = true;
		}
	},

	disableForCommunity: function( callback ) {
		if ( Global.getProductEdition() <= 10 ) {
			TAlertManager.showAlert( Global.getUpgradeMessage(), $.i18n._( 'Denied' ) );
		} else {
			if ( typeof callback == 'function' ) {
				callback();
			}
		}

	}

} );