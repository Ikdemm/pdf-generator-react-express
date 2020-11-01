import React from 'react';

const ClaimSubForm = ({ handleChange }) => (
    <div>
        <div className="formheader-container">
            <div className="section-formheader-container">
                <h3 className="section-header">Revendication de priorité</h3>
            </div>
            <div className="collapse-button-container">
                <a>
                    <h3 className="section-header collapse-button">+</h3>
                </a>
            </div>            
        </div>

        <div className="subform-container">
            <p className="form-paragraph">Selon la convention de l’Union de Paris</p>
            <div className="form-row">
                <div className="text-input">
                    <label>Pays</label>
                    <input type="text" className="form-control" id="country" name="country" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>Date du premier dépôt</label>
                    <input type="date" className="form-control" id="depositDate" name="depositDate" onChange={handleChange}/>
                </div>
            </div>
            <p className="form-paragraph">Si une priorité partielle est revendiquée, il faut préciser sur quels produits et/ou services elle porte
            ou produire un document de priorité.</p>
        </div>
    </div>
)

export default ClaimSubForm;