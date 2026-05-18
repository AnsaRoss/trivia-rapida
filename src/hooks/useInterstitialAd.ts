import { useEffect, useRef, useState } from 'react';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';
import { GAME_CONFIG } from '../config/game.config';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : GAME_CONFIG.ADMOB_INTERSTITIAL_ID;

export function useInterstitialAd() {
  const interstitial = useRef(InterstitialAd.createForAdRequest(adUnitId)).current;
  const [loaded, setLoaded] = useState(false);
  const gamesPlayedRef = useRef(0);

  useEffect(() => {
    const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });
    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      setLoaded(false);
      interstitial.load(); // precarga el siguiente
    });

    interstitial.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
    };
  }, [interstitial]);

  const showAdIfReady = () => {
    gamesPlayedRef.current += 1;
    if (gamesPlayedRef.current >= GAME_CONFIG.GAMES_BEFORE_AD && loaded) {
      gamesPlayedRef.current = 0;
      interstitial.show();
    }
  };

  return { showAdIfReady };
}
