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
 * 竞猜状态
 */
export type GameGuessTotalParamStatusItem =
  (typeof GameGuessTotalParamStatusItem)[keyof typeof GameGuessTotalParamStatusItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameGuessTotalParamStatusItem = {
  betting: "betting",
  process: "process",
  settlement: "settlement",
  completed: "completed",
} as const;
