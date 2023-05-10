import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }
    filterValue = (e) => {
        const filter = e.currentTarget.getAttribute('data-toggle');
        this.setState({ filter });
        this.props.onUpdateFilter(filter);
    }
    render() {
        const buttonsData = [
            { name: 'all', label: 'Все сотрудники' },
            { name: 'promotion', label: 'Все сотрудники' },
            { name: 'salary', label: 'Все сотрудники' }
        ];
        const buttons = buttonsData.map(({name, label}) => {
            return (
            <button
                className="btn btn-light"
                type="button"
                key={name}>
                {label}
            </button>
            )
        });
        return (
        <div className="btn-group">
            {buttons}
            {/* <button
                className="btn btn-light"
                type="button"
                onClick={this.filterValue}
                data-toggle='all'>
                Все сотрудники
            </button>
            <button
                className="btn btn-outline-light"
                type="button"
                onClick={this.filterValue}
                data-toggle='promotion'>
                На повышение
            </button>
            <button
                className="btn btn-outline-light"
                type="button"
                onClick={this.filterValue}
                data-toggle='salary'>
                З/П больше 1000$
            </button> */}
        </div>
        );
    }  
     
};

export default AppFilter;