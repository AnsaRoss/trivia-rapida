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

// Contador global — persiste entre pantallas
let gamesPlayed = 0;
const interstitial = InterstitialAd.createForAdRequest(adUnitId);

export function useInterstitialAd() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });
    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      setLoaded(false);
      interstitial.load();
    });

    interstitial.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
    };
  }, []);

  const showAdIfReady = () => {
    gamesPlayed += 1;
    if (gamesPlayed >= GAME_CONFIG.GAMES_BEFORE_AD && loaded) {
      gamesPlayed = 0;
      interstitial.show();
    }
  };

  return { showAdIfReady };
}
