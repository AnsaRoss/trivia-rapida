export const GAME_CONFIG = {
  // Tiempo por pregunta en segundos (configurable)
  QUESTION_TIMER_SECONDS: 15,

  // Cuántas preguntas por partida
  QUESTIONS_PER_GAME: 12,

  // Puntos por respuesta correcta
  POINTS_PER_CORRECT: 100,

  // Bonus de puntos por responder rápido (dentro de 5 seg)
  SPEED_BONUS_THRESHOLD_SECONDS: 5,
  SPEED_BONUS_POINTS: 50,

  // Cuántas partidas antes de mostrar un ad interstitial
  GAMES_BEFORE_AD: 2,

  // IDs de AdMob (reemplazar con los reales al publicar)
  // Para testing usar los IDs de prueba de Google
  ADMOB_APP_ID: 'ca-app-pub-3940256099942544~3347511713', // TEST ID
  ADMOB_INTERSTITIAL_ID: 'ca-app-pub-3940256099942544/1033173712', // TEST ID
  ADMOB_REWARDED_ID: 'ca-app-pub-3940256099942544/5224354917', // TEST ID

  // Idioma por defecto
  DEFAULT_LANGUAGE: 'es' as 'es' | 'en',
};
