import type { Effects, StatKey } from "@/lib/types";

const statKeys: StatKey[] = ["experience", "money"];

export function clampEffectValue(key: StatKey, value: unknown): number {
  const numeric = Number(value) || 0;
  if (!numeric) return 0;
  const amount = Math.abs(numeric);
  if (key === "experience") {
    const next = Math.min(30, Math.max(20, amount));
    return numeric > 0 ? next : -next;
  }
  const next = Math.min(50, Math.max(30, amount));
  return numeric > 0 ? next : -next;
}

export function normalizeEffects(effects?: Effects): Effects | undefined {
  if (!effects) return undefined;
  const next: Effects = {};
  for (const key of statKeys) {
    const value = effects[key];
    if (typeof value === "number" && value !== 0) next[key] = clampEffectValue(key, value);
  }
  return Object.keys(next).length ? next : undefined;
}

export function normalizePositiveEffects(effects: Effects | undefined, fallback: Record<StatKey, number>): Record<StatKey, number> {
  return {
    experience: Math.max(0, clampEffectValue("experience", effects?.experience ?? fallback.experience)),
    money: Math.max(0, clampEffectValue("money", effects?.money ?? fallback.money)),
  };
}

export function normalizePositiveRuleEffects(effects: Effects | undefined, fallback: Record<StatKey, number>): Record<StatKey, number> {
  return {
    experience: Math.max(0, Math.floor(Number(effects?.experience ?? fallback.experience) || 0)),
    money: Math.max(0, Math.floor(Number(effects?.money ?? fallback.money) || 0)),
  };
}
