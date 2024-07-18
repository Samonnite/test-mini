/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { UserPointHistoryType } from "./userPointHistoryType";

/**
 * 分页数据
 */
export interface UserPointHistory {
  /** 创建时间 */
  createTime?: string;
  /** 主键ID */
  id?: number;
  /** 奖励积分 */
  point?: number;
  /** 积分类型 */
  type?: UserPointHistoryType;
  /** 积分类型文本 */
  typeText?: string;
  /** 用户UID */
  uid?: number;
  /** 更新时间 */
  updateTime?: string;
}
