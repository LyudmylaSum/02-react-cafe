import css from "./App.module.css";
import { useState } from "react";
import type { Votes, VoteType } from "../../types/votes.ts";
import CafeInfo from "../CafeInfo/CafeInfo.tsx";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";

const initialVotes: Votes = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [votes, setVotes] = useState<Votes>(initialVotes);

  const handleVote = (key: keyof Votes) => {
    setVotes({
      ...votes,
      [key]: votes[key] + 1,
    });
  };

  const resetVotes = () => {
    setVotes(initialVotes);
  };

  const totalVoit = votes.good + votes.bad + votes.neutral;
  const canReset = totalVoit > 0;

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={canReset}
        />
      </div>
    </>
  );
}
