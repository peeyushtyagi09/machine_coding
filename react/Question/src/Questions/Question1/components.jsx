function Employee({ id, name, department, role }) {
    return (
        <>
            <style>
                {`
                .employee-card {
                    border: 0;
                    border-radius: 12px;
                    box-shadow: 0 3px 20px 0 rgba(35,47,89,0.11), 0 1.5px 3px 0 rgba(60,72,120,0.08);
                    padding: 22px 28px;
                    margin: 16px 0;
                    background: linear-gradient(135deg, #f9fafd 75%, #e3ebfd 100%);
                    transition: transform 0.18s cubic-bezier(.23,1.11,.51,.94), box-shadow 0.15s;
                    cursor: pointer;
                }
                .employee-card:hover {
                    transform: translateY(-2px) scale(1.022);
                    box-shadow: 0 6px 30px 0 rgba(35,47,89,0.21), 0 1.5px 8px 0 rgba(60,72,120,0.14);
                    background: linear-gradient(135deg, #eef5ff 60%, #e3edff 100%);
                }
                .employee-card h3 {
                    margin: 0 0 8px 0;
                    font-size: 1.31rem;
                    color: #294382;
                    letter-spacing: 0.02em;
                    font-weight: 600;
                }
                .employee-info-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .employee-info-list li {
                    margin: 6px 0 0 0;
                    font-size: 0.99rem;
                    color: #354567;
                    line-height: 1.56;
                    display: flex;
                    align-items: center;
                }
                .employee-info-label {
                    font-weight: 600;
                    min-width: 106px;
                    color: #39496d;
                    display: inline-block;
                }
                `}
            </style>
            <div className="employee-card" tabIndex={0} aria-label={`Employee ${name}, ${department} department, ${role}`}>
                <h3>{name}</h3>
                <ul className="employee-info-list">
                    <li>
                        <span className="employee-info-label">ID:</span>
                        <span>{id}</span>
                    </li>
                    <li>
                        <span className="employee-info-label">Department:</span>
                        <span>{department}</span>
                    </li>
                    <li>
                        <span className="employee-info-label">Role:</span>
                        <span>{role}</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Employee;