import React from 'react';
import moment from 'moment';
import numeral from 'numeral';


const Table = (props) => (
    <>
        <table>
        <colgroup></colgroup>
            <tr>
                <th>
                    Overview
                </th>
                {props.filingsData.map(f => (
                    <th>{moment(f.taxPeriod.toString(), 'YYYYMM').format('MMM YYYY')}</th>
                ))}
            </tr>
            <tr>
                <td>Tax Period Year</td>
                {props.filingsData.map(c => (
                    <td>{c.taxPeriodYear}</td>
                ))}
            </tr>
            <tr>
                <td>Form Type</td>
                {props.filingsData.map(c => (
                    <td>{c.formType}</td>
                ))}
            </tr>
        </table>
        <table>
        <colgroup></colgroup>
            <tr>
                <th>
                    Expenses
                </th>
                {props.filingsData.map(f => (
                    <th>{moment(f.taxPeriod.toString(), 'YYYYMM').format('MMM YYYY')}</th>
                ))}
            </tr>
            <tr>
                <td>Total</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.expenses.total).format('($0,0)')}</td>
                ))}
            </tr>
            <tr>
                <td>Program Services</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.expenses.programServices).format('($0,0)')}</td>
                ))}
            </tr>
            <tr>
                <td>Management and General</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.expenses.managementAndGeneral).format('($0,0)')}</td>
                ))}
            </tr>
            <tr>
                <td>Fundraising</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.expenses.fundraising).format('($0,0)')}</td>
                ))}
            </tr>
        </table>
        <table>
        <colgroup></colgroup>
            <tr>
                <th>
                    Revenue
                </th>
                {props.filingsData.map(f => (
                    <th>{moment(f.taxPeriod.toString(), 'YYYYMM').format('MMM YYYY')}</th>
                ))}
            </tr>
            <tr>
                <td>Total</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.revenue.total).format('($0,0)')}</td>
                ))}
            </tr>
            <tr>
                <td>Investment Income</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.revenue.investmentIncome).format('($0,0)')}</td>
                ))}
            </tr>
            <tr>
                <td>Program Services</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.revenue.programServices).format('($0,0)')}</td>
                ))}
            </tr>
            <tr>
                <td>Contributions Gifts</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.revenue.contributionsGifts).format('($0,0)')}</td>
                ))}
            </tr>
            <tr>
                <td>Other Revnue</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.revenue.otherRevenue).format('($0,0)')}</td>
                ))}
            </tr>
        </table>
        <table>
        <colgroup></colgroup>
            <tr>
                <th>
                    Compensation
                </th>
                {props.filingsData.map(f => (
                    <th>{moment(f.taxPeriod.toString(), 'YYYYMM').format('MMM YYYY')}</th>
                ))}
            </tr>
            <tr>
                <td>Payroll Taxes</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.compensation.payrollTaxes).format('($0,0)')}</td>
                ))}
            </tr>
            <tr>
                <td>Compensation Current Officers</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.compensation.compensationCurrentOfficers).format('($0,0)')}</td>
                ))}
            </tr>
            <tr>
                <td>Other Salaries Wages</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.compensation.otherSalariesWages).format('($0,0)')}</td>
                ))}
            </tr>
        </table>
        <table>
        <colgroup></colgroup>
            <tr>
                <th>
                    Contributions
                </th>
                {props.filingsData.map(f => (
                    <th>{moment(f.taxPeriod.toString(), 'YYYYMM').format('MMM YYYY')}</th>
                ))}
            </tr>
            <tr>
                <td>All Other</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.contributions.allOther).format('($0,0)')}</td>
                ))}
            </tr>
            <tr>
                <td>Federated Campaigns</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.contributions.federatedCampaigns).format('($0,0)')}</td>
                ))}
            </tr>
            <tr>
                <td>Fundraising Events</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.contributions.fundraisingEvents).format('($0,0)')}</td>
                ))}
            </tr>
            <tr>
                <td>Government Grants</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.contributions.governmentGrants).format('($0,0)')}</td>
                ))}
            </tr>
        </table>
        <table>
        <colgroup></colgroup>
            <tr>
                <th>
                    Assets
                </th>
                {props.filingsData.map(f => (
                    <th>{moment(f.taxPeriod.toString(), 'YYYYMM').format('MMM YYYY')}</th>
                ))}
            </tr>
            <tr>
                <td>Total Assets</td>
                {props.filingsData.map(c => (
                    <td>{numeral(c.form.assets.totalAssets).format('($0,0)')}</td>
                ))}
            </tr>
        </table>
    </>
)

export default Table;
