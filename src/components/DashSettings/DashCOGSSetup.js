import React, { Component } from 'react';
import matchSorter from 'match-sorter'
import api from '../../services/Api';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class DashCOGSSetup extends Component {

  lstEditedCOGS=[];

  constructor() {
    super();
    this.state = {
      data: []
    };
    this.getAllCOGS();  
    this.renderEditable = this.renderEditable.bind(this); 
  }

  getAllCOGS(){     
    api
      .get(`GetAllCOGS`)
      .then((res) => {
        console.log('backend responce to GET GetAllCOGS', res)
               if ( res.data.IsSuccess){               
                 this.setState({
                  data: res.data.LstCOGSTable  
                });   
        } else {
          this.setState({
            apiError: res.data.ErrorMessage
          })
        }        
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderEditable(cellInfo) {
    return (
      <input type={"number"}
      contentEditable      
        style={{ backgroundColor: "#fafafa",width: "100%" }}      
        onChange={e => {
          this.lstEditedCOGS.push({cogsId :cellInfo.original.COGSId, value: e.target.innerHTML });           
          cellInfo.original.LandedCost = e.target.value                      
        }}
       value={cellInfo.original.LandedCost}      
      />
    );
  }

  render(){
    const { data } = this.state;   
    return(
      <React.Fragment>
        <div className="dash-container">
          <div className="container container--full">
            <h3>COGS</h3>
            <div>
        <ReactTable
          data={data}
          noDataText="No products found."
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[            
                {
                  Header: "Satus",
                  id:"Status",
                  accessor: d => d.Status,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["Status"] }),
                  filterAll: true
                },
                {
                  Header: "Seller SKU",  
                  id:"SellerSKU",             
                  accessor: d => d.SellerSKU,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["SellerSKU"] }),
                  filterAll: true
                },
                {
                  Header: "Listing Name", 
                  id:"Name",                  
                  accessor: d => d.Name,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["Name"] }),
                  filterAll: true
                } ,
                {
                  Header: "MarketPlace Name", 
                  id:"MarketplaceName",                  
                  accessor: d => d.MarketplaceName,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["MarketplaceName"] }),
                  filterAll: true
                },
                {
                  Header: "Brand", 
                  id:"Brand",                  
                  accessor: d => d.Brand,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["Brand"] }),
                  filterAll: true
                } ,
                {
                  Header: "Avg. Hist. Price", 
                  id:"AvgHistoricalPrice",                  
                  accessor: d => d.AvgHistoricalPrice,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["AvgHistoricalPrice"] }),
                  filterAll: true
                } ,
                {
                  Header: "Landed Cost", 
                  id:"LandedCost",                  
                  accessor: d => d.LandedCost,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["LandedCost"] }),
                  filterAll: true,
                  Cell :this.renderEditable
                }                                    
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />       
      </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
