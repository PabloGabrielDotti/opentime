<?php
/*********************************************************************************
 * TimeTrex is a Payroll and Time Management program developed by
 * TimeTrex Software Inc. Copyright (C) 2003 - 2014 TimeTrex Software Inc.
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
 * #292 Westbank, BC V4T 2E9, Canada or at email address info@timetrex.com.
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
/*
 * $Revision: 14280 $
 * $Id: AddRecurringPayStubAmendment.php 14280 2014-08-29 16:43:40Z mikeb $
 * $Date: 2014-08-29 09:43:40 -0700 (Fri, 29 Aug 2014) $
 */
/*
 * Adds all recurring PS amendments
 * This file should be run once a day.
 *
 */
require_once( dirname(__FILE__) . DIRECTORY_SEPARATOR .'..'. DIRECTORY_SEPARATOR .'includes'. DIRECTORY_SEPARATOR .'global.inc.php');
require_once( dirname(__FILE__) . DIRECTORY_SEPARATOR .'..'. DIRECTORY_SEPARATOR .'includes'. DIRECTORY_SEPARATOR .'CLI.inc.php');

$epoch = TTDate::getTime();

//Get all recurring PS amendments by company, loop through each one.
$rpsalf = new RecurringPayStubAmendmentListFactory();
$rpsalf->getByStatusAndStartDate( 50, $epoch );
Debug::text('Total Recurring PS Amendments: '. $rpsalf->getRecordCount() ,__FILE__, __LINE__, __METHOD__, 10);
foreach( $rpsalf as $recurring_ps_amendment_obj ) {
	Debug::text('Recurring PS Amendment ID: '. $recurring_ps_amendment_obj->getID() ,__FILE__, __LINE__, __METHOD__, 10);
	$recurring_ps_amendment_obj->createPayStubAmendments( $epoch );
}

Debug::writeToLog();
Debug::Display();
?>