import { Dispatch, MutableRefObject, SetStateAction, useCallback, useEffect } from 'react';
import { getElementDimensions } from 'src/shared/utils';

interface SectionRef {
  section: string;
  ref: MutableRefObject<any>;
}

interface SectionState {
  visibleSection: string;
  setVisibleSection: Dispatch<SetStateAction<string>>;
}

export function useSticky(refs: SectionRef[], { visibleSection, setVisibleSection }: SectionState) {
  const debounce = useCallback((func, wait = 20, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getElementDimensions(refs[0].ref.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = refs.find(({ section, ref }) => {
        const element = ref.current;
        const { offsetBottom, offsetTop } = getElementDimensions(element);
        // TODO: Return true if at the end of current section
        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();

    window.addEventListener('scroll', debounce(handleScroll));
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [debounce, refs, setVisibleSection, visibleSection]);
}
