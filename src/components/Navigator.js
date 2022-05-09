import React, {useEffect, useState, useReducer} from 'react';
import {CurrSectionContext} from '../context/curr_section_context';
import Hero from './Hero';
import scrollAnimation from '../assets/lotties/scroll-lottie.json';
import styled from 'styled-components';
import Lottie from 'react-lottie';


const LottieWrapper = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
`;

export default function Navigator({sectionRefs, children}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scrollAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };


  const [childScroll, setChildScroll] = useState(0);
  const [currSection, setCurrSection] = useState();
  const [isLottieVisible, setIsLottieVisible] = useState(true);

  const minimizedReducer = (state, action) => ({isMinimized: !state.isMinimized, minimizedPos: action});
  const [minimizedObj, dispatch] = useReducer(minimizedReducer, {isMinimized: false, minimizedPos: null});

  const _minimizedCallBack = (_, pos) => {
    dispatch(pos);
    if (minimizedObj.isMinimized) {
      setIsLottieVisible(true);
    } else {
      setIsLottieVisible(false);
    }
  };
  useEffect(() => {
    const handleScroll = (_) => {
      // Change scroll position only when hero hasnt been minimized (for its height to change) or
      // when it is at the point where the commandline was minimized (to trigger the maximize animation)
      if (!minimizedObj.isMinimized || window.scrollY < minimizedObj.minimizedPos) {
        setChildScroll(window.scrollY);
      }
      setCurrSection(_getCurrSectionKey());
    };

    const _getCurrSectionKey = () => {
      let minValue = Infinity;
      let minKey;
      Object.keys(sectionRefs).forEach((key, _) => {
        const el = sectionRefs[key];
        if (el !== null && typeof el !== 'undefined') {
          const elOffset = Math.abs(el.getBoundingClientRect().top);
          if (elOffset < minValue) {
            minKey = key;
            minValue = elOffset;
          }
        }
      });
      return minKey;
    };
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs, minimizedObj]);


  const scrollTo = async (section) => {
    sectionRefs[section]?.scrollIntoView();
  };


  return <CurrSectionContext.Provider value={currSection}>
    <Hero minimizedCallback={_minimizedCallBack} isMinimized={minimizedObj.isMinimized} currSection={currSection} scrollPosition={childScroll} scrollTo={scrollTo}></Hero>
    {children}
    {isLottieVisible && <LottieWrapper>
      <Lottie options={defaultOptions}
        height={80}
        width={80}
        isStopped={false}
        isPaused={false} />

    </LottieWrapper>}

  </CurrSectionContext.Provider>;
}
