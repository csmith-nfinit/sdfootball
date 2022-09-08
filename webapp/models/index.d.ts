import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type HighSchoolMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlayerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class HighSchool {
  readonly id: string;
  readonly HighSchool?: string | null;
  readonly Address?: string | null;
  readonly HeadCoach?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<HighSchool, HighSchoolMetaData>);
  static copyOf(source: HighSchool, mutator: (draft: MutableModel<HighSchool, HighSchoolMetaData>) => MutableModel<HighSchool, HighSchoolMetaData> | void): HighSchool;
}

export declare class Player {
  readonly id: string;
  readonly fullname: string;
  readonly LastName?: string | null;
  readonly Position?: string | null;
  readonly Grade?: number | null;
  readonly School?: string | null;
  readonly Hudl?: string | null;
  readonly HighSchool?: HighSchool | null;
  readonly image?: string | null;
  readonly FirstName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly playerHighSchoolId?: string | null;
  constructor(init: ModelInit<Player, PlayerMetaData>);
  static copyOf(source: Player, mutator: (draft: MutableModel<Player, PlayerMetaData>) => MutableModel<Player, PlayerMetaData> | void): Player;
}