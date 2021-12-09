import { LockOutlined, SafetyOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Col, message, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import { ProFormText, LoginForm } from '@ant-design/pro-form';
import { useIntl, history, FormattedMessage, useModel } from 'umi';
import { login } from '@/services/login';
import { getGuid, getImageUrl } from '@/utils/index';

import styles from './index.less';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const [vifCodeKey, setVifCodeKey] = useState('');
  const [vifCodeUrl, setVifCodeUrl] = useState('');
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const { initialState, setInitialState } = useModel('@@initialState');

  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      await setInitialState((s) => ({
        ...s,
        currentUser: userInfo.user,
        currentRoles: userInfo.roles,
      }));
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // 登录
      const res = await login({ ...values, key: vifCodeKey });
      if (res.success) {
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: '登录成功！',
        });
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        /** 此方法会跳转到 redirect 参数所在的位置 */
        if (!history) return;
        const { query } = history.location;
        const { redirect } = query as { redirect: string };
        history.push(redirect || '/');
        return;
      }
      // 如果失败去设置用户错误信息
      setUserLoginState(res);
      setVifCodeKey(getGuid());
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: '登录失败，请重试！',
      });
      message.error(defaultLoginFailureMessage);
      setVifCodeKey(getGuid());
    }
  };

  useEffect(() => {
    setVifCodeKey(getGuid());
  }, []);

  useEffect(() => {
    const url = `/user/sendImgVifCode?key=${vifCodeKey}`;
    setVifCodeUrl(getImageUrl(url));
  }, [vifCodeKey]);

  const { success } = userLoginState;

  return (
    <div className={styles.container}>
      <div className={styles.containerBg} />
      <div className={styles.content}>
        <LoginForm
          initialValues={{}}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          <div className={styles.title}>
            <img alt="logo" src="/logo.svg" /> 嬴彻运力平台
          </div>
          {success && (
            <LoginMessage
              content={intl.formatMessage({
                id: 'pages.login.accountLogin.errorMessage',
                defaultMessage: '账户或密码错误',
              })}
            />
          )}
          <>
            <ProFormText
              name="phone"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon} />,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.username.placeholder',
                defaultMessage: '用户名/手机号',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.username.required"
                      defaultMessage="请输入用户名/手机号!"
                    />
                  ),
                },
              ]}
            />
            <ProFormText.Password
              name="pwd"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.password.placeholder',
                defaultMessage: '密码',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.password.required"
                      defaultMessage="请输入密码！"
                    />
                  ),
                },
              ]}
            />
            <Row>
              <Col span={14}>
                <ProFormText
                  name="vercode"
                  fieldProps={{
                    size: 'large',
                    prefix: <SafetyOutlined />,
                  }}
                  placeholder="图形验证码"
                  rules={[
                    {
                      required: true,
                      message: '请输入图形验证码!',
                    },
                  ]}
                />
              </Col>
              <Col span={10}>
                <img
                  className={styles.codeImg}
                  src={vifCodeUrl}
                  onClick={() => setVifCodeKey(getGuid())}
                />
              </Col>
            </Row>
          </>
        </LoginForm>
      </div>
    </div>
  );
};

export default Login;
