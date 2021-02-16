import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';

class ServiceModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
        
        }
       
    }

    render() {
        return (
            <div>
               
                <Modal                   
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered="true"
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <b> Car Modal </b>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="all-modal-popup">
                                                 
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-close-popup" >Close</button>
                        <button type="submit" className="btn btn-add-popup" >Save</button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}



export default ServiceModal;