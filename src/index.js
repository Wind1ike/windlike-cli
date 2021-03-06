import dva from 'dva';
import './index.less';
import browserHistory from 'history/createBrowserHistory';
import 'ant-design-pro/dist/ant-design-pro.css';
import { Component } from 'react';
import { is } from 'immutable';

// 1. Initialize
const app = dva({
  history: browserHistory(),
});

Component.shouldComponentUpdate = (nextProps, nextState) => {
  return !(this.props === nextProps || is(this.props, nextProps)) ||
         !(this.state === nextState || is(this.state, nextState));
};

export default app;

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/demo').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
