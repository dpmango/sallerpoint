import React, { Component } from 'react';
import matchSorter from 'match-sorter'
import api, {BACKEND_URL} from '../../services/Api';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import Modal from 'react-responsive-modal';
import Dropzone from 'react-dropzone'

export default class DashCOGSSetup extends Component {

  lstEditedCOGS=[]; 
  state = {
    data: [],
    open:false     
  };

  constructor() {
    super();
    this.state = {
      data: [],
      open:false        
    };
    this.getAllCOGS();  
    this.renderEditable = this.renderEditable.bind(this); 
  }

  onOpenModal = () => {
    this.setState({open:true});   
  };

  onCloseModal = () => {
    this.setState({open:false}); 
};

onDrop(files) {
 if (files.length>0){ 
  var data = new FormData();
  data.append("file", files[0]);

  api
  .post(`UploadCogsData`, data)
  .then((res) => {
    console.log('backend responce to GET UploadCogsData', res)
           if ( res.data.IsSuccess){               
          console.log(res.data);
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
}

onDownloadFile=()=>{
  api
  .get(`DownloadCogsTemplate`)
  .then((res) => {
    console.log('backend responce to GET onDownloadFile', res)
           if ( res.data.IsSuccess){               
            window.location.href = BACKEND_URL + "/Download?file=" + res.data.FileName;
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
    return(<div className="inpt-landed-cost">{["$", 
      <input type={"number"} min={0}
      contentEditable      
        style={{ backgroundColor: "#fafafa",width: "100%","text-align": "right" }} 
        defaultValue={cellInfo.original.LandedCost}
        onChange={e => {
                  this.lstEditedCOGS.push({COGSId :cellInfo.original.COGSId, LandedCost: e.target.value });                           
                }}
      />]}</div>
    );
  }

  saveCOGS=()=>{
   if(this.lstEditedCOGS.length>0){
  api
  .post(`UpdateCOGS`, this.lstEditedCOGS)
  .then((res) => {
    console.log('backend responce to GET UpdateCOGS', res)
           if ( res.data.IsSuccess){               
            this.getAllCOGS();
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
  }

  render(){
    const { data, open } = this.state;  
  console.log(open);
    return(
      <React.Fragment>
        <div className="dash-container">
          <div className="container container--full">
          <div className="panel panel-dark">
          <div className="panel-heading">
            <h3 className="panel-title">Products List</h3>
            </div>

            <div className="panel-body">
            <div class="row">
                                            <div class="custom-pagelist-left">
                                                <div class="col-lg-12 mar-b-15 mar-t-5">
                                                    <button id="btnBulkCSV" class="btn btn-primary btn-rounded" onClick={this.onOpenModal}>Bulk CSV Edit</button>
                                                </div>
                                            </div></div>

            <div class="row">
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
                  accessor: d => ["$",d.AvgHistoricalPrice],
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["AvgHistoricalPrice"] }),
                  filterAll: true
                } ,
                {
                  Header: "Landed Cost", 
                  id:"LandedCost",                  
                  accessor:"LandedCost",
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

        <div class="text-centre">
                                        <a id="btnSaveCogs" class="btn btn-primary btn-long"  onClick={this.saveCOGS}>SAVE</a>
                                    </div>
      </div>
          </div>
        </div> </div>
        </div>
        
        <Modal open={open} onClose={this.onCloseModal}>
        <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <input id="hdnDefaultType" type="hidden" />
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" class="fa fa-times"></span></button>
                <h4 class="modal-title" id="myModalLabel">Bulk CSV Edit</h4>
            </div>
            <div class="modal-body modal-body-update">
                <div class="row">
                    <div class="upload-discription">
                        <p class="head">How to use this template</p>
                        <p>
                            This template contains all the products imported via the Amazon MWS API.
                            To edit your costs, proceed as follows:
                        </p>

                        <p>
                            1. Click on button <b>Download CSV template</b> and download the template file.
                        </p>
                        <p>
                            2. Enter your Landed Cost per unit in the format '12.34' in the respective columns
                            (marked in blue color).
                        </p>
                        <p>
                            3. Save this file as .xlsx and upload it to SellerPoint.
                        </p>

                        <p>
                            Please note: The columns Status, Seller SKU, Listing Name, Marketplace Name, Brand,
                            Avg. Historical Price, cannot be changed.
                        </p>
                        <p class="red">
                            Caution: Uploading this file will overwrite all previously entered costs.
                            Empty cells will be interpreted as 0.00.
                        </p>
                    </div>
                    <div class="upload-btn">
                        <button type="button" class="btn btn-primary btn-bordered" id="btnDownload" onClick={this.onDownloadFile}>Download CSV template</button>

                    </div>
                    <div class="upload-btn mt-20">
                        <button type="button" class="btn btn-primary btn-rounded" id="btnUpload">Upload CSV template</button>
                        <span id="filename"></span>

                         <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)} accept=".xlsx">
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
      
      </section>
                    </div>
                    <div id="my-awesome-dropzone" class="dropzone dropzone-block" enctype='multipart/form-data'>
                    </div>
                </div>
            </div>

        </div>
    </div>
         
        </Modal>
      </React.Fragment>
    )
  }
}
