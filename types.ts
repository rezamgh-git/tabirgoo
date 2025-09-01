export type Mode = "traditional" | "scientific" | "both";

export interface InterpretRequest {
  text: string;
  mode: Exclude<Mode, "both">;
}

export interface ProviderGenerateArgs {
  system: string;
  prompt: string;
  stream?: boolean;
  temperature?: number;
}