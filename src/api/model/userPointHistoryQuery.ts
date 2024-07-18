/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { PageSort } from "./pageSort";
import type { UserPointHistoryQueryTypesItem } from "./userPointHistoryQueryTypesItem";

export interface UserPointHistoryQuery {
  /** 结束时间戳 */
  endTimestamp?: number;
  /** [分页]当前页，默认为1 */
  pageNum?: number;
  /** [分页]每页大小，默认25，最大10000 */
  pageSize?: number;
  /** [分页]排序列表，例：[{"field":"createTime", "type":"desc"}] */
  sortList?: PageSort[];
  /** 开始时间戳 */
  startTimestamp?: number;
  /** 积分类型 */
  types?: UserPointHistoryQueryTypesItem[];
}
