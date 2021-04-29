<?php
/*********************************************************************************
 * TimeTrex is a Workforce Management program developed by
 * TimeTrex Software Inc. Copyright (C) 2003 - 2020 TimeTrex Software Inc.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by
 * the Free Software Foundation with the addition of the following permission
 * added to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED
 * WORK IN WHICH THE COPYRIGHT IS OWNED BY TIMETREX, TIMETREX DISCLAIMS THE
 * WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program; if not, see http://www.gnu.org/licenses or write to the Free
 * Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA.
 *
 * You can contact TimeTrex headquarters at Unit 22 - 2475 Dobbin Rd. Suite
 * #292 West Kelowna, BC V4T 2E9, Canada or at email address info@timetrex.com.
 *
 * The interactive user interfaces in modified source and object code versions
 * of this program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU Affero General Public License version 3.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License
 * version 3, these Appropriate Legal Notices must retain the display of the
 * "Powered by TimeTrex" logo. If the display of the logo is not reasonably
 * feasible for technical reasons, the Appropriate Legal Notices must display
 * the words "Powered by TimeTrex".
 ********************************************************************************/


/**
 * @package PayrollDeduction\CA
 */
class PayrollDeduction_CA_Data extends PayrollDeduction_Base {
	var $db = null;
	var $income_tax_rates = [];
	var $country_primary_currency = 'CAD';

	//***Update PayrollDeduction.class.php with updated date/version

	/*
		Claim Code Basic Amounts
	*/
	var $basic_claim_code_options = [
			20200701 => [ //01-Jul-2020:
						  'CA' => [ 'min' => 12298, 'max' => 13229, 'phase_out_start' => 150473, 'phase_out_end' => 214368 ], //Federal - This is now phased out if net income is ~$150K or less, see Federal Basic Personal Amount (BPAF)
						  'BC' => 10949,
						  'AB' => 19369,
						  'SK' => 16065,
						  'MB' => 9838,
						  'QC' => 0,
						  'ON' => 10783,
						  'NL' => 9498,
						  'NB' => 10459,
						  'NS' => 11481, //See NS.class.php, as there are a low and high basic claim amounts now.
						  'PE' => 10000,
						  'NT' => 15093,
						  'YT' => [ 'min' => 12298, 'max' => 14160, 'phase_out_start' => 150473, 'phase_out_end' => 214368 ], //YT - This is now phased out if net income is ~$150K or less, see Yukon Basic Personal Amount (BPAYT)
						  'NU' => 16304,
			],
			20200101 => [ //01-Jan-2020:
						  'CA' => [ 'min' => 12298, 'max' => 13229, 'phase_out_start' => 150473, 'phase_out_end' => 214368 ], //Federal - This is now phased out if net income is ~$150K or less, see Federal Basic Personal Amount (BPAF)
						  'BC' => 10949,
						  'AB' => 19369,
						  'SK' => 16065,
						  'MB' => 9838,
						  'QC' => 0,
						  'ON' => 10783,
						  'NL' => 9498,
						  'NB' => 10459,
						  'NS' => 11481, //See NS.class.php, as there are a low and high basic claim amounts now.
						  'PE' => 10000,
						  'NT' => 15093,
						  'YT' => 12298,
						  'NU' => 16304,
			],
			20190101 => [ //01-Jan-2019:
						  'CA' => 12069, //Federal
						  'BC' => 10682,
						  'AB' => 19369,
						  'SK' => 16065,
						  'MB' => 9626,
						  'QC' => 0,
						  'ON' => 10582,
						  'NL' => 9414,
						  'NB' => 10264,
						  'NS' => 11481, //See NS.class.php, as there are a low and high basic claim amounts now.
						  'PE' => 9160,
						  'NT' => 14811,
						  'YT' => 12069,
						  'NU' => 13618,
			],
			20180701 => [ //01-Jul-2018:
						  'CA' => 11809, //Federal
						  'BC' => 10412,
						  'AB' => 18915,
						  'SK' => 16065,
						  'MB' => 9382,
						  'QC' => 0,
						  'ON' => 10354,
						  'NL' => 9247,
						  'NB' => 10043,
						  'NS' => 11481, //See NS.class.php, as there are a low and high basic claim amounts now.
						  'PE' => 9160,
						  'NT' => 14492,
						  'YT' => 11809,
						  'NU' => 13325,
			],
			20180101 => [ //01-Jan-2018:
						  'CA' => 11809, //Federal
						  'BC' => 10412,
						  'AB' => 18915,
						  'SK' => 16065,
						  'MB' => 9382,
						  'QC' => 0,
						  'ON' => 10354,
						  'NL' => 9247,
						  'NB' => 10043,
						  'NS' => 11481, //See NS.class.php, as there are a low and high basic claim amounts now.
						  'PE' => 8160,
						  'NT' => 14492,
						  'YT' => 11809,
						  'NU' => 13325,
			],
			20170701 => [ //01-Jul-2017:
						  'CA' => 11635, //Federal
						  'BC' => 10208,
						  'AB' => 18690,
						  'SK' => 16065,
						  'MB' => 9271,
						  'QC' => 0,
						  'ON' => 10171,
						  'NL' => 8978,
						  'NB' => 9895,
						  'NS' => 8481,
						  'PE' => 8320,
						  'NT' => 14278,
						  'YT' => 11635,
						  'NU' => 13128,
			],
			20170101 => [ //01-Jan-2017:
						  'CA' => 11635, //Federal
						  'BC' => 10208,
						  'AB' => 18690,
						  'SK' => 16065,
						  'MB' => 9271,
						  'QC' => 0,
						  'ON' => 10171,
						  'NL' => 8978,
						  'NB' => 9895,
						  'NS' => 8481,
						  'PE' => 8000,
						  'NT' => 14278,
						  'YT' => 11635,
						  'NU' => 13128,
			],
			20160701 => [ //01-Jul-2016:
						  'CA' => 11474, //Federal
						  'BC' => 10027,
						  'AB' => 18451,
						  'SK' => 15843,
						  'MB' => 9134,
						  'QC' => 0,
						  'ON' => 10011,
						  'NL' => 8802,
						  'NB' => 9758,
						  'NS' => 8481,
						  'PE' => 8292,
						  'NT' => 14081,
						  'YT' => 11474,
						  'NU' => 12947,
			],
			20160101 => [ //01-Jan-2016:
						  'CA' => 11474, //Federal
						  'BC' => 10027,
						  'AB' => 18451,
						  'SK' => 15843,
						  'MB' => 9134,
						  'QC' => 0,
						  'ON' => 10011,
						  'NL' => 8802,
						  'NB' => 9758,
						  'NS' => 8481,
						  'PE' => 7708,
						  'NT' => 14081,
						  'YT' => 11474,
						  'NU' => 12947,
			],
			20150101 => [ //01-Jan-2015:
						  'CA' => 11327, //Federal
						  'BC' => 9938,
						  'AB' => 18214,
						  'SK' => 15639,
						  'MB' => 9134,
						  'QC' => 0,
						  'ON' => 9863,
						  'NL' => 8767,
						  'NB' => 9633,
						  'NS' => 8481,
						  'PE' => 7708,
						  'NT' => 13900,
						  'YT' => 11327,
						  'NU' => 12781,
			],
			20140101 => [ //01-Jan-2014:
						  'CA' => 11138, //Federal
						  'BC' => 9869,
						  'AB' => 17787,
						  'SK' => 15378,
						  'MB' => 9134,
						  'QC' => 0,
						  'ON' => 9670,
						  'NL' => 8578,
						  'NB' => 9472,
						  'NS' => 8481,
						  'PE' => 7708,
						  'NT' => 13668,
						  'YT' => 11138,
						  'NU' => 12567,
			],
			20130101 => [ //01-Jan-2013:
						  'CA' => 11038, //Federal
						  'BC' => 10276,
						  'AB' => 17593,
						  'SK' => 15241,
						  'MB' => 8884,
						  'QC' => 0,
						  'ON' => 9574,
						  'NL' => 8451,
						  'NB' => 9388,
						  'NS' => 8481,
						  'PE' => 7708,
						  'NT' => 13546,
						  'YT' => 11038,
						  'NU' => 12455,
			],
			20120101 => [ //01-Jan-2012:
						  'CA' => 10822, //Federal
						  'BC' => 11354,
						  'AB' => 17282,
						  'SK' => 14942,
						  'MB' => 8634,
						  'QC' => 0,
						  'ON' => 9405,
						  'NL' => 8237,
						  'NB' => 9203,
						  'NS' => 8481,
						  'PE' => 7708,
						  'NT' => 13280,
						  'YT' => 10822,
						  'NU' => 12211,
			],
			20110701 => [ //01-Jul-2011: Some of these are only changed for the last 6mths in the year.
						  'CA' => 10527, //Federal
						  'BC' => 11088,
						  'AB' => 16977,
						  'SK' => 14535,
						  'MB' => 8634,
						  'QC' => 0,
						  'ON' => 9104,
						  'NL' => 7989,
						  'NB' => 8953,
						  'NS' => 8731,
						  'PE' => 7708,
						  'NT' => 12919,
						  'YT' => 10527,
						  'NU' => 11878,
			],
			20110101 => [ //01-Jan-2011
						  'CA' => 10527, //Federal
						  'BC' => 11088,
						  'AB' => 16977,
						  'SK' => 13535,
						  'MB' => 8134,
						  'QC' => 0,
						  'ON' => 9104,
						  'NL' => 7989,
						  'NB' => 8953,
						  'NS' => 8231,
						  'PE' => 7708,
						  'NT' => 12919,
						  'YT' => 10527,
						  'NU' => 11878,
			],
			20100101 => [ //01-Jan-2010
						  'CA' => 10382, //Federal
						  'BC' => 11000,
						  'AB' => 16825,
						  'SK' => 13348,
						  'MB' => 8134,
						  'QC' => 0,
						  'ON' => 8943,
						  'NL' => 7833,
						  'NB' => 8777,
						  'NS' => 8231,
						  'PE' => 7708,
						  'NT' => 12740,
						  'YT' => 10382,
						  'NU' => 11714,
			],
			20090401 => [ //01-Apr-09
						  'CA' => 10375, //Federal
						  'BC' => 9373,
						  'AB' => 16775,
						  'SK' => 13269,
						  'MB' => 8134,
						  'QC' => 0,
						  'ON' => 8881,
						  'NL' => 7778,
						  'NB' => 8134,
						  'NS' => 7981,
						  'PE' => 7708,
						  'NT' => 12664,
						  'YT' => 10375,
						  'NU' => 11644,
			],
			20090101 => [ //01-Jan-09
						  'CA' => 10100, //Federal
						  'BC' => 9373,
						  'AB' => 16775,
						  'SK' => 13269,
						  'MB' => 8134,
						  'QC' => 0,
						  'ON' => 8881,
						  'NL' => 7778,
						  'NB' => 8134,
						  'NS' => 7981,
						  'PE' => 7708,
						  'NT' => 12664,
						  'YT' => 10100,
						  'NU' => 11644,
			],
			20080101 => [ //01-Jan-08
						  'CA' => 9600, //Federal
						  'BC' => 9189,
						  'AB' => 16161,
						  'SK' => 8945,
						  'MB' => 8034,
						  'QC' => 0,
						  'ON' => 8681,
						  'NL' => 7566,
						  'NB' => 8395,
						  'NS' => 7731,
						  'PE' => 7708,
						  'NT' => 12355,
						  'YT' => 9600,
						  'NU' => 11360,
			],
			20070701 => [ //01-Jul-07
						  'CA' => 8929, //Federal
						  'BC' => 9027,
						  'AB' => 15435,
						  'SK' => 8778,
						  'MB' => 7834,
						  'QC' => 0,
						  'ON' => 8553,
						  'NL' => 7558,
						  'NB' => 8239,
						  'NS' => 7481,
						  'PE' => 7708,
						  'NT' => 12125,
						  'YT' => 8929,
						  'NU' => 11149,
			],
			20070101 => [ //01-Jan-07
						  'CA' => 8929, //Federal
						  'BC' => 9027,
						  'AB' => 15435,
						  'SK' => 8778,
						  'MB' => 7834,
						  'QC' => 0,
						  'ON' => 8553,
						  'NL' => 7410,
						  'NB' => 8239,
						  'NS' => 7481,
						  'PE' => 7412,
						  'NT' => 12125,
						  'YT' => 8929,
						  'NU' => 11149,
			],
			20060701 => [ //01-Jul-06
						  'CA' => 8639, //Federal
						  'BC' => 8858,
						  'AB' => 14999,
						  'SK' => 8589,
						  'MB' => 7734,
						  'QC' => 0,
						  'ON' => 8377,
						  'NL' => 7410,
						  'NB' => 8061,
						  'NS' => 7231,
						  'PE' => 7412,
						  'NT' => 11864,
						  'YT' => 8328,
						  'NU' => 10909,
			],
			20060101 => [ //01-Jan-06
						  'CA' => 9039, //Federal
						  'BC' => 8858,
						  'AB' => 14799,
						  'SK' => 8589,
						  'MB' => 7734,
						  'QC' => 0,
						  'ON' => 8377,
						  'NL' => 7410,
						  'NB' => 8061,
						  'NS' => 7231,
						  'PE' => 7412,
						  'NT' => 11864,
						  'YT' => 8328,
						  'NU' => 10909,
			],
	];

	/*
		CPP settings
	*/
	var $cpp_options = [
			20200101 => [ //2020
						  'maximum_pensionable_earnings'  => 58700,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0525,
						  'employee_maximum_contribution' => 2898.00,
			],
			20190101 => [ //2019
						  'maximum_pensionable_earnings'  => 57400,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0510,
						  'employee_maximum_contribution' => 2748.90,
			],
			20180101 => [ //2018
						  'maximum_pensionable_earnings'  => 55900,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0495,
						  'employee_maximum_contribution' => 2593.80,
			],
			20170101 => [ //2017
						  'maximum_pensionable_earnings'  => 55300,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0495,
						  'employee_maximum_contribution' => 2564.10,
			],
			20160101 => [ //2016
						  'maximum_pensionable_earnings'  => 54900,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0495,
						  'employee_maximum_contribution' => 2544.30,
			],
			20150101 => [ //2015
						  'maximum_pensionable_earnings'  => 53600,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0495,
						  'employee_maximum_contribution' => 2479.95,
			],
			20140101 => [ //2014
						  'maximum_pensionable_earnings'  => 52500,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0495,
						  'employee_maximum_contribution' => 2425.50,
			],
			20130101 => [ //2013
						  'maximum_pensionable_earnings'  => 51100,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0495,
						  'employee_maximum_contribution' => 2356.20,
			],
			20120101 => [ //2012
						  'maximum_pensionable_earnings'  => 50100,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0495,
						  'employee_maximum_contribution' => 2306.70,
			],
			20110101 => [ //2011
						  'maximum_pensionable_earnings'  => 48300,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0495,
						  'employee_maximum_contribution' => 2217.60,
			],
			20100101 => [ //2010
						  'maximum_pensionable_earnings'  => 47200,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0495,
						  'employee_maximum_contribution' => 2163.15,
			],
			20090101 => [ //2009
						  'maximum_pensionable_earnings'  => 46300,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0495,
						  'employee_maximum_contribution' => 2118.60,
			],
			20080101 => [ //2008
						  'maximum_pensionable_earnings'  => 44900,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0495,
						  'employee_maximum_contribution' => 2049.30,
			],
			20070101 => [ //2007
						  'maximum_pensionable_earnings'  => 43700,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0495,
						  'employee_maximum_contribution' => 1989.90,
			],
			20060101 => [ //2006
						  'maximum_pensionable_earnings'  => 42100,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0495,
						  'employee_maximum_contribution' => 1910.70,
			],
			20050101 => [ //2005
						  'maximum_pensionable_earnings'  => 41100,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0495,
						  'employee_maximum_contribution' => 1861.20,
			],
			20040101 => [ //2004
						  'maximum_pensionable_earnings'  => 40500,
						  'basic_exemption'               => 3500,
						  'employee_rate'                 => 0.0495,
						  'employee_maximum_contribution' => 1831.50,
			],
	];

	/*
		EI settings
	*/
	var $ei_options = [
			20200101 => [ //2020
						  'maximum_insurable_earnings'    => 54200,
						  'employee_rate'                 => 0.0158,
						  'employee_maximum_contribution' => 856.36,
						  'employer_rate'                 => 1.4,
			],
			20190101 => [ //2019
						  'maximum_insurable_earnings'    => 53100,
						  'employee_rate'                 => 0.0162,
						  'employee_maximum_contribution' => 860.22,
						  'employer_rate'                 => 1.4,
			],
			20180101 => [ //2018
						  'maximum_insurable_earnings'    => 51700,
						  'employee_rate'                 => 0.0166,
						  'employee_maximum_contribution' => 858.22,
						  'employer_rate'                 => 1.4,
			],
			20170101 => [ //2017
						  'maximum_insurable_earnings'    => 51300,
						  'employee_rate'                 => 0.0163,
						  'employee_maximum_contribution' => 836.19,
						  'employer_rate'                 => 1.4,
			],
			20160101 => [ //2016
						  'maximum_insurable_earnings'    => 50800,
						  'employee_rate'                 => 0.0188,
						  'employee_maximum_contribution' => 955.04,
						  'employer_rate'                 => 1.4,
			],
			20150101 => [ //2015
						  'maximum_insurable_earnings'    => 49500,
						  'employee_rate'                 => 0.0188,
						  'employee_maximum_contribution' => 930.60,
						  'employer_rate'                 => 1.4,
			],
			20140101 => [ //2014
						  'maximum_insurable_earnings'    => 48600,
						  'employee_rate'                 => 0.0188,
						  'employee_maximum_contribution' => 913.68,
						  'employer_rate'                 => 1.4,
			],
			20130101 => [ //2013
						  'maximum_insurable_earnings'    => 47400,
						  'employee_rate'                 => 0.0188,
						  'employee_maximum_contribution' => 891.12,
						  'employer_rate'                 => 1.4,
			],
			20120101 => [ //2012
						  'maximum_insurable_earnings'    => 45900,
						  'employee_rate'                 => 0.0183,
						  'employee_maximum_contribution' => 839.97,
						  'employer_rate'                 => 1.4,
			],
			20110101 => [ //2011
						  'maximum_insurable_earnings'    => 44200,
						  'employee_rate'                 => 0.0178,
						  'employee_maximum_contribution' => 786.76,
						  'employer_rate'                 => 1.4,
			],
			20100101 => [ //2010
						  'maximum_insurable_earnings'    => 43200,
						  'employee_rate'                 => 0.0173,
						  'employee_maximum_contribution' => 747.36,
						  'employer_rate'                 => 1.4,
			],
			20090101 => [ //2009
						  'maximum_insurable_earnings'    => 42300,
						  'employee_rate'                 => 0.0173,
						  'employee_maximum_contribution' => 731.79,
						  'employer_rate'                 => 1.4,
			],
			20080101 => [ //2008
						  'maximum_insurable_earnings'    => 41100,
						  'employee_rate'                 => 0.0173,
						  'employee_maximum_contribution' => 711.03,
						  'employer_rate'                 => 1.4,
			],
			20070101 => [ //2007
						  'maximum_insurable_earnings'    => 40000,
						  'employee_rate'                 => 0.0180,
						  'employee_maximum_contribution' => 720.00,
						  'employer_rate'                 => 1.4,
			],
			20060101 => [ //2006
						  'maximum_insurable_earnings'    => 39000,
						  'employee_rate'                 => 0.0187,
						  'employee_maximum_contribution' => 729.30,
						  'employer_rate'                 => 1.4,
			],
			20050101 => [ //2005
						  'maximum_insurable_earnings'    => 39000,
						  'employee_rate'                 => 0.0195,
						  'employee_maximum_contribution' => 760.50,
						  'employer_rate'                 => 1.4,
			],
			20040101 => [ //2004
						  'maximum_insurable_earnings'    => 39900,
						  'employee_rate'                 => 0.0198,
						  'employee_maximum_contribution' => 722.20,
						  'employer_rate'                 => 1.4,
			],
	];

	/*
		Federal employment credit
	*/
	var $federal_employment_credit_options = [
			20200101 => [ 'credit' => 1245 ],
			20190101 => [ 'credit' => 1222 ],
			20180101 => [ 'credit' => 1195 ],
			20170101 => [ 'credit' => 1178 ],
			20160101 => [ 'credit' => 1161 ],
			20150101 => [ 'credit' => 1146 ],
			20140101 => [ 'credit' => 1127 ],
			20130101 => [ 'credit' => 1117 ],
			20120101 => [ 'credit' => 1095 ],
			20110101 => [ 'credit' => 1065 ],
			20100101 => [ 'credit' => 1051 ],
			20090101 => [ 'credit' => 1044 ],
			20080101 => [ 'credit' => 1019 ],
			20070101 => [ 'credit' => 1000 ],
			20060101 => [ 'credit' => 500 ],
	];

	/*
		Federal Income Tax Rates
	*/
	var $federal_income_tax_rate_options = [
			20200101 => [
					[ 'income' => 48535, 'rate' => 15, 'constant' => 0 ],
					[ 'income' => 97069, 'rate' => 20.5, 'constant' => 2669 ],
					[ 'income' => 150473, 'rate' => 26, 'constant' => 8008 ],
					[ 'income' => 214368, 'rate' => 29, 'constant' => 12522 ],
					[ 'income' => 214368, 'rate' => 33, 'constant' => 21097 ],
			],
			20190101 => [
					[ 'income' => 47630, 'rate' => 15, 'constant' => 0 ],
					[ 'income' => 95259, 'rate' => 20.5, 'constant' => 2620 ],
					[ 'income' => 147667, 'rate' => 26, 'constant' => 7859 ],
					[ 'income' => 210371, 'rate' => 29, 'constant' => 12289 ],
					[ 'income' => 210371, 'rate' => 33, 'constant' => 20704 ],
			],
			20180101 => [
					[ 'income' => 46605, 'rate' => 15, 'constant' => 0 ],
					[ 'income' => 93208, 'rate' => 20.5, 'constant' => 2563 ],
					[ 'income' => 144489, 'rate' => 26, 'constant' => 7690 ],
					[ 'income' => 205842, 'rate' => 29, 'constant' => 12024 ],
					[ 'income' => 205842, 'rate' => 33, 'constant' => 20258 ],
			],
			20170101 => [
					[ 'income' => 45916, 'rate' => 15, 'constant' => 0 ],
					[ 'income' => 91831, 'rate' => 20.5, 'constant' => 2525 ],
					[ 'income' => 142353, 'rate' => 26, 'constant' => 7576 ],
					[ 'income' => 202800, 'rate' => 29, 'constant' => 11847 ],
					[ 'income' => 202800, 'rate' => 33, 'constant' => 19959 ],
			],
			20160101 => [
					[ 'income' => 45282, 'rate' => 15, 'constant' => 0 ],
					[ 'income' => 90563, 'rate' => 20.5, 'constant' => 2491 ],
					[ 'income' => 140388, 'rate' => 26, 'constant' => 7471 ],
					[ 'income' => 200000, 'rate' => 29, 'constant' => 11683 ],
					[ 'income' => 200000, 'rate' => 33, 'constant' => 19683 ],
			],
			20150101 => [
					[ 'income' => 44701, 'rate' => 15, 'constant' => 0 ],
					[ 'income' => 89401, 'rate' => 22, 'constant' => 3129 ],
					[ 'income' => 138586, 'rate' => 26, 'constant' => 6705 ],
					[ 'income' => 138586, 'rate' => 29, 'constant' => 10863 ],
			],
			20140101 => [
					[ 'income' => 43953, 'rate' => 15, 'constant' => 0 ],
					[ 'income' => 87907, 'rate' => 22, 'constant' => 3077 ],
					[ 'income' => 136270, 'rate' => 26, 'constant' => 6593 ],
					[ 'income' => 136270, 'rate' => 29, 'constant' => 10681 ],
			],
			20130101 => [
					[ 'income' => 43561, 'rate' => 15, 'constant' => 0 ],
					[ 'income' => 87123, 'rate' => 22, 'constant' => 3049 ],
					[ 'income' => 135054, 'rate' => 26, 'constant' => 6534 ],
					[ 'income' => 135054, 'rate' => 29, 'constant' => 10586 ],
			],
			20120101 => [
					[ 'income' => 42707, 'rate' => 15, 'constant' => 0 ],
					[ 'income' => 85414, 'rate' => 22, 'constant' => 2989 ],
					[ 'income' => 132406, 'rate' => 26, 'constant' => 6406 ],
					[ 'income' => 132406, 'rate' => 29, 'constant' => 10378 ],
			],
			20110101 => [
					[ 'income' => 41544, 'rate' => 15, 'constant' => 0 ],
					[ 'income' => 83088, 'rate' => 22, 'constant' => 2908 ],
					[ 'income' => 128800, 'rate' => 26, 'constant' => 6232 ],
					[ 'income' => 128800, 'rate' => 29, 'constant' => 10096 ],
			],
			20100101 => [
					[ 'income' => 40970, 'rate' => 15, 'constant' => 0 ],
					[ 'income' => 81941, 'rate' => 22, 'constant' => 2868 ],
					[ 'income' => 127021, 'rate' => 26, 'constant' => 6146 ],
					[ 'income' => 127021, 'rate' => 29, 'constant' => 9956 ],
			],
			20090401 => [
					[ 'income' => 41200, 'rate' => 15, 'constant' => 0 ],
					[ 'income' => 82399, 'rate' => 22, 'constant' => 2884 ],
					[ 'income' => 126264, 'rate' => 26, 'constant' => 6180 ],
					[ 'income' => 126264, 'rate' => 29, 'constant' => 9968 ],
			],
			20090101 => [
					[ 'income' => 38832, 'rate' => 15, 'constant' => 0 ],
					[ 'income' => 77664, 'rate' => 22, 'constant' => 2718 ],
					[ 'income' => 126264, 'rate' => 26, 'constant' => 5825 ],
					[ 'income' => 126264, 'rate' => 29, 'constant' => 9613 ],
			],
			20080101 => [
					[ 'income' => 37885, 'rate' => 15, 'constant' => 0 ],
					[ 'income' => 75769, 'rate' => 22, 'constant' => 2652 ],
					[ 'income' => 123184, 'rate' => 26, 'constant' => 5683 ],
					[ 'income' => 123184, 'rate' => 29, 'constant' => 9378 ],
			],
			20070101 => [
					[ 'income' => 37178, 'rate' => 15.5, 'constant' => 0 ],
					[ 'income' => 74357, 'rate' => 22, 'constant' => 2417 ],
					[ 'income' => 120887, 'rate' => 26, 'constant' => 5391 ],
					[ 'income' => 120887, 'rate' => 29, 'constant' => 9017 ],
			],
			20060701 => [
					[ 'income' => 36378, 'rate' => 15.5, 'constant' => 0 ],
					[ 'income' => 72756, 'rate' => 22, 'constant' => 2365 ],
					[ 'income' => 118285, 'rate' => 26, 'constant' => 5275 ],
					[ 'income' => 118285, 'rate' => 29, 'constant' => 8823 ],
			],
			20060101 => [
					[ 'income' => 36378, 'rate' => 15, 'constant' => 0 ],
					[ 'income' => 72756, 'rate' => 22, 'constant' => 2546 ],
					[ 'income' => 118285, 'rate' => 26, 'constant' => 5457 ],
					[ 'income' => 118285, 'rate' => 29, 'constant' => 9005 ],
			],
			20050101 => [
					[ 'income' => 35595, 'rate' => 16, 'constant' => 0 ],
					[ 'income' => 71190, 'rate' => 22, 'constant' => 2136 ],
					[ 'income' => 115739, 'rate' => 26, 'constant' => 4983 ],
					[ 'income' => 115739, 'rate' => 29, 'constant' => 8455 ],
			],
			20040101 => [
					[ 'income' => 35000, 'rate' => 16, 'constant' => 0 ],
					[ 'income' => 70000, 'rate' => 22, 'constant' => 2100 ],
					[ 'income' => 113804, 'rate' => 26, 'constant' => 4900 ],
					[ 'income' => 113804, 'rate' => 29, 'constant' => 8314 ],
			],
			20030101 => [
					[ 'income' => 35000, 'rate' => 16, 'constant' => 0 ],
					[ 'income' => 70000, 'rate' => 22, 'constant' => 2100 ],
					[ 'income' => 113804, 'rate' => 26, 'constant' => 4900 ],
					[ 'income' => 113804, 'rate' => 29, 'constant' => 8314 ],
			],
			20020101 => [
					[ 'income' => 35000, 'rate' => 16, 'constant' => 0 ],
					[ 'income' => 70000, 'rate' => 22, 'constant' => 2100 ],
					[ 'income' => 113804, 'rate' => 26, 'constant' => 4900 ],
					[ 'income' => 113804, 'rate' => 29, 'constant' => 8314 ],
			],
			20010101 => [
					[ 'income' => 35000, 'rate' => 16, 'constant' => 0 ],
					[ 'income' => 70000, 'rate' => 22, 'constant' => 2100 ],
					[ 'income' => 113804, 'rate' => 26, 'constant' => 4900 ],
					[ 'income' => 113804, 'rate' => 29, 'constant' => 8314 ],
			],
	];

	function __construct() {
		global $db;

		$this->db = $db;

		return true;
	}

	/*
		Claim Code Functions
	*/
	function getBasicClaimCodeData( $date ) {
		foreach ( $this->basic_claim_code_options as $effective_date => $data ) {
			if ( $date >= $effective_date ) {
				return $data;
			}
		}

		return false;
	}

	function getBasicFederalClaimCodeAmount( $date = false ) {
		if ( $date == '' ) {
			$date = $this->getDate();
		}

		$data = $this->getBasicClaimCodeData( $date );

		if ( isset( $data['CA'] ) ) {
			//After 01-Jan-2020, BPAF variable was introduced, so see if the data is returned as an array or not.
			if ( is_array( $data['CA'] ) ) {
				$retval = $data['CA']['max'];
			} else {
				$retval = $data['CA'];
			}

			return $retval;
		}

		return false;
	}

	function getBasicProvinceClaimCodeAmount( $date = false ) {
		if ( $date == '' ) {
			$date = $this->getDate();
		}

		$data = $this->getBasicClaimCodeData( $date );

		if ( isset( $data[$this->getProvince()] ) ) {
			//After 01-Jul-2020, BPAYT variable was introduced, so see if the data is returned as an array or not.
			if ( is_array( $data[$this->getProvince()] ) ) {
				$retval = $data[$this->getProvince()]['max'];
			} else {
				$retval = $data[$this->getProvince()];
			}

			return $retval;
		}

		return false;
	}

	/*
		Provincial tax/surtax reduction functions
	*/
	function getProvincialTaxReductionData( $date ) {
		if ( isset( $this->provincial_tax_reduction_options ) ) {
			foreach ( $this->provincial_tax_reduction_options as $effective_date => $data ) {
				if ( $date >= $effective_date ) {
					return $data;
				}
			}
		}

		return false;
	}

	function getProvincialSurTaxData( $date ) {
		if ( isset( $this->provincial_surtax_options ) ) {
			foreach ( $this->provincial_surtax_options as $effective_date => $data ) {
				if ( $date >= $effective_date ) {
					return $data;
				}
			}
		}

		return false;
	}

	/*
		Federal Employment Credit functions
	*/
	function getFederalEmploymentCreditData( $date ) {
		foreach ( $this->federal_employment_credit_options as $effective_date => $data ) {
			if ( $date >= $effective_date ) {
				return $data;
			}
		}

		return false;
	}

	function getFederalEmploymentCreditAmount() {
		$data = $this->getFederalEmploymentCreditData( $this->getDate() );

		Debug::text( 'Date: ' . $this->getDate() . ' Credit: ' . $data['credit'], __FILE__, __LINE__, __METHOD__, 10 );

		return $data['credit'];
	}

	/*
		CPP functions
	*/
	function getCPPData( $date ) {
		foreach ( $this->cpp_options as $effective_date => $data ) {
			if ( $date >= $effective_date ) {
				return $data;
			}
		}

		return false;
	}

	function getCPPMaximumEarnings() {
		$data = $this->getCPPData( $this->getDate() );

		return $data['maximum_pensionable_earnings'];
	}

	function getCPPBasicExemption() {
		$data = $this->getCPPData( $this->getDate() );

		return $data['basic_exemption'];
	}

	function getCPPEmployeeRate() {
		$data = $this->getCPPData( $this->getDate() );

		Debug::text( 'Date: ' . $this->getDate() . ' Rate: ' . $data['employee_rate'], __FILE__, __LINE__, __METHOD__, 10 );

		return $data['employee_rate'];
	}

	function getCPPEmployeeMaximumContribution() {
		$data = $this->getCPPData( $this->getDate() );

		return $data['employee_maximum_contribution'];
	}

	/*
		EI functions
	*/
	function getEIData( $date ) {
		foreach ( $this->ei_options as $effective_date => $data ) {
			if ( $date >= $effective_date ) {
				return $data;
			}
		}

		return false;
	}

	function getEIMaximumEarnings() {
		$data = $this->getEIData( $this->getDate() );

		return $data['maximum_insurable_earnings'];
	}

	function getEIEmployeeRate() {
		$data = $this->getEIData( $this->getDate() );

		return $data['employee_rate'];
	}

	function getEIEmployeeMaximumContribution() {
		$data = $this->getEIData( $this->getDate() );

		return $data['employee_maximum_contribution'];
	}

	function getEIEmployerRate() {
		$data = $this->getEIData( $this->getDate() );

		return $data['employer_rate'];
	}

	function getData() {
//		global $cache;
//		$country = $this->getCountry();
//		$province = $this->getProvince();
		$epoch = $this->getDate();

		if ( $epoch == null || $epoch == '' ) {
			$epoch = $this->getISODate( TTDate::getTime() );
		}

		//Debug::text( 'bUsing (' . $province . ') values from: ' . TTDate::getDate( 'DATE+TIME', $this->getDateEpoch( $epoch ) ), __FILE__, __LINE__, __METHOD__, 10 );

		$this->income_tax_rates = false;
		if ( isset( $this->federal_income_tax_rate_options ) && count( $this->federal_income_tax_rate_options ) > 0 ) {
			foreach ( $this->getDataFromRateArray( $epoch, $this->federal_income_tax_rate_options ) as $effective_date => $data ) {
				$this->income_tax_rates['federal'][] = [ 'income' => $data['income'], 'rate' => ( $data['rate'] / 100 ), 'constant' => $data['constant'] ];
			}
		}

		if ( isset( $this->provincial_income_tax_rate_options ) && count( $this->provincial_income_tax_rate_options ) > 0 ) {
			foreach ( $this->getDataFromRateArray( $epoch, $this->provincial_income_tax_rate_options ) as $effective_date => $data ) {
				$this->income_tax_rates['provincial'][] = [ 'income' => $data['income'], 'rate' => ( $data['rate'] / 100 ), 'constant' => $data['constant'] ];
			}
		}

		return $this;
	}

	private function getRateArray( $income, $type ) {
		Debug::text( 'Calculating ' . $type . ' Taxes on: $' . $income, __FILE__, __LINE__, __METHOD__, 10 );

		$blank_arr = [ 'rate' => null, 'constant' => null ];

		if ( isset( $this->income_tax_rates[$type] ) ) {
			$rates = $this->income_tax_rates[$type];
		} else {
			Debug::text( 'aNO INCOME TAX RATES FOUND!!!!!! ' . $type . ' Taxes on: $' . $income, __FILE__, __LINE__, __METHOD__, 10 );

			return $blank_arr;
		}

		if ( count( $rates ) == 0 ) {
			Debug::text( 'bNO INCOME TAX RATES FOUND!!!!!! ' . $type . ' Taxes on: $' . $income, __FILE__, __LINE__, __METHOD__, 10 );

			return $blank_arr;
		}

		$prev_value = 0;
		$total_rates = ( count( $rates ) - 1 );
		$i = 0;
		foreach ( $rates as $key => $values ) {
			$value = $values['income'];

			if ( $income > $prev_value && $income <= $value ) {
				//Debug::text( 'Value: ' . $value . ' Rate: ' . $values['rate'] . ' Constant: ' . $values['constant'] . ' Previous Value: ' . $prev_value, __FILE__, __LINE__, __METHOD__, 10 );
				return $this->income_tax_rates[$type][$key];
			} else if ( $i == $total_rates ) {
				//Debug::text( 'Last Value: ' . $value . ' Rate: ' . $values['rate'] . ' Constant: ' . $values['constant'] . ' Previous Value: ' . $prev_value, __FILE__, __LINE__, __METHOD__, 10 );
				return $this->income_tax_rates[$type][$key];
			}

			$prev_value = $value;
			$i++;
		}

		return $blank_arr;
	}

	function getFederalLowestRate() {
		$arr = $this->getRateArray( 1, 'federal' );
		Debug::text( 'Federal Lowest Rate: ' . $arr['rate'], __FILE__, __LINE__, __METHOD__, 10 );

		return $arr['rate'];
	}

	function getFederalHighestRate() {
		$arr = $this->getRateArray( 999999999, 'federal' );
		Debug::text( 'Federal Highest Rate: ' . $arr['rate'], __FILE__, __LINE__, __METHOD__, 10 );

		return $arr['rate'];
	}

	function getFederalRate( $income ) {
		$arr = $this->getRateArray( $income, 'federal' );
		Debug::text( 'Federal Rate: ' . $arr['rate'], __FILE__, __LINE__, __METHOD__, 10 );

		return $arr['rate'];
	}

	function getFederalConstant( $income ) {
		$arr = $this->getRateArray( $income, 'federal' );
		Debug::text( 'Federal Constant: ' . $arr['constant'], __FILE__, __LINE__, __METHOD__, 10 );

		return $arr['constant'];
	}

	function getProvincialLowestRate() {
		$arr = $this->getRateArray( 1, 'provincial' );
		Debug::text( 'Provincial Lowest Rate: ' . $arr['rate'], __FILE__, __LINE__, __METHOD__, 10 );

		return $arr['rate'];
	}

	function getProvincialHighestRate() {
		$arr = $this->getRateArray( 999999999, 'provincial' );
		Debug::text( 'Provincial Highest Rate: ' . $arr['rate'], __FILE__, __LINE__, __METHOD__, 10 );

		return $arr['rate'];
	}

	function getProvincialRate( $income ) {
		$arr = $this->getRateArray( $income, 'provincial' );
		Debug::text( 'Provincial Rate: ' . $arr['rate'], __FILE__, __LINE__, __METHOD__, 10 );

		return $arr['rate'];
	}

	function getProvincialConstant( $income ) {
		$arr = $this->getRateArray( $income, 'provincial' );
		Debug::text( 'Provincial Constant: ' . $arr['constant'], __FILE__, __LINE__, __METHOD__, 10 );

		return $arr['constant'];
	}
}

?>
