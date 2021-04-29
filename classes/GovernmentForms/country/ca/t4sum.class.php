<?php
/*********************************************************************************
 * TimeTrex is a Workforce Management program developed by
 * TimeTrex Software Inc. Copyright (C) 2003 - 2018 TimeTrex Software Inc.
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


include_once( 'CA.class.php' );

/**
 * @package GovernmentForms
 */
class GovernmentForms_CA_T4Sum extends GovernmentForms_CA {
	public $pdf_template = 't4sum-10b.pdf';

	public $template_offsets = [ -10, 0 ];

	//Set the submission status. Original, Amended, Cancel.
	function getStatus() {
		if ( isset( $this->status ) ) {
			return $this->status;
		}

		return 'O'; //Original
	}

	function setStatus( $value ) {
		if ( strtoupper( $value ) == 'C' ) {
			$value = 'A'; //Cancel isn't valid for this, only original and amendment.
		}
		$this->status = strtoupper( trim( $value ) );

		return true;
	}

	public function getFilterFunction( $name ) {
		$variable_function_map = [
				'year' => 'isNumeric',
				//'ein' => array( 'stripNonNumeric', 'isNumeric'),
		];

		if ( isset( $variable_function_map[$name] ) ) {
			return $variable_function_map[$name];
		}

		return false;
	}

	public function getTemplateSchema( $name = null ) {
		$template_schema = [

				'year'                   => [
						'page'          => 1,
						'template_page' => 1,
						'on_background' => true,
						'coordinates'   => [
								'x'          => 190,
								'y'          => 44,
								'h'          => 18,
								'w'          => 58,
								'halign'     => 'C',
								'fill_color' => [ 255, 255, 255 ],
						],
						'font'          => [
								'size' => 14,
								'type' => 'B',
						],
				],

				//Company information
				'company_name'           => [
						'coordinates' => [
								'x'      => 275,
								'y'      => 110,
								'h'      => 12,
								'w'      => 210,
								'halign' => 'L',
						],
						'font'        => [
								'size' => 8,
								'type' => 'B',
						],
				],
				'company_address'        => [
						'function'    => [ 'filterCompanyAddress', 'drawNormal' ],
						'coordinates' => [
								'x'      => 275,
								'y'      => 122,
								'h'      => 12,
								'w'      => 210,
								'halign' => 'L',
						],
						'font'        => [
								'size' => 8,
								'type' => '',
						],
						'multicell'   => true,
				],
				'payroll_account_number' => [
						'coordinates' => [
								'x'      => 275,
								'y'      => 82,
								'h'      => 17,
								'w'      => 214,
								'halign' => 'L',
						],
						'font'        => [
								'size' => 8,
								'type' => '',
						],
				],

				'l88' => [
						'coordinates' => [
								'x'      => 59,
								'y'      => 211,
								'h'      => 16,
								'w'      => 128,
								'halign' => 'R',
						],
				],

				'l14' => [
						'function'    => 'drawSplitDecimalFloat',
						'coordinates' => [
								[
										'x'      => 60,
										'y'      => 247,
										'h'      => 18,
										'w'      => 142,
										'halign' => 'R',
								],
								[
										'x'      => 202,
										'y'      => 247,
										'h'      => 18,
										'w'      => 30,
										'halign' => 'C',
								],
						],
				],

				'l16' => [
						'function'    => 'drawSplitDecimalFloat',
						'coordinates' => [
								[
										'x'      => 260,
										'y'      => 211,
										'h'      => 18,
										'w'      => 130,
										'halign' => 'R',
								],
								[
										'x'      => 390,
										'y'      => 211,
										'h'      => 18,
										'w'      => 28,
										'halign' => 'C',
								],
						],
				],
				'l18' => [
						'function'    => 'drawSplitDecimalFloat',
						'coordinates' => [
								[
										'x'      => 260,
										'y'      => 283,
										'h'      => 18,
										'w'      => 130,
										'halign' => 'R',
								],
								[
										'x'      => 390,
										'y'      => 283,
										'h'      => 18,
										'w'      => 28,
										'halign' => 'C',
								],
						],
				],
				'l19' => [
						'function'    => 'drawSplitDecimalFloat',
						'coordinates' => [
								[
										'x'      => 260,
										'y'      => 319,
										'h'      => 18,
										'w'      => 130,
										'halign' => 'R',
								],
								[
										'x'      => 390,
										'y'      => 319,
										'h'      => 18,
										'w'      => 28,
										'halign' => 'C',
								],
						],
				],

				'l20' => [
						'function'    => 'drawSplitDecimalFloat',
						'coordinates' => [
								[
										'x'      => 60,
										'y'      => 283,
										'h'      => 18,
										'w'      => 142,
										'halign' => 'R',
								],
								[
										'x'      => 202,
										'y'      => 283,
										'h'      => 18,
										'w'      => 30,
										'halign' => 'C',
								],
						],
				],

				'l22'             => [
						'function'    => 'drawSplitDecimalFloat',
						'coordinates' => [
								[
										'x'      => 260,
										'y'      => 355,
										'h'      => 18,
										'w'      => 130,
										'halign' => 'R',
								],
								[
										'x'      => 390,
										'y'      => 355,
										'h'      => 18,
										'w'      => 28,
										'halign' => 'C',
								],
						],
				],
				'l52'             => [
						'function'    => 'drawSplitDecimalFloat',
						'coordinates' => [
								[
										'x'      => 60,
										'y'      => 319,
										'h'      => 18,
										'w'      => 142,
										'halign' => 'R',
								],
								[
										'x'      => 202,
										'y'      => 319,
										'h'      => 18,
										'w'      => 30,
										'halign' => 'C',
								],
						],
				],
				'l27'             => [
						'function'    => 'drawSplitDecimalFloat',
						'coordinates' => [
								[
										'x'      => 260,
										'y'      => 247,
										'h'      => 18,
										'w'      => 130,
										'halign' => 'R',
								],
								[
										'x'      => 390,
										'y'      => 247,
										'h'      => 18,
										'w'      => 28,
										'halign' => 'C',
								],
						],
				],
				'l80'             => [
						'function'    => [ 'calcL80', 'drawSplitDecimalFloat' ],
						'coordinates' => [
								[
										'x'      => 260,
										'y'      => 390,
										'h'      => 18,
										'w'      => 130,
										'halign' => 'R',
								],
								[
										'x'      => 390,
										'y'      => 390,
										'h'      => 18,
										'w'      => 28,
										'halign' => 'C',
								],
						],
				],
				'l82'             => [
						'function'    => 'drawSplitDecimalFloat',
						'coordinates' => [
								[
										'x'      => 260,
										'y'      => 427,
										'h'      => 18,
										'w'      => 130,
										'halign' => 'R',
								],
								[
										'x'      => 390,
										'y'      => 427,
										'h'      => 18,
										'w'      => 28,
										'halign' => 'C',
								],
						],
				],
				'l82_diff'        => [
						'function'    => [ 'calcL82Diff', 'drawSplitDecimalFloat' ],
						'coordinates' => [
								[
										'x'      => 260,
										'y'      => 500,
										'h'      => 18,
										'w'      => 130,
										'halign' => 'R',
								],
								[
										'x'      => 390,
										'y'      => 500,
										'h'      => 18,
										'w'      => 28,
										'halign' => 'C',
								],
						],
				],
				'l84'             => [
						'function'    => 'drawSplitDecimalFloat',
						'coordinates' => [
								[
										'x'      => 59,
										'y'      => 582,
										'h'      => 18,
										'w'      => 100,
										'halign' => 'R',
								],
								[
										'x'      => 159,
										'y'      => 582,
										'h'      => 18,
										'w'      => 28,
										'halign' => 'C',
								],
						],
				],
				'l86'             => [
						'function'    => 'drawSplitDecimalFloat',
						'coordinates' => [
								[
										'x'      => 217,
										'y'      => 582,
										'h'      => 18,
										'w'      => 100,
										'halign' => 'R',
								],
								[
										'x'      => 317,
										'y'      => 582,
										'h'      => 18,
										'w'      => 28,
										'halign' => 'C',
								],
						],
				],
				'amount_enclosed' => [
						'function'    => 'drawSplitDecimalFloat',
						'coordinates' => [
								[
										'x'      => 376,
										'y'      => 582,
										'h'      => 18,
										'w'      => 100,
										'halign' => 'R',
								],
								[
										'x'      => 476,
										'y'      => 582,
										'h'      => 18,
										'w'      => 28,
										'halign' => 'C',
								],
						],
				],
				'l76'             => [
						'coordinates' => [
								'x'      => 59,
								'y'      => 655,
								'h'      => 18,
								'w'      => 230,
								'halign' => 'R',
						],
				],
				'l78'             => [
						'function'    => [ 'filterphone', 'drawSegments' ],
						'coordinates' => [
								[
										'x'      => 335,
										'y'      => 655,
										'h'      => 18,
										'w'      => 20,
										'halign' => 'C',
								],
								[
										'x'      => 385,
										'y'      => 655,
										'h'      => 18,
										'w'      => 20,
										'halign' => 'C',
								],
								[
										'x'      => 440,
										'y'      => 655,
										'h'      => 18,
										'w'      => 30,
										'halign' => 'C',
								],
						],
				],
				'date'            => [
						'value'       => date( 'd-M-Y' ),
						'coordinates' => [
								'x'      => 50,
								'y'      => 715,
								'h'      => 18,
								'w'      => 110,
								'halign' => 'C',
						],
				],

		];

		if ( isset( $template_schema[$name] ) ) {
			return $name;
		} else {
			return $template_schema;
		}
	}

	function filterPhone( $value ) {
		//Strip non-digits.
		$value = $this->stripNonNumeric( $value );
		if ( $value != '' ) {
			return [ substr( $value, 0, 3 ), substr( $value, 3, 3 ), substr( $value, 6, 4 ) ];
		}

		return false;
	}

	function calcL80( $value, $schema ) {
		//Subtotal: 16 + 27 + 18 + 19 + 22
		$this->l80 = ( $this->l16 + $this->l27 + $this->l18 + $this->l19 + $this->l22 );

		return $this->l80;
	}

	function calcL82Diff( $value, $schema ) {
		//Subtotal: 80 - 82
		$this->l82_diff = ( $this->l80 - $this->l82 );

		if ( $this->l82_diff > 0 ) {
			$this->l86 = $this->amount_enclosed = $this->l82_diff;
		} else {
			$this->l84 = abs( $this->l82_diff );
			unset( $this->amount_enclosed );
		}

		return $this->l82_diff;
	}

	function _outputXML() {
		if ( is_object( $this->getXMLObject() ) ) {
			$xml = $this->getXMLObject();
		} else {
			return false; //No XML object to append too. Needs T619 form first.
		}

		if ( isset( $xml->Return ) && isset( $xml->Return->T4 ) && $this->l88 > 0 ) {
			$xml->Return->T4->addChild( 'T4Summary' );

			$xml->Return->T4->T4Summary->addChild( 'bn', $this->formatPayrollAccountNumber( $this->payroll_account_number ) );
			$xml->Return->T4->T4Summary->addChild( 'tx_yr', $this->year );
			$xml->Return->T4->T4Summary->addChild( 'slp_cnt', $this->l88 );
			$xml->Return->T4->T4Summary->addChild( 'rpt_tcd', 'O' ); //Report Type Code: O = Originals, A = Amendment, C = Cancel

			$xml->Return->T4->T4Summary->addChild( 'EMPR_NM' ); //Employer name
			$xml->Return->T4->T4Summary->EMPR_NM->addChild( 'l1_nm', substr( Misc::stripHTMLSpecialChars( $this->company_name ), 0, 30 ) );

			$xml->Return->T4->T4Summary->addChild( 'EMPR_ADDR' ); //Employer Address
			$xml->Return->T4->T4Summary->EMPR_ADDR->addChild( 'addr_l1_txt', Misc::stripHTMLSpecialChars( $this->company_address1 ) );
			if ( $this->company_address2 != '' ) {
				$xml->Return->T4->T4Summary->EMPR_ADDR->addChild( 'addr_l2_txt', Misc::stripHTMLSpecialChars( $this->company_address2 ) );
			}
			$xml->Return->T4->T4Summary->EMPR_ADDR->addChild( 'cty_nm', $this->company_city );
			$xml->Return->T4->T4Summary->EMPR_ADDR->addChild( 'prov_cd', $this->company_province );
			$xml->Return->T4->T4Summary->EMPR_ADDR->addChild( 'cntry_cd', 'CAN' );
			$xml->Return->T4->T4Summary->EMPR_ADDR->addChild( 'pstl_cd', $this->company_postal_code );

			$xml->Return->T4->T4Summary->addChild( 'CNTC' ); //Contact Name
			$xml->Return->T4->T4Summary->CNTC->addChild( 'cntc_nm', $this->l76 );

			if ( $this->l78 != '' ) {
				$phone_arr = $this->filterPhone( $this->l78 );
			} else {
				$phone_arr = $this->filterPhone( '000-000-0000' );
			}

			if ( is_array( $phone_arr ) ) {
				$xml->Return->T4->T4Summary->CNTC->addChild( 'cntc_area_cd', $phone_arr[0] );
				$xml->Return->T4->T4Summary->CNTC->addChild( 'cntc_phn_nbr', $phone_arr[1] . '-' . $phone_arr[2] );
				//$xml->Return->T4->T4Summary->CNTC->addChild( 'cntc_extn_nbr', '' );
			}


			//$xml->Return->T4->T4Summary->addChild('PPRTR_SIN');
			//$xml->Return->T4->T4Summary->PPRTR_SIN->addChild('pprtr_1_sin', '' ); //Required
			//$xml->TReturn->4->T4Summary->PPRTR_SIN->addChild('pprtr_2_sin', '' );

			$xml->Return->T4->T4Summary->addChild( 'T4_TAMT' );
			$xml->Return->T4->T4Summary->T4_TAMT->addChild( 'tot_empt_incamt', $this->MoneyFormat( $this->l14 ) );
			$xml->Return->T4->T4Summary->T4_TAMT->addChild( 'tot_empe_cpp_amt', $this->MoneyFormat( $this->l16 ) );
			$xml->Return->T4->T4Summary->T4_TAMT->addChild( 'tot_empe_eip_amt', $this->MoneyFormat( $this->l18 ) );
			$xml->Return->T4->T4Summary->T4_TAMT->addChild( 'tot_rpp_cntrb_amt', $this->MoneyFormat( $this->l20 ) );
			$xml->Return->T4->T4Summary->T4_TAMT->addChild( 'tot_itx_ddct_amt', $this->MoneyFormat( $this->l22 ) );
			$xml->Return->T4->T4Summary->T4_TAMT->addChild( 'tot_padj_amt', $this->MoneyFormat( $this->l52 ) );
			$xml->Return->T4->T4Summary->T4_TAMT->addChild( 'tot_empr_cpp_amt', $this->MoneyFormat( $this->l27 ) );
			$xml->Return->T4->T4Summary->T4_TAMT->addChild( 'tot_empr_eip_amt', $this->MoneyFormat( $this->l19 ) );
		}

		return true;
	}

	function _outputPDF() {
		//Initialize PDF with template.
		$pdf = $this->getPDFObject();

		if ( $this->getShowBackground() == true ) {
			$pdf->setSourceFile( $this->getTemplateDirectory() . DIRECTORY_SEPARATOR . $this->pdf_template );

			$this->template_index[1] = $pdf->ImportPage( 1 );
		}

		if ( $this->year == '' ) {
			$this->year = $this->getYear();
		}

		//Get location map, start looping over each variable and drawing
		$template_schema = $this->getTemplateSchema();
		if ( is_array( $template_schema ) ) {

			$template_page = null;

			foreach ( $template_schema as $field => $schema ) {
				//Debug::text('Drawing Cell... Field: '. $field, __FILE__, __LINE__, __METHOD__, 10);
				$this->Draw( $this->$field, $schema );
			}
		}

		return true;
	}
}

?>