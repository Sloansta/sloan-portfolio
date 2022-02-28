import React, { useEffect } from 'react';

function Nav(props) {

    const {
        pages = ['About', 'Projects', 'Contact'],
        currentPage,
        setCurrentPage
    } = props;

    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);

    return (
        <header className="nav-container">
            <h2>
                Sloan Boyce
            </h2>
            <nav className="container button-container">
                <ul className="row">
                    {pages.map((page) => (
                        <li key={page} onClick={() => setCurrentPage(page)} className="col-sm">
                            {page}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;