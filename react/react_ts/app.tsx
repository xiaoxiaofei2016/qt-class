import * as React from 'react';
import { Header, About } from './src/components';
export const App: React.StatelessComponent<{}> = () => { // React.StatelessComponent为返回类型
  return (
    <div className="container-fluid">
      <Header />
      <About />
    </div>
  )
}