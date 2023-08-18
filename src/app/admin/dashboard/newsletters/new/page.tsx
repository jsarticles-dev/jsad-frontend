import NewNewsletterForm from "@/components/NewNewsletterForm/NewNewsletterForm";
import AdminLayout from "../../../adminLayout";

export default async function NewNewsLetterPage() {
  return (
    <AdminLayout>
      <h2>New Newsletter</h2>
      <NewNewsletterForm />
    </AdminLayout>
  );
}
