SchedulePolicyViewController = BaseViewController.extend( {
	el: '#schedule_policy_view_container',

	over_time_policy_api: null,
	initialize: function() {
		this._super( 'initialize' );
		this.edit_view_tpl = 'SchedulePolicyEditView.html';
		this.permission_id = 'schedule_policy';
		this.viewId = 'SchedulePolicy';
		this.script_name = 'SchedulePolicyView';
		this.table_name_key = 'schedule_policy';
		this.context_menu_name = $.i18n._( 'Schedule Policies' );
		this.navigation_label = $.i18n._( 'Schedule Policy' ) + ':';
		this.api = new (APIFactory.getAPIClass( 'APISchedulePolicy' ))();
		this.over_time_policy_api = new (APIFactory.getAPIClass( 'APIOvertimePolicy' ))();
		this.render();
		this.buildContextMenu();

		this.initData();
		this.setSelectRibbonMenuIfNecessary( 'SchedulePolicy' );

	},

	initOptions: function() {
		var $this = this;

		var filter = {};
		filter.filter_data = {};
		filter.filter_data.type_id = [200, 10];

		this.over_time_policy_api.getOverTimePolicy( filter, {onResult: function( res ) {
			res = res.getResult();
			$this.over_time_policy_array = res;

			if ( !$this.sub_view_mode ) {
				$this.basic_search_field_ui_dic['overtime_policy_id'].setSourceData( res );
			}

		}} );

	},

	buildEditViewUI: function() {

		this._super( 'buildEditViewUI' );

		var $this = this;

		var tab_0_label = this.edit_view.find( 'a[ref=tab0]' );
		var tab_1_label = this.edit_view.find( 'a[ref=tab1]' );
		tab_0_label.text( $.i18n._( 'Schedule Policy' ) );
		tab_1_label.text( $.i18n._( 'Audit' ) );

		this.navigation.AComboBox( {
			api_class: (APIFactory.getAPIClass( 'APISchedulePolicy' )),
			id: this.script_name + '_navigation',
			allow_multiple_selection: false,
			layout_name: ALayoutIDs.SCHEDULE_POLICY,
			navigation_mode: true,
			show_search_inputs: true
		} );

		this.setNavigation();

		//Tab 0 start

		var tab0 = this.edit_view_tab.find( '#tab0' );

		var tab0_column1 = tab0.find( '.first-column' );

		this.edit_view_tabs[0] = [];

		this.edit_view_tabs[0].push( tab0_column1 );

		//Name
		var form_item_input = Global.loadWidgetByName( FormItemType.TEXT_INPUT );

		form_item_input.TTextInput( {field: 'name', width: 149} );
		this.addEditFieldToColumn( $.i18n._( 'Name' ), form_item_input, tab0_column1, '' );

		//Meal Policy
		form_item_input = Global.loadWidgetByName( FormItemType.AWESOME_BOX );
		form_item_input.AComboBox( {
			api_class: (APIFactory.getAPIClass( 'APIMealPolicy' )),
			allow_multiple_selection: false,
			layout_name: ALayoutIDs.MEAL_POLICY,
			show_search_inputs: true,
			set_any: true,
			field: 'meal_policy_id',
			custom_first_label: $.i18n._( '-- No Meal --' ),
			addition_source_function: this.onMealOrBreakSourceCreate,
			added_items: [
				{value: 0, label: $.i18n._( '-- Defined By Policy Group --' )}
			]
		} );
		this.addEditFieldToColumn( $.i18n._( 'Meal Policy' ), form_item_input, tab0_column1 );

		//Break Policies
		form_item_input = Global.loadWidgetByName( FormItemType.AWESOME_BOX );
		form_item_input.AComboBox( {
			api_class: (APIFactory.getAPIClass( 'APIBreakPolicy' )),
			allow_multiple_selection: true,
			layout_name: ALayoutIDs.BREAK_POLICY,
			show_search_inputs: true,
			set_any: true,
			field: 'break_policy_id',
			custom_first_label: '-- ' + $.i18n._( 'No Break' ) + ' --',
			addition_source_function: this.onMealOrBreakSourceCreate,
			added_items: [
				{value: 0, label: '-- ' + $.i18n._( 'Defined By Policy Group' ) + ' --'}
			]
		} );
		this.addEditFieldToColumn( $.i18n._( 'Break Policies' ), form_item_input, tab0_column1 );

		//Undertime Absence Policy
		form_item_input = Global.loadWidgetByName( FormItemType.AWESOME_BOX );
		form_item_input.AComboBox( {
			api_class: (APIFactory.getAPIClass( 'APIAbsencePolicy' )),
			allow_multiple_selection: false,
			layout_name: ALayoutIDs.ABSENCES_POLICY,
			show_search_inputs: true,
			set_empty: true,
			field: 'absence_policy_id'
		} );
		this.addEditFieldToColumn( $.i18n._( 'Undertime Absence Policy' ), form_item_input, tab0_column1 );

		//Overtime Policy

		var default_args = {};
		default_args.filter_data = {};
		default_args.filter_data.type_id = [200, 10];

		form_item_input = Global.loadWidgetByName( FormItemType.AWESOME_BOX );
		form_item_input.AComboBox( {
			api_class: (APIFactory.getAPIClass( 'APIOvertimePolicy' )),
			allow_multiple_selection: false,
			layout_name: ALayoutIDs.OVER_TIME_POLICY,
			show_search_inputs: true,
			set_empty: true,
			field: 'over_time_policy_id'
		} );

		form_item_input.setDefaultArgs( default_args );
		this.addEditFieldToColumn( $.i18n._( 'Overtime Policy' ), form_item_input, tab0_column1 );

		//Premium Policies
		form_item_input = Global.loadWidgetByName( FormItemType.AWESOME_BOX );
		form_item_input.AComboBox( {
			api_class: (APIFactory.getAPIClass( 'APIPremiumPolicy' )),
			allow_multiple_selection: true,
			layout_name: ALayoutIDs.PREMIUM_POLICY,
			show_search_inputs: true,
			set_empty: true,
			field: 'premium_policy_id'
		} );
		this.addEditFieldToColumn( $.i18n._( 'Premium Policies' ), form_item_input, tab0_column1 );

		//Start / Stop Window
		form_item_input = Global.loadWidgetByName( FormItemType.TEXT_INPUT );
		form_item_input.TTextInput( {field: 'start_stop_window', width: 50, need_parser_sec: true} );

		var widgetContainer = $( "<div class='widget-h-box'></div>" );
		var label = $( "<span class='widget-right-label'> (" + $.i18n._( 'ie' ) + ' : ' + LocalCacheData.getLoginUserPreference().time_unit_format_display + ")</span>" );

		widgetContainer.append( form_item_input );
		widgetContainer.append( label );
		this.addEditFieldToColumn( $.i18n._( 'Start / Stop Window' ), form_item_input, tab0_column1, '', widgetContainer );

	},

	onMealOrBreakSourceCreate: function( target, source_data ) {
		var display_columns = target.getDisplayColumns();

		var first_item = {};
		$.each( display_columns, function( index, content ) {

			first_item.id = 0;
			first_item[content.name] = $.i18n._( '-- Defined By Policy Group --' );

			return false;
		} );

		source_data.unshift( first_item );

		return source_data;
	},

	setCurrentEditRecordData: function() {

		//Set current edit record data to all widgets
		for ( var key in this.current_edit_record ) {

			if ( !this.current_edit_record.hasOwnProperty( key ) ) {
				continue;
			}

			var widget = this.edit_view_ui_dic[key];
			if ( Global.isSet( widget ) ) {
				switch ( key ) {
					case 'country': //popular case
						this.eSetProvince( this.current_edit_record[key] );
						widget.setValue( this.current_edit_record[key] );
						break;
					default:
						widget.setValue( this.current_edit_record[key] );
						break;
				}

			}
		}

		this.collectUIDataToCurrentEditRecord();
		this.setEditViewDataDone();

	},

	onFormItemChange: function( target, doNotValidate ) {
		this.setIsChanged( target );
		this.setMassEditingFieldsWhenFormChange( target );

		var key = target.getField();
		var c_value = target.getValue();

//		switch ( key ) {
//			case 'start_stop_window':
//				c_value = this.date_api.parseTimeUnit( target.getValue(), {async: false} ).getResult();
//				break;
//		}

		this.current_edit_record[key] = c_value;

		if ( !doNotValidate ) {
			this.validate();
		}
	},

	buildSearchFields: function() {

		this._super( 'buildSearchFields' );
		this.search_fields = [

			new SearchField( {label: $.i18n._( 'Name' ),
				in_column: 1,
				field: 'name',
				multiple: true,
				basic_search: true,
				adv_search: false,
				form_item_type: FormItemType.TEXT_INPUT} ),
			new SearchField( {label: $.i18n._( 'Meal Policy' ),
				in_column: 1,
				field: 'meal_policy_id',
				layout_name: ALayoutIDs.MEAL_POLICY,
				api_class: (APIFactory.getAPIClass( 'APIMealPolicy' )),
				multiple: true,
				basic_search: true,
				adv_search: false,
				form_item_type: FormItemType.AWESOME_BOX} ),

			new SearchField( {label: $.i18n._( 'Undertime Absence Policy' ),
				in_column: 1,
				field: 'absence_policy_id',
				layout_name: ALayoutIDs.ABSENCES_POLICY,
				api_class: (APIFactory.getAPIClass( 'APIAbsencePolicy' )),
				multiple: true,
				basic_search: true,
				adv_search: false,
				form_item_type: FormItemType.AWESOME_BOX} ),

			new SearchField( {label: $.i18n._( 'Overtime Policy' ),
				in_column: 1,
				field: 'overtime_policy_id',
				layout_name: ALayoutIDs.OVER_TIME_POLICY,
				api_class: (APIFactory.getAPIClass( 'APIOvertimePolicy' )),
				multiple: true,
				basic_search: true,
				adv_search: false,
				form_item_type: FormItemType.AWESOME_BOX} ),

			new SearchField( {label: $.i18n._( 'Created By' ),
				in_column: 2,
				field: 'created_by',
				layout_name: ALayoutIDs.USER,
				api_class: (APIFactory.getAPIClass( 'APIUser' )),
				multiple: true,
				basic_search: true,
				adv_search: false,
				form_item_type: FormItemType.AWESOME_BOX} ),

			new SearchField( {label: $.i18n._( 'Updated By' ),
				in_column: 2,
				field: 'updated_by',
				layout_name: ALayoutIDs.USER,
				api_class: (APIFactory.getAPIClass( 'APIUser' )),
				multiple: true,
				basic_search: true,
				adv_search: false,
				form_item_type: FormItemType.AWESOME_BOX} )
		];
	}


} );

SchedulePolicyViewController.loadView = function() {

	Global.loadViewSource( 'SchedulePolicy', 'SchedulePolicyView.html', function( result ) {

		var args = {};
		var template = _.template( result, args );

		Global.contentContainer().html( template );
	} );

};