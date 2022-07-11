import AdminBreadcrumb from "../AdminBreadcrumb";
import AdminTopbar from "../AdminTopbar";
import style from "./style.module.css";

const AdminContentContainer = ({ title = "", breadcrumb = true, children }) => {
  return (
    <div className={`${style.contentContainer} d-flex flex-column`}>
      <AdminTopbar />
      <div className={`${style.headerContent} my-3`}>
        <h1 className={style.headerTitle}>{title}</h1>
        {breadcrumb && <AdminBreadcrumb />}
      </div>
      {children}
    </div>
  );
};

export default AdminContentContainer;
