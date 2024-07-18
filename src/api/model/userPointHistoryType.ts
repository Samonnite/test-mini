/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */

/**
 * 积分类型
 */
export type UserPointHistoryType =
  (typeof UserPointHistoryType)[keyof typeof UserPointHistoryType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserPointHistoryType = {
  register: "register",
  login: "login",
  post: "post",
  invite: "invite",
  stake: "stake",
} as const;
