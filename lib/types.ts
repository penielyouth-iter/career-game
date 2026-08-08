export type StatKey = "experience" | "money";
export type Effects = Partial<Record<StatKey, number>>;
export type ResolutionOption = { label: string; effects: Effects; resultDescription?:string };
export type CharacterConfig = {
  id:string; name:string; job:string; icon:string; color:string;
  titles:string[]; stageIntros:string[]; initial:Record<StatKey,number>; milestones:string[]; cards:Card[];
};
export type Card = {
  id:string; characterId:string; contentStage:number; type:"chance"|"destiny";
  title:string; description:string; instruction?:string; effects?:Effects;
  resolutionMode?:"automatic"|"task"|"choice";
  task?:boolean; successEffects?:Effects; failureEffects?:Effects;
  successLabel?:string; failureLabel?:string; optionA?:ResolutionOption; optionB?:ResolutionOption;
};
export type BoardCell = {
  id:number; type:string; label:string; icon:string; description:string;
  effects?:Effects; skip?:number; move?:number; choice?:"charity"|"support"|"teamGrowth";
};
export type GameRules = { stageThresholds:number[]; startReward:Record<StatKey,number>; startingMoney:number };
export type GameConfig = { title:string; story:string; characters:CharacterConfig[]; cells:BoardCell[]; rules:GameRules };
export type PlayerState = {
  characterId:string; portraitId?:string; position:number; stage:number; stats:Record<StatKey,number>;
  skipTurns:number; finishedAt:number|null; finishRank?:number; decks:Record<string,string[]>; stageIntroSeen:number[];
};
export type GameState = {
  started:boolean; turnOrder:string[]; turnIndex:number; round:number; accelerated:boolean;
  players:Record<string,PlayerState>; log:string[]; lastUpdated:string;
};
