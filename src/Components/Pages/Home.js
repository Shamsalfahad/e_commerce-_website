import React from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';

const Home = () => {
    const { collapseSidebar } = useProSidebar();
    return (
        <div>
            <h1>this is home</h1>
            <div style={{ display: 'flex', height: '100vh', backgroundColor: "blueviolet" }}>
    <Sidebar>
      <Menu>
        <Menu>
          <SubMenu  label="Charts">
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu  label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu  label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Menu>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
            </div>
    );
};

export default Home;