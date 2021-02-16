import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { getOrder, getServiceName } from '../redux/orders/actions';
// import axios from 'axios'
import { FormGroup, Input } from 'reactstrap';
// import DatePicker from "../../assets/datePicker/datePicker";

const defaultValues = [
    { value: 0, text: 0, key: 1 },
    { value: 500, text: 500, key: 2 },
    { value: 1000, text: 1000, key: 3 },
    { value: 1500, text: 1500, key: 4 },
    { value: 2000, text: 2000, key: 5 },
    { value: 3000, text: 3000, key: 6 },
    { value: 4000, text: 4000, key: 7 },
    { value: 8000, text: 8000, key: 8 },
    { value: 10000, text: 10000, key: 9 },
    { value: 20000, text: 20000, key: 9 },
    { value: 40000, text: 40000, key: 9 },
];

const MIN_TITLE = { selected: true, disabled: true, text: 'Min Price' };
const MAX_TITLE = { selected: true, disabled: true, text: 'Max Price' };

class FilterPopUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loader: false,
            filter: [],
            checkedProvider: [],
            checkedItems: [],
            minData: [MIN_TITLE, ...defaultValues],
            maxData: [MAX_TITLE, ...defaultValues],
            startDate: "",
            filterDate: '',
            minValue: null,
            maxValue: null,
            Order: [],
            service_provider_id: ''
        }
        this.handleChangeBox = this.handleChangeBox.bind(this);
        this.handleServiceProvider = this.handleServiceProvider.bind(this);
        this.renderOptions = this.renderOptions.bind(this);

    }

    handleChange = e => {
        console.log(e);
        this.setState({ filterDate: e });
    };
    renderOptions(data) {
        return data.map((datum, index) => {
            // this allows us to indicate whether we are selecting or disabling
            const selected = datum.selected || false;
            const disabled = datum.disabled || false;

            return (
                <option key={index} value={datum.value} selected={selected} disabled={disabled}>
                    {datum.text}
                </option>
            );
        });
    }

    // Writing your function so does not require the binding in the constructor
    handleMinSelect = event => {
        const value = event.target.value;
        const newMaxValues = [];

        defaultValues.forEach(datum => {
            // I'm under the impression that reactstrap will change the value to string
            if (datum.value >= Number.parseInt(value, 10)) {
                newMaxValues.push(datum);
            }
        });

        this.setState({
            maxData: [MAX_TITLE, ...newMaxValues],
            minValue: value
        });
    };

    handleMaxSelect = event => {
        const value = event.target.value;
        this.setState({ maxValue: value });
    };

    componentDidMount() {
        // this.getFilterData();
        // this.getOrderData()
    }


  

    // getFilterData(pageNumber) {
    //     this.setState({
    //         loader: true
    //     })
    //     this.props.getServiceName(pageNumber)
    //         .then(res => {
    //             let filterList = res.response.data.data
    //                 .map(pl => {

    //                     return {

    //                         services_id: pl.service_name,
    //                         status: false,
    //                     }
    //                 });
    //             console.log(filterList)

    //             this.setState({
    //                 filter: filterList || [],
    //                 loader: false
    //             })
    //         })
    //         .catch(err => {
    //             this.setState({
    //                 filter: [],
    //                 loader: false
    //             })
    //         })
    // }

    handleChangeDate = (e) => {
        this.setState({ startDate: e.target.value })
    }
    handleChangeBox(event) {
        const item = event.target.value;
        let isChecked = event.target.checked;
        let tempState = this.state.filter
        let itemIndex = tempState.findIndex(i => i.services_id === item)
        tempState[itemIndex].status = isChecked

        this.setState({
            checkedItems: tempState
        })

        // this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }

    handleServiceProvider(event) {
        const item = event.target.value;
        let isChecked = event.target.checked;
        let providerState = this.state.Order
        let providerIndex = providerState.findIndex(l => l.service_provider_id === item);
        providerState[providerIndex].status = isChecked

        this.setState({
            checkedProvider: providerState
        })
    }
    onSave = () => {
        this.setState({
            loader: true
        })

        let selectedService = [
            ...this.state.filter.filter(l => l.status),

        ].map(item => item.services_id)

        let selectedProvider = [
            ...this.state.Order.filter(d => d.status),
        ].map(item => item.service_provider_id);

        let value = selectedService.toString();
        let providerValue = selectedProvider.toString();

        let data = {
            "search": value || providerValue,
            "date": this.state.startDate,
            "month": "",
            "from_date": "",
            "to_date": "",
            "min_value": this.state.minValue,
            "max_value": this.state.maxValue,
            "service_provider_id": providerValue
        }
        this.props.onSave(data)
        setTimeout(() => {
            this.setState({
                loader: false
            })
        }, 3000);
    }


    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="xl"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered="true"
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <b>Filter</b>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="tabordion">
                            {/* <Loader status={this.state.loader}></Loader> */}
                            <section id="section1">
                                <input type="radio" name="sections" id="option1" defaultChecked />
                                <label htmlFor="option1">Service</label>
                                <article>
                                    {
                                        this.state.filter.map((data, index) => {

                                            return (
                                                <>
                                                    <div className="row">
                                                        <div className="col-md-8">
                                                            <p kay={index}>{data.services_id}</p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <input className='ground_mound_list' type="checkbox" value={data.services_id} onChange={this.handleChangeBox} checked={data.status} />
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }


                                </article>
                            </section>
                            <section id="section2">
                                <input type="radio" name="sections" id="option2" />
                                <label htmlFor="option2">Service Provider</label>
                                <article>
                                    {
                                        this.state.Order.map((data, index) => {

                                            return (
                                                <div className="row" key={index}>
                                                    <div className="col-md-8">
                                                        <p kay={index}>{data.service_provider_id}</p>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input className='ground_mound_list' type="checkbox" value={data.service_provider_id} onChange={this.handleServiceProvider} checked={data.status} />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }


                                </article>
                            </section>
                            <section id="section4">
                                <input type="radio" name="sections" id="option4" />
                                <label htmlFor="option4">Order Date</label>
                                <article>
                                    <input type="date" className="form-control" name="startDate" onChange={this.handleChangeDate} value={this.state.startDate} />
                                    {/* <DatePicker
                                        name="startDate"
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                        dateFormat="dd/mm/yyyy"
                                        value={this.state.startDate}

                                    /> */}
                                    {/* <input type="date" /> */}
                                </article>
                            </section>
                            <section id="section3">
                                <input type="radio" name="sections" id="option3" />
                                <label htmlFor="option3">Total Amount</label>
                                <article>
                                    <FormGroup>
                                        <Input
                                            type="select"
                                            name="select3"
                                            id="select3"
                                            value={this.state.minValue}
                                            onChange={this.handleMinSelect}>
                                            {this.renderOptions(this.state.minData)}
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input
                                            type="select"
                                            name="select4"
                                            id="select4"
                                            value={this.state.maxValue}
                                            onChange={this.handleMaxSelect}>
                                            {this.renderOptions(this.state.maxData)}
                                        </Input>
                                    </FormGroup>

                                    {/* <div className="row">
                                        <div className="col-md-6">
                                            <label>Min Price</label>
                                            <input type="number" name="minPrice" className="form-control" value="1000" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Max Price</label>
                                            <input type="number" name="minPrice" className="form-control" value="20000" />
                                        </div>
                                    </div> */}
                                </article>
                            </section>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn-fill btn btn-info btn btn-default" onClick={this.props.onCancel}>Close</button>
                        <button type="submit" className="btn-fill btn btn-success btn btn-default" onClick={this.onSave}>Save</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}


export default FilterPopUp
