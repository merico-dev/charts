import { useEffect, useState } from 'react';

function arrayAndSetMatch(array: any, set: any) {
  if ((!array && !set) || (!array.length && !set.size)) {
    return true;
  }
  if (!array || !set) {
    return false;
  }
  if (array.length !== set.size) {
    return false;
  }
  return array.every((item: any) => set.has(item));
}

export function useFilteredSeries(initial: string[], callback?: (newSeries: string[]) => void) {
  const [filtered, setFiltered] = useState<ReadonlySet<string>>(new Set(initial));

  // filtered -> initial
  useEffect(() => {
    if (!callback) {
      return;
    }
    if (arrayAndSetMatch(initial, filtered)) {
      return;
    }

    callback(Array.from(filtered));
  }, [filtered]);

  // initial -> filtered
  useEffect(() => {
    if (arrayAndSetMatch(initial, filtered)) {
      return;
    }
    setFiltered(new Set(initial));
  }, [initial.length]);

  return [filtered, setFiltered] as const;
}
