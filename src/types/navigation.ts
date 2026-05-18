export type RootStackParamList = {
  Home: undefined;
  CategorySelect: undefined;
  Game: {
    category: string | 'all';
  };
  Results: {
    score: number;
    correctAnswers: number;
    totalQuestions: number;
    category: string;
  };
  HighScores: undefined;
};
