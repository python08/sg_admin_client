export const FESTIVALS = {
  0: 'all',
  1: 'ganeshCharturti',
  2: 'holi',
  3: 'diwali',
  4: 'sanskrant',
} as const;

// 👇️ type Keys = "id" | "name" | "salary"
type Keys = keyof typeof FESTIVALS;

// 👇️ type Values = 1 | "Bobby Hadz" | 100
export type FestivalsE = (typeof FESTIVALS)[Keys];
