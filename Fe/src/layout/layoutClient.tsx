import React from 'react'
import { Layout, Menu, theme, MenuProps } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const LayOutClt: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    type MenuItem = Required<MenuProps>['items'][number];

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
        } as MenuItem;
    }
    const items: MenuItem[] = [
        getItem('Home', '1'),
        getItem('Product', '2'),
        getItem('singup', '3'),
        getItem('singin', '4'),

    ];
    return (

        <Layout>

            <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
                <div
                    style={{
                        float: 'left',
                        width: 120,
                        height: 31,
                        margin: '16px 24px 16px 0',
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                >

                    <Menu.Item key={1}>
                        <Link to={"/"}>Home</Link>
                    </Menu.Item>
                    <Menu.Item key={2}>
                        <Link to={"/product"}>Product</Link>
                    </Menu.Item>
                    <Menu.Item key={3}>
                        <Link to={"/singup"}>singup</Link>
                    </Menu.Item>
                    <Menu.Item key={4}>
                        <Link to={"/singin"}>singin</Link>
                    </Menu.Item>

                </Menu>

            </Header>
            <Content className="site-layout" style={{ padding: '0 50px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                <div style={{ padding: 24, minHeight: 380, background: colorBgContainer }}><Outlet /></div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    )
}

export default LayOutClt