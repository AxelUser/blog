import React from 'react';

const HeaderLink = ({headerName}) => (
    <div>
        {headerName}
    </div>
)

const SidebarNavigation = ({headers, jumpToHeader, activeHeader}) => (
    <div>
        {headers.map((name) => <HeaderLink headerName={name}/>)}
    </div>
)

export default SidebarNavigation;