import React from 'react';
import { Sidebar } from '.';

export default ({ children }) =>
  <div className="Layout">
    <Sidebar />
    <main className="Layout-main">
      {children}
    </main>
  </div>
;
