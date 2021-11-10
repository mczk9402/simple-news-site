import { Header } from "src/components/Header";
import styles from "./index.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default MainLayout;
