import React from 'react';

const HeaderLink = ({headerName}) => (
    <div>
        {headerName}
    </div>
)

const SidebarNavigation = ({headers, jumpToHeader, activeHeader}) => {
    if (!headers || headers.length === 0) {
        return null;
    }
    
    return (
        <div>
            {headers.map((name) => <HeaderLink headerName={name}/>)}
        </div>
    )
}

export default SidebarNavigation;