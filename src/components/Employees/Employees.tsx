"use client";
import { fetchAuthData } from "@/app/actions";
import adminStyles from "@/app/admin/admin.module.css";
import { useEffect, useState } from "react";
import Drawer from "../Drawer/Drawer";
import EditEmployeeForm, {
  EMPLOYEE_ROLES,
} from "../EditEmployeeForm/EditEmployeeForm";

interface EmployeeType {
  _id: string;
  email: string;
  name: string;
  role: EMPLOYEE_ROLES;
  createdAt: Date;
}

export default function Employees() {
  const [employees, setEmployees] = useState<EmployeeType[] | []>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Omit<
    EmployeeType,
    "createdAt"
  > | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (!isDrawerOpen) {
        setIsLoading(true);
        const employeesData = await fetchAuthData({
          url: `${process.env.NEXT_PUBLIC_API_URL}/employees`,
          method: "GET",
        });
        setEmployees(employeesData);

        setIsLoading(false);
      }
    })();
  }, [isDrawerOpen]);

  if (isLoading) return <div>Loading...</div>;

  const handleClickEdit = (employee: EmployeeType) => {
    setSelectedEmployee(employee);
    return setIsDrawerOpen(true);
  };

  return (
    <div>
      {selectedEmployee && (
        <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen}>
          <EditEmployeeForm
            setIsOpen={setIsDrawerOpen}
            initialFormData={{
              name: selectedEmployee?.name,
              email: selectedEmployee.email,
              role: selectedEmployee.role,
              _id: selectedEmployee._id,
            }}
          />
        </Drawer>
      )}
      <table className={adminStyles.table}>
        <tbody>
          <tr className={adminStyles.table__row}>
            <th className={adminStyles.table__header}>User email</th>
            <th className={adminStyles.table__header}>Name</th>
            <th className={adminStyles.table__header}>Action</th>
          </tr>
          {employees &&
            employees.map((employee: EmployeeType, index: number) => {
              return (
                <tr key={index} className={adminStyles.table__row}>
                  <td className={adminStyles.table__data}>{employee.email}</td>
                  <td className={adminStyles.table__data}>{employee.name}</td>
                  <td className={adminStyles.table__data}>
                    <button
                      className={adminStyles.button}
                      onClick={() => handleClickEdit(employee)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
