import AdminLayout from "../../adminLayout";
import Employees from "@/components/Employees/Employees";

export default async function EmployeesPage() {
  return (
    <AdminLayout>
      <Employees />
    </AdminLayout>
  );
}
