/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { BaseRestMapStringStringData } from "./baseRestMapStringStringData";

export interface BaseRestMapStringString {
  /** 数据 */
  data?: BaseRestMapStringStringData;
  /** 异常消息 */
  message?: string;
  /** 状态：200=成功 */
  status?: number;
  /** 追踪Id */
  traceId?: string;
}
