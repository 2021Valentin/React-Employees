// import AppInfo from './components/app-info/app-info';
import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "John C.", salary: 800, increase: false, like: true, id: 1 },
                { name: "Alex M.", salary: 3000, increase: true, like: false, id: 2 },
                {name: "Carl W.", salary: 4000, increase: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxID = 4;
    }
    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id),
            }
        });
    }
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxID++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            if (newItem.name.length > 3 && newItem.salary.length > 2) {
                return {
                    data: newArr
                }
            } else {
                alert('Вы ввели неправильные данные!')
            }
        })
    }
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            // const index = data.findIndex(elem => elem.id === id);
            // const old = data[index];
            // const newItem = { ...old, increase: !old.increase};
            // const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            // return {
            //     data: newArray
            // }
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return (item);
            })
        }));
    }
    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        } 
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        });
    }
    onUpdateSearch = (term) => {
        this.setState({ term: term });
    }
    filterPost = (items, filter) => {
        switch (filter) {
            case 'promotion':
                return items.filter(item => item.like)
            case 'salary':
                return items.filter(item => item.salary > 1000)
            default:
                return items;
        }
    }
    onFilterSelect = (filter) => {
        this.setState({ filter: filter });
    }
    onChangeSalary = (id, salary) => {
            this.setState(({ data }) => ({
                data: data.map(item => {
                    if (item.id === id) {
                        console.log(salary);
                        return { ...item, salary: salary.replace(/\$/g, "")};
                    }
                    return (item);
                })
            }));
        }
    
    render() {
        const employees = this.state.data.length;
        const increase = this.state.data.filter(item => item.increase).length;
        
        const { data, term, filter } = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
        <div className="app">
                <AppInfo
                    employees={employees}
                    increase={increase} />
            <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
            </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.onChangeSalary} />
                <EmployeesAddForm
                onAdd={this.addItem}/>
        </div>
        );
    }
}

export default App;