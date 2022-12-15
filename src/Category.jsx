import React from 'react';

const Category = (props) => {
    return(<>
        <a href={props.href} className={props.categoryClass}><div className="icon">{props.icon}</div> <h3>{props.categoryName}</h3></a>
    </>);
}

export default Category;