import React, { Component } from 'react';

import Table from './Table';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filings: [],
    }
  }

  componentDidMount() {
    fetch(`/static/demo/ww.sample.json`, {
      method: 'GET',
      headers: {
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log('data.filings: ', data.filings);
      this.setState({filings: data.filings.filter(item => {
          return item.form;
        })
      })
    });

    /* 1) Fetch JSON data from: /static/demo/ww.sample.json

    Response is the entire org record
    Sample Response
    {
      id: '',
      name: '',
      filings: [],
      ...etc
    }

    Filing Example
    {
      "formType": "990",
      "taxPeriod": 201509,
      "form": {
          "revenue": {
              "total": 398698187,
              "investmentIncome": 13351364,
              "programServices": 0,
              "contributionsGifts": 372546396,
              "otherRevenue": 1915562
          },
          "compensation": {
              "payrollTaxes": 2231172,
              "compensationCurrentOfficers": 2402580,
              "otherSalariesWages": 33316349
          },
          "assets": {
              "totalAssets": 310997780,
              "totalLiabilities": 28886992,
              "netAssets": 282110788
          },
          "contributions": {
              "allOther": 366769259,
              "federatedCampaigns": 4629130,
              "fundraisingEvents": 1148007,
              "governmentGrants": 0
          },
          "expenses": {
              "total": 351675223,
              "programServices": 262468529,
              "managementAndGeneral": 14476430,
              "fundraising": 74730264
          }
      }
      …etc
    }

    2) Filter the filings array to only include those with form property
    3) Render an html <table /> grouped
    4) Render table / rows for each grouping (expenses, revenue, compensation, contributions, assets)
      – Each filing should have it's own table column
      – Show the taxPeriod as the column header for each filing

    Bonus – format taxPeriod using Moment (taxPeriod input format = YYYYMM, output format = MMM YYYY)
    Bonus – format financials using Numeral (output format = $0,0)

    */
  }

  render() {
    const financialGroups = ['expenses', 'revenue', 'compensation', 'contributions', 'assets']

    return (
      <div className="App">
        <div>
          <Table filingsData={this.state.filings} financialGroups={financialGroups} />
        </div>
      </div>
    )
  }
}

export default App;
