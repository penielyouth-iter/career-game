export type StatKey = "stamina" | "intelligence" | "eq" | "mood" | "money";
export type Effects = Partial<Record<StatKey, number>>;
export type ResolutionOption = { label: string; effects: Effects; peaceCards?: number; resultDescription?:string };
export type CharacterConfig = { id:string; name:string; job:string; instrument:string; icon:string; color:string; titles:string[]; initial:Record<StatKey,number>; thresholds:Array<{min:Partial<Record<StatKey,number>>;perfect:Partial<Record<StatKey,number>>;milestoneDescription?:string;perfectReward?:Effects;perfectDescription?:string}> };
export type Card = {
  id:string; characterId:string; contentStage:number; type:"chance"|"destiny";
  title:string; description:string; instruction?:string; effects?:Effects; peaceCards?:number;
  resolutionMode?:"automatic"|"task"|"choice";
  task?:boolean; successEffects?:Effects; failureEffects?:Effects;
  successLabel?:string; failureLabel?:string; successPeaceCards?:number; failurePeaceCards?:number; optionA?:ResolutionOption; optionB?:ResolutionOption;
};
export type BoardCell = { id:number; type:string; label:string; icon:string; description:string; effects?:Effects; negative?:boolean; skip?:number; choice?:"overtime"|"class"; startRewards?:Record<string,number> };
export type GameConfig = { title:string; story:string; characters:CharacterConfig[]; cells:BoardCell[]; cards:Card[]; dataRevision?:number };
export type PlayerState = { characterId:string; position:number; stage:number; stats:Record<StatKey,number>; skipTurns:number; peaceCards:number; finishedAt:number|null; decks:Record<string,string[]> };
export type GameState = { started:boolean; turnOrder:string[]; turnIndex:number; round:number; accelerated:boolean; players:Record<string,PlayerState>; log:string[]; lastUpdated:string };

