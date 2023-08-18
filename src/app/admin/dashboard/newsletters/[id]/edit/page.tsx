import AdminLayout from "@/app/admin/adminLayout";
import NewsletterEditForm from "@/components/NewsletterEditForm/NewsletterEditForm";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <AdminLayout>
      <NewsletterEditForm newsletterId={params.id} />
    </AdminLayout>
  );
}
