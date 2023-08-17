import AdminLayout from "@/app/admin/adminLayout";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <AdminLayout>
      <div>{params.id}</div>
    </AdminLayout>
  );
}
