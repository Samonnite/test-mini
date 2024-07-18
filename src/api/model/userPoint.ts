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
 * 数据
 */
export interface UserPoint {
  /** 创建时间 */
  createTime?: string;
  /** 奖励积分 */
  point?: number;
  /** 累计获得积分 */
  pointSum?: number;
  /** 累计兑换代币 */
  tokenSum?: number;
  /** 主键ID */
  uid?: number;
  /** 更新时间 */
  updateTime?: string;
}
