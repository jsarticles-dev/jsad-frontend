import styles from "@/components/StatusTags/statusTag.module.css";

interface StatusTagProps {
  type: "error" | "pending" | "sent";
  children: React.ReactNode;
}

const StatusTag = ({ type, children }: StatusTagProps) => {
  return (
    <div className={`${styles.tag__container} ${styles[type]}`}>{children}</div>
  );
};

export default {
  error: () => {
    return <StatusTag type='error'>Error</StatusTag>;
  },
  pending: () => {
    return <StatusTag type='pending'>Pending</StatusTag>;
  },
  sent: () => {
    return <StatusTag type='sent'>Sent</StatusTag>;
  },
};
