import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp, onChangeSalary, salary}) => {
    const elements = data.map(item => {
        const { id, ...propsItem } = item;
        return (
            <EmployeesListItem
                key={id}
                {...propsItem}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onChangeSalary={(e) => onChangeSalary(id, e.target.value) } />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};
export default EmployeesList;