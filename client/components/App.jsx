import React from 'react';

const App = (props) => {
    return (
        <div className="mdl-layout__container">
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
                <header className="mdl-layout__header mdl-color--light-blue-500 mdl-layout--small-screen-only">
                    <div role="button" tabIndex="0" className="mdl-layout__drawer-button wf-header__menu-btn">
                        <i className="material-icons">menu</i>
                    </div>
                    <div className="mdl-layout__header-row"></div>
                </header>
                <div className="mdl-layout__drawer mdl-color--white">
                  <span className="mdl-layout-title wf-nav-drawer__title">
                  </span>
                  <nav className="mdl-navigation wf-nav-drawer__container">
                  </nav>
                </div>
                <main className="mdl-layout__content">
                  {props.children}
                </main>
            </div>
        </div>
    )
};

export default App;
