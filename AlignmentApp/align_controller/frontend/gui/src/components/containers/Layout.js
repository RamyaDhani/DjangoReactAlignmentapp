import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import  { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
const { Header, Content, Footer } = Layout;
class CustomLayout extends React.Component{
    render()
    {
      return (
            <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                {
                  this.props.isAuthenticated ?
                  <Menu.Item key="4">Logout</Menu.Item>
                  :
                  <Menu.Item key="3"><Link to="/Login">Login</Link></Menu.Item>
                }
                <Menu.Item key="1"><Link to="/Recent">Search</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/History">Search History</Link></Menu.Item>
                
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to="/Recent">Home</Link></Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content">{this.props.children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}></Footer>
          </Layout>
        );
    }
  };

const mapDispatchToProps = dispatch =>{
  return{
      logout: () => dispatch(actions.logout())
  }
}
export default connect(null, mapDispatchToProps)(CustomLayout);
  