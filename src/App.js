import React from "react";
import axios from "axios";

import ApplicantSubForm from "./components/ApplicantSubForm";
import AgentSubForm from "./components/AgentSubForm";
import ContactSubForm from "./components/ContactSubForm";
import BrandSubForm from "./components/BrandSubForm";
import TaxesSubForm from "./components/TaxesSubForm";
import ServicesSubForm from "./components/ServicesSubForm";
import BrandCategroy from "./components/BrandCategory";
import Colors from "./components/Colors";
import Notes from "./components/Notes";
import Appendings from "./components/Appendings";
import Date from "./components/Date";

import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {otherBrand: null, brand: null}
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createAndDownloadPDF = this.createAndDownloadPDF.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  /* ------------ Create PDF (then Downlad) ------------------ */

  createAndDownloadPDF() {
    console.log(this.state)
    let formData = new FormData();
    formData.append("brand", this.state.brand);
    formData.append("data", JSON.stringify(this.state))
    console.log(formData);
    axios({
      method: 'post',
      url: 'http://www.localhost:5000/proposal',
      data: formData,
      dataType: "multipart/form-data",
      processData: false,
      contentType: false
    }).then(res => console.log(res))
    /* ------------ Send the request to get the created PDF ------------------ */
    // .then(() =>
    //   axios({
    //     url: "http://www.localhost:5000/proposal",
    //     method: "GET",
    //     responseType: "blob",
    //   })
    // )
    /* ------------ Downloading the PDF file we get back ------------------ */
    // .then((response) => {
    //   const url = window.URL.createObjectURL(new Blob([response.data]));
    //   const link = document.createElement("a");
    //   link.href = url;
    //   link.setAttribute("download", "file.pdf");
    //   document.body.appendChild(link);
    //   link.click();
    // });
  }

  /* ---------------- HandleUpload for files --------------------- */

  handleUpload(event) {
    this.setState({ [event.target.name]: event.target.files[0] })
  }

  /* ------------ HandleChange for text inputs ------------------ */

  handleChange(event) {
    let property = event.target.name;
    this.setState({ [property]: event.target.value });
  }

  /* -------------- HandleCheck for checkboxes ------------------- */

  handleCheck(event) {
    console.log(event.target.name);
    let property = event.target.name;
    this.setState({ [property]: !this.state[property] }, () => {
      console.log(this.state);
    });
  }

  /* ------------ Handling the submit of the form ------------------ */

  handleSubmit(event) {
    event.preventDefault();
    this.createAndDownloadPDF();
  }

  /* ------------------------ Render Method ------------------------ */

  render() {
    return (
      <div className="App">
        <div className="page-container">
          <h1 className="page-header">Enregistrement d’une marque suisse</h1>
        </div>

        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <ApplicantSubForm handleChange={this.handleChange} />
            <AgentSubForm handleChange={this.handleChange} />
            <ContactSubForm
              handleChange={this.handleChange}
              handleCheck={this.handleCheck}
              isEmailProvided = {this.state.isEmailProvided} 
            />
            <BrandSubForm
             handleCheck={this.handleCheck}
             handleChange={this.handleChange}
             handleUpload={this.handleUpload}
             otherBrand={this.state.otherBrand}/>
            {/* <TaxesSubForm handleCheck={this.handleCheck} handleChange={this.handleChange}/>
            <ServicesSubForm handleChange={this.handleChange}/>
            <BrandCategroy handleCheck={this.handleCheck} handleChange={this.handleChange}/>
            <Colors handleChange={this.handleChange}/>
            <Notes handleChange={this.handleChange}/>
            <Appendings handleCheck={this.handleCheck} handleChange={this.handleChange}/>
            <Date handleChange={this.handleChange}/> */}

            <hr />

            <input
              type="submit"
              className="submit-button"
              value="Générer PDF"
            />
          </form>
        </div>
      </div>
    );
  }
}
