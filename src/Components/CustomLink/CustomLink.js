import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink=({ children, to, ...props }) =>{
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved?.pathname, end: true });
  
    return (
      <div>
            <Link
                className='border-rose-800 text-center'
          style={{paddingBottom:'8px', paddingLeft:'8px' ,paddingRight:"8px", borderBottom: match ? "3px solid #F91944" : "none" ,}}
          to={to}
          {...props}
        >
          {children}
        </Link>
     
      </div>
    );
  }

export default CustomLink;