/**
 * Given a list of teams, we need to expose the teams in different ways:
 * - Criteria 1: depending on the score, order the list from highest to lowest.
 * - Criteria 2: depending on the score, order the list from lowest to highest.
 * - Criteria 3: depending on the player's quantity, show ONLY the teams that has more than 3 players.
 *
 * What you need to implement is:
 * - 3 buttons. Each of them need to execute a criteria.
 * - The list of teams should be updated dynamically depending on the selected filter.
 * - Each team item should display: Team Name / Player’s quantity / Total Score of each team.
 */

import { useState } from "react";
import { TEAMS } from "../data/teams";

const quantityFilteredPlayers = 3;

const reducerScore = (accumulator, current) => accumulator + current.score;

const getTotalScore = (games) => games.reduce(reducerScore, 0);

const renderTeams = (teams) =>
  teams.map((team) => (
    <li key={team.name}>{`${team.name} - ${
      team.players.length
    } - ${getTotalScore(team.games)}`}</li>
  ));

export function TeamsList() {
  const [teams, setTeams] = useState(TEAMS);

  // Order teams by score (highest to lowest)
  function orderTeamByScoreHighestToLowest() {
    // Write your code here
    setTeams(
      [...teams].sort((a, b) => getTotalScore(b.games) - getTotalScore(a.games))
    );
  }

  // Order teams by score (lowest to highest)
  function orderTeamByScoreLowestToHighest() {
    // Write your code here
    setTeams(
      [...teams].sort((a, b) => getTotalScore(a.games) - getTotalScore(b.games))
    );
  }

  // Filtering teams that with at least 3 players
  function teamsWithMoreThanThreePlayers() {
    // Write your code here
    setTeams(
      teams.filter((team) => team.players.length >= quantityFilteredPlayers)
    );
  }

  return (
    <div>
      <button onClick={() => setTeams(TEAMS)}>Initial list</button>

      <button onClick={() => orderTeamByScoreHighestToLowest()}>
        Highest to Lowest
      </button>

      <button onClick={() => orderTeamByScoreLowestToHighest()}>
        Lowest to Highest
      </button>

      <button onClick={() => teamsWithMoreThanThreePlayers()}>
        Teams with at least 3 players
      </button>

      <ul className="teams">{renderTeams(teams)}</ul>
    </div>
  );
}
