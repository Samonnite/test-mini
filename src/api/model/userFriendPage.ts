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
 * 分页数据
 */
export interface UserFriendPage {
  /** 创建时间 */
  createTime?: string;
  /** 朋友地址 */
  faddr?: string;
  /** 奖励积分 */
  point?: number;
  /** 是否奖励 */
  status?: boolean;
  /** 用户UID */
  uid?: number;
  /** 更新时间 */
  updateTime?: string;
}
