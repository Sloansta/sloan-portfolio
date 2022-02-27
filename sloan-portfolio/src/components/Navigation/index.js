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
        <header>
            <h2>
                <a href="/">
                    Sloan Boyce
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {pages.map((page) => (
                        <li key={page} onClick={() => setCurrentPage(page)}>
                            {page}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;