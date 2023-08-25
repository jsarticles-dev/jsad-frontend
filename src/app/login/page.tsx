import LoginForm from "@/components/LoginForm/LoginForm";
import LoginLayout from "./loginLayout";
import styles from "@/app/login/login.module.css";

export default function LoginPage() {
  return (
    <LoginLayout>
      <div className={styles.login__container}>
        <LoginForm />
      </div>
    </LoginLayout>
  );
}
