import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({ data }) => {
    const elements = data.map(item => {
        const { id, ...propsItem } = item;
        return (
            <EmployeesListItem key={id} {...propsItem} />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeesList;