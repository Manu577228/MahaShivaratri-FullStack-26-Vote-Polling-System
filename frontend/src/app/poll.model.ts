export interface OptionVote {
    optionText : string;
    voteCount: number;
}

export interface Poll {
  id?: number;   // optional
  question: string;
  options: OptionVote[];
}



