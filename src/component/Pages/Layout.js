import SideBar from "../SideBar/Sidebar";

const Layout = (props) => {
  return (
    <>
      <div class="bg-light">
        <SideBar>
          <main className="w-75 mt-5 m-auto">{props.children}</main>
        </SideBar>
      </div>
    </>
  );
};
export default Layout;
