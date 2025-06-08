
const AdminLayout = ({children}) => {
  return (
    <div className="container" >
      <h2>This is admin Panel</h2>
      {children}
    </div>
  );
};

export default AdminLayout;