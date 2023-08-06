import { checkIsTokenValid } from "@/app/actions";
import AdminLayout from "../../adminLayout";
import Employees from "@/components/Employees/Employees";

export default async function EmployeesPage() {
  await checkIsTokenValid();

  return (
    <AdminLayout>
      <Employees />
    </AdminLayout>
  );
}
