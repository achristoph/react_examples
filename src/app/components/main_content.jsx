import React from 'react';
import SideBar from './sidebar';
import ArrayHelper from '../lib/helper';

function filterByCategory(category, data) {
    if (category === "1") {
        return data[0].products;
    }
    else if (category === "2") {
        return data[1].products;
    } else {
        return data.reduce((acc, cur) => acc.concat(cur.products), []).unique();
    }
}

const MainContent = (props) => {
    if (props.data) {
        ArrayHelper();
        let i = 0;
        let products = [];
        products = filterByCategory(props.params.category, props.data)
            .sortBy(props.params.sort).map((p) => {
                return (
                    <li key={p.name}>
                        <div className="product">
                            <img src={`../../../images/products/${p.image}`} width="80" height="80" />
                            <div>{p.name}</div>
                            <div>{`Price............. ${p.price}`}</div>
                        </div>
                    </li>
                )
            });
        return (
            <main>
                <article className="content">
                    <ul className="grid">
                        {products}
                    </ul>
                </article>
                <SideBar />
            </main >
        );
    }
}
export default MainContent;
