import NewNewsletterForm from "@/components/NewNewsletterForm/NewNewsletterForm";
import AdminLayout from "../../../adminLayout";
import { checkIsTokenValid } from "@/app/actions";

export default async function NewNewsLetterPage() {
  await checkIsTokenValid();
  return (
    <AdminLayout>
      <h2>New Newsletter</h2>
      <NewNewsletterForm />
    </AdminLayout>
  );
}
