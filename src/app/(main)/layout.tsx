import UserLayout from "@/layouts/UserLayout";

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <UserLayout>{children}</UserLayout>
);

export default MainLayout;
