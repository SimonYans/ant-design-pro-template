// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentRoleItem = {
    id?: string;
    active?: string;
    name?: string;
  };

  type CurrentUser = {
    id?: string;
    account?: string;
    phone?: string;
    name?: string;
    companyName?: string;
    companyShortName?: string;
    lastLoginTime?: string;
    access?: string;
  };

  type UserInfo = {
    roles: CurrentRoleItem[];
    user: CurrentUser;
    info?: object;
  };

  type LoginResult = {
    errorCode?: string;
    message?: string;
    result?: string;
    success?: boolean;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type GetTokenByCode = {
    code?: number;
    data?: string;
    msg?: string;
  };

  type LoginParams = {
    phone?: string;
    pwd?: string;
    vercode?: boolean;
    key?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
