/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type {
  ApiGameQuery,
  ApiGuessCommentParam,
  ApiGuessCommentQuery,
  ApiGuessDelete,
  ApiGuessDetailParams,
  ApiGuessQuery,
  ApiGuessStakeDetailParams,
  ApiGuessStakeQuery,
  ApiGuessSubmit,
  ApiGuessTotalParam,
  ApiTeamQuery,
  ApiUserNoticeQuery,
  AwsUploadParam,
  BaseRestApiConf,
  BaseRestApiGuessCommentPage,
  BaseRestApiGuessPage,
  BaseRestApiGuessStakeTotal,
  BaseRestApiMatchEvent,
  BaseRestGameGuessPage,
  BaseRestGameGuessStat,
  BaseRestListApiCoinPage,
  BaseRestListApiGameContestPage,
  BaseRestListDataBanner,
  BaseRestListGameMatchTotal,
  BaseRestListUserGameGuessTran,
  BaseRestLoginApply,
  BaseRestLoginUser,
  BaseRestMapStringString,
  BaseRestObject,
  BaseRestUploadLog,
  BaseRestUserBase,
  BaseRestUserFriendStat,
  BaseRestUserPoint,
  GameContestPageListParams,
  GameGuessApply,
  GameGuessDetailParams,
  GameGuessQuery,
  GameGuessStatParams,
  GameGuessTotalParam,
  GameGuessTranParams,
  GetApiMatchEventParams,
  LoginSubmit,
  PageRestApiGamePage,
  PageRestApiGuessCommentPage,
  PageRestApiGuessPage,
  PageRestApiGuessStakePage,
  PageRestApiTeamPage,
  PageRestGameGuessPage,
  PageRestUserFriendPage,
  PageRestUserHistory,
  PageRestUserNotice,
  PageRestUserPointHistory,
  UserBaseUpdate,
  UserFriendQuery,
  UserHistoryQuery,
  UserLoginApplyParams,
  UserPointHistoryQuery,
} from "./model";
import { axiosInstance } from "../utils/axios";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary 查询用户积分历史
 */
export const queryUserPointHistory = (
  userPointHistoryQuery: UserPointHistoryQuery,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<PageRestUserPointHistory>(
    {
      url: `/gateway/api/point/history/query`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: userPointHistoryQuery,
    },
    options,
  );
};

/**
 * 最好做搜索下拉分页
 * @summary 游戏战队查询[管理员]
 */
export const apiTeamPageQuery = (
  apiTeamQuery: ApiTeamQuery,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<PageRestApiTeamPage>(
    {
      url: `/gateway/api/game/team/query`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: apiTeamQuery,
    },
    options,
  );
};

/**
 * 默认结果按时间倒序返回，排序字段：createTime
 * @summary 游戏列表查询[非登录]
 */
export const apiGameQuery = (
  apiGameQuery: ApiGameQuery,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<PageRestApiGamePage>(
    {
      url: `/gateway/api/game/query`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: apiGameQuery,
    },
    options,
  );
};

/**
 * @summary 游戏竞猜汇总
 */
export const apiGuessTotal = (
  apiGuessTotalParam: ApiGuessTotalParam,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestListGameMatchTotal>(
    {
      url: `/gateway/api/game/guess/total`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: apiGuessTotalParam,
    },
    options,
  );
};

/**
 * @summary 游戏竞猜提交[管理员]
 */
export const apiGuessSubmit = (
  apiGuessSubmit: ApiGuessSubmit,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/api/game/guess/submit`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: apiGuessSubmit,
    },
    options,
  );
};

/**
 * @summary 游戏竞猜押注列表[非登录]
 */
export const queryApiGuessStakePage = (
  apiGuessStakeQuery: ApiGuessStakeQuery,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<PageRestApiGuessStakePage>(
    {
      url: `/gateway/api/game/guess/stake/page`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: apiGuessStakeQuery,
    },
    options,
  );
};

/**
 * @summary 游戏竞猜列表[非登录]
 */
export const apiGuessQuery = (
  apiGuessQuery: ApiGuessQuery,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<PageRestApiGuessPage>(
    {
      url: `/gateway/api/game/guess/query`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: apiGuessQuery,
    },
    options,
  );
};

/**
 * 单个用户每小时最多只能评论10次
 * @summary 游戏竞猜评论提交
 */
export const guessCommenSave = (
  apiGuessCommentParam: ApiGuessCommentParam,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestApiGuessCommentPage>(
    {
      url: `/gateway/api/game/guess/comment/submit`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: apiGuessCommentParam,
    },
    options,
  );
};

/**
 * 默认结果按时间倒序返回，排序字段：createTime
 * @summary 游戏竞猜评论查询[非登录]
 */
export const guessCommentQuery = (
  apiGuessCommentQuery: ApiGuessCommentQuery,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<PageRestApiGuessCommentPage>(
    {
      url: `/gateway/api/game/guess/comment/query`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: apiGuessCommentQuery,
    },
    options,
  );
};

/**
 * @summary 用户基本信息更新
 */
export const updateUserBase = (
  userBaseUpdate: UserBaseUpdate,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestLoginUser>(
    {
      url: `/gateway/api/client/user/update`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: userBaseUpdate,
    },
    options,
  );
};

/**
 * @summary 用户好友查询
 */
export const userFriendQuery = (
  userFriendQuery: UserFriendQuery,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<PageRestUserFriendPage>(
    {
      url: `/gateway/api/client/user/friend/query`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: userFriendQuery,
    },
    options,
  );
};

/**
 * @summary 通知消息查询
 */
export const userNoticeQuery = (
  apiUserNoticeQuery: ApiUserNoticeQuery,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<PageRestUserNotice>(
    {
      url: `/gateway/api/client/notice/query`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: apiUserNoticeQuery,
    },
    options,
  );
};

/**
 * 标记通知消息为已读状态，如果传[]，则将所有消息标记为已读
 * @summary 通知消息已读
 */
export const userNoticeMark = (
  userNoticeMarkBody: number[],
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/api/client/notice/mark`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: userNoticeMarkBody,
    },
    options,
  );
};

/**
 * 将签名信息和账户信息通过此接口提交登录，返回登录凭证
 * @summary 用户登录提交[非登录]
 */
export const userLoginSubmit = (
  loginSubmit: LoginSubmit,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestLoginUser>(
    {
      url: `/gateway/api/client/login/submit`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: loginSubmit,
    },
    options,
  );
};

/**
 * 默认按创建时间倒序排序
 * @summary 用户历史流水查询
 */
export const userHistoryQuery = (
  userHistoryQuery: UserHistoryQuery,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<PageRestUserHistory>(
    {
      url: `/gateway/api/client/history/query`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: userHistoryQuery,
    },
    options,
  );
};

/**
 * @summary 游戏竞猜参与汇总
 */
export const gameGuessTotal = (
  gameGuessTotalParam: GameGuessTotalParam,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestListGameMatchTotal>(
    {
      url: `/gateway/api/client/game/total`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gameGuessTotalParam,
    },
    options,
  );
};

/**
 * @summary 游戏竞猜参与查询
 */
export const gameGuessQuery = (
  gameGuessQuery: GameGuessQuery,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<PageRestGameGuessPage>(
    {
      url: `/gateway/api/client/game/query`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gameGuessQuery,
    },
    options,
  );
};

/**
 * 即押注或加注
 * @summary 游戏竞猜申请
 */
export const gameGuessApply = (
  gameGuessApply: GameGuessApply,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/api/client/game/apply`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gameGuessApply,
    },
    options,
  );
};

/**
 * @summary 文件上传申请
 */
export const uploadApply = (
  awsUploadParam: AwsUploadParam,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestUploadLog>(
    {
      url: `/gateway/api/block/upload/apply`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: awsUploadParam,
    },
    options,
  );
};

/**
 * @summary 测试连接性
 */
export const testDo = (options?: SecondParameter<typeof axiosInstance>) => {
  return axiosInstance<BaseRestMapStringString>(
    { url: `/gateway/api/test/do`, method: "GET" },
    options,
  );
};

/**
 * @summary 获取用户积分账户
 */
export const getUserPoint = (
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestUserPoint>(
    { url: `/gateway/api/point/user/get`, method: "GET" },
    options,
  );
};

/**
 * @summary 游戏比赛事件[非登录]
 */
export const getApiMatchEvent = (
  params: GetApiMatchEventParams,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestApiMatchEvent>(
    { url: `/gateway/api/game/match/event`, method: "GET", params },
    options,
  );
};

/**
 * 参数为游戏质押Id
 * @summary 游戏竞猜押注汇总[非登录]
 */
export const apiGuessStakeDetail = (
  params: ApiGuessStakeDetailParams,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestApiGuessStakeTotal>(
    { url: `/gateway/api/game/guess/stake/total`, method: "GET", params },
    options,
  );
};

/**
 * @summary 游戏竞猜明细[非登录]
 */
export const apiGuessDetail = (
  params: ApiGuessDetailParams,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestApiGuessPage>(
    { url: `/gateway/api/game/guess/detail`, method: "GET", params },
    options,
  );
};

/**
 * 用于管理员创建比赛
 * @summary 比赛竞猜列表获取[管理员]
 */
export const gameContestPageList = (
  params: GameContestPageListParams,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestListApiGameContestPage>(
    { url: `/gateway/api/game/guess/contest/list`, method: "GET", params },
    options,
  );
};

/**
 * @summary 获取当前启用的Banner[非登录]
 */
export const getEnableDataBanner = (
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestListDataBanner>(
    { url: `/gateway/api/data/banner/get`, method: "GET" },
    options,
  );
};

/**
 * @summary 用户基本信息获取
 */
export const getUserBase = (
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestUserBase>(
    { url: `/gateway/api/client/user/get`, method: "GET" },
    options,
  );
};

/**
 * @summary 用户好友统计
 */
export const userFriendStat = (
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestUserFriendStat>(
    { url: `/gateway/api/client/user/friend/stat`, method: "GET" },
    options,
  );
};

/**
 * 用户登录前通过此接口获取签名信息
 * @summary 用户登录申请[非登录]
 */
export const userLoginApply = (
  params: UserLoginApplyParams,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestLoginApply>(
    { url: `/gateway/api/client/login/apply`, method: "GET", params },
    options,
  );
};

/**
 * @summary 游戏竞猜转账列表
 */
export const gameGuessTran = (
  params: GameGuessTranParams,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestListUserGameGuessTran>(
    { url: `/gateway/api/client/game/tran`, method: "GET", params },
    options,
  );
};

/**
 * 最近七天统计
 * @summary 游戏竞猜统计
 */
export const gameGuessStat = (
  params: GameGuessStatParams,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestGameGuessStat>(
    { url: `/gateway/api/client/game/stat`, method: "GET", params },
    options,
  );
};

/**
 * @summary 游戏竞猜参与明细
 */
export const gameGuessDetail = (
  params: GameGuessDetailParams,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestGameGuessPage>(
    { url: `/gateway/api/client/game/detail`, method: "GET", params },
    options,
  );
};

/**
 * @summary 系统配置获取[非登录]
 */
export const getApiConfig = (
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestApiConf>(
    { url: `/gateway/api/block/conf/get`, method: "GET" },
    options,
  );
};

/**
 * @summary 币种列表获取
 */
export const getBlockCoinList = (
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestListApiCoinPage>(
    { url: `/gateway/api/block/coin/list`, method: "GET" },
    options,
  );
};

/**
 * @summary 游戏竞猜删除[管理员]
 */
export const apiGuessDelete = (
  apiGuessDelete: ApiGuessDelete,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<BaseRestObject>(
    {
      url: `/gateway/api/game/guess/delete`,
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      data: apiGuessDelete,
    },
    options,
  );
};

export type QueryUserPointHistoryResult = NonNullable<
  Awaited<ReturnType<typeof queryUserPointHistory>>
>;
export type ApiTeamPageQueryResult = NonNullable<
  Awaited<ReturnType<typeof apiTeamPageQuery>>
>;
export type ApiGameQueryResult = NonNullable<
  Awaited<ReturnType<typeof apiGameQuery>>
>;
export type ApiGuessTotalResult = NonNullable<
  Awaited<ReturnType<typeof apiGuessTotal>>
>;
export type ApiGuessSubmitResult = NonNullable<
  Awaited<ReturnType<typeof apiGuessSubmit>>
>;
export type QueryApiGuessStakePageResult = NonNullable<
  Awaited<ReturnType<typeof queryApiGuessStakePage>>
>;
export type ApiGuessQueryResult = NonNullable<
  Awaited<ReturnType<typeof apiGuessQuery>>
>;
export type GuessCommenSaveResult = NonNullable<
  Awaited<ReturnType<typeof guessCommenSave>>
>;
export type GuessCommentQueryResult = NonNullable<
  Awaited<ReturnType<typeof guessCommentQuery>>
>;
export type UpdateUserBaseResult = NonNullable<
  Awaited<ReturnType<typeof updateUserBase>>
>;
export type UserFriendQueryResult = NonNullable<
  Awaited<ReturnType<typeof userFriendQuery>>
>;
export type UserNoticeQueryResult = NonNullable<
  Awaited<ReturnType<typeof userNoticeQuery>>
>;
export type UserNoticeMarkResult = NonNullable<
  Awaited<ReturnType<typeof userNoticeMark>>
>;
export type UserLoginSubmitResult = NonNullable<
  Awaited<ReturnType<typeof userLoginSubmit>>
>;
export type UserHistoryQueryResult = NonNullable<
  Awaited<ReturnType<typeof userHistoryQuery>>
>;
export type GameGuessTotalResult = NonNullable<
  Awaited<ReturnType<typeof gameGuessTotal>>
>;
export type GameGuessQueryResult = NonNullable<
  Awaited<ReturnType<typeof gameGuessQuery>>
>;
export type GameGuessApplyResult = NonNullable<
  Awaited<ReturnType<typeof gameGuessApply>>
>;
export type UploadApplyResult = NonNullable<
  Awaited<ReturnType<typeof uploadApply>>
>;
export type TestDoResult = NonNullable<Awaited<ReturnType<typeof testDo>>>;
export type GetUserPointResult = NonNullable<
  Awaited<ReturnType<typeof getUserPoint>>
>;
export type GetApiMatchEventResult = NonNullable<
  Awaited<ReturnType<typeof getApiMatchEvent>>
>;
export type ApiGuessStakeDetailResult = NonNullable<
  Awaited<ReturnType<typeof apiGuessStakeDetail>>
>;
export type ApiGuessDetailResult = NonNullable<
  Awaited<ReturnType<typeof apiGuessDetail>>
>;
export type GameContestPageListResult = NonNullable<
  Awaited<ReturnType<typeof gameContestPageList>>
>;
export type GetEnableDataBannerResult = NonNullable<
  Awaited<ReturnType<typeof getEnableDataBanner>>
>;
export type GetUserBaseResult = NonNullable<
  Awaited<ReturnType<typeof getUserBase>>
>;
export type UserFriendStatResult = NonNullable<
  Awaited<ReturnType<typeof userFriendStat>>
>;
export type UserLoginApplyResult = NonNullable<
  Awaited<ReturnType<typeof userLoginApply>>
>;
export type GameGuessTranResult = NonNullable<
  Awaited<ReturnType<typeof gameGuessTran>>
>;
export type GameGuessStatResult = NonNullable<
  Awaited<ReturnType<typeof gameGuessStat>>
>;
export type GameGuessDetailResult = NonNullable<
  Awaited<ReturnType<typeof gameGuessDetail>>
>;
export type GetApiConfigResult = NonNullable<
  Awaited<ReturnType<typeof getApiConfig>>
>;
export type GetBlockCoinListResult = NonNullable<
  Awaited<ReturnType<typeof getBlockCoinList>>
>;
export type ApiGuessDeleteResult = NonNullable<
  Awaited<ReturnType<typeof apiGuessDelete>>
>;
