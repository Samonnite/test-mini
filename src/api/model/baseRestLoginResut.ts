/* eslint-disable */
// @ts-nocheck
/**
 *
 * Do not edit manually.
 * 后端接口平台
 * 后端接口平台，包含前台接口和后台管理接口
 * OpenAPI spec version: 1.0.0
 */
import type { LoginResut } from "./loginResut";

export interface BaseRestLoginResut {
  data?: LoginResut;
  message?: string;
  status?: number;
  traceId?: string;
}
