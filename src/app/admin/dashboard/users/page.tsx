import { checkIsTokenValid, fetchAuthData } from "@/app/actions";
import AdminLayout from "../../adminLayout";
import adminStyles from "@/app/admin/admin.module.css";
import dayjs from "dayjs";
import UserActionButtons from "@/components/UsersActions/UserActionButtons";

type UserType = {
  _id: string;
  email: string;
  createdAt: Date;
};

export default async function UsersPage() {
  await checkIsTokenValid();

  const users = await fetchAuthData({
    url: `${process.env.NEXT_PUBLIC_API_URL}/users`,
    method: "GET",
  });

  return (
    <AdminLayout>
      <table className={adminStyles.table}>
        <tbody>
          <tr className={adminStyles.table__row}>
            <th className={adminStyles.table__header}>Join Date</th>
            <th className={adminStyles.table__header}>User email</th>
            <th className={adminStyles.table__header}>Action</th>
          </tr>
          {users &&
            users.map((user: UserType, index: number) => {
              return (
                <tr key={index} className={adminStyles.table__row}>
                  <td className={adminStyles.table__data}>{`${dayjs(
                    user.createdAt
                  ).format("DD.MM.YYYY")}`}</td>
                  <td className={adminStyles.table__data}>{user.email}</td>
                  <td className={adminStyles.table__data}>
                    <UserActionButtons userId={user._id}  />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </AdminLayout>
  );
}
